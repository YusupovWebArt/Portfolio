import React from 'react'

export interface ProjectImage {
  src: string
  caption: string
}

export interface ProjectFeature {
  title: string
  titleUa?: string
  titleEs?: string
  description: string
  descriptionUa?: string
  descriptionEs?: string
}

export type TechnologyItem =
  | string
  | {
      short: string
      full?: string
    }

export interface ProjectTechnologies {
  frontend: TechnologyItem[]
  backend?: TechnologyItem[]
  api?: TechnologyItem[]
  contentManagement: TechnologyItem[]
  devopsSecurity: TechnologyItem[]
  analytics: TechnologyItem[]
  aiTools?: TechnologyItem[]
  seo?: TechnologyItem[]
  technicalOptimization?: TechnologyItem[]
  digitalMarketing?: TechnologyItem[]
}

/** Карточка метрик на странице проекта (сетка 2×2). Заполняется под каждый проект отдельно. */
export interface ProjectDetailMetric {
  value: string
  label: string
  /** Подсветка значения: как в макете (зелёный / тёмно-зелёный / нейтральный). */
  accent?: 'green' | 'darkGreen' | 'neutral'
}

/** Один шаг в строке диаграммы архитектуры (пилюля). */
export interface ProjectArchitectureStep {
  label: string
  /** Центральный узел (напр. Next.js SSR). */
  highlight?: boolean
}

/** Строка потока: подпись слева + цепочка шагов. */
export interface ProjectArchitectureRow {
  rowLabel: string
  steps: ProjectArchitectureStep[]
}

/** Вкладка Architecture: строки потоков + текст снизу. Без данных вкладка не показывается. */
export interface ProjectArchitecture {
  rows: ProjectArchitectureRow[]
  description: string
  descriptionUa?: string
  descriptionEs?: string
}

export interface Project {
  id: number
  title: string
  description: string
  descriptionUa?: string
  descriptionEs?: string
  fullDescription: string
  fullDescriptionUa?: string
  fullDescriptionEs?: string
  /** Строка над заголовком на детальной странице, напр. «FULLSTACK · HEADLESS CMS». */
  detailHeroLine?: string
  /** До четырёх метрик; для Next.js часто PageSpeed / load / Rendering / Auto-deploy, для WordPress - свои пары. */
  detailMetrics?: ProjectDetailMetric[]
  /** Диаграмма архитектуры на вкладке; если не задано - вкладка скрыта. */
  architecture?: ProjectArchitecture
  image: string
  fullScreenshot: string
  images: ProjectImage[]
  technologies: ProjectTechnologies | string[]
  features: (string | React.ReactNode | ProjectFeature)[]
  challenges?: string[]
  challengesUa?: string[]
  challengesEs?: string[]
  solutions?: string[]
  solutionsUa?: string[]
  solutionsEs?: string[]
  liveUrl: string
  githubUrl: string
  category: string[]
  /** Flag for Artur's personal flagship products (e.g. Next.js 16 RAG Platform, Unitrition, React Portfolio). */
  isPersonal?: boolean
  /** Optional slug of a deep-dive engineering article in the Blog (/blog/[slug]). */
  deepDiveBlogSlug?: string
}
