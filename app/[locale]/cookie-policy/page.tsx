/* eslint-disable react-refresh/only-export-components */
import type { Metadata } from 'next'
import CookiePolicyView from '../../../src/components/legal/CookiePolicyView'
import { cookiePolicyData } from '../../../src/data/legal/cookies'
import { buildLegalBreadcrumbsJsonLd, serializeJsonLd } from '../../../src/lib/seo'

interface CookiePolicyPageProps {
  params: Promise<{
    locale: string
  }>
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ua' }, { locale: 'es' }]
}

export async function generateMetadata({
  params,
}: CookiePolicyPageProps): Promise<Metadata> {
  const { locale } = await params
  const isUa = locale === 'ua'
  const isEs = locale === 'es'

  const title = isUa
    ? 'Політика використання файлів cookie | Артур Юсупов'
    : isEs
      ? 'Política de Cookies | Artur Yusupov'
      : 'Cookie Policy | Artur Yusupov'

  const description = isUa
    ? 'Інформація про файли cookie та локальне сховище. Архітектура Google Consent Mode v2 Basic та інтерактивне керування згодою.'
    : isEs
      ? 'Información sobre cookies y almacenamiento local. Google Consent Mode v2 Basic y gestión interactiva del consentimiento conforme a la AEPD.'
      : 'Information on cookies and local storage identifiers. Google Consent Mode v2 Basic architecture and granular consent management.'

  return {
    title,
    description,
    keywords: [
      'Cookie Policy',
      'Politica de Cookies',
      'LSSI-CE',
      'AEPD',
      'Google Consent Mode v2',
      'Cookies Analiticas',
      'Artur Yusupov',
      'Sevilla',
      'Spain',
    ],
    alternates: {
      canonical: `https://www.yusupovartur.com/${locale}/cookie-policy`,
      languages: {
        en: 'https://www.yusupovartur.com/en/cookie-policy',
        uk: 'https://www.yusupovartur.com/ua/cookie-policy',
        es: 'https://www.yusupovartur.com/es/cookie-policy',
        'es-ES': 'https://www.yusupovartur.com/es/cookie-policy',
        'x-default': 'https://www.yusupovartur.com/en/cookie-policy',
      },
    },
    openGraph: {
      title,
      description,
      url: `https://www.yusupovartur.com/${locale}/cookie-policy`,
      siteName: 'Artur Yusupov - Portfolio & B2B Web Engineering',
      locale: isUa ? 'uk_UA' : isEs ? 'es_ES' : 'en_US',
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function CookiePolicyPage({
  params,
}: CookiePolicyPageProps) {
  const { locale } = await params
  const validLocale = (locale === 'es' || locale === 'ua' ? locale : 'en') as 'en' | 'ua' | 'es'
  const data = cookiePolicyData[validLocale]
  const breadcrumbsJsonLd = buildLegalBreadcrumbsJsonLd(data.title, 'cookie-policy', validLocale)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(breadcrumbsJsonLd),
        }}
      />
      <CookiePolicyView data={data} locale={validLocale} />
    </>
  )
}
