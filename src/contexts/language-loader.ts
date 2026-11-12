import type { Translation } from '../locales/types'
import { en } from '../locales/en'

export type Lang = 'en' | 'ua' | 'es' | 'de'

const translationCache: Partial<Record<Lang, Translation>> = {
  en,
}

export const getCachedTranslation = (lang: Lang): Translation | undefined => {
  return translationCache[lang]
}

export const registerTranslation = (lang: Lang, translation: Translation): void => {
  translationCache[lang] = translation
}

/** Clear translation cache (useful for test isolation) */
export const clearTranslationCache = (): void => {
  delete translationCache.ua
  delete translationCache.es
  delete translationCache.de
}

/** Asynchronously load a language dictionary chunk on demand */
export const loadLocale = async (targetLang: Lang): Promise<Translation> => {
  const cached = translationCache[targetLang]
  if (cached) return cached

  if (targetLang === 'ua') {
    const mod = await import('../locales/ua')
    translationCache.ua = mod.ua
    return mod.ua
  }

  if (targetLang === 'es') {
    const mod = await import('../locales/es')
    translationCache.es = mod.es
    return mod.es
  }

  if (targetLang === 'de') {
    const mod = await import('../locales/de')
    translationCache.de = mod.de
    return mod.de
  }

  return en
}
