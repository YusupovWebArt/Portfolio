/* eslint-disable react-refresh/only-export-components */
import type { Metadata } from 'next'
import '../globals.css'
import {
  Providers,
  LanguageProvider,
  ThemeProvider,
  ConsentProvider,
} from '../../src/components/Providers'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'
import ConsentBanner from '../../src/components/ConsentBanner'
import ScrollToTopButton from '../../src/components/ScrollToTopButton'
import ChatModal from '../../src/components/ChatModal'
import { toBcp47Lang } from '../../src/lib/seo'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ua' }, { locale: 'es' }, { locale: 'de' }]
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const activeLocale = (locale as 'en' | 'ua' | 'es' | 'de') || 'en'
  const isUa = activeLocale === 'ua'
  const isEs = activeLocale === 'es'
  const isDe = activeLocale === 'de'

  const title = isUa
    ? 'Артур Юсупов | Full-Stack Engineer (Next.js, React, WordPress) та AI (SDD/TDD)'
    : isEs
      ? 'Artur Yusupov | Full-Stack Engineer (Next.js, React, WordPress) e IA (SDD/TDD)'
      : isDe
        ? 'Artur Yusupov | Full-Stack Engineer (Next.js, React, WordPress) & KI (SDD/TDD)'
        : 'Artur Yusupov | Full-Stack Engineer (Next.js, React, WordPress) & AI (SDD/TDD)'

  const description = isUa
    ? '5+ років розробки швидких платформ на Next.js 16, React 19 та WordPress. Spec-Driven AI (SDD), строгий TDD, Hybrid RAG та Technical SEO/GEO. 71+ реалізованих проєктів.'
    : isEs
      ? '5+ años creando plataformas de alto rendimiento en Next.js 16, React 19 y WordPress a medida. Spec-Driven AI (SDD), TDD estricto, Hybrid RAG y SEO Técnico/GEO. 71+ proyectos.'
      : isDe
        ? '5+ Jahre Erfahrung mit performanten Next.js 16, React 19 & WordPress Plattformen. Spec-Driven AI (SDD), striktes TDD, Hybrid RAG & Technical SEO/GEO. 71+ Projekte.'
        : '5+ years building high-performance Next.js 16, React 19 & custom WordPress platforms. Spec-Driven AI (SDD), strict TDD, Hybrid RAG & Technical SEO/GEO. 71+ delivered projects.'

  const ogLocale = isUa ? 'uk_UA' : isEs ? 'es_ES' : isDe ? 'de_DE' : 'en_US'
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.yusupovartur.com'

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    authors: [{ name: 'Artur Yusupov', url: `${siteUrl}/${activeLocale}` }],
    creator: 'Artur Yusupov',
    publisher: 'Artur Yusupov',
    alternates: {
      canonical: `${siteUrl}/${activeLocale}`,
      languages: {
        en: `${siteUrl}/en`,
        uk: `${siteUrl}/ua`,
        es: `${siteUrl}/es`,
        'es-ES': `${siteUrl}/es`,
        de: `${siteUrl}/de`,
        'de-DE': `${siteUrl}/de`,
        'x-default': `${siteUrl}/en`,
      },
      types: {
        'application/rss+xml': `${siteUrl}/feed.xml`,
      },
    },
    icons: {
      icon: [
        { url: '/icon.svg?v=2', type: 'image/svg+xml' },
        { url: '/favicon.ico?v=2', sizes: 'any' },
        { url: '/favicon-32x32.png?v=2', sizes: '32x32', type: 'image/png' },
        { url: '/favicon-16x16.png?v=2', sizes: '16x16', type: 'image/png' },
      ],
      apple: [
        { url: '/apple-touch-icon.png?v=2', sizes: '180x180', type: 'image/png' },
      ],
      shortcut: '/favicon.ico?v=2',
    },
    manifest: '/manifest.webmanifest',
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${activeLocale}`,
      siteName: 'Artur Yusupov Portfolio',
      locale: ogLocale,
      type: 'website',
      images: [
        {
          url: '/images/og-image.jpg?v=3',
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
      images: ['/images/og-image.jpg?v=3'],
    },
    other: {
      'geo.region': 'ES-AN',
      'geo.placename': 'Seville, Spain',
      'geo.position': '37.3891;-5.9845',
      'ICBM': '37.3891, -5.9845',
    },
  }
}

const getLocaleTranslation = async (locale: string) => {
  if (locale === 'ua') {
    const mod = await import('../../src/locales/ua')
    return mod.ua
  }
  if (locale === 'es') {
    const mod = await import('../../src/locales/es')
    return mod.es
  }
  if (locale === 'de') {
    const mod = await import('../../src/locales/de')
    return mod.de
  }
  const mod = await import('../../src/locales/en')
  return mod.en
}

export default async function RootLocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const activeLocale = (locale as 'en' | 'ua' | 'es' | 'de') || 'en'
  const htmlLang = toBcp47Lang(activeLocale)
  const initialTranslation = await getLocaleTranslation(activeLocale)

  return (
    <html lang={htmlLang} suppressHydrationWarning>
      <body className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300">
        <Providers initialLang={activeLocale} initialTranslation={initialTranslation}>
          <Header />
          {children}
          <Footer />
          <ConsentBanner />
          <ScrollToTopButton />
          <ChatModal />
        </Providers>
      </body>
    </html>
  )
}

export { LanguageProvider, ThemeProvider, ConsentProvider, Header, Footer }
