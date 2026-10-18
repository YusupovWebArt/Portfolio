import { describe, it, expect } from 'vitest'
import {
  loadKnowledgeBase,
  findChunkBySlug,
  getAllKnowledgeChunks,
  KnowledgeChunk,
} from './knowledge'

describe('RAG Knowledge Base Specification (TDD)', () => {
  it('should load structured knowledge base containing all 70 project case studies', () => {
    const kb = loadKnowledgeBase()

    expect(kb).toBeDefined()
    expect(kb.version).toBeDefined()
    expect(kb.author.name).toBe('Artur Yusupov')
    expect(kb.projects).toHaveLength(70)
  })

  it('should contain valid schema for all project knowledge chunks', () => {
    const kb = loadKnowledgeBase()

    kb.projects.forEach((chunk: KnowledgeChunk) => {
      expect(chunk.id).toBeDefined()
      expect(chunk.type).toBe('project')
      expect(chunk.title).toBeTruthy()
      expect(chunk.slug).toBeTruthy()
      expect(chunk.content).toBeTruthy()
      expect(chunk.technologies).toBeInstanceOf(Array)
      expect(chunk.metadata?.projectId).toBeDefined()
    })
  })

  it('should not contain any em dashes in knowledge chunk texts', () => {
    const chunks = getAllKnowledgeChunks()

    chunks.forEach((chunk) => {
      expect(chunk.content).not.toContain('—')
      if (chunk.contentUa) {
        expect(chunk.contentUa).not.toContain('—')
      }
      if (chunk.contentEs) {
        expect(chunk.contentEs).not.toContain('—')
      }
    })
  })

  it('should find specific project chunks by slug', () => {
    const itMagic = findChunkBySlug('it-magic')
    expect(itMagic).toBeDefined()
    expect(itMagic?.title).toContain('IT-Magic')
    expect(itMagic?.type).toBe('project')

    const unitrition = findChunkBySlug('unitrition')
    expect(unitrition).toBeDefined()
    expect(unitrition?.title).toContain('Unitrition')
  })

  it('should include profile, service, and methodology knowledge chunks', () => {
    const kb = loadKnowledgeBase()

    expect(kb.profile.length).toBeGreaterThanOrEqual(1)
    expect(kb.services.length).toBeGreaterThanOrEqual(1)
    expect(kb.methodology.length).toBeGreaterThanOrEqual(1)

    const allChunks = getAllKnowledgeChunks()
    expect(allChunks.length).toBeGreaterThan(69)
  })

  it('should include blog knowledge chunks for engineering articles', () => {
    const kb = loadKnowledgeBase()

    expect(kb.blog).toBeDefined()
    expect(kb.blog.length).toBe(3)
    const nextjsVsWp = kb.blog.find((b) => b.slug === 'nextjs-vs-headless-wordpress-custom-php-2026')
    expect(nextjsVsWp).toBeDefined()
    expect(nextjsVsWp?.type).toBe('blog')
  })
})
