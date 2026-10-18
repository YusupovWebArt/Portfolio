'use client'

import React from 'react'
import { ThemeProvider } from '../contexts/ThemeContext'
import { LanguageProvider, type Lang } from '../contexts/LanguageContext'
import type { Translation } from '../locales/types'
import { ConsentProvider } from '../contexts/ConsentContext'

export function Providers({
  children,
  initialLang,
  initialTranslation,
}: {
  children: React.ReactNode
  initialLang?: Lang
  initialTranslation?: Translation
}) {
  return (
    <LanguageProvider initialLang={initialLang} initialTranslation={initialTranslation}>
      <ThemeProvider>
        <ConsentProvider>{children}</ConsentProvider>
      </ThemeProvider>
    </LanguageProvider>
  )
}

export { ThemeProvider, LanguageProvider, ConsentProvider }
