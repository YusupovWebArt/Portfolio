import { Project, TechnologyItem } from '../../components/projects/project-types'
import { projectRegistry } from '../projectRegistry'
import { stripEmDashes } from './text'
import { OBFUSCATED_CONTACTS, PUBLIC_PROFILES } from '../contacts'

export type ProjectFacet = 'overview' | 'stack' | 'features' | 'architecture' | 'case-study'

export interface KnowledgeChunk {
  id: string
  type: 'project' | 'profile' | 'service' | 'methodology'
  facet?: ProjectFacet
  parentId?: string
  title: string
  slug?: string
  category?: string
  technologies?: string[]
  content: string
  contentUa?: string
  contentEs?: string
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
    emailObfuscated: string
    github: string
    linkedin: string
  }
  projects: KnowledgeChunk[]
  projectFacets: KnowledgeChunk[]
  profile: KnowledgeChunk[]
  services: KnowledgeChunk[]
  methodology: KnowledgeChunk[]
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
      facets.push({
        id: `${overview.id}-features`,
        type: 'project',
        facet: 'features',
        parentId: overview.id,
        title: stripEmDashes(`${project.title} - Key Features`),
        slug: overview.slug,
        category: overview.category,
        content: stripEmDashes(`Core features of ${project.title}: ${featStr}`),
        metadata: {
          projectId: project.id,
          keywords: ['features', 'functionality', overview.slug || ''],
        },
      })
    }

    // 3. Architecture & Engineering Facet (if rich architecture rows or case study details exist)
    if (project.architecture || project.challenges || project.solutions) {
      const archParts: string[] = []
      if (project.architecture?.description) archParts.push(project.architecture.description)
      if (project.architecture?.rows) {
        archParts.push(
          project.architecture.rows
            .map((r) => `${r.rowLabel}: ${r.steps.map((s) => s.label).join(' -> ')}`)
            .join('; ')
        )
      }
      if (project.challenges) archParts.push(`Challenges: ${project.challenges.join('; ')}`)
      if (project.solutions) archParts.push(`Solutions: ${project.solutions.join('; ')}`)

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
      'Artur Yusupov is a Fullstack WordPress Developer and Next.js / React Engineer with over 5+ years of commercial web development experience. Based in Seville, Spain, he specializes in modern enterprise web architecture, Headless CMS, custom plugin/theme development, high-performance UI engineering, and AI-augmented software development.'
    ),
    contentUa: stripEmDashes(
      'Артур Юсупов - Fullstack WordPress-розробник та Next.js / React інженер із понад 5 роками комерційного досвіду. Проживає в Севільї (Іспанія), спеціалізується на сучасній веб-архітектурі, Headless CMS, розробці кастомних плагінів/тем, високій продуктивності та AI-орієнтованій розробці.'
    ),
    contentEs: stripEmDashes(
      'Artur Yusupov es un desarrollador Fullstack WordPress e ingeniero Next.js / React con más de 5 años de experiencia comercial. Reside en Sevilla, España, y se especializa en arquitectura web moderna, Headless CMS, temas y plugins personalizados, y desarrollo asistido por IA.'
    ),
    metadata: {
      keywords: ['artur', 'yusupov', 'bio', 'experience', 'seville', 'spain', 'fullstack'],
    },
  },
]

