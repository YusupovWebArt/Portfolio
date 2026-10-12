import { getAllKnowledgeChunks, KnowledgeChunk } from './knowledge'
import { projectRegistry } from '../projectRegistry'
import { FAQ, getBotAnswer } from '../../data/chatFaq'
import type { Project, TechnologyItem } from '../../components/projects/project-types'

export interface RetrievalOptions {
  topK?: number
  currentProjectSlug?: string
  minScore?: number
}

export interface RetrievalResult {
  chunk: KnowledgeChunk
  score: number
  matchReasons: string[]
}

export interface LocalSynthesisOptions {
  projectSlug?: string
  projectTitle?: string
  locale?: 'en' | 'ua' | 'es'
}

export function calculateCosineSimilarity(vecA: number[], vecB: number[]): number {
  if (vecA.length === 0 || vecB.length === 0 || vecA.length !== vecB.length) return 0

  let dotProduct = 0
  let normA = 0
  let normB = 0

  for (let i = 0; i < vecA.length; i++) {
    dotProduct += vecA[i] * vecB[i]
    normA += vecA[i] * vecA[i]
    normB += vecB[i] * vecB[i]
  }

  const denominator = Math.sqrt(normA) * Math.sqrt(normB)
  if (denominator === 0) return 0

  return dotProduct / denominator
}

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, ' ')
    .split(/\s+/)
    .filter((t) => t.length > 1)
}

export function retrieveKnowledge(
  query: string,
  options: RetrievalOptions = {},
): RetrievalResult[] {
  const { topK = 4, currentProjectSlug, minScore = 0.1 } = options
  const allChunks = getAllKnowledgeChunks()
  const queryTokens = tokenize(query)
  const lowerQuery = query.toLowerCase()

  const results: RetrievalResult[] = []

  for (const chunk of allChunks) {
    let score = 0
    const matchReasons: string[] = []

    // 1. Active project context boost
    if (currentProjectSlug && chunk.slug?.toLowerCase() === currentProjectSlug.toLowerCase()) {
      score += 15.0
      matchReasons.push('active-project-context')
    }

    // 2. Exact Title Match
    const lowerTitle = chunk.title.toLowerCase()
    if (lowerQuery.includes(lowerTitle) || lowerTitle.includes(lowerQuery)) {
      score += 6.0
      matchReasons.push('title-match')
    }

    // 3. Technology Match
    if (chunk.technologies && chunk.technologies.length > 0) {
      for (const tech of chunk.technologies) {
        const lowerTech = tech.toLowerCase()
        if (lowerQuery.includes(lowerTech)) {
          score += 4.0
          matchReasons.push(`tech-match:${tech}`)
        }
      }
    }

    // 4. Intent & Profile Match
    if (
      chunk.type === 'profile' &&
      /(who\s+is|about|artur|yusupov|bio|experience|location|developer|engineer|кто|про себе)/i.test(
        lowerQuery,
      )
    ) {
      score += 5.0
      matchReasons.push('profile-intent')
    }

    // 5. Service & Pricing Match
    if (
      chunk.type === 'service' &&
      /(service|cost|price|hire|b2b|offer|услуг|цін|precio|contratar)/i.test(lowerQuery)
    ) {
      score += 5.0
      matchReasons.push('service-intent')
    }

    // 6. Token overlap with content
    const lowerContent = chunk.content.toLowerCase()
    let tokenOverlapCount = 0
    for (const token of queryTokens) {
      if (lowerContent.includes(token)) {
        tokenOverlapCount++
      }
    }

    if (tokenOverlapCount > 0) {
      const overlapScore = (tokenOverlapCount / Math.max(queryTokens.length, 1)) * 3.0
      score += overlapScore
      matchReasons.push(`token-overlap:${tokenOverlapCount}`)
    }

    if (score >= minScore) {
      results.push({
        chunk,
        score: Math.round(score * 100) / 100,
        matchReasons,
      })
    }
  }

  // Sort descending by score
  results.sort((a, b) => b.score - a.score)

  return results.slice(0, topK)
}

export function formatContextForLLM(results: RetrievalResult[], maxChars = 4000): string {
  if (results.length === 0) return ''

  const lines: string[] = ['### Relevant Knowledge Base Chunks:']
  let currentLength = lines[0].length

  for (const item of results) {
    const chunkBlock = `
#### [${item.chunk.type.toUpperCase()}] ${item.chunk.title} (Relevance Score: ${item.score})
${item.chunk.content}
`
    if (currentLength + chunkBlock.length > maxChars) {
      break
    }
    lines.push(chunkBlock)
    currentLength += chunkBlock.length
  }

  // Enforce zero em dashes
  return lines.join('\n').replace(/[\u2014\u2013]/g, '-')
}

