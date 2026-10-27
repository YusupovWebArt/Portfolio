import { getAllKnowledgeChunks, KnowledgeChunk } from './knowledge'
import { projectRegistry } from '../projectRegistry'
import { FAQ, getBotAnswer, matchesFaqKeyword } from '../../data/chatFaq'
import type { Project, TechnologyItem } from '../../components/projects/project-types'
import {
  allBlogPosts,
  getBlogPostBySlug,
  getBlogTitle,
  getBlogDescription,
  getBlogCategoryLabel,
  getBlogReadTime,
  getBlogTldr,
  type BlogPost,
} from '../../data/blog'
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
  | 'blog'
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
    /(blog|article|articles|writeup|read\s+about|статт|стат|блог|допис|дописи|articulo|articulos)/i.test(
      lower,
    )
  ) {
    return 'blog'
  }

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
    intent === 'methodology' ||
    intent === 'blog'

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

    // 9. Blog Intent Match
    if (chunk.type === 'blog' && intent === 'blog') {
      score += 6.0
      matchReasons.push('blog-intent')
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
        const feat = f as {
          title: string
          titleUa?: string
          titleEs?: string
          description: string
          descriptionUa?: string
          descriptionEs?: string
        }
        const fTitle =
          lang === 'es' && feat.titleEs
            ? feat.titleEs
            : lang === 'ua' && feat.titleUa
              ? feat.titleUa
              : feat.title
        const fDesc =
          lang === 'es' && feat.descriptionEs
            ? feat.descriptionEs
            : lang === 'ua' && feat.descriptionUa
              ? feat.descriptionUa
              : feat.description
        lines.push(`- ${fTitle}: ${fDesc}`)
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
    const archDesc =
      lang === 'es' && project.architecture.descriptionEs
        ? project.architecture.descriptionEs
        : lang === 'ua' && project.architecture.descriptionUa
          ? project.architecture.descriptionUa
          : project.architecture.description
    if (archDesc) {
      parts.push(archDesc)
    }
    if (project.architecture.rows && project.architecture.rows.length > 0) {
      const flows = project.architecture.rows.map(
        (r) => `- ${r.rowLabel}: ${r.steps.map((s) => s.label).join(' -> ')}`,
      )
      parts.push(flows.join('\n'))
    }
  }

  const localizedChallenges =
    lang === 'es' && project.challengesEs?.length
      ? project.challengesEs
      : lang === 'ua' && project.challengesUa?.length
        ? project.challengesUa
        : project.challenges

  if (localizedChallenges && localizedChallenges.length > 0) {
    const chLabel =
      lang === 'es' ? 'Desafíos clave:' : lang === 'ua' ? 'Ключові виклики:' : 'Key challenges:'
    parts.push(
      `${chLabel}\n${localizedChallenges
        .slice(0, 3)
        .map((c) => `- ${c}`)
        .join('\n')}`,
    )
  }

  const localizedSolutions =
    lang === 'es' && project.solutionsEs?.length
      ? project.solutionsEs
      : lang === 'ua' && project.solutionsUa?.length
        ? project.solutionsUa
        : project.solutions

  if (localizedSolutions && localizedSolutions.length > 0) {
    const solLabel =
      lang === 'es'
        ? 'Soluciones implementadas:'
        : lang === 'ua'
          ? 'Реалізовані рішення:'
          : 'Solutions implemented:'
    parts.push(
      `${solLabel}\n${localizedSolutions
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
      if (
        content.includes('70 portfolio case studies') ||
        content.includes('71 portfolio case studies') ||
        content.includes('70+ web projects')
      ) {
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

export function isStackComparisonQuery(query: string): boolean {
  const lower = foldForSearch(query || '')
  return /(vs|versus|compare|comparison|which stack|what tech to choose|what tech is better|which tech|better|wordpress.*next|next.*wordpress|react.*next|shopify.*wordpress|порівня|порівняти|що краще|вибрати стек|разница|что лучше|сравнить|сравнение|comparar|comparativa|que elegir|diferencia entre)/i.test(
    lower,
  )
}

export function isEstimateOrCalculatorQuery(query: string): boolean {
  const lower = foldForSearch(query || '')
  return /(estimate|estimator|timeline|calculator|how long|timeframe|scope|phases|duration|термін|оцінка|термінів|калькулятор|тривалість|скільки часу|этапы|сроки|калькулятор|сколько времени|tiempo|plazos|calculadora|cuanto tiempo|duracion|fases)/i.test(
    lower,
  )
}

export function isBestProjectsQuery(query: string): boolean {
  const lower = foldForSearch(query || '')
  const hasBest = /(best|top|featured|dest|bedt|highlight|showcase|flagship|кращ|кращі|кращих|найкращ|лучш|лучшие|лучших|топ|mejores|destacados)/i.test(
    lower,
  )
  const hasProjectsWord = /(project|work|portfolio|case|example|sample|проєкт|проект|робіт|работ|портфоліо|портфолио|кейси|кейсы|proyecto|trabajo)/i.test(
    lower,
  )
  return hasBest && (hasProjectsWord || lower.length < 16)
}

export function isPersonalProjectsQuery(query: string): boolean {
  const lower = foldForSearch(query || '')
  return /(personal|own|pet project|flagship product|авторськ|власн|личн|собственн|propios|personal)/i.test(
    lower,
  ) && /(project|app|platform|portfolio|product|work|проєкт|проект|додат|продукт|платформ|робот|proyecto|aplicacion|producto)/i.test(
    lower,
  )
}

export function isBlogArticlesQuery(query: string): boolean {
  const lower = foldForSearch(query || '')
  return /(blog|article|articles|writeup|read\s+about|статт|стат|блог|допис|дописи|articulo|articulos)/i.test(
    lower,
  )
}

/**
 * Resolves the appropriate response language by analyzing query characters first
 * (Cyrillic -> 'ua', Spanish markers -> 'es', neutral / English -> preferredLocale or 'en').
 */
export function resolveResponseLanguage(
  query: string,
  preferredLocale?: 'en' | 'ua' | 'es',
): 'en' | 'ua' | 'es' {
  const trimmed = query ? query.trim() : ''
  if (!trimmed) return preferredLocale || 'en'

  // Cyrillic characters (Russian or Ukrainian queries) -> 'ua'
  if (/[а-яіїєґё]/i.test(trimmed)) {
    return 'ua'
  }

  // Spanish diacritics or explicit Spanish query keywords
  if (
    /[¿¡áéíóúüñ]/i.test(trimmed) ||
    /\b(que|como|para|por|con|sobre|servicios|hola|quien|cuales|cuanto|experiencia|proyectos|desarrollo|buenas)\b/i.test(
      trimmed,
    )
  ) {
    return 'es'
  }

  // Explicit English query markers
  if (
    /\b(what|how|why|who|where|which|when|can you|tell me|show me|do you|experience|stack|skills|projects|pricing|rates|portfolio|hello|hi|build|develop)\b/i.test(
      trimmed,
    )
  ) {
    return 'en'
  }

  return preferredLocale || detectLanguage(trimmed)
}

/**
 * Resolves a blog post from query text or options context.
 */
export function resolveBlogFromQueryOrContext(
  query: string,
  options: LocalSynthesisOptions = {},
): BlogPost | undefined {
  const trimmed = query ? query.trim() : ''
  const lower = foldForSearch(trimmed)

  // If query is specifically asking about a project, showcase or category, do not let options context hijack it
  const isProjectOrCategoryQuery =
    Boolean(trimmed) &&
    (Boolean(resolveProjectFromQuery(trimmed)) ||
      isBestProjectsQuery(trimmed) ||
      isPersonalProjectsQuery(trimmed) ||
      Boolean(resolveCategoryOrTechShowcase(trimmed, options.preferredLocale || 'en')))

  // 1. Direct slug match from options.projectSlug (only if query does not target a project/category)
  if (!isProjectOrCategoryQuery && options.projectSlug) {
    const bySlug = getBlogPostBySlug(options.projectSlug)
    if (bySlug) return bySlug
  }

  // 2. Direct title match from options.projectTitle (only if query does not target a project/category)
  if (!isProjectOrCategoryQuery && options.projectTitle) {
    const byTitle = allBlogPosts.find(
      (p) =>
        foldForSearch(p.title.en) === foldForSearch(options.projectTitle!) ||
        foldForSearch(p.title.ua) === foldForSearch(options.projectTitle!) ||
        foldForSearch(p.title.es) === foldForSearch(options.projectTitle!),
    )
    if (byTitle) return byTitle
  }

  if (!trimmed) return undefined

  // 3. Query contains exact blog slug or titles
  for (const post of allBlogPosts) {
    if (lower.includes(post.slug.toLowerCase())) {
      return post
    }
    const tEn = foldForSearch(post.title.en)
    const tUa = foldForSearch(post.title.ua)
    const tEs = foldForSearch(post.title.es)
    if (
      (tEn.length > 8 && lower.includes(tEn)) ||
      (tUa.length > 8 && lower.includes(tUa)) ||
      (tEs.length > 8 && lower.includes(tEs))
    ) {
      return post
    }
  }

  // 4. Distinct article topical phrases
  if (/\b(wcag|eaa\b|european accessibility|accessibility act|доступност|доступность|accesibilidad)/i.test(lower)) {
    return getBlogPostBySlug('wcag-22-aa-european-accessibility-act-2026')
  }

  if (/\b(zero[\s-]*trust|client[\s-]*side security|обфускац)/i.test(lower)) {
    return getBlogPostBySlug('client-side-zero-trust-security')
  }

  if (/\b(hybrid[\s-]*rag|browser[\s-]*rag|in[\s-]*browser rag|раг|векторн.*браузер)/i.test(lower)) {
    return getBlogPostBySlug('autonomous-hybrid-rag-architecture-browser')
  }

  if (/\b(core web vitals|cwv|bundle optimization|бандл|inp < 50)/i.test(lower)) {
    return getBlogPostBySlug('sub-second-cwv-bundle-optimization')
  }

  if (/\b(shopify.*woocommerce|woocommerce.*shopify|liquid.*woocommerce)/i.test(lower)) {
    return getBlogPostBySlug('shopify-liquid-vs-custom-woocommerce')
  }

  if (/\b(next\.?js.*headless|headless.*next\.?js|headless.*wordpress)/i.test(lower)) {
    return getBlogPostBySlug('nextjs-vs-headless-wordpress-custom-php-2026')
  }

  if (/\b(legacy migration|zero[\s-]*downtime migration|міграці.*хмар|миграци.*облак)/i.test(lower)) {
    return getBlogPostBySlug('legacy-migration-cloud-infrastructure')
  }

  return undefined
}

/**
 * Formats a blog article into a rich markdown response with link, TL;DR, and applied case studies.
 */
export function formatBlogPostDetails(post: BlogPost, lang: 'en' | 'ua' | 'es'): string {
  const title = getBlogTitle(post, lang)
  const desc = getBlogDescription(post, lang)
  const categoryLabel = getBlogCategoryLabel(post, lang)
  const readTime = getBlogReadTime(post, lang)
  const tldr = getBlogTldr(post, lang)
  const articleUrl = `/${lang}/blog/${post.slug}`

  const lines: string[] = [
    `### [${title}](${articleUrl})`,
    `*${categoryLabel} · ${readTime}*`,
    '',
    desc,
  ]

  if (tldr && tldr.length > 0) {
    const tldrHeader =
      lang === 'ua'
        ? 'Ключові архітектурні тези:'
        : lang === 'es'
          ? 'Conclusiones arquitectónicas clave:'
          : 'Key Architectural Takeaways:'
    lines.push('', tldrHeader)
    tldr.forEach((item) => {
      lines.push(`- ${item}`)
    })
  }

  if (post.appliedProjects && post.appliedProjects.length > 0) {
    const appliedHeader =
      lang === 'ua'
        ? 'Практичне впровадження у реальних кейсах:'
        : lang === 'es'
          ? 'Implementación práctica en proyectos reales:'
          : 'Production implementation in case studies:'
    lines.push('', appliedHeader)
    post.appliedProjects.forEach((p) => {
      const note = p.note[lang] || p.note.en
      lines.push(`- **${p.name}**: ${note}`)
    })
  }

  const readMoreText =
    lang === 'ua'
      ? `Повний технічний розбір читайте у статті: [Читати статтю](${articleUrl})`
      : lang === 'es'
        ? `Lee el análisis técnico completo en: [Leer artículo](${articleUrl})`
        : `Read the full architectural case study: [Read Full Article](${articleUrl})`

  lines.push('', readMoreText)
  return lines.join('\n')
}

