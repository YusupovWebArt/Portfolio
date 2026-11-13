'use client'

import { useState, useEffect, useRef } from 'react'
import {
  LuMenu as Menu,
  LuX as X,
  LuSun as Sun,
  LuMoon as Moon,
  LuChevronDown as ChevronDown,
} from 'react-icons/lu'
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa'
import { FaXTwitter as XIcon } from 'react-icons/fa6'
import { useTheme } from '../contexts/ThemeContext'
import { useLanguage } from '../contexts/LanguageContext'
import type { Lang } from '../contexts/LanguageContext'

// --- Flag SVG components (cross-platform, Windows-safe) ---

const UkFlag = () => (
  <svg className="w-4 h-4 rounded-full overflow-hidden shrink-0 shadow-xs" viewBox="0 0 640 480" aria-hidden="true">
    <path fill="#012169" d="M0 0h640v480H0z"/>
    <path fill="#FFF" d="m75 0 245 180L565 0h75v55L415 240l225 185v55h-75L320 300 75 480H0v-55l225-185L0 55V0h75z"/>
    <path fill="#C8102E" d="m424 281 216 159v40l-216-159h0zm-208 0L0 440v40l243-179h-27zm208-82L640 40V0l-243 179h27zM216 199 0 40V0l216 159h0z"/>
    <path fill="#FFF" d="M240 0v480h160V0H240zM0 160v160h640V160H0z"/>
    <path fill="#C8102E" d="M267 0v480h106V0H267zM0 187v106h640V187H0z"/>
  </svg>
)

const UaFlag = () => (
  <svg className="w-4 h-4 rounded-full overflow-hidden shrink-0 shadow-xs border border-slate-200/40 dark:border-slate-700/40" viewBox="0 0 640 480" aria-hidden="true">
    <path fill="#0057B7" d="M0 0h640v240H0z"/>
    <path fill="#FFD700" d="M0 240h640v240H0z"/>
  </svg>
)

const EsFlag = () => (
  <svg className="w-4 h-4 rounded-full overflow-hidden shrink-0 shadow-xs border border-slate-200/40 dark:border-slate-700/40" viewBox="0 0 640 480" aria-hidden="true">
    <path fill="#AA151B" d="M0 0h640v480H0z"/>
    <path fill="#F1BF00" d="M0 120h640v240H0z"/>
  </svg>
)

const DeFlag = () => (
  <svg className="w-4 h-4 rounded-full overflow-hidden shrink-0 shadow-xs border border-slate-200/40 dark:border-slate-700/40" viewBox="0 0 640 480" aria-hidden="true">
    <path fill="#000" d="M0 0h640v160H0z"/>
    <path fill="#D00" d="M0 160h640v160H0z"/>
    <path fill="#FFCE00" d="M0 320h640v160H0z"/>
  </svg>
)

const FLAGS: Record<Lang, { component: React.FC; code: string }> = {
  en: { component: UkFlag, code: 'EN' },
  ua: { component: UaFlag, code: 'UA' },
  es: { component: EsFlag, code: 'ES' },
  de: { component: DeFlag, code: 'DE' },
}

// --- Language Dropdown component ---

interface LangDropdownProps {
  lang: Lang
  label: string
  onSelect: (lang: Lang) => void
  compact?: boolean
}