const buildServiceChunks = (): KnowledgeChunk[] => [
  {
    id: 'services-b2b',
    type: 'service',
    title: 'B2B Services, Pricing & Engineering Capabilities',
    slug: 'services',
    content: stripEmDashes(
      'Key engineering services provided by Artur Yusupov: 1. Custom WordPress & WooCommerce Development: Bespoke Gutenberg themes, ACF Pro, secure REST API integrations, performance optimization. 2. Next.js & React Engineering: Enterprise single page applications, SSR/SSG architectures, TypeScript strict typing, Tailwind CSS. 3. Cloud & High-Load Migrations: Zero-downtime AWS infrastructure migration, CDN setup, database optimization. 4. AI-Augmented Development: Custom RAG systems, AI chatbot integration with tool calling, and Spec-Driven Development workflows. 5. Engagement Models, Pricing, and Contract Rates: Flexible cooperation formats including full-time remote engineering, dedicated part-time contracts, hourly rate packages, and fixed-price milestone delivery. Transparent estimates and sprint-based billing.'
    ),
    contentUa: stripEmDashes(
      'Ключові послуги Артура Юсупова: 1. Кастомна розробка на WordPress та WooCommerce (Gutenberg, ACF Pro, REST API). 2. Next.js та React інженерія (корпоративні SPA, SSR/SSG, TypeScript, Tailwind). 3. Хмарна міграція та високі навантаження (AWS, CDN, оптимізація баз даних). 4. AI-орієнтована розробка (RAG-системи, AI-чатботи з Tool Calling, SDD). 5. Моделі співпраці, ціни та контрактні тарифи: гнучкі формати, включаючи віддалену розробку full-time, part-time контракти, погодинні ставки та фіксовану вартість за проєкт.'
    ),
    contentEs: stripEmDashes(
      'Servicios de ingeniería ofrecidos por Artur Yusupov: 1. Desarrollo a medida en WordPress y WooCommerce. 2. Ingeniería en Next.js y React con TypeScript y Tailwind. 3. Migraciones a la nube y alta concurrencia en AWS. 4. Desarrollo potenciado por IA con RAG y flujos SDD. 5. Modelos de contratación, precios y tarifas: formatos flexibles que incluyen dedicación completa remota, contratos a tiempo parcial, paquetes por horas y proyectos a precio cerrado.'
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
      ],
    },
  },
]

const buildMethodologyChunks = (): KnowledgeChunk[] => [
  {
    id: 'methodology-harness',
    type: 'methodology',
    title: 'AI-Harness, SDD, TDD, and Quality Standards',
    slug: 'methodology',
    content: stripEmDashes(
      'Artur Yusupov adheres to the 2026 AI-Harness engineering methodology: 1. Spec-Driven Development (SDD): All features are lifecycle-managed under specs/ before coding. 2. Test-Driven Development (TDD): Strict Red-Green-Refactor discipline using Vitest and React Testing Library. 3. European Accessibility Act (EAA 2026 / WCAG 2.2 AA): Continuous axe-core scanning with zero accessibility violations. 4. DevSecOps: Strict Zero Secrets policy, Base64 contact obfuscation, opt-in Consent Mode v2 Basic for analytics, and sub-second Core Web Vitals budgets.'
    ),
    metadata: {
      keywords: ['methodology', 'sdd', 'tdd', 'vitest', 'wcag', 'eaa', 'devsecops', 'quality'],
    },
  },
]

let cachedKnowledgeBase: KnowledgeBase | null = null

export const loadKnowledgeBase = (): KnowledgeBase => {
  if (cachedKnowledgeBase) return cachedKnowledgeBase

  const projects = buildProjectOverviewChunks()
  const projectFacets = buildProjectFacetedSubchunks(projects)
  const profile = buildProfileChunks()
  const services = buildServiceChunks()
  const methodology = buildMethodologyChunks()
  const allChunks = [...projects, ...projectFacets, ...profile, ...services, ...methodology]

  cachedKnowledgeBase = {
    version: '2026.2.0',
    updatedAt: new Date().toISOString(),
    author: {
      name: PUBLIC_PROFILES.name,
      title: 'Senior Fullstack WordPress & Next.js/React Engineer',
      location: PUBLIC_PROFILES.location,
      experience: PUBLIC_PROFILES.experience,
      emailObfuscated: OBFUSCATED_CONTACTS.email,
      github: PUBLIC_PROFILES.githubUrl,
      linkedin: PUBLIC_PROFILES.linkedinUrl,
    },
    projects,
    projectFacets,
    profile,
    services,
    methodology,
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
