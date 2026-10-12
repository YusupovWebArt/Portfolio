'use client'

import React from 'react'
import ProjectDetail from './ProjectDetail'
import type { Project } from './projects/project-types'

interface ProjectDetailViewProps {
  project: Project
  slug: string
  locale: string
}

/**
 * Standalone Next.js Project Detail View.
 * Delegates directly to the rich ProjectDetail component to render:
 * - Interactive screenshot gallery with zoom and full-page layout modal
 * - Metric badges (detailMetrics)
 * - Architecture diagram and flow specifications (architecture)
 * - Categorized tech stack and key feature bullet points
 * - Integrated AI Chat context trigger
 */
export default function ProjectDetailView({
  project,
  slug,
}: ProjectDetailViewProps) {
  return <ProjectDetail initialProject={project} slug={slug} projectId={project.id} />
}
