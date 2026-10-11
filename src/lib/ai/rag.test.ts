import { describe, it, expect } from 'vitest'
import {
  retrieveKnowledge,
  formatContextForLLM,
  calculateCosineSimilarity,
} from './rag'

describe('Hybrid RAG Retriever Specification (TDD)', () => {
  it('should retrieve IT-Magic and AWS projects when queried for AWS cloud migration', () => {
    const results = retrieveKnowledge('AWS cloud migration services infrastructure')

    expect(results.length).toBeGreaterThan(0)
    const topMatch = results[0]
    expect(topMatch.chunk.content.toLowerCase()).toMatch(/aws|cloud|migration/)
    expect(topMatch.score).toBeGreaterThan(0)
  })

  it('should retrieve Unitrition when queried for Next.js and Headless CMS', () => {
    const results = retrieveKnowledge('Next.js Headless CMS web app')

    expect(results.length).toBeGreaterThan(0)
    const titles = results.map((r) => r.chunk.title.toLowerCase())
    const hasNextJs = titles.some((t) => t.includes('unitrition') || t.includes('react'))
    expect(hasNextJs).toBe(true)
  })

  it('should prioritize the current project when currentProjectSlug is provided', () => {
    const results = retrieveKnowledge('How does the architecture work?', {
      currentProjectSlug: 'it-magic',
      topK: 3,
    })

    expect(results.length).toBeGreaterThan(0)
    expect(results[0].chunk.slug).toBe('it-magic')
    expect(results[0].matchReasons).toContain('active-project-context')
  })

  it('should retrieve profile bio when queried about Artur Yusupov', () => {
    const results = retrieveKnowledge('Who is Artur Yusupov and what is his experience?')

    expect(results.length).toBeGreaterThan(0)
    const hasProfile = results.some((r) => r.chunk.type === 'profile')
    expect(hasProfile).toBe(true)
  })

  it('should accurately calculate cosine similarity between two numeric vectors', () => {
    const vecA = [1, 0, 1, 0]
    const vecB = [1, 0, 1, 0]
    const vecC = [0, 1, 0, 1]

    expect(calculateCosineSimilarity(vecA, vecB)).toBeCloseTo(1.0, 5)
    expect(calculateCosineSimilarity(vecA, vecC)).toBeCloseTo(0.0, 5)
  })

  it('should format retrieved results into clean markdown context for LLM prompt', () => {
    const results = retrieveKnowledge('WordPress Elementor WooCommerce')
    const formatted = formatContextForLLM(results)

    expect(formatted).toContain('### Relevant Knowledge Base Chunks:')
    expect(formatted).not.toContain('—')
    expect(formatted.length).toBeGreaterThan(50)
  })
})
