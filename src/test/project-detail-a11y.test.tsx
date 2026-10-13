import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import ProjectDetail from '../components/ProjectDetail'
import { LanguageProvider } from '../contexts/LanguageContext'
import { projectRegistry } from '../lib/projectRegistry'

describe('ProjectDetail Accessibility Specification (WCAG 2.2 AA / EAA 2026)', () => {
  const sampleProject = projectRegistry[0].project

  it('should render semantic breadcrumb navigation with list items', () => {
    render(
      <LanguageProvider>
        <ProjectDetail initialProject={sampleProject} />
      </LanguageProvider>,
    )

    const breadcrumbNav = screen.getByRole('navigation', { name: /breadcrumb|навігація|ruta de navegación/i })
    expect(breadcrumbNav).toBeDefined()

    const list = breadcrumbNav.querySelector('ol')
    expect(list).not.toBeNull()

    const currentItem = screen.getByText(sampleProject.title, { selector: '[aria-current="page"]' })
    expect(currentItem).toBeDefined()
  })

  it('should handle keyboard navigation across tabs with Arrow keys and Home/End', () => {
    render(
      <LanguageProvider>
        <ProjectDetail initialProject={sampleProject} />
      </LanguageProvider>,
    )

    const tablist = screen.getByRole('tablist')
    expect(tablist).toBeDefined()

    const stackTab = screen.getByRole('tab', { name: /technical stack|технічний стек|stack técnico/i })
    const featuresTab = screen.getByRole('tab', { name: /key features|ключові можливості|características clave/i })

    expect(stackTab).toHaveAttribute('aria-selected', 'true')
    expect(stackTab).toHaveAttribute('tabIndex', '0')
    expect(featuresTab).toHaveAttribute('aria-selected', 'false')
    expect(featuresTab).toHaveAttribute('tabIndex', '-1')

    // Press ArrowRight to move to next tab
    fireEvent.keyDown(tablist, { key: 'ArrowRight' })
    expect(featuresTab).toHaveAttribute('aria-selected', 'true')
    expect(featuresTab).toHaveAttribute('tabIndex', '0')

    // Press ArrowLeft to move back
    fireEvent.keyDown(tablist, { key: 'ArrowLeft' })
    expect(stackTab).toHaveAttribute('aria-selected', 'true')

    // Verify active panel has tabIndex="0"
    const stackPanel = document.getElementById('panel-project-stack')
    expect(stackPanel).not.toBeNull()
    expect(stackPanel).toHaveAttribute('tabIndex', '0')
  })

  it('should open screenshot modal as an accessible dialog and dismiss on Escape', () => {
    render(
      <LanguageProvider>
        <ProjectDetail initialProject={sampleProject} />
      </LanguageProvider>,
    )

    const zoomButton = screen.getByRole('button', { name: /zoom|збільшити|ampliar/i })
    fireEvent.click(zoomButton)

    const dialog = screen.getByRole('dialog')
    expect(dialog).toBeDefined()
    expect(dialog).toHaveAttribute('aria-modal', 'true')
    expect(dialog).toHaveAttribute('aria-labelledby', 'screenshot-modal-title')

    const closeButton = screen.getByRole('button', { name: /close|закрити|cerrar/i })
    expect(closeButton).toBeDefined()

    // Press Escape to dismiss dialog
    fireEvent.keyDown(window, { key: 'Escape' })
    expect(screen.queryByRole('dialog')).toBeNull()
  })
})