function formatTechItems(items?: TechnologyItem[]): string {
  if (!items || items.length === 0) return ''
  return items.map((t) => (typeof t === 'string' ? t : t.full || t.short)).join(', ')
}

function formatProjectStack(project: Project, lang: 'en' | 'ua' | 'es'): string {
  if (Array.isArray(project.technologies)) {
    const list = formatTechItems(project.technologies)
    if (lang === 'es') return `Stack tecnológico de ${project.title}: ${list}`
    if (lang === 'ua') return `Технологічний стек проєкту ${project.title}: ${list}`
    return `Technology stack used in ${project.title}: ${list}`
  }

  const t = project.technologies
  const sections: string[] = []

  const addSection = (label: string, items?: TechnologyItem[]) => {
    const formatted = formatTechItems(items)
    if (formatted) sections.push(`- ${label}: ${formatted}`)
  }

  addSection('Frontend', t.frontend)
  addSection('Backend', t.backend)
  addSection('CMS', t.contentManagement)
  addSection('API & Integrations', t.api)
  addSection('DevOps & Security', t.devopsSecurity)
  addSection('Optimization', t.technicalOptimization)
  addSection('SEO', t.seo)
  addSection('Analytics', t.analytics)
  addSection('AI Tools', t.aiTools)

  const header =
    lang === 'es'
      ? `Stack tecnológico utilizado en ${project.title}:`
      : lang === 'ua'
        ? `Технологічний стек проєкту ${project.title}:`
        : `Technology stack used in ${project.title}:`

  return `${header}\n${sections.join('\n')}`
}

function formatProjectFeatures(project: Project, lang: 'en' | 'ua' | 'es'): string {
  const lines: string[] = []
  if (Array.isArray(project.features)) {
    for (const f of project.features.slice(0, 6)) {
      if (typeof f === 'string') {
        lines.push(`- ${f}`)
      } else if (f && typeof f === 'object' && 'title' in f) {
        lines.push(`- ${f.title}: ${f.description}`)
      }
    }
  }

  const header =
    lang === 'es'
      ? `Funciones principales de ${project.title}:`
      : lang === 'ua'
        ? `Основні функції проєкту ${project.title}:`
        : `Key features of ${project.title}:`

  if (lines.length === 0) {
    const desc =
      lang === 'es' && project.descriptionEs
        ? project.descriptionEs
        : lang === 'ua' && project.descriptionUa
          ? project.descriptionUa
          : project.description
    return `${header}\n${desc}`
  }

  return `${header}\n${lines.join('\n')}`
}

function formatProjectArchitecture(project: Project, lang: 'en' | 'ua' | 'es'): string {
  const parts: string[] = []
  const header =
    lang === 'es'
      ? `Arquitectura e ingeniería de ${project.title}:`
      : lang === 'ua'
        ? `Архітектура та інженерія проєкту ${project.title}:`
        : `Architecture and engineering of ${project.title}:`

  parts.push(header)

  if (project.architecture) {
    if (project.architecture.description) {
      parts.push(project.architecture.description)
    }
    if (project.architecture.rows && project.architecture.rows.length > 0) {
      const flows = project.architecture.rows.map(
        (r) => `- ${r.rowLabel}: ${r.steps.map((s) => s.label).join(' -> ')}`,
      )
      parts.push(flows.join('\n'))
    }
  }

  if (project.challenges && project.challenges.length > 0) {
    const chLabel =
      lang === 'es' ? 'Desafíos clave:' : lang === 'ua' ? 'Ключові виклики:' : 'Key challenges:'
    parts.push(
      `${chLabel}\n${project.challenges
        .slice(0, 3)
        .map((c) => `- ${c}`)
        .join('\n')}`,
    )
  }

  if (project.solutions && project.solutions.length > 0) {
    const solLabel =
      lang === 'es'
        ? 'Soluciones implementadas:'
        : lang === 'ua'
          ? 'Реалізовані рішення:'
          : 'Solutions implemented:'
    parts.push(
      `${solLabel}\n${project.solutions
        .slice(0, 3)
        .map((s) => `- ${s}`)
        .join('\n')}`,
    )
  }

  return parts.join('\n\n')
}

function formatProjectOverview(project: Project, lang: 'en' | 'ua' | 'es'): string {
  const desc =
    lang === 'es' && project.fullDescriptionEs
      ? project.fullDescriptionEs
      : lang === 'ua' && project.fullDescriptionUa
        ? project.fullDescriptionUa
        : project.fullDescription || project.description

  const parts: string[] = [`${project.title} - ${desc}`]

  if (project.detailMetrics && project.detailMetrics.length > 0) {
    const metricsStr = project.detailMetrics.map((m) => `${m.label}: ${m.value}`).join(' | ')
    const mLabel = lang === 'es' ? 'Métricas' : lang === 'ua' ? 'Метрики' : 'Metrics'
    parts.push(`${mLabel}: ${metricsStr}`)
  }

  if (project.liveUrl && project.liveUrl !== '#') {
    parts.push(`Live URL: ${project.liveUrl}`)
  }

  return parts.join('\n\n')
}

