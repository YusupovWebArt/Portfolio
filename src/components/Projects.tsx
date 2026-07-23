import React, { useState, useEffect } from 'react'
import { ExternalLink, X } from 'lucide-react'
import { Project, TechnologyItem } from './projects/project-types'
import { useLanguage } from '../contexts/LanguageContext'

interface ProjectsProps {
  onProjectSelect: (projectId: number) => void
}

const getTechShort = (tech: TechnologyItem): string =>
  typeof tech === 'string' ? tech : tech.short

const getTechFull = (tech: TechnologyItem): string =>
  typeof tech === 'string' ? tech : tech.full || tech.short

const modules = import.meta.glob<{ default: Project }>('./projects/**/*.tsx', {
  eager: true,
})

const projects: Project[] = Object.values(modules)
  .map((mod) => mod.default)
  .sort((a, b) => b.id - a.id)

const getFilterLabel = (id: string, filterAllLabel: string) => {
  if (id === 'all') return filterAllLabel
  switch (id) {
    case 'wordpress': return 'WordPress'
    case 'nextjs': return 'Next.js'
    case 'react': return 'React'
    case 'javascript': return 'Javascript'
    case 'static': return 'Static Websites'
    case 'shopify': return 'Shopify'
    case 'wix': return 'Wix'
    case 'other-cms': return 'Other CMSs'
    default: return id
  }
}

const filterIds = ['all', 'wordpress', 'nextjs', 'react', 'javascript', 'static', 'shopify', 'wix', 'other-cms']

const Projects: React.FC<ProjectsProps> = ({ onProjectSelect }) => {
  const { lang, t } = useLanguage()
  const pr = t.projects
  const [activeFilter, setActiveFilter] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 6
  const [screenshotModal, setScreenshotModal] = useState<{
    isOpen: boolean
    image: string
    title: string
  }>({
    isOpen: false,
    image: '',
    title: '',
  })

  const [prevFilter, setPrevFilter] = useState(activeFilter)
  if (activeFilter !== prevFilter) {
    setPrevFilter(activeFilter)
    setCurrentPage(1)
  }

  useEffect(() => {
    if (screenshotModal.isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [screenshotModal.isOpen])

  // Фильтрация проектов по категории
  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category.includes(activeFilter))

  // Пагинация
  const indexOfLastProject = currentPage * projectsPerPage
  const indexOfFirstProject = indexOfLastProject - projectsPerPage
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject,
  )
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage)

  const openScreenshotModal = (image: string, title: string) => {
    setScreenshotModal({ isOpen: true, image, title })
  }

  const closeScreenshotModal = () => {
    setScreenshotModal({ isOpen: false, image: '', title: '' })
  }

  return (
    <section
      id="projects"
      className="py-20 bg-slate-50 dark:bg-slate-800 transition-colors duration-300"
    >
      <div className="py-10 px-2 md:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {pr.sectionTitle}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            {pr.sectionDescription}
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {filterIds.map((id) => (
            <button
              key={id}
              onClick={() => setActiveFilter(id)}
              className={`px-4 py-2 rounded-full font-medium transition ${
                activeFilter === id
                  ? 'bg-purple-600 text-white dark:bg-lime-500 dark:text-slate-900'
                  : 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-200 hover:bg-purple-100 dark:hover:bg-lime-700'
              }`}
              type="button"
            >
              {getFilterLabel(id, pr.filterAll)}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6 flex flex-col border border-slate-100 dark:border-white/5"
            >
              <img
                src={project.images[0].src}
                alt={project.images[0].caption || project.title}
                loading="lazy"
                className="rounded-xl mb-4 h-48 object-cover cursor-pointer"
                onClick={() =>
                  openScreenshotModal(project.images[0].src, project.title)
                }
              />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4 flex-1">
                {lang === 'ua' && project.descriptionUa ? project.descriptionUa : lang === 'es' && project.descriptionEs ? project.descriptionEs : project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {Array.isArray(project.technologies)
                  ? // Старая структура - массив технологий
                    project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        title={getTechFull(tech as TechnologyItem)}
                        className="bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 px-2 py-1 rounded text-xs"
                      >
                        {getTechShort(tech as TechnologyItem)}
                      </span>
                    ))
                  : // Новая структура - объект с категориями, отображаем все технологии
                    Object.values(project.technologies)
                      .flat()
                      .map((tech, idx) => (
                        <span
                          key={idx}
                          title={getTechFull(tech)}
                          className="bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 px-2 py-1 rounded text-xs"
                        >
                          {getTechShort(tech)}
                        </span>
                      ))}
              </div>
              <div className="flex gap-3">
                {project.liveUrl && project.liveUrl !== '#' && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-purple-600 dark:text-lime-400 hover:underline"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {pr.liveSite}
                  </a>
                )}
                <button
                  onClick={() => onProjectSelect(project.id)}
                  className="ml-auto text-purple-600 dark:text-lime-400 hover:underline"
                  type="button"
                >
                  {pr.viewDetails}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Пагинация */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 rounded-full font-medium transition ${
                  currentPage === i + 1
                    ? 'bg-purple-600 text-white dark:bg-lime-500 dark:text-slate-900'
                    : 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-200 hover:bg-purple-100 dark:hover:bg-lime-700'
                }`}
                type="button"
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}

        {/* Модальное окно скриншота */}
        {screenshotModal.isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
            <div className="relative bg-white dark:bg-slate-800 rounded-lg shadow-lg max-w-3xl w-full p-6">
              <button
                className="absolute top-4 right-4 text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-lime-400"
                onClick={closeScreenshotModal}
                title="Закрыть"
                type="button"
              >
                <X size={24} />
              </button>
              <img
                src={screenshotModal.image}
                alt={screenshotModal.title}
                className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="mt-4 text-center">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {screenshotModal.title}
                </h3>
              </div>
            </div>
            <div
              className="absolute inset-0 -z-10"
              onClick={closeScreenshotModal}
            ></div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
