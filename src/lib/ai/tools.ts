import { tool } from 'ai'
import { z } from 'zod'
import { getAllProjectEntries } from '../projects'
import { PUBLIC_PROFILES } from '../profiles'

export interface ProjectToolOutput {
  slug: string
  title: string
  description: string
  image: string
  category: string
  liveUrl?: string
  githubUrl?: string
}

export const showProjectsTool = tool({
  description:
    "Showcase relevant project case studies from Artur's portfolio matching a technology, category, or keyword.",
  parameters: z.object({
    category: z
      .string()
      .optional()
      .describe(
        "Filter by category name (e.g. Wordpress, Next.js, React, Shopify, Wix, Static, Javascript, Other-CMS)",
      ),
    technology: z
      .string()
      .optional()
      .describe(
        "Filter by technology name (e.g. Next.js, React, WordPress, PHP, AWS, Tailwind, TypeScript)",
      ),
    limit: z
      .number()
      .optional()
      .describe("Maximum number of projects to return (1-6, default 3)"),
  }),
  execute: async ({ category, technology, limit = 3 }) => {
    const allEntries = getAllProjectEntries()
    let filtered = allEntries

    if (category) {
      const catLower = category.toLowerCase()
      filtered = filtered.filter((entry) =>
        entry.project.category?.some((c) => c.toLowerCase().includes(catLower)),
      )
    }

    if (technology) {
      const techLower = technology.toLowerCase()
      filtered = filtered.filter((entry) => {
        const p = entry.project
        if (!p.technologies) return false
        const allTechs = [
          ...(p.technologies.frontend || []),
          ...(p.technologies.backend || []),
          ...(p.technologies.contentManagement || []),
          ...(p.technologies.devopsSecurity || []),
        ]
        return allTechs.some((t) => {
          const name = typeof t === 'string' ? t : t.short
          return name.toLowerCase().includes(techLower)
        })
      })
    }

    const maxResults = Math.min(Math.max(limit, 1), 6)
    const selected = (filtered.length > 0 ? filtered : allEntries).slice(
      0,
      maxResults,
    )

    const projects: ProjectToolOutput[] = selected.map(({ slug, project }) => ({
      slug,
      title: project.title.replace(/[\u2013\u2014]/g, '-'),
      description: project.description.replace(/[\u2013\u2014]/g, '-'),
      image: project.image,
      category: project.category?.[0] || 'WebDevelopment',
      liveUrl: project.liveUrl,
      githubUrl: project.githubUrl,
    }))

    return {
      count: projects.length,
      projects,
    }
  },
})

export const getContactInfoTool = tool({
  description:
    "Retrieve verified public profiles and messaging channels for contacting Artur Yusupov.",
  parameters: z.object({}),
  execute: async () => {
    return {
      name: PUBLIC_PROFILES.name,
      role: PUBLIC_PROFILES.role,
      location: PUBLIC_PROFILES.location,
      githubUrl: PUBLIC_PROFILES.githubUrl,
      linkedinUrl: PUBLIC_PROFILES.linkedinUrl,
      telegramUrl: 'https://t.me/develop_create',
      contactNote:
        'Direct email and WhatsApp channels can be revealed on-demand in the Contact section of this website.',
    }
  },
})

export const aiTools = {
  showProjects: showProjectsTool,
  getContactInfo: getContactInfoTool,
}
