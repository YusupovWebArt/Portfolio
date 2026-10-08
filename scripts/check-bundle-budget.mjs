import fs from 'fs'
import path from 'path'
import zlib from 'zlib'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.resolve(__dirname, '../dist')
const htmlPath = path.join(distDir, 'index.html')

if (!fs.existsSync(htmlPath)) {
  console.error('Error: dist/index.html not found. Run "pnpm build" before checking bundle budget.')
  process.exit(1)
}

const html = fs.readFileSync(htmlPath, 'utf8')

// Parse all initial module scripts and modulepreloads from index.html
const assetMatches = [
  ...html.matchAll(/<script[^>]+src="(?:\/Portfolio)?\/assets\/([^">]+\.js)"/g),
  ...html.matchAll(/<link[^>]+rel="modulepreload"[^>]+href="(?:\/Portfolio)?\/assets\/([^">]+\.js)"/g),
]

const initialJsFiles = [...new Set(assetMatches.map((m) => m[1]))]

console.log('--- Initial Eager JavaScript Chunks (Boot Path) ---')
let totalRaw = 0
let totalGzip = 0
let hasProjectsDataInBoot = false
let mainEntryRaw = 0
let mainEntryGzip = 0

for (const file of initialJsFiles) {
  const filePath = path.join(distDir, 'assets', file)
  if (!fs.existsSync(filePath)) {
    console.warn(`Warning: Asset file not found on disk: ${file}`)
    continue
  }
  const content = fs.readFileSync(filePath)
  const rawSize = content.length
  const gzSize = zlib.gzipSync(content).length

  totalRaw += rawSize
  totalGzip += gzSize

  if (file.includes('projects-data')) {
    hasProjectsDataInBoot = true
  }

  if (file.startsWith('index-')) {
    mainEntryRaw = rawSize
    mainEntryGzip = gzSize
  }

  const rawKb = (rawSize / 1024).toFixed(2)
  const gzKb = (gzSize / 1024).toFixed(2)
  console.log(`- ${file}: ${rawKb} KB raw | ${gzKb} KB gz`)
}

const totalRawKb = (totalRaw / 1024).toFixed(2)
const totalGzipKb = (totalGzip / 1024).toFixed(2)
const mainRawKb = (mainEntryRaw / 1024).toFixed(2)
const mainGzipKb = (mainEntryGzip / 1024).toFixed(2)

console.log('----------------------------------------------------')
console.log(`Total Initial JS: ${totalRawKb} KB raw | ${totalGzipKb} KB gzip`)
console.log(`Main Entry JS:    ${mainRawKb} KB raw | ${mainGzipKb} KB gzip`)
console.log('----------------------------------------------------')

const failures = []

// Check 1: projects-data must NOT be loaded on boot
if (hasProjectsDataInBoot) {
  failures.push(
    'Violation: projects-data chunk is eagerly preloaded in index.html boot path. Must be deferred/code-split.'
  )
}

// Check 2: Total initial JS budget (< 450 KB raw, < 130 KB gzip)
const MAX_TOTAL_RAW = 450 * 1024
const MAX_TOTAL_GZIP = 130 * 1024
if (totalRaw > MAX_TOTAL_RAW) {
  failures.push(
    `Violation: Total initial JS raw size (${totalRawKb} KB) exceeds budget of 450.00 KB.`
  )
}
if (totalGzip > MAX_TOTAL_GZIP) {
  failures.push(
    `Violation: Total initial JS gzip size (${totalGzipKb} KB) exceeds budget of 130.00 KB.`
  )
}

// Check 3: Main entry JS budget (< 200 KB raw, < 65 KB gzip)
const MAX_MAIN_RAW = 200 * 1024
const MAX_MAIN_GZIP = 65 * 1024
if (mainEntryRaw > MAX_MAIN_RAW) {
  failures.push(
    `Violation: Main entry chunk raw size (${mainRawKb} KB) exceeds budget of 200.00 KB.`
  )
}
if (mainEntryGzip > MAX_MAIN_GZIP) {
  failures.push(
    `Violation: Main entry chunk gzip size (${mainGzipKb} KB) exceeds budget of 65.00 KB.`
  )
}

if (failures.length > 0) {
  console.error('\n❌ BUNDLE BUDGET CHECKS FAILED:')
  for (const f of failures) {
    console.error(`  - ${f}`)
  }
  process.exit(1)
}

console.log('\n✅ ALL BUNDLE BUDGET CHECKS PASSED!')
process.exit(0)
