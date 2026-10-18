import { describe, it, expect } from 'vitest'
import {
  retrieveKnowledge,
  formatContextForLLM,
  calculateCosineSimilarity,
  resolveProjectFromQuery,
  inferProjectFromHistory,
  getContextualFollowUps,
  isHireOrContactQuery,
  isStackComparisonQuery,
  isEstimateOrCalculatorQuery,
  synthesizeLocalRagAnswer,
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
    expect(formatted).not.toContain('\u2014')
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

  it('should resolve projects with typos and hyphenless names via Damerau-Levenshtein matching', () => {
    expect(resolveProjectFromQuery('Tell me about untirition')?.slug).toBe('unitrition')
    expect(resolveProjectFromQuery('How was itmagic built?')?.slug).toBe('it-magic')
    expect(resolveProjectFromQuery('Show me kidzly shopify store')?.slug).toBe('kidzely')
  })

  it('should retain project context across conversational history turns (coreference resolution)', () => {
    const history = [
      { role: 'user' as const, content: 'Tell me about Unitrition' },
      { role: 'assistant' as const, content: 'Unitrition is a Next.js Personalized Nutrition & Health Platform.' },
    ]
    const inferred = inferProjectFromHistory(history)
    expect(inferred?.slug).toBe('unitrition')

    const followUpAnswer = synthesizeLocalRagAnswer('What tech stack was used there?', {
      locale: 'en',
      history,
    })
    expect(followUpAnswer).toContain('Unitrition')
  })

  it('should generate 3 localized contextual follow-up suggestions', () => {
    const followUpsEn = getContextualFollowUps('Tell me about IT-Magic', { locale: 'en' })
    expect(followUpsEn).toHaveLength(3)
    expect(followUpsEn.some((q) => q.includes('IT-Magic'))).toBe(true)

    const followUpsUa = getContextualFollowUps('Розкажи про Unitrition', { locale: 'ua' })
    expect(followUpsUa).toHaveLength(3)
    expect(followUpsUa.some((q) => q.includes('Unitrition'))).toBe(true)
  })

  it('should detect hire, pricing, and contact intent across EN, UA, and ES', () => {
    expect(isHireOrContactQuery('How can I hire Artur and what are his rates?')).toBe(true)
    expect(isHireOrContactQuery('Яка вартість розробки та контакти?')).toBe(true)
    expect(isHireOrContactQuery('¿Cuál es el precio y cómo contactar?')).toBe(true)
    expect(isHireOrContactQuery('How does React Fiber work?')).toBe(false)
  })

  it('should detect architecture stack comparison queries across EN, UA, and ES', () => {
    expect(isStackComparisonQuery('WordPress vs Next.js: which stack is better?')).toBe(true)
    expect(isStackComparisonQuery('Що краще обрати: WordPress чи Next.js?')).toBe(true)
    expect(isStackComparisonQuery('¿Qué elegir entre WordPress y Next.js?')).toBe(true)
    expect(isStackComparisonQuery('Tell me about your education')).toBe(false)
  })

  it('should detect project timeline estimation and calculator queries across EN, UA, and ES', () => {
    expect(isEstimateOrCalculatorQuery('How long will it take to build an e-commerce website?')).toBe(true)
    expect(isEstimateOrCalculatorQuery('Скільки часу займе розробка інтернет-магазину? / Калькулятор')).toBe(true)
    expect(isEstimateOrCalculatorQuery('¿Cuánto tiempo tardaría el desarrollo? / Calculadora')).toBe(true)
    expect(isEstimateOrCalculatorQuery('What is your favorite color?')).toBe(false)
  })
})

