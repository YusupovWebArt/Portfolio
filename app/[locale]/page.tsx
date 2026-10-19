'use client'

import React, { Suspense } from 'react'
import { useRouter, useParams } from 'next/navigation'
import Hero from '../../src/components/Hero'
import About from '../../src/components/About'
import AiWorkflow from '../../src/components/AiWorkflow'
import Skills from '../../src/components/Skills'
import B2bServices from '../../src/components/B2bServices'
import Contact from '../../src/components/Contact'
import Projects from '../../src/components/Projects'
import { getAllProjectEntries } from '../../src/lib/projects'

export default function LandingPage() {
  const router = useRouter()
  const params = useParams()
  const locale = (params?.locale as string) || 'en'

  const handleProjectSelect = (projectId: number) => {
    const entries = getAllProjectEntries()
    const entry = entries.find((e) => e.project.id === projectId)
    if (entry) {
      router.push(`/${locale}/projects/${entry.slug}`)
    }
  }

  return (
    <main id="main-content">
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
