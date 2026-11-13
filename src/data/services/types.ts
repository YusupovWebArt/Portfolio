export type ServiceLocale = 'en' | 'ua' | 'es' | 'de'

export interface ServiceMetric {
  value: string
  label: string
}

export interface ServiceProblem {
  title: string
  desc: string
}

export interface ServiceDeliverable {
  title: string
  items: string[]
}

export interface ServiceWorkflowStep {
  step: string
  title: string
  desc: string
}

export interface ServiceFaq {
  q: string
  a: string
}

export interface ServiceLocalizedContent {
  badge: string
  title: string
  shortDesc: string
  heroLead: string
  metrics: ServiceMetric[]
  problemsSolved: ServiceProblem[]
  deliverables: ServiceDeliverable[]
  workflowSteps: ServiceWorkflowStep[]
  faqs: ServiceFaq[]
  ctaHeadline: string
  ctaLead: string
  whatsappMessage: string
  schemaDescription: string
}

export interface ServiceItem {
  slug: string
  audience: 'agencies' | 'pymes' | 'both'
  iconName: 'LuLock' | 'LuCodeXml' | 'LuZap' | 'LuPanelsTopLeft' | 'LuBot'
  relevantProjectSlugs: string[]
  content: Record<ServiceLocale, ServiceLocalizedContent>
}
