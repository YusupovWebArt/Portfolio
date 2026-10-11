import { describe, it, expect } from 'vitest'
import fs from 'node:fs'
import path from 'node:path'

describe('Next.js 16 Root Layout & Landing Page Specification (TDD)', () => {
  it('should have app/[locale]/layout.tsx with LanguageProvider, ThemeProvider, and ConsentProvider', () => {
    const layoutPath = path.resolve(process.cwd(), 'app/[locale]/layout.tsx')
    expect(fs.existsSync(layoutPath)).toBe(true)

    const content = fs.readFileSync(layoutPath, 'utf8')
    expect(content).toContain('LanguageProvider')
    expect(content).toContain('ThemeProvider')
    expect(content).toContain('ConsentProvider')
    expect(content).toContain('Header')
    expect(content).toContain('Footer')
    expect(content).not.toContain('—')
  })

  it('should have app/[locale]/page.tsx rendering the landing sections', () => {
    const pagePath = path.resolve(process.cwd(), 'app/[locale]/page.tsx')
    expect(fs.existsSync(pagePath)).toBe(true)

    const content = fs.readFileSync(pagePath, 'utf8')
    expect(content).toContain('Hero')
    expect(content).toContain('About')
    expect(content).toContain('AiWorkflow')
    expect(content).toContain('Skills')
    expect(content).toContain('Contact')
    expect(content).not.toContain('—')
  })
})
