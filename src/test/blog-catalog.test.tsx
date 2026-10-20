import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import BlogCatalogView from '../components/blog/BlogCatalogView'
import { allBlogPosts } from '../data/blog'

describe('BlogCatalogView Specification (TDD)', () => {
  it('renders all 7 blog posts initially in English', () => {
    render(<BlogCatalogView locale="en" />)

    expect(screen.getByRole('heading', { name: /Engineering Blog & Architectural Deep Dives/i })).toBeDefined()
    expect(screen.getByText('All Engineering Articles')).toBeDefined()
    expect(screen.getByPlaceholderText(/Topic, Next.js, TCO.../i)).toBeDefined()

    // Flagship post title exists
    expect(screen.getByText(allBlogPosts[0].title.en)).toBeDefined()
  })

  it('filters articles by search query in real-time', () => {
    render(<BlogCatalogView locale="en" />)

    const searchInput = screen.getByPlaceholderText(/Topic, Next.js, TCO.../i)
    fireEvent.change(searchInput, { target: { value: 'Liquid' } })

    // Shopify article should appear
    expect(screen.getByText(/Shopify Liquid vs Custom WooCommerce/i)).toBeDefined()
    // WCAG article should NOT be visible
    expect(screen.queryByText(/WCAG 2.2 AA & European Accessibility Act/i)).toBeNull()

    // Clear search
    const clearBtn = screen.getByLabelText(/Clear search/i)
    fireEvent.click(clearBtn)
    expect(screen.getByText(/WCAG 2.2 AA & European Accessibility Act/i)).toBeDefined()
  })

  it('filters articles by clicking category pills in the sidebar', () => {
    render(<BlogCatalogView locale="en" />)

    const perfCategoryBtn = screen.getByRole('button', { name: /Performance & Core Web Vitals/i })
    fireEvent.click(perfCategoryBtn)

    // Performance article should be displayed
    expect(screen.getByText(/Reducing Bundle Size, Asset Pipelines/i)).toBeDefined()
    // Unrelated category should be filtered out
    expect(screen.queryByText(/Autonomous Hybrid RAG AI Engine in Browser/i)).toBeNull()
  })

  it('filters articles when clicking popular tech stack tags', () => {
    render(<BlogCatalogView locale="en" />)

    const shopifyTagBtn = screen.getByRole('button', { name: 'Shopify' })
    fireEvent.click(shopifyTagBtn)

    expect(screen.getByText(/Shopify Liquid vs Custom WooCommerce/i)).toBeDefined()
    expect(screen.queryByText(/Autonomous Hybrid RAG AI Engine in Browser/i)).toBeNull()
  })

  it('does NOT render truncated TL;DR box on catalog cards to avoid cluttered preview text', () => {
    render(<BlogCatalogView locale="en" />)

    // TL;DR label was removed from catalog preview cards in favor of production proof chips
    const tldrLabels = screen.queryAllByText('TL;DR')
    expect(tldrLabels.length).toBe(0)
  })

  it('renders Applied in Production project badges for verified case studies', () => {
    render(<BlogCatalogView locale="en" />)

    // Check that production proof badges are rendered
    expect(screen.getAllByText(/Applied in Production:/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText('Unitrition E-Commerce Platform').length).toBeGreaterThan(0)
  })

  it('dispatches open-ai-chat-context when clicking Ask AI Assistant in B2B Advisory card', () => {
    const listener = vi.fn()
    window.addEventListener('open-ai-chat-context', listener)

    render(<BlogCatalogView locale="en" />)

    const askAiBtn = screen.getByRole('button', { name: /Ask AI Assistant/i })
    fireEvent.click(askAiBtn)

    expect(listener).toHaveBeenCalledTimes(1)
    window.removeEventListener('open-ai-chat-context', listener)
  })
})
