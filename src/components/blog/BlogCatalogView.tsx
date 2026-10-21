'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowLeft,
  Clock,
  Calendar,
  Search,
  X,
  Sparkles,
  Bot,
  Mail,
  SlidersHorizontal,
  BookOpen,
  FolderOpen,
} from 'lucide-react'
import {
  allBlogPosts,
  getBlogTitle,
  getBlogDescription,
  getBlogReadTime,
  getBlogCategoryLabel,
  BlogPost,
} from '../../data/blog'

interface BlogCatalogViewProps {
  locale: string
  onBack?: () => void
  onSelectPost?: (slug: string) => void
  onSelectProject?: (projectId: number) => void
}

export default function BlogCatalogView({
  locale,
  onBack,
  onSelectPost,
  onSelectProject,
}: BlogCatalogViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState<string>('')

  const isUa = locale === 'ua'
  const isEs = locale === 'es'

  const categories = useMemo(
    () => [
      {
        id: 'all',
        label: isUa ? 'Всі інженерні статті' : isEs ? 'Todos los artículos' : 'All Engineering Articles',
      },
      {
        id: 'architecture-tco',
        label: isUa ? 'Архітектура та TCO' : isEs ? 'Arquitectura y TCO' : 'Architecture & TCO',
      },
      {
        id: 'ai-engineering',
        label: isUa ? 'AI та RAG інженерія' : isEs ? 'Ingeniería de IA y RAG' : 'AI & RAG Engineering',
      },
      {
        id: 'accessibility-compliance',
        label: isUa ? 'Доступність (WCAG / EAA)' : isEs ? 'Accesibilidad (WCAG / EAA)' : 'Accessibility & Compliance',
      },
      {
        id: 'performance-cwv',
        label: isUa ? 'Продуктивність та CWV' : isEs ? 'Rendimiento y CWV' : 'Performance & Core Web Vitals',
      },
      {
        id: 'ecommerce-cms',
        label: isUa ? 'E-Commerce та CMS' : isEs ? 'E-Commerce e Ingeniería CMS' : 'E-Commerce & CMS Engineering',
      },
    ],
    [isUa, isEs],
  )

  const popularTags = useMemo(
    () => [
      'Next.js 16',
      'WordPress',
      'Core Web Vitals',
      'RAG AI',
      'WCAG 2.2',
      'Shopify',
      'PHP 8.2',
      'DevSecOps',
      'AWS',
      'Vite',
    ],
    [],
  )

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: allBlogPosts.length }
    for (const post of allBlogPosts) {
      counts[post.category] = (counts[post.category] || 0) + 1
    }
    return counts
  }, [])

  const filteredPosts = useMemo(() => {
    return allBlogPosts.filter((post) => {
      // 1. Category filter
      if (selectedCategory !== 'all' && post.category !== selectedCategory) {
        return false
      }

      // 2. Tag filter
      if (
        selectedTag &&
        !post.tags.some((t) => t.toLowerCase() === selectedTag.toLowerCase())
      ) {
        return false
      }

      // 3. Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim()
        const title = getBlogTitle(post, locale).toLowerCase()
        const desc = getBlogDescription(post, locale).toLowerCase()
        const inTags = post.tags.some((t) => t.toLowerCase().includes(q))
        const inProjects = post.appliedProjects?.some(
          (p) =>
            p.name.toLowerCase().includes(q) || p.slug.toLowerCase().includes(q),
        )
        if (!title.includes(q) && !desc.includes(q) && !inTags && !inProjects) {
          return false
        }
      }

      return true
    })
  }, [selectedCategory, selectedTag, searchQuery, locale])

  const isFiltering =
    selectedCategory !== 'all' || selectedTag !== null || searchQuery.trim() !== ''

  const handleResetFilters = () => {
    setSelectedCategory('all')
    setSelectedTag(null)
    setSearchQuery('')
  }

  const handleTagClick = (tag: string) => {
    setSelectedTag((prev) => (prev === tag ? null : tag))
  }

  const handleConsultationAiTrigger = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('open-ai-chat-context', {
          detail: {
            projectSlug: 'services',
            projectTitle: isUa
              ? 'Архітектурний аудит'
              : isEs
                ? 'Auditoría de Arquitectura'
                : 'Architecture Audit',
          },
        }),
      )
    }
  }

  const headerTitle = isUa
    ? 'Інженерний блог та архітектурні розбори'
    : isEs
      ? 'Blog de Ingeniería y Casos de Arquitectura'
      : 'Engineering Blog & Architectural Deep Dives'

  const headerSubtitle = isUa
    ? 'Практичні технічні статті про архітектуру вебу, Next.js 16, кастомний WordPress, автономні RAG AI-рушії та стандарти доступності WCAG 2.2 AA.'
    : isEs
      ? 'Artículos técnicos en profundidad sobre arquitectura web, Next.js 16, WordPress a medida, motores de IA con RAG en cliente y accesibilidad WCAG 2.2 AA.'
      : 'In-depth engineering writeups on modern web architecture, Next.js 16, custom WordPress, autonomous in-browser RAG AI engines, and WCAG 2.2 AA compliance.'

  // Determine featured post
  const featuredPost: BlogPost | null =
    !isFiltering && allBlogPosts.length > 0 ? allBlogPosts[0] : null
  const standardPosts: BlogPost[] =
    !isFiltering && allBlogPosts.length > 1
      ? allBlogPosts.slice(1)
      : filteredPosts

  return (
    <div className="min-h-screen pt-24 pb-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {onBack && (
          <div className="mb-6">
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
              <span>
                {isUa
                  ? 'Назад до портфоліо'
                  : isEs
                    ? 'Volver al portafolio'
                    : 'Back to Portfolio'}
              </span>
            </button>
          </div>
        )}

        {/* Page Header */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 dark:bg-lime-500/10 text-purple-700 dark:text-lime-400 border border-purple-200 dark:border-lime-500/20 mb-4">
            <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
            <span>
              {isUa
                ? 'Інженерний хаб знань'
                : isEs
                  ? 'Centro de Conocimiento Técnico'
                  : 'Engineering Knowledge Hub'}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            {headerTitle}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {headerSubtitle}
          </p>
        </div>

        {/* Main 2-Column Grid: Left Sticky Sidebar + Right Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* ================= LEFT STICKY SIDEBAR ================= */}
          <aside className="lg:col-span-4 xl:col-span-3 lg:sticky lg:top-28 space-y-6">
            {/* Search Input Box */}
            <div className="bg-white dark:bg-slate-800/90 rounded-2xl p-4 border border-slate-200/80 dark:border-slate-700/70 shadow-sm">
              <label
                htmlFor="blog-search-input"
                className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-1.5"
              >
                <Search className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{isUa ? 'Пошук статей' : isEs ? 'Buscar artículos' : 'Search Articles'}</span>
              </label>
              <div className="relative mt-2">
                <input
                  id="blog-search-input"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={
                    isUa
                      ? 'Введіть тему, Next.js, TCO...'
                      : isEs
                        ? 'Tema, Next.js, TCO...'
                        : 'Topic, Next.js, TCO...'
                  }
                  className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-lime-400 transition"
                />
                <Search
                  className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                  aria-hidden="true"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-0.5 rounded cursor-pointer"
                    aria-label={isUa ? 'Очистити пошук' : isEs ? 'Limpiar búsqueda' : 'Clear search'}
                  >
                    <X className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                )}
              </div>
            </div>

            {/* Vertical Categories Navigation */}
            <div className="bg-white dark:bg-slate-800/90 rounded-2xl p-4 sm:p-5 border border-slate-200/80 dark:border-slate-700/70 shadow-sm">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-1.5">
                <FolderOpen className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{isUa ? 'Рубрики' : isEs ? 'Categorías' : 'Categories'}</span>
              </div>
              <nav className="space-y-1.5" aria-label="Blog Categories">
                {categories.map((cat) => {
                  const isActive = selectedCategory === cat.id
                  const count = categoryCounts[cat.id] || 0
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all text-left cursor-pointer ${
                        isActive
                          ? 'bg-purple-600 text-white dark:bg-lime-500 dark:text-slate-950 shadow-md font-bold'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/60'
                      }`}
                    >
                      <span className="truncate pr-2">{cat.label}</span>
                      <span
                        className={`text-[11px] font-bold px-2 py-0.5 rounded-full shrink-0 ${
                          isActive
                            ? 'bg-white/20 text-white dark:bg-slate-950/20 dark:text-slate-950'
                            : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400'
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  )
                })}
              </nav>
            </div>

            {/* Popular Tech Tags Filters */}
            <div className="bg-white dark:bg-slate-800/90 rounded-2xl p-4 sm:p-5 border border-slate-200/80 dark:border-slate-700/70 shadow-sm">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-1.5">
                <SlidersHorizontal className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{isUa ? 'Фільтр за стеком' : isEs ? 'Filtrar por stack' : 'Tech Stack Filter'}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {popularTags.map((tag) => {
                  const isTagActive = selectedTag?.toLowerCase() === tag.toLowerCase()
                  return (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => handleTagClick(tag)}
                      className={`text-xs font-medium px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                        isTagActive
                          ? 'bg-purple-700 text-white dark:bg-lime-500 dark:text-slate-950 shadow-sm ring-2 ring-purple-400 dark:ring-lime-300'
                          : 'bg-slate-100 dark:bg-slate-700/80 text-slate-700 dark:text-slate-300 hover:bg-purple-100 dark:hover:bg-slate-600 hover:text-purple-700 dark:hover:text-lime-300'
                      }`}
                    >
                      {tag}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* B2B Advisory & Architecture Consultation Widget */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 text-white border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-6 -mt-6 w-24 h-24 rounded-full bg-lime-500/10 blur-xl pointer-events-none" />
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-lime-400 mb-2">
                <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                <span>
                  {isUa
                    ? 'B2B & CTO Консалтинг'
                    : isEs
                      ? 'Consultoría B2B y CTO'
                      : 'B2B & CTO Advisory'}
                </span>
              </div>
              <h4 className="text-sm font-bold text-white mb-2 leading-snug">
                {isUa
                  ? 'Потрібен архітектурний аудит або консультація?'
                  : isEs
                    ? '¿Necesitas una auditoría técnica o consultoría?'
                    : 'Need an Architecture Audit or Technical Advisory?'}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                {isUa
                  ? 'Аналіз TCO, міграція в хмару, субсекундна оптимізація Core Web Vitals та інтеграція автономного AI.'
                  : isEs
                    ? 'Análisis de TCO, migración cloud, optimización Core Web Vitals subsegundo e integración de IA.'
                    : 'TCO assessment, cloud migrations, sub-second Core Web Vitals optimization, and autonomous AI integration.'}
              </p>
              <div className="flex flex-col gap-2">
                <button
                  type="button"
                  onClick={handleConsultationAiTrigger}
                  className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-bold bg-lime-500 hover:bg-lime-400 text-slate-950 transition cursor-pointer"
                >
                  <Bot className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>
                    {isUa
                      ? 'Запитати AI-асистента'
                      : isEs
                        ? 'Consultar al Asistente IA'
                        : 'Ask AI Assistant'}
                  </span>
                </button>
                <a
                  href={`/${locale}#contact`}
                  onClick={(e) => {
                    if (onBack) {
                      e.preventDefault()
                      onBack()
                      setTimeout(() => {
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                      }, 100)
                    }
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition"
                >
                  <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>
                    {isUa
                      ? 'Зв’язатися напряму'
                      : isEs
                        ? 'Contactar directamente'
                        : 'Contact Directly'}
                  </span>
                </a>
              </div>
            </div>
          </aside>

          {/* ================= RIGHT MAIN CONTENT AREA ================= */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-8">
            {/* Active Filters Pill Bar */}
            {isFiltering && (
              <div className="flex flex-wrap items-center justify-between gap-3 p-4 bg-purple-50 dark:bg-slate-800/80 rounded-2xl border border-purple-200/80 dark:border-lime-500/20">
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {isUa ? 'Активні фільтри:' : isEs ? 'Filtros activos:' : 'Active filters:'}
                  </span>
                  {selectedCategory !== 'all' && (
                    <span className="px-2 py-0.5 rounded-md bg-purple-200 dark:bg-lime-500/20 text-purple-900 dark:text-lime-300 font-bold text-[11px]">
                      {categories.find((c) => c.id === selectedCategory)?.label}
                    </span>
                  )}
                  {selectedTag && (
                    <span className="px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-500/20 text-blue-900 dark:text-blue-300 font-bold text-[11px]">
                      #{selectedTag}
                    </span>
                  )}
                  {searchQuery && (
                    <span className="px-2 py-0.5 rounded-md bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white font-medium text-[11px]">
                      "{searchQuery}"
                    </span>
                  )}
                  <span className="text-slate-500 dark:text-slate-400">
                    ({filteredPosts.length}{' '}
                    {isUa ? 'знайдено' : isEs ? 'encontrados' : 'found'})
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-xl text-xs font-semibold bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 hover:bg-slate-100 transition cursor-pointer"
                >
                  <X className="w-3 h-3" aria-hidden="true" />
                  <span>
                    {isUa ? 'Скинути всі' : isEs ? 'Restablecer' : 'Reset all'}
                  </span>
                </button>
              </div>
            )}

            {/* FEATURED POST (Hero Card across top when on 'all' without active filters) */}
            {featuredPost && (
              <article className="bg-white dark:bg-slate-800/95 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 shadow-md hover:shadow-xl hover:border-purple-300 dark:hover:border-lime-500/40 transition-all duration-300 overflow-hidden group">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-0 items-stretch">
                  {/* Hero Cover Graphic */}
                  <div className="md:col-span-5 relative bg-slate-900 overflow-hidden min-h-[240px] md:min-h-full">
                    <img
                      src={featuredPost.coverImage}
                      alt={getBlogTitle(featuredPost, locale)}
                      loading="eager"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-purple-700 text-white dark:bg-lime-500 dark:text-slate-950 shadow-sm">
                        {isUa
                          ? 'Флагманський кейс'
                          : isEs
                            ? 'Estudio Destacado'
                            : 'Flagship Deep Dive'}
                      </span>
                    </div>
                  </div>

                  {/* Hero Content */}
                  <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                          <time dateTime={featuredPost.date}>{featuredPost.date}</time>
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>{getBlogReadTime(featuredPost, locale)}</span>
                        </span>
                        <span className="font-semibold text-purple-600 dark:text-lime-400">
                          {getBlogCategoryLabel(featuredPost, locale)}
                        </span>
                      </div>

                      {onSelectPost ? (
                        <button
                          type="button"
                          onClick={() => onSelectPost(featuredPost.slug)}
                          className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white line-clamp-3 mb-3 group-hover:text-purple-600 dark:group-hover:text-lime-400 transition-colors text-left cursor-pointer"
                        >
                          {getBlogTitle(featuredPost, locale)}
                        </button>
                      ) : (
                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white line-clamp-3 mb-3 group-hover:text-purple-600 dark:group-hover:text-lime-400 transition-colors">
                          <Link href={`/${locale}/blog/${featuredPost.slug}`}>
                            {getBlogTitle(featuredPost, locale)}
                          </Link>
                        </h2>
                      )}

                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                        {getBlogDescription(featuredPost, locale)}
                      </p>

                      {/* Production Proof / Applied Projects Chips */}
                      {featuredPost.appliedProjects && featuredPost.appliedProjects.length > 0 && (
                        <div className="mb-4">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1.5">
                            {isUa
                              ? 'Застосовано в продакшені:'
                              : isEs
                                ? 'Aplicado en producción:'
                                : 'Applied in Production:'}
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {featuredPost.appliedProjects.map((proj) => {
                              const badge = (
                                <>
                                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 dark:bg-lime-400" />
                                  {proj.name}
                                </>
                              )
                              if (onSelectProject) {
                                return (
                                  <button
                                    key={proj.slug}
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation()
                                      onSelectProject(proj.projectId)
                                    }}
                                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg bg-purple-50 dark:bg-lime-500/10 text-purple-700 dark:text-lime-400 border border-purple-200/80 dark:border-lime-500/20 cursor-pointer hover:underline"
                                  >
                                    {badge}
                                  </button>
                                )
                              }
                              return (
                                <Link
                                  key={proj.slug}
                                  href={`/${locale}/projects/${proj.slug}`}
                                  onClick={(e) => e.stopPropagation()}
                                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg bg-purple-50 dark:bg-lime-500/10 text-purple-700 dark:text-lime-400 border border-purple-200/80 dark:border-lime-500/20 hover:underline"
                                >
                                  {badge}
                                </Link>
                              )
                            })}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {featuredPost.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {onSelectPost ? (
                        <button
                          type="button"
                          onClick={() => onSelectPost(featuredPost.slug)}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-600 dark:text-lime-400 hover:text-purple-800 dark:hover:text-lime-300 transition-colors cursor-pointer"
                        >
                          <span>
                            {isUa ? 'Читати розбір' : isEs ? 'Leer análisis' : 'Read Deep Dive'}
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                        </button>
                      ) : (
                        <Link
                          href={`/${locale}/blog/${featuredPost.slug}`}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-600 dark:text-lime-400 hover:text-purple-800 dark:hover:text-lime-300 transition-colors"
                        >
                          <span>
                            {isUa ? 'Читати розбір' : isEs ? 'Leer análisis' : 'Read Deep Dive'}
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            )}

            {/* Standard 2-Column Articles Grid */}
            {standardPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {standardPosts.map((post) => {
                  const title = getBlogTitle(post, locale)
                  const desc = getBlogDescription(post, locale)
                  const readTime = getBlogReadTime(post, locale)
                  const catLabel = getBlogCategoryLabel(post, locale)
                  const articleUrl = `/${locale}/blog/${post.slug}`

                  return (
                    <article
                      key={post.slug}
                      className="bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200/80 dark:border-slate-700/70 shadow-sm hover:shadow-xl hover:border-purple-300 dark:hover:border-lime-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                    >
                      <div>
                        {/* Cover Image */}
                        <div className="relative h-48 w-full bg-slate-950 overflow-hidden">
                          <img
                            src={post.coverImage}
                            alt={title}
                            loading="lazy"
                            onError={(e) => {
                              (e.currentTarget as HTMLElement).style.display = 'none'
                            }}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-3 left-3">
                            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-purple-700/90 dark:bg-lime-500/90 text-white dark:text-slate-950 shadow-sm backdrop-blur-xs">
                              {catLabel}
                            </span>
                          </div>
                        </div>

                        {/* Card Body */}
                        <div className="p-6">
                          <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-3">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                              <time dateTime={post.date}>{post.date}</time>
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                              <span>{readTime}</span>
                            </span>
                          </div>

                          {onSelectPost ? (
                            <button
                              type="button"
                              onClick={() => onSelectPost(post.slug)}
                              className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white line-clamp-3 mb-3 group-hover:text-purple-600 dark:group-hover:text-lime-400 transition-colors text-left cursor-pointer"
                            >
                              {title}
                            </button>
                          ) : (
                            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white line-clamp-3 mb-3 group-hover:text-purple-600 dark:group-hover:text-lime-400 transition-colors">
                              <Link href={articleUrl}>{title}</Link>
                            </h3>
                          )}

                          <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed mb-4">
                            {desc}
                          </p>

                          {/* Applied in Production chips (Clean, non-truncated proof) */}
                          {post.appliedProjects && post.appliedProjects.length > 0 && (
                            <div className="mb-4">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1.5">
                                {isUa
                                  ? 'Застосовано в продакшені:'
                                  : isEs
                                    ? 'Aplicado en producción:'
                                    : 'Applied in Production:'}
                              </span>
                              <div className="flex flex-wrap gap-1.5">
                                {post.appliedProjects.map((proj) => {
                                  const badge = (
                                    <>
                                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 dark:bg-lime-400" />
                                      {proj.name}
                                    </>
                                  )
                                  if (onSelectProject) {
                                    return (
                                      <button
                                        key={proj.slug}
                                        type="button"
                                        onClick={(e) => {
                                          e.stopPropagation()
                                          onSelectProject(proj.projectId)
                                        }}
                                        className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-md bg-purple-50 dark:bg-lime-500/10 text-purple-700 dark:text-lime-400 border border-purple-200/60 dark:border-lime-500/20 cursor-pointer hover:underline"
                                      >
                                        {badge}
                                      </button>
                                    )
                                  }
                                  return (
                                    <Link
                                      key={proj.slug}
                                      href={`/${locale}/projects/${proj.slug}`}
                                      onClick={(e) => e.stopPropagation()}
                                      className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-md bg-purple-50 dark:bg-lime-500/10 text-purple-700 dark:text-lime-400 border border-purple-200/60 dark:border-lime-500/20 hover:underline"
                                    >
                                      {badge}
                                    </Link>
                                  )
                                })}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Card Footer */}
                      <div className="px-6 pb-6 pt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
                        <div className="flex flex-wrap gap-1">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {onSelectPost ? (
                          <button
                            type="button"
                            onClick={() => onSelectPost(post.slug)}
                            className="inline-flex items-center gap-1 text-xs font-bold text-purple-600 dark:text-lime-400 hover:text-purple-800 dark:hover:text-lime-300 transition-colors cursor-pointer"
                          >
                            <span>
                              {isUa ? 'Читати' : isEs ? 'Leer' : 'Read'}
                            </span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                          </button>
                        ) : (
                          <Link
                            href={articleUrl}
                            className="inline-flex items-center gap-1 text-xs font-bold text-purple-600 dark:text-lime-400 hover:text-purple-800 dark:hover:text-lime-300 transition-colors"
                          >
                            <span>
                              {isUa ? 'Читати' : isEs ? 'Leer' : 'Read'}
                            </span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                          </Link>
                        )}
                      </div>
                    </article>
                  )
                })}
              </div>
            ) : (
              /* Empty Search / Filter Results State */
              <div className="text-center py-16 bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700 p-8">
                <Search className="w-10 h-10 text-slate-400 mx-auto mb-3" aria-hidden="true" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {isUa
                    ? 'Статей не знайдено'
                    : isEs
                      ? 'No se encontraron artículos'
                      : 'No Articles Found'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-6">
                  {isUa
                    ? 'Спробуйте змінити пошуковий запит або скинути фільтри рубрик та технологій.'
                    : isEs
                      ? 'Intenta modificar el término de búsqueda o restablecer los filtros de categorías.'
                      : 'Try adjusting your search query or resetting category and technology filters.'}
                </p>
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-purple-600 text-white dark:bg-lime-500 dark:text-slate-950 hover:opacity-90 transition cursor-pointer"
                >
                  {isUa ? 'Скинути всі фільтри' : isEs ? 'Restablecer todos los filtros' : 'Reset All Filters'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
