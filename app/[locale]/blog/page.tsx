/* eslint-disable react-refresh/only-export-components */
import type { Metadata } from 'next'
import BlogCatalogView from '../../../src/components/blog/BlogCatalogView'
import {
  allBlogPosts,
  getBlogTitle,
  getBlogDescription,
} from '../../../src/data/blog'
import {
  buildBlogCatalogJsonLd,
  buildBlogCatalogBreadcrumbsJsonLd,
  serializeJsonLd,
} from '../../../src/lib/seo'

interface BlogCatalogPageProps {
  params: Promise<{
    locale: string
  }>
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ua' }, { locale: 'es' }, { locale: 'de' }]
}

export async function generateMetadata({
  params,
}: BlogCatalogPageProps): Promise<Metadata> {
  const { locale } = await params
  const isUa = locale === 'ua'
  const isEs = locale === 'es'
  const isDe = locale === 'de'

  const title = isUa
    ? 'Архітектура Next.js 16 та інженерний блог | Артур Юсупов'
    : isEs
      ? 'Arquitectura Web y Next.js 16 en Producción | Artur Yusupov'
      : isDe
        ? 'Webarchitektur & Next.js 16 Engineering | Artur Yusupov'
        : 'Web Architecture & Next.js 16 Engineering | Artur Yusupov'

  const description = isUa
    ? '47 практичних досліджень: міграція на Next.js 16, кешування HPOS, автономні AI-агенти та оптимізація швидкості до < 0.8s.'
    : isEs
      ? '47 artículos técnicos avanzados: Next.js 16, WordPress headless con HPOS, agentes IA autónomos y cumplimiento WCAG 2.2 AA.'
      : isDe
        ? '47 praxisnahe Architektur-Fallstudien: Next.js 16, Headless WordPress mit HPOS, autonome KI-Agenten und Sub-Sekunden-Performance.'
        : 'Explore 47 production-grade engineering guides on Next.js 16, Hybrid RAG, high-concurrency WordPress, and sub-second Core Web Vitals.'

  const ogImageUrl = 'https://www.yusupovartur.com/images/blog/cover-nextjs-vs-headless-wp.png'

  return {
    title,
    description,
    keywords: [
      'Engineering Blog',
      'Web Architecture',
      'Next.js 16',
      'Headless WordPress',
      'Core Web Vitals',
      'Autonomous RAG AI',
      'WCAG 2.2 AA',
      'EAA 2026',
      'Fullstack Web Engineer',
      'Artur Yusupov',
    ],
    alternates: {
      canonical: `https://www.yusupovartur.com/${locale}/blog`,
      languages: {
        en: 'https://www.yusupovartur.com/en/blog',
        uk: 'https://www.yusupovartur.com/ua/blog',
        es: 'https://www.yusupovartur.com/es/blog',
        'es-ES': 'https://www.yusupovartur.com/es/blog',
        de: 'https://www.yusupovartur.com/de/blog',
        'de-DE': 'https://www.yusupovartur.com/de/blog',
        'x-default': 'https://www.yusupovartur.com/en/blog',
      },
    },
    openGraph: {
      title,
      description,
      url: `https://www.yusupovartur.com/${locale}/blog`,
      siteName: 'Artur Yusupov Engineering Blog',
      locale: isUa ? 'uk_UA' : isEs ? 'es_ES' : isDe ? 'de_DE' : 'en_US',
      type: 'website',
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImageUrl],
    },
  }
}

export default async function BlogCatalogPage({ params }: BlogCatalogPageProps) {
  const { locale } = await params
  const currentLocale = locale || 'en'

  const catalogJsonLdItems = allBlogPosts.map((post) => ({
    title: getBlogTitle(post, currentLocale),
    desc: getBlogDescription(post, currentLocale),
    date: post.date,
    coverImage: post.coverImage,
    slug: post.slug,
  }))

  const catalogJsonLd = buildBlogCatalogJsonLd(catalogJsonLdItems, currentLocale)
  const breadcrumbsJsonLd = buildBlogCatalogBreadcrumbsJsonLd(currentLocale)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(catalogJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbsJsonLd) }}
      />
      <main id="main-content">
        <BlogCatalogView locale={currentLocale} />
      </main>
    </>
  )
}
