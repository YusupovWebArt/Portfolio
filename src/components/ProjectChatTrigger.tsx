'use client'

import React from 'react'
import {
  LuSparkles as Sparkles,
} from 'react-icons/lu'

interface ProjectChatTriggerProps {
  projectSlug: string
  projectTitle: string
  label?: string
}

export default function ProjectChatTrigger({
  projectSlug,
  projectTitle,
  label,
}: ProjectChatTriggerProps) {
  const handleClick = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('open-ai-chat-context', {
          detail: {
            projectSlug,
            projectTitle,
          },
        }),
      )
    }
  }

  const displayText = label || `Ask AI about ${projectTitle}`

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-haspopup="dialog"
      className="inline-flex w-full items-center justify-between gap-2 px-4 py-3 rounded-xl font-semibold text-sm bg-purple-600/10 hover:bg-purple-600/20 dark:bg-lime-500/10 dark:hover:bg-lime-500/20 text-purple-700 dark:text-lime-400 border border-purple-500/30 hover:border-purple-500/50 dark:border-lime-500/30 dark:hover:border-lime-500/50 shadow-sm transition-all duration-200 cursor-pointer"
    >
      <span className="inline-flex items-center gap-2 min-w-0 text-left">
        <Sparkles className="w-4 h-4 shrink-0 text-purple-600 dark:text-lime-400" aria-hidden />
        <span className="truncate">{displayText}</span>
      </span>
      <span
        aria-hidden="true"
        className="shrink-0 rounded-full bg-purple-600/15 dark:bg-lime-500/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-purple-700 dark:text-lime-300 border border-purple-500/20 dark:border-lime-400/30"
      >
        <span className="hidden sm:inline">Context-Aware RAG</span>
        <span className="sm:hidden">AI RAG</span>
      </span>
    </button>
  )
}
