import React from 'react';
import { Cookie, Shield } from 'lucide-react';
import { useConsent } from '../contexts/ConsentContext';
import { useLanguage } from '../contexts/LanguageContext';
import { CookiePolicyModal } from './CookiePolicyModal';

export const ConsentBanner: React.FC = () => {
  const {
    isBannerOpen,
    isPolicyModalOpen,
    acceptCookies,
    declineCookies,
    openPolicyModal,
    closePolicyModal,
  } = useConsent();
  const { t } = useLanguage();
  const c = t.consent;

  return (
    <>
      {isBannerOpen && (
        <aside
          role="region"
          aria-label={c.bannerAriaLabel}
          data-testid="consent-banner"
          className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-xl z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl p-5 sm:p-6 text-slate-800 dark:text-slate-100 transition-all duration-300 animate-slide-up"
        >
          <div className="flex items-start space-x-3 mb-3">
            <div className="p-2 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 shrink-0">
              <Cookie className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">
                {c.bannerTitle}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                {c.bannerText}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80">
            <button
              type="button"
              onClick={openPolicyModal}
              className="inline-flex items-center justify-center space-x-1 text-xs font-medium text-slate-500 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400 transition-colors py-1.5 focus:outline-none focus:underline"
            >
              <Shield className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{c.cookiePolicy}</span>
            </button>

            <div className="flex items-center space-x-2.5">
              <button
                type="button"
                onClick={declineCookies}
                className="flex-1 sm:flex-none px-4 py-2 text-xs font-semibold rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              >
                {c.decline}
              </button>
              <button
                type="button"
                onClick={acceptCookies}
                className="flex-1 sm:flex-none px-4 py-2 text-xs font-semibold rounded-xl bg-purple-600 hover:bg-purple-700 text-white shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              >
                {c.acceptAll}
              </button>
            </div>
          </div>
        </aside>
      )}

      <CookiePolicyModal
        isOpen={isPolicyModalOpen}
        onClose={closePolicyModal}
      />
    </>
  );
};

export default ConsentBanner;
