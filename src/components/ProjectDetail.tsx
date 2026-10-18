'use client'

import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
  useCallback,
} from 'react'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Eye,
  X,
  ExternalLink,
} from 'lucide-react'
import { Project, TechnologyItem } from './projects/project-types'
import { useLanguage } from '../contexts/LanguageContext'
import { projectRegistry } from '../lib/projectRegistry'
import { useDialogA11y } from '../hooks/useDialogA11y'
import ProjectChatTrigger from './ProjectChatTrigger'

interface ProjectDetailProps {
  projectId?: number
  slug?: string
  initialProject?: Project
  onBack?: () => void
  onSelectProject?: (projectId: number) => void
}

const projects: Project[] = projectRegistry.map((item) => item.project)

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

const getTechFull = (tech: TechnologyItem): string =>
  typeof tech === 'string' ? tech : tech.full || tech.short

function metricValueClass(accent?: 'green' | 'darkGreen' | 'neutral') {
  switch (accent) {
    case 'neutral':
      return 'text-slate-900 dark:text-white'
    case 'darkGreen':
      return 'text-emerald-800 dark:text-emerald-300'
    default:
      return 'text-emerald-600 dark:text-emerald-400'
  }
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({
  projectId,
  slug,
  initialProject,
  onBack,
  onSelectProject,
}) => {
  const { lang, t } = useLanguage()
  const pr = t.projects
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [screenshotModal, setScreenshotModal] = useState<{
    isOpen: boolean
    image: string
    title: string
    caption: string
  }>({
    isOpen: false,
    image: '',
    title: '',
    caption: '',
  })

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

  const screenshotModalRef = useRef<HTMLDivElement>(null)

  const closeScreenshotModal = useCallback(() => {
    setScreenshotModal({ isOpen: false, image: '', title: '', caption: '' })
  }, [])

  useDialogA11y({
    isOpen: screenshotModal.isOpen,
    onClose: closeScreenshotModal,
    dialogRef: screenshotModalRef,
  })

  const thumbnailScrollRef = useRef<HTMLDivElement>(null)
  const [thumbScrollState, setThumbScrollState] = useState({
    canLeft: false,
    canRight: false,
    hasOverflow: false,
  })

  const [detailTab, setDetailTab] = useState<
    'stack' | 'features' | 'architecture' | 'case-study'
  >('stack')



  const updateThumbScrollState = useCallback(() => {
    const el = thumbnailScrollRef.current
    if (!el) return
    const { scrollLeft, scrollWidth, clientWidth } = el
    const maxScroll = scrollWidth - clientWidth
    setThumbScrollState({
      canLeft: scrollLeft > 2,
      canRight: maxScroll > 2 && scrollLeft < maxScroll - 2,
      hasOverflow: maxScroll > 2,
    })
  }, [])

  const scrollThumbnails = useCallback((direction: 'left' | 'right') => {
    const el = thumbnailScrollRef.current
    if (!el) return
    const delta = Math.max(160, Math.floor(el.clientWidth * 0.75))
    el.scrollBy({
      left: direction === 'left' ? -delta : delta,
      behavior: 'smooth',
    })
  }, [])

  useEffect(() => {
    const el = thumbnailScrollRef.current
    if (!el) return
    updateThumbScrollState()
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(() => updateThumbScrollState()) : null
    ro?.observe(el)
    el.addEventListener('scroll', updateThumbScrollState, { passive: true })
    return () => {
      ro?.disconnect()
      el.removeEventListener('scroll', updateThumbScrollState)
    }
  }, [projectId, updateThumbScrollState])

  /** Только горизонталь внутри ленты - scrollIntoView тянул весь document и уводил вниз к блоку со стеком. */
  const scrollActiveThumbHorizontal = useCallback(() => {
    const container = thumbnailScrollRef.current
    if (!container) return
    const node = container.querySelector(
      `[data-thumb-index="${currentImageIndex}"]`,
    ) as HTMLElement | null
    if (!node) return
    const left =
      node.offsetLeft - container.clientWidth / 2 + node.offsetWidth / 2
    container.scrollTo({
      left: Math.max(0, left),
      behavior: 'smooth',
    })
    requestAnimationFrame(updateThumbScrollState)
  }, [currentImageIndex, updateThumbScrollState])

  useEffect(() => {
    const id = requestAnimationFrame(() => scrollActiveThumbHorizontal())
    return () => cancelAnimationFrame(id)
  }, [currentImageIndex, projectId, slug, scrollActiveThumbHorizontal])

  // Scroll immediately to top on project mount
  useIsomorphicLayoutEffect(() => {
    window.scrollTo(0, 0)
    const strip = thumbnailScrollRef.current
    if (strip) strip.scrollLeft = 0
  }, [projectId, slug])

  const defaultOnBack = useCallback(() => {
    if (typeof window !== 'undefined') {
      window.location.assign(`/${lang}#projects`)
    }
  }, [lang])

  const handleBack = onBack || defaultOnBack

  const project =
    initialProject ||
    (slug
      ? projectRegistry.find((p) => p.slug === slug.toLowerCase())?.project
      : projects.find((p) => p.id === projectId))

  const relatedProjects = React.useMemo(() => {
    if (!project) return []
    const currentCats = new Set(project.category)
    const matches = projects.filter((p) => {
      if (p.id === project.id) return false
      return p.category.some((c) => currentCats.has(c))
    })
    return matches.slice(0, 3)
  }, [project])

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Project not found
          </h2>
          <button
            onClick={handleBack}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            type="button"
          >
            {pr.backToProjects}
          </button>
        </div>
      </div>
    )
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + project.images.length) % project.images.length,
    )
  }

  const openScreenshotModal = () => {
    const currentImg = project.images[currentImageIndex]
    if (!currentImg) return
    setScreenshotModal({
      isOpen: true,
      image: currentImg.src,
      title: project.title,
      caption: currentImg.caption || `Screenshot ${currentImageIndex + 1}`,
    })
  }

  const openFullScreenshotModal = () => {
    let fullPagePath = project.fullScreenshot
    if (!fullPagePath) return

    // Rewrite path from thumbs to projects if necessary
    if (fullPagePath.includes('/thumbs/') && fullPagePath.includes('_thumb.')) {
      fullPagePath = fullPagePath.replace('/thumbs/', '/projects/').replace('_thumb.', '.')
    }

    setScreenshotModal({
      isOpen: true,
      image: fullPagePath,
      title: project.title,
      caption: 'Full page layout screenshot',
    })
  }

  const hasGithub = Boolean(project.githubUrl && project.githubUrl !== '#')
  const metrics = project.detailMetrics ?? []
  const hasArchitecture = Boolean(
    project.architecture?.rows?.length &&
      project.architecture.description?.trim(),
  )
  const hasCaseStudy = Boolean(
    project.challenges?.length || project.solutions?.length,
  )

  const activeTab =
    detailTab === 'architecture' && !hasArchitecture
      ? 'stack'
      : detailTab === 'case-study' && !hasCaseStudy
        ? 'stack'
        : detailTab

  const handleTabKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const tabOrder: Array<'stack' | 'features' | 'architecture' | 'case-study'> = [
      'stack',
      'features',
      ...(hasArchitecture ? (['architecture'] as const) : []),
      ...(hasCaseStudy ? (['case-study'] as const) : []),
    ]
    const currentIndex = tabOrder.indexOf(activeTab)
    let targetIndex = -1

    if (e.key === 'ArrowRight') {
      targetIndex = (currentIndex + 1) % tabOrder.length
    } else if (e.key === 'ArrowLeft') {
      targetIndex = (currentIndex - 1 + tabOrder.length) % tabOrder.length
    } else if (e.key === 'Home') {
      targetIndex = 0
    } else if (e.key === 'End') {
      targetIndex = tabOrder.length - 1
    }

    if (targetIndex !== -1) {
      e.preventDefault()
      const targetTab = tabOrder[targetIndex]
      setDetailTab(targetTab)
      const tabBtn = document.getElementById(`tab-project-${targetTab}`)
      tabBtn?.focus()
    }
  }

  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
      {/* Breadcrumb Navigation */}
      <nav aria-label={pr.breadcrumb} className="mb-4">
        <ol className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
          <li className="flex items-center gap-2">
            <a href={`/${lang}`} className="hover:text-purple-600 dark:hover:text-lime-400 transition-colors">
              {pr.home}
            </a>
            <span aria-hidden="true">/</span>
          </li>
          <li className="flex items-center gap-2">
            <a href={`/${lang}#projects`} className="hover:text-purple-600 dark:hover:text-lime-400 transition-colors">
              {pr.sectionTitle}
            </a>
            <span aria-hidden="true">/</span>
          </li>
          <li className="flex items-center">
            <span aria-current="page" className="font-semibold text-slate-800 dark:text-slate-200 truncate max-w-[200px] sm:max-w-none">
              {project.title}
            </span>
          </li>
        </ol>
      </nav>

      {/* Back button */}
      <button
        onClick={handleBack}
        type="button"
        className="mb-6 md:mb-8 flex w-full items-center justify-start gap-2 text-left text-sm sm:text-base font-semibold text-purple-600 dark:text-lime-400 hover:text-purple-700 dark:hover:text-lime-300 transition-colors cursor-pointer"
      >
        <ArrowLeft className="h-5 w-5 shrink-0" aria-hidden />
        <span>{pr.backToProjects}</span>
      </button>

      <section className="rounded-2xl bg-neutral-100 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 p-6 md:p-8 lg:p-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div className="space-y-4">
            <div className="relative bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm border border-slate-200/90 dark:border-slate-600">
              <img
                src={project.images[currentImageIndex].src}
                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                loading="lazy"
                style={{
                  viewTransitionName: `project-thumb-${project.id}`,
                }}
                className="w-full h-80 md:h-96 object-cover"
              />

              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/95 dark:bg-slate-800/95 text-slate-700 dark:text-slate-200 p-2 rounded-full shadow-md transition hover:scale-105 cursor-pointer"
                    type="button"
                    aria-label={pr.previousImage}
                  >
                    <ChevronLeft size={20} aria-hidden="true" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/95 dark:bg-slate-800/95 text-slate-700 dark:text-slate-200 p-2 rounded-full shadow-md transition hover:scale-105 cursor-pointer"
                    type="button"
                    aria-label={pr.nextImage}
                  >
                    <ChevronRight size={20} aria-hidden="true" />
                  </button>
                </>
              )}

              {project.images.length > 0 && (
                <button
                  onClick={openScreenshotModal}
                  className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 bg-white dark:bg-slate-100 text-slate-800 px-3 py-1.5 rounded-full text-sm font-medium shadow border border-slate-200 dark:border-slate-300 hover:bg-slate-50 dark:hover:bg-white transition cursor-pointer"
                  title="Zoom"
                  type="button"
                >
                  <Eye className="w-4 h-4" aria-hidden="true" />
                  {pr.zoom}
                </button>
              )}
            </div>

            {project.images.length > 1 && (
              <div className="flex min-w-0 items-center gap-1 pb-2 sm:pb-3">
                {thumbScrollState.hasOverflow && (
                  <button
                    type="button"
                    aria-label={pr.scrollThumbsLeft}
                    aria-disabled={!thumbScrollState.canLeft}
                    onClick={() => thumbScrollState.canLeft && scrollThumbnails('left')}
                    className={`flex h-14 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-sm transition dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 sm:h-16 sm:w-9 ${
                      thumbScrollState.canLeft
                        ? 'hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer'
                        : 'cursor-not-allowed opacity-35'
                    }`}
                  >
                    <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                  </button>
                )}
                <div
                  ref={thumbnailScrollRef}
                  className="scrollbar-none flex min-w-0 flex-1 flex-nowrap gap-2 overflow-x-auto overflow-y-visible scroll-smooth py-2.5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                >
                  {project.images.map((img, index) => (
                    <button
                      key={index}
                      type="button"
                      data-thumb-index={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative shrink-0 overflow-hidden rounded-lg border-2 transition-colors duration-200 cursor-pointer ${
                        index === currentImageIndex
                          ? 'border-blue-500 dark:border-sky-400'
                          : 'border-slate-300/60 hover:border-slate-400 dark:border-slate-600 dark:hover:border-slate-500'
                      }`}
                      aria-label={`${pr.screenshot} ${index + 1}`}
                      aria-current={index === currentImageIndex ? 'true' : undefined}
                    >
                      <img
                        src={img.src}
                        alt={img.caption || project.title}
                        loading="lazy"
                        className="h-14 w-14 object-cover sm:h-16 sm:w-16"
                        onLoad={updateThumbScrollState}
                      />
                    </button>
                  ))}
                </div>
                {thumbScrollState.hasOverflow && (
                  <button
                    type="button"
                    aria-label={pr.scrollThumbsRight}
                    aria-disabled={!thumbScrollState.canRight}
                    onClick={() => thumbScrollState.canRight && scrollThumbnails('right')}
                    className={`flex h-14 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-sm transition dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 sm:h-16 sm:w-9 ${
                      thumbScrollState.canRight
                        ? 'hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer'
                        : 'cursor-not-allowed opacity-35'
                    }`}
                  >
                    <ChevronRight className="h-5 w-5" aria-hidden="true" />
                  </button>
                )}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-6 min-w-0">
            {project.isPersonal && (
              <div className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-purple-100 dark:bg-lime-500/20 text-purple-700 dark:text-lime-300 border border-purple-300 dark:border-lime-500/30">
                <span>★</span>
                <span>
                  {lang === 'ua'
                    ? 'Власний флагманський продукт'
                    : lang === 'es'
                      ? 'Producto propio destacado'
                      : 'Personal Flagship Product'}
                </span>
              </div>
            )}
            {project.detailHeroLine && (
              <p className="text-xs sm:text-sm font-medium tracking-wide text-slate-600 dark:text-slate-400 uppercase">
                {project.detailHeroLine}
              </p>
            )}
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
              {project.title}
            </h1>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              {lang === 'ua' && project.fullDescriptionUa ? project.fullDescriptionUa : lang === 'es' && project.fullDescriptionEs ? project.fullDescriptionEs : project.fullDescription}
            </p>

            {metrics.length > 0 && (
              <div className="grid grid-cols-2 gap-3">
                {metrics.map((m, i) => (
                  <div
                    key={`${m.label}-${i}`}
                    className="rounded-xl bg-white/90 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-600 px-4 py-3"
                  >
                    <p
                      className={`text-xl sm:text-2xl font-bold tabular-nums ${metricValueClass(m.accent)}`}
                    >
                      {m.value}
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>
            )}

            <div className="flex flex-col gap-3 pt-1">
              {project.liveUrl && project.liveUrl !== '#' && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-3 text-sm font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition"
                >
                  {pr.liveSite}
                  <ArrowUpRight className="w-4 h-4" aria-hidden />
                </a>
              )}
              {hasGithub && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-900 dark:border-slate-300 bg-white dark:bg-transparent text-slate-900 dark:text-white px-4 py-3 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800/50 transition"
                >
                  GitHub
                  <ArrowRight className="w-4 h-4" aria-hidden />
                </a>
              )}
              {project.fullScreenshot && (
                <button
                  onClick={openFullScreenshotModal}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-purple-100 hover:bg-purple-200 dark:bg-lime-500/10 dark:hover:bg-lime-500/20 text-purple-700 dark:text-lime-400 px-4 py-3 text-sm font-semibold transition"
                  type="button"
                >
                  {pr.fullPageLayout}
                  <Eye className="w-4 h-4" aria-hidden />
                </button>
              )}
              <ProjectChatTrigger
                projectSlug={slug || project.title.toLowerCase().replace(/\s+/g, '-')}
                projectTitle={project.title}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Секция: Technical Stack / Key Features - табы */}
      <section className="mt-12">
        <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm dark:border-slate-600 dark:bg-slate-700">
          <div
            className="flex border-b border-slate-200 dark:border-slate-600"
            role="tablist"
            aria-label={pr.tabsLabel}
            onKeyDown={handleTabKeyDown}
          >
            <button
              type="button"
              role="tab"
              id="tab-project-stack"
              aria-selected={activeTab === 'stack'}
              aria-controls="panel-project-stack"
              tabIndex={activeTab === 'stack' ? 0 : -1}
              onClick={() => setDetailTab('stack')}
              className={`min-w-0 flex-1 px-4 py-3.5 text-center text-sm font-semibold transition-colors sm:text-base cursor-pointer ${
                activeTab === 'stack'
                  ? 'border-b-2 border-purple-600 text-purple-600 dark:border-lime-400 dark:text-lime-400'
                  : 'border-b-2 border-transparent text-slate-600 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white'
              }`}
            >
              {pr.tabs.stack}
            </button>
            <button
              type="button"
              role="tab"
              id="tab-project-features"
              aria-selected={activeTab === 'features'}
              aria-controls="panel-project-features"
              tabIndex={activeTab === 'features' ? 0 : -1}
              onClick={() => setDetailTab('features')}
              className={`min-w-0 flex-1 px-4 py-3.5 text-center text-sm font-semibold transition-colors sm:text-base cursor-pointer ${
                activeTab === 'features'
                  ? 'border-b-2 border-purple-600 text-purple-600 dark:border-lime-400 dark:text-lime-400'
                  : 'border-b-2 border-transparent text-slate-600 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white'
              }`}
            >
              {pr.tabs.features}
            </button>
            {hasArchitecture && (
              <button
                type="button"
                role="tab"
                id="tab-project-architecture"
                aria-selected={activeTab === 'architecture'}
                aria-controls="panel-project-architecture"
                tabIndex={activeTab === 'architecture' ? 0 : -1}
                onClick={() => setDetailTab('architecture')}
                className={`min-w-0 flex-1 px-4 py-3.5 text-center text-sm font-semibold transition-colors sm:text-base cursor-pointer ${
                  activeTab === 'architecture'
                    ? 'border-b-2 border-purple-600 text-purple-600 dark:border-lime-400 dark:text-lime-400'
                    : 'border-b-2 border-transparent text-slate-600 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white'
                }`}
              >
                {pr.tabs.architecture}
              </button>
            )}
            {hasCaseStudy && (
              <button
                type="button"
                role="tab"
                id="tab-project-case-study"
                aria-selected={activeTab === 'case-study'}
                aria-controls="panel-project-case-study"
                tabIndex={activeTab === 'case-study' ? 0 : -1}
                onClick={() => setDetailTab('case-study')}
                className={`min-w-0 flex-1 px-4 py-3.5 text-center text-sm font-semibold transition-colors sm:text-base cursor-pointer ${
                  activeTab === 'case-study'
                    ? 'border-b-2 border-purple-600 text-purple-600 dark:border-lime-400 dark:text-lime-400'
                    : 'border-b-2 border-transparent text-slate-600 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white'
                }`}
              >
                {pr.tabs.caseStudy}
              </button>
            )}
          </div>

          <div className="p-6 sm:p-8">
            {activeTab === 'stack' && (
              <div
                id="panel-project-stack"
                role="tabpanel"
                tabIndex={0}
                aria-labelledby="tab-project-stack"
                className="focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-purple-700 dark:focus-visible:outline-lime-400"
              >
                {/* Проверяем, используется ли новая структура с категориями */}
                {Array.isArray(project.technologies) ? (
                  // Старая структура - отображаем как сетку с точками
                  <div className="grid sm:grid-cols-2 gap-3">
                    {project.technologies.map((tech, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-600"
                      >
                        <div className="w-2 h-2 rounded-full bg-purple-500 dark:bg-lime-500 flex-shrink-0"></div>
                        <span className="text-slate-700 dark:text-slate-300 font-medium">
                          {getTechFull(tech as TechnologyItem)}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  // Новая структура с категориями
                  <div className="space-y-3">
                {/* Frontend */}
                {project.technologies.frontend &&
                  project.technologies.frontend.length > 0 && (
                    <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-600">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                        Frontend:
                      </h4>
                      <ul className="list-none pl-2 space-y-1 text-slate-600 dark:text-slate-300">
                        {project.technologies.frontend.map((tech, idx) => (
                          <li
                            key={idx}
                            className="relative pl-2 before:absolute before:left-0 before:top-0 before:text-slate-600 dark:before:text-slate-300 before:content-['-']"
                          >
                            {getTechFull(tech)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                {/* Backend */}
                {project.technologies.backend &&
                  project.technologies.backend.length > 0 && (
                    <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-600">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                        Backend:
                      </h4>
                      <ul className="list-none pl-2 space-y-1 text-slate-600 dark:text-slate-300">
                        {project.technologies.backend.map((tech, idx) => (
                          <li
                            key={idx}
                            className="relative pl-2 before:absolute before:left-0 before:top-0 before:text-slate-600 dark:before:text-slate-300 before:content-['-']"
                          >
                            {getTechFull(tech)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                {/* API */}
                {project.technologies.api &&
                  project.technologies.api.length > 0 && (
                    <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-600">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                        API:
                      </h4>
                      <ul className="list-none pl-2 space-y-1 text-slate-600 dark:text-slate-300">
                        {project.technologies.api.map((tech, idx) => (
                          <li
                            key={idx}
                            className="relative pl-2 before:absolute before:left-0 before:top-0 before:text-slate-600 dark:before:text-slate-300 before:content-['-']"
                          >
                            {getTechFull(tech)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                {/* Content Management */}
                {project.technologies.contentManagement &&
                  project.technologies.contentManagement.length > 0 && (
                    <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-600">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                        Content Management:
                      </h4>
                      <ul className="list-none pl-2 space-y-1 text-slate-600 dark:text-slate-300">
                        {project.technologies.contentManagement.map(
                          (tech, idx) => (
                            <li
                              key={idx}
                              className="relative pl-2 before:absolute before:left-0 before:top-0 before:text-slate-600 dark:before:text-slate-300 before:content-['-']"
                            >
                              {getTechFull(tech)}
                            </li>
                          ),
                        )}
                      </ul>
                    </div>
                  )}

                {/* DevOps & Security */}
                {project.technologies.devopsSecurity &&
                  project.technologies.devopsSecurity.length > 0 && (
                    <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-600">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                        DevOps & Security:
                      </h4>
                      <ul className="list-none pl-2 space-y-1 text-slate-600 dark:text-slate-300">
                        {project.technologies.devopsSecurity.map(
                          (tech, idx) => (
                            <li
                              key={idx}
                              className="relative pl-2 before:absolute before:left-0 before:top-0 before:text-slate-600 dark:before:text-slate-300 before:content-['-']"
                            >
                              {getTechFull(tech)}
                            </li>
                          ),
                        )}
                      </ul>
                    </div>
                  )}

                {/* Analytics */}
                {project.technologies.analytics &&
                  project.technologies.analytics.length > 0 && (
                    <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-600">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                        Analytics:
                      </h4>
                      <ul className="list-none pl-2 space-y-1 text-slate-600 dark:text-slate-300">
                        {project.technologies.analytics.map((tech, idx) => (
                          <li
                            key={idx}
                            className="relative pl-2 before:absolute before:left-0 before:top-0 before:text-slate-600 dark:before:text-slate-300 before:content-['-']"
                          >
                            {getTechFull(tech)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                {/* AI Tools */}
                {project.technologies.aiTools &&
                  project.technologies.aiTools.length > 0 && (
                    <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-600">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                        AI Tools:
                      </h4>
                      <ul className="list-none pl-2 space-y-1 text-slate-600 dark:text-slate-300">
                        {project.technologies.aiTools.map((tech, idx) => (
                          <li
                            key={idx}
                            className="relative pl-2 before:absolute before:left-0 before:top-0 before:text-slate-600 dark:before:text-slate-300 before:content-['-']"
                          >
                            {getTechFull(tech)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                {/* SEO */}
                {project.technologies.seo &&
                  project.technologies.seo.length > 0 && (
                    <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-600">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                        SEO:
                      </h4>
                      <ul className="list-none pl-2 space-y-1 text-slate-600 dark:text-slate-300">
                        {project.technologies.seo.map((tech, idx) => (
                          <li
                            key={idx}
                            className="relative pl-2 before:absolute before:left-0 before:top-0 before:text-slate-600 dark:before:text-slate-300 before:content-['-']"
                          >
                            {getTechFull(tech)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                {/* Technical Optimization */}
                {project.technologies.technicalOptimization &&
                  project.technologies.technicalOptimization.length > 0 && (
                    <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-600">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                        Technical Optimization:
                      </h4>
                      <ul className="list-none pl-2 space-y-1 text-slate-600 dark:text-slate-300">
                        {project.technologies.technicalOptimization.map(
                          (tech, idx) => (
                            <li
                              key={idx}
                              className="relative pl-2 before:absolute before:left-0 before:top-0 before:text-slate-600 dark:before:text-slate-300 before:content-['-']"
                            >
                              {getTechFull(tech)}
                            </li>
                          ),
                        )}
                      </ul>
                    </div>
                  )}

                {/* Digital Marketing */}
                {project.technologies.digitalMarketing &&
                  project.technologies.digitalMarketing.length > 0 && (
                    <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-600">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                        Digital Marketing:
                      </h4>
                      <ul className="list-none pl-2 space-y-1 text-slate-600 dark:text-slate-300">
                        {project.technologies.digitalMarketing.map(
                          (tech, idx) => (
                            <li
                              key={idx}
                              className="relative pl-2 before:absolute before:left-0 before:top-0 before:text-slate-600 dark:before:text-slate-300 before:content-['-']"
                            >
                              {getTechFull(tech)}
                            </li>
                          ),
                        )}
                      </ul>
                    </div>
                  )}
              </div>
            )}
              </div>
            )}

            {activeTab === 'features' && (
              <div
                id="panel-project-features"
                role="tabpanel"
                tabIndex={0}
                aria-labelledby="tab-project-features"
                className="focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-purple-700 dark:focus-visible:outline-lime-400"
              >
                <ul className="space-y-4">
                  {project.features.map((feature, index) => {
                // Type guard для проверки объекта ProjectFeature
                const isProjectFeature = (
                  feature: unknown,
                ): feature is { title: string; description: string } => {
                  return (
                    typeof feature === 'object' &&
                    feature !== null &&
                    'title' in feature &&
                    'description' in feature &&
                    typeof feature.title === 'string' &&
                    typeof feature.description === 'string'
                  )
                }

                if (isProjectFeature(feature)) {
                  const feat = feature as unknown as {
                    title: string
                    titleUa?: string
                    titleEs?: string
                    description: string
                    descriptionUa?: string
                    descriptionEs?: string
                  }
                  const fTitle =
                    lang === 'ua' && feat.titleUa
                      ? feat.titleUa
                      : lang === 'es' && feat.titleEs
                        ? feat.titleEs
                        : feat.title
                  const fDesc =
                    lang === 'ua' && feat.descriptionUa
                      ? feat.descriptionUa
                      : lang === 'es' && feat.descriptionEs
                        ? feat.descriptionEs
                        : feat.description

                  return (
                    <li key={index} className="space-y-2">
                      <div className="flex items-start space-x-3">
                        <span className="w-2 h-2 rounded-full bg-purple-500 dark:bg-lime-500 mt-2 flex-shrink-0"></span>
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                            {fTitle}
                          </h4>
                          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            {fDesc}
                          </p>
                        </div>
                      </div>
                    </li>
                  )
                } else {
                  // Старый формат - просто текст или React.ReactNode
                  return (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="w-2 h-2 rounded-full bg-purple-500 dark:bg-lime-500 mt-2 flex-shrink-0"></span>
                      <span className="text-slate-600 dark:text-slate-300">
                        {typeof feature === 'string'
                          ? feature
                          : React.isValidElement(feature)
                            ? feature
                            : ''}
                      </span>
                    </li>
                  )
                }
                  })}
                </ul>
              </div>
            )}

            {activeTab === 'architecture' && hasArchitecture && project.architecture && (
              <div
                id="panel-project-architecture"
                role="tabpanel"
                tabIndex={0}
                aria-labelledby="tab-project-architecture"
                className="space-y-6 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-purple-700 dark:focus-visible:outline-lime-400"
              >
                {project.architecture.rows.map((row, rowIdx) => (
                  <div
                    key={rowIdx}
                    className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4"
                  >
                    <span className="shrink-0 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 sm:mt-2 sm:w-24">
                      {row.rowLabel}
                    </span>
                    <div className="flex min-w-0 flex-1 flex-wrap items-center gap-x-2 gap-y-2">
                      {row.steps.map((step, stepIdx) => (
                        <React.Fragment key={`${rowIdx}-${stepIdx}`}>
                          {stepIdx > 0 && (
                            <span
                              className="text-slate-400 dark:text-slate-400"
                              aria-hidden
                            >
                              →
                            </span>
                          )}
                          <span
                            className={`inline-flex rounded-full border px-3 py-1.5 text-sm font-medium ${
                              step.highlight
                                ? 'border-sky-400 bg-sky-100 text-sky-900 dark:border-sky-500 dark:bg-sky-900/50 dark:text-sky-100'
                                : 'border-slate-300 bg-white text-slate-800 dark:border-slate-600 dark:bg-slate-800/80 dark:text-slate-200'
                            }`}
                          >
                            {step.label}
                          </span>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-relaxed text-slate-700 dark:border-slate-600 dark:bg-slate-800/80 dark:text-slate-300">
                  {lang === 'ua' && project.architecture.descriptionUa
                    ? project.architecture.descriptionUa
                    : lang === 'es' && project.architecture.descriptionEs
                      ? project.architecture.descriptionEs
                      : project.architecture.description}
                </div>
              </div>
            )}

            {activeTab === 'case-study' && hasCaseStudy && (
              <div
                id="panel-project-case-study"
                role="tabpanel"
                tabIndex={0}
                aria-labelledby="tab-project-case-study"
                className="space-y-6 animate-fade-in focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-purple-700 dark:focus-visible:outline-lime-400"
              >
                {(() => {
                  const challengesList =
                    lang === 'ua' && project.challengesUa
                      ? project.challengesUa
                      : lang === 'es' && project.challengesEs
                        ? project.challengesEs
                        : project.challenges
                  const solutionsList =
                    lang === 'ua' && project.solutionsUa
                      ? project.solutionsUa
                      : lang === 'es' && project.solutionsEs
                        ? project.solutionsEs
                        : project.solutions

                  return (
                    <>
                      {challengesList && challengesList.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-slate-900 dark:text-white mb-3 text-sm uppercase tracking-wider text-slate-500 dark:text-slate-400">
                            {lang === 'ua' ? 'Виклики:' : lang === 'es' ? 'Desafíos afrontados:' : 'Challenges Faced:'}
                          </h4>
                          <ul className="space-y-2">
                            {challengesList.map((challenge, index) => (
                              <li key={index} className="flex items-start space-x-3">
                                <div className="w-2 h-2 rounded-full bg-red-500 dark:bg-orange-500 mt-2 flex-shrink-0"></div>
                                <span className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                                  {challenge}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {solutionsList && solutionsList.length > 0 && (
                        <div className="pt-2">
                          <h4 className="font-semibold text-slate-900 dark:text-white mb-3 text-sm uppercase tracking-wider text-slate-500 dark:text-slate-400">
                            {lang === 'ua' ? 'Реалізовані рішення:' : lang === 'es' ? 'Soluciones implementadas:' : 'Solutions Implemented:'}
                          </h4>
                          <ul className="space-y-2">
                            {solutionsList.map((solution, index) => (
                              <li key={index} className="flex items-start space-x-3">
                                <div className="w-2 h-2 rounded-full bg-blue-500 dark:bg-lime-500 mt-2 flex-shrink-0"></div>
                                <span className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                                  {solution}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </>
                  )
                })()}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      {relatedProjects.length > 0 && (
        <section className="py-12 bg-slate-50/80 dark:bg-slate-900/60 border-t border-slate-200/70 dark:border-white/5 transition-colors duration-300">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {lang === 'ua'
                    ? 'Схожі проєкти та кейси'
                    : lang === 'es'
                      ? 'Proyectos y casos de estudio relacionados'
                      : 'Related Case Studies & Projects'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                  {lang === 'ua'
                    ? 'Ознайомтеся з іншими роботами у схожому стеку та бізнес-домені'
                    : lang === 'es'
                      ? 'Explora otros proyectos con tecnología y objetivos similares'
                      : 'Explore other works with similar technical stack and domain requirements'}
                </p>
              </div>
              {onBack && (
                <button
                  type="button"
                  onClick={onBack}
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-purple-600 dark:text-lime-400 hover:text-purple-700 dark:hover:text-lime-300 transition cursor-pointer"
                >
                  <span>{lang === 'ua' ? 'Всі проєкти' : lang === 'es' ? 'Ver todos' : 'View all projects'}</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((relProj) => {
                const relDesc =
                  lang === 'es' && relProj.descriptionEs
                    ? relProj.descriptionEs
                    : lang === 'ua' && relProj.descriptionUa
                      ? relProj.descriptionUa
                      : relProj.description
                const relSlug = projectRegistry.find((p) => p.project.id === relProj.id)?.slug
                const basePath =
                  typeof window !== 'undefined' && window.location.pathname.startsWith('/Portfolio')
                    ? '/Portfolio'
                    : ''
                const targetUrl = relSlug ? `${basePath}/${lang}/projects/${relSlug}` : undefined

                const handleNavigate = () => {
                  if (onSelectProject) {
                    onSelectProject(relProj.id)
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }
                }

                return (
                  <div
                    key={relProj.id}
                    onClick={handleNavigate}
                    className={`bg-white dark:bg-slate-800 rounded-2xl p-4 border border-slate-200/80 dark:border-slate-700/60 shadow-xs flex flex-col justify-between hover:shadow-md hover:border-purple-300 dark:hover:border-lime-500/30 transition-all duration-300 group ${
                      onSelectProject ? 'cursor-pointer' : ''
                    }`}
                  >
                    <div>
                      <div className="relative overflow-hidden rounded-xl h-40 mb-3 bg-slate-100 dark:bg-slate-900">
                        <img
                          src={relProj.images[0]?.src || relProj.image}
                          alt={relProj.title}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-purple-800 dark:text-lime-400 bg-purple-100 dark:bg-lime-500/20 px-2.5 py-0.5 rounded-full">
                          {relProj.category[0] || 'Web Development'}
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white line-clamp-1">
                        {relProj.title}
                      </h4>
                      <p className="text-xs text-slate-700 dark:text-slate-300 mt-1 line-clamp-2 leading-relaxed">
                        {relDesc}
                      </p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                      {onSelectProject ? (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation()
                            handleNavigate()
                          }}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-700 dark:text-lime-400 hover:text-purple-900 dark:hover:text-lime-300 transition cursor-pointer"
                        >
                          <span>{pr.viewProject || 'View Case Study'}</span>
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                        </button>
                      ) : targetUrl ? (
                        <a
                          href={targetUrl}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-700 dark:text-lime-400 hover:text-purple-900 dark:hover:text-lime-300 transition"
                        >
                          <span>{pr.viewProject || 'View Case Study'}</span>
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                        </a>
                      ) : (
                        <span className="text-xs font-semibold text-slate-500">Case Study</span>
                      )}
                      {relProj.liveUrl && relProj.liveUrl !== '#' && (
                        <a
                          href={relProj.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition p-1"
                          title="Live Demo"
                        >
                          <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/*
  Screenshot Modal
*/}
      {screenshotModal.isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={closeScreenshotModal}
        >
          <div
            ref={screenshotModalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="screenshot-modal-title"
            tabIndex={-1}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-5xl overflow-hidden flex flex-col focus:outline-none"
          >
            {/* Close Button inside Modal Card (top-right) */}
            <button
              className="absolute top-3 right-3 md:top-4 md:right-4 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 p-1.5 md:p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800/80 transition z-50 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-700 dark:focus-visible:outline-lime-400"
              onClick={closeScreenshotModal}
              title={pr.close}
              aria-label={pr.close}
              type="button"
            >
              <X size={20} aria-hidden="true" />
            </button>

            {/* Navigation Arrows (Only show when viewing carousel slides, not full screenshot) */}
            {project.images.length > 1 && project.images.some(img => img.src === screenshotModal.image) && (
              <>
                <button
                  onClick={() =>
                    setScreenshotModal((prev) => {
                      const newIndex =
                        (project.images.findIndex(
                          (img) => img.src === prev.image,
                        ) -
                          1 +
                          project.images.length) %
                        project.images.length
                      return {
                        ...prev,
                        image: project.images[newIndex].src,
                        caption: project.images[newIndex].caption,
                      }
                    })
                  }
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/95 dark:bg-slate-800/95 text-slate-700 dark:text-slate-200 p-2.5 rounded-full shadow-lg border border-slate-200/50 dark:border-white/5 transition hover:scale-110 z-30 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-700 dark:focus-visible:outline-lime-400"
                  type="button"
                  aria-label={pr.previousImage}
                >
                  <ChevronLeft size={24} aria-hidden="true" />
                </button>
                <button
                  onClick={() =>
                    setScreenshotModal((prev) => {
                      const newIndex =
                        (project.images.findIndex(
                          (img) => img.src === prev.image,
                        ) +
                          1) %
                        project.images.length
                      return {
                        ...prev,
                        image: project.images[newIndex].src,
                        caption: project.images[newIndex].caption,
                      }
                    })
                  }
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/95 dark:bg-slate-800/95 text-slate-700 dark:text-slate-200 p-2.5 rounded-full shadow-lg border border-slate-200/50 dark:border-white/5 transition hover:scale-110 z-30 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-700 dark:focus-visible:outline-lime-400"
                  type="button"
                  aria-label={pr.nextImage}
                >
                  <ChevronRight size={24} aria-hidden="true" />
                </button>
              </>
            )}
            
            {/* Scrollable Image Area with top-padding to clear the close button */}
            <div className="px-4 md:px-6 pb-4 pt-12 md:pt-14">
              {(() => {
                const isFullPage = !project.images.some(img => img.src === screenshotModal.image)
                return (
                  <div className={`w-full overflow-y-auto max-h-[65vh] md:max-h-[70vh] green-scrollbar rounded-xl border border-slate-200/50 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/40 ${isFullPage ? '' : 'flex items-center justify-center'}`}>
                    <img
                      src={screenshotModal.image}
                      alt={screenshotModal.title}
                      className={isFullPage ? 'w-full h-auto shadow-2xl mx-auto' : 'max-w-full max-h-[65vh] md:max-h-[70vh] object-contain rounded-lg shadow-2xl mx-auto'}
                      onError={() => {
                        // Fallback to currently selected slide image if full page screenshot fails to load
                        if (screenshotModal.image !== project.images[currentImageIndex].src) {
                          setScreenshotModal((prev) => ({
                            ...prev,
                            image: project.images[currentImageIndex].src,
                            caption: project.images[currentImageIndex].caption,
                          }))
                        }
                      }}
                    />
                  </div>
                )
              })()}
            </div>

            {/* Title & Caption - Statically positioned footer (No overlay!) */}
            <div className="px-4 md:px-6 py-4 border-t border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-slate-950/20 text-left">
              <h3 id="screenshot-modal-title" className="text-slate-900 dark:text-white text-base font-bold">
                {screenshotModal.title}
              </h3>
              {screenshotModal.caption && (
                <p className="text-slate-600 dark:text-slate-400 text-xs mt-1">
                  {screenshotModal.caption}
                </p>
              )}
            </div>

          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectDetail
