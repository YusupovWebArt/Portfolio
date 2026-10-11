'use client'

import React, { createContext, useContext, useState } from 'react'
import type { Translation } from '../locales/types'
import { en } from '../locales/en'
import { ua } from '../locales/ua'
import { es } from '../locales/es'

export type Lang = 'en' | 'ua' | 'es'

interface LanguageContextType {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Translation
}

const translations: Record<Lang, Translation> = { en, ua, es }

/** Detect initial language: initial prop -> URL pathname -> localStorage -> browser language -> fallback EN */
const getInitialLang = (initialLang?: Lang): Lang => {
  if (initialLang && (initialLang === 'en' || initialLang === 'ua' || initialLang === 'es')) {
    return initialLang
  }
  if (typeof window === 'undefined') return 'en'
  try {
    const path = window.location.pathname
    const match = path.match(/^\/(en|ua|es)(\/|$)/)
    if (match) {
      return match[1] as Lang
    }
    const saved = localStorage.getItem('portfolio_lang')
    if (saved === 'en' || saved === 'ua' || saved === 'es') return saved
    const browserLang = navigator.language?.toLowerCase() ?? 'en'
    if (browserLang.startsWith('uk') || browserLang.startsWith('ua')) return 'ua'
    if (browserLang.startsWith('es')) return 'es'
  } catch {
    // localStorage may be unavailable in some environments
  }
  return 'en'
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = (): LanguageContextType => {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}

export interface LanguageProviderProps {
  children: React.ReactNode
  initialLang?: Lang
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
  initialLang,
}) => {
  const [lang, setLangState] = useState<Lang>(() => getInitialLang(initialLang))

  const setLang = (newLang: Lang) => {
    setLangState(newLang)
    try {
      localStorage.setItem('portfolio_lang', newLang)
    } catch {
      // Ignore localStorage errors
    }

    if (typeof window !== 'undefined') {
      const path = window.location.pathname
      const hash = window.location.hash || ''
      const match = path.match(/^\/(en|ua|es)(.*)/)
      if (match && match[1] !== newLang) {
        const remainingPath = match[2] || ''
        const newUrl = `/${newLang}${remainingPath}${hash}`
        window.location.assign(newUrl)
      }
    }
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}
