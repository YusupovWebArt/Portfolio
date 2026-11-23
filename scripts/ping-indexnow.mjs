import fs from 'node:fs'
import path from 'node:path'

const ROOT_DIR = process.cwd()
const HOST = 'www.yusupovartur.com'
const BASE_URL = `https://${HOST}`
const KEY_FILE_NAME = 'yusupovartur-indexnow-2026-v1.txt'
const KEY_FILE_PATH = path.resolve(ROOT_DIR, 'public', KEY_FILE_NAME)
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/IndexNow'

function readPublicVerificationId() {
  if (!fs.existsSync(KEY_FILE_PATH)) {
    throw new Error(`Missing IndexNow verification file: ${KEY_FILE_PATH}`)
  }
  return fs.readFileSync(KEY_FILE_PATH, 'utf8').trim()
}

async function fetchSitemapUrls() {
  const res = await fetch(`${BASE_URL}/sitemap.xml`, {
    headers: { 'User-Agent': 'YusupovPortfolio-IndexNow/1.0' },
  })
  if (!res.ok) {
    throw new Error(`Failed to fetch sitemap.xml: HTTP ${res.status}`)
  }
  const xml = await res.text()
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1])
}

async function submitBatch(verificationId, urls, dryRun) {
  const payload = {
    host: HOST,
    key: verificationId,
    keyLocation: `${BASE_URL}/${KEY_FILE_NAME}`,
    urlList: urls,
  }

  if (dryRun) {
    console.log(`[DRY-RUN] Would POST ${urls.length} URLs to ${INDEXNOW_ENDPOINT}`)
    console.log(`[DRY-RUN] keyLocation: ${payload.keyLocation}`)
    console.log(`[DRY-RUN] Sample URLs:`, urls.slice(0, 5))
    return
  }

  const res = await fetch(INDEXNOW_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
  })

  if (res.status === 200 || res.status === 202) {
    console.log(`[OK] IndexNow accepted ${urls.length} URLs (HTTP ${res.status})`)
  } else {
    const body = await res.text()
    throw new Error(`IndexNow submission failed (HTTP ${res.status}): ${body}`)
  }
}

async function main() {
  const args = process.argv.slice(2)
  const dryRun = args.includes('--dry-run')
  const submitAll = args.includes('--all')
  const explicitUrls = args.filter((a) => a.startsWith('http://') || a.startsWith('https://'))

  const verificationId = readPublicVerificationId()

  let urls = explicitUrls
  if (submitAll) {
    const sitemapUrls = await fetchSitemapUrls()
    urls = Array.from(new Set([...sitemapUrls, `${BASE_URL}/feed.xml`]))
  } else if (urls.length === 0) {
    // Default quick ping of key hubs when called without args
    urls = [
      `${BASE_URL}/en`,
      `${BASE_URL}/ua`,
      `${BASE_URL}/es`,
      `${BASE_URL}/de`,
      `${BASE_URL}/en/blog`,
      `${BASE_URL}/en/services`,
      `${BASE_URL}/feed.xml`,
    ]
  }

  // IndexNow allows up to 10,000 URLs per batch; chunk at 500 for clean logging
  const chunkSize = 500
  for (let i = 0; i < urls.length; i += chunkSize) {
    const batch = urls.slice(i, i + chunkSize)
    await submitBatch(verificationId, batch, dryRun)
  }
}

main().catch((err) => {
  console.error('[ERROR]', err.message)
  process.exit(1)
})
