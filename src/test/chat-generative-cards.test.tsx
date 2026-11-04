import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import StackComparisonCard from '../components/chat/StackComparisonCard'
import ProjectEstimateCalculatorCard from '../components/chat/ProjectEstimateCalculatorCard'
import ServiceRecommendationCard from '../components/chat/ServiceRecommendationCard'
import { resolveTargetService } from '../lib/ai/rag'
import { getServiceBySlug } from '../data/services'
import * as contactsModule from '../lib/contacts'

describe('Generative UI StackComparisonCard & ProjectEstimateCalculatorCard Specification (TDD)', () => {
  it('should render StackComparisonCard and allow switching between stacks', () => {
    const onNavigate = vi.fn()
    render(<StackComparisonCard locale="en" onNavigateToContact={onNavigate} />)

    expect(screen.getByText('Architecture Stack Comparison')).toBeInTheDocument()
    expect(screen.getByText('Choose the Right Technology for Your Project')).toBeInTheDocument()

    // Default active stack is Next.js
    expect(screen.getByText('Next.js 16 (App Router)')).toBeInTheDocument()
    expect(screen.getByText(/Sub-second LCP & INP/i)).toBeInTheDocument()

    // Switch to Headless WordPress
    const headlessTab = screen.getByRole('tab', { name: /Headless WordPress/i })
    fireEvent.click(headlessTab)

    expect(screen.getByText('WordPress CMS + Decoupled Next.js / React Frontend')).toBeInTheDocument()
    expect(screen.getByText(/Decoupled static cache/i)).toBeInTheDocument()

    // Click CTA button
    const ctaBtn = screen.getByRole('button', { name: /Discuss Architecture for My Project/i })
    fireEvent.click(ctaBtn)
    expect(onNavigate).toHaveBeenCalledTimes(1)
  })

  it('should render ProjectEstimateCalculatorCard and dynamically update estimated timeline', () => {
    const onNavigate = vi.fn()
    render(<ProjectEstimateCalculatorCard locale="en" onNavigateToContact={onNavigate} />)

    expect(screen.getByText('Interactive Project Timeline Estimator')).toBeInTheDocument()
    expect(screen.getByText('Estimate Scope & Timeline for Your Project')).toBeInTheDocument()

    // Default archetype is business (2-4 weeks) + i18n + seoPseo (+1 week) => 3-5 weeks
    expect(screen.getByText(/3-5 weeks/i)).toBeInTheDocument()

    // Switch archetype to E-Commerce
    const ecomBtn = screen.getByRole('button', { name: /E-Commerce Store/i })
    fireEvent.click(ecomBtn)

    // E-commerce (3-6 weeks) + 1 week addons => 4-7 weeks
    expect(screen.getByText(/4-7 weeks/i)).toBeInTheDocument()

    // Toggle AI Assistant addon
    const ragCheckbox = screen.getByRole('checkbox', { name: /Hybrid RAG AI Assistant/i })
    fireEvent.click(ragCheckbox)

    // Timeline expands with AI Assistant
    expect(screen.getByText(/5-9 weeks/i)).toBeInTheDocument()

    // Click CTA button
    const ctaBtn = screen.getByRole('button', { name: /Discuss My Project & Request Proposal/i })
    fireEvent.click(ctaBtn)
    expect(onNavigate).toHaveBeenCalledTimes(1)
  })

  it('should correctly classify user queries into B2B commercial services via resolveTargetService', () => {
    expect(resolveTargetService('necesito un partner de marca blanca para mi agencia')?.slug).toBe(
      'white-label-agency-partner',
    )
    expect(resolveTargetService('quiero migrar wordpress a next.js 16 headless')?.slug).toBe(
      'headless-wordpress-nextjs-migration',
    )
    expect(resolveTargetService('como mejorar el pagespeed y core web vitals')?.slug).toBe(
      'web-performance-core-web-vitals',
    )
    expect(resolveTargetService('desarrollo web a medida en sevilla')?.slug).toBe(
      'custom-web-development-seville',
    )
    expect(resolveTargetService('quiero un chatbot rag ai para empresas')?.slug).toBe(
      'rag-ai-assistants-business',
    )
    expect(resolveTargetService('que tiempo hace hoy')).toBeUndefined()
  })

  it('should render ServiceRecommendationCard with metrics and trigger WhatsApp action', () => {
    const service = getServiceBySlug('white-label-agency-partner')!
    expect(service).toBeDefined()

    const onNavigate = vi.fn()
    const openSpy = vi.spyOn(contactsModule, 'openWhatsAppDirect').mockImplementation(() => {})

    render(<ServiceRecommendationCard service={service} locale="es" onNavigate={onNavigate} />)

    expect(screen.getByText(service.content.es.title)).toBeInTheDocument()
    expect(screen.getByText(service.content.es.badge)).toBeInTheDocument()
    expect(screen.getByText(service.content.es.shortDesc)).toBeInTheDocument()

    // WhatsApp action
    const whatsappBtn = screen.getByRole('button', { name: /Consultar por WhatsApp/i })
    fireEvent.click(whatsappBtn)
    expect(openSpy).toHaveBeenCalledWith(service.content.es.whatsappMessage)

    openSpy.mockRestore()
  })
})
