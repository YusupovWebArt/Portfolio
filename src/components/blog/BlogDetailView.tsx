'use client'

import React from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  BookOpen,
  Share2,
  CheckCircle2,
  MessageSquare,
  Sparkles,
} from 'lucide-react'
import type { BlogPost } from '../../data/blog'
import MarkdownRenderer from './MarkdownRenderer'
import {
  getBlogTitle,
  getBlogDescription,
  getBlogReadTime,
  getBlogCategoryLabel,
  getBlogContent,
  getBlogTldr,
  getRelatedBlogPosts,
} from '../../data/blog'

interface BlogDetailViewProps {
  post: BlogPost
  locale: string
  onBack?: () => void
  onBackToPortfolio?: () => void
  onSelectRelatedPost?: (slug: string) => void
}

export default function BlogDetailView({
  post,
  locale,
  onBack,
  onBackToPortfolio,
  onSelectRelatedPost,
}: BlogDetailViewProps) {
  const title = getBlogTitle(post, locale)
  const description = getBlogDescription(post, locale)
  const readTime = getBlogReadTime(post, locale)
  const categoryLabel = getBlogCategoryLabel(post, locale)
  const content = getBlogContent(post, locale)
  const tldr = getBlogTldr(post, locale)
  const relatedPosts = getRelatedBlogPosts(post.slug, 2)

  const handleShare = () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      navigator.share({
        title,
        text: description,
        url: window.location.href,
      }).catch(() => {})
    } else if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href)
      alert(locale === 'ua' ? 'Посилання скопійовано!' : locale === 'es' ? '¡Enlace copiado!' : 'Link copied to clipboard!')
    }
  }

  const openAiChat = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('open-ai-chat-context', {
          detail: {
            projectId: 70,
            projectTitle: title,
            techCategory: post.category,
            customPrompt:
              locale === 'ua'
                ? `Розкажи детальніше про тему статті: "${title}"`
                : locale === 'es'
                  ? `Cuéntame más sobre el artículo: "${title}"`
                  : `Tell me more about the article: "${title}"`,
          },
        }),
      )
    }
  }

  return (
    <article className="min-h-screen pt-24 pb-24 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center space-x-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            <li>
              {onBackToPortfolio ? (
                <button
                  type="button"
                  onClick={onBackToPortfolio}
                  className="hover:text-purple-600 dark:hover:text-lime-400 transition cursor-pointer"
                >
                  {locale === 'ua' ? 'Головна' : locale === 'es' ? 'Inicio' : 'Home'}
                </button>
              ) : (
                <Link href={`/${locale}`} className="hover:text-purple-600 dark:hover:text-lime-400 transition">
                  {locale === 'ua' ? 'Головна' : locale === 'es' ? 'Inicio' : 'Home'}
                </Link>
              )}
            </li>
            <li aria-hidden="true">/</li>
            <li>
              {onBack ? (
                <button
                  type="button"
                  onClick={onBack}
                  className="hover:text-purple-600 dark:hover:text-lime-400 transition cursor-pointer"
                >
                  {locale === 'ua' ? 'Блог' : locale === 'es' ? 'Blog' : 'Blog'}
                </button>
              ) : (
                <Link href={`/${locale}/blog`} className="hover:text-purple-600 dark:hover:text-lime-400 transition">
                  {locale === 'ua' ? 'Блог' : locale === 'es' ? 'Blog' : 'Blog'}
                </Link>
              )}
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-slate-800 dark:text-slate-200 font-medium truncate max-w-xs sm:max-w-md">
              {title}
            </li>
          </ol>
        </nav>

        {/* Back Link */}
        <div className="mb-6">
          {onBack ? (
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-purple-600 dark:text-lime-400 hover:text-purple-700 dark:hover:text-lime-300 transition cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>{locale === 'ua' ? 'Назад до списку статей' : locale === 'es' ? 'Volver a los artículos' : 'Back to Articles'}</span>
            </button>
          ) : (
            <Link
              href={`/${locale}/blog`}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-purple-600 dark:text-lime-400 hover:text-purple-700 dark:hover:text-lime-300 transition"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>{locale === 'ua' ? 'Назад до списку статей' : locale === 'es' ? 'Volver a los artículos' : 'Back to Articles'}</span>
            </Link>
          )}
        </div>

        {/* Article Header */}
        <header className="mb-10 pb-8 border-b border-slate-200 dark:border-slate-800">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-100 dark:bg-lime-500/15 text-purple-700 dark:text-lime-400 border border-purple-200/60 dark:border-lime-500/30">
              {categoryLabel}
            </span>
            <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                <time dateTime={post.date}>{post.date}</time>
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{readTime}</span>
              </span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            {title}
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl mb-6">
            {description}
          </p>

          {/* Author and Action bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100 dark:border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-lime-400 flex items-center justify-center text-white font-bold text-sm">
                AY
              </div>
              <div>
                <div className="font-semibold text-sm text-slate-900 dark:text-white">
                  {post.author.name}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {post.author.role[locale === 'ua' || locale === 'es' ? locale : 'en']}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={openAiChat}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-purple-50 dark:bg-slate-800 text-purple-700 dark:text-lime-400 border border-purple-200/70 dark:border-lime-500/30 hover:bg-purple-100 dark:hover:bg-slate-700 transition cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{locale === 'ua' ? 'Запитати AI' : locale === 'es' ? 'Preguntar a la IA' : 'Ask AI Assistant'}</span>
              </button>
              <button
                type="button"
                onClick={handleShare}
                aria-label="Share article"
                title="Share article"
                className="p-2 rounded-lg text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition cursor-pointer"
              >
                <Share2 className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </header>

        {/* Cover Image */}
        {post.coverImage && (
          <div className="mb-10 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md h-64 sm:h-96 w-full bg-slate-100 dark:bg-slate-800">
            <img
              src={post.coverImage}
              alt={title}
              onError={(e) => {
                const parent = (e.currentTarget as HTMLElement).parentElement
                if (parent) parent.style.display = 'none'
              }}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Executive TL;DR Box */}
        {tldr.length > 0 && (
          <aside className="mb-10 p-6 bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-purple-200/70 dark:border-lime-500/30 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-lime-400 mb-3">
              <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
              <span>{locale === 'ua' ? 'Ключові тези для CTO та техлідів (TL;DR)' : locale === 'es' ? 'Conclusiones clave para CTOs y líderes técnicos (TL;DR)' : 'Executive Takeaways for CTOs & Tech Leads (TL;DR)'}</span>
            </div>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              {tldr.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-lime-400 font-bold shrink-0">-</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        )}

        {/* Main Content Body with Semantic Markdown & Tables */}
        <div className="mb-16">
          <MarkdownRenderer content={content} />
        </div>

        {/* AI & Engineering Discussion CTA */}
        <div className="p-8 mb-16 rounded-3xl bg-gradient-to-br from-purple-900/90 to-slate-900 text-white border border-purple-500/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-lime-400/20 text-lime-300 border border-lime-400/30 mb-3">
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{locale === 'ua' ? 'Архітектурний аудит' : locale === 'es' ? 'Auditoría de Arquitectura' : 'Architecture Consulting'}</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              {locale === 'ua'
                ? 'Плануєте міграцію стеку або розробку продукту?'
                : locale === 'es'
                  ? '¿Planeas una migración técnica o nuevo proyecto?'
                  : 'Planning a tech stack migration or new build?'}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {locale === 'ua'
                ? 'Обговоріть архітектурні вимоги вашого проєкту з інтерактивним RAG AI-асистентом або зв яжіться напряму для інженерної оцінки.'
                : locale === 'es'
                  ? 'Consulta los requerimientos de tu proyecto con el asistente de IA o solicita una evaluación técnica directa.'
                  : 'Discuss architectural requirements with my interactive RAG AI assistant or connect directly for an engineering assessment.'}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={openAiChat}
              className="w-full sm:w-auto px-5 py-3 rounded-xl font-bold text-sm bg-lime-400 hover:bg-lime-300 text-slate-950 transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" aria-hidden="true" />
              <span>{locale === 'ua' ? 'Запитати AI-асистента' : locale === 'es' ? 'Consultar al Asistente IA' : 'Ask AI Assistant'}</span>
            </button>
            {onBackToPortfolio ? (
              <button
                type="button"
                onClick={() => {
                  onBackToPortfolio()
                  setTimeout(() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  }, 100)
                }}
                className="w-full sm:w-auto px-5 py-3 rounded-xl font-bold text-sm bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all flex items-center justify-center cursor-pointer"
              >
                <span>{locale === 'ua' ? 'Написати напряму' : locale === 'es' ? 'Contactar directamente' : 'Contact Directly'}</span>
              </button>
            ) : (
              <Link
                href={`/${locale}#contact`}
                className="w-full sm:w-auto px-5 py-3 rounded-xl font-bold text-sm bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all flex items-center justify-center"
              >
                <span>{locale === 'ua' ? 'Написати напряму' : locale === 'es' ? 'Contactar directamente' : 'Contact Directly'}</span>
              </Link>
            )}
          </div>
        </div>

        {/* Related Case Studies & Articles */}
        {relatedPosts.length > 0 && (
          <div className="pt-10 border-t border-slate-200 dark:border-slate-800">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              {locale === 'ua' ? 'Інші інженерні статті' : locale === 'es' ? 'Otros artículos de ingeniería' : 'Related Engineering Articles'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((rel) => {
                const relTitle = getBlogTitle(rel, locale)
                const relDesc = getBlogDescription(rel, locale)
                const relRead = getBlogReadTime(rel, locale)
                const cardContent = (
                  <>
                    <div>
                      <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2">
                        <BookOpen className="w-3.5 h-3.5 text-purple-600 dark:text-lime-400" aria-hidden="true" />
                        <span>{relRead}</span>
                      </div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white line-clamp-2 group-hover:text-purple-600 dark:group-hover:text-lime-400 transition-colors mb-2">
                        {relTitle}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                        {relDesc}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-white/5 flex items-center gap-1.5 text-xs font-semibold text-purple-600 dark:text-lime-400">
                      <span>{locale === 'ua' ? 'Читати розбір' : locale === 'es' ? 'Leer análisis' : 'Read Article'}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </div>
                  </>
                )

                if (onSelectRelatedPost) {
                  return (
                    <button
                      key={rel.slug}
                      type="button"
                      onClick={() => onSelectRelatedPost(rel.slug)}
                      className="p-6 bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-200/80 dark:border-slate-700/60 hover:border-purple-400 dark:hover:border-lime-500/40 hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer text-left"
                    >
                      {cardContent}
                    </button>
                  )
                }

                return (
                  <Link
                    key={rel.slug}
                    href={`/${locale}/blog/${rel.slug}`}
                    className="p-6 bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-200/80 dark:border-slate-700/60 hover:border-purple-400 dark:hover:border-lime-500/40 hover:shadow-md transition-all flex flex-col justify-between group"
                  >
                    {cardContent}
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </article>
  )
}
