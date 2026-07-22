import { useState, useEffect } from 'react'
import { Menu, X, Github, Linkedin, Sun, Moon } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'
import { useLanguage } from '../contexts/LanguageContext'
import type { Lang } from '../contexts/LanguageContext'

// Extracted outside to satisfy react-hooks/static-components rule
interface LangToggleBtnProps {
  compact?: boolean
  lang: Lang
  label: string
  onClick: () => void
}

const LangToggleBtn = ({ compact = false, lang, label, onClick }: LangToggleBtnProps) => (
  <button
    type="button"
    id="lang-toggle-btn"
    onClick={onClick}
    aria-label={label}
    title={label}
    className={`flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200 font-semibold text-xs ${
      compact
        ? 'px-2 py-1.5'
        : 'px-3 py-2 w-full justify-center'
    }`}
  >
    <span className="text-base leading-none">{lang === 'en' ? '🇬🇧' : '🇺🇦'}</span>
    <span className="tracking-wide">{lang === 'en' ? 'EN' : 'UA'}</span>
  </button>
)

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

  const toggleLang = () => {
    const next: Lang = lang === 'en' ? 'ua' : 'en'
    setLang(next)
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

            {/* Language Toggle - Rightmost position with extra spacing and divider */}
            <div className="pl-4 ml-2 border-l border-slate-200 dark:border-slate-800 flex items-center">
              <LangToggleBtn compact lang={lang} label={t.header.langToggle} onClick={toggleLang} />
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

                {/* Language Toggle in mobile - Rightmost position */}
                <LangToggleBtn compact lang={lang} label={t.header.langToggle} onClick={toggleLang} />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