const LangDropdown = ({ lang, label, onSelect, compact = false }: LangDropdownProps) => {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  const CurrentFlag = FLAGS[lang].component

  const getTargetUrl = (targetLang: Lang): string => {
    if (typeof window === 'undefined') {
      return `/${targetLang}`
    }
    const pathname = window.location.pathname
    const hash = window.location.hash || ''
    const match = pathname.match(/^\/(en|ua|es|de)(.*)/)
    if (match) {
      return `/${targetLang}${match[2] || ''}${hash}`
    }
    return `/${targetLang}`
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        id={`lang-dropdown-btn-${compact ? 'compact' : 'full'}`}
        onClick={() => setOpen((prev) => !prev)}
        aria-label={`${label}: ${FLAGS[lang].code}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        title={label}
        className={`flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200 font-semibold text-xs cursor-pointer ${
          compact ? 'px-2 py-1.5' : 'px-3 py-2 w-full justify-center'
        }`}
      >
        <CurrentFlag />
        <span className="tracking-wide">{FLAGS[lang].code}</span>
        <ChevronDown
          size={12}
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <div
        role="listbox"
        aria-label={`${label}: ${FLAGS[lang].code}`}
        className={`absolute right-0 mt-1.5 w-28 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl overflow-hidden z-50 ${
          open ? 'block animate-fade-in' : 'hidden'
        }`}
      >
        {(Object.entries(FLAGS) as [Lang, { component: React.FC; code: string }][]).map(
          ([code, { component: FlagComponent, code: itemLabel }]) => (
            <a
              key={code}
              href={getTargetUrl(code)}
              hrefLang={code === 'ua' ? 'uk' : code}
              role="option"
              aria-selected={lang === code}
              onClick={(e) => {
                e.preventDefault()
                onSelect(code)
                setOpen(false)
              }}
              className={`flex items-center gap-2.5 w-full px-3 py-2 text-xs font-semibold transition-colors duration-150 cursor-pointer ${
                lang === code
                  ? 'bg-slate-100 dark:bg-slate-800 text-purple-600 dark:text-lime-400'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              <FlagComponent />
              <span>{itemLabel}</span>
            </a>
          )
        )}
      </div>
    </div>
  )
}

// --- Main Header ---

