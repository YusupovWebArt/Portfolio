import type { BlogPost, BlogLocale } from './types'
import { nextjsVsHeadlessWordPressPost } from './posts/nextjs-vs-headless-wordpress'
import { wpskillsInteractiveEdtechArchitecturePost } from './posts/wpskills-interactive-edtech-architecture'
import { unitritionHeadlessHealthtechArchitecturePost } from './posts/unitrition-headless-healthtech-architecture'
import { autonomousHybridRagPost } from './posts/autonomous-hybrid-rag'
import { wcag22Eaa2026Post } from './posts/wcag-22-eaa-2026'
import { subSecondCwvBundleOptimizationPost } from './posts/sub-second-cwv-bundle-optimization'
import { shopifyLiquidVsCustomWooCommercePost } from './posts/shopify-liquid-vs-custom-woocommerce'
import { clientSideZeroTrustSecurityPost } from './posts/client-side-zero-trust-security'
import { legacyMigrationCloudInfrastructurePost } from './posts/legacy-migration-cloud-infrastructure'

export * from './types'

export const allBlogPosts: BlogPost[] = [
  nextjsVsHeadlessWordPressPost,
  wpskillsInteractiveEdtechArchitecturePost,
  unitritionHeadlessHealthtechArchitecturePost,
  autonomousHybridRagPost,
  subSecondCwvBundleOptimizationPost,
  wcag22Eaa2026Post,
  shopifyLiquidVsCustomWooCommercePost,
  clientSideZeroTrustSecurityPost,
  legacyMigrationCloudInfrastructurePost,
]

export function getAllBlogPosts(): BlogPost[] {
  return allBlogPosts
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return allBlogPosts.find((p) => p.slug === slug)
}

export function getRelatedBlogPosts(currentSlug: string, limit = 2): BlogPost[] {
  return allBlogPosts.filter((p) => p.slug !== currentSlug).slice(0, limit)
}

export function getBlogTitle(post: BlogPost, locale: string): string {
  const l = (locale === 'ua' || locale === 'es' ? locale : 'en') as BlogLocale
  return post.title[l] || post.title.en
}

export function getBlogDescription(post: BlogPost, locale: string): string {
  const l = (locale === 'ua' || locale === 'es' ? locale : 'en') as BlogLocale
  return post.description[l] || post.description.en
}

export function getBlogReadTime(post: BlogPost, locale: string): string {
  const l = (locale === 'ua' || locale === 'es' ? locale : 'en') as BlogLocale
  return post.readTime[l] || post.readTime.en
}

export function getBlogCategoryLabel(post: BlogPost, locale: string): string {
  const l = (locale === 'ua' || locale === 'es' ? locale : 'en') as BlogLocale
  return post.categoryLabel[l] || post.categoryLabel.en
}

export function getBlogContent(post: BlogPost, locale: string): string {
  const l = (locale === 'ua' || locale === 'es' ? locale : 'en') as BlogLocale
  return post.content[l] || post.content.en
}

export function getBlogTldr(post: BlogPost, locale: string): string[] {
  const l = (locale === 'ua' || locale === 'es' ? locale : 'en') as BlogLocale
  return post.tldr[l] || post.tldr.en
}
