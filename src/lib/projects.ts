import type { Project, TechnologyItem } from '../components/projects/project-types'
import { projectRegistry, type ProjectRegistryItem } from './projectRegistry'

export type ProjectEntry = ProjectRegistryItem

export function getAllProjectEntries(): ProjectEntry[] {
  return [...projectRegistry].sort((a, b) => b.project.id - a.project.id)
}

export function getProjectBySlug(slug: string): Project | undefined {
  const normalized = slug.trim().toLowerCase()
  const entry = projectRegistry.find((e) => e.slug === normalized)
  return entry?.project
}

export function getProjectById(id: number): Project | undefined {
  const entry = projectRegistry.find((e) => e.project.id === id)
  return entry?.project
}

export function getProjectSlugById(id: number): string | undefined {
  const entry = projectRegistry.find((e) => e.project.id === id)
  return entry?.slug
}

function extractTechTokens(project: Project): Set<string> {
  const tokens = new Set<string>()
  const raw: string[] = []

  if (Array.isArray(project.technologies)) {
    raw.push(...project.technologies)
  } else if (project.technologies && typeof project.technologies === 'object') {
    Object.values(project.technologies).forEach((group) => {
      if (Array.isArray(group)) {
        group.forEach((item) => {
          if (typeof item === 'string') {
            raw.push(item)
          } else if (item && typeof item === 'object') {
            raw.push(item.short, item.full || '')
          }
        })
      }
    })
  }

  raw.push(project.title)
  raw.push(...project.category)

  const text = raw.join(' ').toLowerCase()

  const keyAnchors = [
    'next.js',
    'nextjs',
    'react',
    'typescript',
    'tailwind',
    'supabase',
    'wordpress',
    'shopify',
    'wix',
    'aws',
    'cloud',
    'graphql',
    'rest api',
    'node',
    'express',
    'php',
    'mysql',
    'postgresql',
    'vitest',
    'playwright',
    'mdx',
    'zustand',
    'ecommerce',
    'e-commerce',
    'medical',
    'healthcare',
    'dental',
    'construction',
    'consulting',
  ]

  for (const anchor of keyAnchors) {
    if (text.includes(anchor)) {
      tokens.add(anchor)
    }
  }

  return tokens
}

export function getProjectSimilarityScore(current: Project, candidate: Project): number {
  if (current.id === candidate.id) return -1

  let score = 0

  const currentPrimary = current.category[0]
  const candidatePrimary = candidate.category[0]

  // Primary category match is paramount (e.g. Next.js to Next.js, Shopify to Shopify)
  if (currentPrimary && candidatePrimary && currentPrimary === candidatePrimary) {
    score += 150
  } else if (currentPrimary && candidate.category.includes(currentPrimary)) {
    score += 100
  }

  // Any shared category
  const currentCats = new Set(current.category)
  for (const cat of candidate.category) {
    if (currentCats.has(cat)) {
      score += 35
    }
  }

  const hasCategoryOverlap = candidate.category.some((c) => currentCats.has(c))

  // Personal flagship project affinity (Unitrition, WPSKILLS, Next.js Portfolio, React Portfolio)
  if (current.isPersonal && candidate.isPersonal) {
    score += 90
  }

  // Technology tokens
  const currentTokens = extractTechTokens(current)
  const candidateTokens = extractTechTokens(candidate)

  let sharedTechCount = 0
  for (const token of candidateTokens) {
    if (currentTokens.has(token)) {
      sharedTechCount++
      if (token === 'next.js' || token === 'nextjs') score += 60
      else if (token === 'react') score += 40
      else if (token === 'aws') score += 50
      else if (token === 'cloud') score += 35
      else if (token === 'shopify') score += 45
      else if (token === 'wix') score += 40
      else if (token === 'typescript') score += 30
      else if (token === 'supabase') score += 35
      else if (token === 'tailwind') score += 20
      else score += 15
    }
  }

  if (!hasCategoryOverlap && sharedTechCount === 0) {
    return 0
  }

  // Modernity / recency tier tiebreaker (id is between 3800 and 29500)
  score += candidate.id / 1000

  return score
}

