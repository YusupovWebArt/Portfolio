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
import { buildWebsiteFaqJsonLd } from '../../src/lib/seo'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://yusupovartur.com'),
  title: 'Artur Yusupov - Fullstack Web Engineer & AI Developer',
  description:
    'Engineering high-performance web products, custom WordPress, React 19 apps & AI automation for businesses and agencies in Spain.',
  alternates: {
    canonical: '/',
    languages: {
      en: '/en',
      uk: '/ua',
      es: '/es',
    },
  },
  openGraph: {
    title: 'Artur Yusupov - Fullstack Web Engineer & AI Developer',
    description:
      'Engineering high-performance web products, custom WordPress, React 19 apps & AI automation for businesses and agencies in Spain.',
    url: 'https://yusupovartur.com',
    siteName: 'Artur Yusupov Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Artur Yusupov - Fullstack Web Engineer & AI Developer',
    description:
      'Engineering high-performance web products, custom WordPress, React 19 apps & AI automation for businesses and agencies in Spain.',
  },
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ua' }, { locale: 'es' }]
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
  const initialTranslation = await getLocaleTranslation(activeLocale)
  const faqSchema = buildWebsiteFaqJsonLd(activeLocale)

  return (
    <html lang={activeLocale} suppressHydrationWarning>
      <body className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
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
