import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { revealContact } from '../src/lib/contacts'
import type { ContactKind } from '../src/lib/contacts'

const KINDS: readonly ContactKind[] = ['email', 'phone', 'telegram']
const ROOTS: readonly string[] = ['dist', '.next/server/app']

const needles = KINDS.flatMap((kind) => {
  const { label, href } = revealContact(kind)
  return [label, href, label.replace(/\D/g, '')].filter((n) => n.length >= 6)
})

function* walk(dir: string): Generator<string> {
  if (!existsSync(dir)) return
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
      // Ignore broken symlinks or inaccessible entries
    }
  }
}

let leaks = 0
for (const root of ROOTS) {
  for (const file of walk(root)) {
    if (!file.endsWith('.html')) continue
    const text = readFileSync(file, 'utf8')
    if (/\[at\]/i.test(text)) {
      console.error(`Obfuscation placeholder token found in ${file}`)
      leaks++
    }
    for (const needle of needles) {
      if (text.includes(needle)) {
        console.error(`Plaintext contact credential found in ${file}: ${needle}`)
        leaks++
      }
    }
  }
}

if (leaks === 0) {
  console.log('Verification passed: Zero contact credentials or [at] tokens leaked into static HTML files.')
  process.exit(0)
} else {
  console.error(`Verification failed: ${leaks} leak(s) detected.`)
  process.exit(1)
}
