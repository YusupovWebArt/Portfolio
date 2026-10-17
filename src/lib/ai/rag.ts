import { getAllKnowledgeChunks, KnowledgeChunk } from './knowledge'
import { projectRegistry } from '../projectRegistry'
import { FAQ, getBotAnswer } from '../../data/chatFaq'
import type { Project, TechnologyItem } from '../../components/projects/project-types'
import {
  tokenize,
  expandTokens,
  detectLanguage,
  foldForSearch,
  stripEmDashes,
} from './text'

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

export type QueryIntent =
  | 'service'
  | 'profile'
  | 'contact'
  | 'methodology'
  | 'project-aspect'
  | 'general'

/**
 * Calculates cosine similarity between two dense numeric vectors.
 */
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

/**
 * Classifies high-level user intent to prevent project context hijacking.
 */
export function detectQueryIntent(query: string): QueryIntent {
  const lower = foldForSearch(query)

  if (
    /(service|services|pricing|price|rates|cost|hire|b2b|offer|послуг|цін|вартіст|цена|стоимост|servicios|servicio|precio|contratar|tarifas)/i.test(
      lower,
    )
  ) {
    return 'service'
  }

  if (
    /(who\s+is|who\s+are\s+you|about\s+artur|about\s+yourself|bio|developer|engineer|experience|years\s+of|location|spain|seville|хто|про\s+себе|досвід|опыт|quien|sobre\s+ti|experiencia|donde)/i.test(
      lower,
    )
  ) {
    return 'profile'
  }

  if (
    /(contact|email|phone|whatsapp|telegram|linkedin|reach|call|контакт|зв'язат|написат|contacto|escribir)/i.test(
      lower,
    )
  ) {
    return 'contact'
  }

  if (
    /(methodology|sdd|tdd|vitest|playwright|wcag|eaa|accessibility|devsecops|quality|ai-harness|методолог|тест)/i.test(
      lower,
    )
  ) {
    return 'methodology'
  }

  if (
    /(tech\s*stack|stack|technologies|features|architecture|challenges|solutions|case\s*study|стек|функці|архітектур|funciones|arquitectura)/i.test(
      lower,
    )
  ) {
    return 'project-aspect'
  }

  return 'general'
}

interface IndexedChunk {
  chunk: KnowledgeChunk
  docLength: number
  termFrequencies: Map<string, number>
}

interface BM25Index {
  indexedChunks: IndexedChunk[]
  docFrequencies: Map<string, number>
  totalDocs: number
  avgDocLength: number
}

let cachedIndex: BM25Index | null = null

function buildBM25Index(chunks: KnowledgeChunk[]): BM25Index {
  const indexedChunks: IndexedChunk[] = []
  const docFrequencies = new Map<string, number>()
  let totalLength = 0

  for (const chunk of chunks) {
    const combinedText = [
      chunk.title,
      chunk.content,
      chunk.contentUa || '',
      chunk.contentEs || '',
      chunk.technologies?.join(' ') || '',
      chunk.category || '',
      chunk.metadata?.keywords?.join(' ') || '',
    ].join(' ')

    const tokens = tokenize(combinedText)
    const termFrequencies = new Map<string, number>()
    const seenInDoc = new Set<string>()

    for (const token of tokens) {
      termFrequencies.set(token, (termFrequencies.get(token) || 0) + 1)
      if (!seenInDoc.has(token)) {
        seenInDoc.add(token)
        docFrequencies.set(token, (docFrequencies.get(token) || 0) + 1)
      }
    }

    const docLength = tokens.length
    totalLength += docLength

    indexedChunks.push({
      chunk,
      docLength,
      termFrequencies,
    })
  }

  const totalDocs = chunks.length
  const avgDocLength = totalDocs > 0 ? totalLength / totalDocs : 1

  return {
    indexedChunks,
    docFrequencies,
    totalDocs,
    avgDocLength,
  }
}

function getBM25Index(): BM25Index {
  if (!cachedIndex) {
    const chunks = getAllKnowledgeChunks()
    cachedIndex = buildBM25Index(chunks)
  }
  return cachedIndex
}

/**
 * Resets BM25 index cache (useful during test teardown).
 */
export function resetBM25Index(): void {
  cachedIndex = null
}

/**
 * Legitimate BM25 information retrieval pipeline with:
 * - Inverse Document Frequency (IDF)
 * - Document length normalization (k1=1.2, b=0.75)
 * - Multilingual query expansion across EN/UA/ES
 * - Intent-gated active project context boosting
 */
