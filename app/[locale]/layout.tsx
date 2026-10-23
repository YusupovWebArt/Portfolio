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
  return [{ locale: 'en' }, { locale: 'ua' }, { locale: 'es' }]
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const activeLocale = (locale as 'en' | 'ua' | 'es') || 'en'
  const isUa = activeLocale === 'ua'
  const isEs = activeLocale === 'es'

  const title = isUa
    ? 'Артур Юсупов - Fullstack веб-інженер та AI-розробник'
    : isEs
      ? 'Artur Yusupov - Ingeniero Web Fullstack y Desarrollador AI'
      : 'Artur Yusupov - Fullstack Web Engineer & AI Developer'

  const description = isUa
    ? 'Розробка високопродуктивних веб-продуктів, кастомного WordPress, React 19 застосунків та AI-автоматизації для бізнесу та агенцій в Іспанії.'
    : isEs
      ? 'Desarrollo de productos web de alto rendimiento, WordPress a medida, aplicaciones React 19 y automatización de IA para empresas y agencias en España.'
      : 'Engineering high-performance web products, custom WordPress, React 19 apps & AI automation for businesses and agencies in Spain.'

  const ogLocale = isUa ? 'uk_UA' : isEs ? 'es_ES' : 'en_US'
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.yusupovartur.com'

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    alternates: {
      canonical: `/${activeLocale}`,
      languages: {
        en: '/en',
        uk: '/ua',
        es: '/es',
        'x-default': '/en',
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${activeLocale}`,
      siteName: 'Artur Yusupov Portfolio',
      locale: ogLocale,
      type: 'website',
      images: [
        {
          url: '/images/og-image.jpg',
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
      images: ['/images/og-image.jpg'],
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
  const activeLocale = (locale as 'en' | 'ua' | 'es') || 'en'
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
