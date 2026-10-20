/* eslint-disable react-refresh/only-export-components */
import type { Metadata } from 'next'
import BlogCatalogView from '../../../src/components/blog/BlogCatalogView'
import {
  allBlogPosts,
  getBlogTitle,
  getBlogDescription,
} from '../../../src/data/blog'
import { buildBlogCatalogJsonLd } from '../../../src/lib/seo'

interface BlogCatalogPageProps {
  params: Promise<{
    locale: string
  }>
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ua' }, { locale: 'es' }]
}

export async function generateMetadata({
  params,
}: BlogCatalogPageProps): Promise<Metadata> {
  const { locale } = await params
  const isUa = locale === 'ua'
  const isEs = locale === 'es'

  const title = isUa
    ? 'Інженерний блог та архітектурні кейси | Артур Юсупов'
    : isEs
      ? 'Blog de Ingeniería y Casos de Arquitectura | Artur Yusupov'
      : 'Engineering Blog & Architectural Case Studies | Artur Yusupov'

  const description = isUa
    ? 'Глибокі технічні статті про архітектуру вебу, Next.js 16, кастомний WordPress, автономні RAG AI-рушії та доступність WCAG 2.2 AA.'
    : isEs
      ? 'Artículos técnicos en profundidad sobre arquitectura web, Next.js 16, WordPress a medida, motores de IA con RAG y accesibilidad WCAG 2.2 AA.'
      : 'In-depth engineering articles on web architecture, Next.js 16, custom WordPress, autonomous in-browser RAG AI engines, and WCAG 2.2 AA compliance.'

  const ogImageUrl = 'https://www.yusupovartur.com/Portfolio/images/blog/cover-nextjs-vs-headless-wp.png'

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
      },
    },
    openGraph: {
      title,
      description,
      url: `https://www.yusupovartur.com/${locale}/blog`,
      siteName: 'Artur Yusupov Engineering Blog',
      locale: isUa ? 'uk_UA' : isEs ? 'es_ES' : 'en_US',
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(catalogJsonLd) }}
      />
      <main id="main-content">
        <BlogCatalogView locale={currentLocale} />
      </main>
    </>
  )
}
