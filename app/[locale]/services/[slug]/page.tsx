/* eslint-disable react-refresh/only-export-components */
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ServiceDetailView from '../../../../src/components/services/ServiceDetailView'
import { allServices, getServiceBySlug } from '../../../../src/data/services'
import {
  buildServiceBreadcrumbsJsonLd,
  buildServiceJsonLd,
  buildServiceFaqJsonLd,
  buildSevilleLocalBusinessJsonLd,
  serializeJsonLd,
} from '../../../../src/lib/seo'

interface ServiceDetailPageProps {
  params: Promise<{
    locale: string
    slug: string
  }>
}

export function generateStaticParams() {
  const locales = ['en', 'ua', 'es']
  const params: { locale: string; slug: string }[] = []

  for (const locale of locales) {
    for (const service of allServices) {
      params.push({
        locale,
        slug: service.slug,
      })
    }
  }

  return params
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { locale, slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    return {
      title: 'Service Not Found | Artur Yusupov',
    }
  }

  const validLocale = (locale === 'es' || locale === 'ua' ? locale : 'en') as 'en' | 'ua' | 'es'
  const isUa = validLocale === 'ua'
  const isEs = validLocale === 'es'
  const content = service.content[validLocale] || service.content.en

  const title = `${content.title} | Artur Yusupov`
  const description = content.shortDesc
  const ogImage =
    service.slug === 'rag-ai-assistants-business'
      ? 'https://www.yusupovartur.com/images/blog/cover-autonomous-hybrid-rag.png'
      : 'https://www.yusupovartur.com/images/blog/cover-nextjs-vs-headless-wp.png'

  return {
    title,
    description,
    keywords: [
      content.badge,
      'B2B Web Engineering',
      'Artur Yusupov',
      'Sevilla',
      'Spain',
      'Next.js 16',
      'WordPress',
      'WCAG 2.2 AA',
    ],
    alternates: {
      canonical: `https://www.yusupovartur.com/${locale}/services/${service.slug}`,
      languages: {
        en: `https://www.yusupovartur.com/en/services/${service.slug}`,
        uk: `https://www.yusupovartur.com/ua/services/${service.slug}`,
        es: `https://www.yusupovartur.com/es/services/${service.slug}`,
        'es-ES': `https://www.yusupovartur.com/es/services/${service.slug}`,
        'x-default': `https://www.yusupovartur.com/en/services/${service.slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `https://www.yusupovartur.com/${locale}/services/${service.slug}`,
      siteName: 'Artur Yusupov - Portfolio & B2B Web Engineering',
      locale: isUa ? 'uk_UA' : isEs ? 'es_ES' : 'en_US',
      type: 'website',
      images: [
        {
          url: ogImage,
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
      images: [ogImage],
      creator: '@yusupovwebart',
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { locale, slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  const validLocale = (locale === 'es' || locale === 'ua' ? locale : 'en') as 'en' | 'ua' | 'es'
  const content = service.content[validLocale] || service.content.en

  const breadcrumbsJsonLd = buildServiceBreadcrumbsJsonLd(content.title, service.slug, validLocale)
  const serviceJsonLd = buildServiceJsonLd(service, validLocale)
  const faqJsonLd = buildServiceFaqJsonLd(content.faqs)
  const localBusinessJsonLd =
    service.slug === 'custom-web-development-seville'
      ? buildSevilleLocalBusinessJsonLd(validLocale)
      : null

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
          __html: serializeJsonLd(serviceJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(faqJsonLd),
        }}
      />
      {localBusinessJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeJsonLd(localBusinessJsonLd),
          }}
        />
      )}
      <ServiceDetailView service={service} locale={validLocale} />
    </>
  )
}
