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

const buildBlogChunks = (): KnowledgeChunk[] => {
  return allBlogPosts.map((post) => ({
    id: `blog-${post.slug}`,
    type: 'blog' as const,
    title: post.title.en,
    slug: post.slug,
    category: post.category,
    technologies: post.tags,
    content: stripEmDashes(
      `Engineering Article: ${post.title.en}. Category: ${post.categoryLabel.en}. Key Takeaways: ${post.tldr.en.join(' ')}. Summary: ${post.description.en}. Article link: /en/blog/${post.slug}`
    ),
    contentUa: stripEmDashes(
      `Інженерна стаття: ${post.title.ua}. Категорія: ${post.categoryLabel.ua}. Ключові тези: ${post.tldr.ua.join(' ')}. Опис: ${post.description.ua}. Посилання на статтю: /ua/blog/${post.slug}`
    ),
    contentEs: stripEmDashes(
      `Artículo técnico: ${post.title.es}. Categoría: ${post.categoryLabel.es}. Conclusiones: ${post.tldr.es.join(' ')}. Resumen: ${post.description.es}. Enlace al artículo: /es/blog/${post.slug}`
    ),
    metadata: {
      keywords: [
        'blog',
        'article',
        'architecture',
        'tco',
        'nextjs',
        'wordpress',
        'rag',
        'wcag',
        'eaa',
        ...post.slug.split('-'),
        ...post.tags.map((t) => t.toLowerCase()),
      ],
    },
  }))
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
