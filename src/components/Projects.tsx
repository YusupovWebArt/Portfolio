import React, { useState, useEffect } from 'react'
import { ExternalLink, X, ArrowRight, Eye } from 'lucide-react'
import { Project, TechnologyItem } from './projects/project-types'
import { useLanguage } from '../contexts/LanguageContext'

interface ProjectsProps {
  onProjectSelect: (projectId: number) => void
}

const getTechShort = (tech: TechnologyItem): string =>
  typeof tech === 'string' ? tech : tech.short

const getTechFull = (tech: TechnologyItem): string =>
  typeof tech === 'string' ? tech : tech.full || tech.short

const getProjectTechList = (project: Project): TechnologyItem[] => {
  if (Array.isArray(project.technologies)) {
    return project.technologies
  }
  const techObj = project.technologies
  const list: TechnologyItem[] = []
  if (techObj.frontend) list.push(...techObj.frontend)
  if (techObj.backend) list.push(...techObj.backend)
  if (techObj.contentManagement) list.push(...techObj.contentManagement)
  if (techObj.api) list.push(...techObj.api)
  if (techObj.devopsSecurity) list.push(...techObj.devopsSecurity)
  if (techObj.aiTools) list.push(...techObj.aiTools)
  return list
}

const getCategoryBadge = (category: string[]) => {
  const cat = category[0] || 'web'
  switch (cat) {
    case 'nextjs': return 'Next.js'
    case 'wordpress': return 'WordPress'
    case 'react': return 'React'
    case 'javascript': return 'Vanilla JS'
    case 'shopify': return 'Shopify'
    case 'wix': return 'Wix'
    case 'static': return 'Static'
    case 'other-cms': return 'CMS'
    default: return 'Fullstack'
  }
}

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
          {currentProjects.map((project) => {
            const allTech = getProjectTechList(project)
            const visibleTech = allTech.slice(0, 4)
            const remainingCount = allTech.length - visibleTech.length

            return (
              <div
                key={project.id}
                className="group bg-white dark:bg-slate-900/90 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 p-5 flex flex-col border border-slate-200/80 dark:border-slate-800 hover:border-purple-500/40 dark:hover:border-lime-500/40 transition-all duration-300"
              >
                {/* Image Container with Floating Badge & Zoom overlay */}
                <div className="relative overflow-hidden rounded-xl mb-4 bg-slate-100 dark:bg-slate-800">
                  <div className="absolute top-2.5 left-2.5 z-10 px-2.5 py-1 rounded-full bg-slate-900/75 dark:bg-slate-950/85 backdrop-blur-md border border-white/15 text-white text-[10px] font-bold tracking-wider uppercase shadow-xs">
                    {getCategoryBadge(project.category)}
                  </div>

                  <img
                    src={project.images[0].src}
                    alt={project.images[0].caption || project.title}
                    loading="lazy"
                    style={{
                      viewTransitionName: `project-thumb-${project.id}`,
                    }}
                    className="w-full h-48 object-cover cursor-pointer group-hover:scale-105 transition-transform duration-300"
                    onClick={() =>
                      openScreenshotModal(project.images[0].src, project.title)
                    }
                  />

                  <button
                    type="button"
                    onClick={() =>
                      openScreenshotModal(project.images[0].src, project.title)
                    }
                    className="absolute bottom-2.5 right-2.5 p-1.5 rounded-lg bg-slate-900/70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-slate-900"
                    title="Zoom screenshot"
                    aria-label="Zoom screenshot"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-lime-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description (clamped to 3 uniform lines) */}
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4 line-clamp-3 min-h-[4.2rem]">
                  {lang === 'ua' && project.descriptionUa
                    ? project.descriptionUa
                    : lang === 'es' && project.descriptionEs
                    ? project.descriptionEs
                    : project.description}
                </p>

                {/* Streamlined Technology Badges (Top 4 + More Counter) */}
                <div className="flex flex-wrap items-center gap-1.5 mb-5">
                  {visibleTech.map((tech, idx) => (
                    <span
                      key={idx}
                      title={getTechFull(tech)}
                      className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/70 dark:border-slate-700/60 px-2 py-0.5 rounded-md text-[11px] font-medium"
                    >
                      {getTechShort(tech)}
                    </span>
                  ))}
                  {remainingCount > 0 && (
                    <span
                      title={`${remainingCount} more technologies in case study`}
                      className="bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-lime-400 border border-purple-200/60 dark:border-lime-500/20 px-2 py-0.5 rounded-md text-[11px] font-semibold"
                    >
                      +{remainingCount}
                    </span>
                  )}
                </div>

                {/* Sticky Bottom Action Footer */}
                <div className="mt-auto pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onProjectSelect(project.id)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-purple-600 dark:text-lime-400 hover:text-purple-700 dark:hover:text-lime-300 group/btn transition-colors"
                    type="button"
                  >
                    <span>{pr.viewDetails}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>

                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-purple-600 dark:hover:text-lime-400 transition"
                      title={pr.liveSite}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>{pr.liveSite}</span>
                    </a>
                  )}
                </div>
              </div>
            )
          })}
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
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-xs p-4">
            <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-3xl w-full p-6 border border-slate-200/80 dark:border-white/10">
              <button
                className="absolute top-4 right-4 text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-lime-400 p-1"
                onClick={closeScreenshotModal}
                title="Закрыть"
                aria-label="Закрыть"
                type="button"
              >
                <X size={24} />
              </button>
              <img
                src={screenshotModal.image}
                alt={screenshotModal.title}
                className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-2xl mx-auto"
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
