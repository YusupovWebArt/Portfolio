/* eslint-disable react-refresh/only-export-components */
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllProjectEntries, getProjectBySlug } from '../../../../src/lib/projects'
import { buildProjectJsonLd, buildProjectBreadcrumbsJsonLd } from '../../../../src/lib/seo'
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

  const title = `${project.title} - Case Study | Artur Yusupov`

  return {
    title,
    description: localizedDesc,
    alternates: {
      canonical: `/${locale}/projects/${slug}`,
      languages: {
        en: `/en/projects/${slug}`,
        uk: `/ua/projects/${slug}`,
        es: `/es/projects/${slug}`,
      },
    },
    openGraph: {
      title,
      description: localizedDesc,
      images: [
        {
          url: project.image,
          alt: project.title,
        },
      ],
      type: 'article',
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
