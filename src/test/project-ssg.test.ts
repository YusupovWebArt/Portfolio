import { describe, it, expect } from 'vitest'
import fs from 'node:fs'
import path from 'node:path'
import { loadKnowledgeBase } from '../lib/ai/knowledge'

describe('Standalone SSG Project Pages Specification (TDD)', () => {
  it('should have app/[locale]/projects/[slug]/page.tsx implementing SSG with async params', () => {
    const pagePath = path.resolve(
      process.cwd(),
      'app/[locale]/projects/[slug]/page.tsx',
    )
    expect(fs.existsSync(pagePath)).toBe(true)

    const content = fs.readFileSync(pagePath, 'utf8')
    expect(content).toContain('generateStaticParams')
    expect(content).toContain('generateMetadata')
    expect(content).toContain('await params')
    expect(content).not.toContain('—')
  })

  it(
    'should generate static params for all 71 projects across en, ua, and es locales',
    async () => {
    const kb = loadKnowledgeBase()
    expect(kb.projects.length).toBe(71)

    // Dynamic import to verify generateStaticParams output
    const mod = await import('../../app/[locale]/projects/[slug]/page')
    const paramsList = await mod.generateStaticParams()

    // 71 projects * 3 locales = 213 pre-rendered paths
    expect(paramsList).toHaveLength(213)

    const itMagicParams = paramsList.find(
      (p: { locale: string; slug: string }) => p.slug === 'it-magic' && p.locale === 'en',
    )
    expect(itMagicParams).toBeDefined()

    const wpskillsParams = paramsList.find(
      (p: { locale: string; slug: string }) => p.slug === 'wpskills' && p.locale === 'en',
    )
    expect(wpskillsParams).toBeDefined()
  }, 15000)

  it('should have standalone ProjectDetailView component without em dashes', () => {
    const viewPath = path.resolve(
      process.cwd(),
      'src/components/ProjectDetailView.tsx',
    )
    expect(fs.existsSync(viewPath)).toBe(true)

    const content = fs.readFileSync(viewPath, 'utf8')
    expect(content).toContain('detailMetrics')
    expect(content).toContain('architecture')
    expect(content).not.toContain('—')
  })
})
