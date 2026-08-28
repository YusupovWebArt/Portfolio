import { useState, lazy, Suspense } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import { LanguageProvider } from './contexts/LanguageContext'
import Header from './components/Header'
import Hero from './components/Hero'
import AiWorkflow from './components/AiWorkflow'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import B2bServices from './components/B2bServices'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTopButton from './components/ScrollToTopButton'

const ProjectDetail = lazy(() => import('./components/ProjectDetail'))

function App() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const handleProjectSelect = (projectId: number) => {
    setSelectedProject(projectId)
  }

  const handleBackToProjects = () => {
    setSelectedProject(null)
    // Scroll to projects section
    setTimeout(() => {
      document
        .getElementById('projects')
        ?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
          <Header />
          {selectedProject !== null ? (
            <Suspense
              fallback={
                <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-900 transition-colors duration-300">
                  <div className="text-center">
                    <div className="inline-block w-12 h-12 border-4 border-purple-500/20 border-t-purple-600 rounded-full animate-spin mb-4" />
                    <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">
                      Loading project details...
                    </p>
                  </div>
                </div>
              }
            >
              <ProjectDetail
                key={selectedProject}
                projectId={selectedProject}
                onBack={handleBackToProjects}
              />
            </Suspense>
          ) : (
            <main>
              <Hero />
              <About />
              <AiWorkflow />
              <Projects onProjectSelect={handleProjectSelect} />
              <Skills />
              <B2bServices />
              <Contact />
            </main>
          )}
          <Footer />
          {selectedProject === null && <ScrollToTopButton />}
        </div>
      </ThemeProvider>
    </LanguageProvider>
  )
}

export default App
