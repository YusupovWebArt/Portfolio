import { useState } from 'react'
import { FaFilePdf } from 'react-icons/fa'
import { Bot } from 'lucide-react'
import ChatModal from './ChatModal'

const Hero = () => {
  const [chatOpen, setChatOpen] = useState(false)

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-100 via-slate-200 to-slate-100 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 transition-colors duration-300"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 dark:bg-lime-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500 dark:bg-lime-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-6">
          {/* Pill Badges / Specializations */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <span className="px-4 py-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-500/10 border border-emerald-500/30 dark:border-emerald-500/20 rounded-full shadow-sm shadow-emerald-500/5">
              WordPress Architecture
            </span>
            <span className="px-4 py-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-500/10 dark:bg-blue-500/10 border border-blue-500/30 dark:border-blue-500/20 rounded-full shadow-sm shadow-blue-500/5">
              React/Next.js Engineering
            </span>
            <span className="px-4 py-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-500/10 dark:bg-orange-500/10 border border-orange-500/30 dark:border-orange-500/20 rounded-full shadow-sm shadow-orange-500/5">
              Technical SEO & GEO
            </span>
            <span className="px-4 py-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400 bg-purple-500/10 dark:bg-purple-500/10 border border-purple-500/30 dark:border-purple-500/20 rounded-full shadow-sm shadow-purple-500/5">
              Spec-Driven AI SDLC
            </span>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-tight">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 dark:from-white dark:to-white bg-clip-text text-transparent">
              Artur Yusupov
            </span>
          </h1>

          {/* Elevator Pitch */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-650 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed mt-2 mb-8">
            Engineering low-level custom PHP WordPress architectures and modern React/Next.js web applications using a disciplined Spec-Driven AI (SDD) workflow, optimized for Core Web Vitals and Generative Engine Search (GEO).
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Primary Action: Chat with AI */}
            <button
              onClick={() => setChatOpen(true)}
              className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-lime-500 dark:to-lime-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 dark:hover:from-lime-600 dark:hover:to-lime-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-purple-500/25 dark:hover:shadow-lime-500/25 cursor-pointer"
            >
              <Bot className="w-4 h-4" />
              Chat with Artur AI
            </button>
            {/* Secondary Action: Download CV */}
            <a
              href="/Portfolio/resume/Artur_Yusupov_Resume.pdf"
              download
              className="flex items-center gap-2 px-6 py-2.5 border-2 border-purple-500 dark:border-lime-400 text-purple-600 dark:text-lime-400 font-semibold rounded-full hover:bg-purple-500 dark:hover:bg-lime-400 hover:text-white dark:hover:text-slate-900 transform hover:scale-105 transition-all duration-200 cursor-pointer"
            >
              <FaFilePdf className="w-4 h-4" />
              Download CV
            </a>
            <ChatModal open={chatOpen} onClose={() => setChatOpen(false)} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
