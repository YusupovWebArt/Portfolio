import { describe, it, expect } from 'vitest'
import fs from 'node:fs'
import path from 'node:path'
import {
  buildProjectJsonLd,
  buildProjectBreadcrumbsJsonLd,
  buildBlogCatalogBreadcrumbsJsonLd,
  buildWebsiteFaqJsonLd,
  toBcp47Lang,
  toAbsoluteAssetUrl,
  toAbsoluteOgImageUrl,
} from '../lib/seo'
import { getProjectBySlug, getAllProjectEntries } from '../lib/projects'
import { allBlogPosts } from '../data/blog'

describe('Automated Project SEO/GEO Metadata Specification (TDD)', () => {
  it('should generate valid Schema.org TechArticle JSON-LD for IT-Magic with absolute image URL, keywords, and BCP-47 language code', () => {
    const project = getProjectBySlug('it-magic')
    expect(project).toBeDefined()

    const jsonLd = buildProjectJsonLd(project!, 'it-magic', 'en')
    expect(jsonLd['@context']).toBe('https://schema.org')
    expect(jsonLd['@type']).toBe('TechArticle')
    expect(jsonLd.headline).toContain('IT-Magic')
    expect(jsonLd.author.name).toBe('Artur Yusupov')
    expect(jsonLd.about['@type']).toBe('SoftwareApplication')
    expect(jsonLd.about.url).toBe(project!.liveUrl)
    expect(jsonLd.keywords).toContain('Elementor')
    expect(jsonLd.image).toMatch(/^https:\/\/www\.yusupovartur\.com\/images\//)
    expect(jsonLd.image).not.toContain('/Portfolio/')
    expect(jsonLd.inLanguage).toBe('en')
    expect(JSON.stringify(jsonLd)).not.toContain('\u2014')

    const jsonLdUa = buildProjectJsonLd(project!, 'it-magic', 'ua')
    expect(jsonLdUa.inLanguage).toBe('uk')
    expect(toBcp47Lang('ua')).toBe('uk')
    expect(toAbsoluteAssetUrl('/Portfolio/images/test.webp')).toBe(
      'https://www.yusupovartur.com/images/test.webp',
    )
    expect(toAbsoluteOgImageUrl('/Portfolio/images/blog/cover-shopify-vs-woo.svg')).toBe(
      'https://www.yusupovartur.com/images/blog/cover-nextjs-vs-headless-wp.png',
    )
    expect(toAbsoluteOgImageUrl('/Portfolio/images/blog/cover-autonomous-hybrid-rag.png')).toBe(
      'https://www.yusupovartur.com/images/blog/cover-autonomous-hybrid-rag.png',
    )
  })

  it('should link personal flagship projects to their deep-dive blog articles via subjectOf in JSON-LD', () => {
    const wpskills = getProjectBySlug('fullstack-ai-lab')
    expect(wpskills).toBeDefined()

    const jsonLd = buildProjectJsonLd(wpskills!, 'fullstack-ai-lab', 'en')
    expect(jsonLd.subjectOf).toEqual({
      '@type': 'TechArticle',
      url: 'https://www.yusupovartur.com/en/blog/fullstack-ai-lab-interactive-edtech-architecture',
    })

    const breadcrumbsBlog = buildBlogCatalogBreadcrumbsJsonLd('es')
    expect(breadcrumbsBlog['@type']).toBe('BreadcrumbList')
    expect(breadcrumbsBlog.itemListElement).toHaveLength(2)
    expect(breadcrumbsBlog.itemListElement[0].name).toBe('Inicio')
    expect(breadcrumbsBlog.itemListElement[1].item).toBe('https://www.yusupovartur.com/es/blog')
  })

  it('should generate valid BreadcrumbList Schema.org microdata with localized labels', () => {
    const project = getProjectBySlug('unitrition')
    expect(project).toBeDefined()

    const breadcrumbs = buildProjectBreadcrumbsJsonLd(project!, 'unitrition', 'en')
    expect(breadcrumbs['@type']).toBe('BreadcrumbList')
    expect(breadcrumbs.itemListElement).toHaveLength(3)
    expect(breadcrumbs.itemListElement[0].name).toBe('Home')
    expect(breadcrumbs.itemListElement[1].name).toBe('Projects')
    expect(breadcrumbs.itemListElement[2].name).toBe(project!.title)
    expect(JSON.stringify(breadcrumbs)).not.toContain('\u2014')

    const breadcrumbsUa = buildProjectBreadcrumbsJsonLd(project!, 'unitrition', 'ua')
    expect(breadcrumbsUa.itemListElement[0].name).toBe('Головна')
    expect(breadcrumbsUa.itemListElement[1].name).toBe('Проєкти')
  })

  it('should generate valid FAQPage Schema.org structured data for GEO AI search', () => {
    const faqJsonLd = buildWebsiteFaqJsonLd('en')
    expect(faqJsonLd['@context']).toBe('https://schema.org')
    expect(faqJsonLd['@type']).toBe('FAQPage')
    expect(faqJsonLd.mainEntity.length).toBeGreaterThanOrEqual(4)
    expect(faqJsonLd.mainEntity[0]['@type']).toBe('Question')
    expect(faqJsonLd.mainEntity[0].acceptedAnswer['@type']).toBe('Answer')
    expect(JSON.stringify(faqJsonLd)).not.toContain('\u2014')
  })

  it('should provide public/llms.txt and public/llms-full.txt for Generative Engine Optimization (GEO)', () => {
    const llmsPath = path.resolve(process.cwd(), 'public/llms.txt')
    const llmsFullPath = path.resolve(process.cwd(), 'public/llms-full.txt')

    expect(fs.existsSync(llmsPath)).toBe(true)
    expect(fs.existsSync(llmsFullPath)).toBe(true)

    const llmsContent = fs.readFileSync(llmsPath, 'utf8')
    const llmsFullContent = fs.readFileSync(llmsFullPath, 'utf8')

    expect(llmsContent).toContain('Fullstack AI Lab')
    expect(llmsContent).toContain('Unitrition')
    expect(llmsContent).not.toContain('\u2014')
    expect(llmsFullContent).toContain('Fullstack AI Lab')
    expect(llmsFullContent).not.toContain('\u2014')

    for (const entry of getAllProjectEntries()) {
      expect(llmsFullContent).toContain(`/en/projects/${entry.slug}`)
    }
    for (const post of allBlogPosts) {
      expect(llmsFullContent).toContain(`/en/blog/${post.slug}`)
    }
  })
})
