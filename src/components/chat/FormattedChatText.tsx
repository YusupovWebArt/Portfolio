'use client'

import React from 'react'

interface FormattedChatTextProps {
  text: string
  srPrefix?: string
  isBot?: boolean
}

function renderLink(
  url: string,
  label: string,
  key: number | string,
  isBot: boolean,
): React.ReactNode {
  const isExternal = url.startsWith('http://') || url.startsWith('https://')
  const isSafeProtocol = isExternal || url.startsWith('/') || url.startsWith('#')
  if (!isSafeProtocol) {
    return <React.Fragment key={key}>{label}</React.Fragment>
  }

  const blogMatch = url.match(/\/(?:en|ua|es|de)\/blog\/([a-zA-Z0-9-]+)/)
  const projectMatch = url.match(/\/(?:en|ua|es|de)\/projects\/([a-zA-Z0-9-]+)/)
  const serviceMatch = url.match(/\/(?:en|ua|es|de)\/services\/([a-zA-Z0-9-]+)/)

  const handleClick = (e: React.MouseEvent) => {
    if (
      typeof window !== 'undefined' &&
      Boolean((window as unknown as { __IS_PORTFOLIO_SPA__?: boolean }).__IS_PORTFOLIO_SPA__)
    ) {
      if (blogMatch) {
        e.preventDefault()
        window.dispatchEvent(new CustomEvent('close-ai-chat'))
        window.dispatchEvent(
          new CustomEvent('open-blog-article', { detail: { slug: blogMatch[1] } }),
        )
        return
      }
      if (projectMatch) {
        e.preventDefault()
        window.dispatchEvent(new CustomEvent('close-ai-chat'))
        window.dispatchEvent(
          new CustomEvent('open-project', { detail: { slug: projectMatch[1] } }),
        )
        return
      }
      if (serviceMatch) {
        e.preventDefault()
        window.dispatchEvent(new CustomEvent('close-ai-chat'))
        window.location.assign(url)
        return
      }
    }
  }

  return (
    <a
      key={key}
      href={url}
      onClick={handleClick}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={
        isBot
          ? 'inline-flex items-center gap-0.5 text-purple-600 dark:text-lime-400 font-semibold underline underline-offset-2 hover:text-purple-700 dark:hover:text-lime-300 transition-colors'
          : 'underline underline-offset-2 font-semibold text-white hover:text-white/80'
      }
    >
      <span>{label}</span>
    </a>
  )
}

function renderInlineSegments(line: string, isBot: boolean): React.ReactNode {
  const hasFormatting =
    line.includes('**') ||
    line.includes('*') ||
    line.includes('`') ||
    line.includes('[') ||
    line.includes('/blog/') ||
    line.includes('/projects/') ||
    line.includes('/services/') ||
    line.includes('http://') ||
    line.includes('https://')

  if (!hasFormatting) {
    return line
  }

  const tokens = line.split(
    /(\*\*[^*]+\*\*|\*(?!\s)[^*]+(?<!\s)\*|`[^`]+`|\[[^\]]+\]\([^)]+\)|https?:\/\/[^\s)\]]+|\/(?:en|ua|es|de)\/(?:blog|projects|services)\/[a-zA-Z0-9-]+)/g,
  )

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

    if (
      token.startsWith('*') &&
      token.endsWith('*') &&
      !token.startsWith('**') &&
      token.length > 2
    ) {
      return (
        <em
          key={idx}
          className="italic text-slate-600 dark:text-slate-300"
        >
          {token.slice(1, -1)}
        </em>
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

    if (token.startsWith('[') && token.includes('](')) {
      const match = token.match(/^\[(.*?)\]\((.*?)\)$/)
      if (match) {
        return renderLink(match[2], match[1], idx, isBot)
      }
    }

    if (
      token.startsWith('http://') ||
      token.startsWith('https://') ||
      /^\/(?:en|ua|es|de)\/(?:blog|projects|services)\/[a-zA-Z0-9-]+$/.test(token)
    ) {
      return renderLink(token, token, idx, isBot)
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
  const elements: React.ReactNode[] = []
  let idx = 0

  while (idx < lines.length) {
    const rawLine = lines[idx]
    const trimmed = rawLine.trim()

    if (trimmed.startsWith('```')) {
      const codeLang = trimmed.slice(3).trim()
      const codeLines: string[] = []
      const blockKey = idx
      idx++
      while (idx < lines.length && !lines[idx].trim().startsWith('```')) {
        codeLines.push(lines[idx])
        idx++
      }
      if (idx < lines.length) {
        idx++
      }
      elements.push(
        <div
          key={`code-${blockKey}`}
          className="my-2 rounded-xl bg-slate-900 dark:bg-slate-950/90 border border-slate-700/70 dark:border-slate-800 overflow-hidden"
        >
          {codeLang && (
            <div className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-slate-400 bg-slate-800/70 dark:bg-slate-900 border-b border-slate-700/60 dark:border-slate-800">
              {codeLang}
            </div>
          )}
          <pre className="p-3 text-xs font-mono text-emerald-300 leading-relaxed overflow-x-auto">
            <code>{codeLines.join('\n')}</code>
          </pre>
        </div>,
      )
      continue
    }

    if (!trimmed) {
      elements.push(<div key={idx} className="h-1" aria-hidden="true" />)
      idx++
      continue
    }

    const isBullet =
      trimmed.startsWith('- ') ||
      trimmed.startsWith('* ') ||
      trimmed.startsWith('• ')

    if (isBullet) {
      const content = trimmed.slice(2).trim()
      elements.push(
        <div key={idx} className="flex items-start gap-2 pl-1">
          <span
            aria-hidden="true"
            className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-lime-400 shrink-0"
          />
          <span className="flex-1 leading-relaxed">
            {renderInlineSegments(content, isBot)}
          </span>
        </div>,
      )
      idx++
      continue
    }

    const isHeading3 = trimmed.startsWith('### ')
    const isHeading2 = trimmed.startsWith('## ')
    if (isHeading3 || isHeading2) {
      const content = trimmed.slice(isHeading3 ? 4 : 3).trim()
      elements.push(
        <h4
          key={idx}
          className={`font-bold tracking-tight text-slate-900 dark:text-white pt-1 pb-0.5 ${
            isHeading2 ? 'text-base sm:text-lg' : 'text-sm sm:text-base'
          }`}
        >
          {renderInlineSegments(content, isBot)}
        </h4>,
      )
      idx++
      continue
    }

    const isItalicLine =
      trimmed.startsWith('*') &&
      trimmed.endsWith('*') &&
      !trimmed.startsWith('**') &&
      trimmed.length > 2

    if (isItalicLine) {
      const content = trimmed.slice(1, -1).trim()
      elements.push(
        <div
          key={idx}
          className="text-xs text-slate-500 dark:text-slate-400 font-medium italic -mt-0.5 mb-1"
        >
          {renderInlineSegments(content, isBot)}
        </div>,
      )
      idx++
      continue
    }

    elements.push(
      <div key={idx} className="leading-relaxed">
        {renderInlineSegments(rawLine, isBot)}
      </div>,
    )
    idx++
  }

  return (
    <div className="space-y-1.5">
      {srPrefix && <span className="sr-only">{srPrefix}</span>}
      {elements}
    </div>
  )
}
