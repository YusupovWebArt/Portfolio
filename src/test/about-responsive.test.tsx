import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import About from '../components/About'
import { LanguageProvider } from '../contexts/LanguageContext'

describe('About My Journey Mobile Responsive Specification (TDD)', () => {
  it('should render education and work experience cards with mobile-optimized wider layout classes', () => {
    const { container } = render(
      <LanguageProvider>
        <About />
      </LanguageProvider>,
    )

    // Check headings
    expect(screen.getByRole('heading', { level: 3, name: /My Journey|Мій професійний шлях|Mi trayectoria/i })).toBeDefined()
    expect(screen.getByRole('heading', { level: 4, name: /Education|Освіта|Educación/i })).toBeDefined()
    expect(screen.getByRole('heading', { level: 4, name: /Work Experience|Досвід роботи|Experiencia Laboral/i })).toBeDefined()

    // Timeline vertical lines: left-4 on mobile, sm:left-6 on tablet/desktop, centered with -translate-x-1/2
    const lines = container.querySelectorAll('.absolute.top-0.bottom-0.w-0\\.5')
    expect(lines.length).toBe(2)
    lines.forEach((line) => {
      expect(line.className).toContain('left-4')
      expect(line.className).toContain('sm:left-6')
      expect(line.className).toContain('-translate-x-1/2')
    })

    // Timeline circles: w-8 h-8 on mobile, sm:w-12 sm:h-12 on desktop, shrink-0
    const circles = container.querySelectorAll('.rounded-full.flex.items-center.justify-center.shadow-lg')
    expect(circles.length).toBeGreaterThan(0)
    circles.forEach((circle) => {
      expect(circle.className).toContain('w-8')
      expect(circle.className).toContain('h-8')
      expect(circle.className).toContain('sm:w-12')
      expect(circle.className).toContain('sm:h-12')
      expect(circle.className).toContain('shrink-0')
      expect(circle.className).toContain('text-[10px]')
    })

    // Content cards: ml-3 on mobile, sm:ml-6 on desktop, flex-1 min-w-0 for wider content
    const cardWrappers = container.querySelectorAll('.flex-1.min-w-0')
    expect(cardWrappers.length).toBe(circles.length)
    cardWrappers.forEach((wrapper) => {
      expect(wrapper.className).toContain('ml-3')
      expect(wrapper.className).toContain('sm:ml-6')
    })

    // Inner cards: p-4 on mobile, sm:p-6 on desktop, rounded-xl sm:rounded-2xl
    const innerCards = container.querySelectorAll('.rounded-xl.sm\\:rounded-2xl')
    expect(innerCards.length).toBe(circles.length)
    innerCards.forEach((card) => {
      expect(card.className).toContain('p-4')
      expect(card.className).toContain('sm:p-6')
    })
  })
})
