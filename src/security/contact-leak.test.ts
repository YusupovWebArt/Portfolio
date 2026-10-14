import { readFileSync, existsSync } from 'node:fs'
import { describe, it, expect } from 'vitest'
import React from 'react'
import { render } from '@testing-library/react'
import { revealContact } from '../lib/contacts'
import type { ContactKind } from '../lib/contacts'
import Contact from '../components/Contact'
import { Providers } from '../components/Providers'

const KINDS: readonly ContactKind[] = ['email', 'phone', 'telegram']

describe('Contact Anti-Scrape Leak Verification (TDD)', () => {
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

  it('should ensure Contact component renders zero credentials, [at] tokens, mailto, wa.me, or t.me before user interaction', () => {
    const needles = KINDS.flatMap((kind) => {
      const { label, href } = revealContact(kind)
      return [label, href, label.replace(/\D/g, '')].filter((n) => n.length >= 6)
    })

    const { container } = render(
      React.createElement(Providers, { initialLang: 'en' }, React.createElement(Contact)),
    )

    const renderedHtml = container.innerHTML

    expect(renderedHtml).not.toMatch(/\[at\]/i)
    expect(renderedHtml).not.toContain('mailto:')
    expect(renderedHtml).not.toContain('wa.me')
    expect(renderedHtml).not.toContain('t.me')

    for (const needle of needles) {
      expect(renderedHtml).not.toContain(needle)
    }
  })
})
