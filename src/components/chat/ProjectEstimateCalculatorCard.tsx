'use client'

import React, { useState, useId } from 'react'
import { Calculator, Clock, Layers, ArrowRight, CheckSquare, Square } from 'lucide-react'

interface ProjectEstimateCalculatorCardProps {
  locale?: 'en' | 'ua' | 'es'
  onNavigateToContact?: () => void
}

type ArchetypeKey = 'landing' | 'business' | 'ecommerce' | 'webapp'
type AddonKey = 'i18n' | 'ragAi' | 'headless' | 'seoPseo'

const LABELS = {
  en: {
    badge: 'Interactive Project Timeline Estimator',
    title: 'Estimate Scope & Timeline for Your Project',
    archetypeTitle: '1. Select Project Type',
    archetypes: {
      landing: 'Landing / Promo',
      business: 'Corporate / Business',
      ecommerce: 'E-Commerce Store',
      webapp: 'Web App / SaaS',
    },
    addonsTitle: '2. Select Features & Modules',
    addons: {
      i18n: '3-Language i18n (EN/UA/ES)',
      ragAi: 'Hybrid RAG AI Assistant',
      headless: 'Headless CMS Architecture',
      seoPseo: 'Programmatic SEO & Schema.org',
    },
    timelineLabel: 'Estimated Development Timeline',
    recommendedStack: 'Recommended Architecture',
    phasesTitle: 'Phased SDD Delivery Roadmap',
    phases: [
      'Discovery & Spec Architecture (SDD)',
      'UI/UX Prototyping & Design System',
      'Core Engineering & TDD Test Coverage',
      'CWV Optimization, Security & Production Launch',
    ],
    cta: 'Discuss My Project & Request Proposal',
  },
  ua: {
    badge: 'Інтерактивний калькулятор термінів',
    title: 'Оцініть обсяг та терміни розробки вашого проєкту',
    archetypeTitle: '1. Оберіть тип проєкту',
    archetypes: {
      landing: 'Лендінг / Промо',
      business: 'Корпоративний сайт',
      ecommerce: 'Інтернет-магазин',
      webapp: 'Веб-додаток / SaaS',
    },
    addonsTitle: '2. Оберіть додаткові модулі',
    addons: {
      i18n: 'Мультимовність (EN/UA/ES)',
      ragAi: 'Вбудований Hybrid RAG AI-асистент',
      headless: 'Headless CMS архітектура',
      seoPseo: 'Програмне SEO та Schema.org',
    },
    timelineLabel: 'Орієнтовний термін розробки',
    recommendedStack: 'Рекомендована архітектура',
    phasesTitle: 'Поетапний SDD план реалізації',
    phases: [
      'Аналітика, ТЗ та специфікація (SDD)',
      'UI/UX прототип та дизайн-система',
      'Розробка коду з TDD покриттям тестами',
      'CWV оптимізація, DevSecOps та реліз',
    ],
    cta: 'Обговорити проєкт та отримати пропозицію',
  },
  es: {
    badge: 'Calculadora de Tiempos de Proyecto',
    title: 'Calcula el alcance y cronograma para tu proyecto',
    archetypeTitle: '1. Selecciona el tipo de proyecto',
    archetypes: {
      landing: 'Landing / Promoción',
      business: 'Sitio Corporativo',
      ecommerce: 'Tienda Online',
      webapp: 'Aplicación Web / SaaS',
    },
    addonsTitle: '2. Selecciona módulos adicionales',
    addons: {
      i18n: 'Multiidioma 3 idiomas (EN/UA/ES)',
      ragAi: 'Asistente IA Hybrid RAG',
      headless: 'Arquitectura Headless CMS',
      seoPseo: 'SEO Programático y Schema.org',
    },
    timelineLabel: 'Cronograma estimado de desarrollo',
    recommendedStack: 'Arquitectura recomendada',
    phasesTitle: 'Fases de entrega ágil con SDD',
    phases: [
      'Descubrimiento y especificación (SDD)',
      'Prototipado UI/UX y sistema de diseño',
      'Desarrollo central con cobertura TDD',
      'Optimización CWV, seguridad y despliegue',
    ],
    cta: 'Consultar mi proyecto y solicitar propuesta',
  },
} as const

