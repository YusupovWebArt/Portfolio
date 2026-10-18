'use client'

import React from 'react'
import Link from 'next/link'
import { ExternalLink, Github, ArrowRight, Layers } from 'lucide-react'
import type { ProjectToolOutput } from '../../lib/ai/tools'

interface ProjectToolCardProps {
  project: ProjectToolOutput
  locale?: string
  onNavigate?: () => void
}

export default function ProjectToolCard({
  project,
  locale = 'en',
  onNavigate,
}: ProjectToolCardProps) {
  const caseStudyUrl = `/${locale}/projects/${project.slug}`

  return (
    <div className="w-full my-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col text-left">
      <div className="relative h-28 w-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-400">
            <Layers className="w-8 h-8" />
          </div>
        )}
        {project.isPersonal ? (
          <div className="absolute top-2 left-2 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-purple-700/90 dark:bg-lime-500/90 text-white dark:text-slate-950 shadow-sm border border-purple-400/40 dark:border-lime-300/40 backdrop-blur-sm">
            <span>★</span>
            <span>
              {locale === 'ua'
                ? 'Власний проєкт'
                : locale === 'es'
                  ? 'Proyecto propio'
                  : 'Personal'}
            </span>
          </div>
        ) : (
          <div className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-purple-600 text-white shadow-sm">
            {project.category}
          </div>
        )}
      </div>

      <div className="p-3.5 flex flex-col flex-1 justify-between gap-2.5">
        <div>
          <h4 className="font-bold text-slate-900 dark:text-white text-sm leading-tight">
            {project.title}
          </h4>
          <p className="text-slate-600 dark:text-slate-300 text-xs mt-1 line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-100 dark:border-slate-800/80">
          <Link
            href={caseStudyUrl}
            onClick={onNavigate}
            className="inline-flex items-center gap-1 text-xs font-semibold text-purple-600 dark:text-lime-400 hover:text-purple-700 dark:hover:text-lime-300 transition-colors"
          >
            <span>View Case Study</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden />
          </Link>

          <div className="flex items-center gap-1.5">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live Demo"
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title="Live Demo"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Repository"
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title="GitHub"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
