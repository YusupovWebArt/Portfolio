import React from 'react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Projects from '../components/Projects'
import { LanguageProvider } from '../contexts/LanguageContext'
import { getProjectBySlug, matchesProjectSearch, getProjectTechList } from '../lib/projects'

describe('Featured Projects Search & Filtering Specification (TDD)', () => {
  beforeEach(() => {
    sessionStorage.clear()
  })
  it('getProjectTechList should extract technologies from all 10 categories including seo, analytics, technicalOptimization, digitalMarketing', () => {
    const wpskills = getProjectBySlug('fullstack-ai-lab')
    expect(wpskills).toBeDefined()
    if (!wpskills) return

    const techList = getProjectTechList(wpskills)
    const techNames = techList.map((t) => (typeof t === 'string' ? t : `${t.short} ${t.full || ''}`)).join(' ')

    expect(techNames).toContain('Next.js 16')
    expect(techNames).toContain('Schema.org')
    expect(techNames).toContain('Core Web Vitals')
  })

  it('matchesProjectSearch should support multi-word tokenized queries across different fields', () => {
    const wpskills = getProjectBySlug('fullstack-ai-lab')
    const itMagic = getProjectBySlug('it-magic')
    expect(wpskills).toBeDefined()
    expect(itMagic).toBeDefined()
    if (!wpskills || !itMagic) return

    // Multi-word across tech stack and description
    expect(matchesProjectSearch(wpskills, 'Next.js Supabase')).toBe(true)
    expect(matchesProjectSearch(wpskills, 'nextjs rust mdx')).toBe(true)
    expect(matchesProjectSearch(wpskills, 'NotebookLM Audio')).toBe(true)
    expect(matchesProjectSearch(itMagic, 'WordPress AWS')).toBe(true)

    // Non-matching multi-word query
    expect(matchesProjectSearch(wpskills, 'Next.js Shopify')).toBe(false)
  })

  it('should filter projects in UI with multi-word queries and show cross-category recovery CTA when needed', () => {
    const onSelect = vi.fn()
    render(
      <LanguageProvider>
        <Projects onProjectSelect={onSelect} />
      </LanguageProvider>,
    )

    // Ensure category buttons do NOT have numerical counters
    const nextjsTab = screen.getByRole('button', { name: 'Next.js' })
    expect(nextjsTab.textContent).toBe('Next.js')

    const searchInput = screen.getByRole('textbox')
    fireEvent.change(searchInput, { target: { value: 'Next.js Supabase' } })

    expect(screen.getByText('Fullstack AI Lab')).toBeDefined()

    // Switch to Shopify tab while searching for Next.js Supabase
    const shopifyTab = screen.getByRole('button', { name: 'Shopify' })
    fireEvent.click(shopifyTab)

    // Should offer recovery button to show matches across all categories
    const showAllMatchesBtn = screen.getByRole('button', {
      name: /all categories|усіх категоріях|todas las categorías/i,
    })
    expect(showAllMatchesBtn).toBeDefined()

    fireEvent.click(showAllMatchesBtn)
    expect(screen.getByText('Fullstack AI Lab')).toBeDefined()
  })

  it('should render semantic links for project details that support both href and click handler', () => {
    const onSelect = vi.fn()
    render(
      <LanguageProvider>
        <Projects onProjectSelect={onSelect} />
      </LanguageProvider>,
    )

    const searchInput = screen.getByRole('textbox')
    fireEvent.change(searchInput, { target: { value: 'Fullstack AI Lab' } })

    const viewDetailsLinks = screen.getAllByRole('link', {
      name: /view details|детальніше|ver detalles/i,
    })
    expect(viewDetailsLinks.length).toBeGreaterThan(0)
    expect(viewDetailsLinks[0].getAttribute('href')).toContain('/projects/fullstack-ai-lab')

    fireEvent.click(viewDetailsLinks[0])
    expect(onSelect).toHaveBeenCalledWith(29100)
  })

  it('Fullstack AI Lab must only appear under Next.js and Personal categories, not under WordPress', () => {
    const fullstackProject = getProjectBySlug('fullstack-ai-lab')
    expect(fullstackProject).toBeDefined()
    expect(fullstackProject?.isPersonal).toBe(true)
    expect(fullstackProject?.category).toContain('nextjs')
    expect(fullstackProject?.category).not.toContain('wordpress')

    render(
      <LanguageProvider>
        <Projects onProjectSelect={vi.fn()} />
      </LanguageProvider>,
    )

    // Click WordPress category filter
    const wpTab = screen.getByRole('button', { name: /^WordPress/i })
    fireEvent.click(wpTab)
    expect(screen.queryByText('Fullstack AI Lab')).toBeNull()

    // Click Next.js category filter
    const nextTab = screen.getByRole('button', { name: /^Next\.js/i })
    fireEvent.click(nextTab)
    expect(screen.getByText('Fullstack AI Lab')).toBeDefined()

    // Click Personal Projects filter
    const personalTab = screen.getByRole('button', { name: /Personal Projects|Власні проєкти|Proyectos Propios/i })
    fireEvent.click(personalTab)
    expect(screen.getByText('Fullstack AI Lab')).toBeDefined()
  })
})
