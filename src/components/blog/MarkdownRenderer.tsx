'use client'

import React, { useState } from 'react'
import {
  LuCopy as Copy,
  LuCheck as Check,
} from 'react-icons/lu'

interface MarkdownRendererProps {
  content: string
  className?: string
}

function CodeBlock({ code, language }: { code: string; language: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const langDisplay = language ? language.toUpperCase() : 'CODE'

  return (
    <div className="my-6 rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-950 shadow-xl">
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="ml-2 text-[11px] font-mono font-bold tracking-wider text-slate-400">
            {langDisplay}
          </span>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition cursor-pointer"
          aria-label={copied ? 'Code copied' : 'Copy code to clipboard'}
          title={copied ? 'Copied!' : 'Copy code'}
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-lime-400" aria-hidden="true" />
              <span className="text-lime-400 font-semibold text-[11px]">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
              <span className="text-[11px]">Copy</span>
            </>
          )}
        </button>
      </div>
      <div className="p-4 overflow-x-auto text-xs sm:text-sm font-mono text-slate-200 leading-relaxed selection:bg-purple-900 selection:text-white">
        <pre className="m-0 font-mono">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  )
}

function renderInline(text: string): React.ReactNode[] {
  // Regex to match **bold**, `code`, and [link](url)
  const tokens: React.ReactNode[] = []
  const regex = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g

  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      tokens.push(text.slice(lastIndex, match.index))
    }

    const token = match[0]
    if (token.startsWith('**') && token.endsWith('**')) {
      tokens.push(
        <strong key={`b-${match.index}`} className="font-bold text-slate-900 dark:text-white">
          {token.slice(2, -2)}
        </strong>
      )
    } else if (token.startsWith('`') && token.endsWith('`')) {
      tokens.push(
        <code
          key={`c-${match.index}`}
          className="px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-purple-700 dark:text-lime-400 font-mono text-xs sm:text-sm border border-slate-200/60 dark:border-slate-700/60"
        >
          {token.slice(1, -1)}
        </code>
      )
    } else if (token.startsWith('[') && token.includes('](')) {
      const linkMatch = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(token)
      if (linkMatch) {
        tokens.push(
          <a
            key={`a-${match.index}`}
            href={linkMatch[2]}
            className="text-purple-600 dark:text-lime-400 font-semibold hover:underline"
          >
            {linkMatch[1]}
          </a>
        )
      } else {
        tokens.push(token)
      }
    }

    lastIndex = match.index + token.length
  }

  if (lastIndex < text.length) {
    tokens.push(text.slice(lastIndex))
  }

  return tokens
}

