/* eslint-disable react-refresh/only-export-components */
import type { Metadata } from 'next'
import LegalPageView from '../../../src/components/legal/LegalPageView'
import { privacyData } from '../../../src/data/legal/privacy'
import { buildLegalBreadcrumbsJsonLd, serializeJsonLd } from '../../../src/lib/seo'

interface PrivacyPolicyPageProps {
  params: Promise<{
    locale: string
  }>
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ua' }, { locale: 'es' }]
}

export async function generateMetadata({
  params,
}: PrivacyPolicyPageProps): Promise<Metadata> {
  const { locale } = await params
  const isUa = locale === 'ua'
  const isEs = locale === 'es'

  const title = isUa
    ? 'Політика конфіденційності | Артур Юсупов'
    : isEs
      ? 'Política de Privacidad | Artur Yusupov'
      : 'Privacy Policy | Artur Yusupov'

  const description = isUa
    ? 'Прозора політика захисту персональних даних відповідно до GDPR та LOPDGDD. Керування аналітикою та ефемерна обробка запитів RAG AI-асистента.'
    : isEs
      ? 'Aviso de privacidad y protección de datos conforme al RGPD y LOPDGDD. Información transparente sobre telemetría y procesamiento efímero del Asistente de IA.'
      : 'Transparent privacy and personal data protection policy under GDPR and LOPDGDD. Learn about telemetry controls and ephemeral RAG AI Assistant processing.'

  return {
    title,
    description,
    keywords: [
      'Privacy Policy',
      'Politica de Privacidad',
      'GDPR',
      'RGPD',
      'LOPDGDD',
      'Data Protection',
      'Artur Yusupov',
      'Sevilla',
      'Spain',
    ],
    alternates: {
      canonical: `https://www.yusupovartur.com/${locale}/privacy-policy`,
      languages: {
        en: 'https://www.yusupovartur.com/en/privacy-policy',
        uk: 'https://www.yusupovartur.com/ua/privacy-policy',
        es: 'https://www.yusupovartur.com/es/privacy-policy',
        'es-ES': 'https://www.yusupovartur.com/es/privacy-policy',
        'x-default': 'https://www.yusupovartur.com/en/privacy-policy',
      },
    },
    openGraph: {
      title,
      description,
      url: `https://www.yusupovartur.com/${locale}/privacy-policy`,
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

export default async function PrivacyPolicyPage({
  params,
}: PrivacyPolicyPageProps) {
  const { locale } = await params
  const validLocale = (locale === 'es' || locale === 'ua' ? locale : 'en') as 'en' | 'ua' | 'es'
  const data = privacyData[validLocale]
  const breadcrumbsJsonLd = buildLegalBreadcrumbsJsonLd(data.title, 'privacy-policy', validLocale)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(breadcrumbsJsonLd),
        }}
      />
      <LegalPageView data={data} locale={validLocale} />
    </>
  )
}
