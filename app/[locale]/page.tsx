'use client'

import React, { Suspense } from 'react'
import Hero from '../../src/components/Hero'
import About from '../../src/components/About'
import AiWorkflow from '../../src/components/AiWorkflow'
import Skills from '../../src/components/Skills'
import B2bServices from '../../src/components/B2bServices'
import Contact from '../../src/components/Contact'
import Projects from '../../src/components/Projects'

export default function LandingPage() {
  const handleProjectSelect = (projectId: number) => {
    // In Next.js, navigation can also happen to dedicated project route
    if (typeof window !== 'undefined') {
      const el = document.getElementById(`project-${projectId}`)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <main>
      <Hero />
      <About />
      <AiWorkflow />
      <Suspense
        fallback={
          <div id="projects" className="py-20 flex items-center justify-center min-h-[300px]">
            <div className="w-10 h-10 border-4 border-purple-500/20 border-t-purple-600 rounded-full animate-spin" />
          </div>
        }
      >
        <Projects onProjectSelect={handleProjectSelect} />
      </Suspense>
      <Skills />
      <B2bServices />
      <Contact />
    </main>
  )
}
