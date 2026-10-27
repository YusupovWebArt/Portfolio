const envMeasurementId =
  typeof process !== 'undefined' && process.env
    ? process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
    : undefined

export const GA_MEASUREMENT_ID = envMeasurementId || 'G-STZ8DN2KND'

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
    [key: `ga-disable-${string}`]: boolean | undefined
  }
}

/**
 * Dynamically initializes Google Analytics 4 under Consent Mode v2 Basic mode.
 * Network requests to googletagmanager.com are completely blocked until this function executes.
 * Idempotent: safe to call multiple times without duplicate scripts or duplicate events.
 */
export function initGoogleAnalytics(): void {
  if (typeof window === 'undefined') {
    return
  }

  // Ensure tracking is enabled if it was previously revoked
  window[`ga-disable-${GA_MEASUREMENT_ID}`] = false

  // Prevent multiple script insertions
  const existingScript = document.getElementById('gtag-script')
  if (existingScript) {
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
      })
    }
    return
  }

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag(): void {
    // gtag.js only recognises the Arguments object, not an array
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer?.push(arguments)
  }

  // Set default Consent Mode v2 signals (analytics granted, ad/marketing signals strictly denied)
  window.gtag('consent', 'update', {
    analytics_storage: 'granted',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  })

  window.gtag('js', new Date())
  window.gtag('config', GA_MEASUREMENT_ID, {
    cookie_domain: window.location.hostname,
    cookie_flags: 'SameSite=Lax;Secure',
    cookie_update: false,
    anonymize_ip: true,
  })

  const script = document.createElement('script')
  script.id = 'gtag-script'
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(script)
}

/**
 * Purges Google Analytics cookies (_ga, _ga_*) and signals denied consent across all 4 Consent Mode v2 signals.
 * Also immediately halts active GA tracking in the current session via ga-disable flag.
 */
export function purgeAnalyticsCookies(): void {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return
  }

  // Immediately halt tracking in the active session
  window[`ga-disable-${GA_MEASUREMENT_ID}`] = true

  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    })
  }

  // Delete all cookies matching _ga prefix across host and parent paths
  const cookies = document.cookie ? document.cookie.split(';') : []
  for (const cookie of cookies) {
    const eqPos = cookie.indexOf('=')
    const name = eqPos > -1 ? cookie.substring(0, eqPos).trim() : cookie.trim()
    if (name.startsWith('_ga')) {
      // Clear for current path and root path
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;`
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${window.location.hostname};`
      const hostnameParts = window.location.hostname.split('.')
      if (hostnameParts.length > 2) {
        const rootDomain = hostnameParts.slice(-2).join('.')
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.${rootDomain};`
      }
    }
  }
}

export type AnalyticsEventParams = Record<string, string | number | boolean | undefined>

/**
 * Sends a custom event to Google Analytics 4 if consent is granted and gtag is initialized.
 */
export function trackEvent(eventName: string, params?: AnalyticsEventParams): void {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return
  }
  window.gtag('event', eventName, params)
}

/**
 * Tracks contact click conversion (Email, Telegram, WhatsApp, X, LinkedIn, etc.).
 */
export function trackContactClick(channel: string): void {
  trackEvent('contact_click', {
    contact_channel: channel,
    event_category: 'engagement',
    event_label: channel,
  })
}

/**
 * Tracks CV download conversion.
 */
export function trackCvDownload(source: string = 'hero'): void {
  trackEvent('cv_download', {
    download_source: source,
    event_category: 'conversion',
    event_label: 'Curriculum Vitae',
  })
}

/**
 * Tracks AI Assistant engagement.
 */
export function trackAiChatInteraction(action: 'open' | 'send_message' | 'clear' | 'faq_click'): void {
  trackEvent('ai_chat_interaction', {
    chat_action: action,
    event_category: 'engagement',
  })
}
