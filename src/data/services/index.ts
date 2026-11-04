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
