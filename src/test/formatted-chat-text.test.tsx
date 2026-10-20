import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import FormattedChatText from '../components/chat/FormattedChatText'

describe('FormattedChatText', () => {
  it('renders heading 3 as h4 element with link', () => {
    const raw = '### [Autonomous Hybrid RAG](/en/blog/autonomous-hybrid-rag-architecture-browser)'
    render(<FormattedChatText text={raw} isBot={true} />)

    const heading = screen.getByRole('heading', { level: 4 })
    expect(heading).toBeInTheDocument()
    const link = screen.getByRole('link', { name: 'Autonomous Hybrid RAG' })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute(
      'href',
      '/en/blog/autonomous-hybrid-rag-architecture-browser',
    )
  })

  it('renders standalone italic metadata line with distinct styling', () => {
    const raw = '*AI Engineering · 7 min read*'
    const { container } = render(<FormattedChatText text={raw} isBot={true} />)

    expect(screen.getByText('AI Engineering · 7 min read')).toBeInTheDocument()
    const italicDiv = container.querySelector('.italic')
    expect(italicDiv).toBeInTheDocument()
  })

  it('renders bullet points with bullet indicators and inline formatting', () => {
    const raw = '- **100% In-Browser Vector Engine**: Client-side cosine similarity.'
    render(<FormattedChatText text={raw} isBot={true} />)

    expect(screen.getByText('100% In-Browser Vector Engine')).toBeInTheDocument()
    expect(screen.getByText(': Client-side cosine similarity.')).toBeInTheDocument()
  })

  it('dispatches open-blog-article custom event in SPA mode on link click', () => {
    ;(window as unknown as { __IS_PORTFOLIO_SPA__?: boolean }).__IS_PORTFOLIO_SPA__ = true
    const dispatchSpy = vi.spyOn(window, 'dispatchEvent')

    const raw = 'Check out [Read Article](/en/blog/client-side-zero-trust-security)'
    render(<FormattedChatText text={raw} isBot={true} />)

    const link = screen.getByRole('link', { name: 'Read Article' })
    fireEvent.click(link)

    expect(dispatchSpy).toHaveBeenCalledWith(
      expect.objectContaining({ type: 'close-ai-chat' }),
    )
    expect(dispatchSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'open-blog-article',
        detail: { slug: 'client-side-zero-trust-security' },
      }),
    )

    delete (window as unknown as { __IS_PORTFOLIO_SPA__?: boolean }).__IS_PORTFOLIO_SPA__
  })
})
