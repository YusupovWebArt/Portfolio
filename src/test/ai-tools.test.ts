import { describe, it, expect } from 'vitest'
import { showProjectsTool, getContactInfoTool, aiTools } from '../lib/ai/tools'

interface ExecutableTool<TArgs, TResult> {
  execute: (args: TArgs) => Promise<TResult>
}

interface ShowProjectsResult {
  count: number
  projects: Array<{
    slug: string
    title: string
  }>
}

interface ContactInfoResult {
  telegramUrl: string
  githubUrl: string
  linkedinUrl: string
}

describe('AI Agent Tools Specification (TDD)', () => {
  it('should define showProjects and getContactInfo tools in aiTools object', () => {
    expect(aiTools).toBeDefined()
    expect(aiTools.showProjects).toBeDefined()
    expect(aiTools.getContactInfo).toBeDefined()
  })

  it('should execute showProjects tool filtering by category or technology', async () => {
    const showTool = showProjectsTool as unknown as ExecutableTool<
      { category?: string; technology?: string; limit?: number },
      ShowProjectsResult
    >

    const wpResult = await showTool.execute({
      category: 'Wordpress',
      limit: 2,
    })

    expect(wpResult).toBeDefined()
    expect(Array.isArray(wpResult.projects)).toBe(true)
    expect(wpResult.projects.length).toBeLessThanOrEqual(2)
    expect(wpResult.projects[0].slug).toBeDefined()
    expect(wpResult.projects[0].title).toBeDefined()
    expect(JSON.stringify(wpResult)).not.toContain('—')

    const nextResult = await showTool.execute({
      technology: 'Next.js',
      limit: 2,
    })

    expect(nextResult.projects.length).toBeGreaterThan(0)
    const slugs = nextResult.projects.map((p) => p.slug)
    expect(slugs).toContain('unitrition')
  })

  it('should execute getContactInfo tool returning obfuscated contact channels', async () => {
    const contactTool = getContactInfoTool as unknown as ExecutableTool<
      Record<string, never>,
      ContactInfoResult
    >

    const contactResult = await contactTool.execute({})

    expect(contactResult).toBeDefined()
    expect(contactResult.telegramUrl).toContain('t.me')
    expect(contactResult.githubUrl).toContain('github.com')
    expect(contactResult.linkedinUrl).toContain('linkedin.com')
    expect(JSON.stringify(contactResult)).not.toContain('—')
  })
})
