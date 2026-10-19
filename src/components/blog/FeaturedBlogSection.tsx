'use client'

import React from 'react'
import Link from 'next/link'
import { BookOpen, Calendar, Clock, ArrowRight, Sparkles } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'
import {
  allBlogPosts,
  getBlogTitle,
  getBlogDescription,
  getBlogReadTime,
  getBlogCategoryLabel,
  getBlogTldr,
} from '../../data/blog'

interface FeaturedBlogSectionProps {
  onSelectPost?: (slug: string) => void
}

export default function FeaturedBlogSection({ onSelectPost }: FeaturedBlogSectionProps) {
  const { lang } = useLanguage()
  const locale = lang || 'en'

  const sectionBadge =
    locale === 'ua'
      ? 'Інженерний блог та архітектура'
      : locale === 'es'
        ? 'Blog de Ingeniería y Arquitectura'
        : 'Engineering Blog & Architecture'

  const sectionTitle =
    locale === 'ua'
      ? 'Архітектурні розбори та інженерна експертиза'
      : locale === 'es'
        ? 'Análisis de Arquitectura e Investigación Técnica'
        : 'Architectural Deep Dives & Engineering Insights'

  const sectionSubtitle =
    locale === 'ua'
      ? 'Практичні технічні розбори для CTO та лідів: аналіз вартості володіння (TCO), автономні RAG AI-рушії та стандарти доступності WCAG 2.2 AA.'
      : locale === 'es'
        ? 'Análisis técnicos para CTOs y líderes técnicos: TCO real de arquitecturas, motores de IA con RAG en cliente y normativa de accesibilidad WCAG 2.2 AA.'
        : 'In-depth engineering analyses for CTOs and tech leads: real architectural TCO comparisons, autonomous in-browser RAG AI engines, and WCAG 2.2 AA compliance.'

  const readArticleLabel =
    locale === 'ua' ? 'Читати розбір' : locale === 'es' ? 'Leer artículo' : 'Read Case Study'

  const allArticlesLabel =
    locale === 'ua'
      ? 'Всі статті та розбори'
      : locale === 'es'
        ? 'Ver todos los artículos'
        : 'Explore All Articles'

  const handlePostClick = (e: React.MouseEvent, slug: string) => {
    if (onSelectPost) {
      e.preventDefault()
      onSelectPost(slug)
    }
  }

  const isGitHubPages =
    typeof window !== 'undefined' && window.location.pathname.startsWith('/Portfolio')
  const blogBaseUrl = isGitHubPages ? '/Portfolio' : ''

  return (
    <section id="blog" className="py-20 bg-slate-50 dark:bg-slate-900/60 transition-colors duration-300">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-purple-100 dark:bg-lime-500/10 text-purple-700 dark:text-lime-400 border border-purple-200 dark:border-lime-500/20 mb-4 shadow-xs">
            <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{sectionBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            {sectionTitle}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {sectionSubtitle}
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {allBlogPosts.slice(0, 3).map((post) => {
            const title = getBlogTitle(post, locale)
            const desc = getBlogDescription(post, locale)
            const readTime = getBlogReadTime(post, locale)
            const catLabel = getBlogCategoryLabel(post, locale)
            const tldr = getBlogTldr(post, locale)
            const articleHref = `${blogBaseUrl}/${locale}/blog/${post.slug}`

            return (
              <article
                key={post.slug}
                className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/80 dark:border-slate-700/70 shadow-sm hover:shadow-xl hover:border-purple-300 dark:hover:border-lime-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Article Thumbnail */}
                  <div className="relative h-48 w-full bg-slate-100 dark:bg-slate-900 overflow-hidden">
                    <img
                      src={post.coverImage}
                      alt={title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-purple-700/90 dark:bg-lime-500/90 text-white dark:text-slate-950 shadow-sm backdrop-blur-xs">
                        {catLabel}
                      </span>
                    </div>
                  </div>

                  {/* Article Meta & Info */}
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

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white line-clamp-2 mb-3 group-hover:text-purple-600 dark:group-hover:text-lime-400 transition-colors">
                      <a
                        href={articleHref}
                        onClick={(e) => handlePostClick(e, post.slug)}
                        className="hover:underline focus-visible:outline-2 focus-visible:outline-purple-500 rounded-xs"
                      >
                        {title}
                      </a>
                    </h3>

                    <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed mb-4">
                      {desc}
                    </p>

                    {/* Key takeaway */}
                    {tldr.length > 0 && (
                      <div className="p-3 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-100 dark:border-white/5 mb-2">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-purple-600 dark:text-lime-400 mb-1 flex items-center gap-1">
                          <Sparkles className="w-3 h-3" aria-hidden="true" />
                          <span>TL;DR</span>
                        </div>
                        <p className="text-xs text-slate-700 dark:text-slate-300 line-clamp-2">
                          {tldr[0]}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-6 pt-0 mt-auto border-t border-slate-100 dark:border-slate-700/50 flex items-center justify-between">
                  <a
                    href={articleHref}
                    onClick={(e) => handlePostClick(e, post.slug)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-600 dark:text-lime-400 hover:text-purple-700 dark:hover:text-lime-300 transition-colors cursor-pointer group/link"
                  >
                    <span>{readArticleLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" aria-hidden="true" />
                  </a>
                </div>
              </article>
            )
          })}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Link
            href={`${blogBaseUrl}/${locale}/blog`}
            onClick={(e) => {
              if (onSelectPost) {
                e.preventDefault()
                window.dispatchEvent(new CustomEvent('open-blog-view'))
              }
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-purple-600 dark:bg-lime-500 text-white dark:text-slate-950 hover:bg-purple-700 dark:hover:bg-lime-400 shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            <span>{allArticlesLabel}</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
