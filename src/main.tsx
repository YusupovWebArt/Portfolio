// GitHub Pages Single Page Application redirect parser
if (typeof window !== 'undefined' && window.location.search[1] === '/') {
  const decoded = window.location.search
    .slice(1)
    .split('&')
    .map((s) => s.replace(/~and~/g, '&'))
    .join('?')
  window.history.replaceState(
    null,
    '',
    window.location.pathname.slice(0, -1) + decoded + window.location.hash
  )
}

import '@fontsource-variable/plus-jakarta-sans'
import '@fontsource-variable/jetbrains-mono'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)

// Register PWA Service Worker for offline support and instant loading
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/Portfolio/sw.js')
      .catch((error) => {
        console.warn('[PWA] Service Worker registration failed:', error);
      });
  });
}
