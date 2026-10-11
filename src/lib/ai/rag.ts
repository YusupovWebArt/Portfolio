import { getAllKnowledgeChunks, KnowledgeChunk } from './knowledge'

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
  return lines.join('\n').replace(/—/g, '-')
}
