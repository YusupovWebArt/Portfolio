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

export interface ChatHistoryEntry {
  role?: string
  from?: string
  content?: string
  text?: string
}

export interface LocalSynthesisOptions {
  projectSlug?: string
  projectTitle?: string
  locale?: 'en' | 'ua' | 'es'
  history?: ChatHistoryEntry[]
  answeredQuestions?: string[]
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

const GENERIC_QUERY_WORDS: ReadonlySet<string> = new Set([
  'project',
  'projects',
  'portfolio',
  'website',
  'websites',
  'simple',
  'react',
  'nextjs',
  'wordpress',
  'shopify',
  'javascript',
  'vanilla',
  'custom',
  'design',
  'online',
  'service',
  'services',
  'system',
  'solution',
  'solutions',
  'cloud',
  'security',
  'migration',
  'ecommerce',
  'retail',
  'architecture',
  'feature',
  'features',
  'stack',
  'technology',
  'technologies',
  'experience',
  'contact',
  'about',
  'artur',
  'yusupov',
  'built',
  'using',
  'which',
  'where',
  'there',
  'what',
  'have',
  'your',
  'work',
  'best',
  'tell',
])

/**
 * Optimal string alignment (Damerau-Levenshtein) distance supporting
 * insertions, deletions, substitutions, and adjacent character transpositions.
 */
export function damerauLevenshteinDistance(a: string, b: string): number {
  const lenA = a.length
  const lenB = b.length
  if (lenA === 0) return lenB
  if (lenB === 0) return lenA

  const dp: number[][] = Array.from({ length: lenA + 1 }, () =>
    new Array<number>(lenB + 1).fill(0),
  )

  for (let i = 0; i <= lenA; i++) dp[i][0] = i
  for (let j = 0; j <= lenB; j++) dp[0][j] = j

  for (let i = 1; i <= lenA; i++) {
    for (let j = 1; j <= lenB; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost,
      )
      if (
        i > 1 &&
        j > 1 &&
        a[i - 1] === b[j - 2] &&
        a[i - 2] === b[j - 1]
      ) {
        dp[i][j] = Math.min(dp[i][j], dp[i - 2][j - 2] + 1)
      }
    }
  }

  return dp[lenA][lenB]
}

/**
 * Resolves a project from query text using exact title/slug matching,
 * compact hyphenless matching (e.g. "itmagic"), and typo-tolerant fuzzy matching (e.g. "untirition").
 */
export function resolveProjectFromQuery(
  query: string,
): { slug: string; project: Project } | undefined {
  const trimmed = query ? query.trim() : ''
  if (!trimmed) return undefined

  const lower = foldForSearch(trimmed)

  // 1. Exact title or slug substring match
  const exact = projectRegistry.find(
    (p) =>
      lower.includes(foldForSearch(p.project.title)) ||
      (p.slug.length > 3 && lower.includes(p.slug.toLowerCase())),
  )
  if (exact) return exact

  // 2. Compact alphanumeric match for multi-word slugs (e.g. "itmagic" -> "it-magic")
  const tokens = lower
    .split(/[^a-z0-9]+/)
    .filter((t) => t.length >= 5 && !GENERIC_QUERY_WORDS.has(t))

  if (tokens.length === 0) return undefined

  for (const token of tokens) {
    for (const entry of projectRegistry) {
      const slugCompact = entry.slug.toLowerCase().replace(/[^a-z0-9]/g, '')
      if (slugCompact.length >= 6 && (token === slugCompact || (token.length >= 7 && slugCompact.startsWith(token)))) {
        return entry
      }
    }
  }

  // 3. Typo-tolerant Damerau-Levenshtein matching against distinct project slugs/tokens
  let bestEntry: { slug: string; project: Project } | undefined
  let bestDist = Infinity

  for (const token of tokens) {
    for (const entry of projectRegistry) {
      const slugCompact = entry.slug.toLowerCase().replace(/[^a-z0-9]/g, '')
      const candidates = [
        slugCompact,
        ...entry.slug
          .toLowerCase()
          .split('-')
          .filter((part) => part.length >= 5 && !GENERIC_QUERY_WORDS.has(part)),
      ]

      for (const candidate of candidates) {
        if (Math.abs(token.length - candidate.length) > 2) continue
        const maxAllowed = candidate.length >= 7 ? 2 : 1
        const dist = damerauLevenshteinDistance(token, candidate)
        if (dist <= maxAllowed && dist < bestDist) {
          bestDist = dist
          bestEntry = entry
        }
      }
    }
  }

  return bestEntry
}

