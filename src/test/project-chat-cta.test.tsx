import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent, act } from '@testing-library/react'
import ProjectChatTrigger from '../components/ProjectChatTrigger'
import ChatModal from '../components/ChatModal'
import { LanguageProvider } from '../contexts/LanguageContext'

describe('Contextual Project AI Chat Trigger Specification (TDD)', () => {
  it('should dispatch open-ai-chat-context CustomEvent on click', () => {
    const listener = vi.fn()
    window.addEventListener('open-ai-chat-context', listener)

    render(
      <ProjectChatTrigger
        projectSlug="it-magic"
        projectTitle="IT-Magic"
        label="Ask AI about IT-Magic"
      />,
    )

    const button = screen.getByRole('button', { name: /Ask AI about IT-Magic/i })
    expect(button).toBeDefined()
    fireEvent.click(button)

    expect(listener).toHaveBeenCalledTimes(1)
    const event = listener.mock.calls[0][0] as CustomEvent
    expect(event.detail).toEqual({
      projectSlug: 'it-magic',
      projectTitle: 'IT-Magic',
    })

    window.removeEventListener('open-ai-chat-context', listener)
  })

  it('should listen to open-ai-chat-context event in ChatModal and show project-specific chips', () => {
    render(
      <LanguageProvider>
        <ChatModal open={false} onClose={vi.fn()} />
      </LanguageProvider>,
    )

    // Initially modal is closed
    expect(screen.queryByText(/Ask about IT-Magic/i)).toBeNull()

    // Dispatch the custom event to open with context
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

    // Now modal should be open and display project context quick query cards
    expect(screen.getByText('Tech Stack & Versions')).toBeTruthy()
    expect(screen.getByText('System Architecture')).toBeTruthy()
    expect(screen.getByText('Key Features & Metrics')).toBeTruthy()
    expect(screen.getByText('Challenges & Solutions')).toBeTruthy()
  })
})
