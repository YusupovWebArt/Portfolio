import { tool } from 'ai'
import { z } from 'zod'
import { getAllProjectEntries } from '../projects'

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
      title: project.title.replace(/—/g, '-'),
      description: project.description.replace(/—/g, '-'),
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
    "Retrieve verified contact channels and direct links for hiring or contracting Artur Yusupov.",
  parameters: z.object({}),
  execute: async () => {
    // Decode contact links at runtime to prevent static scraper leaks and comply with SECURITY.md
    const decode = (b64: string): string => {
      if (typeof atob === 'function') {
        return atob(b64)
      }
      return Buffer.from(b64, 'base64').toString('utf-8')
    }

    return {
      name: 'Artur Yusupov',
      role: 'Fullstack WordPress Developer & Next.js / React Engineer',
      location: 'Spain / Remote Worldwide',
      email: decode('d2ViLnN1bmxpbmVAZ21haWwuY29t'),
      emailUrl: decode('bWFpbHRvOndlYi5zdW5saW5lQGdtYWlsLmNvbQ=='),
      telegram: decode('QGRldmVsb3BfY3JlYXRl'),
      telegramUrl: decode('aHR0cHM6Ly90Lm1lL2RldmVsb3BfY3JlYXRl'),
      whatsappUrl: decode('aHR0cHM6Ly93YS5tZS8zNDY0MjQxMzk2Nw=='),
      githubUrl: 'https://github.com/YusupovWebArt',
      linkedinUrl: 'https://www.linkedin.com/in/artur-yusupov/',
    }
  },
})

export const aiTools = {
  showProjects: showProjectsTool,
  getContactInfo: getContactInfoTool,
}