/**
 * Infers the active project from conversation history when a follow-up question
 * (e.g. "What tech stack was used there?") omits the project name.
 */
export function inferProjectFromHistory(
  history?: ChatHistoryEntry[],
  currentProjectSlug?: string,
): { slug: string; project: Project } | undefined {
  if (currentProjectSlug) {
    const found = projectRegistry.find(
      (p) => p.slug.toLowerCase() === currentProjectSlug.toLowerCase(),
    )
    if (found) return found
  }

  if (!history || history.length === 0) return undefined

  for (let i = history.length - 1; i >= 0; i--) {
    const msg = history[i]
    const content = msg?.content || msg?.text || ''
    if (!content) continue
    // Only inspect user messages or short contextual messages to avoid matching generic welcome text
    if (msg.role === 'assistant' || msg.from === 'bot') {
      if (content.includes('70 portfolio case studies') || content.includes('70+ web projects')) {
        continue
      }
    }
    const resolved = resolveProjectFromQuery(content)
    if (resolved) return resolved
  }

  return undefined
}

export function isHireOrContactQuery(query: string): boolean {
  const lower = foldForSearch(query || '')
  return /(hire|rates|pricing|price|cost|contact|reach|email|telegram|whatsapp|freelance|contract|available|availability|resume|\bcv\b|найняти|послуги|ціни|вартість|контакт|зв'яз|резюме|contratar|servicios|precio|tarifa|contacto|disponib|curriculum)/i.test(
    lower,
  )
}

