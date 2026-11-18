import { Project, TechnologyItem } from '../../components/projects/project-types'
import { projectRegistry } from '../projectRegistry'
import { stripEmDashes } from './text'
import { PUBLIC_PROFILES } from '../profiles'
import { allBlogPosts } from '../../data/blog'
import { allServices } from '../../data/services'

export type ProjectFacet = 'overview' | 'stack' | 'features' | 'architecture' | 'case-study'

export interface KnowledgeChunk {
  id: string
  type: 'project' | 'profile' | 'service' | 'methodology' | 'blog'
  facet?: ProjectFacet
  parentId?: string
  title: string
  slug?: string
  category?: string
  technologies?: string[]
  content: string
  contentUa?: string
  contentEs?: string
  contentDe?: string
  metadata?: {
    projectId?: number
    liveUrl?: string
    githubUrl?: string
    metrics?: Record<string, string>
    keywords?: string[]
  }
}

export interface KnowledgeBase {
  version: string
  updatedAt: string
  author: {
    name: string
    title: string
    location: string
    experience: string
    github: string
    linkedin: string
  }
  projects: KnowledgeChunk[]
  projectFacets: KnowledgeChunk[]
  profile: KnowledgeChunk[]
  services: KnowledgeChunk[]
  methodology: KnowledgeChunk[]
  blog: KnowledgeChunk[]
  allChunks: KnowledgeChunk[]
}

const extractTechList = (project: Project): string[] => {
  if (Array.isArray(project.technologies)) {
    return project.technologies.map((t) => (typeof t === 'string' ? t : t.short))
  }
  const techObj = project.technologies
  const list: string[] = []
  const addItems = (items?: TechnologyItem[]) => {
    if (!items) return
    items.forEach((item) => {
      const name = typeof item === 'string' ? item : item.short
      if (name && !list.includes(name)) list.push(name)
    })
  }
  addItems(techObj.frontend)
  addItems(techObj.backend)
  addItems(techObj.contentManagement)
  addItems(techObj.api)
  addItems(techObj.devopsSecurity)
  addItems(techObj.aiTools)
  addItems(techObj.technicalOptimization)
  addItems(techObj.analytics)
  addItems(techObj.seo)
  return list
}

const buildProjectOverviewChunks = (): KnowledgeChunk[] => {
  const chunks: KnowledgeChunk[] = []

  for (const { slug, project } of projectRegistry) {
    if (!project || !project.title) continue

    const techList = extractTechList(project)
    const metricsMap: Record<string, string> = {}
    if (project.detailMetrics) {
      project.detailMetrics.forEach((m) => {
        metricsMap[m.label] = m.value
      })
    }

    const featuresText = Array.isArray(project.features)
      ? project.features
          .map((f) => {
            if (typeof f === 'string') return f
            if (f && typeof f === 'object' && 'title' in f) return `${f.title}: ${f.description}`
            return ''
          })
          .filter(Boolean)
          .join('; ')
      : ''

    const challengesText = project.challenges ? project.challenges.join('; ') : ''
    const solutionsText = project.solutions ? project.solutions.join('; ') : ''

    const content = stripEmDashes(
      `Project Title: ${project.title}
Category: ${project.category?.join(', ') || 'web'}
Technologies: ${techList.join(', ')}
Summary: ${project.description}
Details: ${project.fullDescription}
${project.detailHeroLine ? `Hero Line: ${project.detailHeroLine}` : ''}
${featuresText ? `Key Features: ${featuresText}` : ''}
${challengesText ? `Challenges: ${challengesText}` : ''}
${solutionsText ? `Solutions: ${solutionsText}` : ''}`
    )

    const contentUa = project.descriptionUa
      ? stripEmDashes(
          `Назва проєкту: ${project.title}
Категорія: ${project.category?.join(', ') || 'web'}
Технології: ${techList.join(', ')}
Опис: ${project.descriptionUa}
Деталі: ${project.fullDescriptionUa || project.descriptionUa}`
        )
      : undefined

    const contentEs = project.descriptionEs
      ? stripEmDashes(
          `Título del proyecto: ${project.title}
Categoría: ${project.category?.join(', ') || 'web'}
Tecnologías: ${techList.join(', ')}
Resumen: ${project.descriptionEs}
Detalles: ${project.fullDescriptionEs || project.descriptionEs}`
        )
      : undefined

    const contentDe = project.descriptionDe
      ? stripEmDashes(
          `Projekttitel: ${project.title}
Kategorie: ${project.category?.join(', ') || 'web'}
Technologien: ${techList.join(', ')}
Zusammenfassung: ${project.descriptionDe}
Details: ${project.fullDescriptionDe || project.descriptionDe}`
        )
      : undefined

    chunks.push({
      id: `project-${project.id}`,
      type: 'project',
      facet: 'overview',
      title: stripEmDashes(project.title),
      slug,
      category: project.category?.[0] || 'general',
      technologies: techList,
      content,
      contentUa,
      contentEs,
      contentDe,
      metadata: {
        projectId: project.id,
        liveUrl: project.liveUrl,
        githubUrl: project.githubUrl,
        metrics: metricsMap,
        keywords: [slug, ...(project.category || []), ...techList],
      },
    })
  }

  return chunks.sort((a, b) => (b.metadata?.projectId ?? 0) - (a.metadata?.projectId ?? 0))
}

