import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

interface LangPreference {
  locale: 'en' | 'ua' | 'es' | 'de'
  q: number
}

export function resolvePreferredLocale(acceptLanguageHeader: string | null): 'en' | 'ua' | 'es' | 'de' {
  if (!acceptLanguageHeader) return 'en'

  const items = acceptLanguageHeader.split(',')
  const candidates: LangPreference[] = []

  for (const item of items) {
    const [rawTag, ...rawParams] = item.trim().split(';')
    const tag = rawTag.toLowerCase().trim()
    let q = 1.0

    for (const param of rawParams) {
      const trimmed = param.trim().toLowerCase()
      if (trimmed.startsWith('q=')) {
        const parsedQ = parseFloat(trimmed.slice(2))
        if (!Number.isNaN(parsedQ)) {
          q = parsedQ
        }
      }
    }

    if (tag.startsWith('de')) {
      candidates.push({ locale: 'de', q })
    } else if (tag.startsWith('es')) {
      candidates.push({ locale: 'es', q })
    } else if (tag.startsWith('uk') || tag.startsWith('ua')) {
      candidates.push({ locale: 'ua', q })
    } else if (tag.startsWith('en')) {
      candidates.push({ locale: 'en', q })
    }
  }

  if (candidates.length === 0) return 'en'

  candidates.sort((a, b) => b.q - a.q)
  return candidates[0].locale
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname === '/') {
    const acceptLang = request.headers.get('accept-language')
    const locale = resolvePreferredLocale(acceptLang)
    const response = NextResponse.redirect(new URL(`/${locale}`, request.url), 307)
    response.headers.set('Vary', 'Accept-Language')
    return response
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/'],
}
