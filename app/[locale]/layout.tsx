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

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://yusupovartur.com'),
  title: 'Artur Yusupov - Professional Portfolio Website',
  description:
    'Fullstack WordPress Developer and Next.js / React Engineer with over 5+ years of commercial web development experience.',
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ua' }, { locale: 'es' }]
}

export default async function RootLocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  return (
    <html lang={locale || 'en'} suppressHydrationWarning>
      <body className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300">
        <Providers>
          <Header />
          {children}
          <Footer />
          <ConsentBanner />
          <ScrollToTopButton />
        </Providers>
      </body>
    </html>
  )
}

export { LanguageProvider, ThemeProvider, ConsentProvider, Header, Footer }
