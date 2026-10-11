import { describe, it, expect } from 'vitest'
import * as fs from 'fs'
import * as path from 'path'

describe('Production Deployment & Vercel Configuration Specification (TDD)', () => {
  const rootDir = path.resolve(__dirname, '../../')
  const vercelJsonPath = path.resolve(rootDir, 'vercel.json')
  const packageJsonPath = path.resolve(rootDir, 'package.json')
  const chatRoutePath = path.resolve(rootDir, 'app/api/chat/route.ts')

  it('should verify vercel.json contains framework and strict security headers', () => {
    expect(fs.existsSync(vercelJsonPath)).toBe(true)
    const vercelConfig = JSON.parse(fs.readFileSync(vercelJsonPath, 'utf-8'))

    expect(vercelConfig.framework).toBe('nextjs')
    expect(vercelConfig.buildCommand).toBe('pnpm build:next')
    expect(Array.isArray(vercelConfig.headers)).toBe(true)

    const headerKeys = vercelConfig.headers[0].headers.map(
      (h: { key: string }) => h.key,
    )
    expect(headerKeys).toContain('X-Content-Type-Options')
    expect(headerKeys).toContain('X-Frame-Options')
    expect(headerKeys).toContain('Referrer-Policy')
    expect(headerKeys).toContain('Permissions-Policy')
  })

  it('should verify package.json has Next.js 16 build scripts and AI SDK dependencies', () => {
    const pkg = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'))
    expect(pkg.scripts['build:next']).toBe('next build')
    expect(pkg.dependencies.next).toBe('16.4.0')
    expect(pkg.dependencies.ai).toBe('7.0.137')
    expect(pkg.dependencies['@ai-sdk/openai']).toBeDefined()
    expect(pkg.dependencies['@ai-sdk/react']).toBeDefined()
  })

  it('should verify chat route exists and has dynamic runtime configuration', () => {
    expect(fs.existsSync(chatRoutePath)).toBe(true)
    const content = fs.readFileSync(chatRoutePath, 'utf-8')
    expect(content).toContain("export const dynamic = 'force-dynamic'")
    expect(content).toContain('checkRateLimit')
    expect(content).not.toContain('—')
  })
})
