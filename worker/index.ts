import { POST as handleChatPost } from '../app/api/chat/route'

interface AssetFetcher {
  fetch(request: Request | string): Promise<Response>
}

export interface CloudflareWorkerEnv {
  ASSETS: AssetFetcher
  OPENAI_API_KEY?: string
  RATE_LIMIT_SALT?: string
  UPSTASH_REDIS_REST_URL?: string
  UPSTASH_REDIS_REST_TOKEN?: string
  NEXT_PUBLIC_SITE_URL?: string
}

const API_SECURITY_HEADERS: ReadonlyArray<readonly [string, string]> = [
  ['X-DNS-Prefetch-Control', 'on'],
  ['Strict-Transport-Security', 'max-age=63072000; includeSubDomains'],
  ['X-Content-Type-Options', 'nosniff'],
  ['X-Frame-Options', 'DENY'],
  ['Referrer-Policy', 'strict-origin-when-cross-origin'],
  [
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()',
  ],
  ['Cross-Origin-Opener-Policy', 'same-origin'],
  ['Cache-Control', 'no-store, max-age=0'],
]

function syncEnvToProcess(env: CloudflareWorkerEnv): void {
  const keys: ReadonlyArray<keyof Omit<CloudflareWorkerEnv, 'ASSETS'>> = [
    'OPENAI_API_KEY',
    'RATE_LIMIT_SALT',
    'UPSTASH_REDIS_REST_URL',
    'UPSTASH_REDIS_REST_TOKEN',
    'NEXT_PUBLIC_SITE_URL',
  ]

  for (const key of keys) {
    const val = env[key]
    if (typeof val === 'string' && val.length > 0) {
      process.env[key] = val
    }
  }
}

function withApiHeaders(response: Response): Response {
  const headers = new Headers(response.headers)
  for (const [key, value] of API_SECURITY_HEADERS) {
    if (!headers.has(key)) {
      headers.set(key, value)
    }
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  })
}

const workerHandler = {
  async fetch(request: Request, env: CloudflareWorkerEnv): Promise<Response> {
    const url = new URL(request.url)

    if (url.pathname === '/api/chat') {
      if (request.method !== 'POST') {
        return withApiHeaders(
          new Response(JSON.stringify({ error: 'Method Not Allowed' }), {
            status: 405,
            headers: {
              'Content-Type': 'application/json',
              Allow: 'POST',
            },
          }),
        )
      }

      syncEnvToProcess(env)
      const response = await handleChatPost(request)
      return withApiHeaders(response)
    }

    return env.ASSETS.fetch(request)
  },
}

export default workerHandler
