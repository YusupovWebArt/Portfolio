/* eslint-disable react-refresh/only-export-components */
import type { Metadata } from 'next'
import BlogCatalogView from '../../../src/components/blog/BlogCatalogView'

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

  return {
    title,
    description,
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
    },
  }
}

export default async function BlogCatalogPage({ params }: BlogCatalogPageProps) {
  const { locale } = await params
  return (
    <main id="main-content">
      <BlogCatalogView locale={locale || 'en'} />
    </main>
  )
}
