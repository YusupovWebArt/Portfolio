import { useState, useEffect } from 'react'
import {
  SiReact,
  SiWordpress,
  SiGoogleanalytics,
  SiAdobeacrobatreader,
  SiChatbot,
} from 'react-icons/si'
import { LuBrainCircuit } from 'react-icons/lu'
import ChatModal from './ChatModal'

const Hero = () => {
  const texts = [
    'Fullstack WordPress Developer',
    'React/Next.js Developer',
    'Technical SEO Specialist',
    'AI-Augmented Developer',
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [blurAmount, setBlurAmount] = useState(0)
  const [chatOpen, setChatOpen] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      // Фаза 1: Размываем текущий текст (0 -> 8px)
      setBlurAmount(8)

      setTimeout(() => {
        // Фаза 2: Меняем текст (новый текст появляется размытым)
        setCurrentIndex((prev) => (prev + 1) % texts.length)

        // Фаза 3: Новый текст становится четким (8px -> 0)
        setTimeout(() => {
          setBlurAmount(0)
        }, 50)
      }, 300)
    }, 3000)

    return () => clearInterval(interval)
  }, [texts.length])

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
        <div className="space-y-4">
          {/* Icons */}
          <div className="flex justify-center space-x-8 mb-4">
            <div className="p-3 bg-white/50 dark:bg-slate-800/50 rounded-full backdrop-blur-sm border border-slate-300 dark:border-slate-700">
              <SiReact className="w-8 h-8 text-purple-600 dark:text-lime-400" />
            </div>
            <div className="p-3 bg-white/50 dark:bg-slate-800/50 rounded-full backdrop-blur-sm border border-slate-300 dark:border-slate-700">
              <SiWordpress className="w-8 h-8 text-blue-600 dark:text-lime-500" />
            </div>
            <div className="p-3 bg-white/50 dark:bg-slate-800/50 rounded-full backdrop-blur-sm border border-slate-300 dark:border-slate-700">
              <SiGoogleanalytics className="w-8 h-8 text-orange-500 dark:text-lime-400" />
            </div>
            <div className="p-3 bg-white/50 dark:bg-slate-800/50 rounded-full backdrop-blur-sm border border-slate-300 dark:border-slate-700">
              <LuBrainCircuit className="w-8 h-8 text-orange-500 dark:text-lime-400" />
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-tight">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 dark:from-white dark:to-white bg-clip-text text-transparent">
              Artur Yusupov
            </span>
          </h1>

          <div className="text-2xl sm:text-3xl lg:text-4xl text-slate-600 dark:text-gray-300 flex items-center justify-center min-h-[4rem] sm:min-h-[5rem] lg:min-h-[6rem] w-full px-4">
            <div className="relative w-full mx-auto h-[4rem] sm:h-[5rem] lg:h-[6rem] text-center flex items-center justify-center">
              <div
                className="font-semibold text-purple-600 dark:text-lime-400 transition-all duration-300 ease-in-out whitespace-nowrap text-2xl sm:text-3xl lg:text-4xl"
                style={{
                  filter: `blur(${blurAmount}px)`,
                  opacity: blurAmount > 0 ? 0.4 : 1,
                  width: 'max-content',
                }}
              >
                {texts[currentIndex]}
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/Portfolio/resume/Curriculum CV - Artur Yusupov.pdf"
              download
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-lime-500 dark:to-lime-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 dark:hover:from-lime-600 dark:hover:to-lime-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-purple-500/25 dark:hover:shadow-lime-500/25"
            >
              <SiAdobeacrobatreader className="w-5 h-5" />
              Download CV
            </a>
            <button
              onClick={() => setChatOpen(true)}
              className="flex items-center gap-2 px-4 py-2 border-2 border-purple-500 dark:border-lime-400 text-purple-600 dark:text-lime-400 font-semibold rounded-full hover:bg-purple-500 dark:hover:bg-lime-400 hover:text-white dark:hover:text-slate-900 transition-all duration-200"
            >
              <SiChatbot className="w-5 h-5" />
              Ask my Chat-bot
            </button>
            <ChatModal open={chatOpen} onClose={() => setChatOpen(false)} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