const buildProjectFacetedSubchunks = (overviewChunks: KnowledgeChunk[]): KnowledgeChunk[] => {
  const facets: KnowledgeChunk[] = []

  for (const overview of overviewChunks) {
    const found = projectRegistry.find((p) => p.slug === overview.slug)
    if (!found) continue
    const project = found.project

    // 1. Stack Facet
    if (overview.technologies && overview.technologies.length > 0) {
      facets.push({
        id: `${overview.id}-stack`,
        type: 'project',
        facet: 'stack',
        parentId: overview.id,
        title: stripEmDashes(`${project.title} - Tech Stack`),
        slug: overview.slug,
        category: overview.category,
        technologies: overview.technologies,
        content: stripEmDashes(
          `Technologies and stack used in ${project.title}: ${overview.technologies.join(', ')}. Category: ${project.category?.join(', ') || 'web'}.`
        ),
        contentUa: stripEmDashes(
          `Технологічний стек проєкту ${project.title}: ${overview.technologies.join(', ')}.`
        ),
        contentEs: stripEmDashes(
          `Stack tecnológico utilizado en ${project.title}: ${overview.technologies.join(', ')}.`
        ),
        contentDe: stripEmDashes(
          `Verwendeter Technologie-Stack in ${project.title}: ${overview.technologies.join(', ')}.`
        ),
        metadata: {
          projectId: project.id,
          keywords: ['stack', 'technologies', ...overview.technologies],
        },
      })
    }

    // 2. Features Facet
    if (Array.isArray(project.features) && project.features.length > 0) {
      const featStr = project.features
        .map((f) => (typeof f === 'string' ? f : `${f.title}: ${f.description}`))
        .join('; ')
      const featStrUa = project.features
        .map((f) =>
          typeof f === 'string' ? f : `${f.titleUa || f.title}: ${f.descriptionUa || f.description}`
        )
        .join('; ')
      const featStrEs = project.features
        .map((f) =>
          typeof f === 'string' ? f : `${f.titleEs || f.title}: ${f.descriptionEs || f.description}`
        )
        .join('; ')
      const featStrDe = project.features
        .map((f) =>
          typeof f === 'string' ? f : `${f.titleDe || f.title}: ${f.descriptionDe || f.description}`
        )
        .join('; ')
      facets.push({
        id: `${overview.id}-features`,
        type: 'project',
        facet: 'features',
        parentId: overview.id,
        title: stripEmDashes(`${project.title} - Key Features`),
        slug: overview.slug,
        category: overview.category,
        content: stripEmDashes(`Core features of ${project.title}: ${featStr}`),
        contentUa: stripEmDashes(`Основні функції проєкту ${project.title}: ${featStrUa}`),
        contentEs: stripEmDashes(`Funciones principales de ${project.title}: ${featStrEs}`),
        contentDe: stripEmDashes(`Kernfunktionen von ${project.title}: ${featStrDe}`),
        metadata: {
          projectId: project.id,
          keywords: ['features', 'functionality', overview.slug || ''],
        },
      })
    }

    // 3. Architecture & Engineering Facet (if rich architecture rows or case study details exist)
    if (project.architecture || project.challenges || project.solutions) {
      const archParts: string[] = []
      const archPartsUa: string[] = []
      const archPartsEs: string[] = []
      const archPartsDe: string[] = []
      if (project.architecture?.description) archParts.push(project.architecture.description)
      if (project.architecture?.descriptionUa || project.architecture?.description) {
        archPartsUa.push(project.architecture?.descriptionUa || project.architecture?.description || '')
      }
      if (project.architecture?.descriptionEs || project.architecture?.description) {
        archPartsEs.push(project.architecture?.descriptionEs || project.architecture?.description || '')
      }
      if (project.architecture?.descriptionDe || project.architecture?.description) {
        archPartsDe.push(project.architecture?.descriptionDe || project.architecture?.description || '')
      }
      if (project.architecture?.rows) {
        const flowSummary = project.architecture.rows
          .map((r) => `${r.rowLabel}: ${r.steps.map((s) => s.label).join(' -> ')}`)
          .join('; ')
        archParts.push(flowSummary)
        archPartsUa.push(flowSummary)
        archPartsEs.push(flowSummary)
        archPartsDe.push(flowSummary)
      }
      if (project.challenges) archParts.push(`Challenges: ${project.challenges.join('; ')}`)
      if (project.solutions) archParts.push(`Solutions: ${project.solutions.join('; ')}`)
      if (project.challengesUa || project.challenges) {
        archPartsUa.push(`Виклики: ${(project.challengesUa || project.challenges || []).join('; ')}`)
      }
      if (project.solutionsUa || project.solutions) {
        archPartsUa.push(`Рішення: ${(project.solutionsUa || project.solutions || []).join('; ')}`)
      }
      if (project.challengesEs || project.challenges) {
        archPartsEs.push(`Desafíos: ${(project.challengesEs || project.challenges || []).join('; ')}`)
      }
      if (project.solutionsEs || project.solutions) {
        archPartsEs.push(`Soluciones: ${(project.solutionsEs || project.solutions || []).join('; ')}`)
      }
      if (project.challengesDe || project.challenges) {
        archPartsDe.push(`Herausforderungen: ${(project.challengesDe || project.challenges || []).join('; ')}`)
      }
      if (project.solutionsDe || project.solutions) {
        archPartsDe.push(`Lösungen: ${(project.solutionsDe || project.solutions || []).join('; ')}`)
      }

      facets.push({
        id: `${overview.id}-architecture`,
        type: 'project',
        facet: 'architecture',
        parentId: overview.id,
        title: stripEmDashes(`${project.title} - Architecture & Engineering`),
        slug: overview.slug,
        category: overview.category,
        content: stripEmDashes(
          `Architecture, engineering, challenges and solutions for ${project.title}: ${archParts.join('. ')}`
        ),
        contentUa: stripEmDashes(
          `Архітектура, інженерія, виклики та рішення проєкту ${project.title}: ${archPartsUa.join('. ')}`
        ),
        contentEs: stripEmDashes(
          `Arquitectura, ingeniería, desafíos y soluciones de ${project.title}: ${archPartsEs.join('. ')}`
        ),
        contentDe: stripEmDashes(
          `Architektur, Engineering, Herausforderungen und Lösungen für ${project.title}: ${archPartsDe.join('. ')}`
        ),
        metadata: {
          projectId: project.id,
          keywords: ['architecture', 'engineering', 'challenges', 'solutions', overview.slug || ''],
        },
      })
    }
  }

  return facets
}

