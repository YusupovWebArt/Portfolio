import { describe, it, expect, vi, beforeEach } from 'vitest'
import fs from 'node:fs'
import path from 'node:path'
import workerHandler, { type CloudflareWorkerEnv } from '../../worker/index'

describe('Cloudflare Workers + Static Assets Migration Specification (TDD)', () => {
  const rootDir = process.cwd()

  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it('should configure wrangler.jsonc for Workers Static Assets with drop-trailing-slash and /api/* worker routing', () => {
    const wranglerPath = path.resolve(rootDir, 'wrangler.jsonc')
    expect(fs.existsSync(wranglerPath)).toBe(true)

    const config = JSON.parse(fs.readFileSync(wranglerPath, 'utf8')) as {
      main: string
      compatibility_flags: string[]
      assets: {
        directory: string
        binding: string
        html_handling: string
        not_found_handling: string
        run_worker_first: string[]
      }
    }

    expect(config.main).toBe('worker/index.ts')
    expect(config.compatibility_flags).toContain('nodejs_compat')
    expect(config.assets.directory).toBe('./out')
    expect(config.assets.binding).toBe('ASSETS')
    expect(config.assets.html_handling).toBe('drop-trailing-slash')
    expect(config.assets.not_found_handling).toBe('404-page')
    expect(config.assets.run_worker_first).toContain('/api/*')
  })

  it('should define all mandatory security headers in public/_headers and 308 redirects in public/_redirects', () => {
    const headersFile = fs.readFileSync(path.resolve(rootDir, 'public/_headers'), 'utf8')
    expect(headersFile).toContain('Strict-Transport-Security:')
    expect(headersFile).toContain('Content-Security-Policy:')
    expect(headersFile).toContain('X-Content-Type-Options: nosniff')
    expect(headersFile).toContain('X-Frame-Options: DENY')
    expect(headersFile).toContain('Referrer-Policy: strict-origin-when-cross-origin')
    expect(headersFile).toContain('Permissions-Policy:')
    expect(headersFile).toContain('Cross-Origin-Opener-Policy: same-origin')

    const redirectsFile = fs.readFileSync(path.resolve(rootDir, 'public/_redirects'), 'utf8')
    expect(redirectsFile).toContain('/ /en 308')
    expect(redirectsFile).toContain('/en/projects/wpskills /en/projects/fullstack-ai-lab 308')
    expect(redirectsFile).toContain('/de/projects/wpskills /de/projects/fullstack-ai-lab 308')
    expect(redirectsFile).toContain(
      '/de/projects/all-day-medical-care-clinic /de/projects/alldaymedicalcare 308',
    )
    expect(redirectsFile).toContain('/Portfolio/* /:splat 200')
  })

  it('should delegate static routes to env.ASSETS.fetch and reject GET /api/chat with 405 and security headers', async () => {
    const mockAssetFetch = vi.fn().mockResolvedValue(new Response('ok', { status: 200 }))
    const env: CloudflareWorkerEnv = {
      ASSETS: { fetch: mockAssetFetch },
    }

    const staticReq = new Request('https://www.yusupovartur.com/en')
    const staticRes = await workerHandler.fetch(staticReq, env)
    expect(staticRes.status).toBe(200)
    expect(mockAssetFetch).toHaveBeenCalledTimes(1)

    const getApiReq = new Request('https://www.yusupovartur.com/api/chat', { method: 'GET' })
    const getApiRes = await workerHandler.fetch(getApiReq, env)
    expect(getApiRes.status).toBe(405)
    expect(getApiRes.headers.get('Allow')).toBe('POST')
    expect(getApiRes.headers.get('Cache-Control')).toBe('no-store, max-age=0')
    expect(getApiRes.headers.get('X-Frame-Options')).toBe('DENY')
  })

  it('should handle POST /api/chat via Worker handler with cf-connecting-ip and return RAG response', async () => {
    const prevKey = process.env.OPENAI_API_KEY
    delete process.env.OPENAI_API_KEY

    try {
      const env: CloudflareWorkerEnv = {
        ASSETS: { fetch: vi.fn() },
        RATE_LIMIT_SALT: 'test-cf-salt',
      }

      const req = new Request('https://www.yusupovartur.com/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Origin: 'https://www.yusupovartur.com',
          'cf-connecting-ip': '203.0.113.42',
        },
        body: JSON.stringify({
          locale: 'en',
          messages: [{ role: 'user', content: 'What is Artur tech stack?' }],
        }),
      })

      const res = await workerHandler.fetch(req, env)
      expect(res.status).toBe(200)
      expect(res.headers.get('X-Chat-Metadata')).toBeTruthy()
      expect(res.headers.get('Cache-Control')).toBe('no-store, max-age=0')
      expect(res.headers.get('X-Content-Type-Options')).toBe('nosniff')
      const body = await res.text()
      expect(body.length).toBeGreaterThan(20)
    } finally {
      if (prevKey !== undefined) {
        process.env.OPENAI_API_KEY = prevKey
      }
    }
  })

  it('should ship a build-time precomputed inverted BM25 RAG index synced with projects and blog posts', async () => {
    const indexPath = path.resolve(rootDir, 'src/lib/ai/generated/rag-index.generated.ts')
    expect(fs.existsSync(indexPath)).toBe(true)

    const raw = fs.readFileSync(indexPath, 'utf8')
    expect(raw).not.toContain('\u2014')

    const { getPrebuiltKnowledgeData } = await import('../lib/ai/knowledge')
    const parsed = getPrebuiltKnowledgeData()

    const { projectRegistry } = await import('../lib/projectRegistry')
    const { allBlogPosts } = await import('../data/blog')

    expect(parsed.counts.projects).toBe(projectRegistry.length)
    expect(parsed.counts.blog).toBe(allBlogPosts.length)
    expect(parsed.blogSummaries).toHaveLength(allBlogPosts.length)
    expect(parsed.bm25.totalDocs).toBe(parsed.counts.totalChunks)
    expect(Object.keys(parsed.bm25.postings).length).toBeGreaterThan(5000)
    // Ensure lightweight summaries omit full Markdown bodies to keep Worker bundle lean
    expect(parsed.blogSummaries[0].content).toBeUndefined()
  })
})
