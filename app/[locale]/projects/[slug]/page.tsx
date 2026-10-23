/* eslint-disable react-refresh/only-export-components */
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllProjectEntries, getProjectBySlug } from '../../../../src/lib/projects'
import {
  buildProjectJsonLd,
  buildProjectBreadcrumbsJsonLd,
  toAbsoluteAssetUrl,
} from '../../../../src/lib/seo'
import ProjectDetailView from '../../../../src/components/ProjectDetailView'

interface ProjectPageProps {
  params: Promise<{
    locale: string
    slug: string
  }>
}

export function generateStaticParams() {
  const locales = ['en', 'ua', 'es']
  const entries = getAllProjectEntries()

  const paramsList: { locale: string; slug: string }[] = []

  for (const locale of locales) {
    for (const entry of entries) {
      paramsList.push({
        locale,
        slug: entry.slug,
      })
    }
  }

  return paramsList
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { locale, slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return {
      title: 'Project Not Found | Artur Yusupov',
    }
  }

  const localizedDesc =
    locale === 'ua' && project.descriptionUa
      ? project.descriptionUa
      : locale === 'es' && project.descriptionEs
        ? project.descriptionEs
        : project.description

  const caseStudyLabel =
    locale === 'ua'
      ? 'Кейс проєкту'
      : locale === 'es'
        ? 'Caso de estudio'
        : 'Case Study'

  const title = `${project.title} - ${caseStudyLabel} | Artur Yusupov`
  const ogLocale = locale === 'ua' ? 'uk_UA' : locale === 'es' ? 'es_ES' : 'en_US'
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.yusupovartur.com'
  const imageUrl = toAbsoluteAssetUrl(project.image)

  return {
    title,
    description: localizedDesc,
    alternates: {
      canonical: `/${locale}/projects/${slug}`,
      languages: {
        en: `/en/projects/${slug}`,
        uk: `/ua/projects/${slug}`,
        es: `/es/projects/${slug}`,
        'x-default': `/en/projects/${slug}`,
      },
    },
    openGraph: {
      title,
      description: localizedDesc,
      url: `${siteUrl}/${locale}/projects/${slug}`,
      siteName: 'Artur Yusupov Portfolio',
      locale: ogLocale,
      images: [
        {
          url: imageUrl,
          alt: project.title,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: localizedDesc,
      images: [imageUrl],
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { locale, slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const jsonLd = buildProjectJsonLd(project, slug, locale)
  const breadcrumbsJsonLd = buildProjectBreadcrumbsJsonLd(project, slug, locale)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <main id="main-content">
        <ProjectDetailView project={project} slug={slug} locale={locale} />
      </main>
    </>
  )
}
