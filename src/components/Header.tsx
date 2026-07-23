import { useState, useEffect, useRef } from 'react'
import { Menu, X, Github, Linkedin, Sun, Moon, ChevronDown } from 'lucide-react'
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

const FLAGS: Record<Lang, { component: React.FC; code: string }> = {
  en: { component: UkFlag, code: 'EN' },
  ua: { component: UaFlag, code: 'UA' },
  es: { component: EsFlag, code: 'ES' },
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
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const CurrentFlag = FLAGS[lang].component

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        id="lang-dropdown-btn"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={label}
        title={label}
        className={`flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200 font-semibold text-xs ${
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

      {open && (
        <div className="absolute right-0 mt-1.5 w-28 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl overflow-hidden z-50 animate-fade-in">
          {(Object.entries(FLAGS) as [Lang, { component: React.FC; code: string }][]).map(
            ([code, { component: FlagComponent, code: label }]) => (
              <button
                key={code}
                type="button"
                onClick={() => {
                  onSelect(code)
                  setOpen(false)
                }}
                className={`flex items-center gap-2.5 w-full px-3 py-2 text-xs font-semibold transition-colors duration-150 ${
                  lang === code
                    ? 'bg-slate-100 dark:bg-slate-800 text-purple-600 dark:text-lime-400'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                <FlagComponent />
                <span>{label}</span>
              </button>
            )
          )}
        </div>
      )}
    </div>
  )
}

// --- Main Header ---

const Header = () => {
  const { isDark, toggleTheme } = useTheme()
  const { lang, setLang, t } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navItems = [
    { id: 'home', label: t.header.nav.home },
    { id: 'about', label: t.header.nav.about },
    { id: 'how-i-work', label: t.header.nav.aiWorkflow },
    { id: 'projects', label: t.header.nav.projects },
    { id: 'skills', label: t.header.nav.skills },
    { id: 'why-work-with-me', label: t.header.nav.whyMe },
    { id: 'contact', label: t.header.nav.contact },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-slate-900 dark:text-white">
            Artur Yusupov
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-purple-600 dark:text-lime-400'
                    : 'text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop: Social Links + Controls */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
              title={isDark ? t.header.themeToggle.toLight : t.header.themeToggle.toDark}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <a
              href="https://github.com/YusupovWebArt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/artur-iusupov/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>

            {/* Language Dropdown - Rightmost position with divider */}
            <div className="pl-4 ml-2 border-l border-slate-200 dark:border-slate-800 flex items-center">
              <LangDropdown compact lang={lang} label={t.header.langToggle} onSelect={setLang} />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden text-slate-900 dark:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-100 dark:bg-slate-800 rounded-lg mt-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeSection === item.id
                      ? 'text-purple-600 dark:text-lime-400 bg-slate-200 dark:bg-slate-700'
                      : 'text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center justify-center space-x-4 px-3 py-2 border-t border-slate-200 dark:border-slate-700 mt-2 pt-4">
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="p-2 text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-colors rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <a
                  href="https://github.com/YusupovWebArt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/artur-iusupov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                </a>

                {/* Language Dropdown in mobile menu */}
                <LangDropdown compact lang={lang} label={t.header.langToggle} onSelect={setLang} />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
