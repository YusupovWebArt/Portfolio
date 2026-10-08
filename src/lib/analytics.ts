export const GA_MEASUREMENT_ID = 'G-1Q3H7DDTSG';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Dynamically initializes Google Analytics 4 under Consent Mode v2 Basic mode.
 * Network requests to googletagmanager.com are completely blocked until this function executes.
 */
export function initGoogleAnalytics(): void {
  if (typeof window === 'undefined') {
    return;
  }

  // Prevent multiple script insertions
  const existingScript = document.getElementById('gtag-script');
  if (existingScript) {
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
      });
    }
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer?.push(args);
  };

  // Set default consent update
  window.gtag('consent', 'update', {
    analytics_storage: 'granted',
  });

  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    cookie_domain: window.location.hostname,
    cookie_flags: 'SameSite=Lax;Secure',
    cookie_update: false,
    anonymize_ip: true,
  });

  const script = document.createElement('script');
  script.id = 'gtag-script';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);
}

/**
 * Purges Google Analytics cookies (_ga, _ga_*) and signals denied consent.
 */
export function purgeAnalyticsCookies(): void {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      analytics_storage: 'denied',
    });
  }

  // Delete all cookies matching _ga prefix across host and parent paths
  const cookies = document.cookie ? document.cookie.split(';') : [];
  for (const cookie of cookies) {
    const eqPos = cookie.indexOf('=');
    const name = eqPos > -1 ? cookie.substring(0, eqPos).trim() : cookie.trim();
    if (name.startsWith('_ga')) {
      // Clear for current path and root path
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;`;
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${window.location.hostname};`;
      const hostnameParts = window.location.hostname.split('.');
      if (hostnameParts.length > 2) {
        const rootDomain = hostnameParts.slice(-2).join('.');
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.${rootDomain};`;
      }
    }
  }
}
