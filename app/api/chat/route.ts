import { openai } from '@ai-sdk/openai'
import { streamText } from 'ai'
import { retrieveKnowledge, formatContextForLLM } from '../../../src/lib/ai/rag'
import { buildSystemPrompt } from '../../../src/lib/ai/prompts'
import { aiTools } from '../../../src/lib/ai/tools'

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
      const topSnippet =
        retrievedChunks[0]?.snippet ||
        'Artur Yusupov is a Fullstack WordPress Developer and Next.js / React Engineer with 5+ years of commercial experience.'

      const mockResponse = `I am Artur's AI engineering assistant. Based on Artur's verified portfolio: ${topSnippet}`

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
