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

export interface Project {
  id: number
  title: string
  description: string
  fullDescription: string
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
