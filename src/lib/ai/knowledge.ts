import { PUBLIC_PROFILES } from '../profiles'
import { PREBUILT_RAG_DATA } from './generated/rag-index.generated'
import type {
  BlogPostSummary,
  KnowledgeBase,
  KnowledgeChunk,
  PrebuiltKnowledgeData,
  ProjectFacet,
} from './knowledge-types'

export type {
  BlogPostSummary,
  KnowledgeBase,
  KnowledgeChunk,
  PrebuiltKnowledgeData,
  ProjectFacet,
}

const PREBUILT_DATA: PrebuiltKnowledgeData = PREBUILT_RAG_DATA

let cachedKnowledgeBase: KnowledgeBase | null = null
let cachedChunkBySlug: Map<string, KnowledgeChunk> | null = null
let cachedBlogSummaryBySlug: Map<string, BlogPostSummary> | null = null

export const getPrebuiltKnowledgeData = (): PrebuiltKnowledgeData => PREBUILT_DATA

export const getAllBlogSummaries = (): BlogPostSummary[] => PREBUILT_DATA.blogSummaries

export const getBlogSummaryBySlug = (slug: string): BlogPostSummary | undefined => {
  if (!cachedBlogSummaryBySlug) {
    cachedBlogSummaryBySlug = new Map(
      PREBUILT_DATA.blogSummaries.map((post) => [post.slug.toLowerCase(), post]),
    )
  }
  return cachedBlogSummaryBySlug.get(slug.trim().toLowerCase())
}

export const getBlogSummaryTitle = (post: BlogPostSummary, locale: string): string => {
  if (locale === 'de') return post.title.de || post.title.en
  if (locale === 'ua') return post.title.ua || post.title.en
  if (locale === 'es') return post.title.es || post.title.en
  return post.title.en
}

export const getBlogSummaryDescription = (post: BlogPostSummary, locale: string): string => {
  if (locale === 'de') return post.description.de || post.description.en
  if (locale === 'ua') return post.description.ua || post.description.en
  if (locale === 'es') return post.description.es || post.description.en
  return post.description.en
}

export const getBlogSummaryCategoryLabel = (post: BlogPostSummary, locale: string): string => {
  if (locale === 'de') return post.categoryLabel.de || post.categoryLabel.en
  if (locale === 'ua') return post.categoryLabel.ua || post.categoryLabel.en
  if (locale === 'es') return post.categoryLabel.es || post.categoryLabel.en
  return post.categoryLabel.en
}

export const getBlogSummaryReadTime = (post: BlogPostSummary, locale: string): string => {
  if (locale === 'de') return post.readTime.de || post.readTime.en
  if (locale === 'ua') return post.readTime.ua || post.readTime.en
  if (locale === 'es') return post.readTime.es || post.readTime.en
  return post.readTime.en
}

export const getBlogSummaryTldr = (post: BlogPostSummary, locale: string): string[] => {
  if (locale === 'de') return post.tldr.de || post.tldr.en
  if (locale === 'ua') return post.tldr.ua || post.tldr.en
  if (locale === 'es') return post.tldr.es || post.tldr.en
  return post.tldr.en
}

export const loadKnowledgeBase = (): KnowledgeBase => {
  if (cachedKnowledgeBase) return cachedKnowledgeBase

  const { counts, chunks, version } = PREBUILT_DATA
  let offset = 0
  const projects = chunks.slice(offset, (offset += counts.projects))
  const projectFacets = chunks.slice(offset, (offset += counts.projectFacets))
  const profile = chunks.slice(offset, (offset += counts.profile))
  const services = chunks.slice(offset, (offset += counts.services))
  const methodology = chunks.slice(offset, (offset += counts.methodology))
  const blog = chunks.slice(offset, offset + counts.blog)

  cachedKnowledgeBase = {
    version,
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
    allChunks: chunks,
  }

  return cachedKnowledgeBase
}

export const getAllKnowledgeChunks = (): KnowledgeChunk[] => {
  return PREBUILT_DATA.chunks
}

export const findChunkBySlug = (slug: string): KnowledgeChunk | undefined => {
  if (!cachedChunkBySlug) {
    cachedChunkBySlug = new Map<string, KnowledgeChunk>()
    for (const chunk of PREBUILT_DATA.chunks) {
      if (chunk.slug) {
        const key = chunk.slug.toLowerCase()
        if (!cachedChunkBySlug.has(key)) {
          cachedChunkBySlug.set(key, chunk)
        }
      }
    }
  }
  return cachedChunkBySlug.get(slug.trim().toLowerCase())
}
