import React from 'react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react'
import ChatModal from '../components/ChatModal'
import { LanguageProvider } from '../contexts/LanguageContext'

describe('ChatModal Client-side Streaming & Fallback Specification (TDD)', () => {
  const originalFetch = global.fetch

  beforeEach(() => {
    sessionStorage.clear()
    vi.clearAllMocks()
  })

  afterEach(() => {
    global.fetch = originalFetch
  })

  it('should call /api/chat with project context and stream response', async () => {
    const mockStreamResponse = new Response(
      'IT-Magic used Next.js, AWS ECS, and Docker for scalable infrastructure.',
      {
        status: 200,
        headers: { 'Content-Type': 'text/plain; charset=utf-8' },
      },
    )

    global.fetch = vi.fn().mockResolvedValue(mockStreamResponse)

    render(
      <LanguageProvider>
        <ChatModal open={true} onClose={vi.fn()} />
      </LanguageProvider>,
    )

    // Send contextual event
    act(() => {
      window.dispatchEvent(
        new CustomEvent('open-ai-chat-context', {
          detail: {
            projectSlug: 'it-magic',
            projectTitle: 'IT-Magic',
          },
        }),
      )
    })

    const input = screen.getByPlaceholderText(/Type a question/i)
    fireEvent.change(input, {
      target: { value: 'What architecture is used in IT-Magic?' },
    })

    const sendBtn = screen.getByTitle(/Send/i)
    fireEvent.click(sendBtn)

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        '/api/chat',
        expect.objectContaining({
          method: 'POST',
        }),
      )
    })

    const fetchCall = (global.fetch as any).mock.calls[0]
    const parsedBody = JSON.parse(fetchCall[1].body)
    expect(parsedBody.projectSlug).toBe('it-magic')
    expect(parsedBody.messages[0].content).toBe(
      'What architecture is used in IT-Magic?',
    )

    await waitFor(() => {
      expect(
        screen.getByText(/IT-Magic used Next.js, AWS ECS, and Docker/i),
      ).toBeDefined()
    })
  })

  it('should fall back to static FAQ engine if /api/chat fails', async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error('Network error'))

    render(
      <LanguageProvider>
        <ChatModal open={true} onClose={vi.fn()} />
      </LanguageProvider>,
    )

    const input = screen.getByPlaceholderText(/Type a question/i)
    fireEvent.change(input, {
      target: { value: 'What are your rates?' },
    })

    const sendBtn = screen.getByTitle(/Send/i)
    fireEvent.click(sendBtn)

    // Should gracefully display fallback answer
    await waitFor(
      () => {
        const messages = screen.getAllByText(/rates|pricing|contact/i)
        expect(messages.length).toBeGreaterThan(0)
      },
      { timeout: 2000 },
    )
  })
})
