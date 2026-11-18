import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, fireEvent, act } from '@testing-library/react'
import AiWorkflow from '../components/AiWorkflow'
import { LanguageProvider } from '../contexts/LanguageContext'

const renderWithLang = (initialLang: 'en' | 'ua' | 'es' | 'de' = 'en') => {
  return render(
    <LanguageProvider initialLang={initialLang}>
      <AiWorkflow />
    </LanguageProvider>,
  )
}

describe('AiWorkflow 2.0 - Interactive Spec-Driven SDLC Pipeline Visualizer (TDD)', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
    vi.restoreAllMocks()
  })

  it('renders an accessible 4-node SDLC pipeline tablist with phase codes and artifact badges', () => {
    renderWithLang('en')

    const tablist = screen.getByRole('tablist', { name: /Spec-Driven SDLC Pipeline/i })
    expect(tablist).toBeInTheDocument()

    const tabs = screen.getAllByRole('tab')
    expect(tabs).toHaveLength(4)
    expect(tabs[0]).toHaveAttribute('aria-selected', 'true')
    expect(tabs[0]).toHaveTextContent(/Spec Engineering/i)
    expect(tabs[0]).toHaveTextContent(/spec\.md/i)
    expect(tabs[1]).toHaveTextContent(/Agentic Execution/i)
    expect(tabs[1]).toHaveTextContent(/AGENTS\.md/i)
    expect(tabs[2]).toHaveTextContent(/Hybrid Verification/i)
    expect(tabs[2]).toHaveTextContent(/vitest/i)
    expect(tabs[3]).toHaveTextContent(/Optimization & Deploy/i)
    expect(tabs[3]).toHaveTextContent(/ci-cd\.yml/i)
  })

  it('switches active pipeline phase on click and supports ArrowRight / ArrowLeft keyboard navigation', () => {
    renderWithLang('en')

    const tabs = screen.getAllByRole('tab')
    const panel = screen.getByRole('tabpanel')

    expect(panel).toHaveTextContent(/Requirements & Context Auditing/i)

    // Keyboard ArrowRight advances from Phase 1 to Phase 2
    fireEvent.keyDown(tabs[0], { key: 'ArrowRight' })
    expect(tabs[1]).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('tabpanel')).toHaveTextContent(/Context Engineering & Guardrails/i)

    // Click Phase 3 directly
    fireEvent.click(tabs[2])
    expect(tabs[2]).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('tabpanel')).toHaveTextContent(/Static Analysis & Compiler Checks/i)

    // Keyboard ArrowLeft returns to Phase 2
    fireEvent.keyDown(tabs[2], { key: 'ArrowLeft' })
    expect(tabs[1]).toHaveAttribute('aria-selected', 'true')
  })

  it('inspects live production artifacts and quality stop-gates for each pipeline phase', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined)
    Object.assign(navigator, { clipboard: { writeText } })

    renderWithLang('en')

    // Phase 1 default Live Artifact shows EARS spec
    expect(screen.getByText(/WHEN the user clicks the reveal button/i)).toBeInTheDocument()

    // Copy snippet button works with accessible confirmation
    const copyBtn = screen.getByRole('button', { name: /Copy snippet/i })
    await act(async () => {
      fireEvent.click(copyBtn)
    })
    expect(writeText).toHaveBeenCalledTimes(1)
    expect(screen.getByRole('button', { name: /Copied/i })).toBeInTheDocument()

    // Switch inspector to Quality Stop-Gates checklist
    const gatesBtn = screen.getByRole('button', { name: /Quality Stop-Gates/i })
    fireEvent.click(gatesBtn)
    expect(screen.getByText(/EARS Requirements Syntax/i)).toBeInTheDocument()
    expect(screen.getAllByText(/PASS/i).length).toBeGreaterThanOrEqual(3)

    // Switch to Phase 3 (Hybrid Verification) and check TDD/axe-core live artifact
    const tabs = screen.getAllByRole('tab')
    fireEvent.click(tabs[2])
    const artifactBtn = screen.getByRole('button', { name: /Live Artifact/i })
    fireEvent.click(artifactBtn)
    expect(screen.getByText(/@axe-core\/playwright/i)).toBeInTheDocument()
  })

  it('simulates a full 4-stage pipeline execution when clicking Simulate Pipeline', () => {
    renderWithLang('en')

    const tabs = screen.getAllByRole('tab')
    const simulateBtn = screen.getByRole('button', { name: /Simulate Pipeline/i })

    fireEvent.click(simulateBtn)
    expect(screen.getByRole('button', { name: /Stop Simulation/i })).toBeInTheDocument()
    expect(tabs[0]).toHaveAttribute('aria-selected', 'true')

    act(() => {
      vi.advanceTimersByTime(2200)
    })
    expect(tabs[1]).toHaveAttribute('aria-selected', 'true')

    act(() => {
      vi.advanceTimersByTime(2200)
    })
    expect(tabs[2]).toHaveAttribute('aria-selected', 'true')

    act(() => {
      vi.advanceTimersByTime(2200)
    })
    expect(tabs[3]).toHaveAttribute('aria-selected', 'true')

    // After completing Phase 4, simulation finishes automatically
    act(() => {
      vi.advanceTimersByTime(2200)
    })
    expect(screen.getByRole('button', { name: /Simulate Pipeline/i })).toBeInTheDocument()
  })

  it('dispatches open-ai-chat event when clicking Ask RAG AI about SDD & TDD', () => {
    const listener = vi.fn()
    window.addEventListener('open-ai-chat', listener)

    renderWithLang('en')
    const askBtn = screen.getByRole('button', { name: /Ask AI Assistant about SDD/i })
    fireEvent.click(askBtn)

    expect(listener).toHaveBeenCalledTimes(1)
    window.removeEventListener('open-ai-chat', listener)
  })
})
