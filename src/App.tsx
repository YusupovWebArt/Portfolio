import { useState } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import ProjectDetail from './components/ProjectDetail'
import WhyWorkWithMe from './components/WhyWorkWithMe'
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

  if (selectedProject) {
    return (
      <ThemeProvider>
        <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
          <Header />
          <ProjectDetail
            projectId={selectedProject}
            onBack={handleBackToProjects}
          />
          <Footer />
        </div>
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects onProjectSelect={handleProjectSelect} />
          <Skills />
          <WhyWorkWithMe />
          <Contact />
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </ThemeProvider>
  )
}

export default App
