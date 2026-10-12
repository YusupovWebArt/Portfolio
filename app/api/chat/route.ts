import { openai } from '@ai-sdk/openai'
import { streamText } from 'ai'
import { retrieveKnowledge, formatContextForLLM } from '../../../src/lib/ai/rag'
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
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ChatRequestBody
    const { messages, projectSlug, projectTitle } = body

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
      limit: 5,
    })

    const formattedContext = formatContextForLLM(retrievedChunks)
    const system = buildSystemPrompt({
      retrievedContext: formattedContext,
      currentProjectTitle: projectTitle,
    })

    // Offline / testing fallback if OPENAI_API_KEY is not configured
    if (!process.env.OPENAI_API_KEY) {
      let mockResponse = ''
      if (projectTitle && retrievedChunks.length > 0) {
        const matchingChunk =
          retrievedChunks.find((c) =>
            c.title.toLowerCase().includes(projectTitle.toLowerCase()),
          ) || retrievedChunks[0]
        mockResponse = `I am Artur's AI engineering assistant.\n\nProject: ${projectTitle}\nOverview: ${matchingChunk.snippet}\n\n(Live generative dialogue will be activated once OPENAI_API_KEY is configured in Vercel Environment Variables).`
      } else {
        const topSnippet =
          retrievedChunks[0]?.snippet ||
          'Artur Yusupov is a Fullstack WordPress Developer and Next.js / React Engineer with 5+ years of commercial experience.'
        mockResponse = `I am Artur's AI engineering assistant. Based on Artur's verified portfolio:\n${topSnippet}\n\n(Live generative dialogue will be activated once OPENAI_API_KEY is configured in Vercel Environment Variables).`
      }

      return new Response(mockResponse, {
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
