import { describe, it, expect } from 'vitest'
import { resolvePreferredLocale } from '../../proxy'

describe('Proxy Routing Accept-Language Negotiation Specification (TDD)', () => {
  it('should default to en when accept-language header is null or empty', () => {
    expect(resolvePreferredLocale(null)).toBe('en')
    expect(resolvePreferredLocale('')).toBe('en')
    expect(resolvePreferredLocale('   ')).toBe('en')
  })

  it('should resolve Spanish for es-ES and es locale headers', () => {
    expect(resolvePreferredLocale('es-ES,es;q=0.9,en;q=0.8')).toBe('es')
    expect(resolvePreferredLocale('es;q=1.0,en;q=0.5')).toBe('es')
  })

  it('should resolve Ukrainian for uk and ua locale headers', () => {
    expect(resolvePreferredLocale('uk-UA,uk;q=0.9,en;q=0.8')).toBe('ua')
    expect(resolvePreferredLocale('ua-UA,ua;q=0.9,en;q=0.8')).toBe('ua')
  })

  it('should respect quality q-weights and prioritize higher weighted language', () => {
    expect(resolvePreferredLocale('es;q=0.4,en;q=0.9,uk;q=0.1')).toBe('en')
    expect(resolvePreferredLocale('en;q=0.7,es;q=0.95')).toBe('es')
    expect(resolvePreferredLocale('en;q=0.6,uk;q=0.85')).toBe('ua')
  })

  it('should resolve German for de-DE and de locale headers', () => {
    expect(resolvePreferredLocale('de-DE,de;q=0.9,en;q=0.8')).toBe('de')
    expect(resolvePreferredLocale('fr-FR,fr;q=0.9,de;q=0.8,ja;q=0.7')).toBe('de')
  })

  it('should fallback to en when no supported languages match', () => {
    expect(resolvePreferredLocale('fr-FR,fr;q=0.9,ja;q=0.7')).toBe('en')
  })
})