export default function MarkdownRenderer({ content, className = '' }: MarkdownRendererProps) {
  const lines = content.replace(/\r\n/g, '\n').split('\n')
  const elements: React.ReactNode[] = []
  let i = 0

  while (i < lines.length) {
    const rawLine = lines[i]
    const line = rawLine.trim()

    // Empty lines
    if (!line) {
      i++
      continue
    }

    // Horizontal rule
    if (line === '---' || line === '***' || line === '___') {
      elements.push(
        <hr
          key={`hr-${i}`}
          className="my-8 border-t border-slate-200 dark:border-slate-800"
        />
      )
      i++
      continue
    }

    // Fenced Code Block (```lang ... ```)
    if (line.startsWith('```')) {
      const language = line.slice(3).trim()
      const codeLines: string[] = []
      i++
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        codeLines.push(lines[i])
        i++
      }
      if (i < lines.length && lines[i].trim().startsWith('```')) {
        i++
      }
      elements.push(
        <CodeBlock
          key={`code-${i}`}
          code={codeLines.join('\n')}
          language={language}
        />
      )
      continue
    }

    // Headings
    if (line.startsWith('#### ')) {
      elements.push(
        <h4 key={`h4-${i}`} className="text-lg font-bold text-slate-900 dark:text-white mt-8 mb-3 tracking-tight">
          {renderInline(line.slice(5))}
        </h4>
      )
      i++
      continue
    }

    if (line.startsWith('### ')) {
      elements.push(
        <h3 key={`h3-${i}`} className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4 tracking-tight">
          {renderInline(line.slice(4))}
        </h3>
      )
      i++
      continue
    }

    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={`h2-${i}`} className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-12 mb-4 tracking-tight border-b border-slate-200 dark:border-slate-800 pb-2">
          {renderInline(line.slice(3))}
        </h2>
      )
      i++
      continue
    }

    if (line.startsWith('# ')) {
      elements.push(
        <h1 key={`h1-${i}`} className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-12 mb-6 tracking-tight">
          {renderInline(line.slice(2))}
        </h1>
      )
      i++
      continue
    }

    // Markdown Table (starts with |)
    if (line.startsWith('|') && line.endsWith('|')) {
      const tableLines: string[] = []
      while (i < lines.length && lines[i].trim().startsWith('|') && lines[i].trim().endsWith('|')) {
        tableLines.push(lines[i].trim())
        i++
      }

      if (tableLines.length >= 2) {
        const headerCells = tableLines[0]
          .slice(1, -1)
          .split('|')
          .map((c) => c.trim())

        // Skip separator row (tableLines[1], like |:---|:---|)
        const bodyRows = tableLines.slice(2).map((r) =>
          r
            .slice(1, -1)
            .split('|')
            .map((c) => c.trim())
        )

        elements.push(
          <div key={`table-${i}`} className="my-8">
            {/* Desktop & Tablet: Classic structured table */}
            <div className="hidden sm:block overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700/80 shadow-xs">
              <table className="w-full min-w-[640px] text-left text-sm border-collapse">
                <thead className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold border-b border-slate-200 dark:border-slate-700">
                  <tr>
                    {headerCells.map((th, thIdx) => (
                      <th key={thIdx} className="px-4 py-3.5 whitespace-nowrap">
                        {renderInline(th)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                  {bodyRows.map((row, rowIdx) => (
                    <tr
                      key={rowIdx}
                      className="hover:bg-purple-50/40 dark:hover:bg-slate-800/40 transition-colors odd:bg-white even:bg-slate-50/50 dark:odd:bg-slate-900/40 dark:even:bg-slate-800/20"
                    >
                      {row.map((td, tdIdx) => (
                        <td key={tdIdx} className="px-4 py-3.5 align-top leading-relaxed">
                          {renderInline(td)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile: Responsive stacked card view (eliminates awkward horizontal scrolling) */}
            <div className="sm:hidden space-y-4">
              {bodyRows.map((row, rowIdx) => (
                <div
                  key={rowIdx}
                  className="p-4 rounded-2xl border border-slate-200 dark:border-slate-700/80 bg-slate-50/70 dark:bg-slate-800/60 shadow-xs space-y-3"
                >
                  {/* Primary column (typically Architectural Decision or Metric) */}
                  {row[0] && (
                    <div className="border-b border-slate-200/80 dark:border-slate-700/60 pb-2.5">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-700 dark:text-lime-400 block mb-1">
                        {headerCells[0] || 'Decision'}
                      </span>
                      <div className="font-bold text-slate-900 dark:text-white text-sm leading-snug">
                        {renderInline(row[0])}
                      </div>
                    </div>
                  )}

                  {/* Secondary & explanatory columns */}
                  {row.slice(1).map((cell, cellIdx) => {
                    const actualColIdx = cellIdx + 1;
                    const headerLabel = headerCells[actualColIdx] || '';
                    return (
                      <div key={actualColIdx} className="text-xs leading-relaxed">
                        {headerLabel && (
                          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                            {headerLabel}
                          </span>
                        )}
                        <div className="text-slate-700 dark:text-slate-200">
                          {renderInline(cell)}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        )
        continue
      }
    }

    // Blockquote
    if (line.startsWith('> ')) {
      elements.push(
        <blockquote
          key={`quote-${i}`}
          className="my-6 pl-4 py-2 border-l-4 border-purple-500 dark:border-lime-400 italic bg-purple-50/30 dark:bg-slate-800/40 rounded-r-xl text-slate-700 dark:text-slate-300 text-sm sm:text-base"
        >
          {renderInline(line.slice(2))}
        </blockquote>
      )
      i++
      continue
    }

    // Numbered step (e.g. "1. Stage 1: ...", "2. **Stage 2**")
    const stepMatch = /^(\d+)\.\s+(.*)$/.exec(line)
    if (stepMatch) {
      const stepNum = stepMatch[1]
      const stepText = stepMatch[2]
      elements.push(
        <div key={`step-${i}`} className="my-5 flex items-start gap-3">
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-xl bg-purple-100 dark:bg-lime-500/15 text-purple-700 dark:text-lime-400 text-xs font-extrabold shrink-0 mt-0.5 border border-purple-200/80 dark:border-lime-500/30 shadow-xs">
            {stepNum}
          </span>
          <div className="flex-1 text-slate-900 dark:text-white text-base sm:text-lg font-bold leading-snug">
            {renderInline(stepText)}
          </div>
        </div>
      )
      i++
      continue
    }

    // Bullet List
    if (line.startsWith('- ') || line.startsWith('* ')) {
      const listItems: string[] = []
      while (i < lines.length && (lines[i].trim().startsWith('- ') || lines[i].trim().startsWith('* '))) {
        listItems.push(lines[i].trim().slice(2))
        i++
      }
      elements.push(
        <ul key={`ul-${i}`} className="my-4 space-y-2 text-slate-700 dark:text-slate-300">
          {listItems.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-lime-400 mt-2.5 shrink-0" />
              <span className="text-sm sm:text-base leading-relaxed">{renderInline(item)}</span>
            </li>
          ))}
        </ul>
      )
      continue
    }

    // Standard Paragraph
    elements.push(
      <p key={`p-${i}`} className="my-4 leading-relaxed text-slate-700 dark:text-slate-300 text-base sm:text-lg">
        {renderInline(line)}
      </p>
    )
    i++
  }

  return <div className={`blog-prose ${className}`}>{elements}</div>
}
