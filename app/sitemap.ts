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
      lastModified: new Date('2026-10-15'),
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
        lastModified: new Date('2026-10-15'),
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

  // Blog catalog pages for each locale
  for (const locale of locales) {
    sitemapEntries.push({
      url: `${baseUrl}/${locale}/blog`,
      lastModified: new Date('2026-10-18'),
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: {
        languages: {
          en: `${baseUrl}/en/blog`,
          uk: `${baseUrl}/ua/blog`,
          es: `${baseUrl}/es/blog`,
        },
      },
    })
  }

  // Blog article pages for each locale
  const blogSlugs = [
    'nextjs-vs-headless-wordpress-custom-php-2026',
    'autonomous-hybrid-rag-architecture-browser',
    'wcag-22-aa-european-accessibility-act-2026',
  ]
  for (const locale of locales) {
    for (const slug of blogSlugs) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/blog/${slug}`,
        lastModified: new Date('2026-10-18'),
        changeFrequency: 'monthly',
        priority: 0.85,
        alternates: {
          languages: {
            en: `${baseUrl}/en/blog/${slug}`,
            uk: `${baseUrl}/ua/blog/${slug}`,
            es: `${baseUrl}/es/blog/${slug}`,
          },
        },
      })
    }
  }

  return sitemapEntries
}
