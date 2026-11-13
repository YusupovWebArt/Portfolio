import { describe, it, expect } from 'vitest'
import { privacyData } from '../data/legal/privacy'
import { cookiePolicyData } from '../data/legal/cookies'
import { LEGAL_CONFIG } from '../data/legal/legalConfig'
import { buildLegalBreadcrumbsJsonLd } from '../lib/seo'

describe('Legal & Compliance Data Standards (RGPD / AEPD)', () => {
  const locales = ['en', 'ua', 'es', 'de'] as const

  describe('Privacy Policy Data Structure', () => {
    it('provides complete data for EN, UA, ES, and DE locales', () => {
      for (const loc of locales) {
        const page = privacyData[loc]
        expect(page).toBeDefined()
        expect(page.title.length).toBeGreaterThan(0)
        expect(page.badge.length).toBeGreaterThan(0)
        expect(page.subtitle.length).toBeGreaterThan(0)
        expect(page.lastUpdatedDate).toBe(LEGAL_CONFIG.lastUpdatedDate)
        expect(page.sections.length).toBeGreaterThanOrEqual(5)
      }
    })

    it('contains no em dashes across all localized privacy text', () => {
      for (const loc of locales) {
        const page = privacyData[loc]
        expect(page.title).not.toContain('\u2014')
        expect(page.subtitle).not.toContain('\u2014')
        for (const sec of page.sections) {
          expect(sec.title).not.toContain('\u2014')
          for (const p of sec.paragraphs) {
            expect(p).not.toContain('\u2014')
          }
          if (sec.bulletPoints) {
            for (const b of sec.bulletPoints) {
              expect(b).not.toContain('\u2014')
            }
          }
        }
      }
    })

    it('explicitly covers ephemeral RAG AI processing and European regulations', () => {
      for (const loc of locales) {
        const page = privacyData[loc]
        const allText = JSON.stringify(page)
        expect(allText).toMatch(/GDPR|RGPD|DSGVO/)
        expect(allText).toMatch(/RAG|AI|KI/)
        expect(allText).toMatch(/Artur Yusupov|Артур Юсупов/)
      }
    })
  })

  describe('Cookie Policy Data Structure', () => {
    it('provides complete inventory and table headers for EN, UA, and ES locales', () => {
      for (const loc of locales) {
        const page = cookiePolicyData[loc]
        expect(page).toBeDefined()
        expect(page.title.length).toBeGreaterThan(0)
        expect(page.tableHeaders.cookie.length).toBeGreaterThan(0)
        expect(page.tableRows.length).toBeGreaterThanOrEqual(4)

        const cookieNames = page.tableRows.map((r) => r.cookie)
        expect(cookieNames.some((c) => c.includes('cookie_consent'))).toBe(true)
        expect(cookieNames.some((c) => c.includes('_ga'))).toBe(true)
      }
    })

    it('contains no em dashes across all localized cookie text', () => {
      for (const loc of locales) {
        const page = cookiePolicyData[loc]
        expect(page.title).not.toContain('\u2014')
        expect(page.subtitle).not.toContain('\u2014')
        for (const row of page.tableRows) {
          expect(row.cookie).not.toContain('\u2014')
          expect(row.purpose).not.toContain('\u2014')
        }
        for (const sec of page.sections) {
          expect(sec.title).not.toContain('\u2014')
          for (const p of sec.paragraphs) {
            expect(p).not.toContain('\u2014')
          }
        }
      }
    })

    it('documents Consent Mode v2 Basic architecture', () => {
      for (const loc of locales) {
        const page = cookiePolicyData[loc]
        const allText = JSON.stringify(page)
        expect(allText).toMatch(/Consent Mode v2/)
      }
    })
  })

  describe('Legal Breadcrumbs JSON-LD', () => {
    it('builds a valid 2-level BreadcrumbList Schema.org object', () => {
      const breadcrumbs = buildLegalBreadcrumbsJsonLd('Política de Privacidad', 'privacy-policy', 'es')
      expect(breadcrumbs['@context']).toBe('https://schema.org')
      expect(breadcrumbs['@type']).toBe('BreadcrumbList')
      expect(breadcrumbs.itemListElement).toHaveLength(2)

      expect(breadcrumbs.itemListElement[0]).toEqual({
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: 'https://www.yusupovartur.com/es',
      })

      expect(breadcrumbs.itemListElement[1]).toEqual({
        '@type': 'ListItem',
        position: 2,
        name: 'Política de Privacidad',
        item: 'https://www.yusupovartur.com/es/privacy-policy',
      })
    })
  })
})
