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
} from 'lucide-react'
import { Project, TechnologyItem } from './projects/project-types'

interface ProjectDetailProps {
  projectId: number
  onBack: () => void
}

// Автоматический импорт всех проектов
const projectModules = import.meta.glob<{ default: Project }>(
  './projects/*/*.tsx',
  { eager: true },
)
const projects: Project[] = Object.values(projectModules).map(
  (mod: any) => mod.default,
)

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

const ProjectDetail: React.FC<ProjectDetailProps> = ({ projectId, onBack }) => {
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

  const thumbnailScrollRef = useRef<HTMLDivElement>(null)
  const [thumbScrollState, setThumbScrollState] = useState({
    canLeft: false,
    canRight: false,
    hasOverflow: false,
  })

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
    const ro = new ResizeObserver(() => updateThumbScrollState())
    ro.observe(el)
    el.addEventListener('scroll', updateThumbScrollState, { passive: true })
    return () => {
      ro.disconnect()
      el.removeEventListener('scroll', updateThumbScrollState)
    }
  }, [projectId, updateThumbScrollState])

  /** Только горизонталь внутри ленты — scrollIntoView тянул весь document и уводил вниз к блоку со стеком. */
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
  }, [currentImageIndex, projectId, scrollActiveThumbHorizontal])

  // Сразу вверх без smooth — иначе scrollIntoView/предыдущая позиция страницы конфликтуют с прокруткой к заголовку
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
    const strip = thumbnailScrollRef.current
    if (strip) strip.scrollLeft = 0
  }, [projectId])

  const project = projects.find((p) => p.id === projectId)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Project not found
          </h2>
          <button
            onClick={onBack}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            type="button"
          >
            Back to Featured Projects
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
    setScreenshotModal({
      isOpen: true,
      image: project.images[currentImageIndex].src,
      title: project.title,
      caption: project.images[currentImageIndex].caption,
    })
    document.body.style.overflow = 'hidden'
  }

  const closeScreenshotModal = () => {
    setScreenshotModal({ isOpen: false, image: '', title: '', caption: '' })
    document.body.style.overflow = 'unset'
  }

  const hasGithub = Boolean(project.githubUrl && project.githubUrl !== '#')
  const metrics = project.detailMetrics ?? []

  return (
    <div className="max-w-7xl mx-auto px-2 md:px-8 pt-24 pb-10">
      {/* Отступ pt-24 — под фиксированный Header (h-16), иначе кнопка оказывается под шапкой */}
      <button
        onClick={onBack}
        type="button"
        className="mb-6 md:mb-8 flex w-full items-center justify-start gap-2 text-left text-sm sm:text-base font-semibold text-purple-600 dark:text-lime-400 hover:text-purple-700 dark:hover:text-lime-300 transition-colors"
      >
        <ArrowLeft className="h-5 w-5 shrink-0" aria-hidden />
        <span>Back to Featured Projects</span>
      </button>

      <section className="rounded-2xl bg-neutral-100 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 p-6 md:p-8 lg:p-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div className="space-y-4">
            <div className="relative bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm border border-slate-200/90 dark:border-slate-600">
              <img
                src={project.images[currentImageIndex].src}
                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                className="w-full h-80 md:h-96 object-cover"
              />

              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/95 dark:bg-slate-800/95 text-slate-700 dark:text-slate-200 p-2 rounded-full shadow-md transition hover:scale-105"
                    type="button"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/95 dark:bg-slate-800/95 text-slate-700 dark:text-slate-200 p-2 rounded-full shadow-md transition hover:scale-105"
                    type="button"
                    aria-label="Next image"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}

              {project.images.length > 0 && (
                <button
                  onClick={openScreenshotModal}
                  className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 bg-white dark:bg-slate-100 text-slate-800 px-3 py-1.5 rounded-full text-sm font-medium shadow border border-slate-200 dark:border-slate-300 hover:bg-slate-50 dark:hover:bg-white transition"
                  title="Zoom"
                  type="button"
                >
                  <Eye className="w-4 h-4" aria-hidden />
                  Zoom
                </button>
              )}
            </div>

            {project.images.length > 1 && (
              <div className="flex min-w-0 items-center gap-1 pb-2 sm:pb-3">
                {thumbScrollState.hasOverflow && (
                  <button
                    type="button"
                    aria-label="Scroll thumbnails left"
                    disabled={!thumbScrollState.canLeft}
                    onClick={() => scrollThumbnails('left')}
                    className={`flex h-14 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-sm transition dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 sm:h-16 sm:w-9 ${
                      thumbScrollState.canLeft
                        ? 'hover:bg-slate-50 dark:hover:bg-slate-700'
                        : 'cursor-not-allowed opacity-35'
                    }`}
                  >
                    <ChevronLeft className="h-5 w-5" aria-hidden />
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
                      className={`relative shrink-0 overflow-hidden rounded-lg border-2 transition-colors duration-200 ${
                        index === currentImageIndex
                          ? 'border-blue-500 dark:border-sky-400'
                          : 'border-slate-300/60 hover:border-slate-400 dark:border-slate-600 dark:hover:border-slate-500'
                      }`}
                      aria-label={`Screenshot ${index + 1}`}
                    >
                      <img
                        src={img.src}
                        alt={img.caption || project.title}
                        className="h-14 w-14 object-cover sm:h-16 sm:w-16"
                        onLoad={updateThumbScrollState}
                      />
                    </button>
                  ))}
                </div>
                {thumbScrollState.hasOverflow && (
                  <button
                    type="button"
                    aria-label="Scroll thumbnails right"
                    disabled={!thumbScrollState.canRight}
                    onClick={() => scrollThumbnails('right')}
                    className={`flex h-14 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-sm transition dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 sm:h-16 sm:w-9 ${
                      thumbScrollState.canRight
                        ? 'hover:bg-slate-50 dark:hover:bg-slate-700'
                        : 'cursor-not-allowed opacity-35'
                    }`}
                  >
                    <ChevronRight className="h-5 w-5" aria-hidden />
                  </button>
                )}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-6 min-w-0">
            {project.detailHeroLine && (
              <p className="text-xs sm:text-sm font-medium tracking-wide text-slate-500 dark:text-slate-400 uppercase">
                {project.detailHeroLine}
              </p>
            )}
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
              {project.title}
            </h1>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              {project.fullDescription}
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
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
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
                  View Live
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
            </div>
          </div>
        </div>
      </section>

      {/* Секция с технологиями, фичами и сложностями */}
      <section className="mt-12">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          {/* Technologies Used */}
          <div className="md:w-1/2 w-full bg-white dark:bg-slate-700 rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              Technical Stack
            </h3>

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

          {/* Key Features */}
          <div className="md:w-1/2 w-full bg-white dark:bg-slate-700 rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              Key Features
            </h3>
            <ul className="space-y-4">
              {project.features.map((feature, index) => {
                // Type guard для проверки объекта ProjectFeature
                const isProjectFeature = (
                  feature: any,
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
                  return (
                    <li key={index} className="space-y-2">
                      <div className="flex items-start space-x-3">
                        <span className="w-2 h-2 rounded-full bg-purple-500 dark:bg-lime-500 mt-2 flex-shrink-0"></span>
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                            {feature.title}
                          </h4>
                          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            {feature.description}
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
        </div>

        {/* Challenges & Solutions на всю ширину */}

        {(project.challenges.length > 0 || project.solutions.length > 0) && (
          <div className="bg-white mt-6 dark:bg-slate-700 rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
              Challenges & Solutions
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                  Challenges Faced:
                </h4>
                <ul className="space-y-2">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-red-500 dark:bg-orange-500 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-600 dark:text-slate-300 text-sm">
                        {challenge}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                  Solutions Implemented:
                </h4>
                <ul className="space-y-2">
                  {project.solutions.map((solution, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500 dark:bg-lime-500 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-600 dark:text-slate-300 text-sm">
                        {solution}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </section>

      {/*
  Screenshot Modal
*/}
      {screenshotModal.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="relative bg-white dark:bg-slate-800 rounded-lg shadow-lg w-full max-w-full sm:max-w-5xl p-6 flex flex-col items-center">
            <button
              className="absolute top-4 right-4 text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-lime-400"
              onClick={closeScreenshotModal}
              title="Закрыть"
              type="button"
            >
              <X size={24} />
            </button>
            {/* Navigation Arrows */}
            {project.images.length > 1 && (
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
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                  type="button"
                >
                  <ChevronLeft size={32} />
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
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                  type="button"
                >
                  <ChevronRight size={32} />
                </button>
              </>
            )}
            {/* Image */}
            <img
              src={screenshotModal.image}
              alt={screenshotModal.title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl mx-auto"
            />
            {/* Title & Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="text-white text-xl font-bold">
                {screenshotModal.title}
              </h3>
              <p className="text-gray-300 text-sm">{screenshotModal.caption}</p>
            </div>
          </div>
          {/* Click outside to close */}
          <div
            className="absolute inset-0 -z-10"
            onClick={closeScreenshotModal}
          ></div>
        </div>
      )}
    </div>
  )
}

export default ProjectDetail
