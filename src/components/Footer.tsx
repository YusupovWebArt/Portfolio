'use client'

import { LuCode as Code, LuCookie as Cookie, LuShieldCheck as ShieldCheck } from "react-icons/lu";
import { useLanguage } from "../contexts/LanguageContext";
import { useConsent } from "../contexts/ConsentContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t, lang } = useLanguage();
  const { openSettings } = useConsent();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    const isSpa =
      typeof window !== 'undefined' &&
      (Boolean((window as unknown as { __IS_PORTFOLIO_SPA__?: boolean }).__IS_PORTFOLIO_SPA__) ||
        window.location.pathname.startsWith('/Portfolio') ||
        window.location.port === '5173' ||
        window.location.port === '4173')
    const element = document.getElementById(sectionId)

    if (element) {
      e.preventDefault()
      element.scrollIntoView({ behavior: 'smooth' })
    } else if (isSpa) {
      e.preventDefault()
      window.dispatchEvent(new CustomEvent('navigate-to-section', { detail: sectionId }))
    } else {
      e.preventDefault()
      window.location.assign(`/${lang}#${sectionId}`)
    }
  }

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12 transition-colors duration-300">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo/Brand */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 dark:from-lime-400 dark:to-lime-500 bg-clip-text text-transparent">
              Artur Yusupov
            </h3>
            <p className="text-slate-400 dark:text-slate-400 mt-2">
              {t.footer.tagline}
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, 'home')}
              className="text-slate-300 dark:text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              {t.header.nav.home}
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, 'about')}
              className="text-slate-300 dark:text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              {t.header.nav.about}
            </a>
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, 'projects')}
              className="text-slate-300 dark:text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              {t.header.nav.projects}
            </a>
            <a
              href="#skills"
              onClick={(e) => handleNavClick(e, 'skills')}
              className="text-slate-300 dark:text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              {t.header.nav.skills}
            </a>
            <a
              href="#b2b-services"
              onClick={(e) => handleNavClick(e, 'b2b-services')}
              className="text-slate-300 dark:text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              {t.b2bServices.badge}
            </a>
            <a
              href={`/${lang}/blog`}
              onClick={(e) => {
                const isSpa =
                  typeof window !== 'undefined' &&
                  (Boolean((window as unknown as { __IS_PORTFOLIO_SPA__?: boolean }).__IS_PORTFOLIO_SPA__) ||
                    window.location.pathname.startsWith('/Portfolio') ||
                    window.location.port === '5173' ||
                    window.location.port === '4173')
                if (isSpa) {
                  e.preventDefault()
                  window.open(`https://www.yusupovartur.com/${lang}/blog`, '_blank', 'noopener,noreferrer')
                }
              }}
              className="text-slate-300 dark:text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              {lang === 'ua' ? 'Блог' : lang === 'es' ? 'Blog' : 'Blog'}
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="text-slate-300 dark:text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              {t.header.nav.contact}
            </a>
          </div>

          {/* Legal Footprint Notice */}
          {t.footer.legalNotice && (
            <div className="mb-6 max-w-3xl mx-auto px-4 py-2.5 rounded-2xl bg-slate-800/40 dark:bg-slate-900/40 border border-slate-800 dark:border-white/5 text-xs text-slate-400 dark:text-slate-400">
              <ShieldCheck aria-hidden="true" className="inline-block w-4 h-4 mr-1.5 -mt-0.5" />
              {t.footer.legalNotice}
            </div>
          )}

          {/* Divider */}
          <div className="w-full h-px bg-slate-800 dark:bg-slate-900 mb-8"></div>

          {/* Copyright & Settings */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-slate-400 dark:text-slate-400 pb-8 sm:pb-0">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
              <span>© {currentYear} Artur Yusupov. {t.footer.copyright}</span>
              <span className="hidden sm:inline text-slate-600 dark:text-slate-600" aria-hidden="true">•</span>
              <button
                type="button"
                onClick={openSettings}
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400 dark:focus-visible:outline-lime-400 rounded-md px-2 py-1 hover:bg-slate-800/60 cursor-pointer"
              >
                <Cookie className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                <span>{t.footer.cookieSettings}</span>
              </button>
            </div>

            <div className="flex items-center justify-center gap-1.5 text-center">
              <span>{t.footer.madeWith}</span>
              <Code className="w-4 h-4 text-lime-400 dark:text-purple-400 shrink-0" aria-hidden="true" />
              <span>{t.footer.techUsing}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