const buildProfileChunks = (): KnowledgeChunk[] => [
  {
    id: 'profile-bio',
    type: 'profile',
    title: 'Artur Yusupov - Professional Profile',
    slug: 'artur-yusupov',
    content: stripEmDashes(
      'Artur Yusupov is a Fullstack WordPress Developer and Next.js / React Engineer with over 5+ years of commercial web development experience and 71+ delivered projects. Based in Seville, Spain, he specializes in modern enterprise web architecture, Headless CMS, custom plugin/theme development, high-performance UI engineering, autonomous Hybrid RAG AI assistants, and Spec-Driven AI development. He is also the creator and architect of Personal Flagship Products including Fullstack AI Lab (fullstackailab.com), Unitrition (unitrition.info), and the Next.js 16 & Hybrid RAG Portfolio Platform (yusupovartur.com).'
    ),
    contentUa: stripEmDashes(
      'Артур Юсупов - Fullstack WordPress-розробник та Next.js / React інженер із понад 5 роками комерційного досвіду та 71+ реалізованим проєктом. Проживає в Севільї (Іспанія), спеціалізується на сучасній веб-архітектурі, Headless CMS, розробці кастомних плагінів/тем, високій продуктивності, автономних Hybrid RAG AI-асистентах та SDD-розробці. Є автором та архітектором власних флагманських продуктів: Fullstack AI Lab (fullstackailab.com), Unitrition (unitrition.info) та Next.js 16 & Hybrid RAG Portfolio Platform (yusupovartur.com).'
    ),
    contentEs: stripEmDashes(
      'Artur Yusupov es un desarrollador Fullstack WordPress e ingeniero Next.js / React con más de 5 años de experiencia comercial y 71+ proyectos entregados. Reside en Sevilla, España, y se especializa en arquitectura web moderna, Headless CMS, temas y plugins personalizados, asistentes IA con arquitectura Hybrid RAG y desarrollo guiado por especificaciones (SDD). Además, es el creador y arquitecto de productos propios destacados como Fullstack AI Lab (fullstackailab.com), Unitrition (unitrition.info) y Next.js 16 & Hybrid RAG Portfolio Platform (yusupovartur.com).'
    ),
    contentDe: stripEmDashes(
      'Artur Yusupov ist Fullstack-WordPress-Entwickler und Next.js / React Engineer mit über 5 Jahren kommerzieller Erfahrung und 71+ realisierten Projekten. Mit Sitz in Sevilla (Spanien) spezialisiert er sich auf moderne Enterprise-Webarchitekturen, Headless CMS, individuelle Plugin-/Theme-Entwicklung, autonome Hybrid-RAG-KI-Assistenten und Spec-Driven AI Development. Zudem ist er Architekt eigener Flagship-Produkte wie Fullstack AI Lab (fullstackailab.com), Unitrition (unitrition.info) und der Next.js 16 & Hybrid RAG Portfolio Platform (yusupovartur.com).'
    ),
    metadata: {
      keywords: ['artur', 'yusupov', 'bio', 'experience', 'seville', 'spain', 'fullstack', 'personal', 'flagship'],
    },
  },
  {
    id: 'profile-tech-stack',
    type: 'profile',
    title: 'Artur Yusupov - Core Technology Stack & Personal Flagship Projects',
    slug: 'artur-tech-stack',
    technologies: [
      'Next.js 16',
      'React 19',
      'TypeScript 5.9',
      'Tailwind CSS v4',
      'Rust MDX-RS',
      'WebAssembly (WASM)',
      'Hybrid RAG',
      'Vercel AI SDK v7',
      'Google NotebookLM',
      'Supabase RLS',
      'Headless WordPress',
      'PHP 8+',
      'WooCommerce',
      'Shopify Liquid',
      'AWS Cloud',
      'WCAG 2.2 AA',
    ],
    content: stripEmDashes(
      'Core Technology Specialization: 1. Modern Frontend & Full-Stack: Next.js 16 (App Router, React Server Components, Turbopack, SSG/ISR), React 19, TypeScript (strict zero-any), Tailwind CSS v4, View Transitions API. 2. AI Engineering, Hybrid RAG & Native Runtimes: Custom Hybrid RAG engines (Okapi BM25 + Damerau-Levenshtein fuzzy search + TF-IDF cosine vector similarity), Vercel AI SDK v7 (streaming & Generative UI tool calling), native Rust MDX-RS compilation, in-browser WebAssembly (WASM) sandboxes, Google NotebookLM audio prompt synthesis, and Spec-Driven AI Development (SDD + TDD) with Claude Code, Cursor, and Google Antigravity. 3. Backend, Cloud & Data: Supabase (PostgreSQL, Row-Level Security / RLS, OAuth, real-time gamification), Node.js, REST & GraphQL APIs, USDA FoodData Central API, AWS Cloud (EC2, S3, CloudFront, Route 53). 4. Enterprise WordPress & E-Commerce: Decoupled Headless WordPress with HMAC-SHA256 webhook revalidation (revalidateTag), PHP 8+, custom themes/plugins, ACF Pro, Gutenberg, WooCommerce, Shopify Liquid. 5. Applied in Personal Flagship Products: Fullstack AI Lab (Next.js 16, React 19, Rust MDX-RS compiling 1,135+ lessons in 90s, WASM WordPress playground, AI interview & outage simulators, NotebookLM audio prompts, Supabase RLS), Unitrition (Headless WordPress + Next.js 16 App Router, React 19, Supabase RLS, USDA API for 10 diet frameworks), Next.js 16 & Hybrid RAG Portfolio Platform (519 SSG pages across EN/UA/ES/DE, autonomous Hybrid RAG assistant, Generative UI, WCAG 2.2 AA), and My React Portfolio Website (React 19, TypeScript, Tailwind CSS v4, View Transitions API, Vitest TDD).'
    ),
    contentUa: stripEmDashes(
      'Технологічна спеціалізація: 1. Сучасний Frontend та Full-Stack: Next.js 16 (App Router, React Server Components, Turbopack, SSG/ISR), React 19, TypeScript (strict zero-any), Tailwind CSS v4, View Transitions API. 2. AI-інженерія, Hybrid RAG та нативні рантайми: Кастомні пайплайни Hybrid RAG (Okapi BM25 + Дамерау-Левенштейн + TF-IDF косинусна подібність), Vercel AI SDK v7 (стримінг та Generative UI), нативний компілятор Rust MDX-RS, браузерні WebAssembly (WASM) пісочниці, Google NotebookLM, SDD + TDD із Claude Code, Cursor та Google Antigravity. 3. Backend, Cloud та дані: Supabase (PostgreSQL, RLS, OAuth, гейміфікація), Node.js, REST/GraphQL API, USDA FoodData Central API, AWS Cloud (EC2, S3, CloudFront, Route 53). 4. Enterprise WordPress та E-Commerce: Headless WordPress із HMAC-SHA256 вебхуками (revalidateTag), PHP 8+, кастомні теми/плагіни, ACF Pro, Gutenberg, WooCommerce, Shopify Liquid. 5. Втілено у власних флагманських проєктах (Personal Projects): Fullstack AI Lab (Next.js 16, React 19, Rust MDX-RS на 1 135+ уроків, WASM-пісочниця, AI-симулятори, NotebookLM, Supabase RLS), Unitrition (Headless WordPress + Next.js 16, React 19, Supabase RLS, USDA API для 10 дієт), Next.js 16 & Hybrid RAG Portfolio Platform (519 SSG-сторінок EN/UA/ES/DE, автономний Hybrid RAG, Generative UI, WCAG 2.2 AA) та My React Portfolio Website (React 19, TypeScript, Tailwind CSS v4, Vitest TDD).'
    ),
    contentEs: stripEmDashes(
      'Especialización Tecnológica: 1. Frontend y Full-Stack Moderno: Next.js 16 (App Router, React Server Components, Turbopack, SSG/ISR), React 19, TypeScript (strict zero-any), Tailwind CSS v4, View Transitions API. 2. Ingeniería de IA, Hybrid RAG y Runtimes Nativos: Pipelines propios de Hybrid RAG (Okapi BM25 + Damerau-Levenshtein + similitud de coseno TF-IDF), Vercel AI SDK v7 (streaming y Generative UI), compilación nativa en Rust MDX-RS, sandboxes WebAssembly (WASM) en navegador, Google NotebookLM y SDD + TDD con Claude Code, Cursor y Google Antigravity. 3. Backend, Cloud y Datos: Supabase (PostgreSQL, RLS, OAuth, gamificación), Node.js, APIs REST/GraphQL, USDA FoodData Central API, AWS Cloud (EC2, S3, CloudFront, Route 53). 4. WordPress Enterprise y E-Commerce: Headless WordPress con webhooks HMAC-SHA256 (revalidateTag), PHP 8+, temas/plugins a medida, ACF Pro, Gutenberg, WooCommerce, Shopify Liquid. 5. Aplicado en Proyectos Propios (Personal Projects): Fullstack AI Lab (Next.js 16, React 19, Rust MDX-RS con 1.135+ lecciones, sandbox WASM, simuladores IA, NotebookLM, Supabase RLS), Unitrition (Headless WordPress + Next.js 16, React 19, Supabase RLS, API USDA para 10 dietas), Next.js 16 & Hybrid RAG Portfolio Platform (519 páginas SSG EN/UA/ES/DE, Hybrid RAG autónomo, Generative UI, WCAG 2.2 AA) y My React Portfolio Website (React 19, TypeScript, Tailwind CSS v4, Vitest TDD).'
    ),
    contentDe: stripEmDashes(
      'Technologische Spezialisierung: 1. Moderner Frontend- & Full-Stack-Kern: Next.js 16 (App Router, React Server Components, Turbopack, SSG/ISR), React 19, TypeScript (strict zero-any), Tailwind CSS v4, View Transitions API. 2. KI-Engineering, Hybrid RAG & Native Runtimes: Eigene Hybrid-RAG-Pipelines (Okapi BM25 + Damerau-Levenshtein + TF-IDF-Kosinus-Vektorähnlichkeit), Vercel AI SDK v7 (Streaming & Generative UI), native Rust MDX-RS-Kompilierung, In-Browser WebAssembly (WASM)-Sandboxes, Google NotebookLM sowie SDD + TDD mit Claude Code, Cursor und Google Antigravity. 3. Backend, Cloud & Daten: Supabase (PostgreSQL, RLS, OAuth, Gamification), Node.js, REST-/GraphQL-APIs, USDA FoodData Central API, AWS Cloud (EC2, S3, CloudFront, Route 53). 4. Enterprise WordPress & E-Commerce: Entkoppeltes Headless WordPress mit HMAC-SHA256-Webhooks (revalidateTag), PHP 8+, individuelle Themes/Plugins, ACF Pro, Gutenberg, WooCommerce, Shopify Liquid. 5. Eingesetzt in eigenen Flagship-Projekten (Personal Projects): Fullstack AI Lab (Next.js 16, React 19, Rust MDX-RS mit 1.135+ Lektionen, WASM-Sandbox, KI-Simulatoren, NotebookLM, Supabase RLS), Unitrition (Headless WordPress + Next.js 16, React 19, Supabase RLS, USDA API für 10 Ernährungspläne), Next.js 16 & Hybrid RAG Portfolio Platform (519 SSG-Seiten EN/UA/ES/DE, autonomer Hybrid RAG, Generative UI, WCAG 2.2 AA) und My React Portfolio Website (React 19, TypeScript, Tailwind CSS v4, Vitest TDD).'
    ),
    metadata: {
      keywords: [
        'technologies',
        'stack',
        'specialize',
        'skills',
        'tools',
        'frontend',
        'backend',
        'personal',
        'flagship',
        'fullstack-ai-lab',
        'unitrition',
        'rust',
        'wasm',
        'supabase',
        'nextjs',
        'react',
        'wordpress',
      ],
    },
  },
]

