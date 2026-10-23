import React, { Suspense } from 'react'
import Hero from '../../src/components/Hero'
import About from '../../src/components/About'
import AiWorkflow from '../../src/components/AiWorkflow'
import Skills from '../../src/components/Skills'
import B2bServices from '../../src/components/B2bServices'
import Contact from '../../src/components/Contact'
import Projects from '../../src/components/Projects'
import { buildWebsiteFaqJsonLd, buildPersonAndWebsiteJsonLd } from '../../src/lib/seo'

interface LandingPageProps {
  params?: Promise<{
    locale: string
  }>
}

export default async function LandingPage({ params }: LandingPageProps) {
  const resolvedParams = params ? await params : { locale: 'en' }
  const locale = resolvedParams?.locale || 'en'
  const faqSchema = buildWebsiteFaqJsonLd(locale)
  const personWebsiteSchema = buildPersonAndWebsiteJsonLd(locale)

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personWebsiteSchema) }}
      />
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
        <Projects />
      </Suspense>
      <Skills />
      <B2bServices />
      <Contact />
    </main>
  )
}
