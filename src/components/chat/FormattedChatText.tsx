'use client'

import React from 'react'

interface FormattedChatTextProps {
  text: string
  srPrefix?: string
  isBot?: boolean
}

function renderInlineSegments(line: string, isBot: boolean): React.ReactNode {
  if (!line.includes('**') && !line.includes('`')) {
    return line
  }

  const tokens = line.split(/(\*\*[^*]+\*\*|`[^`]+`)/g)
  return tokens.map((token, idx) => {
    if (token.startsWith('**') && token.endsWith('**') && token.length > 4) {
      return (
        <strong
          key={idx}
          className={
            isBot
              ? 'font-bold text-slate-900 dark:text-white'
              : 'font-bold text-white dark:text-slate-950'
          }
        >
          {token.slice(2, -2)}
        </strong>
      )
    }
    if (token.startsWith('`') && token.endsWith('`') && token.length > 2) {
      return (
        <code
          key={idx}
          className={
            isBot
              ? 'px-1.5 py-0.5 mx-0.5 rounded-md text-xs font-mono font-semibold bg-purple-100/80 dark:bg-lime-500/15 text-purple-800 dark:text-lime-300 border border-purple-200/60 dark:border-lime-500/25'
              : 'px-1.5 py-0.5 mx-0.5 rounded-md text-xs font-mono bg-white/20 dark:bg-black/15'
          }
        >
          {token.slice(1, -1)}
        </code>
      )
    }
    return <React.Fragment key={idx}>{token}</React.Fragment>
  })
}

export default function FormattedChatText({
  text,
  srPrefix,
  isBot = true,
}: FormattedChatTextProps) {
  const lines = text.split('\n')

  if (lines.length <= 1 && !text.includes('**') && !text.includes('`')) {
    return (
      <div className="whitespace-pre-line">
        {srPrefix && <span className="sr-only">{srPrefix}</span>}
        {text}
      </div>
    )
  }

  return (
    <div className="space-y-1.5">
      {srPrefix && <span className="sr-only">{srPrefix}</span>}
      {lines.map((rawLine, idx) => {
        const trimmed = rawLine.trim()
        if (!trimmed) {
          return <div key={idx} className="h-1" aria-hidden="true" />
        }

        const isBullet =
          trimmed.startsWith('- ') ||
          trimmed.startsWith('* ') ||
          trimmed.startsWith('• ')

        if (isBullet) {
          const content = trimmed.slice(2).trim()
          return (
            <div key={idx} className="flex items-start gap-2 pl-1">
              <span
                aria-hidden="true"
                className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-lime-400 shrink-0"
              />
              <span className="flex-1 leading-relaxed">
                {renderInlineSegments(content, isBot)}
              </span>
            </div>
          )
        }

        return (
          <div key={idx} className="leading-relaxed">
            {renderInlineSegments(rawLine, isBot)}
          </div>
        )
      })}
    </div>
  )
}
