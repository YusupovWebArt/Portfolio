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

  it('should return empty results for empty or whitespace query without crashing (Finding H)', () => {
    expect(retrieveKnowledge('')).toEqual([])
    expect(retrieveKnowledge('   ')).toEqual([])
  })

  it('should retrieve Ukrainian Cyrillic queries with high accuracy (Finding B)', () => {
    const results = retrieveKnowledge('Який стек технологій використовувався в IT-Magic?')
    expect(results.length).toBeGreaterThan(0)
    const topResult = results[0]
    expect(topResult.chunk.slug).toBe('it-magic')
  })

  it('should prevent project context from hijacking general service inquiries (Finding C)', () => {
    const results = retrieveKnowledge('What are your services, pricing, and contract rates?', {
      currentProjectSlug: 'it-magic',
      topK: 3,
    })

    expect(results.length).toBeGreaterThan(0)
    const hasService = results.some((r) => r.chunk.type === 'service')
    expect(hasService).toBe(true)
    expect(results[0].chunk.type).toBe('service')
  })

  it('should retrieve projects for Spanish queries with accented terms', () => {
    const results = retrieveKnowledge('¿Cuáles son las características principales de Unitrition?')
    expect(results.length).toBeGreaterThan(0)
    expect(results.some((r) => r.chunk.slug === 'unitrition')).toBe(true)
  })
})
