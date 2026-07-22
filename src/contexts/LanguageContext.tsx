import React, { createContext, useContext, useState } from 'react'
import type { Translation } from '../locales/types'
import { en } from '../locales/en'
import { ua } from '../locales/ua'

export type Lang = 'en' | 'ua'

interface LanguageContextType {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Translation
}

const translations: Record<Lang, Translation> = { en, ua }

/** Detect initial language: localStorage → browser language → fallback EN */
const getInitialLang = (): Lang => {
  try {
    const saved = localStorage.getItem('portfolio_lang')
    if (saved === 'en' || saved === 'ua') return saved
    const browserLang = navigator.language?.toLowerCase() ?? 'en'
    if (browserLang.startsWith('uk') || browserLang.startsWith('ua')) return 'ua'
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

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Lang>(getInitialLang)

  const setLang = (newLang: Lang) => {
    setLangState(newLang)
    try {
      localStorage.setItem('portfolio_lang', newLang)
    } catch {
      // Ignore localStorage errors
    }
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}