/**
 * Autonomous local RAG synthesis engine.
 * Generates accurate, structured, multilingual answers directly from the local
 * portfolio knowledge base and project registry without requiring an external LLM API key.
 */
export function synthesizeLocalRagAnswer(
  query: string,
  options: LocalSynthesisOptions = {},
): string {
  const lower = query.toLowerCase().trim()

  // 1. Detect effective language
  let lang: 'en' | 'ua' | 'es' = options.locale || 'en'
  if (/[а-яіїєґё]/i.test(query)) {
    lang = 'ua'
  } else if (/[¿¡áéíóúñ]|\b(qué|cuáles|háblame|sobre|tecnológico|funciones|arquitectura)\b/i.test(query)) {
    lang = 'es'
  }

  // 2. Check if query is an exact click on one of the general FAQ questions
  for (const item of FAQ) {
    if (
      lower === item.question.toLowerCase() ||
      lower === item.questionUa.toLowerCase() ||
      lower === item.questionEs.toLowerCase()
    ) {
      return getBotAnswer(query, lang).replace(/[\u2014\u2013]/g, '-')
    }
  }

  // 3. Resolve target project from options or query text
  let matchedProject: Project | undefined

  if (options.projectSlug) {
    matchedProject = projectRegistry.find(
      (p) => p.slug.toLowerCase() === options.projectSlug?.toLowerCase(),
    )?.project
  }
  if (!matchedProject && options.projectTitle) {
    matchedProject = projectRegistry.find(
      (p) => p.project.title.toLowerCase() === options.projectTitle?.toLowerCase(),
    )?.project
  }
  if (!matchedProject) {
    // Check if query explicitly mentions any project title or slug
    const byQuery = projectRegistry.find(
      (p) =>
        lower.includes(p.project.title.toLowerCase()) ||
        (p.slug.length > 3 && lower.includes(p.slug.toLowerCase())),
    )
    if (byQuery) {
      matchedProject = byQuery.project
    }
  }

  // 4. If a project is targeted and the query is not a general profile/bio question
  const isGeneralProfileQuestion =
    /(who is artur|about yourself|quién es artur|хто такий артур|how many years|скільки років|cuántos años|where are you located|де ви знаходитесь|dónde estás)/i.test(
      lower,
    )

  if (matchedProject && !isGeneralProfileQuestion) {
    if (/(tech\s*stack|technologies|stack|used|built with|tecnolog|стек|технолог)/i.test(lower)) {
      return formatProjectStack(matchedProject, lang).replace(/[\u2014\u2013]/g, '-')
    }
    if (
      /(feature|main features|functionality|funciones|características|фіч|функці|можливост|возможност|особенност)/i.test(
        lower,
      )
    ) {
      return formatProjectFeatures(matchedProject, lang).replace(/[\u2014\u2013]/g, '-')
    }
    if (
      /(architect|arquitectura|архітектур|архитектур|challenge|solution|case study|how it works|как устроен|як влаштован)/i.test(
        lower,
      )
    ) {
      return formatProjectArchitecture(matchedProject, lang).replace(/[\u2014\u2013]/g, '-')
    }
    return formatProjectOverview(matchedProject, lang).replace(/[\u2014\u2013]/g, '-')
  }

  // 5. General FAQ keyword matching
  for (const item of FAQ) {
    if (item.keywords.some((kw) => lower.includes(kw))) {
      return getBotAnswer(query, lang).replace(/[\u2014\u2013]/g, '-')
    }
  }

  // 6. Hybrid RAG retrieval across all chunks
  const retrieved = retrieveKnowledge(query, {
    currentProjectSlug: options.projectSlug,
    topK: 2,
  })

  if (retrieved.length > 0) {
    const top = retrieved[0].chunk
    if (top.type === 'project' && top.slug) {
      const proj = projectRegistry.find((p) => p.slug === top.slug)?.project
      if (proj) {
        return formatProjectOverview(proj, lang).replace(/[\u2014\u2013]/g, '-')
      }
    }
    const text =
      lang === 'es' && top.contentEs
        ? top.contentEs
        : lang === 'ua' && top.contentUa
          ? top.contentUa
          : top.content
    return text.replace(/[\u2014\u2013]/g, '-')
  }

  return getBotAnswer(query, lang).replace(/[\u2014\u2013]/g, '-')
}
