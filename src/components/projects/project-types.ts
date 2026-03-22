import React from 'react'

export interface ProjectImage {
  src: string
  caption: string
}

export interface ProjectFeature {
  title: string
  description: string
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
}

export interface Project {
  id: number
  title: string
  description: string
  fullDescription: string
  /** Строка над заголовком на детальной странице, напр. «FULLSTACK · HEADLESS CMS». */
  detailHeroLine?: string
  /** До четырёх метрик; для Next.js часто PageSpeed / load / Rendering / Auto-deploy, для WordPress — свои пары. */
  detailMetrics?: ProjectDetailMetric[]
  /** Диаграмма архитектуры на вкладке; если не задано — вкладка скрыта. */
  architecture?: ProjectArchitecture
  image: string
  fullScreenshot: string
  images: ProjectImage[]
  technologies: ProjectTechnologies | string[]
  features: (string | React.ReactNode | ProjectFeature)[]
  challenges: string[]
  solutions: string[]
  liveUrl: string
  githubUrl: string
  category: string[]
}
