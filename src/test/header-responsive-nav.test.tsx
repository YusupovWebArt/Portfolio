import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Header from '../components/Header'
import { LanguageProvider } from '../contexts/LanguageContext'
import { ThemeProvider } from '../contexts/ThemeContext'

describe('Responsive Header & Mobile/Tablet Navigation Specification (TDD)', () => {
  const renderHeader = () =>
    render(
      <ThemeProvider>
        <LanguageProvider>
          <Header />
        </LanguageProvider>
      </ThemeProvider>,
    )

  it('should render brand logo with single-line whitespace protection', () => {
    renderHeader()

    const brandBtn = screen.getByRole('button', { name: /Artur Yusupov - Portfolio Home/i })
    expect(brandBtn).toBeDefined()
    expect(brandBtn.className).toContain('whitespace-nowrap')
  })

  it('should have accessible hamburger button that toggles mobile drawer', () => {
    renderHeader()

    const toggleBtn = screen.getByRole('button', { name: /Open navigation menu/i })
    expect(toggleBtn).toBeDefined()
    expect(toggleBtn).toHaveAttribute('aria-expanded', 'false')

    // Open mobile menu
    fireEvent.click(toggleBtn)
    expect(toggleBtn).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('navigation', { name: /Mobile Navigation/i })).toBeDefined()
    expect(document.getElementById('mobile-navigation')).not.toBeNull()

    // Close mobile menu
    fireEvent.click(toggleBtn)
    expect(toggleBtn).toHaveAttribute('aria-expanded', 'false')
    expect(document.getElementById('mobile-navigation')).toBeNull()
  })

  it('should close mobile menu on Escape key press', () => {
    renderHeader()

    const toggleBtn = screen.getByRole('button', { name: /Open navigation menu/i })
    fireEvent.click(toggleBtn)
    expect(document.getElementById('mobile-navigation')).not.toBeNull()

    // Press Escape
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(document.getElementById('mobile-navigation')).toBeNull()
  })

  it('should close mobile menu when clicking outside header', () => {
    renderHeader()

    const toggleBtn = screen.getByRole('button', { name: /Open navigation menu/i })
    fireEvent.click(toggleBtn)
    expect(document.getElementById('mobile-navigation')).not.toBeNull()

    // Click outside
    fireEvent.mouseDown(document.body)
    expect(document.getElementById('mobile-navigation')).toBeNull()
  })

  it('should render quick theme toggle and compact language switcher in header', () => {
    renderHeader()

    // Theme toggle buttons exist
    const themeBtns = screen.getAllByRole('button', { name: /switch to (dark|light) mode/i })
    expect(themeBtns.length).toBeGreaterThan(0)

    // Language buttons exist
    const langBtns = screen.getAllByRole('button', { name: /switch language/i })
    expect(langBtns.length).toBeGreaterThan(0)
  })
})