const buildServiceChunks = (): KnowledgeChunk[] => {
  const chunks: KnowledgeChunk[] = [
    {
      id: 'services-b2b',
      type: 'service',
      title: 'B2B Services, Pricing & Engineering Capabilities',
      slug: 'services',
      content: stripEmDashes(
        'Key engineering services provided by Artur Yusupov: 1. White-label web engineering for digital agencies under strict NDA. 2. Headless WordPress and monolith migrations to Next.js 16. 3. Web performance & Core Web Vitals optimization (PageSpeed 95+). 4. Custom web development for businesses and clinics in Seville & Spain. 5. Custom RAG AI Assistants & 24/7 business automation. Flexible cooperation formats including fixed-price milestone delivery, dedicated retainers, and transparent sprint billing.'
      ),
      contentUa: stripEmDashes(
        'Ключові послуги Артура Юсупова: 1. White-label розробка Marca Blanca для digital-агенцій під NDA. 2. Міграція з WordPress на Next.js 16 Headless. 3. Оптимізація Core Web Vitals (PageSpeed 95+). 4. Розробка сайтів під ключ у Севільї та Іспанії. 5. Корпоративні RAG AI-асистенти 24/7.'
      ),
      contentEs: stripEmDashes(
        'Servicios B2B de ingeniería web de Artur Yusupov: 1. Desarrollo web marca blanca para agencias digitales bajo NDA. 2. Migración de WordPress a Next.js 16 Headless. 3. Optimización Core Web Vitals y Google Ads (PageSpeed 95+). 4. Desarrollo web a medida en Sevilla y España para Pymes. 5. Asistentes virtuales de IA con RAG 24/7.'
      ),
      contentDe: stripEmDashes(
        'B2B-Web-Engineering-Leistungen von Artur Yusupov: 1. White-Label-Webentwicklung für Digitalagenturen unter strenger NDA. 2. Headless-WordPress- und Monolith-Migrationen auf Next.js 16. 3. Web-Performance- & Core-Web-Vitals-Optimierung (PageSpeed 95+). 4. Maßgeschneiderte Webentwicklung für Unternehmen und Kliniken in Sevilla, Spanien & DACH. 5. Individuelle RAG-AI-Assistenten & 24/7 Business-Automatisierung.'
      ),
      metadata: {
        keywords: [
          'services',
          'wordpress',
          'nextjs',
          'react',
          'woocommerce',
          'aws',
          'pricing',
          'price',
          'rates',
          'contract',
          'hire',
          'cost',
          'b2b',
        ],
      },
    },
  ]

  for (const service of allServices) {
    const en = service.content.en
    const es = service.content.es
    const ua = service.content.ua
    const de = service.content.de

    const metricsStr = en.metrics.map((m) => `${m.label}: ${m.value}`).join('; ')
    const probsStr = en.problemsSolved.map((p) => `${p.title}: ${p.desc}`).join('; ')
    const delivStr = en.deliverables.map((d) => `${d.title}: ${d.items.join(', ')}`).join('; ')
    const faqsStr = en.faqs.map((f) => `Q: ${f.q} A: ${f.a}`).join(' | ')

    const metricsStrEs = es.metrics.map((m) => `${m.label}: ${m.value}`).join('; ')
    const probsStrEs = es.problemsSolved.map((p) => `${p.title}: ${p.desc}`).join('; ')
    const delivStrEs = es.deliverables.map((d) => `${d.title}: ${d.items.join(', ')}`).join('; ')
    const faqsStrEs = es.faqs.map((f) => `Q: ${f.q} A: ${f.a}`).join(' | ')

    const metricsStrUa = ua.metrics.map((m) => `${m.label}: ${m.value}`).join('; ')
    const probsStrUa = ua.problemsSolved.map((p) => `${p.title}: ${p.desc}`).join('; ')
    const delivStrUa = ua.deliverables.map((d) => `${d.title}: ${d.items.join(', ')}`).join('; ')
    const faqsStrUa = ua.faqs.map((f) => `Q: ${f.q} A: ${f.a}`).join(' | ')

    const metricsStrDe = de.metrics.map((m) => `${m.label}: ${m.value}`).join('; ')
    const probsStrDe = de.problemsSolved.map((p) => `${p.title}: ${p.desc}`).join('; ')
    const delivStrDe = de.deliverables.map((d) => `${d.title}: ${d.items.join(', ')}`).join('; ')
    const faqsStrDe = de.faqs.map((f) => `F: ${f.q} A: ${f.a}`).join(' | ')

    chunks.push({
      id: `service-${service.slug}`,
      type: 'service',
      title: stripEmDashes(en.title),
      slug: service.slug,
      category: service.audience,
      content: stripEmDashes(
        `${en.title}. ${en.shortDesc} ${en.heroLead} Metrics: ${metricsStr}. Problems Solved: ${probsStr}. Deliverables: ${delivStr}. FAQs: ${faqsStr}.`
      ),
      contentEs: stripEmDashes(
        `${es.title}. ${es.shortDesc} ${es.heroLead} Métricas: ${metricsStrEs}. Problemas que Resuelve: ${probsStrEs}. Entregables: ${delivStrEs}. Preguntas Frecuentes: ${faqsStrEs}.`
      ),
      contentUa: stripEmDashes(
        `${ua.title}. ${ua.shortDesc} ${ua.heroLead} Метрики: ${metricsStrUa}. Проблеми, які вирішує: ${probsStrUa}. Результати: ${delivStrUa}. Часті питання: ${faqsStrUa}.`
      ),
      contentDe: stripEmDashes(
        `${de.title}. ${de.shortDesc} ${de.heroLead} Kennzahlen: ${metricsStrDe}. Gelöste Probleme: ${probsStrDe}. Leistungen: ${delivStrDe}. Häufige Fragen: ${faqsStrDe}.`
      ),
      metadata: {
        keywords: [
          'service',
          service.slug,
          service.audience,
          ...en.badge.toLowerCase().split(/\s+/),
          ...service.relevantProjectSlugs,
        ],
      },
    })
  }

  return chunks
}

