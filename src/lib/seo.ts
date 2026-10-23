import { Project, TechnologyItem } from '../components/projects/project-types'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.yusupovartur.com'

export function toBcp47Lang(locale = 'en'): string {
  return locale === 'ua' ? 'uk' : locale
}

export function toAbsoluteAssetUrl(imagePath: string): string {
  if (!imagePath) return `${baseUrl}/images/og-image.jpg`
  if (imagePath.startsWith('http')) return imagePath
  const cleaned = imagePath.replace(/^\/Portfolio(?=\/)/i, '')
  return `${baseUrl}${cleaned.startsWith('/') ? cleaned : `/${cleaned}`}`
}

export function toAbsoluteOgImageUrl(imagePath: string): string {
  const absoluteUrl = toAbsoluteAssetUrl(imagePath)
  if (/\.svg(\?.*)?$/i.test(absoluteUrl)) {
    return `${baseUrl}/images/blog/cover-nextjs-vs-headless-wp.png`
  }
  return absoluteUrl
}

export function extractProjectKeywords(project: Project): string {
  const techSet = new Set<string>()
  if (project.category) {
    for (const cat of project.category) {
      if (cat && cat !== 'All Projects') techSet.add(cat)
    }
  }
  const techs = project.technologies
  if (Array.isArray(techs)) {
    for (const item of techs) {
      if (typeof item === 'string') techSet.add(item)
    }
  } else if (techs && typeof techs === 'object') {
    for (const group of Object.values(techs)) {
      if (Array.isArray(group)) {
        for (const item of group as TechnologyItem[]) {
          if (typeof item === 'string') {
            techSet.add(item)
          } else if (item && typeof item.short === 'string') {
            techSet.add(item.short)
          }
        }
      }
    }
  }
  return Array.from(techSet)
    .map((k) => k.replace(/[\u2014\u2013]/g, '-'))
    .join(', ')
}

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
  keywords?: string
  subjectOf?: {
    '@type': string
    url: string
  }
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
    url?: string
    codeRepository?: string
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

  const keywords = extractProjectKeywords(project)

  const about: ProjectJsonLd['about'] = {
    '@type': 'SoftwareApplication',
    name: project.title.replace(/[\u2014\u2013]/g, '-'),
    applicationCategory: project.category?.[0] || 'WebApplication',
    operatingSystem: 'All',
  }

  if (project.liveUrl && project.liveUrl.startsWith('http')) {
    about.url = project.liveUrl
  }
  if (project.githubUrl && project.githubUrl.startsWith('http')) {
    about.codeRepository = project.githubUrl
  }

  const jsonLd: ProjectJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: project.title.replace(/[\u2014\u2013]/g, '-'),
    description: desc.replace(/[\u2014\u2013]/g, '-'),
    image: toAbsoluteAssetUrl(project.image),
    url: `${baseUrl}/${locale}/projects/${slug}`,
    datePublished: '2026-01-15T00:00:00Z',
    dateModified: '2026-10-22T00:00:00Z',
    inLanguage: toBcp47Lang(locale),
    author: {
      '@type': 'Person',
      name: 'Artur Yusupov',
      url: baseUrl,
    },
    about,
  }

  if (keywords) {
    jsonLd.keywords = keywords
  }

  if (project.deepDiveBlogSlug) {
    jsonLd.subjectOf = {
      '@type': 'TechArticle',
      url: `${baseUrl}/${locale}/blog/${project.deepDiveBlogSlug}`,
    }
  }

  return jsonLd
}

export function buildProjectBreadcrumbsJsonLd(
  project: Project,
  slug: string,
  locale = 'en',
): BreadcrumbListJsonLd {
  const homeLabel = locale === 'ua' ? 'Головна' : locale === 'es' ? 'Inicio' : 'Home'
  const projectsLabel = locale === 'ua' ? 'Проєкти' : locale === 'es' ? 'Proyectos' : 'Projects'

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: homeLabel,
        item: `${baseUrl}/${locale}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: projectsLabel,
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

export interface BlogCatalogJsonLdItem {
  title: string
  desc: string
  date: string
  coverImage: string
  slug: string
}

export function buildBlogCatalogJsonLd(
  posts: BlogCatalogJsonLdItem[],
  locale = 'en',
) {
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
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${baseUrl}/${locale}/blog#blog`,
    name: title,
    description: description,
    url: `${baseUrl}/${locale}/blog`,
    inLanguage: toBcp47Lang(locale),
    author: {
      '@type': 'Person',
      name: 'Artur Yusupov',
      url: baseUrl,
      jobTitle: 'Senior Fullstack Web Engineer & AI Developer',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Seville',
        addressCountry: 'ES',
      },
    },
    publisher: {
      '@type': 'Person',
      name: 'Artur Yusupov',
      url: baseUrl,
    },
    blogPost: posts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title.replace(/[\u2014\u2013]/g, '-'),
      description: post.desc.replace(/[\u2014\u2013]/g, '-'),
      url: `${baseUrl}/${locale}/blog/${post.slug}`,
      datePublished: `${post.date}T00:00:00Z`,
      dateModified: `${post.date}T00:00:00Z`,
      image: toAbsoluteAssetUrl(post.coverImage),
      author: {
        '@type': 'Person',
        name: 'Artur Yusupov',
        url: baseUrl,
      },
    })),
  }
}

