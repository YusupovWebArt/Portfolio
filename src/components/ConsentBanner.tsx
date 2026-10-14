'use client'

import React, { useState, useEffect, useRef, useSyncExternalStore } from 'react'
import { Cookie, Shield, X, Check, Settings } from 'lucide-react'
import { useConsent } from '../contexts/ConsentContext'
import { useLanguage } from '../contexts/LanguageContext'
import { CookiePolicyModal } from './CookiePolicyModal'
import { useDialogA11y } from '../hooks/useDialogA11y'

const emptySubscribe = () => () => {}

// Equal visual weight for user decision choices in compliance with AEPD / GDPR
const choiceButton =
  'px-4 py-2 text-xs font-semibold rounded-lg border border-slate-900 bg-white text-slate-900 hover:bg-slate-50 dark:border-slate-300 dark:bg-transparent dark:text-white dark:hover:bg-slate-800/50 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500/50 dark:focus:ring-lime-400/50'

interface CookieSettingsDialogProps {
  initialAnalytics: boolean
  onClose: () => void
  onSave: (analyticsGranted: boolean) => void
  onOpenPolicy: () => void
}

const CookieSettingsDialog: React.FC<CookieSettingsDialogProps> = ({
  initialAnalytics,
  onClose,
  onSave,
  onOpenPolicy,
}) => {
  const [analyticsChoice, setAnalyticsChoice] = useState<boolean>(initialAnalytics)
  const settingsModalRef = useRef<HTMLDivElement>(null)
  const { t } = useLanguage()
  const c = t.consent

  // Accessible dialog management (focus entrapment, inert background, escape handling)
  useDialogA11y({
    isOpen: true,
    onClose,
    dialogRef: settingsModalRef,
  })

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        ref={settingsModalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-settings-title"
        aria-describedby="cookie-settings-desc"
        tabIndex={-1}
        className="relative w-full max-w-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl p-6 text-slate-800 dark:text-slate-100 focus:outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400">
              <Cookie className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <h2
                id="cookie-settings-title"
                className="text-lg font-bold text-slate-900 dark:text-white"
              >
                {c.settingsTitle}
              </h2>
              <p
                id="cookie-settings-desc"
                className="text-xs text-slate-600 dark:text-slate-400 mt-0.5"
              >
                {c.settingsDesc}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0 cursor-pointer"
            aria-label={c.closeSettings}
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Granular Cookie Categories */}
        <div className="mt-5 space-y-3.5">
          {/* Category 1: Strictly Necessary (Locked) */}
          <div className="flex items-start justify-between gap-4 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50">
            <div className="flex-1 pr-2">
              <span className="block font-semibold text-sm text-slate-900 dark:text-white">
                {c.essentialCookies}
              </span>
              <span className="block text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                {c.essentialCookiesDesc}
              </span>
            </div>
            <div className="flex items-center space-x-1 shrink-0 px-2 py-1 rounded-md bg-slate-200/60 dark:bg-slate-700/60 text-xs font-semibold text-slate-600 dark:text-slate-400">
              <Check className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{c.alwaysActive}</span>
            </div>
          </div>

          {/* Category 2: Performance & Analytics (Interactive Toggle Switch) */}
          <label
            htmlFor="consent-analytics"
            className="flex items-start justify-between gap-4 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 cursor-pointer hover:bg-slate-100/60 dark:hover:bg-slate-800 transition-colors"
          >
            <div className="flex-1 pr-2">
              <span className="block font-semibold text-sm text-slate-900 dark:text-white">
                {c.analyticsCookies}
              </span>
              <span className="block text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                {c.analyticsCookiesDesc}
              </span>
            </div>
            <div className="pt-0.5 shrink-0">
              <input
                id="consent-analytics"
                type="checkbox"
                role="switch"
                aria-checked={analyticsChoice}
                checked={analyticsChoice}
                onChange={(e) => setAnalyticsChoice(e.target.checked)}
                className="w-5 h-5 accent-purple-700 dark:accent-lime-400 cursor-pointer rounded"
              />
            </div>
          </label>
        </div>

        {/* Footer Buttons */}
        <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={onOpenPolicy}
            className="inline-flex items-center space-x-1 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-lime-400 transition-colors py-1.5 focus:outline-none focus:underline cursor-pointer"
          >
            <Shield className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{c.cookiePolicy}</span>
          </button>

          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3.5 py-2 text-xs font-medium rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              {t.projects.close}
            </button>
            <button
              type="button"
              onClick={() => onSave(analyticsChoice)}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-900 hover:bg-slate-800 text-white dark:bg-purple-600 dark:hover:bg-purple-500 transition-colors shadow-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            >
              {c.savePreferences}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export const ConsentBanner: React.FC = () => {
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  )

  const {
    status,
    isSettingsOpen,
    openSettings,
    closeSettings,
    isPolicyModalOpen,
    acceptCookies,
    declineCookies,
    openPolicyModal,
    closePolicyModal,
  } = useConsent()

  const { t } = useLanguage()
  const c = t.consent

  const isPending = status === 'undecided'
  const isBannerVisible = isClient && isPending && !isSettingsOpen

  // WCAG 2.4.11: keep focused elements clear of the fixed bottom banner
  useEffect(() => {
    document.documentElement.classList.toggle('has-consent-banner', isBannerVisible)
    return () => {
      document.documentElement.classList.remove('has-consent-banner')
    }
  }, [isBannerVisible])

  const handleSavePreferences = (analyticsGranted: boolean): void => {
    if (analyticsGranted) {
      acceptCookies()
    } else {
      declineCookies()
    }
    closeSettings()
  }

  if (!isClient) {
    return null
  }

  return (
    <>
      {/* Bottom Sticky Consent Banner (Rendered only when undecided and settings is closed) */}
      {isBannerVisible && (
        <aside
          role="region"
          aria-labelledby="consent-banner-title"
          data-testid="consent-banner"
          className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-xl z-50 pointer-events-auto bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl p-5 sm:p-6 text-slate-800 dark:text-slate-100 transition-all duration-300 animate-slide-up"
        >
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex items-start space-x-3">
              <div className="p-2 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 shrink-0">
                <Cookie className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h2
                  id="consent-banner-title"
                  className="text-base font-bold text-slate-900 dark:text-slate-100"
                >
                  {c.bannerTitle}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                  {c.bannerText}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80">
            <div className="flex items-center space-x-3">
              <button
                type="button"
                onClick={openPolicyModal}
                className="inline-flex items-center space-x-1 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-lime-400 transition-colors py-1.5 focus:outline-none focus:underline cursor-pointer"
              >
                <Shield className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{c.cookiePolicy}</span>
              </button>
              <button
                type="button"
                onClick={openSettings}
                className="inline-flex items-center space-x-1 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-lime-400 transition-colors py-1.5 focus:outline-none focus:underline cursor-pointer"
              >
                <Settings className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{c.cookieSettings}</span>
              </button>
            </div>

            <div className="flex items-center space-x-2.5">
              <button
                type="button"
                onClick={declineCookies}
                className={choiceButton}
              >
                {c.decline}
              </button>
              <button
                type="button"
                onClick={acceptCookies}
                className={choiceButton}
              >
                {c.acceptAll}
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* Accessible Granular Cookie Preferences Modal */}
      {isSettingsOpen && (
        <CookieSettingsDialog
          initialAnalytics={status === 'granted'}
          onClose={closeSettings}
          onSave={handleSavePreferences}
          onOpenPolicy={openPolicyModal}
        />
      )}

      {/* Standalone Cookie Policy Modal */}
      <CookiePolicyModal
        isOpen={isPolicyModalOpen}
        onClose={closePolicyModal}
      />
    </>
  )
}

export default ConsentBanner
