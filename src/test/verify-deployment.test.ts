import { describe, it, expect } from 'vitest'
import * as fs from 'fs'
import * as path from 'path'
import nextConfig from '../../next.config'

describe('Production Deployment & Vercel Configuration Specification (TDD)', () => {
  const rootDir = path.resolve(__dirname, '../../')
  const vercelJsonPath = path.resolve(rootDir, 'vercel.json')
  const packageJsonPath = path.resolve(rootDir, 'package.json')
  const chatRoutePath = path.resolve(rootDir, 'app/api/chat/route.ts')

  it('should verify vercel.json contains framework and clean config delegating headers to next.config.ts', async () => {
    expect(fs.existsSync(vercelJsonPath)).toBe(true)
    const vercelConfig = JSON.parse(fs.readFileSync(vercelJsonPath, 'utf-8'))

    expect(vercelConfig.framework).toBe('nextjs')
    expect(vercelConfig.buildCommand).toBe('pnpm build:next')
    // Headers must not be duplicated in vercel.json; next.config.ts is the single source of truth
    expect(vercelConfig.headers).toBeUndefined()

    const headers = (await nextConfig.headers?.()) ?? []
    const rootHeaders = headers.find((h) => h.source === '/:path*')?.headers ?? []
    const headerKeys = rootHeaders.map((h) => h.key)

    expect(headerKeys).toContain('X-Content-Type-Options')
    expect(headerKeys).toContain('X-Frame-Options')
    expect(headerKeys).toContain('Referrer-Policy')
    expect(headerKeys).toContain('Permissions-Policy')
    expect(headerKeys).toContain('Content-Security-Policy')
  })

  it('should verify package.json has Next.js 16 build scripts and AI SDK dependencies', () => {
    const pkg = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'))
    expect(pkg.scripts['build:next']).toBe('next build')
    expect(pkg.dependencies.next).toBe('16.4.2')
    expect(pkg.dependencies.ai).toBe('7.0.148')
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
