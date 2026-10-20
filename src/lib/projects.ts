import type { Project } from '../components/projects/project-types'
import { projectRegistry, type ProjectRegistryItem } from './projectRegistry'

export type ProjectEntry = ProjectRegistryItem

export function getAllProjectEntries(): ProjectEntry[] {
  return [...projectRegistry].sort((a, b) => b.project.id - a.project.id)
}

export function getProjectBySlug(slug: string): Project | undefined {
  const normalized = slug.trim().toLowerCase()
  const entry = projectRegistry.find((e) => e.slug === normalized)
  return entry?.project
}

export function getProjectById(id: number): Project | undefined {
  const entry = projectRegistry.find((e) => e.project.id === id)
  return entry?.project
}

export function getProjectSlugById(id: number): string | undefined {
  const entry = projectRegistry.find((e) => e.project.id === id)
  return entry?.slug
}
