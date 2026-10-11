import { describe, it, expect, vi, beforeEach } from 'vitest'
import { buildSystemPrompt } from '../lib/ai/prompts'
import { POST } from '../../app/api/chat/route'

describe('Fullstack RAG Agent & Streaming Route Handler Specification (TDD)', () => {
  describe('System Prompt & Guardrails (src/lib/ai/prompts.ts)', () => {
    it('should build grounded system prompt with Artur persona and zero em dashes', () => {
      const prompt = buildSystemPrompt({
        retrievedContext: 'IT-Magic: High-load AWS cloud migration case study.',
        currentProjectTitle: 'IT-Magic',
      })

      expect(prompt).toContain('Artur Yusupov')
      expect(prompt).toContain('IT-Magic')
      expect(prompt).toContain('High-load AWS cloud migration case study.')
      expect(prompt).not.toContain('—')
    })

    it('should include strict injection defense and boundaries', () => {
      const prompt = buildSystemPrompt()
      expect(prompt).toContain('prompt injection')
      expect(prompt).toContain('Never disclose private internal secrets')
      expect(prompt).not.toContain('—')
    })
  })

  describe('Route Handler (app/api/chat/route.ts)', () => {
    beforeEach(() => {
      vi.clearAllMocks()
    })

    it('should handle POST request and return streaming response', async () => {
      const mockRequest = new Request('http://localhost:3000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            {
              role: 'user',
              content: 'What technologies were used in IT-Magic?',
            },
          ],
          projectSlug: 'it-magic',
        }),
      })

      const response = await POST(mockRequest)
      expect(response).toBeDefined()
      expect(response.status).toBe(200)
    })
  })
})
