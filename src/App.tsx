import { useState } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import { LanguageProvider } from './contexts/LanguageContext'
import Header from './components/Header'
import Hero from './components/Hero'
import AiWorkflow from './components/AiWorkflow'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import ProjectDetail from './components/ProjectDetail'
import B2bServices from './components/B2bServices'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTopButton from './components/ScrollToTopButton'

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
            <ProjectDetail
              key={selectedProject}
              projectId={selectedProject}
              onBack={handleBackToProjects}
            />
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