function resolveTargetProject(
  query: string,
  options: LocalSynthesisOptions = {},
): { slug: string; project: Project } | undefined {
  const lower = foldForSearch(query || '')

  const isGeneralOrShowcase =
    /(who is artur|about yourself|quien es artur|хто такий артур|how many years|скільки років|cuantos anos|where are you located|де ви знаходитесь|donde estas|services|rates|cost|hire|послуги|ціни|precio|contratar|what projects|best projects|all projects|show me.*projects|яких проєкт|які проєкти|que proyectos)/i.test(
      lower,
    )

  const byQuery = resolveProjectFromQuery(query)
  if (byQuery) return byQuery

  if (options.projectSlug) {
    const bySlug = projectRegistry.find(
      (p) => p.slug.toLowerCase() === options.projectSlug?.toLowerCase(),
    )
    if (bySlug) return bySlug
  }

  if (options.projectTitle) {
    const byTitle = projectRegistry.find(
      (p) => p.project.title.toLowerCase() === options.projectTitle?.toLowerCase(),
    )
    if (byTitle) return byTitle
  }

  if (!isGeneralOrShowcase && options.history && options.history.length > 0) {
    return inferProjectFromHistory(options.history)
  }

  return undefined
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

  // 2. Resolve target project from query, options, or conversational history
  const resolvedEntry = resolveTargetProject(trimmed, options)
  const matchedProject = resolvedEntry?.project

  // 3. If a project is targeted and the query is not a general profile/services question
  const isGeneralProfileOrServiceQuestion =
    /(who is artur|about yourself|quien es artur|хто такий артур|how many years|скільки років|cuantos anos|where are you located|де ви знаходитесь|donde estas|services|rates|cost|послуги|ціни|precio)/i.test(
      lower,
    )

  if (matchedProject && !isGeneralProfileOrServiceQuestion) {
    if (/(tech\s*stack|technologies|stack|used|built with|tecnolog|стек|технолог)/i.test(lower)) {
      return stripEmDashes(formatProjectStack(matchedProject, lang))
    }
    if (
      /(feature|main features|functionality|funciones|caracteristicas|фіч|функці|можливост|возможност|особенност)/i.test(
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
    currentProjectSlug: resolvedEntry?.slug || options.projectSlug,
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
  const resolved = resolveTargetProject(query, options)
  if (resolved) {
    return `Hybrid RAG · ${stripEmDashes(resolved.project.title)} Case Study`
  }

  if (options.projectTitle) {
    return `Hybrid RAG · ${stripEmDashes(options.projectTitle)} Case Study`
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

  // 1. Check if query mentions a specific project (including typo-tolerant match) or has active context
  const resolved = resolveTargetProject(trimmed, options)
  if (resolved) {
    return [toProjectCardItem(resolved.slug, resolved.project, lang)]
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

/**
 * Generates 3 contextual follow-up prompt suggestions tailored to the current conversation state.
 */
export function getContextualFollowUps(
  query: string,
  options: LocalSynthesisOptions = {},
): string[] {
  const trimmed = query ? query.trim() : ''
  const lower = foldForSearch(trimmed)
  const lang = options.locale || detectLanguage(trimmed)
  const answeredSet = new Set(
    (options.answeredQuestions || []).map((q) => foldForSearch(q)),
  )
  answeredSet.add(lower)

  const resolved = resolveTargetProject(trimmed, options)
  if (resolved) {
    const title = stripEmDashes(resolved.project.title)
    const askedStack = /(tech\s*stack|technologies|stack|used|built with|tecnolog|стек|технолог)/i.test(lower)
    const askedArch = /(architect|arquitectura|архітектур|архитектур|challenge|solution)/i.test(lower)
    const askedFeatures = /(feature|main features|functionality|funciones|caracteristicas|фіч|функці)/i.test(lower)

    const candidates: Array<{ skip: boolean; text: string }> =
      lang === 'ua'
        ? [
            { skip: askedStack, text: `Який стек технологій використано в ${title}?` },
            { skip: askedArch, text: `Яка архітектура та рішення в ${title}?` },
            { skip: askedFeatures, text: `Які основні функції має ${title}?` },
            { skip: false, text: 'Які проєкти ви створили? / Портфоліо' },
          ]
        : lang === 'es'
          ? [
              { skip: askedStack, text: `¿Qué stack tecnológico se usó en ${title}?` },
              { skip: askedArch, text: `¿Cuál es la arquitectura de ${title}?` },
              { skip: askedFeatures, text: `¿Cuáles son las funciones principales de ${title}?` },
              { skip: false, text: '¿Qué proyectos has completado? / Cuéntame sobre tu trabajo' },
            ]
          : [
              { skip: askedStack, text: `What tech stack was used in ${title}?` },
              { skip: askedArch, text: `How is ${title} architected?` },
              { skip: askedFeatures, text: `What are the key features of ${title}?` },
              { skip: false, text: 'What projects have you completed? / Tell me about your work' },
            ]

    return candidates
      .filter((c) => !c.skip && !answeredSet.has(foldForSearch(c.text)))
      .map((c) => c.text)
      .slice(0, 3)
  }

  const isProjectsShowcaseQuery =
    /(projects|tell me about your work|completed|show me.*project|portfolio|проєкт|портфоліо|проект|портфолио|proyectos|portafolio|trabajo)/i.test(
      lower,
    )

  if (isProjectsShowcaseQuery) {
    const showcaseFollowUps =
      lang === 'ua'
        ? [
            'Яка архітектура та рішення в IT-Magic?',
            'Який стек технологій використано в Unitrition?',
            'Які послуги ви надаєте? / Чи можна вас найняти?',
          ]
        : lang === 'es'
          ? [
              '¿Cuál es la arquitectura de IT-Magic?',
              '¿Qué stack tecnológico se usó en Unitrition?',
              '¿Qué servicios ofreces? / ¿Puedo contratarte?',
            ]
          : [
              'How is IT-Magic architected?',
              'What tech stack was used in Unitrition?',
              'What services do you offer? / Can I hire you?',
            ]
    return showcaseFollowUps.filter((q) => !answeredSet.has(foldForSearch(q))).slice(0, 3)
  }

  return FAQ.map((faq) =>
    lang === 'ua' ? faq.questionUa : lang === 'es' ? faq.questionEs : faq.question,
  )
    .filter((q) => !answeredSet.has(foldForSearch(q)))
    .slice(0, 3)
}


