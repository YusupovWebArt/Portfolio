import { describe, it, expect } from 'vitest'
import { getRelatedProjects, getProjectBySlug, getAllProjectEntries } from '../lib/projects'

describe('Related Projects Relevance Specification (TDD)', () => {
  const allProjects = getAllProjectEntries().map((e) => e.project)

  it('should recommend Next.js / React / Fullstack projects for WPSKILLS, not legacy WordPress clinics', () => {
    const wpskills = getProjectBySlug('wpskills')
    expect(wpskills).toBeDefined()

    const related = getRelatedProjects(wpskills!, allProjects, 3)
    expect(related).toHaveLength(3)

    const slugs = related.map((p) => {
      const entry = getAllProjectEntries().find((e) => e.project.id === p.id)
      return entry?.slug
    })

    // Must recommend high-tech Next.js / React flagships
    expect(slugs).toContain('unitrition')
    expect(slugs).toContain('yusupovartur-nextjs-portfolio')
    expect(slugs).not.toContain('911mg')
    expect(slugs).not.toContain('adwoods-design')
    expect(slugs).not.toContain('alldaymedicalcare')

    // None should be WPSKILLS itself
    expect(slugs).not.toContain('wpskills')
  })

  it('should recommend Next.js / personal flagship projects for Unitrition', () => {
    const unitrition = getProjectBySlug('unitrition')
    expect(unitrition).toBeDefined()

    const related = getRelatedProjects(unitrition!, allProjects, 3)
    expect(related).toHaveLength(3)

    const slugs = related.map((p) => {
      const entry = getAllProjectEntries().find((e) => e.project.id === p.id)
      return entry?.slug
    })

    expect(slugs).toContain('wpskills')
    expect(slugs).toContain('yusupovartur-nextjs-portfolio')
    expect(slugs).not.toContain('911mg')
  })

  it('should recommend AWS cloud infrastructure projects for IT-Magic', () => {
    const itMagic = getProjectBySlug('it-magic')
    expect(itMagic).toBeDefined()

    const related = getRelatedProjects(itMagic!, allProjects, 3)
    expect(related).toHaveLength(3)

    const slugs = related.map((p) => {
      const entry = getAllProjectEntries().find((e) => e.project.id === p.id)
      return entry?.slug
    })

    const hasAwsProject = slugs.some((s) => s?.includes('aws') || s?.includes('cloud'))
    expect(hasAwsProject).toBe(true)
    expect(slugs).not.toContain('it-magic')
  })

  it('should recommend Shopify projects for Kidzely', () => {
    const kidzely = getProjectBySlug('kidzely')
    expect(kidzely).toBeDefined()

    const related = getRelatedProjects(kidzely!, allProjects, 3)
    expect(related).toHaveLength(3)

    expect(related.every((p) => p.category.includes('shopify'))).toBe(true)
    expect(related.some((p) => p.id === kidzely!.id)).toBe(false)
  })
})
