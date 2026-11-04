'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  LuArrowLeft as ArrowLeft,
  LuArrowRight as ArrowRight,
  LuCircleCheck as CheckCircle2,
  LuChevronDown as ChevronDown,
  LuExternalLink as ExternalLink,
  LuPanelsTopLeft as Layout,
  LuZap as Zap,
  LuBot as Bot,
  LuLock as Lock,
  LuCodeXml as Code2,
} from 'react-icons/lu'
import { FaWhatsapp as WhatsappIcon } from 'react-icons/fa'
import type { ServiceItem, ServiceLocale } from '../../data/services/types'
import { openWhatsAppDirect } from '../../lib/contacts'
import { getProjectBySlug } from '../../lib/projects'
import GoogleAdsSavingsCalculator from './GoogleAdsSavingsCalculator'

interface ServiceDetailViewProps {
  service: ServiceItem
  locale: ServiceLocale
}

const iconMap = {
  LuLock: Lock,
  LuCodeXml: Code2,
  LuZap: Zap,
  LuPanelsTopLeft: Layout,
  LuBot: Bot,
}

export default function ServiceDetailView({
  service,
  locale,
}: ServiceDetailViewProps) {
  const content = service.content[locale] || service.content.en
  const Icon = iconMap[service.iconName] || Layout

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex((prev) => (prev === idx ? null : idx))
  }

  // Load relevant projects
  const relevantProjects = service.relevantProjectSlugs
    .map((slug) => ({ slug, project: getProjectBySlug(slug) }))
    .filter((p): p is { slug: string; project: NonNullable<typeof p.project> } => Boolean(p.project))

  const backToServicesLabel =
    locale === 'es' ? 'Todos los Servicios' : locale === 'ua' ? 'Усі послуги' : 'All Services'

  return (
    <article className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 pt-28 pb-24 selection:bg-purple-500 selection:text-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          <Link
            href={`/${locale}`}
            className="hover:text-purple-600 dark:hover:text-lime-400 transition-colors"
          >
            {locale === 'es' ? 'Inicio' : locale === 'ua' ? 'Головна' : 'Home'}
          </Link>
          <span>/</span>
          <Link
            href={`/${locale}/services`}
            className="hover:text-purple-600 dark:hover:text-lime-400 transition-colors"
          >
            {backToServicesLabel}
          </Link>
          <span>/</span>
          <span className="text-slate-800 dark:text-slate-200 font-medium truncate max-w-xs">
            {content.title}
          </span>
        </nav>

        {/* Hero Section */}
        <header className="mb-16 border-b border-slate-200 dark:border-slate-800 pb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-700 dark:bg-purple-950/70 dark:text-purple-300 border border-purple-200/60 dark:border-purple-800/60">
              <Icon className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{content.badge}</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight max-w-4xl">
            {content.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mt-5 leading-relaxed max-w-3xl">
            {content.heroLead}
          </p>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 max-w-4xl">
            {content.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-50/90 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-purple-600 dark:text-lime-400 mb-1">
                  {metric.value}
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-snug">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Primary Actions */}
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <button
              type="button"
              onClick={() => openWhatsAppDirect(content.whatsappMessage)}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
            >
              <WhatsappIcon className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>
                {locale === 'es'
                  ? 'Consultar Disponibilidad por WhatsApp'
                  : locale === 'ua'
                    ? 'Запитати у WhatsApp'
                    : 'Check Availability via WhatsApp'}
              </span>
            </button>

            <Link
              href={`/${locale}/services`}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>{backToServicesLabel}</span>
            </Link>
          </div>
        </header>

        {/* Section 1: Problems Solved */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-8">
            {locale === 'es'
              ? 'Desafíos Críticos que Resolvemos'
              : locale === 'ua'
                ? 'Критичні проблеми, які ми вирішуємо'
                : 'Key Business Challenges We Solve'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.problemsSolved.map((prob, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300 flex items-center justify-center font-bold text-sm mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  {prob.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {prob.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Deliverables */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-8">
            {locale === 'es'
              ? 'Alcance y Entregables Técnicos'
              : locale === 'ua'
                ? 'Обсяг робіт та технічні результати'
                : 'Scope of Work & Deliverables'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.deliverables.map((deliv, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm"
              >
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                  {deliv.title}
                </h3>
                <ul className="space-y-3">
                  {deliv.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-lime-400 shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Workflow Phases */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-8">
            {locale === 'es'
              ? 'Metodología de Trabajo y Fases'
              : locale === 'ua'
                ? 'Методологія та етапи розробки'
                : 'Execution Methodology & Phases'}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.workflowSteps.map((step, idx) => (
              <div
                key={idx}
                className="relative p-6 rounded-3xl bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80"
              >
                <div className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-lime-400 mb-2">
                  {step.step}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Optional Financial Calculator for Web Performance Service */}
        {service.slug === 'web-performance-core-web-vitals' && (
          <GoogleAdsSavingsCalculator locale={locale} />
        )}

        {/* Section 4: Relevant Live Case Studies */}
        {relevantProjects.length > 0 && (
          <section className="mb-16">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {locale === 'es'
                    ? 'Casos Reales Aplicados en Producción'
                    : locale === 'ua'
                      ? 'Реальні кейси з портфоліо'
                      : 'Verified Production Case Studies'}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                  {locale === 'es'
                    ? 'Proyectos de nuestra base de 71 casos reales que aplican esta tecnología.'
                    : locale === 'ua'
                      ? 'Проєкти з нашого каталогу 71 кейсу, створені за цими стандартами.'
                      : 'Real-world projects from our 71-case catalog built with these technologies.'}
                </p>
              </div>

              <Link
                href={`/${locale}#projects`}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-purple-600 dark:text-lime-400 hover:underline"
              >
                <span>{locale === 'es' ? 'Ver catálogo de 71 proyectos' : locale === 'ua' ? 'Усі 71 проєкт' : 'View all 71 projects'}</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relevantProjects.map(({ slug, project }) => (
                <Link
                  key={slug}
                  href={`/${locale}/projects/${slug}`}
                  className="group flex flex-col justify-between p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg hover:border-purple-300 dark:hover:border-lime-500/40 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 mb-2 font-medium">
                      <span>{project.category[0] || 'Web'}</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover:text-purple-600 dark:group-hover:text-lime-400 transition-colors" aria-hidden="true" />
                    </div>

                    <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-lime-400 transition-colors mb-2 line-clamp-1">
                      {project.title}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] font-semibold text-purple-600 dark:text-lime-400">
                    {locale === 'es' ? 'Ver análisis técnico ->' : locale === 'ua' ? 'Детальний розбір ->' : 'Case study ->'}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Section 5: FAQ Accordion */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-8">
            {locale === 'es'
              ? 'Preguntas Frecuentes'
              : locale === 'ua'
                ? 'Часті запитання'
                : 'Frequently Asked Questions'}
          </h2>

          <div className="space-y-4 max-w-4xl">
            {content.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-bold text-slate-900 dark:text-white text-base hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer"
                  >
                    <span className="pr-4">{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-purple-600 dark:text-lime-400' : 'text-slate-400'
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/60">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </section>

        {/* Section 6: Bottom Conversion Card */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/30 mb-4">
              {locale === 'es' ? 'Contacto Directo' : locale === 'ua' ? 'Прямий зв\'язок' : 'Direct Inquiry'}
            </span>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">
              {content.ctaHeadline}
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
              {content.ctaLead}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => openWhatsAppDirect(content.whatsappMessage)}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                <WhatsappIcon className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>
                  {locale === 'es'
                    ? 'Enviar Mensaje por WhatsApp'
                    : locale === 'ua'
                      ? 'Написати у WhatsApp'
                      : 'Send WhatsApp Message'}
                </span>
              </button>

              <Link
                href={`/${locale}#contact`}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl text-sm font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                <span>{locale === 'es' ? 'Ver otros canales de contacto' : locale === 'ua' ? 'Інші контакти' : 'Alternative Contacts'}</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </article>
  )
}
