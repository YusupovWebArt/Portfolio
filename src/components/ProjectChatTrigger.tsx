'use client'

import React from 'react'
import { Sparkles } from 'lucide-react'

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

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={`Ask AI about ${projectTitle}`}
      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm sm:text-base bg-purple-600/10 hover:bg-purple-600/20 text-purple-600 dark:text-purple-400 border border-purple-500/30 hover:border-purple-500/50 shadow-sm transition-all duration-200"
    >
      <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" aria-hidden />
      <span>{label || `Ask AI about ${projectTitle}`}</span>
    </button>
  )
}
