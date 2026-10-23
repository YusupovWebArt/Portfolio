'use client'

import React, { useState, useEffect, useRef } from 'react'
import {
  LuExternalLink as ExternalLink,
  LuX as X,
  LuArrowRight as ArrowRight,
  LuSearch as Search,
  LuChevronLeft as ChevronLeft,
  LuChevronRight as ChevronRight,
  LuStar,
} from 'react-icons/lu'
import { Project, TechnologyItem } from './projects/project-types'
import { useLanguage } from '../contexts/LanguageContext'
import { useDialogA11y } from '../hooks/useDialogA11y'
import { allProjects } from '../lib/projectRegistry'
import { getProjectSlugById } from '../data/projectSlugs'
import {
  getProjectTechList,
  matchesProjectSearch,
  getProjectSearchRelevanceScore,
} from '../lib/projects'

function getPaginationPages(current: number, total: number): (number | '...')[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1)
  }
  if (current <= 4) {
    return [1, 2, 3, 4, 5, '...', total]
  }
  if (current >= total - 3) {
    return [1, '...', total - 4, total - 3, total - 2, total - 1, total]
  }
  return [1, '...', current - 1, current, current + 1, '...', total]
}

interface ProjectsProps {
  onProjectSelect?: (projectId: number) => void
}

const getTechShort = (tech: TechnologyItem): string =>
  typeof tech === 'string' ? tech : tech.short

