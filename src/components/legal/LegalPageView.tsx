'use client'

import React from 'react'
import Link from 'next/link'
import {
  LuArrowLeft as ArrowLeft,
  LuShieldCheck as ShieldCheck,
  LuCalendar as Calendar,
} from 'react-icons/lu'
import type { LegalPageData } from '../../data/legal/types'

interface LegalPageViewProps {
  data: LegalPageData
  locale: 'en' | 'ua' | 'es'
}

export default function LegalPageView({ data, locale }: LegalPageViewProps) {
  const backLabel =
    locale === 'es' ? 'Volver al Inicio' : locale === 'ua' ? 'На головну' : 'Back to Home'

  return (
    <article className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 pt-28 pb-20 selection:bg-purple-500 selection:text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-lime-400 transition-colors focus-visible:outline-2 focus-visible:outline-purple-500 rounded-md py-1 px-1.5 -ml-1.5"
          >
            <ArrowLeft className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>{backLabel}</span>
          </Link>
        </nav>

        {/* Page Header */}
        <header className="border-b border-slate-200 dark:border-slate-800 pb-8 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300 border border-purple-200 dark:border-purple-800/60 mb-4">
            <ShieldCheck className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span>{data.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            {data.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mt-4 leading-relaxed max-w-3xl">
            {data.subtitle}
          </p>

          <div className="flex items-center gap-2 mt-4 text-xs font-medium text-slate-500 dark:text-slate-400">
            <Calendar className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span>
              {data.lastUpdatedLabel}: <time dateTime={data.lastUpdatedDate}>{data.lastUpdatedDate}</time>
            </span>
          </div>
        </header>

        {/* Content Sections */}
        <div className="space-y-10">
          {data.sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 transition-colors"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
                {section.title}
              </h2>

              <div className="space-y-3 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                {section.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {section.bulletPoints && section.bulletPoints.length > 0 && (
                <ul className="mt-4 space-y-2 list-disc list-inside text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed pl-2">
                  {section.bulletPoints.map((point, pIdx) => (
                    <li key={pIdx} className="marker:text-purple-600 dark:marker:text-lime-400">
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>
    </article>
  )
}
