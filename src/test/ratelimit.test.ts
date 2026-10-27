import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { checkRateLimit, resetRateLimits, getMemoryStoreSize } from '../lib/ratelimit'
import { POST } from '../../app/api/chat/route'

const BASE = 'https://example.upstash.io'

describe('DevSecOps Rate Limiting Specification (TDD)', () => {
  beforeEach(() => {
    resetRateLimits()
  })

  afterEach(() => {
    vi.unstubAllEnvs()
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
  })

  it('should allow requests within limit and track remaining tokens', async () => {
    const ip = '192.168.1.100'
    const result1 = await checkRateLimit(ip, { maxRequests: 5, windowMs: 60000 })
    expect(result1.success).toBe(true)
    expect(result1.remaining).toBe(4)

    const result2 = await checkRateLimit(ip, { maxRequests: 5, windowMs: 60000 })
    expect(result2.success).toBe(true)
    expect(result2.remaining).toBe(3)
  })

  it('should reject requests exceeding rate limit with success=false', async () => {
    const ip = '10.0.0.1'
    for (let i = 0; i < 3; i++) {
      const res = await checkRateLimit(ip, { maxRequests: 3, windowMs: 60000 })
      expect(res.success).toBe(true)
    }

    const exceeded = await checkRateLimit(ip, { maxRequests: 3, windowMs: 60000 })
    expect(exceeded.success).toBe(false)
    expect(exceeded.remaining).toBe(0)
  })

  it('should return HTTP 429 in /api/chat when rate limit is reached', async () => {
    const ip = '203.0.113.195'
    // Exceed the limit
    for (let i = 0; i < 20; i++) {
      await checkRateLimit(ip, { maxRequests: 15, windowMs: 3600000 })
    }

    const req = new Request('http://localhost:3000/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-forwarded-for': ip,
      },
      body: JSON.stringify({
        messages: [{ role: 'user', content: 'Hello' }],
      }),
    })

    const response = await POST(req)
    expect(response.status).toBe(429)
    const data = await response.json()
    expect(data.error).toContain('Too many requests')
    expect(JSON.stringify(data)).not.toContain('—')
  })

  it('does not fail open on a malformed Upstash payload and degrades to memory fallback', async () => {
    vi.stubEnv('UPSTASH_REDIS_REST_URL', BASE)
    vi.stubEnv('UPSTASH_REDIS_REST_TOKEN', 'test_token')
    vi.spyOn(console, 'warn').mockImplementation(() => undefined)
    vi.stubGlobal('fetch', vi.fn(async () => new Response(JSON.stringify({ result: 'OK' }))))

    let allowed = 0
    for (let i = 0; i < 30; i++) {
      if ((await checkRateLimit('malformed-test-id')).success) allowed++
    }
    expect(allowed).toBe(15)
  })

  it('falls back within the timeout budget when Upstash hangs', async () => {
    vi.stubEnv('UPSTASH_REDIS_REST_URL', BASE)
    vi.stubEnv('UPSTASH_REDIS_REST_TOKEN', 'test_token')
    vi.spyOn(console, 'warn').mockImplementation(() => undefined)
    vi.stubGlobal(
      'fetch',
      vi.fn(
        (_url: string, init?: RequestInit) =>
          new Promise<Response>((_resolve, reject) => {
            init?.signal?.addEventListener('abort', () => reject(new Error('timeout')))
          }),
      ),
    )

    const started = Date.now()
    const result = await checkRateLimit('hang-test-id', { upstashTimeoutMs: 50 })
    expect(result.backend).toBe('memory')
    expect(Date.now() - started).toBeLessThan(500)
  })

  it('never puts the identifier into the request URL path', async () => {
    vi.stubEnv('UPSTASH_REDIS_REST_URL', BASE)
    vi.stubEnv('UPSTASH_REDIS_REST_TOKEN', 'test_token')
    const spy = vi.fn(async () => new Response(JSON.stringify({ result: [1, 3_600_000] })))
    vi.stubGlobal('fetch', spy)

    await checkRateLimit('203.0.113.9/1?x=y')
    expect(String(spy.mock.calls[0]?.[0])).toBe(BASE)
  })

  it('bounds memory consumption under aggressive key rotation floods', async () => {
    vi.stubEnv('UPSTASH_REDIS_REST_URL', '')
    for (let i = 0; i < 12_000; i++) {
      await checkRateLimit(`key-rotation-${i}`)
    }
    expect(getMemoryStoreSize()).toBeLessThanOrEqual(10_000)
  }, 20_000)
})
