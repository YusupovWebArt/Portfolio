import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'
import { revealContact, type ContactKind } from '../lib/contacts'

const KINDS: readonly ContactKind[] = ['email', 'phone', 'telegram']

function* sources(dir: string): Generator<string> {
  if (!existsSync(dir)) return
  for (const name of readdirSync(dir)) {
    const path = join(dir, name)
    if (statSync(path).isDirectory()) {
      yield* sources(path)
    } else if (
      /\.(ts|tsx|md|json|html|txt)$/.test(name) &&
      name !== 'contacts.ts' &&
      !path.includes('node_modules') &&
      !path.includes('dist')
    ) {
      yield path
    }
  }
}

describe('Security & Privacy: Dynamic Contact Obfuscation Specification', () => {
  it('scans src, app, public and index.html using values dynamically decoded at test time', () => {
    const needles = KINDS.flatMap((kind) => {
      const { label, href } = revealContact(kind)
      return [label, href, label.replace(/\D/g, '')].filter((n) => n.length >= 6)
    })
    const files = [...['src', 'app', 'public'].flatMap((r) => [...sources(r)]), 'index.html']
    expect(files.length).toBeGreaterThan(1)
    const hits = files.filter(
      (file) => existsSync(file) && needles.some((n) => readFileSync(file, 'utf8').includes(n)),
    )
    expect(hits).toEqual([])
  })

  it('should ensure index.html contains zero [at] token placeholders', () => {
    expect(existsSync('index.html')).toBe(true)
    const htmlContent = readFileSync('index.html', 'utf-8')
    expect(htmlContent).not.toMatch(/\[at\]/i)
  })

  it('should not decode contact credentials automatically via timer in Contact.tsx', () => {
    const contactTsxPath = join('src', 'components', 'Contact.tsx')
    expect(existsSync(contactTsxPath)).toBe(true)
    const content = readFileSync(contactTsxPath, 'utf-8')
    expect(content).not.toMatch(/setTimeout\(.*400\)/)
    expect(content).not.toMatch(/\[at\]/i)
    expect(content).toContain('revealContact')
  })
})
