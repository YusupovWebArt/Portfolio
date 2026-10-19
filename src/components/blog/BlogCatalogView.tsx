'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Clock, Calendar, Tag, BookOpen } from 'lucide-react'
import {
  allBlogPosts,
  getBlogTitle,
  getBlogDescription,
  getBlogReadTime,
  getBlogCategoryLabel,
  getBlogTldr,
} from '../../data/blog'

interface BlogCatalogViewProps {
  locale: string
  onBack?: () => void
  onSelectPost?: (slug: string) => void
}

export default function BlogCatalogView({
  locale,
  onBack,
  onSelectPost,
}: BlogCatalogViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const categories = [
    { id: 'all', label: locale === 'ua' ? 'Всі статті' : locale === 'es' ? 'Todos los artículos' : 'All Articles' },
    { id: 'architecture-tco', label: locale === 'ua' ? 'Архітектура та TCO' : locale === 'es' ? 'Arquitectura y TCO' : 'Architecture & TCO' },
    { id: 'ai-engineering', label: locale === 'ua' ? 'AI-інженерія' : locale === 'es' ? 'Ingeniería de IA' : 'AI Engineering' },
    { id: 'accessibility-compliance', label: locale === 'ua' ? 'Доступність (WCAG / EAA)' : locale === 'es' ? 'Accesibilidad (WCAG / EAA)' : 'Accessibility & Compliance' },
  ]

  const filteredPosts = selectedCategory === 'all'
    ? allBlogPosts
    : allBlogPosts.filter((p) => p.category === selectedCategory)

  const headerTitle =
    locale === 'ua'
      ? 'Інженерний блог та архітектурні розбори'
      : locale === 'es'
        ? 'Blog de Ingeniería y Análisis de Arquitectura'
        : 'Engineering Blog & Architectural Case Studies'

  const headerSubtitle =
    locale === 'ua'
      ? 'Практичні технічні розбори архітектури сучасного вебу, Next.js 16, автономних RAG AI-рушіїв та стандартів доступності WCAG 2.2 AA.'
      : locale === 'es'
        ? 'Artículos técnicos en profundidad sobre arquitectura web, Next.js 16, motores de IA con RAG en cliente y normativa de accesibilidad WCAG 2.2 AA.'
        : 'Deep technical writeups on modern web architecture, Next.js 16, autonomous in-browser RAG AI engines, and WCAG 2.2 AA compliance.'

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
              <span>{locale === 'ua' ? 'Назад до портфоліо' : locale === 'es' ? 'Volver al portafolio' : 'Back to Portfolio'}</span>
            </button>
          </div>
        )}

        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 dark:bg-lime-500/10 text-purple-700 dark:text-lime-400 border border-purple-200 dark:border-lime-500/20 mb-4">
            <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{locale === 'ua' ? 'Інженерна експертиза' : locale === 'es' ? 'Expertise de Ingeniería' : 'Engineering Insights'}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            {headerTitle}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {headerSubtitle}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2.5 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-purple-600 text-white dark:bg-lime-500 dark:text-slate-950 shadow-md'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-purple-50 dark:hover:bg-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => {
            const title = getBlogTitle(post, locale)
            const desc = getBlogDescription(post, locale)
            const readTime = getBlogReadTime(post, locale)
            const catLabel = getBlogCategoryLabel(post, locale)
            const tldr = getBlogTldr(post, locale)
            const articleUrl = `/${locale}/blog/${post.slug}`

            return (
              <article
                key={post.slug}
                className="bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200/80 dark:border-slate-700/70 shadow-sm hover:shadow-xl hover:border-purple-300 dark:hover:border-lime-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Cover Image */}
                  <div className="relative h-48 w-full bg-slate-100 dark:bg-slate-900 overflow-hidden">
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
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-purple-700/90 dark:bg-lime-500/90 text-white dark:text-slate-950 shadow-sm backdrop-blur-xs">
                        {catLabel}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
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
                        className="text-xl font-bold text-slate-900 dark:text-white line-clamp-2 mb-3 group-hover:text-purple-600 dark:group-hover:text-lime-400 transition-colors text-left cursor-pointer"
                      >
                        {title}
                      </button>
                    ) : (
                      <h2 className="text-xl font-bold text-slate-900 dark:text-white line-clamp-2 mb-3 group-hover:text-purple-600 dark:group-hover:text-lime-400 transition-colors">
                        <Link href={articleUrl}>{title}</Link>
                      </h2>
                    )}

                    <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed mb-4">
                      {desc}
                    </p>

                    {/* Key Takeaways snippet */}
                    {tldr.length > 0 && (
                      <div className="p-3 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-100 dark:border-white/5 mb-4">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-purple-600 dark:text-lime-400 mb-1.5 flex items-center gap-1">
                          <Tag className="w-3 h-3" aria-hidden="true" />
                          <span>TL;DR</span>
                        </div>
                        <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1">
                          {tldr.slice(0, 2).map((item, idx) => (
                            <li key={idx} className="line-clamp-1">
                              - {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
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
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-600 dark:text-lime-400 hover:text-purple-800 dark:hover:text-lime-300 transition-colors cursor-pointer"
                    >
                      <span>{locale === 'ua' ? 'Читати статтю' : locale === 'es' ? 'Leer artículo' : 'Read Article'}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </button>
                  ) : (
                    <Link
                      href={articleUrl}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-600 dark:text-lime-400 hover:text-purple-800 dark:hover:text-lime-300 transition-colors"
                    >
                      <span>{locale === 'ua' ? 'Читати статтю' : locale === 'es' ? 'Leer artículo' : 'Read Article'}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </Link>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </div>
  )
}
