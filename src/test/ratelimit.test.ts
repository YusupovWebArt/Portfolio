import { describe, it, expect, beforeEach } from 'vitest'
import { checkRateLimit, resetRateLimits } from '../lib/ratelimit'
import { POST } from '../../app/api/chat/route'

describe('DevSecOps Rate Limiting Specification (TDD)', () => {
  beforeEach(() => {
    resetRateLimits()
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
})
