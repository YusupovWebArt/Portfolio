'use client'

import React from 'react'
import { ThemeProvider } from '../contexts/ThemeContext'
import { LanguageProvider, type Lang } from '../contexts/LanguageContext'
import { ConsentProvider } from '../contexts/ConsentContext'

export function Providers({
  children,
  initialLang,
}: {
  children: React.ReactNode
  initialLang?: Lang
}) {
  return (
    <LanguageProvider initialLang={initialLang}>
      <ThemeProvider>
        <ConsentProvider>{children}</ConsentProvider>
      </ThemeProvider>
    </LanguageProvider>
  )
}

export { ThemeProvider, LanguageProvider, ConsentProvider }
