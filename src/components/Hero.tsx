'use client'

import { FaFilePdf } from 'react-icons/fa'
import {
  LuBot as Bot,
} from 'react-icons/lu'
import { useLanguage } from '../contexts/LanguageContext'
import { trackAiChatInteraction, trackCvDownload } from '../lib/analytics'

const Hero = () => {
  const { t } = useLanguage()

  const handleOpenChat = () => {
    trackAiChatInteraction('open')
    window.dispatchEvent(new CustomEvent('open-ai-chat'))
  }

  return (
    <section
      id="home"
      className="min-h-screen min-h-[100dvh] flex flex-col justify-center relative overflow-hidden pt-20 pb-8 sm:pt-24 sm:pb-12 lg:py-0 bg-gradient-to-br from-slate-100 via-slate-200 to-slate-100 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 transition-colors duration-300"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 dark:bg-lime-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500 dark:bg-lime-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-4 sm:space-y-6">
          {/* Pill Badges / Specializations - kept in EN as they are technical terms */}
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-3 sm:mb-6 max-w-3xl mx-auto">
            <span className="px-2.5 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-normal sm:tracking-wider text-blue-600 dark:text-blue-400 bg-blue-500/10 dark:bg-blue-500/10 border border-blue-500/30 dark:border-blue-500/20 rounded-full shadow-sm shadow-blue-500/5">
              <span className="hidden sm:inline">Headless WordPress &amp; Jamstack</span>
              <span className="sm:hidden">Headless WordPress</span>
            </span>
            <span className="px-2.5 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-normal sm:tracking-wider text-sky-600 dark:text-sky-400 bg-sky-500/10 dark:bg-sky-500/10 border border-sky-500/30 dark:border-sky-500/20 rounded-full shadow-sm shadow-sky-500/5">
              <span className="hidden sm:inline">React/Next.js Engineering</span>
              <span className="sm:hidden">React &amp; Next.js</span>
            </span>
            <span className="px-2.5 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-normal sm:tracking-wider text-purple-600 dark:text-purple-400 bg-purple-500/10 dark:bg-purple-500/10 border border-purple-500/30 dark:border-purple-500/20 rounded-full shadow-sm shadow-purple-500/5">
              <span className="hidden sm:inline">TDD &amp; Spec-Driven AI SDLC</span>
              <span className="sm:hidden">TDD &amp; AI SDLC</span>
            </span>
            <span className="px-2.5 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-normal sm:tracking-wider text-amber-600 dark:text-lime-400 bg-amber-500/10 dark:bg-lime-500/10 border border-amber-500/30 dark:border-lime-500/25 rounded-full shadow-sm shadow-amber-500/5">
              <span className="hidden sm:inline">Hybrid RAG &amp; AI Agents</span>
              <span className="sm:hidden">Hybrid RAG &amp; AI</span>
            </span>
            <span className="px-2.5 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-normal sm:tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-500/10 border border-emerald-500/30 dark:border-emerald-500/20 rounded-full shadow-sm shadow-emerald-500/5">
              Technical SEO &amp; GEO
            </span>
          </div>

          {/* Main Content */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-tight">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 dark:from-white dark:to-white bg-clip-text text-transparent">
              Artur Yusupov
            </span>
          </h1>

          {/* Elevator Pitch */}
          <p className="text-sm sm:text-base lg:text-xl text-slate-650 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed mt-1 sm:mt-2 mb-5 sm:mb-8">
            {t.hero.elevatorPitch}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            {/* Primary Action: Chat with AI */}
            <button
              onClick={handleOpenChat}
              className="flex items-center gap-2 px-5 py-2 sm:px-6 sm:py-2.5 text-sm sm:text-base bg-gradient-to-r from-purple-600 to-blue-600 dark:from-lime-500 dark:to-lime-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 dark:hover:from-lime-600 dark:hover:to-lime-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-purple-500/25 dark:hover:shadow-lime-500/25 cursor-pointer"
            >
              <Bot aria-hidden="true" className="w-4 h-4" />
              {t.hero.ctaPrimary}
            </button>
            {/* Secondary Action: Download CV */}
            <a
              href="/Portfolio/resume/Artur_Yusupov_Resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCvDownload('hero')}
              className="flex items-center gap-2 px-5 py-2 sm:px-6 sm:py-2.5 text-sm sm:text-base border-2 border-purple-500 dark:border-lime-400 text-purple-600 dark:text-lime-400 font-semibold rounded-full hover:bg-purple-500 dark:hover:bg-lime-400 hover:text-white dark:hover:text-slate-900 transform hover:scale-105 transition-all duration-200 cursor-pointer"
            >
              <FaFilePdf aria-hidden="true" className="w-4 h-4" />
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
