import { useState, lazy, Suspense } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import { LanguageProvider, useLanguage } from './contexts/LanguageContext'
import { ConsentProvider } from './contexts/ConsentContext'
import Header from './components/Header'
import Hero from './components/Hero'
import AiWorkflow from './components/AiWorkflow'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTopButton from './components/ScrollToTopButton'
import ConsentBanner from './components/ConsentBanner'

const ProjectDetail = lazy(() => import('./components/ProjectDetail'))
const Projects = lazy(() => import('./components/Projects'))
const Skills = lazy(() => import('./components/Skills'))
const B2bServices = lazy(() => import('./components/B2bServices'))
const FeaturedBlogSection = lazy(() => import('./components/blog/FeaturedBlogSection'))
const BlogDetailView = lazy(() => import('./components/blog/BlogDetailView'))
import { getBlogPostBySlug } from './data/blog'

function ProjectLoadingFallback() {
  const { t } = useLanguage()
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="text-center">
        <div className="inline-block w-12 h-12 border-4 border-purple-500/20 border-t-purple-600 rounded-full animate-spin mb-4" />
        <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">
          {t.app.loadingDetails}
        </p>
      </div>
    </div>
  )
}

function PortfolioMain() {
  const { lang } = useLanguage()
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [selectedBlogSlug, setSelectedBlogSlug] = useState<string | null>(null)

  const handleProjectSelect = (projectId: number) => {
    setSelectedBlogSlug(null)
    if ('startViewTransition' in document) {
      const doc = document as Document & {
        startViewTransition: (callback: () => void) => void
      }
      doc.startViewTransition(() => {
        setSelectedProject(projectId)
      })
    } else {
      setSelectedProject(projectId)
    }
  }

  const handleBackToProjects = () => {
    if ('startViewTransition' in document) {
      const doc = document as Document & {
        startViewTransition: (callback: () => void) => void
      }
      doc.startViewTransition(() => {
        setSelectedProject(null)
        setTimeout(() => {
          document
            .getElementById('projects')
            ?.scrollIntoView({ behavior: 'smooth' })
        }, 80)
      })
    } else {
      setSelectedProject(null)
      setTimeout(() => {
        document
          .getElementById('projects')
          ?.scrollIntoView({ behavior: 'smooth' })
      }, 80)
    }
  }

  const handleBlogSelect = (slug: string) => {
    setSelectedProject(null)
    if ('startViewTransition' in document) {
      const doc = document as Document & {
        startViewTransition: (callback: () => void) => void
      }
      doc.startViewTransition(() => {
        setSelectedBlogSlug(slug)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      })
    } else {
      setSelectedBlogSlug(slug)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleBackFromBlog = () => {
    if ('startViewTransition' in document) {
      const doc = document as Document & {
        startViewTransition: (callback: () => void) => void
      }
      doc.startViewTransition(() => {
        setSelectedBlogSlug(null)
        setTimeout(() => {
          document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' })
        }, 80)
      })
    } else {
      setSelectedBlogSlug(null)
      setTimeout(() => {
        document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' })
      }, 80)
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <Header />
      {selectedProject !== null ? (
        <main id="main-content">
          <Suspense fallback={<ProjectLoadingFallback />}>
            <ProjectDetail
              key={selectedProject}
              projectId={selectedProject}
              onBack={handleBackToProjects}
              onSelectProject={handleProjectSelect}
            />
          </Suspense>
        </main>
      ) : selectedBlogSlug !== null ? (
        <main id="main-content">
          <Suspense fallback={<ProjectLoadingFallback />}>
            {(() => {
              const post = getBlogPostBySlug(selectedBlogSlug)
              if (!post) return null
              return (
                <BlogDetailView
                  post={post}
                  locale={lang}
                  onBack={handleBackFromBlog}
                  onSelectRelatedPost={handleBlogSelect}
                />
              )
            })()}
          </Suspense>
        </main>
      ) : (
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
          <Suspense fallback={<div className="min-h-[100px]" />}>
            <Skills />
            <B2bServices />
            <FeaturedBlogSection onSelectPost={handleBlogSelect} />
          </Suspense>
          <Contact />
        </main>
      )}
      <Footer />
      {selectedProject === null && selectedBlogSlug === null && <ScrollToTopButton />}
      <ConsentBanner />
    </div>
  )
}

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <ConsentProvider>
          <PortfolioMain />
        </ConsentProvider>
      </ThemeProvider>
    </LanguageProvider>
  )
}

export default App
