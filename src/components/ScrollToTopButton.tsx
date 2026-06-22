import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

const ScrollToTopButton = () => {
  const [showBtn, setShowBtn] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBtn(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-8 right-8 z-50 p-3 rounded-full shadow-lg transition-all duration-300 ease-out transform
        bg-gradient-to-r from-purple-600 to-blue-600 dark:from-lime-500 dark:to-lime-600 
        text-white hover:text-white dark:hover:text-slate-950
        hover:shadow-xl hover:shadow-purple-500/25 dark:hover:shadow-lime-500/25
        hover:-translate-y-1 active:scale-95 active:translate-y-0
        ${
          showBtn
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-6 scale-75 pointer-events-none'
        }
      `}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-6 w-6 animate-pulse" />
    </button>
  )
}

export default ScrollToTopButton

