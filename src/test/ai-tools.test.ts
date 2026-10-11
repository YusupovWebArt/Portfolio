import { describe, it, expect } from 'vitest'
import { showProjectsTool, getContactInfoTool, aiTools } from '../lib/ai/tools'

describe('AI Agent Tools Specification (TDD)', () => {
  it('should define showProjects and getContactInfo tools in aiTools object', () => {
    expect(aiTools).toBeDefined()
    expect(aiTools.showProjects).toBeDefined()
    expect(aiTools.getContactInfo).toBeDefined()
  })

  it('should execute showProjects tool filtering by category or technology', async () => {
    const wpResult = await (showProjectsTool as any).execute({
      category: 'Wordpress',
      limit: 2,
    })

    expect(wpResult).toBeDefined()
    expect(Array.isArray(wpResult.projects)).toBe(true)
    expect(wpResult.projects.length).toBeLessThanOrEqual(2)
    expect(wpResult.projects[0].slug).toBeDefined()
    expect(wpResult.projects[0].title).toBeDefined()
    expect(JSON.stringify(wpResult)).not.toContain('—')

    const nextResult = await (showProjectsTool as any).execute({
      technology: 'Next.js',
      limit: 1,
    })

    expect(nextResult.projects.length).toBeGreaterThan(0)
    expect(nextResult.projects[0].slug).toBe('unitrition')
  })

  it('should execute getContactInfo tool returning obfuscated contact channels', async () => {
    const contactResult = await (getContactInfoTool as any).execute({})

    expect(contactResult).toBeDefined()
    expect(contactResult.telegramUrl).toContain('t.me')
    expect(contactResult.githubUrl).toContain('github.com')
    expect(contactResult.linkedinUrl).toContain('linkedin.com')
    expect(JSON.stringify(contactResult)).not.toContain('—')
  })
})
