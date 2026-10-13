import crypto from 'crypto'

export interface RateLimitOptions {
  maxRequests?: number
  windowMs?: number
}

export interface RateLimitResult {
  success: boolean
  remaining: number
  reset: number
}

interface ClientRecord {
  count: number
  resetAt: number
}

const memoryStore = new Map<string, ClientRecord>()

export function resetRateLimits(): void {
  memoryStore.clear()
}

/**
 * Deterministically hashes client IP with SHA-256 to protect user privacy
 * and prevent raw IP leakage into logs, caches, or third-party Redis stores.
 */
export function hashIp(ip: string): string {
  try {
    return crypto.createHash('sha256').update(ip || '127.0.0.1').digest('hex').slice(0, 32)
  } catch {
    return ip || '127.0.0.1'
  }
}

export async function checkRateLimit(
  ip: string,
  options?: RateLimitOptions,
): Promise<RateLimitResult> {
  const maxRequests = options?.maxRequests ?? 15
  const windowMs = options?.windowMs ?? 60 * 60 * 1000 // 1 hour default
  const now = Date.now()
  const hashedKey = hashIp(ip)

  // Production Upstash Redis REST check if credentials are provided
  const upstashUrl = process.env.UPSTASH_REDIS_REST_URL
  const upstashToken = process.env.UPSTASH_REDIS_REST_TOKEN

  if (upstashUrl && upstashToken) {
    try {
      const key = `ratelimit:chat:${hashedKey}`
      const response = await fetch(`${upstashUrl}/pipeline`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${upstashToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([
          ['INCR', key],
          ['PTTL', key],
        ]),
      })

      if (response.ok) {
        const data = (await response.json()) as Array<{ result: number }>
        const currentCount = data[0]?.result || 1
        const pttl = data[1]?.result || windowMs

        if (currentCount === 1) {
          // Set expiry on first request
          await fetch(`${upstashUrl}/PEXPIRE/${key}/${windowMs}`, {
            headers: { Authorization: `Bearer ${upstashToken}` },
          })
        }

        const remaining = Math.max(0, maxRequests - currentCount)
        return {
          success: currentCount <= maxRequests,
          remaining,
          reset: now + (pttl > 0 ? pttl : windowMs),
        }
      }
    } catch {
      // Fallback silently to in-memory rate limiting on network timeout
    }
  }

  // Reliable sliding window in-memory fallback (local dev, test suite, CI)
  const record = memoryStore.get(hashedKey)

  if (!record || now > record.resetAt) {
    memoryStore.set(hashedKey, {
      count: 1,
      resetAt: now + windowMs,
    })
    return {
      success: true,
      remaining: maxRequests - 1,
      reset: now + windowMs,
    }
  }

  record.count += 1
  const remaining = Math.max(0, maxRequests - record.count)
  const isAllowed = record.count <= maxRequests

  return {
    success: isAllowed,
    remaining,
    reset: record.resetAt,
  }
}
