'use client'

import React from 'react'

interface MarkdownRendererProps {
  content: string
  className?: string
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
    const line = lines[i].trim()

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
          <div
            key={`table-${i}`}
            className="my-8 overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700/80 shadow-xs"
          >
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
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
                      <td key={tdIdx} className="px-4 py-3 align-top leading-relaxed">
                        {renderInline(td)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
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
          className="my-6 pl-4 border-l-4 border-purple-500 dark:border-lime-400 italic text-slate-600 dark:text-slate-300"
        >
          {renderInline(line.slice(2))}
        </blockquote>
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
              <span className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-lime-400 mt-2 shrink-0" />
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ul>
      )
      continue
    }

    // Numbered List
    if (/^\d+\.\s/.test(line)) {
      const listItems: string[] = []
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
        listItems.push(lines[i].trim().replace(/^\d+\.\s/, ''))
        i++
      }
      elements.push(
        <ol key={`ol-${i}`} className="my-4 space-y-2 text-slate-700 dark:text-slate-300 list-decimal list-inside">
          {listItems.map((item, idx) => (
            <li key={idx} className="leading-relaxed">
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ol>
      )
      continue
    }

    // Paragraph
    elements.push(
      <p key={`p-${i}`} className="my-4 leading-relaxed text-slate-700 dark:text-slate-300 text-base sm:text-lg">
        {renderInline(line)}
      </p>
    )
    i++
  }

  return <div className={`blog-prose ${className}`}>{elements}</div>
}
