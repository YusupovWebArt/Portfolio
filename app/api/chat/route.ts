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

export const dynamic = 'force-dynamic'

interface ChatRequestMessage {
  role: 'system' | 'user' | 'assistant'
  content: string
}

interface ChatRequestBody {
  messages: ChatRequestMessage[]
  projectSlug?: string
  projectTitle?: string
  locale?: 'en' | 'ua' | 'es'
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ChatRequestBody
    const { messages, projectSlug, projectTitle, locale } = body

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: 'Messages array is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    // IP-based rate limiting (15 requests/hour)
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      req.headers.get('x-real-ip') ||
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

    // Extract the latest user query for hybrid RAG retrieval
    const lastUserMessage =
      messages
        .slice()
        .reverse()
        .find((m) => m.role === 'user')?.content || ''

    const retrievedChunks = retrieveKnowledge(lastUserMessage, {
      currentProjectSlug: projectSlug,
      topK: 5,
    })

    const formattedContext = formatContextForLLM(retrievedChunks)
    const system = buildSystemPrompt({
      retrievedContext: formattedContext,
      currentProjectTitle: projectTitle,
    })

    // Autonomous local RAG synthesis when OPENAI_API_KEY is not configured
    if (!process.env.OPENAI_API_KEY) {
      const localAnswer = synthesizeLocalRagAnswer(lastUserMessage, {
        projectSlug,
        projectTitle,
        locale,
      })

      return new Response(localAnswer, {
        status: 200,
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
        },
      })
    }

    // Live LLM streaming via OpenAI gpt-4o-mini
    const result = streamText({
      model: openai('gpt-4o-mini'),
      system,
      messages: messages.map((m) => ({
        role: m.role,
        content: m.content,
      })),
      tools: aiTools,
      maxSteps: 3,
    })

    return result.toUIMessageStreamResponse()
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
