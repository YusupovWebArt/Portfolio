import type { MetadataRoute } from 'next'
import { getAllProjectEntries } from '../src/lib/projects'
import { allBlogPosts } from '../src/data/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.yusupovartur.com'
  const locales = ['en', 'ua', 'es']
  const entries = getAllProjectEntries()

  const sitemapEntries: MetadataRoute.Sitemap = []

  // Landing pages for each locale
  for (const locale of locales) {
    sitemapEntries.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date('2026-10-22'),
      changeFrequency: 'monthly',
      priority: 1.0,
      alternates: {
        languages: {
          en: `${baseUrl}/en`,
          uk: `${baseUrl}/ua`,
          es: `${baseUrl}/es`,
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
        lastModified: new Date('2026-10-22'),
        changeFrequency: 'monthly',
        priority: 0.8,
        alternates: {
          languages: {
            en: `${baseUrl}/en/projects/${entry.slug}`,
            uk: `${baseUrl}/ua/projects/${entry.slug}`,
            es: `${baseUrl}/es/projects/${entry.slug}`,
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
      lastModified: new Date('2026-10-22'),
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: {
        languages: {
          en: `${baseUrl}/en/blog`,
          uk: `${baseUrl}/ua/blog`,
          es: `${baseUrl}/es/blog`,
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
        lastModified: new Date(post.date || '2026-10-22'),
        changeFrequency: 'monthly',
        priority: 0.85,
        alternates: {
          languages: {
            en: `${baseUrl}/en/blog/${post.slug}`,
            uk: `${baseUrl}/ua/blog/${post.slug}`,
            es: `${baseUrl}/es/blog/${post.slug}`,
            'x-default': `${baseUrl}/en/blog/${post.slug}`,
          },
        },
      })
    }
  }

  return sitemapEntries
}
