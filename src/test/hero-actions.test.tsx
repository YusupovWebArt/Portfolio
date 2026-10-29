import React from 'react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Hero from '../components/Hero'
import { LanguageProvider } from '../contexts/LanguageContext'
import * as analytics from '../lib/analytics'

vi.mock('../lib/analytics', () => ({
  trackAiChatInteraction: vi.fn(),
  trackCvDownload: vi.fn(),
}))

describe('Hero CTA Actions Specification (TDD)', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should dispatch open-ai-chat event and track interaction when clicking Chat with RAG AI Assistant', () => {
    const listener = vi.fn()
    window.addEventListener('open-ai-chat', listener)

    render(
      <LanguageProvider>
        <Hero />
      </LanguageProvider>,
    )

    const chatButton = screen.getByRole('button', { name: /Chat with RAG AI Assistant|Чат з RAG AI|Chatear con el Asistente/i })
    expect(chatButton).toBeDefined()

    fireEvent.click(chatButton)

    expect(analytics.trackAiChatInteraction).toHaveBeenCalledWith('open')
    expect(listener).toHaveBeenCalledTimes(1)

    window.removeEventListener('open-ai-chat', listener)
  })

  it('should call trackCvDownload when clicking Download CV link', () => {
    render(
      <LanguageProvider>
        <Hero />
      </LanguageProvider>,
    )

    const cvLink = screen.getByRole('link', { name: /Download CV|Завантажити резюме|Descargar CV/i })
    expect(cvLink).toBeDefined()
    expect(cvLink).toHaveAttribute('href', '/Portfolio/resume/Artur_Yusupov_Resume.pdf')
    expect(cvLink).toHaveAttribute('download')

    fireEvent.click(cvLink)

    expect(analytics.trackCvDownload).toHaveBeenCalledWith('hero')
  })
})
