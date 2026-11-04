/* eslint-disable react-refresh/only-export-components */
import type { Metadata } from 'next'
import ServiceCatalogView from '../../../src/components/services/ServiceCatalogView'
import { allServices } from '../../../src/data/services'
import {
  buildServiceCatalogBreadcrumbsJsonLd,
  buildServiceCatalogJsonLd,
  serializeJsonLd,
} from '../../../src/lib/seo'

interface ServiceCatalogPageProps {
  params: Promise<{
    locale: string
  }>
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ua' }, { locale: 'es' }]
}

export async function generateMetadata({
  params,
}: ServiceCatalogPageProps): Promise<Metadata> {
  const { locale } = await params
  const isUa = locale === 'ua'
  const isEs = locale === 'es'

  const title = isUa
    ? 'B2B Послуги веб-інженерії та розробки під ключ | Артур Юсупов'
    : isEs
      ? 'Servicios B2B de Ingeniería Web y Desarrollo a Medida | Artur Yusupov'
      : 'B2B Web Engineering & Custom Development Services | Artur Yusupov'

  const description = isUa
    ? 'Професійні послуги веб-розробки для digital-агенцій та бізнесу в Іспанії. White-label, міграції на Next.js 16, прискорення сайтів та корпоративні RAG AI-асистенти.'
    : isEs
      ? 'Servicios profesionales de desarrollo web para agencias y pymes en España. Marca blanca, migraciones Next.js 16, optimización Core Web Vitals y asistentes IA RAG.'
      : 'Professional web development services for agencies and businesses in Spain. White-label engineering, Next.js 16 migrations, Core Web Vitals, and RAG AI assistants.'

  return {
    title,
    description,
    keywords: [
      'B2B Web Development',
      'Desarrollo Web Marca Blanca',
      'Next.js 16 Migration',
      'Core Web Vitals Optimization',
      'RAG AI Assistants',
      'Desarrollo Web Sevilla',
      'Artur Yusupov',
      'Spain',
      'Agencias Digitales',
    ],
    alternates: {
      canonical: `https://www.yusupovartur.com/${locale}/services`,
      languages: {
        en: 'https://www.yusupovartur.com/en/services',
        uk: 'https://www.yusupovartur.com/ua/services',
        es: 'https://www.yusupovartur.com/es/services',
        'es-ES': 'https://www.yusupovartur.com/es/services',
        'x-default': 'https://www.yusupovartur.com/en/services',
      },
    },
    openGraph: {
      title,
      description,
      url: `https://www.yusupovartur.com/${locale}/services`,
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

export default async function ServiceCatalogPage({
  params,
}: ServiceCatalogPageProps) {
  const { locale } = await params
  const validLocale = (locale === 'es' || locale === 'ua' ? locale : 'en') as 'en' | 'ua' | 'es'

  const breadcrumbsJsonLd = buildServiceCatalogBreadcrumbsJsonLd(validLocale)
  const catalogJsonLd = buildServiceCatalogJsonLd(allServices, validLocale)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(breadcrumbsJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(catalogJsonLd),
        }}
      />
      <ServiceCatalogView services={allServices} locale={validLocale} />
    </>
  )
}
