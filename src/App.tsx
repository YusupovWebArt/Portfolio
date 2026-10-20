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
import { getProjectBySlug, getProjectSlugById } from './lib/projects'

const ProjectDetail = lazy(() => import('./components/ProjectDetail'))
const Projects = lazy(() => import('./components/Projects'))
const Skills = lazy(() => import('./components/Skills'))
const B2bServices = lazy(() => import('./components/B2bServices'))
const BlogCatalogView = lazy(() => import('./components/blog/BlogCatalogView'))
const BlogDetailView = lazy(() => import('./components/blog/BlogDetailView'))
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

function syncUrl(options: { blog?: string | null; project?: string | number | null }) {
  if (typeof window === 'undefined') return
  try {
    const url = new URL(window.location.href)
    if (options.blog) {
      url.searchParams.set('blog', options.blog)
      url.searchParams.delete('project')
    } else {
      url.searchParams.delete('blog')
    }

    if (options.project) {
      url.searchParams.set('project', String(options.project))
      url.searchParams.delete('blog')
    } else if (!options.blog) {
      url.searchParams.delete('project')
    }

    window.history.pushState(
      { blog: options.blog || null, project: options.project || null },
      '',
      url.toString()
    )
  } catch {
    // Ignore history pushState restrictions if in an atypical frame
  }
}

function getInitialNavigationState(): {
  project: number | null
  blogSlug: string | null
  isCatalog: boolean
} {
  if (typeof window === 'undefined') {
    return { project: null, blogSlug: null, isCatalog: false }
  }
  const params = new URLSearchParams(window.location.search)
  const blogParam = params.get('blog')
  const projectParam = params.get('project')

  if (blogParam) {
    if (blogParam === 'catalog') {
      return { project: null, blogSlug: null, isCatalog: true }
    }
    return { project: null, blogSlug: blogParam, isCatalog: false }
  }

  if (projectParam) {
    const num = Number(projectParam)
    if (!Number.isNaN(num) && num > 0) {
      return { project: num, blogSlug: null, isCatalog: false }
    }
    const found = getProjectBySlug(projectParam)
    if (found) {
      return { project: found.id, blogSlug: null, isCatalog: false }
    }
  }

  return { project: null, blogSlug: null, isCatalog: false }
}

function PortfolioMain() {
  const { lang } = useLanguage()
  const [initialNav] = useState(getInitialNavigationState)
  const [selectedProject, setSelectedProject] = useState<number | null>(initialNav.project)
  const [selectedBlogSlug, setSelectedBlogSlug] = useState<string | null>(initialNav.blogSlug)
  const [isBlogCatalog, setIsBlogCatalog] = useState(initialNav.isCatalog)

  const handleProjectSelect = (projectId: number) => {
    setSelectedBlogSlug(null)
    setIsBlogCatalog(false)
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
    syncUrl({ project: null, blog: null })
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
    setIsBlogCatalog(false)
    syncUrl({ blog: slug })
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

  const handleBackFromBlogDetail = () => {
    setSelectedBlogSlug(null)
    setIsBlogCatalog(true)
    syncUrl({ blog: 'catalog' })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBackToPortfolio = () => {
    setSelectedBlogSlug(null)
    setIsBlogCatalog(false)
    syncUrl({ blog: null, project: null })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    if (typeof window === 'undefined') return
    ;(window as unknown as { __IS_PORTFOLIO_SPA__?: boolean }).__IS_PORTFOLIO_SPA__ = true

    const handlePopState = () => {
      const current = new URLSearchParams(window.location.search)
      const b = current.get('blog')
      const p = current.get('project')

      if (b) {
        setSelectedProject(null)
        if (b === 'catalog') {
          setIsBlogCatalog(true)
          setSelectedBlogSlug(null)
        } else {
          setIsBlogCatalog(false)
          setSelectedBlogSlug(b)
        }
      } else if (p) {
        setIsBlogCatalog(false)
        setSelectedBlogSlug(null)
        const num = Number(p)
        if (!Number.isNaN(num) && num > 0) {
          setSelectedProject(num)
        } else {
          const found = getProjectBySlug(p)
          if (found) setSelectedProject(found.id)
        }
      } else {
        setSelectedProject(null)
        setSelectedBlogSlug(null)
        setIsBlogCatalog(false)
      }
    }

    const handleOpenBlog = () => {
      setIsBlogCatalog(true)
      setSelectedBlogSlug(null)
      setSelectedProject(null)
      syncUrl({ blog: 'catalog' })
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const handleNavigateToSection = (e: Event) => {
      const customEvent = e as CustomEvent<string>
      const sectionId = customEvent.detail
      setIsBlogCatalog(false)
      setSelectedBlogSlug(null)
      setSelectedProject(null)
      syncUrl({ blog: null, project: null })
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
        const found = getProjectBySlug(customEvent.detail.slug)
        if (found) {
          handleProjectSelect(found.id)
        }
      }
    }

    window.addEventListener('popstate', handlePopState)
    window.addEventListener('open-blog-view', handleOpenBlog)
    window.addEventListener('navigate-to-section', handleNavigateToSection as EventListener)
    window.addEventListener('open-project', handleOpenProject as EventListener)

    return () => {
      window.removeEventListener('popstate', handlePopState)
      window.removeEventListener('open-blog-view', handleOpenBlog)
      window.removeEventListener('navigate-to-section', handleNavigateToSection as EventListener)
      window.removeEventListener('open-project', handleOpenProject as EventListener)
    }
  }, [])

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
            <BlogDetailView
              slug={selectedBlogSlug}
              locale={lang}
              onBack={handleBackFromBlogDetail}
              onBackToPortfolio={handleBackToPortfolio}
              onSelectRelatedPost={handleBlogSelect}
              onSelectProject={handleProjectSelect}
            />
          </Suspense>
        </main>
      ) : isBlogCatalog ? (
        <main id="main-content">
          <Suspense fallback={<ProjectLoadingFallback />}>
            <BlogCatalogView
              locale={lang}
              onBack={handleBackToPortfolio}
              onSelectPost={handleBlogSelect}
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
      {selectedProject === null && selectedBlogSlug === null && !isBlogCatalog && <ScrollToTopButton />}
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