export function buildBlogPostJsonLd(
  postTitle: string,
  postDesc: string,
  coverImage: string,
  date: string,
  slug: string,
  locale = 'en',
  options?: {
    tags?: string[]
    readTime?: string
    appliedProjects?: { slug: string; name: string }[]
  },
) {
  const digitsOnly = options?.readTime ? options.readTime.replace(/\D+/g, '') : ''
  const isoDuration = digitsOnly ? `PT${digitsOnly}M` : undefined

  const jsonLd: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: postTitle.replace(/[\u2014\u2013]/g, '-'),
    description: postDesc.replace(/[\u2014\u2013]/g, '-'),
    image: toAbsoluteAssetUrl(coverImage),
    url: `${baseUrl}/${locale}/blog/${slug}`,
    datePublished: `${date}T00:00:00Z`,
    dateModified: `${date}T00:00:00Z`,
    inLanguage: toBcp47Lang(locale),
    author: {
      '@type': 'Person',
      name: 'Artur Yusupov',
      url: baseUrl,
      jobTitle: 'Senior Fullstack Web Engineer & AI Developer',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Seville',
        addressCountry: 'ES',
      },
    },
    publisher: {
      '@type': 'Person',
      name: 'Artur Yusupov',
      url: baseUrl,
    },
    spatialCoverage: 'Spain, European Union',
  }

  if (options?.tags && options.tags.length > 0) {
    jsonLd.keywords = options.tags.join(', ')
  }
  if (isoDuration) {
    jsonLd.timeRequired = isoDuration
  }
  if (options?.appliedProjects && options.appliedProjects.length > 0) {
    jsonLd.about = options.appliedProjects.map((p) => ({
      '@type': 'SoftwareApplication',
      name: p.name,
      url: `${baseUrl}/${locale}/projects/${p.slug}`,
    }))
  }

  return jsonLd
}

export function buildBlogCatalogBreadcrumbsJsonLd(
  locale = 'en',
): BreadcrumbListJsonLd {
  const homeLabel = locale === 'ua' ? 'Головна' : locale === 'es' ? 'Inicio' : 'Home'
  const blogLabel =
    locale === 'ua'
      ? 'Інженерний блог'
      : locale === 'es'
        ? 'Blog de Ingeniería'
        : 'Engineering Blog'

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: homeLabel,
        item: `${baseUrl}/${locale}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: blogLabel,
        item: `${baseUrl}/${locale}/blog`,
      },
    ],
  }
}

export function buildBlogBreadcrumbsJsonLd(
  postTitle: string,
  slug: string,
  locale = 'en',
): BreadcrumbListJsonLd {
  const homeLabel = locale === 'ua' ? 'Головна' : locale === 'es' ? 'Inicio' : 'Home'
  const blogLabel = locale === 'ua' ? 'Блог' : 'Blog'

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: homeLabel,
        item: `${baseUrl}/${locale}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: blogLabel,
        item: `${baseUrl}/${locale}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: postTitle.replace(/[\u2014\u2013]/g, '-'),
        item: `${baseUrl}/${locale}/blog/${slug}`,
      },
    ],
  }
}

export function buildPersonAndWebsiteJsonLd(locale = 'en') {
  const isUa = locale === 'ua'
  const isEs = locale === 'es'

  const jobTitle = isUa
    ? 'Senior Fullstack Web Engineer & AI Developer'
    : isEs
      ? 'Ingeniero Web Fullstack Senior y Desarrollador IA'
      : 'Senior Fullstack Web Engineer & AI Developer'

  const description = isUa
    ? 'Портфоліо та інженерний хаб Артура Юсупова - Fullstack WordPress-розробника, React/Next.js інженера та спеціаліста з AI-інтеграцій та SEO.'
    : isEs
      ? 'Portafolio y centro de ingeniería de Artur Yusupov - Desarrollador Fullstack WordPress, ingeniero React/Next.js y especialista en IA y SEO.'
      : 'Engineering portfolio of Artur Yusupov - Senior Fullstack WordPress & Next.js Engineer specializing in high-performance web applications, custom RAG AI assistants, and technical SEO.'

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${baseUrl}/${locale}#website`,
        url: `${baseUrl}/${locale}`,
        name: 'Artur Yusupov | Portfolio',
        description,
        inLanguage: toBcp47Lang(locale),
        publisher: {
          '@id': `${baseUrl}/#person`,
        },
      },
      {
        '@type': 'Person',
        '@id': `${baseUrl}/#person`,
        name: 'Artur Yusupov',
        jobTitle,
        url: baseUrl,
        sameAs: [
          'https://github.com/YusupovWebArt',
          'https://www.linkedin.com/in/artur-iusupov/',
        ],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Seville',
          addressRegion: 'Andalusia',
          addressCountry: 'ES',
        },
        knowsAbout: [
          'WordPress Development',
          'Next.js 16',
          'React 19',
          'TypeScript',
          'PHP 8',
          'Shopify Liquid',
          'Headless CMS',
          'Retrieval-Augmented Generation (RAG)',
          'Core Web Vitals Optimization',
          'WCAG 2.2 AA Accessibility',
        ],
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${baseUrl}/#service`,
        name: 'Artur Yusupov Web Engineering Services',
        url: `${baseUrl}/${locale}`,
        image: `${baseUrl}/images/og-image.jpg`,
        priceRange: '$$$',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Seville',
          addressCountry: 'ES',
        },
        areaServed: [
          {
            '@type': 'Country',
            name: 'Spain',
          },
          {
            '@type': 'Country',
            name: 'European Union',
          },
          {
            '@type': 'Country',
            name: 'Worldwide',
          },
        ],
        serviceType: [
          'Fullstack Web Engineering',
          'Custom WordPress Theme & Plugin Development',
          'Headless WordPress & Next.js Architecture',
          'Shopify E-Commerce Stores',
          'Autonomous In-Browser AI Assistant Integration',
          'Core Web Vitals Sub-Second Performance Tuning',
          'WCAG 2.2 AA Accessibility Audits & Remediation',
        ],
      },
    ],
  }
}
