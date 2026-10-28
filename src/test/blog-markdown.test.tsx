import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import MarkdownRenderer from '../components/blog/MarkdownRenderer'

describe('MarkdownRenderer Specification (TDD)', () => {
  it('should render GFM tables into semantic HTML table elements', () => {
    const markdownWithTable = `
### Architecture Comparison

| Metric | Next.js 16 | Headless WP |
|:---|:---|:---|
| First Contentful Paint | 0.3s | 1.1s |
| Memory Footprint | 28 MB | 140 MB |
`
    const { container } = render(<MarkdownRenderer content={markdownWithTable} />)

    const table = container.querySelector('table')
    expect(table).not.toBeNull()

    const headers = container.querySelectorAll('th')
    expect(headers.length).toBe(3)
    expect(headers[0].textContent).toBe('Metric')
    expect(headers[1].textContent).toBe('Next.js 16')
    expect(headers[2].textContent).toBe('Headless WP')

    const rows = container.querySelectorAll('tbody tr')
    expect(rows.length).toBe(2)
    expect(screen.getAllByText('First Contentful Paint')).toHaveLength(2)
    expect(screen.getAllByText('0.3s')).toHaveLength(2)

    // Verify mobile responsive card view
    const mobileCards = container.querySelectorAll('.sm\\:hidden > div')
    expect(mobileCards.length).toBe(2)
  })

  it('should render headings with semantic tags', () => {
    const content = `
# Level 1 Heading
## Level 2 Heading
### Level 3 Heading
#### Level 4 Heading
`
    const { container } = render(<MarkdownRenderer content={content} />)
    expect(container.querySelector('h1')?.textContent).toBe('Level 1 Heading')
    expect(container.querySelector('h2')?.textContent).toBe('Level 2 Heading')
    expect(container.querySelector('h3')?.textContent).toBe('Level 3 Heading')
    expect(container.querySelector('h4')?.textContent).toBe('Level 4 Heading')
  })

  it('should render bold text, inline code, and lists', () => {
    const content = `
- **Bold Item**: with \`inline code\`
- Standard Item
`
    const { container } = render(<MarkdownRenderer content={content} />)
    expect(container.querySelector('strong')?.textContent).toBe('Bold Item')
    expect(container.querySelector('code')?.textContent).toBe('inline code')
    expect(container.querySelectorAll('li').length).toBe(2)
  })

  it('should render fenced code blocks with language badge and copy button', () => {
    const content = `
\`\`\`ts
function test(): void {
  console.log("hello");
}
\`\`\`
`
    const { container } = render(<MarkdownRenderer content={content} />)
    expect(container.querySelector('pre')).not.toBeNull()
    expect(screen.getByText('TS')).not.toBeNull()
    expect(screen.getByRole('button', { name: /copy/i })).not.toBeNull()
  })

  it('should render sequential step badges for numbered step items', () => {
    const content = `
1. Stage 1: Lexical Analysis
2. Stage 2: Cosine Similarity
`
    const { container } = render(<MarkdownRenderer content={content} />)
    const steps = container.querySelectorAll('span.rounded-xl')
    expect(steps.length).toBe(2)
    expect(steps[0].textContent).toBe('1')
    expect(steps[1].textContent).toBe('2')
    expect(screen.getByText('Stage 1: Lexical Analysis')).not.toBeNull()
  })

  it('should contain zero em dashes', () => {
    const content = `
## Architectural Deep Dive
Comparing monolithic vs microservices - zero compromises.
`
    const { container } = render(<MarkdownRenderer content={content} />)
    expect(container.innerHTML).not.toContain('—')
    expect(container.innerHTML).not.toContain('–')
  })
})