export function retrieveKnowledge(
  query: string,
  options: RetrievalOptions = {},
): RetrievalResult[] {
  const trimmed = query ? query.trim() : ''
  if (!trimmed) {
    return []
  }

  const { topK = 4, currentProjectSlug, minScore = 0.1 } = options
  const index = getBM25Index()
  const intent = detectQueryIntent(trimmed)

  // 1. Multilingual tokenization and synonym expansion
  const baseTokens = tokenize(trimmed)
  if (baseTokens.length === 0) {
    return []
  }
  const queryTokens = expandTokens(baseTokens)
  const lowerQuery = foldForSearch(trimmed)

  // BM25 parameters
  const k1 = 1.2
  const b = 0.75

  const results: RetrievalResult[] = []

  // Check if query explicitly mentions the current project or other project titles
  const isQuerySpecificallyAboutCurrentProject =
    Boolean(currentProjectSlug) &&
    (lowerQuery.includes(currentProjectSlug!.toLowerCase()) ||
      intent === 'project-aspect')

  // Check if query is an intent that should NOT be hijacked by active project
  const isGeneralIntentQuery =
    intent === 'service' ||
    intent === 'profile' ||
    intent === 'contact' ||
    intent === 'methodology'

  for (const { chunk, docLength, termFrequencies } of index.indexedChunks) {
    let score = 0
    const matchReasons: string[] = []

    // 2. Legitimate BM25 scoring across all query tokens
    for (const token of queryTokens) {
      const tf = termFrequencies.get(token) || 0
      if (tf > 0) {
        const df = index.docFrequencies.get(token) || 1
        // Standard Robertson-Sparck Jones BM25 IDF
        const idf = Math.log(
          (index.totalDocs - df + 0.5) / (df + 0.5) + 1,
        )

        const lengthNorm = 1 - b + b * (docLength / index.avgDocLength)
        const termScore = idf * ((tf * (k1 + 1)) / (tf + k1 * lengthNorm))

        score += termScore
        if (!matchReasons.includes(`bm25-match:${token}`)) {
          matchReasons.push(`bm25-match:${token}`)
        }
      }
    }

    // 3. Intent-Gated Active Project Boost (resolves Finding C)
    if (
      currentProjectSlug &&
      chunk.slug?.toLowerCase() === currentProjectSlug.toLowerCase()
    ) {
      if (!isGeneralIntentQuery || isQuerySpecificallyAboutCurrentProject) {
        const boost = isQuerySpecificallyAboutCurrentProject ? 4.0 : 2.5
        score += boost
        matchReasons.push('active-project-context')
      }
    }

    // 4. Exact Title Match (non-empty query tokens)
    const lowerTitle = foldForSearch(chunk.title)
    if (lowerTitle.includes(lowerQuery) || (lowerQuery.length > 3 && lowerTitle.includes(lowerQuery))) {
      score += 3.5
      matchReasons.push('title-match')
    }

    // 5. Technology Match (capped bonus)
    if (chunk.technologies && chunk.technologies.length > 0) {
      let matchedTechCount = 0
      for (const tech of chunk.technologies) {
        const lowerTech = foldForSearch(tech)
        if (lowerTech.length >= 2 && lowerQuery.includes(lowerTech)) {
          matchedTechCount++
          if (matchedTechCount <= 2) {
            score += 1.5
            matchReasons.push(`tech-match:${tech}`)
          }
        }
      }
    }

    // 6. Profile Intent Match
    if (chunk.type === 'profile' && intent === 'profile') {
      score += 6.0
      matchReasons.push('profile-intent')
    }

    // 7. Service & Pricing Intent Match
    if (chunk.type === 'service' && intent === 'service') {
      score += 6.0
      matchReasons.push('service-intent')
    }

    // 8. Methodology Intent Match
    if (chunk.type === 'methodology' && intent === 'methodology') {
      score += 6.0
      matchReasons.push('methodology-intent')
    }

    if (score >= minScore) {
      results.push({
        chunk,
        score: Math.round(score * 100) / 100,
        matchReasons,
      })
    }
  }

  // Sort descending by relevance score
  results.sort((a, b) => b.score - a.score)

  // Deduplicate faceted chunks if parent is already included
  const finalResults: RetrievalResult[] = []
  const seenSlugsOrIds = new Set<string>()

  for (const item of results) {
    const key = item.chunk.parentId || item.chunk.id
    if (!seenSlugsOrIds.has(key) || finalResults.length < 2) {
      finalResults.push(item)
      seenSlugsOrIds.add(key)
    }
    if (finalResults.length >= topK) break
  }

  return finalResults
}

