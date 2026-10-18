'use client'

import React, { useState } from 'react'
import { Layers, Zap, ShieldCheck, Gauge, ArrowRight, CheckCircle2 } from 'lucide-react'

interface StackComparisonCardProps {
  locale?: 'en' | 'ua' | 'es'
  onNavigateToContact?: () => void
}

type StackKey = 'nextjs' | 'headlessWp' | 'customWp' | 'shopify'

interface StackInfo {
  name: string
  tagline: string
  bestFor: string
  performance: string
  seoRating: string
  timeToMarket: string
  strengths: string[]
}

const LABELS = {
  en: {
    badge: 'Architecture Stack Comparison',
    title: 'Choose the Right Technology for Your Project',
    metrics: {
      performance: 'Speed & Core Web Vitals',
      seo: 'SEO & AI Search Visibility',
      timeToMarket: 'Time to Market',
      bestFor: 'Best Suited For',
    },
    cta: 'Discuss Architecture for My Project',
  },
  ua: {
    badge: 'Порівняння архітектурних стеків',
    title: 'Оберіть правильну технологію під вашу задачу',
    metrics: {
      performance: 'Швидкість та Core Web Vitals',
      seo: 'SEO та видимість в AI-пошуку',
      timeToMarket: 'Термін виходу на ринок',
      bestFor: 'Оптимально для',
    },
    cta: 'Обговорити архітектуру проєкту',
  },
  es: {
    badge: 'Comparativa de Arquitecturas Web',
    title: 'Elige la tecnología adecuada para tu proyecto',
    metrics: {
      performance: 'Velocidad y Core Web Vitals',
      seo: 'SEO y visibilidad en IA',
      timeToMarket: 'Tiempo de desarrollo',
      bestFor: 'Ideal para',
    },
    cta: 'Consultar arquitectura para mi proyecto',
  },
} as const

