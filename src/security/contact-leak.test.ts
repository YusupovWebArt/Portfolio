import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { describe, it, expect } from 'vitest'
import { revealContact } from '../lib/contacts'
import type { ContactKind } from '../lib/contacts'

const KINDS: readonly ContactKind[] = ['email', 'phone', 'telegram']
const ROOTS: readonly string[] = ['dist', 'index.html']

function* walk(dir: string): Generator<string> {
  if (!existsSync(dir)) return
  if (statSync(dir).isFile()) {
    yield dir
    return
  }
  let entries: string[]
  try {
    entries = readdirSync(dir)
  } catch {
    return
  }
  for (const name of entries) {
    const path = join(dir, name)
    try {
      if (statSync(path).isDirectory()) {
        yield* walk(path)
      } else {
        yield path
      }
    } catch {
      // Ignore broken entries
    }
  }
}

describe('Contact Anti-Scrape Leak Verification (TDD)', () => {
  it('should ensure zero contact credentials or [at] tokens leak into static HTML files', () => {
    const needles = KINDS.flatMap((kind) => {
      const { label, href } = revealContact(kind)
      return [label, href, label.replace(/\D/g, '')].filter((n) => n.length >= 6)
    })

    const leaks: string[] = []

    for (const root of ROOTS) {
      for (const file of walk(root)) {
        if (!file.endsWith('.html')) continue
        const text = readFileSync(file, 'utf8')
        if (/\[at\]/i.test(text)) {
          leaks.push(`Obfuscation placeholder [at] token found in ${file}`)
        }
        for (const needle of needles) {
          if (text.includes(needle)) {
            leaks.push(`Plaintext contact credential found in ${file}: ${needle}`)
          }
        }
      }
    }

    expect(leaks).toEqual([])
  })
})