/**
 * Formats retrieved knowledge chunks into clean, injection-safe markdown
 * for LLM system prompts with strict token budgets and zero em dashes.
 */
export function formatContextForLLM(
  results: RetrievalResult[],
  maxChars = 3500,
): string {
  if (results.length === 0) return ''

  const lines: string[] = ['### Relevant Knowledge Base Chunks:']
  let currentLength = lines[0].length

  for (const item of results) {
    const facetInfo = item.chunk.facet ? ` · ${item.chunk.facet.toUpperCase()}` : ''
    const chunkBlock = `
#### [${item.chunk.type.toUpperCase()}${facetInfo}] ${item.chunk.title} (Relevance Score: ${item.score})
${item.chunk.content}
`
    if (currentLength + chunkBlock.length > maxChars) {
      break
    }
    lines.push(chunkBlock)
    currentLength += chunkBlock.length
  }

  return stripEmDashes(lines.join('\n'))
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
  const trimmed = query ? query.trim() : ''
  const lower = foldForSearch(trimmed)
  const lang = options.locale || detectLanguage(trimmed)

  // 1. Check if query is an exact match for one of the general FAQ questions
  for (const item of FAQ) {
    if (
      lower === foldForSearch(item.question) ||
      lower === foldForSearch(item.questionUa) ||
      lower === foldForSearch(item.questionEs)
    ) {
      return stripEmDashes(getBotAnswer(trimmed, lang))
    }
  }

  // 2. Resolve target project from options or query text
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
        lower.includes(foldForSearch(p.project.title)) ||
        (p.slug.length > 3 && lower.includes(p.slug.toLowerCase())),
    )
    if (byQuery) {
      matchedProject = byQuery.project
    }
  }

  // 3. If a project is targeted and the query is not a general profile/services question
  const isGeneralProfileOrServiceQuestion =
    /(who is artur|about yourself|quién es artur|хто такий артур|how many years|скільки років|cuántos años|where are you located|де ви знаходитесь|dónde estás|services|rates|cost|послуги|ціни|precio)/i.test(
      lower,
    )

  if (matchedProject && !isGeneralProfileOrServiceQuestion) {
    if (/(tech\s*stack|technologies|stack|used|built with|tecnolog|стек|технолог)/i.test(lower)) {
      return stripEmDashes(formatProjectStack(matchedProject, lang))
    }
    if (
      /(feature|main features|functionality|funciones|características|фіч|функці|можливост|возможност|особенност)/i.test(
        lower,
      )
    ) {
      return stripEmDashes(formatProjectFeatures(matchedProject, lang))
    }
    if (
      /(architect|arquitectura|архітектур|архитектур|challenge|solution|case study|how it works|как устроен|як влаштован)/i.test(
        lower,
      )
    ) {
      return stripEmDashes(formatProjectArchitecture(matchedProject, lang))
    }
    return stripEmDashes(formatProjectOverview(matchedProject, lang))
  }

  // 4. General FAQ keyword matching
  for (const item of FAQ) {
    if (item.keywords.some((kw) => lower.includes(foldForSearch(kw)))) {
      return stripEmDashes(getBotAnswer(trimmed, lang))
    }
  }

  // 5. Hybrid RAG retrieval across all chunks
  const retrieved = retrieveKnowledge(trimmed, {
    currentProjectSlug: options.projectSlug,
    topK: 2,
  })

  if (retrieved.length > 0) {
    const top = retrieved[0].chunk
    if (top.type === 'project' && top.slug) {
      const proj = projectRegistry.find((p) => p.slug === top.slug)?.project
      if (proj) {
        return stripEmDashes(formatProjectOverview(proj, lang))
      }
    }
    const text =
      lang === 'es' && top.contentEs
        ? top.contentEs
        : lang === 'ua' && top.contentUa
          ? top.contentUa
          : top.content
    return stripEmDashes(text)
  }

  return stripEmDashes(getBotAnswer(trimmed, lang))
}

