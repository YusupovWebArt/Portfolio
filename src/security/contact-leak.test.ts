import { execFileSync } from 'node:child_process'
import { readFileSync, existsSync } from 'node:fs'
import { describe, it, expect } from 'vitest'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { render } from '@testing-library/react'
import { revealContact } from '../lib/contacts'
import type { ContactKind } from '../lib/contacts'
import Contact from '../components/Contact'
import { Providers } from '../components/Providers'

const KINDS: readonly ContactKind[] = ['email', 'phone', 'telegram']
const BINARY = /\.(png|jpe?g|webp|avif|ico|woff2?|pdf|svg|zip)$/i
const SKIP = new Set(['src/lib/contacts.ts', 'pnpm-lock.yaml'])

describe('Contact Anti-Scrape Leak Verification (TDD)', () => {
  it('scans git ls-files, including docs and specs, for any plaintext contacts (N6)', () => {
    const needles = KINDS.flatMap((kind) => {
      const { label, href } = revealContact(kind)
      return [label, href.replace(/^mailto:/, ''), label.replace(/\D/g, '')].filter(
        (n) => n.length >= 6,
      )
    })
    const files = execFileSync('git', ['ls-files'], { encoding: 'utf8' })
      .split(/\r?\n/)
      .filter((f) => f && !BINARY.test(f) && !SKIP.has(f) && existsSync(f))
    expect(files.length).toBeGreaterThan(50)
    const hits = files.filter((f) =>
      needles.some((n) => readFileSync(f, 'utf8').includes(n)),
    )
    expect(hits).toEqual([])
  }, 30000)

  it('should ensure zero contact credentials or [at] tokens exist in static index.html', () => {
    if (!existsSync('index.html')) return
    const text = readFileSync('index.html', 'utf8')
    const needles = KINDS.flatMap((kind) => {
      const { label, href } = revealContact(kind)
      return [label, href, label.replace(/\D/g, '')].filter((n) => n.length >= 6)
    })

    const leaks: string[] = []
    if (/\[at\]/i.test(text)) {
      leaks.push('Obfuscation placeholder [at] token found in index.html')
    }
    for (const needle of needles) {
      if (text.includes(needle)) {
        leaks.push(`Plaintext contact credential found in index.html: ${needle}`)
      }
    }

    expect(leaks).toEqual([])
  })

  it('should ensure Contact component renders zero credentials, [at] tokens, mailto, wa.me, or t.me before user interaction (DOM & SSR renderToString)', () => {
    const needles = KINDS.flatMap((kind) => {
      const { label, href } = revealContact(kind)
      return [label, href.replace(/^mailto:/, ''), label.replace(/\D/g, '')].filter(
        (n) => n.length >= 6,
      )
    })

    const element = React.createElement(
      Providers,
      { initialLang: 'en' },
      React.createElement(Contact),
    )

    const ssrHtml = renderToString(element)
    const { container } = render(element)
    const renderedHtml = container.innerHTML

    for (const html of [ssrHtml, renderedHtml]) {
      expect(html).not.toMatch(/\[at\]/i)
      expect(html).not.toContain('mailto:')
      expect(html).not.toContain('wa.me')
      expect(html).not.toContain('t.me')
      for (const needle of needles) {
        expect(html).not.toContain(needle)
      }
    }
  })

  it('should ensure contacts chunk is never referenced or preloaded in dist/index.html (F1)', () => {
    const distHtml = 'dist/index.html'
    if (!existsSync(distHtml)) return
    const text = readFileSync(distHtml, 'utf8')
    expect(text).not.toMatch(/contacts(?:-[\w-]+)?\.js/)
  })
})

