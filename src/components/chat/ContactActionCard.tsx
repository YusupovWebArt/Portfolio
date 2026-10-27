'use client'

import React from 'react'
import {
  LuMessageCircle as MessageCircle,
  LuFileText as FileText,
  LuArrowRight as ArrowRight,
} from 'react-icons/lu'

interface ContactActionCardProps {
  locale?: 'en' | 'ua' | 'es'
  onNavigateToContact?: () => void
}

const LABELS = {
  en: {
    badge: 'Available for Remote Roles & Contracts',
    title: 'Connect Directly with Artur',
    subtitle: 'Reveal protected Email, WhatsApp, or Telegram in the Contact section or download the full CV.',
    contactBtn: 'Open Direct Contacts',
    cvBtn: 'Download CV (PDF)',
  },
  ua: {
    badge: 'Відкритий до проєктів та співпраці',
    title: 'Прямий зв\'язок з Артуром',
    subtitle: 'Відкрийте захищені Email, WhatsApp або Telegram у секції контактів або завантажте резюме.',
    contactBtn: 'Перейти до контактів',
    cvBtn: 'Завантажити резюме (PDF)',
  },
  es: {
    badge: 'Disponible para Proyectos y Contratos',
    title: 'Contacto Directo con Artur',
    subtitle: 'Descubre Email, WhatsApp o Telegram protegidos en la sección de Contacto o descarga el CV.',
    contactBtn: 'Ir a Contactos Directos',
    cvBtn: 'Descargar CV (PDF)',
  },
} as const

export default function ContactActionCard({
  locale = 'en',
  onNavigateToContact,
}: ContactActionCardProps) {
  const t = LABELS[locale] || LABELS.en

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
    <div className="mt-3 p-3.5 rounded-2xl bg-gradient-to-br from-purple-50/90 to-indigo-50/70 dark:from-slate-900/95 dark:to-slate-800/90 border border-purple-200/70 dark:border-lime-500/25 shadow-sm text-left space-y-2.5">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" aria-hidden="true" />
        <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 dark:text-lime-400">
          {t.badge}
        </span>
      </div>

      <div>
        <div className="text-xs font-bold text-slate-900 dark:text-white">
          {t.title}
        </div>
        <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">
          {t.subtitle}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-2 pt-1">
        <button
          type="button"
          onClick={handleContactClick}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-purple-600 hover:bg-purple-700 dark:bg-lime-500 dark:hover:bg-lime-400 text-white dark:text-slate-950 shadow-sm transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-700 dark:focus-visible:outline-lime-400"
        >
          <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
          <span>{t.contactBtn}</span>
          <ArrowRight className="w-3 h-3" aria-hidden="true" />
        </button>

        <a
          href="/Portfolio/resume/Artur_Yusupov_Resume.pdf"
          download
          onClick={() => trackCvDownload('chat_card')}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-purple-700 dark:text-lime-400 border border-purple-200 dark:border-lime-500/30 shadow-sm transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-700 dark:focus-visible:outline-lime-400"
        >
          <FileText className="w-3.5 h-3.5" aria-hidden="true" />
          <span>{t.cvBtn}</span>
        </a>
      </div>
    </div>
  )
}
