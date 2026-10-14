import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const OBFUSCATED_CONTACTS = {
  email: 'd2ViLnN1bmxpbmVAZ21haWwuY29t',
  emailMailto: 'bWFpbHRvOndlYi5zdW5saW5lQGdtYWlsLmNvbQ==',
  phone: 'KzM0NjQyNDEzOTY3',
  whatsappUrl: 'aHR0cHM6Ly93YS5tZS8zNDY0MjQxMzk2Nw==',
  telegram: 'QGRldmVsb3BfY3JlYXRl',
  telegramUrl: 'aHR0cHM6Ly90Lm1lL2RldmVsb3BfY3JlYXRl',
} as const

function decodeContact(b64: string): string {
  return Buffer.from(b64, 'base64').toString('utf-8')
}

const needles: string[] = Object.values(OBFUSCATED_CONTACTS).flatMap((b64) => {
  const decoded = decodeContact(b64)
  const digits = decoded.replace(/\D/g, '')
  return [decoded, digits].filter((n) => n.length >= 6)
})

const ROOTS: readonly string[] = ['dist', '.next/server/app']

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
      // Ignore broken entries
    }
  }
}

let leaks = 0
let scanned = 0
for (const root of ROOTS) {
  for (const file of walk(root)) {
    if (!file.endsWith('.html')) continue
    scanned++
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

if (scanned === 0) {
  console.error('Verification failed: zero HTML files scanned. Ensure this script runs after build.')
  process.exit(1)
}

if (leaks === 0) {
  console.log(`Verification passed: Zero contact credentials or [at] tokens leaked across ${scanned} static HTML file(s).`)
  process.exit(0)
} else {
  console.error(`Verification failed: ${leaks} leak(s) detected across ${scanned} scanned HTML file(s).`)
  process.exit(1)
}
