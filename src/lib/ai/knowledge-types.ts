import type { BlogPost } from '../../data/blog/types'

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

export interface BlogPostSummary {
  slug: string
  date: string
  category: BlogPost['category']
  tags: string[]
  image: string
  title: BlogPost['title']
  description: BlogPost['description']
  categoryLabel: BlogPost['categoryLabel']
  readTime: BlogPost['readTime']
  tldr: BlogPost['tldr']
  appliedProjects?: BlogPost['appliedProjects']
  content?: BlogPost['content']
  foldedTitles?: {
    en: string
    ua: string
    es: string
    de: string
  }
}

export interface PrebuiltKnowledgeData {
  version: string
  counts: {
    projects: number
    projectFacets: number
    profile: number
    services: number
    methodology: number
    blog: number
    totalChunks: number
  }
  chunks: KnowledgeChunk[]
  chunkSearchMeta: {
    lowerTitles: string[]
    lowerSlugs: Array<string | null>
    lowerTechnologies: Array<string[] | null>
  }
  bm25: {
    totalDocs: number
    avgDocLength: number
    docLengths: number[]
    postings: Record<string, number[]>
  }
  blogSummaries: BlogPostSummary[]
}
