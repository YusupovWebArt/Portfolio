'use client'

import React from 'react'
import Link from 'next/link'
import {
  LuArrowLeft as ArrowLeft,
  LuCookie as Cookie,
  LuSlidersHorizontal as Sliders,
  LuCalendar as Calendar,
  LuTable as TableIcon,
} from 'react-icons/lu'
import type { CookiePolicyPageData } from '../../data/legal/types'
import { useConsent } from '../../contexts/ConsentContext'

interface CookiePolicyViewProps {
  data: CookiePolicyPageData
  locale: 'en' | 'ua' | 'es'
}

export default function CookiePolicyView({ data, locale }: CookiePolicyViewProps) {
  const { openSettings } = useConsent()
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
            <Cookie className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
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

        {/* Interactive Consent Action Card */}
        <aside
          aria-label="Cookie preferences"
          className="mb-10 p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-purple-50/70 via-white to-slate-50 dark:from-purple-950/20 dark:via-slate-900/60 dark:to-slate-900 border border-purple-200/80 dark:border-purple-900/40 shadow-sm"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Sliders className="w-4 h-4 text-purple-600 dark:text-purple-400" aria-hidden="true" />
                <span>{data.interactiveSettingsLabel}</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-xl">
                {data.interactiveSettingsDesc}
              </p>
            </div>
            <button
              type="button"
              onClick={openSettings}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-purple-600 hover:bg-purple-700 dark:bg-lime-500 dark:text-slate-950 dark:hover:bg-lime-400 shadow transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500 shrink-0 cursor-pointer"
            >
              <Cookie className="w-4 h-4" aria-hidden="true" />
              <span>{data.openSettingsBtn}</span>
            </button>
          </div>
        </aside>

        {/* Cookie Table Section */}
        <section className="mb-10 p-6 sm:p-8 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-4 flex items-center gap-2">
            <TableIcon className="w-5 h-5 text-purple-600 dark:text-lime-400" aria-hidden="true" />
            <span>
              {locale === 'es'
                ? 'Relación de Cookies e Identificadores'
                : locale === 'ua'
                  ? 'Перелік файлів cookie та ідентифікаторів'
                  : 'Cookie & Storage Identifier Inventory'}
            </span>
          </h2>

          <div className="overflow-x-auto mt-4 -mx-4 sm:mx-0">
            <div className="inline-block min-w-full align-middle">
              <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800 text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-100/80 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 font-semibold">
                    <th scope="col" className="px-4 py-3 rounded-l-lg">{data.tableHeaders.cookie}</th>
                    <th scope="col" className="px-4 py-3">{data.tableHeaders.provider}</th>
                    <th scope="col" className="px-4 py-3">{data.tableHeaders.purpose}</th>
                    <th scope="col" className="px-4 py-3">{data.tableHeaders.expiry}</th>
                    <th scope="col" className="px-4 py-3 rounded-r-lg">{data.tableHeaders.type}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200/70 dark:divide-slate-800/70">
                  {data.tableRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-100/40 dark:hover:bg-slate-800/40 transition-colors">
                      <td className="px-4 py-3 font-mono text-xs font-semibold text-purple-700 dark:text-lime-400 whitespace-nowrap">
                        {row.cookie}
                      </td>
                      <td className="px-4 py-3 text-slate-600 dark:text-slate-400 whitespace-nowrap">
                        {row.provider}
                      </td>
                      <td className="px-4 py-3 text-slate-700 dark:text-slate-300 min-w-[200px]">
                        {row.purpose}
                      </td>
                      <td className="px-4 py-3 text-slate-600 dark:text-slate-400 whitespace-nowrap">
                        {row.expiry}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-slate-200/70 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                          {row.type}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Informative Sections */}
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
