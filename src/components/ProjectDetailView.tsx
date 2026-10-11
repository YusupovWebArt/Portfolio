'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  ExternalLink,
  Github,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
} from 'lucide-react'
import { Project, TechnologyItem } from './projects/project-types'
import ProjectChatTrigger from './ProjectChatTrigger'
import ChatModal from './ChatModal'

interface ProjectDetailViewProps {
  project: Project
  slug: string
  locale: string
}

const getTechShort = (tech: TechnologyItem): string =>
  typeof tech === 'string' ? tech : tech.short

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

export default function ProjectDetailView({
  project,
  slug,
  locale,
}: ProjectDetailViewProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [detailTab, setDetailTab] = useState<
    'stack' | 'features' | 'architecture' | 'case-study'
  >('stack')

  const description =
    locale === 'ua' && project.fullDescriptionUa
      ? project.fullDescriptionUa
      : locale === 'es' && project.fullDescriptionEs
        ? project.fullDescriptionEs
        : project.fullDescription

  const metrics = project.detailMetrics ?? []
  const hasArchitecture = Boolean(
    project.architecture?.rows?.length && project.architecture.description?.trim(),
  )
  const hasCaseStudy = Boolean(
    project.challenges?.length || project.solutions?.length,
  )

  const hasGithub = Boolean(project.githubUrl && project.githubUrl !== '#')

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
        <Link href={`/${locale}`} className="hover:text-purple-600 dark:hover:text-lime-400 transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href={`/${locale}#projects`} className="hover:text-purple-600 dark:hover:text-lime-400 transition-colors">
          Projects
        </Link>
        <span>/</span>
        <span className="font-semibold text-slate-800 dark:text-slate-200 truncate max-w-[200px] sm:max-w-none">
          {project.title}
        </span>
      </nav>

      {/* Back to Projects */}
      <Link
        href={`/${locale}#projects`}
        className="mb-8 inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-purple-600 dark:text-lime-400 hover:text-purple-700 dark:hover:text-lime-300 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden />
        <span>Back to Projects</span>
      </Link>

      <div className="rounded-2xl bg-neutral-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 p-6 md:p-8 lg:p-10 shadow-sm">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left Column: Visual Gallery */}
          <div className="space-y-4">
            <div className="relative bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-700">
              <img
                src={project.images[currentImageIndex]?.src || project.image}
                alt={`${project.title} preview`}
                className="w-full h-80 md:h-96 object-cover"
              />
            </div>

            {project.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto py-2 scrollbar-none">
                {project.images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`relative shrink-0 overflow-hidden rounded-lg border-2 transition-colors ${
                      idx === currentImageIndex
                        ? 'border-purple-600 dark:border-lime-400'
                        : 'border-slate-200 dark:border-slate-700 hover:border-slate-400'
                    }`}
                  >
                    <img
                      src={img.src}
                      alt={img.caption || `Thumbnail ${idx + 1}`}
                      className="h-14 w-14 object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Hero, Metrics & Actions */}
          <div className="flex flex-col gap-6">
            {project.detailHeroLine && (
              <p className="text-xs sm:text-sm font-semibold tracking-wider text-slate-500 dark:text-slate-400 uppercase">
                {project.detailHeroLine}
              </p>
            )}

            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
              {project.title}
            </h1>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              {description}
            </p>

            {/* Metrics 2x2 Grid */}
            {metrics.length > 0 && (
              <div className="grid grid-cols-2 gap-3 pt-2">
                {metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-slate-200/90 dark:border-slate-700/80 bg-white/80 dark:bg-slate-900/50 p-4 backdrop-blur-sm"
                  >
                    <div
                      className={`text-xl sm:text-2xl font-bold tracking-tight ${metricValueClass(
                        m.accent,
                      )}`}
                    >
                      {m.value}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Contextual AI Trigger & Links */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-200 dark:border-slate-700">
              <ProjectChatTrigger projectSlug={slug} projectTitle={project.title} />

              {project.liveUrl && project.liveUrl !== '#' && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm sm:text-base bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition-colors"
                >
                  <ExternalLink className="w-4 h-4" aria-hidden />
                  <span>Visit Live</span>
                </a>
              )}

              {hasGithub && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm sm:text-base bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-700 dark:hover:bg-slate-600 transition-colors"
                >
                  <Github className="w-4 h-4" aria-hidden />
                  <span>GitHub</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Tabs Section: Stack, Features, Architecture, Case Study */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
          <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-200 dark:border-slate-700 pb-3">
            <button
              type="button"
              onClick={() => setDetailTab('stack')}
              className={`px-4 py-2 rounded-lg font-semibold text-sm transition-colors ${
                detailTab === 'stack'
                  ? 'bg-purple-600 text-white'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              Technology Stack
            </button>

            <button
              type="button"
              onClick={() => setDetailTab('features')}
              className={`px-4 py-2 rounded-lg font-semibold text-sm transition-colors ${
                detailTab === 'features'
                  ? 'bg-purple-600 text-white'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              Features
            </button>

            {hasArchitecture && (
              <button
                type="button"
                onClick={() => setDetailTab('architecture')}
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-colors ${
                  detailTab === 'architecture'
                    ? 'bg-purple-600 text-white'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                Architecture
              </button>
            )}

            {hasCaseStudy && (
              <button
                type="button"
                onClick={() => setDetailTab('case-study')}
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-colors ${
                  detailTab === 'case-study'
                    ? 'bg-purple-600 text-white'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                Case Study
              </button>
            )}
          </div>

          {/* Tab 1: Stack */}
          {detailTab === 'stack' && (
            <div className="space-y-6">
              {Array.isArray(project.technologies) ? (
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-sm font-medium"
                    >
                      {getTechShort(t)}
                    </span>
                  ))}
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {Object.entries(project.technologies).map(([cat, items]) => {
                    if (!items || items.length === 0) return null
                    return (
                      <div key={cat} className="space-y-2">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                          {cat}
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {items.map((item: TechnologyItem, idx: number) => (
                            <span
                              key={idx}
                              title={getTechFull(item)}
                              className="px-2.5 py-1 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-300"
                            >
                              {getTechShort(item)}
                            </span>
                          ))}
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          )}

          {/* Tab 2: Features */}
          {detailTab === 'features' && (
            <div className="grid sm:grid-cols-2 gap-4">
              {project.features.map((f, idx) => {
                if (typeof f === 'string') {
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <p className="text-sm text-slate-700 dark:text-slate-300">{f}</p>
                    </div>
                  )
                }
                if (f && typeof f === 'object' && 'title' in f) {
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 space-y-1"
                    >
                      <h4 className="font-semibold text-slate-900 dark:text-white text-sm">
                        {f.title}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        {f.description}
                      </p>
                    </div>
                  )
                }
                return null
              })}
            </div>
          )}

          {/* Tab 3: Architecture */}
          {detailTab === 'architecture' && project.architecture && (
            <div className="space-y-6">
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {project.architecture.description}
              </p>

              <div className="space-y-4">
                {project.architecture.rows.map((row, rIdx) => (
                  <div
                    key={rIdx}
                    className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 space-y-3"
                  >
                    <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-lime-400">
                      {row.rowLabel}
                    </span>
                    <div className="flex flex-wrap items-center gap-2">
                      {row.steps.map((s, sIdx) => (
                        <React.Fragment key={sIdx}>
                          <span
                            className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                              s.highlight
                                ? 'bg-purple-600 text-white'
                                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                            }`}
                          >
                            {s.label}
                          </span>
                          {sIdx < row.steps.length - 1 && (
                            <span className="text-slate-400 dark:text-slate-600">→</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 4: Case Study */}
          {detailTab === 'case-study' && (
            <div className="grid md:grid-cols-2 gap-6">
              {project.challenges && project.challenges.length > 0 && (
                <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 space-y-3">
                  <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-semibold text-sm">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Technical Challenges</span>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                    {project.challenges.map((c, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-slate-400">•</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.solutions && project.solutions.length > 0 && (
                <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 space-y-3">
                  <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold text-sm">
                    <Lightbulb className="w-4 h-4" />
                    <span>Engineered Solutions</span>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                    {project.solutions.map((s, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-500">✓</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <ChatModal />
    </div>
  )
}