export function getRagSourceLabel(
  query: string,
  options: LocalSynthesisOptions = {},
): string {
  const lower = foldForSearch(query)

  if (options.projectTitle) {
    return `Hybrid RAG · ${stripEmDashes(options.projectTitle)} Case Study`
  }
  if (options.projectSlug) {
    const found = projectRegistry.find(
      (p) => p.slug.toLowerCase() === options.projectSlug?.toLowerCase(),
    )
    if (found) {
      return `Hybrid RAG · ${stripEmDashes(found.project.title)} Case Study`
    }
  }

  const byQuery = projectRegistry.find(
    (p) =>
      lower.includes(foldForSearch(p.project.title)) ||
      (p.slug.length > 3 && lower.includes(p.slug.toLowerCase())),
  )
  if (byQuery) {
    return `Hybrid RAG · ${stripEmDashes(byQuery.project.title)} Case Study`
  }

  return 'Hybrid RAG · 70-Project Knowledge Base'
}

export interface ChatProjectCardItem {
  slug: string
  title: string
  description: string
  image: string
  category: string
  liveUrl?: string
  githubUrl?: string
}

function toProjectCardItem(
  slug: string,
  project: Project,
  lang: 'en' | 'ua' | 'es',
): ChatProjectCardItem {
  const rawDesc =
    lang === 'es' && project.descriptionEs
      ? project.descriptionEs
      : lang === 'ua' && project.descriptionUa
        ? project.descriptionUa
        : project.description

  return {
    slug,
    title: stripEmDashes(project.title),
    description: stripEmDashes(rawDesc),
    image: project.image,
    category: project.category?.[0] || 'Web Development',
    liveUrl: project.liveUrl && project.liveUrl !== '#' ? project.liveUrl : undefined,
    githubUrl: project.githubUrl && project.githubUrl !== '#' ? project.githubUrl : undefined,
  }
}

export function getRelevantProjectCards(
  query: string,
  options: LocalSynthesisOptions = {},
): ChatProjectCardItem[] {
  const trimmed = query ? query.trim() : ''
  if (!trimmed) return []

  const lower = foldForSearch(trimmed)
  const lang = options.locale || detectLanguage(trimmed)

  const isGeneralProfileOrServiceQuestion =
    /(who is artur|about yourself|quien es artur|хто такий артур|how many years|скільки років|cuantos anos|where are you located|де ви знаходитесь|donde estas|services|rates|cost|hire|послуги|ціни|precio|contratar|workflow|ai & rag|seo|english|motivat)/i.test(
      lower,
    )

  if (isGeneralProfileOrServiceQuestion) {
    return []
  }

  // 1. Check if query mentions a specific project or has active project context
  const byQuery = projectRegistry.find(
    (p) =>
      lower.includes(foldForSearch(p.project.title)) ||
      (p.slug.length > 3 && lower.includes(p.slug.toLowerCase())),
  )
  if (byQuery) {
    return [toProjectCardItem(byQuery.slug, byQuery.project, lang)]
  }

  if (options.projectSlug) {
    const byContext = projectRegistry.find(
      (p) => p.slug.toLowerCase() === options.projectSlug?.toLowerCase(),
    )
    if (byContext) {
      return [toProjectCardItem(byContext.slug, byContext.project, lang)]
    }
  }

  // 2. Check if user is asking to see completed projects / portfolio / work examples
  const isProjectsShowcaseQuery =
    /(projects|tell me about your work|completed|show me.*project|portfolio|проєкт|портфоліо|проект|портфолио|proyectos|portafolio|trabajo)/i.test(
      lower,
    )

  if (isProjectsShowcaseQuery) {
    const flagshipSlugs = ['it-magic', 'unitrition']
    const cards: ChatProjectCardItem[] = []
    for (const slug of flagshipSlugs) {
      const entry = projectRegistry.find((p) => p.slug === slug)
      if (entry) {
        cards.push(toProjectCardItem(entry.slug, entry.project, lang))
      }
    }
    return cards
  }

  // 3. Check high-confidence BM25 project matches for domain queries (e.g. "AWS", "Shopify")
  const retrieved = retrieveKnowledge(trimmed, { topK: 2 })
  const seenSlugs = new Set<string>()
  const matchedCards: ChatProjectCardItem[] = []
  for (const r of retrieved) {
    if (r.chunk.type === 'project' && r.chunk.slug && r.score >= 3.0 && !seenSlugs.has(r.chunk.slug)) {
      const entry = projectRegistry.find((p) => p.slug === r.chunk.slug)
      if (entry) {
        seenSlugs.add(entry.slug)
        matchedCards.push(toProjectCardItem(entry.slug, entry.project, lang))
      }
    }
  }

  return matchedCards
}

