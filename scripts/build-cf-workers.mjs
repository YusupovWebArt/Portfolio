import fs from 'node:fs'
import path from 'node:path'
import { execSync } from 'node:child_process'

const ROOT_DIR = process.cwd()
const API_DIR = path.resolve(ROOT_DIR, 'app/api')
const TMP_API_DIR = path.resolve(ROOT_DIR, '.cf-tmp-api')
const PROXY_FILE = path.resolve(ROOT_DIR, 'proxy.ts')
const TMP_PROXY_FILE = path.resolve(ROOT_DIR, '.cf-tmp-proxy.ts')
const OUT_DIR = path.resolve(ROOT_DIR, 'out')

let movedApi = false
let movedProxy = false

function restoreTemporarilyMovedFiles() {
  if (movedApi && fs.existsSync(TMP_API_DIR)) {
    fs.renameSync(TMP_API_DIR, API_DIR)
    movedApi = false
  }
  if (movedProxy && fs.existsSync(TMP_PROXY_FILE)) {
    fs.renameSync(TMP_PROXY_FILE, PROXY_FILE)
    movedProxy = false
  }
}

process.on('SIGINT', () => {
  restoreTemporarilyMovedFiles()
  process.exit(130)
})
process.on('SIGTERM', () => {
  restoreTemporarilyMovedFiles()
  process.exit(143)
})

function verifyExportOutputs() {
  const requiredFiles = [
    'en.html',
    'ua.html',
    'es.html',
    'de.html',
    '404.html',
    'sitemap.xml',
    'robots.txt',
    'feed.xml',
    'llms.txt',
    'llms-full.txt',
    'yusupovartur-indexnow-2026-v1.txt',
    '_headers',
    '_redirects',
  ]

  const missing = requiredFiles.filter((rel) => !fs.existsSync(path.join(OUT_DIR, rel)))
  if (missing.length > 0) {
    throw new Error(`Cloudflare static export missing required files in out/: ${missing.join(', ')}`)
  }

  console.log(`[OK] Verified all ${requiredFiles.length} critical files in out/ for Cloudflare Workers Static Assets`)
}

function main() {
  // Recover cleanly if a previous interrupted build left temp paths behind
  if (fs.existsSync(TMP_API_DIR) && !fs.existsSync(API_DIR)) {
    fs.renameSync(TMP_API_DIR, API_DIR)
  }
  if (fs.existsSync(TMP_PROXY_FILE) && !fs.existsSync(PROXY_FILE)) {
    fs.renameSync(TMP_PROXY_FILE, PROXY_FILE)
  }

  try {
    console.log('Generating prebuilt RAG inverted index for zero-cold-start Worker execution ...')
    execSync('node scripts/generate-rag-index.mjs', {
      cwd: ROOT_DIR,
      stdio: 'inherit',
    })

    if (fs.existsSync(OUT_DIR)) {
      fs.rmSync(OUT_DIR, { recursive: true, force: true })
    }

    // Next.js output:'export' rejects force-dynamic API routes and root proxy middleware;
    // on Cloudflare Workers, /api/chat runs in worker/index.ts and / redirects run via _redirects.
    if (fs.existsSync(API_DIR)) {
      fs.renameSync(API_DIR, TMP_API_DIR)
      movedApi = true
    }
    if (fs.existsSync(PROXY_FILE)) {
      fs.renameSync(PROXY_FILE, TMP_PROXY_FILE)
      movedProxy = true
    }

    console.log('Running Next.js 16 static export (CF_STATIC_EXPORT=1) into ./out ...')
    execSync('pnpm exec next build', {
      cwd: ROOT_DIR,
      stdio: 'inherit',
      env: {
        ...process.env,
        CF_STATIC_EXPORT: '1',
        NODE_ENV: 'production',
      },
    })
  } finally {
    restoreTemporarilyMovedFiles()
  }

  verifyExportOutputs()
}

main()
