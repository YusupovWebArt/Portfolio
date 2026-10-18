import { describe, it, expect } from 'vitest'
import {
  buildProjectJsonLd,
  buildProjectBreadcrumbsJsonLd,
  buildWebsiteFaqJsonLd,
} from '../lib/seo'
import { getProjectBySlug } from '../lib/projects'

describe('Automated Project SEO/GEO Metadata Specification (TDD)', () => {
  it('should generate valid Schema.org TechArticle JSON-LD for IT-Magic', () => {
    const project = getProjectBySlug('it-magic')
    expect(project).toBeDefined()

    const jsonLd = buildProjectJsonLd(project!, 'it-magic', 'en')
    expect(jsonLd['@context']).toBe('https://schema.org')
    expect(jsonLd['@type']).toBe('TechArticle')
    expect(jsonLd.headline).toContain('IT-Magic')
    expect(jsonLd.author.name).toBe('Artur Yusupov')
    expect(jsonLd.about['@type']).toBe('SoftwareApplication')
    expect(JSON.stringify(jsonLd)).not.toContain('\u2014')
  })

  it('should generate valid BreadcrumbList Schema.org microdata', () => {
    const project = getProjectBySlug('unitrition')
    expect(project).toBeDefined()

    const breadcrumbs = buildProjectBreadcrumbsJsonLd(project!, 'unitrition', 'en')
    expect(breadcrumbs['@type']).toBe('BreadcrumbList')
    expect(breadcrumbs.itemListElement).toHaveLength(3)
    expect(breadcrumbs.itemListElement[0].name).toBe('Home')
    expect(breadcrumbs.itemListElement[1].name).toBe('Projects')
    expect(breadcrumbs.itemListElement[2].name).toBe(project!.title)
    expect(JSON.stringify(breadcrumbs)).not.toContain('\u2014')
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
})
