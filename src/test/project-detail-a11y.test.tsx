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

  it('should render Architecture & Case Study Deep-Dive link when deepDiveBlogSlug is defined', () => {
    const wpskillsProject = projectRegistry.find((e) => e.slug === 'fullstack-ai-lab')?.project
    expect(wpskillsProject).toBeDefined()

    render(
      <LanguageProvider>
        <ProjectDetail initialProject={wpskillsProject} />
      </LanguageProvider>,
    )

    const deepDiveLink = screen.getByRole('link', {
      name: /architecture & case study deep-dive|детальний розбір архітектури|análisis profundo de arquitectura/i,
    })
    expect(deepDiveLink).toBeDefined()
    expect(deepDiveLink.getAttribute('href')).toContain('/blog/fullstack-ai-lab-interactive-edtech-architecture')
  })

  it('should switch tabs when swiping horizontally across the content area', () => {
    const wpskillsProject = projectRegistry.find((e) => e.slug === 'fullstack-ai-lab')?.project
    expect(wpskillsProject).toBeDefined()

    render(
      <LanguageProvider>
        <ProjectDetail initialProject={wpskillsProject} />
      </LanguageProvider>,
    )

    const stackTab = screen.getByRole('tab', { name: /technical stack|технічний стек|stack técnico/i })
    const featuresTab = screen.getByRole('tab', { name: /key features|ключові можливості|características clave/i })
    expect(stackTab).toHaveAttribute('aria-selected', 'true')

    const stackPanel = document.getElementById('panel-project-stack')
    expect(stackPanel).not.toBeNull()
    const contentArea = stackPanel?.parentElement
    expect(contentArea).not.toBeNull()

    fireEvent.touchStart(contentArea, {
      touches: [{ clientX: 200, clientY: 100 }],
    })
    fireEvent.touchEnd(contentArea, {
      changedTouches: [{ clientX: 100, clientY: 100 }],
    })

    expect(featuresTab).toHaveAttribute('aria-selected', 'true')
  })

  it('should open screenshot modal when tapping directly on main carousel image', () => {
    render(
      <LanguageProvider>
        <ProjectDetail initialProject={sampleProject} />
      </LanguageProvider>,
    )

    const mainImage = screen.getByAltText(new RegExp(`${sampleProject.title} screenshot 1`, 'i'))
    fireEvent.click(mainImage)

    const dialog = screen.getByRole('dialog')
    expect(dialog).toBeDefined()
    expect(dialog).toHaveAttribute('aria-modal', 'true')

    const closeButton = screen.getByRole('button', { name: /close|закрити|cerrar/i })
    fireEvent.click(closeButton)
    expect(screen.queryByRole('dialog')).toBeNull()
  })

  it('should cycle carousel images when swiping horizontally on mobile', () => {
    render(
      <LanguageProvider>
        <ProjectDetail initialProject={sampleProject} />
      </LanguageProvider>,
    )

    const mainImage = screen.getByAltText(new RegExp(`${sampleProject.title} screenshot 1`, 'i'))
    const carouselContainer = mainImage.closest('.cursor-zoom-in')
    expect(carouselContainer).not.toBeNull()

    // Swipe left to advance to next screenshot
    fireEvent.touchStart(carouselContainer!, {
      touches: [{ clientX: 250, clientY: 100 }],
    })
    fireEvent.touchEnd(carouselContainer!, {
      changedTouches: [{ clientX: 100, clientY: 100 }],
    })

    const nextImage = screen.getByAltText(new RegExp(`${sampleProject.title} screenshot 2`, 'i'))
    expect(nextImage).toBeDefined()
  })
})
