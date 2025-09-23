import React, { useEffect, useState } from 'react'

const ScrollToTopButton = () => {
  const [showBtn, setShowBtn] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowBtn(window.scrollY > 300)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!showBtn) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-lime-500 dark:to-lime-600 text-white p-3 rounded-full shadow-lg transition-opacity duration-300"
      aria-label="Scroll to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 15l7-7 7 7"
        />
      </svg>
    </button>
  )
}

export default ScrollToTopButton
