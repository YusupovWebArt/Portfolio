import crypto from 'crypto'

export interface RateLimitOptions {
  maxRequests?: number
  windowMs?: number
  /** Key namespace, so different endpoints never share counters. */
  prefix?: string
  /** Upstash request budget in ms. After it expires the limiter degrades to the memory backend. */
  upstashTimeoutMs?: number
}

export interface RateLimitResult {
  success: boolean
  remaining: number
  reset: number
  backend: 'upstash' | 'memory'
}

interface ClientRecord {
  count: number
  resetAt: number
}

interface UpstashCounter {
  count: number
  ttlMs: number
}

const DEFAULT_MAX_REQUESTS = 15
const DEFAULT_WINDOW_MS = 60 * 60 * 1000
const DEFAULT_UPSTASH_TIMEOUT_MS = 1500
const BREAKER_MS = 30_000
const MAX_MEMORY_KEYS = 10_000
const SWEEP_INTERVAL_MS = 60_000
const MAX_IDENTIFIER_CHARS = 128

// One atomic round trip: INCR, then repair a missing TTL. A key can never outlive its window,
// even if the HTTP response is lost after the server applied the command.
const COUNTER_SCRIPT = [
  "local c = redis.call('INCR', KEYS[1])",
  "local t = redis.call('PTTL', KEYS[1])",
  "if t < 0 then redis.call('PEXPIRE', KEYS[1], ARGV[1]) t = tonumber(ARGV[1]) end",
  'return {c, t}',
].join('\n')

const memoryStore = new Map<string, ClientRecord>()
let lastSweep = 0
let upstashDownUntil = 0

export function resetRateLimits(): void {
  memoryStore.clear()
  lastSweep = 0
  upstashDownUntil = 0
}

export function getMemoryStoreSize(): number {
  return memoryStore.size
}

/**
 * Deterministically hashes client IP with SHA-256 to protect user privacy
 * and prevent raw IP leakage into logs, caches, or third-party Redis stores.
 */
export function hashIp(ip: string): string {
  try {
    return crypto.createHash('sha256').update(ip || '127.0.0.1').digest('hex').slice(0, 32)
  } catch {
    return (ip || '127.0.0.1').slice(0, 32)
  }
}

function sweepMemory(now: number): void {
  const overCap = memoryStore.size > MAX_MEMORY_KEYS
  if (!overCap && now - lastSweep < SWEEP_INTERVAL_MS) return
  lastSweep = now
  for (const [key, record] of memoryStore) {
    if (now >= record.resetAt) memoryStore.delete(key)
  }
  // Hard cap against key-rotation floods: evict oldest entries down to 90% of the cap.
  const excess = memoryStore.size - Math.floor(MAX_MEMORY_KEYS * 0.9)
  if (memoryStore.size <= MAX_MEMORY_KEYS) return
  let remainingExcess = excess
  for (const key of memoryStore.keys()) {
    if (remainingExcess <= 0) break
    memoryStore.delete(key)
    remainingExcess--
  }
}

function checkMemory(
  key: string,
  maxRequests: number,
  windowMs: number,
  now: number,
): RateLimitResult {
  sweepMemory(now)
  const record = memoryStore.get(key)

  if (!record || now >= record.resetAt) {
    memoryStore.set(key, { count: 1, resetAt: now + windowMs })
    return { success: true, remaining: maxRequests - 1, reset: now + windowMs, backend: 'memory' }
  }

  record.count += 1
  return {
    success: record.count <= maxRequests,
    remaining: Math.max(0, maxRequests - record.count),
    reset: record.resetAt,
    backend: 'memory',
  }
}

function parseCounter(payload: unknown): UpstashCounter | null {
  if (typeof payload !== 'object' || payload === null) return null
  const result: unknown = (payload as { result?: unknown }).result
  if (!Array.isArray(result) || result.length !== 2) return null
  const [count, ttlMs] = result as unknown[]
  if (typeof count !== 'number' || typeof ttlMs !== 'number') return null
  if (!Number.isFinite(count) || !Number.isFinite(ttlMs) || count < 1) return null
  return { count, ttlMs }
}

async function checkUpstash(
  key: string,
  windowMs: number,
  timeoutMs: number,
  now: number,
): Promise<UpstashCounter | null> {
  const url = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN
  if (!url || !token || now < upstashDownUntil) return null

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      // The key travels in the JSON body only, never in the URL path.
      body: JSON.stringify(['EVAL', COUNTER_SCRIPT, '1', key, String(windowMs)]),
      signal: AbortSignal.timeout(timeoutMs),
      cache: 'no-store',
    })
    if (!response.ok) throw new Error(`upstash status ${response.status}`)
    const counter = parseCounter(await response.json())
    if (!counter) throw new Error('unexpected upstash response shape')
    return counter
  } catch (error) {
    // Circuit breaker: skip Upstash for BREAKER_MS so a dead backend costs one timeout, not one per request.
    upstashDownUntil = now + BREAKER_MS
    console.warn(
      '[ratelimit] upstash unavailable, per-instance memory fallback:',
      error instanceof Error ? error.message : 'unknown error',
    )
    return null
  }
}

/**
 * Fixed-window limiter with atomic Redis Lua script and memory fallback.
 * Hashed identifier prevents raw IP exposure in storage.
 */
export async function checkRateLimit(
  identifier: string,
  options: RateLimitOptions = {},
): Promise<RateLimitResult> {
  const maxRequests = options.maxRequests ?? DEFAULT_MAX_REQUESTS
  const windowMs = options.windowMs ?? DEFAULT_WINDOW_MS
  const hashed = hashIp(identifier)
  const key = `${options.prefix ?? 'ratelimit:chat'}:${hashed.slice(0, MAX_IDENTIFIER_CHARS)}`
  const now = Date.now()

  const counter = await checkUpstash(
    key,
    windowMs,
    options.upstashTimeoutMs ?? DEFAULT_UPSTASH_TIMEOUT_MS,
    now,
  )
  if (counter) {
    return {
      success: counter.count <= maxRequests,
      remaining: Math.max(0, maxRequests - counter.count),
      reset: now + (counter.ttlMs > 0 ? counter.ttlMs : windowMs),
      backend: 'upstash',
    }
  }

  return checkMemory(key, maxRequests, windowMs, now)
}
