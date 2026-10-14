import type { MetadataRoute } from 'next'
import { getAllProjectEntries } from '../src/lib/projects'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.yusupovartur.com'
  const locales = ['en', 'ua', 'es']
  const entries = getAllProjectEntries()

  const sitemapEntries: MetadataRoute.Sitemap = []

  // Landing pages for each locale
  for (const locale of locales) {
    sitemapEntries.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date('2026-06-22'),
      changeFrequency: 'monthly',
      priority: 1.0,
      alternates: {
        languages: {
          en: `${baseUrl}/en`,
          uk: `${baseUrl}/ua`,
          es: `${baseUrl}/es`,
        },
      },
    })
  }

  // Project pages for each locale
  for (const locale of locales) {
    for (const entry of entries) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/projects/${entry.slug}`,
        lastModified: new Date('2026-06-22'),
        changeFrequency: 'monthly',
        priority: 0.8,
        alternates: {
          languages: {
            en: `${baseUrl}/en/projects/${entry.slug}`,
            uk: `${baseUrl}/ua/projects/${entry.slug}`,
            es: `${baseUrl}/es/projects/${entry.slug}`,
          },
        },
      })
    }
  }

  return sitemapEntries
}
