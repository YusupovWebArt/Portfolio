import { readFileSync } from 'node:fs'
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

  it('index.html meta CSP forbids unsafe-eval and plugins', () => {
    const html = readFileSync('index.html', 'utf8')
    const csp = html.match(/http-equiv="Content-Security-Policy"\s+content="([^"]+)"/)?.[1] ?? ''

    expect(csp).toContain("object-src 'none'")
    expect(csp).toContain("base-uri 'self'")
    expect(csp).toContain("form-action 'self'")
    expect(csp).not.toMatch(/unsafe-eval/)
  })
})
