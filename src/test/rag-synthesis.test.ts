import { describe, it, expect } from 'vitest'
import {
  resolveResponseLanguage,
  resolveBlogFromQueryOrContext,
  formatBlogPostDetails,
  resolveCategoryOrTechShowcase,
  synthesizeLocalRagAnswer,
  getRagSourceLabel,
  getRelevantProjectCards,
  getContextualFollowUps,
} from '../lib/ai/rag'
import { getBlogPostBySlug } from '../data/blog'

describe('RAG Synthesis & Multilingual Routing Specification (TDD)', () => {
  describe('resolveResponseLanguage', () => {
    it('should detect Cyrillic queries and resolve to "ua"', () => {
      expect(resolveResponseLanguage('какой стек технологий в Unitrition?', 'en')).toBe('ua')
      expect(resolveResponseLanguage('розкажи про свій досвід', 'en')).toBe('ua')
      expect(resolveResponseLanguage('какие проекты ты делал', 'en')).toBe('ua')
    })

    it('should detect Spanish queries and resolve to "es"', () => {
      expect(resolveResponseLanguage('¿cuánto tiempo toma un proyecto?', 'en')).toBe('es')
      expect(resolveResponseLanguage('cuentame sobre tus proyectos', 'en')).toBe('es')
      expect(resolveResponseLanguage('servicios y precios', 'en')).toBe('es')
    })

    it('should respect preferredLocale when query is neutral or English', () => {
      expect(resolveResponseLanguage('tell me about your background', 'en')).toBe('en')
      expect(resolveResponseLanguage('AWS', 'ua')).toBe('ua')
      expect(resolveResponseLanguage('Shopify', 'es')).toBe('es')
    })
  })

  describe('resolveBlogFromQueryOrContext', () => {
    it('should resolve blog post from options.projectSlug', () => {
      const post = resolveBlogFromQueryOrContext('', {
        projectSlug: 'nextjs-vs-headless-wordpress-custom-php-2026',
      })
      expect(post).toBeDefined()
      expect(post?.slug).toBe('nextjs-vs-headless-wordpress-custom-php-2026')
    })

    it('should resolve blog post from topic in query', () => {
      const postWcag = resolveBlogFromQueryOrContext('Tell me about WCAG 2.2 and accessibility compliance')
      expect(postWcag).toBeDefined()
      expect(postWcag?.slug).toBe('wcag-22-aa-european-accessibility-act-2026')

      const postRag = resolveBlogFromQueryOrContext('How does in-browser Hybrid RAG work?')
      expect(postRag).toBeDefined()
      expect(postRag?.slug).toBe('autonomous-hybrid-rag-architecture-browser')

      const postSecurity = resolveBlogFromQueryOrContext('How to implement client-side zero-trust security?')
      expect(postSecurity).toBeDefined()
      expect(postSecurity?.slug).toBe('client-side-zero-trust-security')
    })
  })

  describe('formatBlogPostDetails', () => {
    it('should format blog article into structured markdown with zero em dashes and proper read time', () => {
      const post = getBlogPostBySlug('autonomous-hybrid-rag-architecture-browser')
      expect(post).toBeDefined()
      const text = formatBlogPostDetails(post!, 'en')

      expect(text).toContain(
        '### [Autonomous Hybrid RAG Architecture: In-Browser Vector Retrieval, Generative UI & Next.js 16 SSG](/en/blog/autonomous-hybrid-rag-architecture-browser)',
      )
      expect(text).toContain('Key Architectural Takeaways:')
      expect(text).not.toContain('\u2014')
      expect(text).not.toContain('read read')
      expect(text).toContain('*AI Engineering · 12 min read*')

      const textUa = formatBlogPostDetails(post!, 'ua')
      expect(textUa).not.toContain('читання read')
      expect(textUa).toContain('*AI-інженерія · 12 хв читання*')
    })
  })

  describe('resolveCategoryOrTechShowcase', () => {
    it('should resolve Shopify showcase query with relevant project slugs', () => {
      const showcase = resolveCategoryOrTechShowcase('Show me Shopify projects', 'en')
      expect(showcase).toBeDefined()
      expect(showcase?.category).toBe('Shopify & E-Commerce')
      expect(showcase?.projectSlugs).toContain('kidzely')
      expect(showcase?.answer).toContain('Kidzely')
      expect(showcase?.answer).not.toContain('\u2014')
    })

    it('should resolve AWS showcase query with relevant project slugs', () => {
      const showcase = resolveCategoryOrTechShowcase('Tell me about AWS cloud infrastructure projects', 'en')
      expect(showcase).toBeDefined()
      expect(showcase?.category).toBe('AWS Cloud Infrastructure')
      expect(showcase?.projectSlugs).toContain('it-magic')
      expect(showcase?.answer).toContain('IT-Magic')
      expect(showcase?.answer).not.toContain('\u2014')
    })
  })

  describe('synthesizeLocalRagAnswer & Generative Cards', () => {
    it('should synthesize local RAG answer for blog topic in Cyrillic', () => {
      const answer = synthesizeLocalRagAnswer('Розкажи про доступність WCAG 2.2', { locale: 'ua' })
      expect(answer).toContain('WCAG 2.2 AA')
      expect(answer).toContain('/ua/blog/wcag-22-aa-european-accessibility-act-2026')
      expect(answer).not.toContain('\u2014')
    })

    it('should return appropriate source label for blog article', () => {
      const label = getRagSourceLabel('WCAG 2.2 accessibility', { locale: 'en' })
      expect(label).toContain('WCAG 2.2')
      expect(label).toContain('(Article)')
    })

    it('should return relevant project cards for blog post with applied projects', () => {
      const cards = getRelevantProjectCards('Tell me about Next.js vs Headless WordPress', { locale: 'en' })
      expect(cards.length).toBeGreaterThan(0)
      const slugs = cards.map((c) => c.slug)
      expect(slugs).toContain('unitrition')
      expect(slugs).toContain('it-magic')
    })

    it('should return contextual follow-ups for blog articles', () => {
      const followUps = getContextualFollowUps('Tell me about WCAG 2.2 AA', { locale: 'en' })
      expect(followUps.length).toBe(3)
    })

    it('should output localized Ukrainian and Spanish features and architecture for WPSKILLS', () => {
      const featuresUa = synthesizeLocalRagAnswer('Основні можливості та функції проєкту WPSKILLS?', {
        locale: 'ua',
      })
      expect(featuresUa).toContain('Основні функції проєкту Fullstack AI Lab (formerly WPSKILLS):')
      expect(featuresUa).toContain('Нативна компіляція на Rust MDX-RS')

      const archEs = synthesizeLocalRagAnswer('¿Cuál es la arquitectura de WPSKILLS?', {
        locale: 'es',
      })
      expect(archEs).toContain('Arquitectura e ingeniería de Fullstack AI Lab (formerly WPSKILLS):')
      expect(archEs).toContain('Desafíos clave:')
      expect(archEs).toContain('Soluciones implementadas:')
    })

    it('should include WPSKILLS in Next.js showcase text and slugs', () => {
      const showcase = resolveCategoryOrTechShowcase('Show me Next.js projects', 'en')
      expect(showcase).toBeDefined()
      expect(showcase?.projectSlugs).toContain('wpskills')
      expect(showcase?.answer).toContain('WPSKILLS')
    })
  })
})