const buildMethodologyChunks = (): KnowledgeChunk[] => [
  {
    id: 'methodology-harness',
    type: 'methodology',
    title: 'AI-Harness, Spec-Driven Development (SDD), TDD, and Quality Standards',
    slug: 'methodology',
    content: stripEmDashes(
      'Artur Yusupov adheres to the 2026 AI-Harness engineering methodology across 4 phases: 1. Spec Engineering & EARS: Low-level codebase audit and translating requirements into EARS (Easy Approach to Requirements Syntax) inside specs/<feature>/ (spec.md, plan.md, tasks.md, analysis.md) before coding to prevent AI hallucinations. 2. Agentic Execution & MCP: Orchestrating Claude Code, Google Antigravity, Cursor, and Devin (Windsurf) via Model Context Protocol (MCP) and repository guardrails (constitution.md, AGENTS.md, DESIGN_SYSTEM.md, SECURITY.md) with Human-in-the-Loop review and characterization tests for legacy migrations, achieving +35% team velocity and up to 3x refactoring speed. 3. Hybrid Verification & TDD: Strict Red-Green-Refactor cycle using Vitest (230+ specs), React Testing Library, Playwright E2E + axe-core WCAG 2.2 AA / EAA 2026 compliance, tsc --noEmit (strict zero-any), ESLint/WPCS, and pnpm audit. 4. CWV Optimization, GEO & CI/CD: Sub-second Core Web Vitals (LCP < 1.2s, INP < 50ms), Generative Engine Optimization (llms.txt, AI.json, JSON-LD @graph), Server-Side Tracking (sGTM), and automated GitHub Actions / Vercel Edge deployments.'
    ),
    contentUa: stripEmDashes(
      'Артур Юсупов дотримується інженерної методології AI-Harness 2026 у 4 фази: 1. Spec Engineering та EARS: аудит кодової бази та написання специфікацій у specs/<feature>/ (spec.md, plan.md, tasks.md, analysis.md) за синтаксисом EARS перед генерацією коду для усунення галюцинацій. 2. Agentic Execution та MCP: оркестрація Claude Code, Google Antigravity, Cursor та Devin (Windsurf) через Model Context Protocol (MCP) і правила воркспейсу (constitution.md, AGENTS.md, DESIGN_SYSTEM.md, SECURITY.md) із контролем Human-in-the-Loop (+35% швидкості фіч у команді та 3x прискорення рефакторингу). 3. Гібридна верифікація та TDD: цикл Red-Green-Refactor на Vitest (230+ тестів), React Testing Library, Playwright E2E + axe-core WCAG 2.2 AA / EAA 2026, tsc --noEmit (strict zero-any), ESLint/WPCS та pnpm audit. 4. Оптимізація CWV, GEO та CI/CD: субсекундні Core Web Vitals (LCP < 1.2s, INP < 50ms), GEO (llms.txt, AI.json, JSON-LD @graph), sGTM та автодеплой у GitHub Actions / Vercel Edge.'
    ),
    contentEs: stripEmDashes(
      'Artur Yusupov aplica la metodología de ingeniería AI-Harness 2026 en 4 fases: 1. Spec Engineering y EARS: auditoría de código y redacción de especificaciones bajo specs/<feature>/ (spec.md, plan.md, tasks.md, analysis.md) con sintaxis EARS antes de programar para evitar alucinaciones. 2. Ejecución Agéntica y MCP: orquestación de Claude Code, Google Antigravity, Cursor y Devin (Windsurf) mediante Model Context Protocol (MCP) y reglas de repositorio (constitution.md, AGENTS.md, DESIGN_SYSTEM.md, SECURITY.md) con supervisión Human-in-the-Loop (+35% de velocidad de entrega y hasta 3x en refactorización). 3. Verificación Híbrida y TDD: ciclo Red-Green-Refactor con Vitest (230+ tests), React Testing Library, Playwright E2E + axe-core WCAG 2.2 AA / EAA 2026, tsc --noEmit (zero-any), ESLint/WPCS y pnpm audit. 4. Optimización CWV, GEO y CI/CD: Core Web Vitals subsegundo (LCP < 1.2s, INP < 50ms), GEO (llms.txt, AI.json, JSON-LD @graph), sGTM y CI/CD en GitHub Actions / Vercel Edge.'
    ),
    contentDe: stripEmDashes(
      'Artur Yusupov folgt der AI-Harness-Engineering-Methodik 2026 in 4 Phasen: 1. Spec Engineering & EARS: Low-Level-Code-Audit und Spezifikation unter specs/<feature>/ (spec.md, plan.md, tasks.md, analysis.md) im EARS-Format vor dem Coding gegen KI-Halluzinationen. 2. Agentic Execution & MCP: Orchestrierung von Claude Code, Google Antigravity, Cursor und Devin (Windsurf) über das Model Context Protocol (MCP) und Repository-Regeln (constitution.md, AGENTS.md, DESIGN_SYSTEM.md, SECURITY.md) mit Human-in-the-Loop-Kontrolle (+35% Team-Velocity und bis zu 3x schnelleres Refactoring). 3. Hybride Verifikation & TDD: Strikter Red-Green-Refactor-Zyklus mit Vitest (230+ Specs), React Testing Library, Playwright E2E + axe-core WCAG 2.2 AA / EAA 2026, tsc --noEmit (zero-any), ESLint/WPCS und pnpm audit. 4. CWV-Optimierung, GEO & CI/CD: Sub-Sekunden Core Web Vitals (LCP < 1.2s, INP < 50ms), GEO (llms.txt, AI.json, JSON-LD @graph), sGTM und GitHub Actions / Vercel Edge CI/CD.'
    ),
    metadata: {
      keywords: [
        'methodology',
        'sdd',
        'tdd',
        'ears',
        'mcp',
        'claude',
        'antigravity',
        'cursor',
        'vitest',
        'playwright',
        'wcag',
        'eaa',
        'devsecops',
        'quality',
        'ai-harness',
      ],
    },
  },
]

