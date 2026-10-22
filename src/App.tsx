import { useState, useEffect, lazy, Suspense } from 'react'
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
import { getProjectIdBySlug, getProjectSlugById } from './data/projectSlugs'

const ProjectDetail = lazy(() => import('./components/ProjectDetail'))
const Projects = lazy(() => import('./components/Projects'))
const Skills = lazy(() => import('./components/Skills'))
const B2bServices = lazy(() => import('./components/B2bServices'))
const ChatModal = lazy(() => import('./components/ChatModal'))

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

function syncUrl(options: { project?: string | number | null }) {
  if (typeof window === 'undefined') return
  try {
    const url = new URL(window.location.href)
    url.searchParams.delete('blog')

    if (options.project) {
      url.searchParams.set('project', String(options.project))
    } else {
      url.searchParams.delete('project')
    }

    window.history.pushState(
      { project: options.project || null },
      '',
      url.toString()
    )
  } catch {
    // Ignore history pushState restrictions if in an atypical frame
  }
}

function getInitialNavigationState(): {
  project: number | null
} {
  if (typeof window === 'undefined') {
    return { project: null }
  }
  const params = new URLSearchParams(window.location.search)
  const blogParam = params.get('blog')
  const projectParam = params.get('project')

  if (blogParam) {
    // Redirect legacy SPA ?blog=... URLs directly to the canonical Next.js blog on yusupovartur.com
    const targetUrl =
      blogParam === 'catalog'
        ? 'https://www.yusupovartur.com/en/blog'
        : `https://www.yusupovartur.com/en/blog/${encodeURIComponent(blogParam)}`
    window.location.replace(targetUrl)
    return { project: null }
  }

  if (projectParam) {
    const num = Number(projectParam)
    if (!Number.isNaN(num) && num > 0) {
      return { project: num }
    }
    const id = getProjectIdBySlug(projectParam)
    if (id) {
      return { project: id }
    }
  }

  return { project: null }
}

function PortfolioMain() {
  const { lang } = useLanguage()
  const [initialNav] = useState(getInitialNavigationState)
  const [selectedProject, setSelectedProject] = useState<number | null>(initialNav.project)

  const handleProjectSelect = (projectId: number) => {
    const slug = getProjectSlugById(projectId)
    syncUrl({ project: slug || projectId })
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
    syncUrl({ project: null })
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

  useEffect(() => {
    if (typeof window === 'undefined') return
    ;(window as unknown as { __IS_PORTFOLIO_SPA__?: boolean }).__IS_PORTFOLIO_SPA__ = true

    const handlePopState = () => {
      const current = new URLSearchParams(window.location.search)
      const p = current.get('project')

      if (p) {
        const num = Number(p)
        if (!Number.isNaN(num) && num > 0) {
          setSelectedProject(num)
        } else {
          const id = getProjectIdBySlug(p)
          if (id) setSelectedProject(id)
        }
      } else {
        setSelectedProject(null)
      }
    }

    const handleOpenBlog = () => {
      window.open(`https://www.yusupovartur.com/${lang}/blog`, '_blank', 'noopener,noreferrer')
    }

    const handleNavigateToSection = (e: Event) => {
      const customEvent = e as CustomEvent<string>
      const sectionId = customEvent.detail
      setSelectedProject(null)
      syncUrl({ project: null })
      if (sectionId) {
        setTimeout(() => {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }

    const handleOpenProject = (e: Event) => {
      const customEvent = e as CustomEvent<{ slug?: string; id?: number }>
      if (customEvent.detail?.id) {
        handleProjectSelect(customEvent.detail.id)
      } else if (customEvent.detail?.slug) {
        const id = getProjectIdBySlug(customEvent.detail.slug)
        if (id) {
          handleProjectSelect(id)
        }
      }
    }

    const handleOpenBlogArticle = (e: Event) => {
      const customEvent = e as CustomEvent<{ slug?: string }>
      if (customEvent.detail?.slug) {
        window.open(
          `https://www.yusupovartur.com/${lang}/blog/${customEvent.detail.slug}`,
          '_blank',
          'noopener,noreferrer',
        )
      }
    }

    window.addEventListener('popstate', handlePopState)
    window.addEventListener('open-blog-view', handleOpenBlog)
    window.addEventListener('navigate-to-section', handleNavigateToSection as EventListener)
    window.addEventListener('open-project', handleOpenProject as EventListener)
    window.addEventListener('open-blog-article', handleOpenBlogArticle as EventListener)

    return () => {
      window.removeEventListener('popstate', handlePopState)
      window.removeEventListener('open-blog-view', handleOpenBlog)
      window.removeEventListener('navigate-to-section', handleNavigateToSection as EventListener)
      window.removeEventListener('open-project', handleOpenProject as EventListener)
      window.removeEventListener('open-blog-article', handleOpenBlogArticle as EventListener)
    }
  }, [lang])

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
          </Suspense>
          <Contact />
        </main>
      )}
      <Footer />
      {selectedProject === null && <ScrollToTopButton />}
      <ConsentBanner />
      <Suspense fallback={null}>
        <ChatModal />
      </Suspense>
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
