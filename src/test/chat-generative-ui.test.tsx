import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import ProjectToolCard from '../components/chat/ProjectToolCard'

describe('Generative UI Project Cards Specification (TDD)', () => {
  it('should render interactive project card with thumbnail, case study link and badges', () => {
    render(
      <ProjectToolCard
        project={{
          slug: 'it-magic',
          title: 'IT-Magic',
          description: 'High-load AWS cloud infrastructure migration for enterprise client.',
          image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
          category: 'Wordpress',
          liveUrl: 'https://it-magic.com',
          githubUrl: 'https://github.com/example/it-magic',
        }}
        locale="en"
      />,
    )

    expect(screen.getByText('IT-Magic')).toBeDefined()
    expect(
      screen.getByText(/High-load AWS cloud infrastructure migration/i),
    ).toBeDefined()
    expect(screen.getByText('Wordpress')).toBeDefined()

    const link = screen.getByRole('link', { name: /View Case Study/i })
    expect(link.getAttribute('href')).toBe('/en/projects/it-magic')

    const liveLink = screen.getByRole('link', { name: /Live Demo/i })
    expect(liveLink.getAttribute('href')).toBe('https://it-magic.com')
  })
})
