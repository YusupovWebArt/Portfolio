'use client'

import React from 'react'
import Link from 'next/link'
import {
  LuArrowRight as ArrowRight,
  LuLock as Lock,
  LuCodeXml as Code2,
  LuZap as Zap,
  LuPanelsTopLeft as Layout,
  LuBot as Bot,
} from 'react-icons/lu'
import { FaWhatsapp as WhatsappIcon } from 'react-icons/fa'
import type { ServiceItem } from '../../data/services/types'
import { openWhatsAppDirect } from '../../lib/contacts'

interface ServiceRecommendationCardProps {
  service: ServiceItem
  locale?: 'en' | 'ua' | 'es' | 'de'
  onNavigate?: () => void
}

const iconMap = {
  LuLock: Lock,
  LuCodeXml: Code2,
  LuZap: Zap,
  LuPanelsTopLeft: Layout,
  LuBot: Bot,
}

export default function ServiceRecommendationCard({
  service,
  locale = 'en',
  onNavigate,
}: ServiceRecommendationCardProps) {
  const content = service.content[locale] || service.content.en
  const Icon = iconMap[service.iconName] || Layout

  const handleWhatsApp = () => {
    openWhatsAppDirect(locale, content.whatsappMessage)
  }

  const handleServiceClick = (e: React.MouseEvent) => {
    onNavigate?.()
    if (
      typeof window !== 'undefined' &&
      Boolean((window as unknown as { __IS_PORTFOLIO_SPA__?: boolean }).__IS_PORTFOLIO_SPA__)
    ) {
      e.preventDefault()
      window.location.assign(`/${locale}/services/${service.slug}`)
    }
  }

  const whatsAppBtnText =
    locale === 'ua'
      ? 'Обговорити у WhatsApp'
      : locale === 'es'
        ? 'Consultar por WhatsApp'
        : locale === 'de'
          ? 'Auf WhatsApp anfragen'
          : 'Inquire on WhatsApp'

  const viewServiceText =
    locale === 'ua'
      ? 'Деталі послуги'
      : locale === 'es'
        ? 'Ver servicio completo'
        : locale === 'de'
          ? 'Alle Leistungsdetails'
          : 'Full Service Details'

  return (
    <div className="w-full my-3 p-4 bg-gradient-to-br from-white to-purple-50/50 dark:from-slate-900 dark:to-slate-950 border border-purple-200/80 dark:border-purple-800/60 rounded-2xl shadow-sm text-left flex flex-col gap-3">
      {/* Badge & Top Meta */}
      <div className="flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-purple-100 text-purple-700 dark:bg-purple-950/70 dark:text-purple-300 border border-purple-200/60 dark:border-purple-800/60">
          <Icon className="w-3 h-3" aria-hidden="true" />
          <span>{content.badge}</span>
        </span>
        <span className="inline-flex items-center gap-1 text-[10px] font-medium text-emerald-600 dark:text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
          <span>
            {locale === 'es'
              ? 'Presupuesto 24-48h'
              : locale === 'ua'
                ? 'Оцінка 24-48г'
                : locale === 'de'
                  ? '24-48 Std. Kostenschätzung'
                  : '24-48h Estimate'}
          </span>
        </span>
      </div>

      {/* Title & Short Description */}
      <div>
        <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
          {content.title}
        </h4>
        <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
          {content.shortDesc}
        </p>
      </div>

      {/* Highlight Metrics */}
      <div className="grid grid-cols-2 gap-2">
        {content.metrics.slice(0, 2).map((m, idx) => (
          <div
            key={idx}
            className="p-2 rounded-xl bg-white/80 dark:bg-slate-800/70 border border-slate-200/70 dark:border-slate-800/80 text-left"
          >
            <div className="text-sm font-extrabold text-purple-600 dark:text-lime-400">
              {m.value}
            </div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium leading-tight mt-0.5">
              {m.label}
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-purple-100 dark:border-slate-800">
        <button
          type="button"
          onClick={handleWhatsApp}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm transition-all cursor-pointer"
        >
          <WhatsappIcon className="w-3.5 h-3.5" aria-hidden="true" />
          <span>{whatsAppBtnText}</span>
        </button>

        <Link
          href={`/${locale}/services/${service.slug}`}
          onClick={handleServiceClick}
          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold text-purple-700 dark:text-purple-300 hover:bg-purple-100/60 dark:hover:bg-purple-950/60 transition-colors"
        >
          <span>{viewServiceText}</span>
          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </Link>
      </div>
    </div>
  )
}