const STACKS: Record<'en' | 'ua' | 'es', Record<StackKey, StackInfo>> = {
  en: {
    nextjs: {
      name: 'Next.js 16 (App Router)',
      tagline: 'Modern React Server Components, TypeScript & Edge Compute',
      bestFor: 'SaaS, high-traffic portals, web apps, AI/RAG integrations',
      performance: '98-100 (Sub-second LCP & INP)',
      seoRating: 'Top tier (SSR, RSC, dynamic JSON-LD)',
      timeToMarket: '3-6 weeks (Agile SDD cycle)',
      strengths: ['Ultimate Lighthouse score', 'Full TypeScript type safety', 'Built-in hybrid API endpoints'],
    },
    headlessWp: {
      name: 'Headless WordPress',
      tagline: 'WordPress CMS + Decoupled Next.js / React Frontend',
      bestFor: 'Media blogs, enterprise brand portals with editorial workflows',
      performance: '95-99 (Decoupled static cache)',
      seoRating: 'Excellent (Next.js SSR + WP metadata)',
      timeToMarket: '4-7 weeks',
      strengths: ['Familiar WP editorial panel', 'Uncompromising frontend speed', 'Bank-grade headless security'],
    },
    customWp: {
      name: 'Custom WordPress (PHP 8+)',
      tagline: 'Tailored PHP 8+ Theme, ACF Pro, Vite & Tailwind CSS',
      bestFor: 'Corporate websites, service catalogues, fast client delivery',
      performance: '90-95 (Clean code, no heavy plugins)',
      seoRating: 'High (RankMath / Yoast + Schema.org)',
      timeToMarket: '2-4 weeks',
      strengths: ['Effortless client content management', 'Zero monthly SaaS fees', 'Rich WordPress plugin ecosystem'],
    },
    shopify: {
      name: 'Shopify Store',
      tagline: 'Liquid Theme Customization, Storefront API & Checkout',
      bestFor: 'E-commerce brands, retail products, international payments',
      performance: '85-92 (Shopify global CDN)',
      seoRating: 'Solid (Product Schema + Open Graph)',
      timeToMarket: '2-5 weeks',
      strengths: ['Turnkey payment gateways & taxes', 'Robust inventory management', 'Fast customer checkout'],
    },
  },
  ua: {
    nextjs: {
      name: 'Next.js 16 (App Router)',
      tagline: 'Сучасні React Server Components, TypeScript та Edge Compute',
      bestFor: 'SaaS, високонавантажені портали, веб-додатки, AI/RAG інтеграції',
      performance: '98-100 (Субсекундний LCP та INP)',
      seoRating: 'Максимальний (SSR, RSC, динамічний JSON-LD)',
      timeToMarket: '3-6 тижнів (SDD спринти)',
      strengths: ['Найвищий бал Lighthouse', 'Повна типізація TypeScript', 'Вбудовані гібридні API роути'],
    },
    headlessWp: {
      name: 'Headless WordPress',
      tagline: 'WordPress CMS + Окремий фронтенд на Next.js / React',
      bestFor: 'Медіа-ресурси, корпоративні сайти з редакторською командою',
      performance: '95-99 (Розділене статичне кешування)',
      seoRating: 'Відмінний (Next.js SSR + WP метадані)',
      timeToMarket: '4-7 тижнів',
      strengths: ['Звична панель редактора WP', 'Безкомпромісна швидкість фронтенду', 'Банківський рівень безпеки'],
    },
    customWp: {
      name: 'Кастомний WordPress (PHP 8+)',
      tagline: 'Індивідуальна тема на PHP 8+, ACF Pro, Vite та Tailwind CSS',
      bestFor: 'Корпоративні сайти, каталоги послуг, швидкий запуск',
      performance: '90-95 (Чистий код без зайвих плагінів)',
      seoRating: 'Високий (RankMath / Yoast + Schema.org)',
      timeToMarket: '2-4 тижні',
      strengths: ['Просте керування контентом', 'Без щомісячних абонплат', 'Величезна екосистема плагінів'],
    },
    shopify: {
      name: 'Shopify Інтернет-магазин',
      tagline: 'Кастомізація тем Liquid, Storefront API та чекаут',
      bestFor: 'E-commerce бренди, роздрібні товари, міжнародні продажі',
      performance: '85-92 (Глобальний CDN Shopify)',
      seoRating: 'Надійний (Product Schema + Open Graph)',
      timeToMarket: '2-5 тижнів',
      strengths: ['Готовий міжнародний чекаут', 'Зручний облік товарів та залишків', 'Швидка оплата покупцями'],
    },
  },
  es: {
    nextjs: {
      name: 'Next.js 16 (App Router)',
      tagline: 'React Server Components modernos, TypeScript y Edge Compute',
      bestFor: 'SaaS, portales de alto tráfico, aplicaciones web, asistentes IA',
      performance: '98-100 (LCP e INP subsegundo)',
      seoRating: 'Máximo nivel (SSR, RSC, JSON-LD dinámico)',
      timeToMarket: '3-6 semanas (Ciclos SDD ágiles)',
      strengths: ['Máxima puntuación Lighthouse', 'Seguridad de tipos con TypeScript', 'Endpoints API híbridos integrados'],
    },
    headlessWp: {
      name: 'Headless WordPress',
      tagline: 'Panel WordPress CMS + Frontend desacoplado en Next.js',
      bestFor: 'Blogs editoriales y portales corporativos con flujos de contenido',
      performance: '95-99 (Caché estática desacoplada)',
      seoRating: 'Excelente (SSR Next.js + metadatos WP)',
      timeToMarket: '4-7 semanas',
      strengths: ['Panel editorial familiar de WP', 'Velocidad de carga inmediata', 'Seguridad desacoplada reforzada'],
    },
    customWp: {
      name: 'WordPress Personalizado (PHP 8+)',
      tagline: 'Tema a medida en PHP 8+, ACF Pro, Vite y Tailwind CSS',
      bestFor: 'Sitios corporativos, catálogos de servicios y entrega rápida',
      performance: '90-95 (Código limpio sin sobrecarga de plugins)',
      seoRating: 'Alto (RankMath / Yoast + Schema.org)',
      timeToMarket: '2-4 semanas',
      strengths: ['Gestión sencilla por el cliente', 'Sin cuotas mensuales recurrentes', 'Ecosistema amplio de extensiones'],
    },
    shopify: {
      name: 'Tienda Shopify',
      tagline: 'Personalización Liquid, Storefront API y pasarela de pago',
      bestFor: 'Marcas de comercio electrónico, retail y ventas globales',
      performance: '85-92 (Red CDN global de Shopify)',
      seoRating: 'Sólido (Schema de productos + Open Graph)',
      timeToMarket: '2-5 semanas',
      strengths: ['Pasarelas de pago e impuestos listas', 'Gestión potente de inventario', 'Checkout rápido y seguro'],
    },
  },
}

