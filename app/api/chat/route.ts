import { openai } from '@ai-sdk/openai'
import { streamText } from 'ai'
import {
  retrieveKnowledge,
  formatContextForLLM,
  synthesizeLocalRagAnswer,
} from '../../../src/lib/ai/rag'
import { buildSystemPrompt } from '../../../src/lib/ai/prompts'
import { aiTools } from '../../../src/lib/ai/tools'
import { checkRateLimit } from '../../../src/lib/ratelimit'
import { sanitizeLlmInput } from '../../../src/lib/ai/text'
import { projectRegistry } from '../../../src/lib/projectRegistry'

export const dynamic = 'force-dynamic'

interface ChatRequestMessage {
  role: 'user' | 'assistant'
  content: string
}

interface ChatRequestBody {
  messages: ChatRequestMessage[]
  projectSlug?: string
  locale?: 'en' | 'ua' | 'es'
}

const MAX_BODY_BYTES = 16_384 // 16 KB max payload
const MAX_MESSAGE_CHARS = 1200
const MAX_HISTORY_MESSAGES = 8

export async function POST(req: Request) {
  try {
    // 1. Origin verification in production (CSRF / abuse protection)
    const origin = req.headers.get('origin')
    if (process.env.NODE_ENV === 'production' && origin) {
      const isAllowedOrigin =
        origin.includes('yusupovartur.com') ||
        origin.includes('yusupovwebart.github.io') ||
        origin.includes('localhost')
      if (!isAllowedOrigin) {
        return new Response(JSON.stringify({ error: 'Forbidden origin' }), {
          status: 403,
          headers: { 'Content-Type': 'application/json' },
        })
      }
    }

    // 2. Payload size check (prevent DoS via massive payloads)
    const rawBody = await req.text()
    if (rawBody.length > MAX_BODY_BYTES) {
      return new Response(
        JSON.stringify({ error: 'Payload too large. Maximum body size is 16KB.' }),
        {
          status: 413,
          headers: { 'Content-Type': 'application/json' },
        },
      )
    }

    let parsedBody: ChatRequestBody
    try {
      parsedBody = JSON.parse(rawBody) as ChatRequestBody
    } catch {
      return new Response(JSON.stringify({ error: 'Invalid JSON payload' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const { messages, projectSlug, locale } = parsedBody

    // 3. Messages array validation
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: 'Messages array is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    // 4. Strict role whitelist and content length check (Finding A: reject role: 'system')
    for (const msg of messages) {
      if (!msg || typeof msg !== 'object') {
        return new Response(JSON.stringify({ error: 'Malformed message object' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        })
      }
      if (msg.role !== 'user' && msg.role !== 'assistant') {
        return new Response(
          JSON.stringify({
            error: "Invalid message role. Only 'user' and 'assistant' roles are permitted.",
          }),
          {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
          },
        )
      }
      if (typeof msg.content !== 'string' || msg.content.length > MAX_MESSAGE_CHARS) {
        return new Response(
          JSON.stringify({
            error: `Message content must be a string of ${MAX_MESSAGE_CHARS} characters or fewer.`,
          }),
          {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
          },
        )
      }
    }

    // 5. IP-based rate limiting (15 requests/hour, hashed IP in storage)
    const ip =
      req.headers.get('x-real-ip')?.trim() ||
      req.headers.get('x-vercel-ip')?.trim() ||
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      '127.0.0.1'

    const rateLimit = await checkRateLimit(ip, {
      maxRequests: 15,
      windowMs: 60 * 60 * 1000,
    })

    if (!rateLimit.success) {
      return new Response(
        JSON.stringify({
          error: 'Too many requests. Please try again later or contact Artur directly.',
          reset: rateLimit.reset,
        }),
        {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'Retry-After': String(
              Math.max(1, Math.ceil((rateLimit.reset - Date.now()) / 1000)),
            ),
          },
        },
      )
    }

    // 6. Sanitize and clip message history (max last 8 messages)
    const sanitizedHistory = messages.slice(-MAX_HISTORY_MESSAGES).map((m) => ({
      role: m.role,
      content: sanitizeLlmInput(m.content, MAX_MESSAGE_CHARS),
    }))

    // Extract the latest user query
    const lastUserMessage =
      sanitizedHistory
        .slice()
        .reverse()
        .find((m) => m.role === 'user')?.content.trim() || ''

    if (!lastUserMessage) {
      return new Response(
        JSON.stringify({ error: 'At least one user message with text content is required.' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        },
      )
    }

    // 7. Server-side project resolution (Finding D: do NOT trust client projectTitle)
    let verifiedProjectTitle: string | undefined
    let verifiedProjectSlug: string | undefined

    if (typeof projectSlug === 'string' && /^[a-z0-9-]+$/i.test(projectSlug.trim())) {
      const slugNormalized = projectSlug.trim().toLowerCase()
      const found = projectRegistry.find((p) => p.slug.toLowerCase() === slugNormalized)
      if (found) {
        verifiedProjectSlug = found.slug
        verifiedProjectTitle = found.project.title
      }
    }

    // 8. Knowledge retrieval via BM25
    const retrievedChunks = retrieveKnowledge(lastUserMessage, {
      currentProjectSlug: verifiedProjectSlug,
      topK: 5,
    })

    const formattedContext = formatContextForLLM(retrievedChunks)
    const system = buildSystemPrompt({
      retrievedContext: formattedContext,
      currentProjectTitle: verifiedProjectTitle,
    })

    // 9. Autonomous local RAG synthesis when OPENAI_API_KEY is not configured
    if (!process.env.OPENAI_API_KEY) {
      const localAnswer = synthesizeLocalRagAnswer(lastUserMessage, {
        projectSlug: verifiedProjectSlug,
        projectTitle: verifiedProjectTitle,
        locale,
      })

      return new Response(localAnswer, {
        status: 200,
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
        },
      })
    }

    // 10. Live LLM streaming via OpenAI gpt-4o-mini (Finding F: text stream response)
    const result = streamText({
      model: openai('gpt-4o-mini'),
      system,
      messages: sanitizedHistory.map((m) => ({
        role: m.role,
        content: m.content,
      })),
      tools: aiTools,
      maxSteps: 3,
    })

    return result.toTextStreamResponse()
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
