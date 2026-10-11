import { Project } from '../components/projects/project-types'

const projectModules = import.meta.glob<{ default: Project }>(
  '../components/projects/*/*.tsx',
  { eager: true },
)

export interface ProjectEntry {
  slug: string
  project: Project
}

export function getAllProjectEntries(): ProjectEntry[] {
  const entries: ProjectEntry[] = []
  for (const [path, mod] of Object.entries(projectModules)) {
    const project = mod.default
    if (!project || !project.title) continue
    const rawFileName = path.split('/').pop() || ''
    const slug = rawFileName.replace(/\.tsx$/, '').trim().toLowerCase()
    entries.push({ slug, project })
  }
  return entries.sort((a, b) => b.project.id - a.project.id)
}

export function getProjectBySlug(slug: string): Project | undefined {
  const normalized = slug.trim().toLowerCase()
  const entry = getAllProjectEntries().find((e) => e.slug === normalized)
  return entry?.project
}
