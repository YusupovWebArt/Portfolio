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

    const fetchCall = vi.mocked(global.fetch).mock.calls[0]
    const parsedBody = JSON.parse(fetchCall[1]?.body as string)
    expect(parsedBody.projectSlug).toBe('it-magic')
    expect(parsedBody.messages[0].content).toBe(
      'What architecture is used in IT-Magic?',
    )

    await waitFor(() => {
      expect(
        screen.getAllByText(/IT-Magic used Next.js, AWS ECS, and Docker/i).length,
      ).toBeGreaterThan(0)
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

    // Should gracefully display fallback answer from local RAG engine and render ContactActionCard
    await waitFor(
      () => {
        const messages = screen.getAllByText(/open to remote|services include/i)
        expect(messages.length).toBeGreaterThan(0)
        expect(screen.getByText(/Download CV \(PDF\)/i)).toBeInTheDocument()
      },
      { timeout: 4000 },
    )
  })

  it('should enforce left-aligned text, larger modal dimensions, scroll only the message region, and render interactive project cards', async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error('Offline fallback'))

    render(
      <LanguageProvider>
        <div className="text-center">
          <ChatModal open={true} onClose={vi.fn()} />
        </div>
      </LanguageProvider>,
    )

    const dialog = screen.getByRole('dialog')
    expect(dialog.className).toContain('text-left')
    expect(dialog.className).toContain('max-w-3xl')
    expect(dialog.className).toContain('lg:max-w-5xl')
    expect(dialog.className).toContain('xl:max-w-6xl')
    expect(dialog.className).toContain('h-[740px]')

    const maxBtn = screen.getByTitle(/Maximize/i)
    fireEvent.click(maxBtn)
    expect(dialog.className).toContain('max-w-[1550px]')
    fireEvent.click(screen.getByTitle(/Restore/i))
    expect(dialog.className).toContain('lg:max-w-5xl')

    const region = screen.getByRole('region')
    expect(region.className).toContain('relative')
    expect(region.className).toContain('min-h-0')

    const input = screen.getByPlaceholderText(/Type a question/i)
    fireEvent.change(input, {
      target: { value: 'What are your best projects?' },
    })

    const sendBtn = screen.getByTitle(/Send/i)
    fireEvent.click(sendBtn)

    await waitFor(
      () => {
        const caseStudyLinks = screen.getAllByRole('link', {
          name: /View Case Study/i,
        })
        expect(caseStudyLinks.length).toBeGreaterThan(0)
      },
      { timeout: 4000 },
    )

    // Dialog container itself must never be scrolled
    expect(dialog.scrollTop).toBe(0)
  })
})