export interface CategoryShowcaseResult {
  category: string
  answer: string
  projectSlugs: string[]
}

export function resolveCategoryOrTechShowcase(
  query: string,
  lang: 'en' | 'ua' | 'es',
): CategoryShowcaseResult | undefined {
  const trimmed = query ? query.trim() : ''
  const lower = foldForSearch(trimmed)

  if (isStackComparisonQuery(query) || isEstimateOrCalculatorQuery(query)) {
    return undefined
  }

  // 1. Shopify & E-commerce
  if (
    /(shopify|шопифай|шопіфай)/i.test(lower) ||
    (/(e[\s-]*commerce|онлайн[\s-]*магазин|інтернет[\s-]*магазин|tienda online)/i.test(lower) &&
      !/(vs|versus|compare|порівня)/i.test(lower))
  ) {
    const projectSlugs = ['kidzely', 'artezioeu', 'cartooniko', 'prezentify', 'secondchancedecor']
    const answer =
      lang === 'ua'
        ? 'Я розробляю високонавантажені e-commerce рішення на Shopify Liquid та кастомні інтернет-магазини:\n\n' +
          '- **Kidzely**: Міжнародний магазин дитячих товарів із оптимізованим чекаутом, мобільним UX та високою швидкістю завантаження.\n' +
          '- **Artezio EU**: Європейський інтернет-магазин із підтримкою мультивалютності та автоматизацією складських залишків.\n' +
          '- **Cartooniko**: Інтерактивна платформа дитячих товарів із кастомною темою Liquid та інтеграціями додатків.\n' +
          '- **Prezentify**: Подарунковий e-commerce портал із гнучкими фільтрами та адаптивним кошиком.\n\n' +
          'Нижче доступні картки цих проєктів із переходом до повних кейсів:'
        : lang === 'es'
          ? 'Desarrollo soluciones de comercio electrónico de alto rendimiento en Shopify Liquid y tiendas a medida:\n\n' +
            '- **Kidzely**: Tienda internacional con checkout optimizado, experiencia móvil fluida y alta velocidad de carga.\n' +
            '- **Artezio EU**: Tienda europea multimoneda con sincronización automática de inventario.\n' +
            '- **Cartooniko**: Plataforma interactiva con tema personalizado en Liquid e integraciones de aplicaciones.\n' +
            '- **Prezentify**: Tienda de regalos con filtros dinámicos y carrito optimizado.\n\n' +
            'A continuación puedes explorar las tarjetas interactivas de estos proyectos:'
          : 'I develop high-performance e-commerce solutions using Shopify Liquid and tailored online storefronts:\n\n' +
            '- **Kidzely**: International consumer e-commerce store with optimized checkout velocity, mobile UX, and high conversion speed.\n' +
            '- **Artezio EU**: European multi-currency storefront with automated inventory management and ERP sync.\n' +
            '- **Cartooniko**: Interactive retail store featuring custom Liquid templating and third-party app integration.\n' +
            '- **Prezentify**: Gift commerce portal with responsive product filtering and frictionless cart workflows.\n\n' +
            'Explore the project case studies below:'

    return { category: 'Shopify & E-Commerce', answer, projectSlugs }
  }

  // 2. AWS & Cloud Infrastructure
  if (/(aws\b|amazon web services|cloud delivery|хмарн.*інфраструктур|infraestructura cloud)/i.test(lower)) {
    const projectSlugs = [
      'it-magic',
      'aws-migration-services',
      'aws-for-ecommerce',
      'cloud-delivery-solution',
    ]
    const answer =
      lang === 'ua'
        ? 'У моєму портфоліо представлена серія enterprise-проєктів для хмарної інфраструктури AWS та консалтингу:\n\n' +
          '- **IT-Magic**: Офіційний корпоративний портал для провідного AWS Advanced Consulting Partner із кастомною архітектурою та високим SEO-рейтингом.\n' +
          '- **AWS Migration Services**: Спеціалізований B2B-портал міграції інфраструктури в AWS без простою бізнес-процесів.\n' +
          '- **AWS for E-commerce**: Хмарна масштабована архітектура для онлайн-рітейлу з високою доступністю 99.99%.\n' +
          '- **Cloud Delivery Solution**: Рішення доставки контенту через глобальний CloudFront CDN та сертифікати безпеки SSL/TLS.\n\n' +
          'Ознайомтеся з кейсами цих проєктів нижче:'
        : lang === 'es'
          ? 'Cuento con una amplia experiencia en proyectos empresariales y consultoría sobre infraestructura AWS Cloud:\n\n' +
            '- **IT-Magic**: Portal corporativo para socio consultor de AWS con arquitectura PHP limpia y excelente posicionamiento SEO.\n' +
            '- **AWS Migration Services**: Portal B2B especializado en migración a la nube de AWS con cero tiempo de inactividad.\n' +
            '- **AWS for E-commerce**: Arquitectura cloud elástica para retail online con 99.99% de disponibilidad.\n' +
            '- **Cloud Delivery Solution**: Distribución de contenido global mediante CloudFront CDN y cifrado SSL/TLS.\n\n' +
            'A continuación puedes acceder a los casos de estudio detallados:'
          : 'My portfolio includes a specialized series of enterprise projects for AWS Cloud infrastructure and consulting:\n\n' +
            '- **IT-Magic**: Corporate platform for a leading AWS Advanced Consulting Partner with bespoke architecture and top Google rankings.\n' +
            '- **AWS Migration Services**: High-conversion B2B portal for zero-downtime enterprise AWS cloud migrations.\n' +
            '- **AWS for E-commerce**: Elastic cloud architecture for high-traffic retail platforms guaranteeing 99.99% uptime.\n' +
            '- **Cloud Delivery Solution**: High-availability CDN delivery network powered by AWS CloudFront and automated SSL/TLS.\n\n' +
            'Explore the detailed case study cards below:'

    return { category: 'AWS Cloud Infrastructure', answer, projectSlugs }
  }

  // 3. WordPress & Custom PHP
  if (/(wordpress projects|wordpress сайти|проєкти на wordpress|сайты на вордпресс|proyectos wordpress|temas wordpress)/i.test(lower)) {
    const projectSlugs = [
      'it-magic',
      'aws-migration-services',
      'front-desk-helpers',
      'adwoods-design',
    ]
    const answer =
      lang === 'ua'
        ? 'У напрямку WordPress я спеціалізуюся на чистій кастомній розробці (PHP 8+, ACF Pro, Tailwind CSS) без важких конструкторів:\n\n' +
          '- **IT-Magic**: Корпоративний enterprise-портал для AWS Advanced Partner із оцінкою 95+ Lighthouse.\n' +
          '- **AWS Migration Services**: B2B-сервіс із кастомними типами записів (CPT) та оптимізованими формами конверсії.\n' +
          '- **Front Desk Helpers**: Масштабний портал аутсорсингових сервісів із кастомною структурою блогу та бази знань.\n' +
          '- **Adwoods Design**: Креативний сайт агентства із плавною анімацією та адаптивним каталогом робіт.\n\n' +
          'Нижче доступні картки проєктів із переглядом технологічного стеку та живих сайтів:'
        : lang === 'es'
          ? 'En el ecosistema WordPress me enfoco en desarrollo a medida (PHP 8+, ACF Pro, Tailwind CSS) sin constructores pesados:\n\n' +
            '- **IT-Magic**: Portal empresarial para socio consultor de AWS con rendimiento 95+ Lighthouse.\n' +
            '- **AWS Migration Services**: Portal B2B con tipos de contenido personalizados (CPT) y flujos de conversión ágiles.\n' +
            '- **Front Desk Helpers**: Gran plataforma corporativa con blog técnico y base de conocimientos optimizada.\n' +
            '- **Adwoods Design**: Sitio para agencia creativa con animaciones fluidas y catálogo interactivo.\n\n' +
            'A continuación puedes ver las tarjetas interactivas de estos proyectos:'
          : 'In the WordPress ecosystem, I specialize in clean bespoke engineering (PHP 8+, ACF Pro, Tailwind CSS) without heavy visual builders:\n\n' +
            '- **IT-Magic**: Enterprise corporate portal for an AWS Advanced Partner scoring 95+ on Google Lighthouse.\n' +
            '- **AWS Migration Services**: High-impact B2B platform with bespoke Custom Post Types and optimized lead funnels.\n' +
            '- **Front Desk Helpers**: Scalable outsourcing service platform with custom knowledge base and multi-tier blog.\n' +
            '- **Adwoods Design**: Creative agency web platform featuring fluid UI transitions and portfolio taxonomy.\n\n' +
            'Explore the interactive project cards below:'

    return { category: 'Custom WordPress & PHP', answer, projectSlugs }
  }

  // 4. Next.js & Modern React
  if (/(next\.?js projects|nextjs projects|проєкти на next|react projects|проєкти на react|proyectos next|proyectos react)/i.test(lower)) {
    const projectSlugs = [
      'yusupovartur-nextjs-portfolio',
      'wpskills',
      'unitrition',
      'webart-react-portfolio',
    ]
    const answer =
      lang === 'ua'
        ? 'У напрямку Next.js 16 та React 19 я створюю надшвидкі масштабовані веб-платформи:\n\n' +
          '- **Next.js 16 Portfolio Platform**: Повноцінна fullstack-платформа на React 19 Server Components із автономним Hybrid RAG AI-рушієм, SSG 213+ сторінками та WCAG 2.2 AA.\n' +
          '- **Fullstack AI Lab**: Інтерактивна інженерна освітня платформа на Next.js 16, React 19, нативному Rust-компіляторі MDX-RS (1 135+ уроків), симуляторах рантайму, WASM-пісочниці та Supabase.\n' +
          '- **Unitrition**: Платформа персоналізованого харчування на Next.js 16 App Router, Headless WordPress, Supabase та USDA API.\n' +
          '- **My React Portfolio Website**: Високопродуктивний SPA на React 19, TypeScript та Tailwind CSS v4 із Vitest тест-сьютом.\n\n' +
          'Ознайомтеся з картками проєктів нижче:'
        : lang === 'es'
          ? 'En Next.js 16 y React 19 desarrollo plataformas web ultrarrápidas y accesibles:\n\n' +
            '- **Next.js 16 Portfolio Platform**: Plataforma fullstack con React 19 Server Components, motor Hybrid RAG autónomo, 213+ páginas SSG y WCAG 2.2 AA.\n' +
            '- **Fullstack AI Lab**: Plataforma educativa interactiva de ingeniería con Next.js 16, React 19, compilador Rust MDX-RS (1.135+ lecciones), simuladores, sandbox WASM y Supabase.\n' +
            '- **Unitrition**: Plataforma de nutrición con Next.js 16 App Router, Headless WordPress, Supabase y API de USDA.\n' +
            '- **My React Portfolio Website**: Aplicación SPA de alto rendimiento con React 19, TypeScript y pruebas Vitest.\n\n' +
            'Explora los proyectos a continuación:'
          : 'In Next.js 16 and React 19, I architect sub-second, accessible web applications:\n\n' +
            '- **Next.js 16 Portfolio Platform**: Enterprise fullstack system with React 19 Server Components, autonomous Hybrid RAG, 213+ SSG pages, and WCAG 2.2 AA.\n' +
            '- **Fullstack AI Lab**: Interactive engineering educational platform built with Next.js 16, React 19, native Rust MDX-RS compilation (1,135+ lessons), runtime simulators, in-browser WASM playground, and Supabase.\n' +
            '- **Unitrition**: Personalized nutrition modeling platform built with Next.js 16 App Router, Headless WordPress, Supabase, and USDA API.\n' +
            '- **My React Portfolio Website**: High-performance single page application built with React 19, TypeScript, and 29 Vitest specs.\n\n' +
            'Explore the project cards below:'

    return { category: 'Next.js & React Applications', answer, projectSlugs }
  }

  return undefined
}

