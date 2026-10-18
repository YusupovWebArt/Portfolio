import React, { useState, useEffect } from 'react'
import { ExternalLink, X, ArrowRight, Search } from 'lucide-react'
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

import { allProjects } from '../lib/projectRegistry'

const projects: Project[] = allProjects

const getFilterLabel = (id: string, filterAllLabel: string, currentLang?: string) => {
  if (id === 'all') return filterAllLabel
  if (id === 'personal') {
    return currentLang === 'ua'
      ? 'Власні проєкти'
      : currentLang === 'es'
        ? 'Proyectos propios'
        : 'Personal Projects'
  }
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

const filterIds = ['all', 'personal', 'wordpress', 'nextjs', 'react', 'javascript', 'static', 'shopify', 'wix', 'other-cms']

const Projects: React.FC<ProjectsProps> = ({ onProjectSelect }) => {
  const { lang, t } = useLanguage()
  const pr = t.projects
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [expandedTechProjects, setExpandedTechProjects] = useState<Record<number, boolean>>({})
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

  const [prevSearch, setPrevSearch] = useState(searchQuery)
  if (searchQuery !== prevSearch) {
    setPrevSearch(searchQuery)
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

  // Filtering projects by category and text search (title, description, technologies)
  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      activeFilter === 'all'
        ? true
        : activeFilter === 'personal'
          ? Boolean(project.isPersonal)
          : project.category.includes(activeFilter)
    if (!matchesCategory) return false

    if (!searchQuery.trim()) return true

    const q = searchQuery.toLowerCase().trim()
    const matchesTitle = project.title.toLowerCase().includes(q)
    const matchesDesc =
      project.description.toLowerCase().includes(q) ||
      (Boolean(project.descriptionUa) && project.descriptionUa?.toLowerCase().includes(q)) ||
      (Boolean(project.descriptionEs) && project.descriptionEs?.toLowerCase().includes(q))

    const allTech = getProjectTechList(project)
    const matchesTech = allTech.some((t) => {
      const short = getTechShort(t).toLowerCase()
      const full = getTechFull(t).toLowerCase()
      return short.includes(q) || full.includes(q)
    })

    return matchesTitle || matchesDesc || matchesTech
  })

  // Pagination
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

  const toggleTechExpanded = (projectId: number, e: React.MouseEvent) => {
    e.stopPropagation()
    setExpandedTechProjects((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }))
  }

  const searchPlaceholder =
    lang === 'ua'
      ? 'Пошук серед 70+ проєктів за назвою чи стеком (Next.js, AWS, Tailwind, Shopify)...'
      : lang === 'es'
        ? 'Buscar en 70+ proyectos por nombre o tecnología (Next.js, AWS, Tailwind, Shopify)...'
        : 'Search 70+ projects by name or technology (Next.js, AWS, Tailwind, Shopify)...'

  const countLabel =
    lang === 'ua'
      ? `Показано ${filteredProjects.length} з ${projects.length} проєктів`
      : lang === 'es'
        ? `Mostrando ${filteredProjects.length} de ${projects.length} proyectos`
        : `Showing ${filteredProjects.length} of ${projects.length} projects`

  return (
    <section
      id="projects"
      className="py-20 bg-slate-50 dark:bg-slate-800 transition-colors duration-300"
    >
      <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {pr.sectionTitle}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            {pr.sectionDescription}
          </p>
        </div>

        {/* Live Search & Filter Bar */}
        <div className="max-w-xl mx-auto mb-6 px-2">
          <div className="relative flex items-center bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700/80 rounded-2xl shadow-xs focus-within:border-purple-600 dark:focus-within:border-lime-400 focus-within:ring-2 focus-within:ring-purple-600/20 dark:focus-within:ring-lime-400/20 transition-all">
            <div className="pl-4 text-slate-400 dark:text-slate-500 pointer-events-none">
              <Search className="w-4 h-4" aria-hidden="true" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={searchPlaceholder}
              aria-label={searchPlaceholder}
              className="w-full py-2.5 px-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 bg-transparent border-0 outline-none"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="pr-4 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors cursor-pointer"
                aria-label="Clear search"
                title="Clear search"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            )}
          </div>
          <div className="mt-2 text-center text-xs font-medium text-slate-500 dark:text-slate-400">
            {countLabel}
          </div>
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
              {getFilterLabel(id, pr.filterAll, lang)}
            </button>
          ))}
        </div>

        {filteredProjects.length === 0 ? (
          <div className="py-16 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-8 max-w-lg mx-auto">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-purple-50 dark:bg-lime-500/10 flex items-center justify-center text-purple-600 dark:text-lime-400">
              <Search className="w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              {lang === 'ua'
                ? 'Проєктів не знайдено'
                : lang === 'es'
                  ? 'No se encontraron proyectos'
                  : 'No projects found'}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
              {lang === 'ua'
                ? 'Спробуйте змінити пошуковий запит або скинути активний фільтр категорій.'
                : lang === 'es'
                  ? 'Prueba a cambiar los términos de búsqueda o restablecer los filtros.'
                  : 'Try adjusting your search keywords or resetting the category filter.'}
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('')
                setActiveFilter('all')
              }}
              className="px-5 py-2 rounded-xl text-xs font-semibold bg-purple-600 hover:bg-purple-700 dark:bg-lime-500 dark:hover:bg-lime-400 text-white dark:text-slate-950 transition-colors cursor-pointer"
            >
              {lang === 'ua' ? 'Скинути всі фільтри' : lang === 'es' ? 'Restablecer filtros' : 'Reset all filters'}
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project) => {
            const allTech = getProjectTechList(project)
            const visibleTech = allTech.slice(0, 4)
            const remainingCount = allTech.length - visibleTech.length
            const isTechExpanded = Boolean(expandedTechProjects[project.id])
            const displayedTech = isTechExpanded ? allTech : visibleTech

            return (
              <div
                key={project.id}
                className="bg-white dark:bg-slate-900 rounded-2xl shadow-md p-5 flex flex-col border border-slate-200/80 dark:border-slate-800 transition-colors duration-300"
              >
                {/* Image with optional Personal Project badge */}
                <div className="relative mb-4">
                  <img
                    src={project.images[0].src}
                    alt={project.images[0].caption || project.title}
                    loading="lazy"
                    style={{
                      viewTransitionName: `project-thumb-${project.id}`,
                    }}
                    className="w-full h-48 object-cover rounded-xl cursor-pointer"
                    onClick={() =>
                      openScreenshotModal(project.images[0].src, project.title)
                    }
                  />
                  {project.isPersonal && (
                    <div className="absolute top-2.5 left-2.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide bg-purple-700/90 dark:bg-lime-500/90 text-white dark:text-slate-950 shadow-md backdrop-blur-sm border border-purple-400/40 dark:border-lime-300/40">
                      <span>★</span>
                      <span>
                        {lang === 'ua'
                          ? 'Власний проєкт'
                          : lang === 'es'
                            ? 'Proyecto propio'
                            : 'Personal Project'}
                      </span>
                    </div>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {project.title}
                </h3>

                {/* Description (full readable text) */}
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                  {lang === 'ua' && project.descriptionUa
                    ? project.descriptionUa
                    : lang === 'es' && project.descriptionEs
                    ? project.descriptionEs
                    : project.description}
                </p>

                {/* Interactive Technology Badges (Top 4 + Expandable on click) */}
                <div className="flex flex-wrap items-center gap-1.5 mb-5">
                  {displayedTech.map((tech, idx) => (
                    <span
                      key={idx}
                      title={getTechFull(tech)}
                      className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/70 dark:border-slate-700/60 px-2 py-0.5 rounded-md text-[11px] font-medium"
                    >
                      {getTechShort(tech)}
                    </span>
                  ))}
                  {remainingCount > 0 && !isTechExpanded && (
                    <button
                      type="button"
                      onClick={(e) => toggleTechExpanded(project.id, e)}
                      title={`Show all ${allTech.length} technologies`}
                      className="bg-purple-50 dark:bg-purple-950/50 hover:bg-purple-100 dark:hover:bg-purple-900/70 text-purple-700 dark:text-lime-400 border border-purple-200/60 dark:border-lime-500/30 px-2 py-0.5 rounded-md text-[11px] font-semibold cursor-pointer transition-colors"
                    >
                      +{remainingCount}
                    </button>
                  )}
                  {remainingCount > 0 && isTechExpanded && (
                    <button
                      type="button"
                      onClick={(e) => toggleTechExpanded(project.id, e)}
                      title="Collapse technologies"
                      className="bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-600 px-2 py-0.5 rounded-md text-[11px] font-medium cursor-pointer transition-colors"
                    >
                      - less
                    </button>
                  )}
                </div>

                {/* Sticky Bottom Action Footer */}
                <div className="mt-auto pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onProjectSelect(project.id)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-purple-600 dark:text-lime-400 hover:text-purple-700 dark:hover:text-lime-300 transition-colors"
                    type="button"
                  >
                    <span>{pr.viewDetails}</span>
                    <ArrowRight className="w-4 h-4" />
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
        )}

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
