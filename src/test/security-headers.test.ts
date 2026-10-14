import { readFileSync, existsSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import nextConfig from '../../next.config'

describe('DevSecOps Security Headers Specification (TDD)', () => {
  it('Next ships the required security headers on every route', async () => {
    const rules = (await nextConfig.headers?.()) ?? []
    const all = rules.find((r) => r.source === '/:path*')?.headers ?? []
    const get = (key: string): string => all.find((h) => h.key === key)?.value ?? ''

    expect(get('Content-Security-Policy')).toContain("object-src 'none'")
    expect(get('Content-Security-Policy')).toContain("frame-ancestors 'none'")
    expect(get('Referrer-Policy')).toBe('strict-origin-when-cross-origin')
    expect(get('Permissions-Policy')).toMatch(/camera=\(\).*microphone=\(\).*geolocation=\(\)/)
    expect(get('X-Content-Type-Options')).toBe('nosniff')
    expect(get('X-Frame-Options')).toBe('DENY')
  })

  it('built SPA index.html or vite config enforces strict CSP without unsafe-eval', () => {
    const targetFile = existsSync('dist/index.html') ? 'dist/index.html' : 'vite.config.ts'
    const rawContent = readFileSync(targetFile, 'utf8')
    const content = rawContent.replace(/&#39;/g, "'").replace(/&quot;/g, '"')

    expect(content).toContain("object-src 'none'")
    expect(content).toContain("base-uri 'self'")
    expect(content).toContain("form-action 'self'")
    expect(content).not.toMatch(/unsafe-eval/)
  })
})