const Header = () => {
  const { isDark, toggleTheme } = useTheme()
  const { lang, setLang, t } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const headerRef = useRef<HTMLElement>(null)

  const navItems = [
    { id: 'home', label: t.header.nav.home, href: `/${lang}#home` },
    { id: 'about', label: t.header.nav.about, href: `/${lang}#about` },
    { id: 'how-i-work', label: t.header.nav.aiWorkflow, href: `/${lang}#how-i-work` },
    { id: 'projects', label: t.header.nav.projects, href: `/${lang}#projects` },
    { id: 'skills', label: t.header.nav.skills, href: `/${lang}#skills` },
    { id: 'services', label: t.header.nav.services, href: `/${lang}/services`, isPage: true },
    { id: 'blog', label: t.header.nav.blog, href: `/${lang}/blog`, isPage: true },
    { id: 'contact', label: t.header.nav.contact, href: `/${lang}#contact` },
  ]

  // Outside click and Escape key dismissal for mobile drawer
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false)
      }
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMenuOpen])

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        if (window.location.pathname.includes('/services')) {
          setActiveSection('services')
          return
        }
        if (window.location.pathname.includes('/blog')) {
          setActiveSection('blog')
          return
        }
      }

      const nonPageItems = navItems.filter((item) => !item.isPage)
      const sections = nonPageItems.map((item) => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(nonPageItems[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t, lang])

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: { id: string; href: string; isPage?: boolean }
  ) => {
    const isSpa =
      typeof window !== 'undefined' &&
      (Boolean((window as unknown as { __IS_PORTFOLIO_SPA__?: boolean }).__IS_PORTFOLIO_SPA__) ||
        window.location.pathname.startsWith('/Portfolio') ||
        window.location.port === '5173' ||
        window.location.port === '4173')

    if (item.isPage) {
      if (isSpa) {
        e.preventDefault()
        window.open(`https://www.yusupovartur.com${item.href}`, '_blank', 'noopener,noreferrer')
      }
      setIsMenuOpen(false)
      return
    }

    const element = document.getElementById(item.id)
    if (element) {
      e.preventDefault()
      element.scrollIntoView({ behavior: 'smooth' })
    } else {
      if (isSpa) {
        e.preventDefault()
        window.dispatchEvent(new CustomEvent('navigate-to-section', { detail: item.id }))
      }
    }
    setIsMenuOpen(false)
  }

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-purple-600 focus:text-white focus:rounded-lg focus:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white font-medium text-sm transition-transform"
      >
        {t.app.skipToContent}
      </a>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800 transition-colors duration-300"
      >
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 gap-3">
            {/* Logo / Brand Name - protected against multi-line wrapping */}
            <button
              type="button"
              onClick={(e) => handleNavClick(e as unknown as React.MouseEvent<HTMLAnchorElement>, navItems[0])}
              aria-label={
                lang === 'ua'
                  ? 'Артур Юсупов - Головна сторінка портфоліо'
                  : lang === 'es'
                    ? 'Artur Yusupov - Inicio del Portafolio'
                    : lang === 'de'
                      ? 'Artur Yusupov - Portfolio-Startseite'
                      : 'Artur Yusupov - Portfolio Home'
              }
              className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white hover:text-purple-600 dark:hover:text-lime-400 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 dark:focus-visible:outline-lime-400 rounded text-left whitespace-nowrap shrink-0 cursor-pointer"
            >
              Artur Yusupov
            </button>

            {/* Desktop Navigation (>= 1280px xl breakpoint: guarantees zero wrapping and ample breathing room) */}
            <nav
              className="hidden xl:flex items-center space-x-4 2xl:space-x-7"
              aria-label={
                lang === 'ua'
                  ? 'Десктопна навігація'
                  : lang === 'es'
                    ? 'Navegación de escritorio'
                    : lang === 'de'
                      ? 'Desktop-Navigation'
                      : 'Desktop Navigation'
              }
            >
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`text-sm font-medium whitespace-nowrap transition-colors duration-200 cursor-pointer ${
                    activeSection === item.id
                      ? 'text-purple-600 dark:text-lime-400 font-semibold'
                      : 'text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Desktop: Social Links + Controls (>= 1280px) */}
            <div className="hidden xl:flex items-center space-x-3">
              {/* Theme Toggle */}
              <button
                type="button"
                onClick={toggleTheme}
                className="p-2 text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                title={isDark ? t.header.themeToggle.toLight : t.header.themeToggle.toDark}
                aria-label={isDark ? t.header.themeToggle.toLight : t.header.themeToggle.toDark}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <a
                href="https://github.com/YusupovWebArt"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={
                  lang === 'ua'
                    ? 'Профіль GitHub'
                    : lang === 'es'
                      ? 'Perfil de GitHub'
                      : lang === 'de'
                        ? 'GitHub-Profil'
                        : 'GitHub Profile'
                }
                className="p-1.5 text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <Github size={20} aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/in/artur-iusupov/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={
                  lang === 'ua'
                    ? 'Профіль LinkedIn'
                    : lang === 'es'
                      ? 'Perfil de LinkedIn'
                      : lang === 'de'
                        ? 'LinkedIn-Profil'
                        : 'LinkedIn Profile'
                }
                className="p-1.5 text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <Linkedin size={20} aria-hidden="true" />
              </a>
              <a
                href="https://x.com/yusupovwebart"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={
                  lang === 'ua'
                    ? 'Профіль X'
                    : lang === 'es'
                      ? 'Perfil de X'
                      : lang === 'de'
                        ? 'X-Profil'
                        : 'X Profile'
                }
                className="p-1.5 text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <XIcon size={18} aria-hidden="true" />
              </a>

              {/* Language Dropdown - Rightmost position with divider */}
              <div className="pl-3 ml-1 border-l border-slate-200 dark:border-slate-800 flex items-center">
                <LangDropdown compact lang={lang} label={t.header.langToggle} onSelect={setLang} />
              </div>
            </div>

            {/* Mobile & Tablet Controls (< 1280px): Quick Theme + Quick Lang + Hamburger */}
            <div className="flex xl:hidden items-center space-x-1.5 sm:space-x-2">
              <button
                type="button"
                onClick={toggleTheme}
                className="p-2 text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                title={isDark ? t.header.themeToggle.toLight : t.header.themeToggle.toDark}
                aria-label={isDark ? t.header.themeToggle.toLight : t.header.themeToggle.toDark}
              >
                {isDark ? <Sun size={19} /> : <Moon size={19} />}
              </button>

              <LangDropdown compact lang={lang} label={t.header.langToggle} onSelect={setLang} />

              <button
                type="button"
                className="p-2 text-slate-900 dark:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 dark:focus-visible:outline-lime-400"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={
                  isMenuOpen
                    ? lang === 'ua'
                      ? 'Закрити меню навігації'
                      : lang === 'es'
                        ? 'Cerrar menú de navegación'
                        : lang === 'de'
                          ? 'Navigationsmenü schließen'
                          : 'Close navigation menu'
                    : lang === 'ua'
                      ? 'Відкрити меню навігації'
                      : lang === 'es'
                        ? 'Abrir menú de navegación'
                        : lang === 'de'
                          ? 'Navigationsmenü öffnen'
                          : 'Open navigation menu'
                }
                aria-expanded={isMenuOpen}
                aria-controls="mobile-navigation"
              >
                {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
              </button>
            </div>
          </div>

          {/* Mobile & Tablet Drawer Menu (< 1280px) */}
          {isMenuOpen && (
            <nav
              id="mobile-navigation"
              className="xl:hidden pb-4 animate-fade-in"
              aria-label={
                lang === 'ua'
                  ? 'Мобільна навігація'
                  : lang === 'es'
                    ? 'Navegación móvil'
                    : lang === 'de'
                      ? 'Mobile Navigation'
                      : 'Mobile Navigation'
              }
            >
              <div className="mt-2 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-2xl p-3 space-y-1 max-h-[calc(100dvh-5rem)] overflow-y-auto custom-scrollbar">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`flex items-center justify-between w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-150 cursor-pointer ${
                      activeSection === item.id
                        ? 'text-purple-700 dark:text-lime-400 bg-purple-50 dark:bg-lime-950/40 border border-purple-200/60 dark:border-lime-500/30'
                        : 'text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/70'
                    }`}
                  >
                    <span>{item.label}</span>
                    {activeSection === item.id && (
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:text-lime-400" aria-hidden="true" />
                    )}
                  </a>
                ))}

                {/* Social links row inside drawer */}
                <div className="flex items-center justify-around px-3 py-3 border-t border-slate-200/80 dark:border-slate-800 mt-2 pt-3">
                  <a
                    href="https://github.com/YusupovWebArt"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={
                      lang === 'ua'
                        ? 'Профіль GitHub'
                        : lang === 'es'
                          ? 'Perfil de GitHub'
                          : lang === 'de'
                            ? 'GitHub-Profil'
                            : 'GitHub Profile'
                    }
                    className="p-2.5 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
                  >
                    <Github size={20} aria-hidden="true" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/artur-iusupov/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={
                      lang === 'ua'
                        ? 'Профіль LinkedIn'
                        : lang === 'es'
                          ? 'Perfil de LinkedIn'
                          : lang === 'de'
                            ? 'LinkedIn-Profil'
                            : 'LinkedIn Profile'
                    }
                    className="p-2.5 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
                  >
                    <Linkedin size={20} aria-hidden="true" />
                  </a>
                  <a
                    href="https://x.com/yusupovwebart"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={
                      lang === 'ua'
                        ? 'Профіль X'
                        : lang === 'es'
                          ? 'Perfil de X'
                          : lang === 'de'
                            ? 'X-Profil'
                            : 'X Profile'
                    }
                    className="p-2.5 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
                  >
                    <XIcon size={18} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  )
}

export default Header
