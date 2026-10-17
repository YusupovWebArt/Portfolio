import https from 'node:https'
import http from 'node:http'

const targetUrl = process.argv[2] || 'https://yusupovartur.com'

console.log(`\n======================================================`)
console.log(`Live Pre-Release Deployment Verification`)
console.log(`Target: ${targetUrl}`)
console.log(`======================================================\n`)

const client = targetUrl.startsWith('https:') ? https : http

const req = client.request(
  targetUrl,
  {
    method: 'HEAD',
    headers: {
      'User-Agent': 'PreRelease-Verifier/1.0',
    },
  },
  (res) => {
    console.log(`HTTP Status: ${res.statusCode} ${res.statusMessage}`)
    console.log('\n--- Received Security Headers ---')

    const headers = res.headers
    const requiredHeaders = [
      'content-security-policy',
      'strict-transport-security',
      'x-content-type-options',
      'x-frame-options',
      'referrer-policy',
      'permissions-policy',
      'cross-origin-opener-policy',
    ]

    let missing = 0
    for (const h of requiredHeaders) {
      if (headers[h]) {
        console.log(`[PASS] ${h}: ${headers[h].substring(0, 80)}${headers[h].length > 80 ? '...' : ''}`)
      } else {
        console.log(`[FAIL] ${h}: MISSING`)
        missing++
      }
    }

    console.log('\n--- Information Disclosure Check ---')
    if (headers['x-powered-by']) {
      console.log(`[WARN] x-powered-by exposed: ${headers['x-powered-by']}`)
    } else {
      console.log('[PASS] x-powered-by: hidden (clean)')
    }

    console.log('\n======================================================')
    if (missing === 0) {
      console.log('All mandatory security headers are present!')
    } else {
      console.log(`Warning: ${missing} mandatory header(s) missing or redirected.`)
    }
    console.log('======================================================\n')
  }
)

req.on('error', (err) => {
  console.error(`Connection error to ${targetUrl}:`, err.message)
  console.log('\nTip: When testing locally, run "pnpm start:next" or specify your active Vercel domain.')
})

req.end()
