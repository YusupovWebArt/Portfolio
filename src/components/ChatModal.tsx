'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { Send, Bot, User, X, Trash2, Sparkles, Database } from 'lucide-react'

import { FAQ, Message } from '../data/chatFaq'
import { useLanguage } from '../contexts/LanguageContext'
import { useDialogA11y } from '../hooks/useDialogA11y'
import ProjectToolCard from './chat/ProjectToolCard'

export interface ProjectChatContextDetail {
  projectSlug: string
  projectTitle: string
}

let chatModalMessageIdCounter = 0

async function readStreamText(
  reader: ReadableStreamDefaultReader<Uint8Array>,
  onUpdate: (fullText: string) => void,
): Promise<string> {
  const decoder = new TextDecoder()
  let accumulated = ''
  while (true) {
    const { done, value } = await reader.read()
    if (done) break
    accumulated += decoder.decode(value, { stream: true })
    onUpdate(accumulated)
  }
  return accumulated
}

const ChatModal = ({
  open,
  onClose,
}: {
  open?: boolean
  onClose?: () => void
}) => {
  const { lang, t } = useLanguage()
  const ct = t.contact.chatbot
  const [internalOpen, setInternalOpen] = useState(false)
  const [projectContext, setProjectContext] = useState<ProjectChatContextDetail | null>(null)

  const isModalOpen = (open ?? false) || internalOpen

  useEffect(() => {
    const handleContextEvent = (event: Event) => {
      event.stopImmediatePropagation()
      const customEvent = event as CustomEvent<ProjectChatContextDetail>
      if (customEvent.detail) {
        setProjectContext(customEvent.detail)
        setInternalOpen(true)
      }
    }

    const handleOpenChat = (event: Event) => {
      event.stopImmediatePropagation()
      setInternalOpen(true)
    }

    window.addEventListener('open-ai-chat-context', handleContextEvent)
    window.addEventListener('open-ai-chat', handleOpenChat)

    return () => {
      window.removeEventListener('open-ai-chat-context', handleContextEvent)
      window.removeEventListener('open-ai-chat', handleOpenChat)
    }
  }, [])

  const handleClose = useCallback(() => {
    setInternalOpen(false)
    onClose?.()
  }, [onClose])

  const modalRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [liveAnnouncement, setLiveAnnouncement] = useState('')

  useDialogA11y({
    isOpen: isModalOpen,
    onClose: handleClose,
    dialogRef: modalRef,
    initialFocusRef: inputRef,
  })

  const [messages, setMessages] = useState<Message[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = sessionStorage.getItem('portfolio_chat_modal_messages')
      if (saved) {
        try {
          const parsed = JSON.parse(saved) as Array<Omit<Message, 'timestamp'> & { timestamp?: string }>
          return parsed.map((m) => ({
            ...m,
            timestamp: m.timestamp ? new Date(m.timestamp) : undefined,
          }))
        } catch {
          // Fallback to default
        }
      }
    }
    return [
      {
        id: 'welcome',
        from: 'bot',
        text: "Hi! I am Artur's AI assistant powered by a custom Hybrid RAG engine. 🤖 I have indexed all 70 portfolio case studies, architectures, and tech stacks. Ask me about any project, skill, or experience!",
        source: 'Hybrid RAG · 70-Project Knowledge Base',
        timestamp: new Date(),
      },
    ]
  })
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    sessionStorage.setItem(
      'portfolio_chat_modal_messages',
      JSON.stringify(messages),
    )
  }, [messages])

  const scrollToBottom = () => {
    if (
      messagesContainerRef.current &&
      typeof messagesContainerRef.current.scrollTo === 'function'
    ) {
      messagesContainerRef.current.scrollTo({
        top: messagesContainerRef.current.scrollHeight,
        behavior: 'smooth',
      })
    }
  }

  useEffect(() => {
    if (isModalOpen) {
      setTimeout(scrollToBottom, 50)
    }
  }, [messages, isTyping, isModalOpen])

  const handleSend = async (textToSend: string) => {
    if (!textToSend.trim()) return

    const userMessage: Message = {
      id: `user-${++chatModalMessageIdCounter}`,
      from: 'user',
      text: textToSend,
      timestamp: new Date(),
    }

    const historyPayload = [
      ...messages
        .filter((m) => !m.id.startsWith('welcome') && m.id !== 'welcome')
        .map((m) => ({
          role: m.from === 'user' ? 'user' : 'assistant',
          content: m.text,
        })),
      { role: 'user', content: textToSend },
    ]

    const ragOptions = {
      projectSlug: projectContext?.projectSlug,
      projectTitle: projectContext?.projectTitle,
      locale: lang,
    }
    const initialSourceLabel = projectContext?.projectTitle
      ? `Hybrid RAG · ${projectContext.projectTitle} Case Study`
      : 'Hybrid RAG · 70-Project Knowledge Base'

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsTyping(true)
    setLiveAnnouncement(ct.a11y.typing)

    const ragModulePromise = import('../lib/ai/rag')

    const isStaticHosting =
      typeof window !== 'undefined' &&
      (window.location.hostname.includes('github.io') ||
        window.location.pathname.startsWith('/Portfolio'))

    if (isStaticHosting) {
      // Direct autonomous local RAG synthesis without network /api/chat 404 on static hosting
      const {
        synthesizeLocalRagAnswer,
        getRagSourceLabel,
        getRelevantProjectCards,
      } = await ragModulePromise
      const sourceLabel = getRagSourceLabel(textToSend, ragOptions)
      const projectCards = getRelevantProjectCards(textToSend, ragOptions)

      setTimeout(() => {
        setIsTyping(false)
        const localAnswer = synthesizeLocalRagAnswer(textToSend, ragOptions)
        const botMessage: Message = {
          id: `bot-${++chatModalMessageIdCounter}`,
          from: 'bot',
          text: localAnswer,
          source: sourceLabel,
          projects: projectCards.length > 0 ? projectCards : undefined,
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, botMessage])
        setLiveAnnouncement(localAnswer)
      }, 350)
      return
    }

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: historyPayload,
          projectSlug: projectContext?.projectSlug,
          projectTitle: projectContext?.projectTitle,
          locale: lang,
        }),
      })

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`)
      }

      const botMessageId = `bot-${++chatModalMessageIdCounter}`
      setIsTyping(false)

      if (response.body) {
        const reader = response.body.getReader()

        setMessages((prev) => [
          ...prev,
          {
            id: botMessageId,
            from: 'bot',
            text: '',
            source: initialSourceLabel,
            timestamp: new Date(),
          },
        ])

        const streamedText = await readStreamText(reader, (latestText) => {
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === botMessageId ? { ...msg, text: latestText } : msg,
            ),
          )
        })
        setLiveAnnouncement(streamedText)
      } else {
        const text = await response.text()
        setMessages((prev) => [
          ...prev,
          {
            id: botMessageId,
            from: 'bot',
            text,
            source: initialSourceLabel,
            timestamp: new Date(),
          },
        ])
        setLiveAnnouncement(text)
      }

      void ragModulePromise
        .then(({ getRagSourceLabel, getRelevantProjectCards }) => {
          const sourceLabel = getRagSourceLabel(textToSend, ragOptions)
          const projectCards = getRelevantProjectCards(textToSend, ragOptions)
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === botMessageId
                ? {
                    ...msg,
                    source: sourceLabel,
                    projects: projectCards.length > 0 ? projectCards : msg.projects,
                  }
                : msg,
            ),
          )
        })
        .catch(() => {})
    } catch {
      // Fallback to local autonomous RAG synthesis engine
      const {
        synthesizeLocalRagAnswer,
        getRagSourceLabel,
        getRelevantProjectCards,
      } = await ragModulePromise
      const sourceLabel = getRagSourceLabel(textToSend, ragOptions)
      const projectCards = getRelevantProjectCards(textToSend, ragOptions)

      setTimeout(() => {
        setIsTyping(false)
        const fallbackAnswer = synthesizeLocalRagAnswer(textToSend, ragOptions)
        const botMessage: Message = {
          id: `bot-${++chatModalMessageIdCounter}`,
          from: 'bot',
          text: fallbackAnswer,
          source: sourceLabel,
          projects: projectCards.length > 0 ? projectCards : undefined,
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, botMessage])
        setLiveAnnouncement(fallbackAnswer)
      }, 300)
    }
  }

  const handleClearChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        from: 'bot',
        text: ct.welcomeMessage,
        source: 'Hybrid RAG · 70-Project Knowledge Base',
        timestamp: new Date(),
      },
    ])
    setLiveAnnouncement(ct.a11y.cleared)
  }

  const displayedMessages = messages.map((msg) => {
    if (msg.id === 'welcome' || msg.id.startsWith('welcome-')) {
      return {
        ...msg,
        text: ct.welcomeMessage,
        source: msg.source || 'Hybrid RAG · 70-Project Knowledge Base',
      }
    }
    return msg
  })

  if (!isModalOpen) return null

  const projectChips = projectContext
    ? lang === 'ua'
      ? [
          `Запитати про ${projectContext.projectTitle}: ${ct.quickQueryStack}`,
          `Запитати про ${projectContext.projectTitle}: ${ct.quickQueryFeatures}`,
          `Запитати про ${projectContext.projectTitle}: ${ct.quickQueryArchitecture}`,
        ]
      : lang === 'es'
        ? [
            `Preguntar sobre ${projectContext.projectTitle}: ${ct.quickQueryStack}`,
            `Preguntar sobre ${projectContext.projectTitle}: ${ct.quickQueryFeatures}`,
            `Preguntar sobre ${projectContext.projectTitle}: ${ct.quickQueryArchitecture}`,
          ]
        : [
            `Ask about ${projectContext.projectTitle}: ${ct.quickQueryStack}`,
            `Ask about ${projectContext.projectTitle}: ${ct.quickQueryFeatures}`,
            `Ask about ${projectContext.projectTitle}: ${ct.quickQueryArchitecture}`,
          ]
    : []

  // We only show suggestions that haven't been clicked or just show a subset of FAQs that fit in horizontal bar
  const activeSuggestions = FAQ.filter(
    (faq) => !messages.some((m) => m.from === 'user' && (m.text === faq.question || m.text === faq.questionUa || m.text === faq.questionEs))
  )

  const modalNode = (
    <div className="fixed inset-0 bg-slate-900/40 dark:bg-black/60 backdrop-blur-sm flex items-center justify-center z-[70] p-4 text-left transition-all duration-300">
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="chat-modal-title"
        className="relative w-full max-w-xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 rounded-3xl shadow-2xl flex flex-col h-[580px] max-h-[90vh] overflow-hidden text-left transition-all duration-300"
      >
        {/* Polite Screen Reader Live Region for Streaming and Typing Announcements */}
        <div role="status" aria-live="polite" aria-atomic="true" className="sr-only">
          {liveAnnouncement}
        </div>
        
        {/* Header */}
        <div className="shrink-0 flex items-center justify-between px-6 py-4 border-b border-slate-200/60 dark:border-white/5 bg-slate-50/50 dark:bg-slate-950/20">
          <div className="flex items-center space-x-3 min-w-0">
            <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-lime-500/10 flex items-center justify-center text-purple-600 dark:text-lime-400 shrink-0 border border-purple-200/50 dark:border-lime-500/20">
              <Bot className="w-5 h-5" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 id="chat-modal-title" className="font-bold text-slate-800 dark:text-white text-sm leading-none truncate">
                  {ct.assistantName}
                </h3>
                <span className="inline-flex items-center gap-1 rounded-full bg-purple-100 dark:bg-lime-500/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-purple-700 dark:text-lime-400 border border-purple-200/60 dark:border-lime-500/30">
                  <Database className="w-2.5 h-2.5" aria-hidden="true" />
                  RAG Engine
                </span>
              </div>
              <div className="flex items-center space-x-1.5 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" aria-hidden="true" />
                <span className="text-[10px] font-bold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider truncate">
                  {ct.online}
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 shrink-0">
            <button
              onClick={handleClearChat}
              className="p-2 hover:bg-slate-100 dark:hover:bg-white/5 rounded-full text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-700 dark:focus-visible:outline-lime-400"
              title={ct.clearButton}
              aria-label={ct.clearButton}
              type="button"
            >
              <Trash2 className="w-4 h-4" aria-hidden="true" />
            </button>
            <button
              onClick={handleClose}
              className="p-2 hover:bg-slate-100 dark:hover:bg-white/5 rounded-full text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-700 dark:focus-visible:outline-lime-400"
              title={ct.closeChat}
              aria-label={ct.closeChat}
              type="button"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Pinned Active Project Context Bar */}
        {projectContext && (
          <div className="shrink-0 flex items-center justify-between px-6 py-2 bg-purple-50/90 dark:bg-lime-500/10 border-b border-purple-200/60 dark:border-lime-500/20 text-xs">
            <div className="flex items-center gap-1.5 font-semibold text-purple-700 dark:text-lime-300 truncate">
              <Sparkles className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span className="truncate">{ct.activeContext}: {projectContext.projectTitle}</span>
            </div>
            <button
              type="button"
              onClick={() => setProjectContext(null)}
              className="ml-2 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 transition cursor-pointer"
              title={ct.clearContext}
            >
              <span>{ct.resetContext}</span>
              <X className="w-3 h-3" aria-hidden="true" />
            </button>
          </div>
        )}

        {/* Message Area */}
        <div
          ref={messagesContainerRef}
          role="region"
          tabIndex={0}
          aria-label={ct.a11y.logLabel}
          className="relative flex-1 min-h-0 overflow-y-auto px-6 py-4 space-y-4 bg-slate-50/30 dark:bg-slate-950/10 custom-scrollbar focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-purple-700 dark:focus-visible:outline-lime-400"
        >
          {displayedMessages.map((msg) => {
            const isBot = msg.from === 'bot'
            return (
              <div
                key={msg.id}
                className={`flex items-start space-x-2 ${
                  isBot ? 'justify-start' : 'justify-end space-x-reverse'
                }`}
              >
                {/* Avatar */}
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs ${
                    isBot
                      ? 'bg-purple-100 dark:bg-lime-500/10 text-purple-600 dark:text-lime-400'
                      : 'bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-slate-300'
                  }`}
                  aria-hidden="true"
                >
                  {isBot ? <Bot className="w-3.5 h-3.5" /> : <User className="w-3.5 h-3.5" />}
                </div>

                {/* Message Bubble */}
                <div
                  className={`relative px-4 py-2.5 text-left rounded-2xl max-w-[85%] text-sm shadow-sm leading-relaxed ${
                    isBot
                      ? 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-tl-sm border border-slate-200/50 dark:border-white/5'
                      : 'bg-purple-600 dark:bg-lime-500 text-white dark:text-slate-900 rounded-tr-sm font-medium'
                  }`}
                >
                  <div className="whitespace-pre-line">
                    <span className="sr-only">
                      {isBot ? ct.a11y.assistantLabel : ct.a11y.userLabel}:{' '}
                    </span>
                    {msg.text}
                  </div>
                  {msg.projects && msg.projects.length > 0 && (
                    <div className="mt-2 space-y-2">
                      {msg.projects.map((proj) => (
                        <ProjectToolCard
                          key={proj.slug}
                          project={proj}
                          locale={lang}
                          onNavigate={handleClose}
                        />
                      ))}
                    </div>
                  )}
                  {isBot && msg.source && (
                    <div className="mt-2 pt-1.5 border-t border-slate-100 dark:border-white/5 flex items-center gap-1.5 text-[10px] font-medium text-slate-600 dark:text-slate-400">
                      <Database className="w-3 h-3 text-purple-600 dark:text-lime-400 shrink-0" aria-hidden="true" />
                      <span>{msg.source}</span>
                    </div>
                  )}
                </div>
              </div>
            )
          })}

          {/* Project Context Quick Prompts inside chat log */}
          {projectContext && (
            <div className="mt-2 ml-9 p-3 bg-purple-50/70 dark:bg-slate-800/70 border border-purple-200/60 dark:border-lime-500/25 rounded-2xl animate-fade-in space-y-2">
              <div className="text-[10px] font-bold text-purple-600 dark:text-lime-400 uppercase tracking-wider flex items-center justify-between">
                <span>{ct.quickQueriesHeader}: {projectContext.projectTitle}</span>
              </div>
              <div className="grid grid-cols-1 gap-1.5">
                {projectChips.map((chip, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(chip)}
                    className="text-left px-3.5 py-2 bg-white hover:bg-purple-50/50 dark:bg-slate-900 dark:hover:bg-slate-800 text-xs font-medium text-purple-700 dark:text-lime-400 rounded-xl border border-purple-100 dark:border-lime-500/20 shadow-sm transition-all"
                    type="button"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Initial FAQ Grid inside the chat log (2-column compact layout so welcome message stays visible) */}
          {messages.length === 1 && !isTyping && (
            <div className="mt-3 ml-9 space-y-2 animate-fade-in">
              <div className="text-[10px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                {ct.faqHeader}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {FAQ.slice(0, 8).map((faq, idx) => {
                  const questionText = lang === 'ua' ? faq.questionUa : lang === 'es' ? faq.questionEs : faq.question
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSend(questionText)}
                      className="text-left px-3.5 py-2 bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700/80 text-[11px] font-semibold text-purple-600 dark:text-lime-400 hover:text-purple-700 dark:hover:text-lime-300 rounded-xl border border-slate-200/80 dark:border-white/5 shadow-sm transition-all duration-200 active:scale-[0.99] flex items-center justify-between group cursor-pointer"
                      type="button"
                    >
                      <span className="line-clamp-2">{questionText}</span>
                      <span className="text-slate-400 dark:text-slate-500 group-hover:translate-x-0.5 transition-transform ml-1.5 shrink-0" aria-hidden="true">→</span>
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex items-start space-x-2 justify-start">
              <div className="w-7 h-7 rounded-full bg-purple-100 dark:bg-lime-500/10 flex items-center justify-center text-purple-600 dark:text-lime-400 shrink-0" aria-hidden="true">
                <Bot className="w-3.5 h-3.5" aria-hidden="true" />
              </div>
              <div className="bg-white dark:bg-slate-800 px-4 py-3 rounded-2xl rounded-tl-sm border border-slate-200/50 dark:border-white/5 shadow-sm flex items-center space-x-1">
                <span className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
                <span className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
                <span className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce" />
              </div>
            </div>
          )}
        </div>

        {/* Footer & Inputs */}
        <div className="shrink-0 p-4 border-t border-slate-200/60 dark:border-white/5 bg-slate-50/50 dark:bg-slate-950/20 space-y-3">
          
          {/* Suggestion Chips (Wrapped & Compact, only for active chats) */}
          {activeSuggestions.length > 0 && messages.length > 1 && (
            <div className="flex flex-wrap gap-2 pb-1">
              {activeSuggestions.slice(0, 3).map((faq, idx) => {
                const questionText = lang === 'ua' ? faq.questionUa : lang === 'es' ? faq.questionEs : faq.question
                return (
                  <button
                    key={idx}
                    onClick={() => handleSend(questionText)}
                    className="px-3.5 py-1.5 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/80 text-[11px] font-semibold text-slate-600 dark:text-slate-300 rounded-full border border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/10 shadow-sm transition-all active:scale-95 duration-200 cursor-pointer"
                    type="button"
                  >
                    {questionText}
                  </button>
                )
              })}
            </div>
          )}

          {/* Form Input */}
          <div className="flex items-center space-x-2">
            <div className="flex-1 flex items-center bg-white dark:bg-slate-950 border border-slate-400/80 dark:border-white/20 rounded-full px-4 py-1.5 focus-within:border-purple-700 dark:focus-within:border-lime-400 focus-within:ring-2 focus-within:ring-purple-700 dark:focus-within:ring-lime-400 transition-all duration-200">
              <input
                ref={inputRef}
                className="flex-1 bg-transparent border-0 outline-none text-slate-800 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 text-sm py-1"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend(input)}
                placeholder={ct.placeholder}
                aria-label={ct.a11y.inputLabel}
                autoComplete="off"
                enterKeyHint="send"
              />
            </div>
            <button
              onClick={() => handleSend(input)}
              className="w-10 h-10 rounded-full bg-purple-600 hover:bg-purple-700 dark:bg-lime-500 dark:hover:bg-lime-400 text-white dark:text-slate-900 flex items-center justify-center transition-all shadow-md active:scale-95 shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-700 dark:focus-visible:outline-lime-400"
              title={ct.sendButton}
              aria-label={ct.sendButton || 'Send message'}
              type="button"
            >
              <Send className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>

      </div>
    </div>
  )

  return typeof document !== 'undefined'
    ? createPortal(modalNode, document.body)
    : modalNode
}

export default ChatModal
