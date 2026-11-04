import type { ServiceItem, ServiceLocale } from './types'
import { whiteLabelAgencyService } from './whiteLabelAgency'
import { headlessMigrationService } from './headlessMigration'
import { webPerformanceService } from './webPerformance'
import { customWebSevilleService } from './customWebSeville'
import { ragAiAssistantsService } from './ragAiAssistants'

export * from './types'
export { whiteLabelAgencyService } from './whiteLabelAgency'
export { headlessMigrationService } from './headlessMigration'
export { webPerformanceService } from './webPerformance'
export { customWebSevilleService } from './customWebSeville'
export { ragAiAssistantsService } from './ragAiAssistants'

export const allServices: ServiceItem[] = [
  whiteLabelAgencyService,
  headlessMigrationService,
  webPerformanceService,
  customWebSevilleService,
  ragAiAssistantsService,
]

export function getAllServiceSlugs(): string[] {
  return allServices.map((s) => s.slug)
}

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  const normalized = slug.trim().toLowerCase()
  return allServices.find((s) => s.slug.toLowerCase() === normalized)
}

export function getServicesForAudience(audience: 'agencies' | 'pymes'): ServiceItem[] {
  return allServices.filter((s) => s.audience === audience || s.audience === 'both')
}

export function getServiceLocalizedContent(service: ServiceItem, locale: ServiceLocale) {
  return service.content[locale] || service.content.en
}

export function getServicesForProject(projectSlug: string): ServiceItem[] {
  const normalized = projectSlug.trim().toLowerCase()
  return allServices.filter((s) =>
    s.relevantProjectSlugs.some((slug) => slug.toLowerCase() === normalized)
  )
}

const blogToServiceMap: Record<string, string> = {
  'nextjs-vs-headless-wordpress': 'headless-wordpress-nextjs-migration',
  'nextjs-vs-headless-wordpress-custom-php-2026': 'headless-wordpress-nextjs-migration',
  'headless-wordpress-nextjs-16-caching-architecture': 'headless-wordpress-nextjs-migration',
  'sub-second-cwv-bundle-optimization': 'web-performance-core-web-vitals',
  'autonomous-hybrid-rag': 'rag-ai-assistants-business',
  'multimodal-streaming-voice-vision-edge-ai-agents-nextjs-16': 'rag-ai-assistants-business',
  'enterprise-b2b-headless-ecommerce-tiered-pricing-erp-sync-woocommerce-hpos': 'white-label-agency-partner',
  'shopify-liquid-vs-custom-woocommerce': 'white-label-agency-partner',
  'woocommerce-hpos-redis-caching-10k-skus': 'web-performance-core-web-vitals',
  'wasm-wordpress-php-in-browser-zero-server': 'headless-wordpress-nextjs-migration',
  'wcag-22-eaa-2026': 'custom-web-development-seville',
  'fullstack-ai-lab-interactive-edtech-architecture': 'rag-ai-assistants-business',
  'unitrition-headless-healthtech-architecture': 'custom-web-development-seville',
}

export function getServiceForBlogPost(blogSlug: string): ServiceItem | undefined {
  const targetSlug = blogToServiceMap[blogSlug]
  return targetSlug ? getServiceBySlug(targetSlug) : undefined
}
