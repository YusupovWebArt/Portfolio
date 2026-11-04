'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  LuArrowLeft as ArrowLeft,
  LuArrowRight as ArrowRight,
  LuBriefcase as Briefcase,
  LuBuilding2 as Building2,
  LuPanelsTopLeft as Layout,
  LuZap as Zap,
  LuBot as Bot,
  LuLock as Lock,
  LuCodeXml as Code2,
} from 'react-icons/lu'
import { FaWhatsapp as WhatsappIcon } from 'react-icons/fa'
import type { ServiceItem, ServiceLocale } from '../../data/services/types'
import { openWhatsAppDirect } from '../../lib/contacts'

interface ServiceCatalogViewProps {
  services: ServiceItem[]
  locale: ServiceLocale
}

const iconMap = {
  LuLock: Lock,
  LuCodeXml: Code2,
  LuZap: Zap,
  LuPanelsTopLeft: Layout,
  LuBot: Bot,
}

export default function ServiceCatalogView({
  services,
  locale,
}: ServiceCatalogViewProps) {
  const [filter, setFilter] = useState<'all' | 'agencies' | 'pymes'>('all')

  const backLabel =
    locale === 'es' ? 'Volver al Inicio' : locale === 'ua' ? 'На головну' : 'Back to Home'

  const catalogTitle =
    locale === 'es'
      ? 'Servicios B2B de Ingeniería Web y Desarrollo a Medida'
      : locale === 'ua'
        ? 'B2B Послуги веб-інженерії та розробки під ключ'
        : 'B2B Web Engineering & Custom Development Services'

  const catalogSubtitle =
    locale === 'es'
      ? 'Soluciones técnicas de alto impacto para agencias digitales, directores de tecnología y empresas en España. Desarrollos orientados a resultados, máxima velocidad y cumplimiento de accesibilidad europea.'
      : locale === 'ua'
        ? 'Високоефективні технічні рішення для digital-агенцій, технічних директорів та бізнесу в Іспанії. Фокус на вимірні результати, швидкість та європейську доступність.'
        : 'High-impact technical engineering solutions for digital agencies, CTOs, and businesses in Spain. Focused on measurable business outcomes, sub-second speed, and European accessibility compliance.'

  const tabLabels = {
    all: locale === 'es' ? 'Todos los Servicios' : locale === 'ua' ? 'Усі послуги' : 'All Services',
    agencies: locale === 'es' ? 'Para Agencias (Marca Blanca)' : locale === 'ua' ? 'Для агенцій (White-Label)' : 'For Agencies (White-Label)',
    pymes: locale === 'es' ? 'Para Empresas y Clínicas' : locale === 'ua' ? 'Для бізнесу та клінік' : 'For Businesses & Clinics',
  }

  const filteredServices = services.filter((s) => {
    if (filter === 'all') return true
    return s.audience === filter || s.audience === 'both'
  })

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 pt-28 pb-24 selection:bg-purple-500 selection:text-white">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Header Section */}
        <header className="text-center max-w-4xl mx-auto mb-14">
          <div className="inline-block px-5 py-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-lime-500/10 dark:to-lime-600/10 text-purple-700 dark:text-lime-400 rounded-full text-xs font-bold uppercase tracking-wider mb-5">
            {locale === 'es'
              ? 'Catálogo Comercial B2B'
              : locale === 'ua'
                ? 'Комерційний каталог B2B'
                : 'Commercial B2B Directory'}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            {catalogTitle}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mt-5 leading-relaxed">
            {catalogSubtitle}
          </p>

          {/* Audience Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                filter === 'all'
                  ? 'bg-purple-600 text-white dark:bg-lime-500 dark:text-slate-950 shadow-md'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
              }`}
            >
              {tabLabels.all}
            </button>
            <button
              type="button"
              onClick={() => setFilter('agencies')}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                filter === 'agencies'
                  ? 'bg-purple-600 text-white dark:bg-lime-500 dark:text-slate-950 shadow-md'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
              }`}
            >
              <Building2 className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>{tabLabels.agencies}</span>
            </button>
            <button
              type="button"
              onClick={() => setFilter('pymes')}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                filter === 'pymes'
                  ? 'bg-purple-600 text-white dark:bg-lime-500 dark:text-slate-950 shadow-md'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
              }`}
            >
              <Briefcase className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>{tabLabels.pymes}</span>
            </button>
          </div>
        </header>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const content = service.content[locale] || service.content.en
            const Icon = iconMap[service.iconName] || Layout

            return (
              <div
                key={service.slug}
                className="group relative flex flex-col justify-between p-7 rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 shadow-md hover:shadow-xl hover:border-purple-300 dark:hover:border-lime-500/40 transition-all duration-300"
              >
                <div>
                  {/* Top Badge and Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold bg-purple-100 text-purple-700 dark:bg-purple-950/70 dark:text-purple-300 border border-purple-200/60 dark:border-purple-800/60">
                      {content.badge}
                    </span>
                    <div className="w-11 h-11 rounded-2xl flex items-center justify-center bg-purple-50 dark:bg-lime-500/10 text-purple-600 dark:text-lime-400 border border-purple-200/50 dark:border-lime-500/20 shadow-sm">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight mb-3 group-hover:text-purple-600 dark:group-hover:text-lime-400 transition-colors">
                    <Link href={`/${locale}/services/${service.slug}`} className="focus:outline-none">
                      {content.title}
                    </Link>
                  </h2>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {content.shortDesc}
                  </p>

                  {/* Metrics Pills */}
                  <div className="grid grid-cols-2 gap-2 mb-6 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                    {content.metrics.slice(0, 4).map((m, mIdx) => (
                      <div
                        key={mIdx}
                        className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800 text-left"
                      >
                        <div className="text-sm font-extrabold text-purple-600 dark:text-lime-400">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-1">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-3">
                  <Link
                    href={`/${locale}/services/${service.slug}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-slate-900 hover:bg-purple-600 dark:bg-slate-800 dark:hover:bg-slate-700 shadow-sm transition-colors"
                  >
                    <span>{locale === 'es' ? 'Ver Detalles' : locale === 'ua' ? 'Детальніше' : 'Explore Service'}</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => openWhatsAppDirect(content.whatsappMessage)}
                    title={locale === 'es' ? 'Consultar por WhatsApp' : locale === 'ua' ? 'Запитати у WhatsApp' : 'Inquire via WhatsApp'}
                    className="p-2.5 rounded-xl text-white bg-emerald-600 hover:bg-emerald-500 shadow-sm transition-colors cursor-pointer shrink-0"
                  >
                    <WhatsappIcon className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
