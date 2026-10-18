import { Project } from '../components/projects/project-types'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.yusupovartur.com'

export interface ProjectJsonLd {
  '@context': string
  '@type': string
  headline: string
  description: string
  image: string
  url: string
  datePublished?: string
  dateModified?: string
  inLanguage?: string
  author: {
    '@type': string
    name: string
    url: string
  }
  about: {
    '@type': string
    name: string
    applicationCategory: string
    operatingSystem: string
  }
}

export interface BreadcrumbListJsonLd {
  '@context': string
  '@type': string
  itemListElement: {
    '@type': string
    position: number
    name: string
    item: string
  }[]
}

export function buildProjectJsonLd(
  project: Project,
  slug: string,
  locale = 'en',
): ProjectJsonLd {
  const desc =
    locale === 'ua' && project.descriptionUa
      ? project.descriptionUa
      : locale === 'es' && project.descriptionEs
        ? project.descriptionEs
        : project.description

  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: project.title.replace(/[\u2014\u2013]/g, '-'),
    description: desc.replace(/[\u2014\u2013]/g, '-'),
    image: project.image,
    url: `${baseUrl}/${locale}/projects/${slug}`,
    datePublished: '2026-01-15T00:00:00Z',
    dateModified: '2026-10-12T00:00:00Z',
    inLanguage: locale,
    author: {
      '@type': 'Person',
      name: 'Artur Yusupov',
      url: baseUrl,
    },
    about: {
      '@type': 'SoftwareApplication',
      name: project.title.replace(/[\u2014\u2013]/g, '-'),
      applicationCategory: project.category?.[0] || 'WebApplication',
      operatingSystem: 'All',
    },
  }
}

export function buildProjectBreadcrumbsJsonLd(
  project: Project,
  slug: string,
  locale = 'en',
): BreadcrumbListJsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${baseUrl}/${locale}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Projects',
        item: `${baseUrl}/${locale}#projects`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: project.title.replace(/[\u2014\u2013]/g, '-'),
        item: `${baseUrl}/${locale}/projects/${slug}`,
      },
    ],
  }
}

export interface FaqPageJsonLd {
  '@context': string
  '@type': string
  mainEntity: {
    '@type': string
    name: string
    acceptedAnswer: {
      '@type': string
      text: string
    }
  }[]
}

export function buildWebsiteFaqJsonLd(locale = 'en'): FaqPageJsonLd {
  const faqItems = [
    {
      q: locale === 'ua' ? 'Хто такий Артур Юсупов?' : locale === 'es' ? '¿Quién es Artur Yusupov?' : 'Who is Artur Yusupov?',
      a: locale === 'ua'
        ? 'Артур Юсупов - Fullstack WordPress-розробник та Next.js/React інженер із понад 5 роками комерційного досвіду, що спеціалізується на високопродуктивних веб-додатках, архітектурі Headless CMS та кастомних RAG AI-асистентах.'
        : locale === 'es'
          ? 'Artur Yusupov es un desarrollador Fullstack de WordPress e ingeniero Next.js/React con más de 5 años de experiencia comercial, especializado en aplicaciones web de alto rendimiento, Headless CMS y asistentes de IA con arquitectura RAG.'
          : 'Artur Yusupov is a Fullstack WordPress Developer and Next.js / React Engineer with over 5+ years of commercial experience, specializing in high-performance web applications, Headless CMS architectures, and custom RAG AI assistants.',
    },
    {
      q: locale === 'ua' ? 'Які архітектурні стеки ви розробляєте?' : locale === 'es' ? '¿Qué arquitecturas y tecnologías desarrollas?' : 'What architectural stacks do you engineer?',
      a: locale === 'ua'
        ? 'Основний стек включає Next.js 16 (App Router + RSC), кастомні теми WordPress на PHP 8+ з ACF Pro, Headless WordPress (Next.js + WP REST API), TypeScript, Tailwind CSS та Shopify Liquid.'
        : locale === 'es'
          ? 'El stack principal incluye Next.js 16 (App Router + RSC), temas personalizados de WordPress en PHP 8+ con ACF Pro, Headless WordPress (Next.js + WP REST API), TypeScript, Tailwind CSS y Shopify Liquid.'
          : 'The core stack includes Next.js 16 (App Router + RSC), custom WordPress themes on PHP 8+ with ACF Pro, Headless WordPress (Next.js + WP REST API), TypeScript, Tailwind CSS, and Shopify Liquid.',
    },
    {
      q: locale === 'ua' ? 'Як ви гарантуєте показники Core Web Vitals?' : locale === 'es' ? '¿Cómo garantizas las métricas de Core Web Vitals?' : 'How do you guarantee Core Web Vitals performance?',
      a: locale === 'ua'
        ? 'Всі проєкти оптимізуються під оцінку 95+ у Lighthouse, субсекундний LCP (до 0.8с), нульовий CLS (0.00) та миттєвий відгук INP завдяки кодовому розділенню, WebP/AVIF пайплайнам та серверному рендерингу.'
        : locale === 'es'
          ? 'Todos los proyectos se optimizan para una puntuación de 95+ en Lighthouse, LCP subsegundo (menos de 0.8s), CLS cero (0.00) e INP inmediato mediante división de código, optimización WebP/AVIF y renderizado en servidor.'
          : 'All projects are strictly optimized for 95+ Lighthouse scores, sub-second LCP (<0.8s), zero CLS (0.00), and responsive INP via route code-splitting, WebP/AVIF image pipelines, and server-side rendering.',
    },
    {
      q: locale === 'ua' ? 'Чи доступні ви для віддаленої роботи та B2B проєктів?' : locale === 'es' ? '¿Estás disponible para contratos remotos y proyectos B2B?' : 'Are you available for remote contracts and B2B projects?',
      a: locale === 'ua'
        ? 'Так, відкритий до віддаленої співпраці, контрактних ролей та розробки під ключ з офіційною реєстрацією в Іспанії (ЄС).'
        : locale === 'es'
          ? 'Sí, disponible para colaboraciones remotas, contratos B2B y desarrollo llave en mano con sede en Sevilla, España (Unión Europea).'
          : 'Yes, available for remote roles, contract engagements, and turnkey engineering projects with registered business operations in Seville, Spain (EU).',
    },
  ]

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }
}
