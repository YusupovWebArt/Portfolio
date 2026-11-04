import { describe, it, expect } from 'vitest'
import {
  allServices,
  getServiceBySlug,
  getAllServiceSlugs,
  getServicesForAudience,
} from '../data/services'
import {
  buildServiceJsonLd,
  buildServiceCatalogJsonLd,
  buildServiceBreadcrumbsJsonLd,
  buildServiceCatalogBreadcrumbsJsonLd,
  buildServiceFaqJsonLd,
  buildSevilleLocalBusinessJsonLd,
} from '../lib/seo'
import { getProjectBySlug } from '../lib/projects'

describe('Commercial B2B Services Specification & SEO Standards', () => {
  const locales = ['en', 'ua', 'es'] as const
  const expectedSlugs = [
    'white-label-agency-partner',
    'headless-wordpress-nextjs-migration',
    'web-performance-core-web-vitals',
    'custom-web-development-seville',
    'rag-ai-assistants-business',
  ]

  describe('Service Inventory & Locales Parity', () => {
    it('contains all 5 core B2B service offerings', () => {
      expect(allServices).toHaveLength(5)
      const slugs = getAllServiceSlugs()
      for (const expected of expectedSlugs) {
        expect(slugs).toContain(expected)
      }
    })

    it('retrieves individual services by slug safely', () => {
      for (const slug of expectedSlugs) {
        const service = getServiceBySlug(slug)
        expect(service).toBeDefined()
        expect(service?.slug).toBe(slug)
      }
      expect(getServiceBySlug('non-existent-service')).toBeUndefined()
    })

    it('filters services by audience correctly', () => {
      const agencyServices = getServicesForAudience('agencies')
      const pymesServices = getServicesForAudience('pymes')

      expect(agencyServices.length).toBeGreaterThanOrEqual(3)
      expect(pymesServices.length).toBeGreaterThanOrEqual(3)
    })

    it('enforces full trilingual parity (EN, UA, ES) across all services', () => {
      for (const service of allServices) {
        for (const loc of locales) {
          const content = service.content[loc]
          expect(content).toBeDefined()
          expect(content.title.length).toBeGreaterThan(5)
          expect(content.badge.length).toBeGreaterThan(2)
          expect(content.shortDesc.length).toBeGreaterThan(20)
          expect(content.heroLead.length).toBeGreaterThan(30)
          expect(content.ctaHeadline.length).toBeGreaterThan(10)
          expect(content.ctaLead.length).toBeGreaterThan(20)
          expect(content.whatsappMessage.length).toBeGreaterThan(10)

          expect(content.metrics.length).toBeGreaterThanOrEqual(3)
          expect(content.problemsSolved.length).toBeGreaterThanOrEqual(3)
          expect(content.deliverables.length).toBeGreaterThanOrEqual(2)
          expect(content.workflowSteps.length).toBeGreaterThanOrEqual(4)
          expect(content.faqs.length).toBeGreaterThanOrEqual(4)
        }
      }
    })
  })

  describe('Content Style & Anti-Scrape Compliance', () => {
    it('contains strictly zero em dashes across all service texts and locales', () => {
      for (const service of allServices) {
        for (const loc of locales) {
          const content = service.content[loc]
          const serialized = JSON.stringify(content)
          expect(serialized).not.toContain('\u2014')
        }
      }
    })

    it('contains pre-filled WhatsApp action prompts without raw plaintext emails or phone numbers', () => {
      for (const service of allServices) {
        for (const loc of locales) {
          const content = service.content[loc]
          expect(content.whatsappMessage).toMatch(/Artur|Артур/)
          expect(content.whatsappMessage).not.toContain('@')
          expect(content.whatsappMessage).not.toMatch(/\+34\s*\d{3}/)
        }
      }
    })
  })

  describe('Portfolio Case Study Integration', () => {
    it('links each service to at least 3 valid, indexed project case studies', () => {
      for (const service of allServices) {
        expect(service.relevantProjectSlugs.length).toBeGreaterThanOrEqual(3)
        for (const projSlug of service.relevantProjectSlugs) {
          const project = getProjectBySlug(projSlug)
          expect(project).toBeDefined()
          expect(project?.title.length).toBeGreaterThan(0)
        }
      }
    })
  })

  describe('Schema.org Microdata & Breadcrumbs Generators', () => {
    it('builds a valid Service Schema.org graph with Artur Yusupov as provider', () => {
      const service = getServiceBySlug('white-label-agency-partner')!
      const schema = buildServiceJsonLd(service, 'es')

      expect(schema['@context']).toBe('https://schema.org')
      expect(schema['@type']).toBe('Service')
      expect(schema.name).toBe(service.content.es.title)
      expect(schema.areaServed).toHaveLength(3)
      expect(schema.provider.name).toBe('Artur Yusupov')
      expect(schema.provider.disambiguatingDescription).toContain('Sevilla')
      expect(schema.offers.priceCurrency).toBe('EUR')
      expect(JSON.stringify(schema)).not.toContain('\u2014')
    })

    it('builds a valid Service Catalog ItemList Schema.org graph', () => {
      const catalogSchema = buildServiceCatalogJsonLd(allServices, 'en')

      expect(catalogSchema['@context']).toBe('https://schema.org')
      expect(catalogSchema['@type']).toBe('ItemList')
      expect(catalogSchema.itemListElement).toHaveLength(5)
      expect(catalogSchema.itemListElement[0].url).toContain('/services/')
      expect(JSON.stringify(catalogSchema)).not.toContain('\u2014')
    })

    it('builds a 3-level BreadcrumbList Schema.org graph for service detail pages', () => {
      const breadcrumbs = buildServiceBreadcrumbsJsonLd('Desarrollo Marca Blanca', 'white-label-agency-partner', 'es')

      expect(breadcrumbs['@context']).toBe('https://schema.org')
      expect(breadcrumbs['@type']).toBe('BreadcrumbList')
      expect(breadcrumbs.itemListElement).toHaveLength(3)

      expect(breadcrumbs.itemListElement[0]).toEqual({
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: 'https://www.yusupovartur.com/es',
      })

      expect(breadcrumbs.itemListElement[1]).toEqual({
        '@type': 'ListItem',
        position: 2,
        name: 'Servicios',
        item: 'https://www.yusupovartur.com/es/services',
      })

      expect(breadcrumbs.itemListElement[2]).toEqual({
        '@type': 'ListItem',
        position: 3,
        name: 'Desarrollo Marca Blanca',
        item: 'https://www.yusupovartur.com/es/services/white-label-agency-partner',
      })
    })

    it('builds a 2-level BreadcrumbList Schema.org graph for the service catalog', () => {
      const breadcrumbs = buildServiceCatalogBreadcrumbsJsonLd('ua')

      expect(breadcrumbs['@context']).toBe('https://schema.org')
      expect(breadcrumbs['@type']).toBe('BreadcrumbList')
      expect(breadcrumbs.itemListElement).toHaveLength(2)

      expect(breadcrumbs.itemListElement[0].name).toBe('Головна')
      expect(breadcrumbs.itemListElement[1].name).toBe('Послуги')
    })
    it('builds a valid FAQPage Schema.org graph for rich search results', () => {
      const service = getServiceBySlug('headless-wordpress-nextjs-migration')!
      const faqSchema = buildServiceFaqJsonLd(service.content.es.faqs)

      expect(faqSchema['@context']).toBe('https://schema.org')
      expect(faqSchema['@type']).toBe('FAQPage')
      expect(faqSchema.mainEntity).toHaveLength(4)
      expect(faqSchema.mainEntity[0]['@type']).toBe('Question')
      expect(faqSchema.mainEntity[0].acceptedAnswer['@type']).toBe('Answer')
      expect(JSON.stringify(faqSchema)).not.toContain('\u2014')
    })

    it('builds a valid Seville LocalBusiness Schema.org graph with geo coordinates', () => {
      const localSchema = buildSevilleLocalBusinessJsonLd('es')

      expect(localSchema['@context']).toBe('https://schema.org')
      expect(localSchema['@type']).toBe('ProfessionalService')
      expect(localSchema.address.addressLocality).toBe('Sevilla')
      expect(localSchema.address.postalCode).toBe('41001')
      expect(localSchema.geo.latitude).toBe(37.3891)
      expect(localSchema.geo.longitude).toBe(-5.9845)
      expect(JSON.stringify(localSchema)).not.toContain('\u2014')
    })
  })
})
