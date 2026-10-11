import { describe, it, expect } from 'vitest'
import fs from 'node:fs'
import path from 'node:path'

describe('Next.js 16 Configuration & Package Specification (TDD)', () => {
  it('should have next.config.ts configured with security headers and reactStrictMode', async () => {
    const configPath = path.resolve(process.cwd(), 'next.config.ts')
    expect(fs.existsSync(configPath)).toBe(true)

    const content = fs.readFileSync(configPath, 'utf8')
    expect(content).toContain('reactStrictMode: true')
    expect(content).toContain('Content-Security-Policy')
    expect(content).toContain('X-Content-Type-Options')
    expect(content).not.toContain('—')
  })

  it('should have next and AI SDK packages declared in package.json', () => {
    const pkgPath = path.resolve(process.cwd(), 'package.json')
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'))

    expect(pkg.dependencies.next).toBeDefined()
    expect(pkg.dependencies.ai).toBeDefined()
    expect(pkg.dependencies['@ai-sdk/openai']).toBeDefined()
    expect(pkg.dependencies.zod).toBeDefined()
  })
})