const extractBlogSectionOutline = (markdown?: string): string => {
  if (!markdown) return ''
  const headings = Array.from(markdown.matchAll(/^#{2,3}\s+(.+)$/gm)).map((m) =>
    m[1].replace(/[*_`[\]()]/g, '').trim(),
  )
  return headings.length > 0 ? ` Sections: ${headings.slice(0, 14).join('; ')}.` : ''
}

const buildBlogChunks = (): KnowledgeChunk[] => {
  return allBlogPosts.map((post) => {
    const titleDe = (post.title as Partial<Record<'en' | 'ua' | 'es' | 'de', string>>).de
    const categoryDe = (post.categoryLabel as Partial<Record<'en' | 'ua' | 'es' | 'de', string>>).de
    const tldrDe = (post.tldr as Partial<Record<'en' | 'ua' | 'es' | 'de', string[]>>).de
    const descDe = (post.description as Partial<Record<'en' | 'ua' | 'es' | 'de', string>>).de
    const contentDeBody = (post.content as Partial<Record<'en' | 'ua' | 'es' | 'de', string>>).de

    const outlineEn = extractBlogSectionOutline(post.content.en)
    const outlineUa = extractBlogSectionOutline(post.content.ua)
    const outlineEs = extractBlogSectionOutline(post.content.es)
    const outlineDe = extractBlogSectionOutline(contentDeBody || post.content.en)

    return {
      id: `blog-${post.slug}`,
      type: 'blog' as const,
      title: post.title.en,
      slug: post.slug,
      category: post.category,
      technologies: post.tags,
      content: stripEmDashes(
        `Engineering Article: ${post.title.en}. Category: ${post.categoryLabel.en}. Key Takeaways: ${post.tldr.en.join(' ')}. Summary: ${post.description.en}.${outlineEn} Article link: /en/blog/${post.slug}`
      ),
      contentUa: stripEmDashes(
        `Інженерна стаття: ${post.title.ua}. Категорія: ${post.categoryLabel.ua}. Ключові тези: ${post.tldr.ua.join(' ')}. Опис: ${post.description.ua}.${outlineUa} Посилання на статтю: /ua/blog/${post.slug}`
      ),
      contentEs: stripEmDashes(
        `Artículo técnico: ${post.title.es}. Categoría: ${post.categoryLabel.es}. Conclusiones: ${post.tldr.es.join(' ')}. Resumen: ${post.description.es}.${outlineEs} Enlace al artículo: /es/blog/${post.slug}`
      ),
      contentDe: titleDe
        ? stripEmDashes(
            `Technischer Fachartikel: ${titleDe}. Kategorie: ${categoryDe || post.categoryLabel.en}. Kernaussagen: ${(tldrDe || post.tldr.en).join(' ')}. Zusammenfassung: ${descDe || post.description.en}.${outlineDe} Artikellink: /de/blog/${post.slug}`
          )
        : undefined,
      metadata: {
        keywords: [
          'blog',
          'article',
          post.category.toLowerCase(),
          ...post.slug.split('-'),
          ...post.tags.map((t) => t.toLowerCase()),
        ],
      },
    }
  })
}

let cachedKnowledgeBase: KnowledgeBase | null = null

export const loadKnowledgeBase = (): KnowledgeBase => {
  if (cachedKnowledgeBase) return cachedKnowledgeBase

  const projects = buildProjectOverviewChunks()
  const projectFacets = buildProjectFacetedSubchunks(projects)
  const profile = buildProfileChunks()
  const services = buildServiceChunks()
  const methodology = buildMethodologyChunks()
  const blog = buildBlogChunks()
  const allChunks = [
    ...projects,
    ...projectFacets,
    ...profile,
    ...services,
    ...methodology,
    ...blog,
  ]

  cachedKnowledgeBase = {
    version: '2026.2.0',
    updatedAt: new Date().toISOString(),
    author: {
      name: PUBLIC_PROFILES.name,
      title: 'Senior Fullstack WordPress & Next.js/React Engineer',
      location: PUBLIC_PROFILES.location,
      experience: PUBLIC_PROFILES.experience,
      github: PUBLIC_PROFILES.githubUrl,
      linkedin: PUBLIC_PROFILES.linkedinUrl,
    },
    projects,
    projectFacets,
    profile,
    services,
    methodology,
    blog,
    allChunks,
  }

  return cachedKnowledgeBase
}

export const getAllKnowledgeChunks = (): KnowledgeChunk[] => {
  return loadKnowledgeBase().allChunks
}

export const findChunkBySlug = (slug: string): KnowledgeChunk | undefined => {
  const normalized = slug.trim().toLowerCase()
  return getAllKnowledgeChunks().find((c) => c.slug?.toLowerCase() === normalized)
}
