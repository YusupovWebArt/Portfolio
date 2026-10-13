import { Project } from '../components/projects/project-types'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yusupovartur.com'

export interface ProjectJsonLd {
  '@context': string
  '@type': string
  headline: string
  description: string
  image: string
  url: string
  datePublished?: string
  dateModified?: string
  inLanguage?: string
  author: {
    '@type': string
    name: string
    url: string
  }
  about: {
    '@type': string
    name: string
    applicationCategory: string
    operatingSystem: string
  }
}

export interface BreadcrumbListJsonLd {
  '@context': string
  '@type': string
  itemListElement: {
    '@type': string
    position: number
    name: string
    item: string
  }[]
}

export function buildProjectJsonLd(
  project: Project,
  slug: string,
  locale = 'en',
): ProjectJsonLd {
  const desc =
    locale === 'ua' && project.descriptionUa
      ? project.descriptionUa
      : locale === 'es' && project.descriptionEs
        ? project.descriptionEs
        : project.description

  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: project.title.replace(/—/g, '-'),
    description: desc.replace(/—/g, '-'),
    image: project.image,
    url: `${baseUrl}/${locale}/projects/${slug}`,
    datePublished: '2026-01-15T00:00:00Z',
    dateModified: '2026-10-12T00:00:00Z',
    inLanguage: locale,
    author: {
      '@type': 'Person',
      name: 'Artur Yusupov',
      url: baseUrl,
    },
    about: {
      '@type': 'SoftwareApplication',
      name: project.title.replace(/—/g, '-'),
      applicationCategory: project.category?.[0] || 'WebApplication',
      operatingSystem: 'All',
    },
  }
}

export function buildProjectBreadcrumbsJsonLd(
  project: Project,
  slug: string,
  locale = 'en',
): BreadcrumbListJsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${baseUrl}/${locale}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Projects',
        item: `${baseUrl}/${locale}#projects`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: project.title.replace(/—/g, '-'),
        item: `${baseUrl}/${locale}/projects/${slug}`,
      },
    ],
  }
}