export function resolveTargetProject(
  query: string,
  options: LocalSynthesisOptions = {},
): { slug: string; project: Project } | undefined {
  const lower = foldForSearch(query || '')

  if (
    isBestProjectsQuery(query) ||
    isPersonalProjectsQuery(query) ||
    isBlogArticlesQuery(query) ||
    Boolean(resolveBlogFromQueryOrContext(query, options))
  ) {
    return undefined
  }

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
  const lang = resolveResponseLanguage(trimmed, options.locale)

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

  // 2. Dedicated query routing for stack comparison & timeline estimation
  if (isStackComparisonQuery(trimmed)) {
    if (lang === 'ua') {
      return stripEmDashes(
        'Я спеціалізуюся на чотирьох основних архітектурах під різні бізнес-задачі:\n\n' +
          '- **Next.js 16 (App Router)**: SaaS, портали, веб-додатки, субсекундний Core Web Vitals (98-100 Lighthouse) та AI/RAG інтеграції.\n' +
          '- **Headless WordPress**: Медіа та редакційні команди, яким потрібна знайома адмінка WP із надшвидким фронтендом на Next.js / React.\n' +
          '- **Кастомний WordPress (PHP 8+)**: Чисті теми з ACF Pro та Tailwind CSS без важких плагінів і абонплат (90+ Lighthouse).\n' +
          '- **Shopify**: Міжнародний e-commerce, роздрібні бренди, безпечний мультивалютний чекаут.\n\n' +
          'Нижче доступна інтерактивна матриця для детального порівняння параметрів:'
      )
    }
    if (lang === 'es') {
      return stripEmDashes(
        'Me especializo en cuatro arquitecturas principales según el objetivo de tu proyecto:\n\n' +
          '- **Next.js 16 (App Router)**: SaaS, portales de alto tráfico, aplicaciones web, Core Web Vitals subsegundo (98-100) e IA/RAG.\n' +
          '- **Headless WordPress**: Equipos editoriales que buscan el panel familiar de WP con frontend desacoplado ultrarrápido en Next.js.\n' +
          '- **WordPress a medida (PHP 8+)**: Temas limpios con ACF Pro y Tailwind CSS, sin cuotas mensuales y rendimiento 90+ Lighthouse.\n' +
          '- **Shopify**: Comercio electrónico internacional, pasarelas de pago globales y gestión ágil de catálogo.\n\n' +
          'A continuación puedes consultar la matriz comparativa interactiva:'
      )
    }
    return stripEmDashes(
      'I specialize in four primary web architectures tailored to business goals:\n\n' +
        '- **Next.js 16 (App Router)**: SaaS, portals, web applications, sub-second Core Web Vitals (98-100 Lighthouse), and embedded AI/RAG.\n' +
        '- **Headless WordPress**: Editorial teams needing a familiar WP CMS combined with a decoupled Next.js / React frontend.\n' +
        '- **Custom WordPress (PHP 8+)**: Tailored PHP themes with ACF Pro and Tailwind CSS, zero recurring SaaS fees, and 90+ Lighthouse.\n' +
        '- **Shopify**: Global e-commerce brands, turnkey international checkout, and inventory workflows.\n\n' +
        'Explore the interactive architecture comparison matrix below:'
    )
  }

  if (isEstimateOrCalculatorQuery(trimmed)) {
    if (lang === 'ua') {
      return stripEmDashes(
        'Орієнтовні терміни розробки за основними типами проєктів:\n\n' +
          '- **Лендінг / Промо**: 1-2 тижні (Next.js або кастомний WP + Tailwind CSS)\n' +
          '- **Корпоративний сайт**: 2-4 тижні (PHP 8+ або Headless WP + ACF Pro)\n' +
          '- **Інтернет-магазин**: 3-6 тижнів (Shopify або WooCommerce)\n' +
          '- **Веб-додаток / SaaS**: 4-8 тижнів (Next.js 16 + TypeScript + API/База даних)\n\n' +
          'Скористайтеся інтерактивним калькулятором нижче, щоб розрахувати динамічний термін з урахуванням додаткових модулів (мультимовність, AI-асистент, Headless CMS):'
      )
    }
    if (lang === 'es') {
      return stripEmDashes(
        'Plazos de desarrollo estimados según el tipo de proyecto:\n\n' +
          '- **Landing / Promoción**: 1-2 semanas (Next.js o WP a medida + Tailwind CSS)\n' +
          '- **Sitio Corporativo**: 2-4 semanas (PHP 8+ o Headless WP + ACF Pro)\n' +
          '- **Tienda Online**: 3-6 semanas (Shopify o WooCommerce)\n' +
          '- **Aplicación Web / SaaS**: 4-8 semanas (Next.js 16 + TypeScript + API/Base de datos)\n\n' +
          'Utiliza la calculadora interactiva a continuación para calcular el cronograma dinámico según los módulos adicionales:'
      )
    }
    return stripEmDashes(
      'Estimated project delivery turnaround by architecture archetype:\n\n' +
        '- **Landing / Promo**: 1-2 weeks (Next.js or Custom WP + Tailwind CSS)\n' +
        '- **Corporate / Business Website**: 2-4 weeks (PHP 8+ or Headless WP + ACF Pro)\n' +
        '- **E-Commerce Store**: 3-6 weeks (Shopify or WooCommerce)\n' +
        '- **Custom Web App / SaaS**: 4-8 weeks (Next.js 16 + TypeScript + API/Database)\n\n' +
        'Use the interactive estimator below to calculate dynamic turnaround based on your selected features:'
    )
  }

  if (isBlogArticlesQuery(trimmed)) {
    if (lang === 'ua') {
      return stripEmDashes(
        'У моєму інженерному блозі опубліковані 9 детальних архітектурних розборів для CTO та технічних команд:\n\n' +
          '1. **Next.js 16 проти Headless WordPress та Custom PHP** (/ua/blog/nextjs-vs-headless-wordpress-custom-php-2026) - Об’єктивне порівняння TCO, вартості підтримки, швидкості Core Web Vitals та робочого процесу редакції.\n' +
          '2. **Повний розбір архітектури WPSKILLS** (/ua/blog/wpskills-interactive-edtech-architecture) - Компіляція 1 100+ MDX-уроків за 90 секунд на Next.js 16 та Rust MDX-RS, інтерактивні симулятори та синхронізація прогресу в Supabase.\n' +
          '3. **Повний розбір архітектури Unitrition** (/ua/blog/unitrition-headless-healthtech-architecture) - Headless HealthTech-платформа на Next.js 16, WordPress REST API, Supabase RLS та USDA FoodData Central API.\n' +
          '4. **Автономна архітектура Hybrid RAG у браузері** (/ua/blog/autonomous-hybrid-rag-architecture-browser) - Як реалізувати семантичний RAG-пошук за 5мс без витрат на зовнішні векторні бази даних (Pinecone/Milvus).\n' +
          '5. **WCAG 2.2 AA та European Accessibility Act 2026** (/ua/blog/wcag-22-aa-european-accessibility-act-2026) - Практичний посібник для бізнесу в ЄС щодо обов’язкових стандартів доступності, керування фокусом та CI/CD тестів.\n' +
          '6. **Субсекундні Core Web Vitals та оптимізація бандлу** (/ua/blog/sub-second-cwv-bundle-optimization) - Практики скорочення JS-бандлу з 480KB до 98KB, Tree-Shaking, WebP/AVIF та INP < 50ms у Vite та Next.js.\n' +
          '7. **Shopify Liquid проти кастомного WooCommerce** (/ua/blog/shopify-liquid-vs-custom-woocommerce) - Архітектурний розбір e-commerce: реальний TCO, швидкість конверсії, масштабування та безпека платежів.\n' +
          '8. **Zero-Trust безпека на стороні клієнта** (/ua/blog/client-side-zero-trust-security) - Захист вебдодатків: Base64-обфускація контактів від спам-ботів, суворі заголовки CSP та ізоляція DOM.\n' +
          '9. **Безшовна міграція легасі-систем у хмару** (/ua/blog/legacy-migration-cloud-infrastructure) - План міграції монолітів та баз даних без зупинки бізнес-транзакцій та зі збереженням 100% SEO-трафіку.\n\n' +
          'Ви можете відкрити будь-яку статтю за прямим посиланням або запитати мене про будь-яку з цих тем!'
      )
    }
    if (lang === 'es') {
      return stripEmDashes(
        'En mi blog de ingeniería comparto 9 análisis técnicos en profundidad pensados para CTOs y fundadores:\n\n' +
          '1. **Next.js 16 vs Headless WordPress vs Custom PHP** (/es/blog/nextjs-vs-headless-wordpress-custom-php-2026) - Comparativa objetiva de TCO, costes de mantenimiento, Core Web Vitals y flujo editorial.\n' +
          '2. **Análisis profundo de la arquitectura WPSKILLS** (/es/blog/wpskills-interactive-edtech-architecture) - Compilación de 1.100+ lecciones MDX en 90 segundos con Next.js 16 y Rust MDX-RS, simuladores interactivos y sincronización personal en Supabase.\n' +
          '3. **Análisis profundo de la arquitectura Unitrition** (/es/blog/unitrition-headless-healthtech-architecture) - Plataforma HealthTech Headless con Next.js 16, WordPress, Supabase RLS y API USDA FoodData Central.\n' +
          '4. **Arquitectura de Hybrid RAG autónomo en cliente** (/es/blog/autonomous-hybrid-rag-architecture-browser) - Cómo implementar búsqueda semántica en 5ms sin costes mensuales de bases de datos vectoriales.\n' +
          '5. **WCAG 2.2 AA y European Accessibility Act 2026** (/es/blog/wcag-22-aa-european-accessibility-act-2026) - Guía técnica para empresas en España y la UE sobre cumplimiento normativo, gestión de foco y tests en CI/CD.\n' +
          '6. **Core Web Vitals subsegundos y optimización de bundles** (/es/blog/sub-second-cwv-bundle-optimization) - Reducción del JS inicial de 480KB a 98KB, tree-shaking, imágenes WebP/AVIF e INP < 50ms en Vite y Next.js.\n' +
          '7. **Shopify Liquid vs WooCommerce a medida** (/es/blog/shopify-liquid-vs-custom-woocommerce) - Desglose de arquitectura e-commerce: TCO real, conversión, escalabilidad y seguridad transaccional.\n' +
          '8. **Seguridad web Zero-Trust en cliente** (/es/blog/client-side-zero-trust-security) - Protección frontend: ofuscación Base64 contra scrapers, cabeceras CSP estrictas y aislamiento de DOM.\n' +
          '9. **Migración cloud sin tiempo de inactividad** (/es/blog/legacy-migration-cloud-infrastructure) - Metodología probada para migrar sistemas heredados a la nube preservando el 100% del SEO y cero caídas operativas.\n\n' +
          '¡Puedes acceder a los enlaces anteriores para leer el análisis completo o preguntarme cualquier duda sobre estos temas!'
      )
    }
    return stripEmDashes(
      'In my engineering blog, I publish 9 architectural case studies designed for CTOs and technical leads:\n\n' +
        '1. **Next.js 16 vs Headless WordPress vs Custom PHP** (/en/blog/nextjs-vs-headless-wordpress-custom-php-2026) - An objective TCO, maintenance, Core Web Vitals, and editorial workflow comparison.\n' +
        '2. **WPSKILLS Architecture Deep-Dive** (/en/blog/wpskills-interactive-edtech-architecture) - Compiling 1,100+ MDX lessons in 90 seconds with Next.js 16 & Rust MDX-RS, interactive simulators, and Supabase personal progress sync.\n' +
        '3. **Unitrition Architecture Deep-Dive** (/en/blog/unitrition-headless-healthtech-architecture) - Engineering a Headless HealthTech platform with Next.js 16, WordPress REST API, Supabase RLS, and USDA FoodData Central API.\n' +
        '4. **Autonomous Hybrid RAG Architecture** (/en/blog/autonomous-hybrid-rag-architecture-browser) - Building in-browser semantic retrieval under 5ms with zero external vector database overhead.\n' +
        '5. **WCAG 2.2 AA & European Accessibility Act 2026** (/en/blog/wcag-22-aa-european-accessibility-act-2026) - The practical engineering compliance guide for EU and Spanish businesses, covering keyboard focus, contrast, and CI/CD a11y gates.\n' +
        '6. **Sub-Second Core Web Vitals & Bundle Optimization** (/en/blog/sub-second-cwv-bundle-optimization) - Strategies reducing initial JS from 480KB to 98KB, tree-shaking, WebP/AVIF pipelines, and sub-50ms INP.\n' +
        '7. **Shopify Liquid vs Custom WooCommerce** (/en/blog/shopify-liquid-vs-custom-woocommerce) - Real-world e-commerce TCO, conversion velocity, payment security, and enterprise checkout architecture.\n' +
        '8. **Client-Side Zero-Trust Web Security** (/en/blog/client-side-zero-trust-security) - Frontend hardening: Base64 obfuscation against scrapers, strict Content Security Policies, and DOM isolation.\n' +
        '9. **Zero-Downtime Legacy System Migration to Cloud** (/en/blog/legacy-migration-cloud-infrastructure) - Transitioning legacy monoliths to high-availability cloud infrastructure with dual-write replication and 100% SEO preservation.\n\n' +
        'You can read the full articles via the direct links above or ask me any question about these topics!'
    )
  }

  if (isPersonalProjectsQuery(trimmed)) {
    if (lang === 'ua') {
      return stripEmDashes(
        'Мої власні авторські розробки (Personal Flagship Products), де я виступаю архітектором, Product Owner та Lead Fullstack інженером:\n\n' +
          '1. **Next.js 16 & Hybrid RAG Portfolio Platform** (yusupovartur.com) - Enterprise fullstack-платформа на Next.js 16 App Router, React 19 Server Components, TypeScript 6 та кастомному автономному AI Hybrid RAG двигуні, що індексує 71 проєкт на 213+ SSG маршрутах (EN/UA/ES) із WCAG 2.2 AA.\n' +
          '2. **Fullstack AI Lab** (fullstackailab.com) - Інтерактивна освітня інженерна платформа для вивчення Fullstack (React 19, Next.js 16, TypeScript, WordPress core) на базі нативного Rust-компілятора MDX-RS (1 135+ уроків), симуляторів рантайму, WASM-пісочниці, генератора аудіопідкастів для Google NotebookLM та гейміфікації на Supabase.\n' +
          '3. **Unitrition** (unitrition.info) - Повнофункціональна платформа персоналізованого харчування для 10 дієтичних планів на базі Headless WordPress, Next.js 16, Supabase та інтеграції USDA FoodData Central API.\n' +
          '4. **My React Portfolio Website** - Високопродуктивний односторінковий застосунок-портфоліо на React 19, TypeScript, Tailwind CSS v4 та 3-мовній i18n екосистемі із 29 Vitest тестами.\n\n' +
          'Нижче доступні картки цих проєктів із прямим переходом до кейсів:'
      )
    }
    if (lang === 'es') {
      return stripEmDashes(
        'Mis proyectos propios destacados (Personal Flagship Products), donde actúo como arquitecto, Product Owner y Lead Fullstack Engineer:\n\n' +
          '1. **Next.js 16 & Hybrid RAG Portfolio Platform** (yusupovartur.com) - Plataforma fullstack empresarial con Next.js 16 App Router, React 19 Server Components, TypeScript 6 y motor propio Hybrid RAG que indexa 71 proyectos en más de 213 rutas SSG (EN/UA/ES) con WCAG 2.2 AA.\n' +
          '2. **Fullstack AI Lab** (fullstackailab.com) - Plataforma educativa interactiva de ingeniería Fullstack (React 19, Next.js 16, TypeScript, WordPress core) impulsada por compilación Rust MDX-RS (1.135+ lecciones), simuladores de ejecución, sandbox WASM, generador de podcasts para Google NotebookLM y gamificación en Supabase.\n' +
          '3. **Unitrition** (unitrition.info) - Plataforma completa de nutrición personalizada para 10 dietas, construida con Headless WordPress, Next.js 16 App Router, Supabase y API de USDA.\n' +
          '4. **My React Portfolio Website** - Aplicación SPA de alto rendimiento desarrollada con React 19, TypeScript, Tailwind CSS v4 y sistema i18n trilingüe respaldada por 29 pruebas Vitest.\n\n' +
          'A continuación puedes explorar las tarjetas de estos proyectos:'
      )
    }
    return stripEmDashes(
      'My personal flagship products where I act as Architect, Product Owner, and Lead Fullstack Engineer:\n\n' +
        '1. **Next.js 16 & Hybrid RAG Portfolio Platform** (yusupovartur.com) - Enterprise fullstack platform with Next.js 16 App Router, React 19 Server Components, TypeScript 6, and a custom autonomous Hybrid RAG engine indexing 71 case studies across 213+ SSG routes (EN/UA/ES) with WCAG 2.2 AA.\n' +
        '2. **Fullstack AI Lab** (fullstackailab.com) - Interactive engineering educational platform for Fullstack mastery (React 19, Next.js 16, TypeScript, WordPress core internals) powered by native Rust MDX-RS compilation (1,135+ lessons), runtime simulators, in-browser WASM playground, Google NotebookLM audio prompt engine, and Supabase gamification.\n' +
        '3. **Unitrition** (unitrition.info) - Comprehensive dietary modeling platform supporting 10 nutrition plans, built with Headless WordPress, Next.js 16 App Router, Supabase, and USDA API integration.\n' +
        '4. **My React Portfolio Website** - High-performance single-page portfolio application built with React 19, TypeScript, Tailwind CSS v4, and 3-language i18n backed by 29 Vitest specs.\n\n' +
        'Explore the case study cards below:'
    )
  }

  if (isBestProjectsQuery(trimmed)) {
    if (lang === 'ua') {
      return stripEmDashes(
        'Ось добірка моїх провідних проєктів, згрупованих за ключовими технологічними стеками (перші та найсильніші приклади з кожного напрямку):\n\n' +
          '- **Next.js 16 & Full-Stack**:\n' +
          '  - **Next.js 16 & Hybrid RAG Portfolio Platform** - корпоративна fullstack-платформа з автономним Hybrid RAG AI-асистентом на 71 кейс.\n' +
          '  - **WPSKILLS** - інтерактивна інженерна освітня екосистема на 1 100+ MDX-уроків із Rust MDX-RS, симулятором аварій та NotebookLM AI.\n' +
          '  - **Unitrition** - персоналізована платформа харчування на Next.js 16 App Router, Headless WP, Supabase та USDA API.\n' +
          '- **Custom WordPress & Enterprise**:\n' +
          '  - **IT-Magic** - enterprise-портал для провідного AWS Advanced Consulting Partner із кастомною темою, Schema.org та топовими позиціями в Google.\n' +
          '- **React 19 & Web Apps**:\n' +
          '  - **My React Portfolio Website** - сучасний PWA-застосунок на React 19 із View Transitions API та TDD тест-сьютом.\n' +
          '- **Shopify & E-Commerce**:\n' +
          '  - **Kidzely** - міжнародний магазин дитячих товарів із оптимізованим чекаутом і мобільним UX.\n\n' +
          'Нижче наведені інтерактивні картки найкращих проєктів із прямим доступом до детальних кейсів та живих демо:'
      )
    }
    if (lang === 'es') {
      return stripEmDashes(
        'A continuación presento una selección de mis mejores proyectos organizados por tecnologías clave (los ejemplos destacados de cada categoría):\n\n' +
          '- **Next.js 16 y Full-Stack**:\n' +
          '  - **Next.js 16 & Hybrid RAG Portfolio Platform** - Plataforma fullstack empresarial con motor propio Hybrid RAG y 213+ rutas SSG.\n' +
          '  - **WPSKILLS** - Ecosistema educativo interactivo con 1.100+ lecciones MDX en Rust MDX-RS, simulador de fallos y NotebookLM AI.\n' +
          '  - **Unitrition** - Plataforma de nutrición personalizada con Next.js 16 App Router, Headless WP, Supabase y API USDA.\n' +
          '- **WordPress a medida y Enterprise**:\n' +
          '  - **IT-Magic** - Portal corporativo para socio consultor de AWS con tema PHP personalizado y optimización SEO técnica.\n' +
          '- **React 19 y Aplicaciones Web**:\n' +
          '  - **My React Portfolio Website** - Aplicación SPA/PWA de alto rendimiento con React 19, View Transitions API y pruebas TDD.\n' +
          '- **Shopify y E-Commerce**:\n' +
          '  - **Kidzely** - Tienda de comercio electrónico internacional con checkout optimizado.\n\n' +
          'Descubre las tarjetas interactivas de los proyectos destacados a continuación:'
      )
    }
    return stripEmDashes(
      'Here is a curated showcase of my top flagship projects across the primary technology stacks (the leading examples from each category):\n\n' +
        '- **Next.js 16 & Full-Stack**:\n' +
        '  - **Next.js 16 & Hybrid RAG Portfolio Platform** - Enterprise fullstack platform with an autonomous Hybrid RAG engine, 213+ SSG routes, and WCAG 2.2 AA compliance.\n' +
        '  - **WPSKILLS** - Interactive engineering educational ecosystem with 1,100+ MDX lessons compiled via Rust MDX-RS, outage simulators, and NotebookLM AI.\n' +
        '  - **Unitrition** - Personalized nutrition platform built with Next.js 16 App Router, Headless WordPress, Supabase, and USDA API.\n' +
        '- **Custom WordPress & Enterprise**:\n' +
        '  - **IT-Magic** - Enterprise cloud consulting platform for an AWS Advanced Partner with bespoke PHP theme and top Google rankings.\n' +
        '- **React 19 & Modern Web Apps**:\n' +
        '  - **My React Portfolio Website** - High-performance SPA/PWA built with React 19, TypeScript, View Transitions API, and 29 Vitest specs.\n' +
        '- **Shopify & E-Commerce**:\n' +
        '  - **Kidzely** - International e-commerce store with optimized checkout and mobile UX.\n\n' +
        'Explore the interactive case study cards below:'
    )
  }

  // 3. Blog post context or specific article query match
  const resolvedBlog = resolveBlogFromQueryOrContext(trimmed, options)
  if (resolvedBlog) {
    return stripEmDashes(formatBlogPostDetails(resolvedBlog, lang))
  }

  // 4. Resolve target project from query, options, or conversational history
  const resolvedEntry = resolveTargetProject(trimmed, options)
  const matchedProject = resolvedEntry?.project

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

  // 5. Category & Technology Showcase (e.g. Shopify, AWS, WordPress, Next.js)
  const categoryShowcase = resolveCategoryOrTechShowcase(trimmed, lang)
  if (categoryShowcase) {
    return stripEmDashes(categoryShowcase.answer)
  }

  // 6. General FAQ keyword matching with word boundaries
  for (const item of FAQ) {
    if (item.keywords.some((kw) => matchesFaqKeyword(lower, kw))) {
      return stripEmDashes(getBotAnswer(trimmed, lang))
    }
  }

  // 7. Hybrid RAG BM25 retrieval across all 290 knowledge chunks
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
    if (top.type === 'blog' && top.slug) {
      const blog = getBlogPostBySlug(top.slug)
      if (blog) {
        return stripEmDashes(formatBlogPostDetails(blog, lang))
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
  const lang = resolveResponseLanguage(query, options.locale)

  if (isStackComparisonQuery(query)) {
    return 'Hybrid RAG · Architecture Comparison Matrix'
  }

  if (isEstimateOrCalculatorQuery(query)) {
    return 'Hybrid RAG · Timeline & Scope Estimator'
  }

  if (isBlogArticlesQuery(query)) {
    return 'Hybrid RAG · Technical Engineering Blog'
  }

  if (isPersonalProjectsQuery(query)) {
    return 'Hybrid RAG · Personal Flagship Products'
  }

  if (isBestProjectsQuery(query)) {
    return 'Hybrid RAG · Best Flagship Projects Showcase'
  }

  const resolvedBlog = resolveBlogFromQueryOrContext(query, options)
  if (resolvedBlog) {
    const blogTitle = getBlogTitle(resolvedBlog, lang)
    return `Hybrid RAG · ${stripEmDashes(blogTitle)} (Article)`
  }

  const resolved = resolveTargetProject(query, options)
  if (resolved) {
    return `Hybrid RAG · ${stripEmDashes(resolved.project.title)} Case Study`
  }

  const categoryShowcase = resolveCategoryOrTechShowcase(query, lang)
  if (categoryShowcase) {
    return `Hybrid RAG · ${categoryShowcase.category} Showcase`
  }

  if (options.projectTitle) {
    return `Hybrid RAG · ${stripEmDashes(options.projectTitle)} Case Study`
  }

  return 'Hybrid RAG · 71-Project Knowledge Base'
}

export interface ChatProjectCardItem {
  slug: string
  title: string
  description: string
  image: string
  category: string
  liveUrl?: string
  githubUrl?: string
  isPersonal?: boolean
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
    isPersonal: Boolean(project.isPersonal),
  }
}

export function getRelevantProjectCards(
  query: string,
  options: LocalSynthesisOptions = {},
): ChatProjectCardItem[] {
  const trimmed = query ? query.trim() : ''
  if (!trimmed) return []

  const lower = foldForSearch(trimmed)
  const lang = resolveResponseLanguage(trimmed, options.locale)

  const isGeneralProfileOrServiceQuestion =
    /(who is artur|about yourself|quien es artur|хто такий артур|how many years|скільки років|cuantos anos|where are you located|де ви знаходитесь|donde estas|services|rates|cost|hire|послуги|ціни|precio|contratar|workflow|ai & rag|seo|english|motivat)/i.test(
      lower,
    )

  if (isGeneralProfileOrServiceQuestion) {
    return []
  }

  // 1. Check if user is asking for personal flagship products
  if (isPersonalProjectsQuery(trimmed)) {
    const personalSlugs = [
      'yusupovartur-nextjs-portfolio',
      'wpskills',
      'unitrition',
      'webart-react-portfolio',
    ]
    const cards: ChatProjectCardItem[] = []
    for (const slug of personalSlugs) {
      const entry = projectRegistry.find((p) => p.slug === slug)
      if (entry) {
        cards.push(toProjectCardItem(entry.slug, entry.project, lang))
      }
    }
    return cards
  }

  // 2. Check if user is asking for best / top projects categorized by technology
  if (isBestProjectsQuery(trimmed)) {
    const bestSlugs = [
      'yusupovartur-nextjs-portfolio',
      'wpskills',
      'unitrition',
      'it-magic',
      'webart-react-portfolio',
      'kidzely',
    ]
    const cards: ChatProjectCardItem[] = []
    for (const slug of bestSlugs) {
      const entry = projectRegistry.find((p) => p.slug === slug)
      if (entry) {
        cards.push(toProjectCardItem(entry.slug, entry.project, lang))
      }
    }
    return cards
  }

  // 3. Check if query matches a blog article that has applied project references
  const resolvedBlog = resolveBlogFromQueryOrContext(trimmed, options)
  if (resolvedBlog?.appliedProjects && resolvedBlog.appliedProjects.length > 0) {
    const cards: ChatProjectCardItem[] = []
    for (const ref of resolvedBlog.appliedProjects) {
      const entry = projectRegistry.find((p) => p.slug === ref.slug)
      if (entry) {
        cards.push(toProjectCardItem(entry.slug, entry.project, lang))
      }
    }
    if (cards.length > 0) return cards
  }

  // 4. Category & Technology Showcase (Shopify, AWS, WordPress, Next.js)
  const categoryShowcase = resolveCategoryOrTechShowcase(trimmed, lang)
  if (categoryShowcase?.projectSlugs) {
    const cards: ChatProjectCardItem[] = []
    for (const slug of categoryShowcase.projectSlugs) {
      const entry = projectRegistry.find((p) => p.slug === slug)
      if (entry) {
        cards.push(toProjectCardItem(entry.slug, entry.project, lang))
      }
    }
    if (cards.length > 0) return cards
  }

  // 5. Check if query mentions a specific project (including typo-tolerant match) or has active context
  const resolved = resolveTargetProject(trimmed, options)
  if (resolved) {
    return [toProjectCardItem(resolved.slug, resolved.project, lang)]
  }

  // 6. Check if user is asking to see completed projects / portfolio / work examples
  const isProjectsShowcaseQuery =
    /(projects|tell me about your work|completed|show me.*project|portfolio|проєкт|портфоліо|проект|портфолио|proyectos|portafolio|trabajo)/i.test(
      lower,
    )

  if (isProjectsShowcaseQuery) {
    const flagshipSlugs = [
      'yusupovartur-nextjs-portfolio',
      'unitrition',
      'it-magic',
      'webart-react-portfolio',
    ]
    const cards: ChatProjectCardItem[] = []
    for (const slug of flagshipSlugs) {
      const entry = projectRegistry.find((p) => p.slug === slug)
      if (entry) {
        cards.push(toProjectCardItem(entry.slug, entry.project, lang))
      }
    }
    return cards
  }

  // 7. Check high-confidence BM25 project matches for domain queries (e.g. "AWS", "Shopify")
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
  const lang = resolveResponseLanguage(trimmed, options.locale)
  const answeredSet = new Set(
    (options.answeredQuestions || []).map((q) => foldForSearch(q)),
  )
  answeredSet.add(lower)

  // Follow-ups for blog articles
  const resolvedBlog = resolveBlogFromQueryOrContext(trimmed, options)
  if (resolvedBlog) {
    const candidates =
      lang === 'ua'
        ? [
            'Які ще архітектурні статті є в блозі?',
            'Як влаштована архітектура Next.js 16 Portfolio Platform?',
            'Скільки часу займе розробка? / Калькулятор',
          ]
        : lang === 'es'
          ? [
              '¿Qué otros artículos arquitectónicos hay en el blog?',
              '¿Cómo está estructurada la plataforma Next.js 16?',
              '¿Cuánto tiempo tardaría el desarrollo? / Calculadora',
            ]
          : [
              'What other architectural articles are in the blog?',
              'How is Next.js 16 Portfolio Platform architected?',
              'Estimate timeline for my project / Calculator',
            ]
    return candidates.filter((q) => !answeredSet.has(foldForSearch(q))).slice(0, 3)
  }

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

  if (isPersonalProjectsQuery(trimmed) || isBestProjectsQuery(trimmed)) {
    const flagshipFollowUps =
      lang === 'ua'
        ? [
            'Який стек технологій використано в Unitrition?',
            'Як влаштована архітектура Next.js 16 Portfolio Platform?',
            'Розкажи детальніше про проєкт IT-Magic',
          ]
        : lang === 'es'
          ? [
              '¿Qué stack tecnológico se usó en Unitrition?',
              '¿Cómo está estructurada la plataforma Next.js 16?',
              'Cuéntame más sobre el proyecto IT-Magic',
            ]
          : [
              'What tech stack was used in Unitrition?',
              'How is Next.js 16 Portfolio Platform architected?',
              'Tell me more about the IT-Magic project',
            ]
    return flagshipFollowUps.filter((q) => !answeredSet.has(foldForSearch(q))).slice(0, 3)
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
              'What are your rates and how to hire you?',
            ]
    return showcaseFollowUps.filter((q) => !answeredSet.has(foldForSearch(q))).slice(0, 3)
  }

  if (isStackComparisonQuery(trimmed)) {
    const stackFollowUps =
      lang === 'ua'
        ? [
            'Скільки часу займе розробка? / Калькулятор',
            'Який стек технологій використано в Unitrition?',
            'Які ваші розцінки та як вас найняти?',
          ]
        : lang === 'es'
          ? [
              '¿Cuánto tiempo tardaría el desarrollo? / Calculadora',
              '¿Qué stack tecnológico se usó en Unitrition?',
              '¿Cuáles son tus tarifas y cómo contratarte?',
            ]
          : [
              'Estimate timeline for my project / Calculator',
              'What tech stack was used in Unitrition?',
              'What are your rates and how to hire you?',
            ]
    return stackFollowUps.filter((q) => !answeredSet.has(foldForSearch(q))).slice(0, 3)
  }

  if (isEstimateOrCalculatorQuery(trimmed)) {
    const estimateFollowUps =
      lang === 'ua'
        ? [
            'WordPress чи Next.js: порівняння стеків',
            'Які проєкти ви створили? / Портфоліо',
            'Чи можна вас найняти? / Контакти',
          ]
        : lang === 'es'
          ? [
              'WordPress vs Next.js: comparativa de stacks',
              '¿Qué proyectos has completado? / Portafolio',
              '¿Puedo contratarte? / Tarifas y Contacto',
            ]
          : [
              'Next.js vs Headless WordPress comparison',
              'What projects have you completed? / Portfolio',
              'Can I hire you? / Rates & Contacts',
            ]
    return estimateFollowUps.filter((q) => !answeredSet.has(foldForSearch(q))).slice(0, 3)
  }

  if (isBlogArticlesQuery(trimmed)) {
    const blogFollowUps =
      lang === 'ua'
        ? [
            'Як працює автономний Hybrid RAG у браузері?',
            'WordPress чи Next.js: порівняння стеків',
            'Скільки часу займе розробка? / Калькулятор',
          ]
        : lang === 'es'
          ? [
              '¿Cómo funciona el Hybrid RAG autónomo en cliente?',
              'WordPress vs Next.js: comparativa de stacks',
              '¿Cuánto tiempo tardaría el desarrollo? / Calculadora',
            ]
          : [
              'How does in-browser Hybrid RAG work?',
              'Next.js vs Headless WordPress comparison',
              'Estimate timeline for my project / Calculator',
            ]
    return blogFollowUps.filter((q) => !answeredSet.has(foldForSearch(q))).slice(0, 3)
  }

  return FAQ.map((faq) =>
    lang === 'ua' ? faq.questionUa : lang === 'es' ? faq.questionEs : faq.question,
  )
    .filter((q) => !answeredSet.has(foldForSearch(q)))
    .slice(0, 3)
}


