import type { MetadataRoute } from 'next'
import { getAllProjectEntries } from '../src/lib/projects'
import { allBlogPosts } from '../src/data/blog'
import { allServices } from '../src/data/services'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.yusupovartur.com'
  const locales = ['en', 'ua', 'es', 'de']
  const entries = getAllProjectEntries()

  const sitemapEntries: MetadataRoute.Sitemap = []

  // Landing pages for each locale
  for (const locale of locales) {
    sitemapEntries.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date('2026-11-04'),
      changeFrequency: 'monthly',
      priority: 1.0,
      alternates: {
        languages: {
          en: `${baseUrl}/en`,
          uk: `${baseUrl}/ua`,
          es: `${baseUrl}/es`,
          'es-ES': `${baseUrl}/es`,
          de: `${baseUrl}/de`,
          'de-DE': `${baseUrl}/de`,
          'x-default': `${baseUrl}/en`,
        },
      },
    })
  }

  // Project pages for each locale
  for (const locale of locales) {
    for (const entry of entries) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/projects/${entry.slug}`,
        lastModified: new Date('2026-11-04'),
        changeFrequency: 'monthly',
        priority: 0.8,
        alternates: {
          languages: {
            en: `${baseUrl}/en/projects/${entry.slug}`,
            uk: `${baseUrl}/ua/projects/${entry.slug}`,
            es: `${baseUrl}/es/projects/${entry.slug}`,
            'es-ES': `${baseUrl}/es/projects/${entry.slug}`,
            de: `${baseUrl}/de/projects/${entry.slug}`,
            'de-DE': `${baseUrl}/de/projects/${entry.slug}`,
            'x-default': `${baseUrl}/en/projects/${entry.slug}`,
          },
        },
      })
    }
  }

  // Blog catalog pages for each locale
  for (const locale of locales) {
    sitemapEntries.push({
      url: `${baseUrl}/${locale}/blog`,
      lastModified: new Date('2026-11-04'),
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: {
        languages: {
          en: `${baseUrl}/en/blog`,
          uk: `${baseUrl}/ua/blog`,
          es: `${baseUrl}/es/blog`,
          'es-ES': `${baseUrl}/es/blog`,
          de: `${baseUrl}/de/blog`,
          'de-DE': `${baseUrl}/de/blog`,
          'x-default': `${baseUrl}/en/blog`,
        },
      },
    })
  }

  // Blog article pages for each locale
  for (const locale of locales) {
    for (const post of allBlogPosts) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/blog/${post.slug}`,
        lastModified: new Date(post.date || '2026-11-04'),
        changeFrequency: 'monthly',
        priority: 0.85,
        alternates: {
          languages: {
            en: `${baseUrl}/en/blog/${post.slug}`,
            uk: `${baseUrl}/ua/blog/${post.slug}`,
            es: `${baseUrl}/es/blog/${post.slug}`,
            'es-ES': `${baseUrl}/es/blog/${post.slug}`,
            de: `${baseUrl}/de/blog/${post.slug}`,
            'de-DE': `${baseUrl}/de/blog/${post.slug}`,
            'x-default': `${baseUrl}/en/blog/${post.slug}`,
          },
        },
      })
    }
  }



  // B2B Service catalog pages for each locale
  for (const locale of locales) {
    sitemapEntries.push({
      url: `${baseUrl}/${locale}/services`,
      lastModified: new Date('2026-11-04'),
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: {
        languages: {
          en: `${baseUrl}/en/services`,
          uk: `${baseUrl}/ua/services`,
          es: `${baseUrl}/es/services`,
          'es-ES': `${baseUrl}/es/services`,
          de: `${baseUrl}/de/services`,
          'de-DE': `${baseUrl}/de/services`,
          'x-default': `${baseUrl}/en/services`,
        },
      },
    })
  }

  // B2B Service detail pages for each locale
  for (const locale of locales) {
    for (const service of allServices) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/services/${service.slug}`,
        lastModified: new Date('2026-11-04'),
        changeFrequency: 'weekly',
        priority: 0.85,
        alternates: {
          languages: {
            en: `${baseUrl}/en/services/${service.slug}`,
            uk: `${baseUrl}/ua/services/${service.slug}`,
            es: `${baseUrl}/es/services/${service.slug}`,
            'es-ES': `${baseUrl}/es/services/${service.slug}`,
            de: `${baseUrl}/de/services/${service.slug}`,
            'de-DE': `${baseUrl}/de/services/${service.slug}`,
            'x-default': `${baseUrl}/en/services/${service.slug}`,
          },
        },
      })
    }
  }

  // Legal pages for each locale (Privacy Policy & Cookie Policy)
  const legalSlugs = ['privacy-policy', 'cookie-policy'] as const
  for (const locale of locales) {
    for (const slug of legalSlugs) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/${slug}`,
        lastModified: new Date('2026-11-04'),
        changeFrequency: 'monthly',
        priority: 0.5,
        alternates: {
          languages: {
            en: `${baseUrl}/en/${slug}`,
            uk: `${baseUrl}/ua/${slug}`,
            es: `${baseUrl}/es/${slug}`,
            'es-ES': `${baseUrl}/es/${slug}`,
            de: `${baseUrl}/de/${slug}`,
            'de-DE': `${baseUrl}/de/${slug}`,
            'x-default': `${baseUrl}/en/${slug}`,
          },
        },
      })
    }
  }

  return sitemapEntries
}