export default function StackComparisonCard({
  locale = 'en',
  onNavigateToContact,
}: StackComparisonCardProps) {
  const [activeStack, setActiveStack] = useState<StackKey>('nextjs')
  const t = LABELS[locale] || LABELS.en
  const currentStacks = STACKS[locale] || STACKS.en
  const activeInfo = currentStacks[activeStack]

  const handleContactClick = () => {
    onNavigateToContact?.()
    if (typeof document !== 'undefined') {
      const contactSection = document.getElementById('contact')
      if (contactSection && typeof contactSection.scrollIntoView === 'function') {
        contactSection.scrollIntoView({ behavior: 'smooth' })
      } else if (typeof window !== 'undefined') {
        window.location.assign(`/${locale}#contact`)
      }
    }
  }

  return (
    <div className="mt-3 p-4 rounded-2xl bg-gradient-to-br from-purple-50/90 via-slate-50 to-indigo-50/70 dark:from-slate-900/95 dark:via-slate-900 dark:to-slate-800/90 border border-purple-200/70 dark:border-lime-500/25 shadow-sm text-left space-y-3.5">
      <div className="flex items-center gap-2">
        <Layers className="w-4 h-4 text-purple-600 dark:text-lime-400 shrink-0" aria-hidden="true" />
        <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 dark:text-lime-400">
          {t.badge}
        </span>
      </div>

      <div>
        <h4 className="text-xs font-bold text-slate-900 dark:text-white">
          {t.title}
        </h4>
      </div>

      {/* Stack Selector Pills */}
      <div
        role="tablist"
        aria-label={t.badge}
        className="flex flex-wrap gap-1.5 p-1 bg-white/80 dark:bg-slate-950/40 rounded-xl border border-slate-200/60 dark:border-white/5"
      >
        {(['nextjs', 'headlessWp', 'customWp', 'shopify'] as const).map((key) => {
          const isActive = activeStack === key
          const stack = currentStacks[key]
          return (
            <button
              key={key}
              role="tab"
              aria-selected={isActive}
              type="button"
              onClick={() => setActiveStack(key)}
              className={`px-2.5 py-1 text-[11px] font-semibold rounded-lg transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-purple-700 dark:focus-visible:outline-lime-400 ${
                isActive
                  ? 'bg-purple-600 text-white dark:bg-lime-500 dark:text-slate-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
              }`}
            >
              {stack.name.split(' (')[0]}
            </button>
          )
        })}
      </div>

      {/* Selected Stack Details */}
      <div className="p-3 bg-white dark:bg-slate-800/90 rounded-xl border border-slate-200/50 dark:border-white/5 space-y-2.5">
        <div>
          <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center justify-between">
            <span>{activeInfo.name}</span>
            <span className="text-[10px] font-semibold text-purple-600 dark:text-lime-400">
              {activeInfo.timeToMarket}
            </span>
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
            {activeInfo.tagline}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 border-t border-slate-100 dark:border-white/5 text-[11px]">
          <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
            <Gauge className="w-3.5 h-3.5 text-emerald-500 shrink-0" aria-hidden="true" />
            <span className="text-slate-500 dark:text-slate-400">{t.metrics.performance}:</span>
            <span className="font-semibold">{activeInfo.performance}</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
            <Zap className="w-3.5 h-3.5 text-amber-500 shrink-0" aria-hidden="true" />
            <span className="text-slate-500 dark:text-slate-400">{t.metrics.seo}:</span>
            <span className="font-semibold">{activeInfo.seoRating}</span>
          </div>
        </div>

        <div className="text-[11px] text-slate-600 dark:text-slate-300">
          <span className="font-semibold text-slate-800 dark:text-slate-200">
            {t.metrics.bestFor}:
          </span>{' '}
          {activeInfo.bestFor}
        </div>

        <ul className="space-y-1 pt-1 border-t border-slate-100 dark:border-white/5 text-[11px] text-slate-600 dark:text-slate-300">
          {activeInfo.strengths.map((str, idx) => (
            <li key={idx} className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3 h-3 text-purple-600 dark:text-lime-400 shrink-0" aria-hidden="true" />
              <span>{str}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action CTA */}
      <div className="pt-0.5">
        <button
          type="button"
          onClick={handleContactClick}
          className="w-full inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-purple-600 hover:bg-purple-700 dark:bg-lime-500 dark:hover:bg-lime-400 text-white dark:text-slate-950 shadow-sm transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-700 dark:focus-visible:outline-lime-400"
        >
          <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
          <span>{t.cta}</span>
          <ArrowRight className="w-3 h-3" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
