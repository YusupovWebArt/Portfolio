import { describe, it, expect } from 'vitest'
import { GET } from '../../app/feed.xml/route'
import { allBlogPosts } from '../data/blog'
import { detectLanguage, tokenize, expandTokens } from '../lib/ai/text'

describe('RSS 2.0 Feed & German DACH RAG Upgrade Specification (TDD)', () => {
  it('should generate a valid RSS 2.0 XML feed containing all 47 blog articles with PNG enclosures and zero em dashes', async () => {
    const response = GET()
    expect(response.status).toBe(200)
    expect(response.headers.get('Content-Type')).toContain('application/rss+xml')

    const xml = await response.text()
    expect(xml).toContain('<?xml version="1.0" encoding="UTF-8"?>')
    expect(xml).toContain('<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">')
    expect(xml).toContain('href="https://www.yusupovartur.com/feed.xml"')
    expect(xml).not.toContain('\u2014')
    expect(xml).not.toContain('\u2013')
    expect(xml).not.toMatch(/enclosure url="[^"]+\.svg"/i)

    for (const post of allBlogPosts) {
      expect(xml).toContain(`<link>https://www.yusupovartur.com/en/blog/${post.slug}</link>`)
    }
  })

  it('should detect German DACH B2B queries and expand KI/DSGVO/Agentur synonyms cleanly', () => {
    expect(detectLanguage('DSGVO Beratung Agentur')).toBe('de')
    expect(detectLanguage('Barrierefreiheit EAA 2026 Onlineshop')).toBe('de')
    expect(detectLanguage('Geschwindigkeit Webseite Optimierung')).toBe('de')

    const expanded = expandTokens(tokenize('KI DSGVO Agentur Barrierefreiheit'))
    expect(expanded).toContain('ki')
    expect(expanded).toContain('ai')
    expect(expanded).toContain('gdpr')
    expect(expanded).toContain('agency')
    expect(expanded).toContain('wcag')
  })
})
