'use client'

import React from 'react'
import { ThemeProvider } from '../contexts/ThemeContext'
import { LanguageProvider } from '../contexts/LanguageContext'
import { ConsentProvider } from '../contexts/ConsentContext'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <ConsentProvider>{children}</ConsentProvider>
      </ThemeProvider>
    </LanguageProvider>
  )
}

export { ThemeProvider, LanguageProvider, ConsentProvider }