const getTechFull = (tech: TechnologyItem): string =>
  typeof tech === 'string' ? tech : tech.full || tech.short

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
  const [activeFilter, setActiveFilter] = useState(() => {
    if (typeof window === 'undefined') return 'all'
    try {
      const saved = sessionStorage.getItem('portfolio_projects_filter')
      return saved && filterIds.includes(saved) ? saved : 'all'
    } catch {
      return 'all'
    }
  })
  const [searchQuery, setSearchQuery] = useState(() => {
    if (typeof window === 'undefined') return ''
    try {
      return sessionStorage.getItem('portfolio_projects_search') || ''
    } catch {
      return ''
    }
  })
  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window === 'undefined') return 1
    try {
      const saved = sessionStorage.getItem('portfolio_projects_page')
      const num = saved ? parseInt(saved, 10) : 1
      return !isNaN(num) && num > 0 ? num : 1
    } catch {
      return 1
    }
  })
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

  // Persist search/filter/page to sessionStorage
  useEffect(() => {
    try {
      sessionStorage.setItem('portfolio_projects_filter', activeFilter)
      sessionStorage.setItem('portfolio_projects_search', searchQuery)
      sessionStorage.setItem('portfolio_projects_page', String(currentPage))
    } catch {
      // Ignore sessionStorage errors
    }
  }, [activeFilter, searchQuery, currentPage])

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

  // Filtering projects by category, tokenized multi-word search, and relevance sorting
  const filteredProjects = React.useMemo(() => {
    const list = projects.filter((project) => {
      const matchesCategory =
        activeFilter === 'all'
          ? true
          : activeFilter === 'personal'
            ? Boolean(project.isPersonal)
            : project.category.includes(activeFilter)
      if (!matchesCategory) return false

      return matchesProjectSearch(project, searchQuery)
    })

    if (searchQuery.trim()) {
      return [...list].sort(
        (a, b) =>
          getProjectSearchRelevanceScore(b, searchQuery) -
          getProjectSearchRelevanceScore(a, searchQuery),
      )
    }

    return list
  }, [activeFilter, searchQuery])

  // Check if there are matches across all categories when current category yields 0 results
  const globalSearchMatches = React.useMemo(() => {
    if (activeFilter === 'all' || !searchQuery.trim() || filteredProjects.length > 0) {
      return []
    }
    return projects.filter((project) => matchesProjectSearch(project, searchQuery))
  }, [activeFilter, searchQuery, filteredProjects.length])

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

  const screenshotModalRef = useRef<HTMLDivElement>(null)

  useDialogA11y({
    isOpen: screenshotModal.isOpen,
    onClose: closeScreenshotModal,
    dialogRef: screenshotModalRef,
  })

  const toggleTechExpanded = (projectId: number, e: React.MouseEvent) => {
    e.stopPropagation()
    setExpandedTechProjects((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }))
  }

  const handleCardLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    projectId: number,
  ) => {
    if (
      onProjectSelect &&
      e.button === 0 &&
      !e.ctrlKey &&
      !e.metaKey &&
      !e.shiftKey &&
      !e.altKey
    ) {
      e.preventDefault()
      onProjectSelect(projectId)
    }
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
              {globalSearchMatches.length > 0
                ? lang === 'ua'
                  ? `У вибраній категорії збігів немає, але знайдено ${globalSearchMatches.length} проєкт(ів) в усіх категоріях.`
                  : lang === 'es'
                    ? `No hay coincidencias en esta categoría, pero se encontraron ${globalSearchMatches.length} proyecto(s) en todas las categorías.`
                    : `No matches in this category, but found ${globalSearchMatches.length} matching project(s) across all categories.`
                : lang === 'ua'
                  ? 'Спробуйте змінити пошуковий запит або скинути активний фільтр категорій.'
                  : lang === 'es'
                    ? 'Prueba a cambiar los términos de búsqueda o restablecer los filtros.'
                    : 'Try adjusting your search keywords or resetting the category filter.'}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {globalSearchMatches.length > 0 && (
                <button
                  type="button"
                  onClick={() => setActiveFilter('all')}
                  className="px-5 py-2 rounded-xl text-xs font-semibold bg-purple-600 hover:bg-purple-700 dark:bg-lime-500 dark:hover:bg-lime-400 text-white dark:text-slate-950 transition-colors cursor-pointer"
                >
                  {lang === 'ua'
                    ? `Показати в усіх категоріях (${globalSearchMatches.length})`
                    : lang === 'es'
                      ? `Mostrar en todas las categorías (${globalSearchMatches.length})`
                      : `Show in all categories (${globalSearchMatches.length})`}
                </button>
              )}
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('')
                  setActiveFilter('all')
                }}
                className={`px-5 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                  globalSearchMatches.length > 0
                    ? 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200'
                    : 'bg-purple-600 hover:bg-purple-700 dark:bg-lime-500 dark:hover:bg-lime-400 text-white dark:text-slate-950'
                }`}
              >
                {lang === 'ua' ? 'Скинути всі фільтри' : lang === 'es' ? 'Restablecer filtros' : 'Reset all filters'}
              </button>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project) => {
            const allTech = getProjectTechList(project)
            const visibleTech = allTech.slice(0, 4)
            const remainingCount = allTech.length - visibleTech.length
            const isTechExpanded = Boolean(expandedTechProjects[project.id])
            const displayedTech = isTechExpanded ? allTech : visibleTech
            const projectSlug = getProjectSlugById(project.id)
            const projectHref = projectSlug
              ? `/${lang}/projects/${projectSlug}`
              : '#projects'

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
                      <LuStar aria-hidden="true" className="w-3 h-3 fill-current" />
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
                  <a
                    href={projectHref}
                    onClick={(e) => handleCardLinkClick(e, project.id)}
                    className="hover:text-purple-600 dark:hover:text-lime-400 transition-colors"
                  >
                    {project.title}
                  </a>
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
                  <a
                    href={projectHref}
                    onClick={(e) => handleCardLinkClick(e, project.id)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-purple-600 dark:text-lime-400 hover:text-purple-700 dark:hover:text-lime-300 transition-colors"
                  >
                    <span>{pr.viewDetails}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

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
          <nav
            aria-label={lang === 'ua' ? 'Навігація по сторінках проєктів' : lang === 'es' ? 'Paginación de proyectos' : 'Projects pagination'}
            className="flex items-center justify-center mt-10 gap-1.5 sm:gap-2 select-none"
          >
            <button
              type="button"
              onClick={() => {
                setCurrentPage((prev) => Math.max(1, prev - 1))
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
              disabled={currentPage === 1}
              aria-label={lang === 'ua' ? 'Попередня сторінка' : lang === 'es' ? 'Página anterior' : 'Previous page'}
              className="p-2 sm:px-3 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:not-disabled:bg-slate-100 dark:hover:not-disabled:bg-slate-700 cursor-pointer flex items-center gap-1"
            >
              <ChevronLeft className="w-4 h-4" aria-hidden="true" />
              <span className="hidden sm:inline">{lang === 'ua' ? 'Назад' : lang === 'es' ? 'Anterior' : 'Prev'}</span>
            </button>

            {getPaginationPages(currentPage, totalPages).map((page, idx) => {
              if (page === '...') {
                return (
                  <span
                    key={`ellipsis-${idx}`}
                    className="px-2 py-1 text-slate-400 dark:text-slate-500 font-bold select-none text-xs sm:text-sm"
                  >
                    ...
                  </span>
                )
              }
              const isCurrent = currentPage === page
              return (
                <button
                  key={page}
                  onClick={() => {
                    setCurrentPage(page)
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  aria-current={isCurrent ? 'page' : undefined}
                  aria-label={`${lang === 'ua' ? 'Сторінка' : lang === 'es' ? 'Página' : 'Page'} ${page}`}
                  type="button"
                  className={`min-w-9 h-9 sm:min-w-10 sm:h-10 px-2.5 rounded-xl font-bold text-xs sm:text-sm transition cursor-pointer flex items-center justify-center ${
                    isCurrent
                      ? 'bg-purple-600 text-white dark:bg-lime-500 dark:text-slate-900 shadow-md shadow-purple-500/20 dark:shadow-lime-500/20'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700/80'
                  }`}
                >
                  {page}
                </button>
              )
            })}

            <button
              type="button"
              onClick={() => {
                setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
              disabled={currentPage === totalPages}
              aria-label={lang === 'ua' ? 'Наступна сторінка' : lang === 'es' ? 'Página siguiente' : 'Next page'}
              className="p-2 sm:px-3 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:not-disabled:bg-slate-100 dark:hover:not-disabled:bg-slate-700 cursor-pointer flex items-center gap-1"
            >
              <span className="hidden sm:inline">{lang === 'ua' ? 'Вперед' : lang === 'es' ? 'Siguiente' : 'Next'}</span>
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </nav>
        )}

        {/* Модальное окно скриншота */}
        {screenshotModal.isOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-xs p-4"
            role="presentation"
            onClick={closeScreenshotModal}
          >
            <div
              ref={screenshotModalRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="screenshot-modal-title"
              tabIndex={-1}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-3xl w-full p-6 border border-slate-200/80 dark:border-white/10 focus:outline-none"
            >
              <button
                className="absolute top-4 right-4 text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-lime-400 p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700/60 transition cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-700 dark:focus-visible:outline-lime-400"
                onClick={closeScreenshotModal}
                title={pr.close || 'Close'}
                aria-label={pr.close || 'Close'}
                type="button"
              >
                <X size={20} aria-hidden="true" />
              </button>
              <div className="overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-900 flex items-center justify-center">
                <img
                  src={screenshotModal.image}
                  alt={screenshotModal.title}
                  className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-2xl mx-auto"
                />
              </div>
              <div className="mt-4 text-center">
                <h3
                  id="screenshot-modal-title"
                  className="text-lg font-bold text-slate-900 dark:text-white"
                >
                  {screenshotModal.title}
                </h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