const BASE_TIMELINES: Record<ArchetypeKey, { minWeeks: number; maxWeeks: number; stack: string }> = {
  landing: {
    minWeeks: 1,
    maxWeeks: 2,
    stack: 'Next.js 16 / Custom WordPress + Tailwind CSS',
  },
  business: {
    minWeeks: 2,
    maxWeeks: 4,
    stack: 'Custom WordPress PHP 8+ / Headless WP + Next.js',
  },
  ecommerce: {
    minWeeks: 3,
    maxWeeks: 6,
    stack: 'Shopify Liquid / WooCommerce / Next.js Commerce',
  },
  webapp: {
    minWeeks: 4,
    maxWeeks: 8,
    stack: 'Next.js 16 App Router + TypeScript + Supabase / PostgreSQL',
  },
}

export default function ProjectEstimateCalculatorCard({
  locale = 'en',
  onNavigateToContact,
}: ProjectEstimateCalculatorCardProps) {
  const [archetype, setArchetype] = useState<ArchetypeKey>('business')
  const [selectedAddons, setSelectedAddons] = useState<Set<AddonKey>>(
    new Set(['i18n', 'seoPseo']),
  )
  const baseId = useId()

  const t = LABELS[locale] || LABELS.en
  const base = BASE_TIMELINES[archetype]

  const toggleAddon = (key: AddonKey) => {
    setSelectedAddons((prev) => {
      const next = new Set(prev)
      if (next.has(key)) {
        next.delete(key)
      } else {
        next.add(key)
      }
      return next
    })
  }

  // Calculate dynamic weeks
  let extraWeeks = 0
  if (selectedAddons.has('i18n')) extraWeeks += 0.5
  if (selectedAddons.has('ragAi')) extraWeeks += 1.5
  if (selectedAddons.has('headless')) extraWeeks += 1
  if (selectedAddons.has('seoPseo')) extraWeeks += 0.5

  const totalMin = Math.max(1, Math.round(base.minWeeks + Math.floor(extraWeeks)))
  const totalMax = Math.round(base.maxWeeks + Math.ceil(extraWeeks))

  const timelineText =
    locale === 'ua'
      ? `${totalMin}-${totalMax} тижнів`
      : locale === 'es'
        ? `${totalMin}-${totalMax} semanas`
        : `${totalMin}-${totalMax} weeks`

  const handleContactClick = () => {
    onNavigateToContact?.()
    if (typeof document !== 'undefined') {
      const contactSection = document.getElementById('contact')
      if (contactSection && typeof contactSection.scrollIntoView === 'function') {
        contactSection.scrollIntoView({ behavior: 'smooth' })
      } else if (
        typeof window !== 'undefined' &&
        Boolean((window as unknown as { __IS_PORTFOLIO_SPA__?: boolean }).__IS_PORTFOLIO_SPA__)
      ) {
        window.dispatchEvent(new CustomEvent('navigate-to-section', { detail: 'contact' }))
      } else if (typeof window !== 'undefined') {
        window.location.assign(`/${locale}#contact`)
      }
    }
  }

  return (
    <div className="mt-3 p-4 rounded-2xl bg-gradient-to-br from-indigo-50/90 via-purple-50/70 to-slate-50 dark:from-slate-900/95 dark:via-slate-900 dark:to-slate-800/90 border border-purple-200/70 dark:border-lime-500/25 shadow-sm text-left space-y-3.5">
      <div className="flex items-center gap-2">
        <Calculator className="w-4 h-4 text-purple-600 dark:text-lime-400 shrink-0" aria-hidden="true" />
        <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 dark:text-lime-400">
          {t.badge}
        </span>
      </div>

      <div>
        <h4 className="text-xs font-bold text-slate-900 dark:text-white">
          {t.title}
        </h4>
      </div>

      {/* 1. Archetype selection */}
      <div className="space-y-1.5">
        <div className="text-[11px] font-semibold text-slate-700 dark:text-slate-300">
          {t.archetypeTitle}
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          {(['landing', 'business', 'ecommerce', 'webapp'] as const).map((key) => {
            const isSelected = archetype === key
            return (
              <button
                key={key}
                type="button"
                onClick={() => setArchetype(key)}
                className={`p-2 text-left rounded-xl text-[11px] font-semibold transition-all cursor-pointer border focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-purple-700 dark:focus-visible:outline-lime-400 ${
                  isSelected
                    ? 'bg-purple-600 text-white dark:bg-lime-500 dark:text-slate-950 border-purple-600 dark:border-lime-500 shadow-xs'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200/70 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-slate-750'
                }`}
              >
                {t.archetypes[key]}
              </button>
            )
          })}
        </div>
      </div>

      {/* 2. Features and Add-ons */}
      <div className="space-y-1.5">
        <div className="text-[11px] font-semibold text-slate-700 dark:text-slate-300">
          {t.addonsTitle}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
          {(['i18n', 'ragAi', 'headless', 'seoPseo'] as const).map((key) => {
            const isChecked = selectedAddons.has(key)
            const inputId = `${baseId}-addon-${key}`
            return (
              <label
                key={key}
                htmlFor={inputId}
                className={`flex items-center gap-2 p-2 rounded-xl text-[11px] font-medium transition-all cursor-pointer border select-none ${
                  isChecked
                    ? 'bg-purple-50 dark:bg-lime-500/10 text-purple-900 dark:text-lime-300 border-purple-200 dark:border-lime-500/30'
                    : 'bg-white dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 border-slate-200/60 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-slate-750'
                }`}
              >
                <input
                  id={inputId}
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggleAddon(key)}
                  className="sr-only"
                />
                {isChecked ? (
                  <CheckSquare className="w-3.5 h-3.5 text-purple-600 dark:text-lime-400 shrink-0" aria-hidden="true" />
                ) : (
                  <Square className="w-3.5 h-3.5 text-slate-400 shrink-0" aria-hidden="true" />
                )}
                <span>{t.addons[key]}</span>
              </label>
            )
          })}
        </div>
      </div>

      {/* 3. Output result display */}
      <div className="p-3 bg-white dark:bg-slate-800/90 rounded-xl border border-slate-200/50 dark:border-white/5 space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-300">
            <Clock className="w-3.5 h-3.5 text-purple-600 dark:text-lime-400 shrink-0" aria-hidden="true" />
            <span className="font-semibold">{t.timelineLabel}:</span>
          </div>
          <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-purple-100 dark:bg-lime-500/15 text-purple-700 dark:text-lime-400 border border-purple-200/60 dark:border-lime-500/30">
            {timelineText}
          </span>
        </div>

        <div className="pt-1.5 border-t border-slate-100 dark:border-white/5 text-[11px] text-slate-600 dark:text-slate-300">
          <div className="flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-emerald-500 shrink-0" aria-hidden="true" />
            <span className="font-semibold text-slate-800 dark:text-slate-200">{t.recommendedStack}:</span>
          </div>
          <div className="mt-0.5 pl-5 text-slate-500 dark:text-slate-400">
            {base.stack}
          </div>
        </div>

        <div className="pt-1.5 border-t border-slate-100 dark:border-white/5">
          <div className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
            {t.phasesTitle}
          </div>
          <ol className="list-decimal list-inside space-y-0.5 text-[10px] text-slate-600 dark:text-slate-300">
            {t.phases.map((phase, idx) => (
              <li key={idx} className="leading-snug">{phase}</li>
            ))}
          </ol>
        </div>
      </div>

      {/* 4. Action CTA */}
      <div className="pt-0.5">
        <button
          type="button"
          onClick={handleContactClick}
          className="w-full inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-purple-600 hover:bg-purple-700 dark:bg-lime-500 dark:hover:bg-lime-400 text-white dark:text-slate-950 shadow-sm transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-700 dark:focus-visible:outline-lime-400"
        >
          <span>{t.cta}</span>
          <ArrowRight className="w-3 h-3" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
