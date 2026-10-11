import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname === '/') {
    const acceptLang = request.headers.get('accept-language')?.toLowerCase() || ''
    let locale = 'en'
    if (acceptLang.includes('uk') || acceptLang.includes('ua')) {
      locale = 'ua'
    } else if (acceptLang.includes('es')) {
      locale = 'es'
    }
    return NextResponse.redirect(new URL(`/${locale}`, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/'],
}
