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

  it('should render brand logo with single-line whitespace protection as an accessible home link', () => {
    renderHeader()

    const brandLink = screen.getByRole('link', { name: /Artur Yusupov - Portfolio Home/i })
    expect(brandLink).toBeDefined()
    expect(brandLink.className).toContain('whitespace-nowrap')
    expect(brandLink).toHaveAttribute('href', '/en')
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

  it('should render crawlable semantic links to Services and Blog for SEO crawlers', () => {
    renderHeader()

    const servicesLinks = screen.getAllByRole('link', { name: /services/i })
    expect(servicesLinks.length).toBeGreaterThan(0)
    expect(servicesLinks[0]).toHaveAttribute('href', '/en/services')

    const blogLinks = screen.getAllByRole('link', { name: /blog/i })
    expect(blogLinks.length).toBeGreaterThan(0)
    expect(blogLinks[0]).toHaveAttribute('href', '/en/blog')
  })

  it('should accurately highlight Blog as active section when on /blog URL', () => {
    // Mock pathname to /en/blog
    const originalLocation = window.location
    Object.defineProperty(window, 'location', {
      writable: true,
      value: { ...originalLocation, pathname: '/en/blog', hash: '' },
    })

    renderHeader()

    const blogLink = screen.getAllByRole('link', { name: /blog/i })[0]
    expect(blogLink).toHaveAttribute('aria-current', 'page')
    expect(blogLink.className).toContain('font-semibold')

    const homeLink = screen.getAllByRole('link', { name: /^home$/i })[0]
    expect(homeLink).not.toHaveAttribute('aria-current')

    // Restore location
    Object.defineProperty(window, 'location', {
      writable: true,
      value: originalLocation,
    })
  })

  it('should accurately highlight Services as active section when on /services URL', () => {
    const originalLocation = window.location
    Object.defineProperty(window, 'location', {
      writable: true,
      value: { ...originalLocation, pathname: '/en/services', hash: '' },
    })

    renderHeader()

    const servicesLink = screen.getAllByRole('link', { name: /services/i })[0]
    expect(servicesLink).toHaveAttribute('aria-current', 'page')
    expect(servicesLink.className).toContain('font-semibold')

    // Restore location
    Object.defineProperty(window, 'location', {
      writable: true,
      value: originalLocation,
    })
  })
});