export function getRelatedProjects(
  current: Project,
  pool: Project[] = projectRegistry.map((item) => item.project),
  limit = 3
): Project[] {
  if (!current) return []

  const scored = pool
    .filter((candidate) => candidate.id !== current.id)
    .map((candidate) => ({
      project: candidate,
      score: getProjectSimilarityScore(current, candidate),
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)

  return scored.slice(0, limit).map((item) => item.project)
}

export function getProjectTechList(project: Project): TechnologyItem[] {
  if (Array.isArray(project.technologies)) {
    return project.technologies
  }
  const techObj = project.technologies
  const list: TechnologyItem[] = []
  if (techObj.frontend) list.push(...techObj.frontend)
  if (techObj.backend) list.push(...techObj.backend)
  if (techObj.contentManagement) list.push(...techObj.contentManagement)
  if (techObj.api) list.push(...techObj.api)
  if (techObj.devopsSecurity) list.push(...techObj.devopsSecurity)
  if (techObj.aiTools) list.push(...techObj.aiTools)
  if (techObj.seo) list.push(...techObj.seo)
  if (techObj.technicalOptimization) list.push(...techObj.technicalOptimization)
  if (techObj.analytics) list.push(...techObj.analytics)
  if (techObj.digitalMarketing) list.push(...techObj.digitalMarketing)
  return list
}

const SEARCH_SYNONYMS: Record<string, string[]> = {
  // Medical & Clinic
  'медицина': ['medical', 'healthcare', 'clinic'],
  'медичний': ['medical', 'healthcare'],
  'клініка': ['clinic', 'medical'],
  'клиника': ['clinic', 'medical'],
  'стоматологія': ['dental', 'clinic'],
  'стоматология': ['dental', 'clinic'],
  'dental': ['стоматологія', 'dental'],
  'clínica': ['clinic', 'medical'],
  'clinica': ['clinic', 'medical'],
  'médico': ['medical', 'healthcare'],
  'medico': ['medical', 'healthcare'],

  // E-commerce & Store
  'магазин': ['store', 'shop', 'ecommerce', 'shopify', 'woocommerce'],
  'інтернет-магазин': ['ecommerce', 'store', 'shopify'],
  'tienda': ['store', 'shop', 'ecommerce', 'shopify'],
  'comercio': ['ecommerce', 'store'],
  'ecommerce': ['магазин', 'tienda', 'store', 'e-commerce'],
  'e-commerce': ['магазин', 'tienda', 'store', 'ecommerce'],

  // Education / Edtech
  'освіта': ['education', 'edtech', 'learning'],
  'навчання': ['education', 'edtech', 'learning'],
  'educación': ['education', 'edtech'],
  'educacion': ['education', 'edtech'],
  'edtech': ['освіта', 'навчання', 'education', 'learning'],

  // Construction
  'будівництво': ['construction', 'timber'],
  'строительство': ['construction', 'timber'],
  'construcción': ['construction'],
  'construccion': ['construction'],

  // Architecture / CRM / SaaS
  'crm': ['інтеграція', 'integration', 'crm'],
  'saas': ['платформа', 'platform', 'app'],
}

export function matchesProjectSearch(project: Project, rawQuery: string): boolean {
  const trimmed = rawQuery.toLowerCase().trim()
  if (!trimmed) return true

  const parts: string[] = [
    project.title,
    project.category.join(' '),
    project.detailHeroLine || '',
    project.description,
    project.descriptionUa || '',
    project.descriptionEs || '',
    project.fullDescription || '',
    project.fullDescriptionUa || '',
    project.fullDescriptionEs || '',
    project.challenges || '',
    project.challengesUa || '',
    project.challengesEs || '',
    project.solutions || '',
    project.solutionsUa || '',
    project.solutionsEs || '',
    project.architecture?.description || '',
    project.architecture?.descriptionUa || '',
    project.architecture?.descriptionEs || '',
  ]

  const allTech = getProjectTechList(project)
  for (const tech of allTech) {
    if (typeof tech === 'string') {
      parts.push(tech)
    } else {
      parts.push(tech.short, tech.full || tech.short)
    }
  }

  if (Array.isArray(project.features)) {
    for (const feat of project.features) {
      if (typeof feat === 'string') {
        parts.push(feat)
      } else if (feat && typeof feat === 'object' && 'title' in feat) {
        const f = feat as {
          title?: string
          titleUa?: string
          titleEs?: string
          description?: string
          descriptionUa?: string
          descriptionEs?: string
        }
        parts.push(
          f.title || '',
          f.titleUa || '',
          f.titleEs || '',
          f.description || '',
          f.descriptionUa || '',
          f.descriptionEs || '',
        )
      }
    }
  }

  const corpus = parts.join(' ').toLowerCase()
  const corpusCompact = corpus.replace(/[.\-/]/g, '')

  const tokens = trimmed.split(/\s+/).filter(Boolean)
  return tokens.every((token) => {
    if (corpus.includes(token)) return true
    const compactToken = token.replace(/[.\-/]/g, '')
    if (compactToken.length >= 2 && corpusCompact.includes(compactToken)) {
      return true
    }

    const synonyms = SEARCH_SYNONYMS[token]
    if (synonyms && synonyms.some((syn) => corpus.includes(syn))) {
      return true
    }

    return false
  })
}

export function getProjectSearchRelevanceScore(project: Project, rawQuery: string): number {
  const trimmed = rawQuery.toLowerCase().trim()
  if (!trimmed) return 0
  const tokens = trimmed.split(/\s+/).filter(Boolean)
  let score = 0
  const titleLower = project.title.toLowerCase()
  const categoryLower = project.category.join(' ').toLowerCase()
  const techList = getProjectTechList(project)
  const techLower = techList
    .map((t) => (typeof t === 'string' ? t : `${t.short} ${t.full || ''}`))
    .join(' ')
    .toLowerCase()
  const descLower = `${project.description} ${project.descriptionUa || ''} ${project.descriptionEs || ''}`.toLowerCase()

  for (const token of tokens) {
    if (titleLower === token) {
      score += 300
    } else if (titleLower.includes(token)) {
      score += 150
    }

    if (categoryLower.includes(token)) score += 80
    if (techLower.includes(token)) score += 60
    if (descLower.includes(token)) score += 30

    const synonyms = SEARCH_SYNONYMS[token]
    if (synonyms) {
      for (const syn of synonyms) {
        if (titleLower.includes(syn)) score += 100
        if (categoryLower.includes(syn)) score += 60
        if (techLower.includes(syn)) score += 40
      }
    }
  }

  if (project.isPersonal) score += 20
  score += project.id / 100000

  return score
}
