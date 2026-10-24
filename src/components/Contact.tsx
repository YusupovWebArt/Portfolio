'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import {
  LuMail as Mail,
  LuPhone as Phone,
  LuMapPin as MapPin,
  LuMessageCircle as MessageCircle,
  LuSend as Send,
  LuBot as Bot,
  LuUser as User,
  LuTrash2 as Trash2,
  LuDatabase as Database,
  LuArrowRight as ArrowRight,
} from 'react-icons/lu'
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa'
import { FaXTwitter as XIcon } from 'react-icons/fa6'

import { FAQ, Message } from '../data/chatFaq'
import { useLanguage } from '../contexts/LanguageContext'
import { PUBLIC_PROFILES } from '../lib/profiles'
import type { ContactKind, RevealedContact } from '../lib/contacts'
import FormattedChatText from './chat/FormattedChatText'

let contactMessageIdCounter = 0

const Contact = () => {
  const { lang, t } = useLanguage()
  const ct = t.contact

  const [revealed, setRevealed] = useState<Partial<Record<ContactKind, RevealedContact>>>({})

  const reveal = useCallback(async (kind: ContactKind): Promise<void> => {
    const { revealContact } = await import('../lib/contacts')
    const contact = revealContact(kind)
    setRevealed((prev) => ({ ...prev, [kind]: contact }))
  }, [])

  const cardValue = (kind: ContactKind, neutral: string): string => revealed[kind]?.label ?? neutral
  const cardLink = (kind: ContactKind): string => revealed[kind]?.href ?? '#'

  const contactInfo = [
    {
      kind: 'email' as const,
      icon: <Mail className="w-5 h-5" />,
      label: ct.emailLabel,
      value: cardValue('email', ct.reveal.email),
      link: cardLink('email'),
      glowColor: 'bg-blue-500',
      iconColor: 'text-blue-500 dark:text-blue-400',
      borderHover: 'group-hover:border-blue-500/30',
      tag: ct.contactTags.email,
    },
    {
      kind: 'phone' as const,
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone/WhatsApp',
      value: cardValue('phone', ct.reveal.phone),
      link: cardLink('phone'),
      glowColor: 'bg-emerald-500',
      iconColor: 'text-emerald-500 dark:text-emerald-400',
      borderHover: 'group-hover:border-emerald-500/30',
      tag: ct.contactTags.phone,
    },
    {
      kind: 'telegram' as const,
      icon: <MessageCircle className="w-5 h-5" />,
      label: 'Telegram',
      value: cardValue('telegram', ct.reveal.telegram),
      link: cardLink('telegram'),
      glowColor: 'bg-sky-500',
      iconColor: 'text-sky-500 dark:text-sky-400',
      borderHover: 'group-hover:border-sky-500/30',
      tag: ct.contactTags.telegram,
    },
    {
      kind: undefined,
      icon: <MapPin className="w-5 h-5" />,
      label: ct.locationLabel,
      value: ct.locationValue,
      link: '#',
      glowColor: 'bg-rose-500',
      iconColor: 'text-rose-500 dark:text-rose-400',
      borderHover: 'group-hover:border-rose-500/30',
      tag: ct.locationTag,
    },
  ]

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      url: 'https://github.com/YusupovWebArt',
      hoverColor: 'hover:text-purple-600 dark:hover:text-lime-400 hover:border-purple-500/40 dark:hover:border-lime-500/40',
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      url: PUBLIC_PROFILES.linkedinUrl,
      hoverColor: 'hover:text-purple-600 dark:hover:text-lime-400 hover:border-purple-500/40 dark:hover:border-lime-500/40',
    },
    {
      icon: <XIcon className="w-4 h-4" />,
      label: 'X',
      url: PUBLIC_PROFILES.twitterUrl,
      hoverColor: 'hover:text-purple-600 dark:hover:text-lime-400 hover:border-purple-500/40 dark:hover:border-lime-500/40',
    },
  ]

  // States for embedded AI console with safe SSR initial state
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      from: 'bot',
      text: ct.chatbot.welcomeMessage,
      source: ct.faqSource,
    },
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Hydrate chat messages from sessionStorage asynchronously after mount
  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const saved = sessionStorage.getItem('portfolio_chat_contact_messages')
        if (saved) {
          const parsed = JSON.parse(saved) as Array<Omit<Message, 'timestamp'> & { timestamp?: string }>
          setMessages(
            parsed.map((m) => ({
              ...m,
              timestamp: m.timestamp ? new Date(m.timestamp) : undefined,
            })),
          )
        }
      } catch {
        // Ignore sessionStorage read errors
      }
    }, 0)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    sessionStorage.setItem(
      'portfolio_chat_contact_messages',
      JSON.stringify(messages),
    )
  }, [messages])

  const scrollToBottom = () => {
    if (scrollContainerRef.current && typeof scrollContainerRef.current.scrollTo === 'function') {
      scrollContainerRef.current.scrollTo({
        top: scrollContainerRef.current.scrollHeight,
        behavior: 'smooth',
      })
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  const handleSend = (textToSend: string) => {
    if (!textToSend.trim()) return

    const userMsg: Message = {
      id: `user-${++contactMessageIdCounter}`,
      from: 'user',
      text: textToSend,
    }

    const historyForRag = messages
      .filter((m) => m.id !== 'welcome' && !m.id.startsWith('welcome-') && m.text.trim())
      .slice(-6)
      .map((m) => ({
        role: (m.from === 'user' ? 'user' : 'assistant') as 'user' | 'assistant',
        content: m.text,
      }))

    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setIsTyping(true)

    void import('../lib/ai/rag').then(({ synthesizeLocalRagAnswer, getRagSourceLabel, getContextualFollowUps }) => {
      setTimeout(() => {
        setIsTyping(false)
        const botMsg: Message = {
          id: `bot-${++contactMessageIdCounter}`,
          from: 'bot',
          text: synthesizeLocalRagAnswer(textToSend, { locale: lang, history: historyForRag }),
          source: getRagSourceLabel(textToSend, { locale: lang, history: historyForRag }),
          followUps: getContextualFollowUps(textToSend, { locale: lang, history: historyForRag }),
        }
        setMessages((prev) => [...prev, botMsg])
      }, 950)
    }).catch(() => {
      setIsTyping(false)
    })
  }

  const handleClearChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        from: 'bot',
        text: ct.chatbot.welcomeMessage,
      },
    ])
  }

  const displayedMessages = messages.map((msg) => {
    if (msg.id === 'welcome' || msg.id.startsWith('welcome-')) {
      return { ...msg, text: ct.chatbot.welcomeMessage }
    }
    return msg
  })

  const activeSuggestions = FAQ.filter(
    (faq) => !messages.some((m) => m.from === 'user' && (m.text === faq.question || m.text === faq.questionUa || m.text === faq.questionEs))
  )

  const lastBotMsg = [...messages].reverse().find((m) => m.from === 'bot')
  const followUpChips = lastBotMsg?.followUps && lastBotMsg.followUps.length > 0 ? lastBotMsg.followUps : []

  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Soft background gradient rings */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-purple-500/5 dark:bg-lime-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-lime-500/10 dark:to-lime-600/10 text-purple-700 dark:text-lime-400 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            {ct.badge}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            {ct.title.before}{' '}
            <span className="bg-gradient-to-r from-purple-500 to-indigo-600 dark:from-lime-400 dark:to-lime-500 bg-clip-text text-transparent">
              {ct.title.highlight}
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            {ct.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Apple Liquid Glass Contacts */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4 px-1">
              {ct.directChannels}
            </h3>
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target={item.link === '#' || item.link.startsWith('#') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    if (item.kind && !revealed[item.kind]) {
                      e.preventDefault()
                      void reveal(item.kind)
                    }
                  }}
                  className="group flex items-center gap-4 p-4 bg-white dark:bg-slate-900 lg:bg-white/40 lg:dark:bg-slate-900/40 lg:backdrop-blur-md border border-slate-200/60 dark:border-white/5 rounded-2xl hover:bg-white/70 dark:hover:bg-slate-900/80 hover:border-slate-300 dark:hover:border-white/10 hover:scale-[1.01] hover:-translate-y-0.5 transition-all duration-300 shadow-sm relative overflow-hidden"
                >
                  {/* Glass reflections and dynamic glow */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-30 pointer-events-none" />
                  <div className={`hidden lg:block absolute -top-12 -left-12 w-24 h-24 ${item.glowColor} rounded-full blur-2xl opacity-0 group-hover:opacity-[0.08] dark:group-hover:opacity-[0.12] transition-opacity duration-300 pointer-events-none`} />

                  {/* Circular Icon badge */}
                  <div className={`w-11 h-11 rounded-full shrink-0 flex items-center justify-center bg-slate-100 dark:bg-white/5 ${item.iconColor} border border-slate-200/30 dark:border-white/10 shadow-inner group-hover:scale-105 transition-transform duration-300`}>
                    {item.icon}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                        {item.label}
                      </span>
                      <span className="text-[10px] text-slate-700 dark:text-slate-300 bg-slate-100/55 dark:bg-slate-950/30 px-2 py-0.5 rounded-full font-medium shrink-0">
                        {item.tag}
                      </span>
                    </div>
                    <div
                      role="status"
                      aria-live="polite"
                      className="font-bold text-slate-900 dark:text-white text-sm mt-0.5 truncate"
                    >
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <noscript>
              <div className="mt-3 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs text-amber-900 dark:text-amber-200">
                {ct.reveal.noscript}
              </div>
            </noscript>

            {/* Social Links Row */}
            <div className="pt-6 border-t border-slate-200/60 dark:border-white/5">
              <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4 px-1">
                {ct.followCredentials}
              </h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`p-3 bg-white dark:bg-slate-900 lg:bg-white/40 lg:dark:bg-slate-900/40 lg:backdrop-blur-md border border-slate-200/60 dark:border-white/5 rounded-full text-slate-500 dark:text-slate-400 ${social.hoverColor} transition-all duration-300 hover:scale-110 hover:shadow-sm`}
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: AI Console directly on page (Option 3) */}
          <div className="lg:col-span-6 flex flex-col h-full">
            <h3 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4 px-1">
              {ct.chatbot.title}
            </h3>
            
            <div className="relative overflow-hidden bg-white/90 dark:bg-slate-900/90 lg:backdrop-blur-xl border border-slate-200/90 dark:border-slate-800 rounded-3xl min-h-[500px] h-[520px] flex flex-col shadow-xl hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300">
              
              {/* Header inside the console */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-200/70 dark:border-slate-800/80 bg-slate-50/70 dark:bg-slate-950/40">
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-lime-500/15 flex items-center justify-center text-purple-600 dark:text-lime-400 shrink-0">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <h4 className="font-bold text-slate-900 dark:text-white text-xs leading-none">
                        {ct.chatbot.assistantName}
                      </h4>
                      <span className="px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-purple-100 dark:bg-lime-500/15 text-purple-700 dark:text-lime-300 rounded-md border border-purple-200/60 dark:border-lime-500/30">
                        RAG Engine
                      </span>
                    </div>
                    <div className="flex items-center space-x-1.5 mt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[9px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        {ct.chatbot.liveConsole}
                      </span>
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={handleClearChat}
                  className="p-1.5 hover:bg-slate-200/60 dark:hover:bg-slate-800 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-700 dark:focus-visible:outline-lime-400 cursor-pointer"
                  title={ct.chatbot.clearButton}
                  aria-label={ct.chatbot.clearButton || 'Clear chat'}
                  type="button"
                >
                  <Trash2 className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              </div>

              {/* Chat History List */}
              <div
                ref={scrollContainerRef}
                className="flex-1 overflow-y-auto px-5 py-4 space-y-4 bg-slate-50/40 dark:bg-slate-950/40 custom-scrollbar"
              >
                {displayedMessages.map((msg) => {
                  const isBot = msg.from === 'bot'
                  return (
                    <div
                      key={msg.id}
                      className={`flex items-start space-x-2.5 ${
                        isBot ? 'justify-start' : 'justify-end space-x-reverse'
                      }`}
                    >
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs ${
                          isBot
                            ? 'bg-purple-100 dark:bg-lime-500/15 text-purple-600 dark:text-lime-400'
                            : 'bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-slate-300'
                        }`}
                      >
                        {isBot ? <Bot className="w-3.5 h-3.5" /> : <User className="w-3.5 h-3.5" />}
                      </div>

                      <div
                        className={`px-4 py-3 rounded-2xl max-w-[85%] text-xs sm:text-[13px] leading-relaxed shadow-sm ${
                          isBot
                            ? 'bg-white dark:bg-slate-800/95 text-slate-800 dark:text-slate-100 rounded-tl-sm border border-slate-200/80 dark:border-slate-700/80 shadow-sm'
                            : 'bg-purple-600 dark:bg-lime-500 text-white dark:text-slate-950 rounded-tr-sm font-medium'
                        }`}
                      >
                        <FormattedChatText
                          text={msg.text}
                          srPrefix={`${isBot ? ct.chatbot.a11y?.botPrefix || 'Assistant' : 'You'}: `}
                          isBot={isBot}
                        />
                        {isBot && msg.source && (
                          <div className="mt-2.5 pt-2 border-t border-slate-200/60 dark:border-slate-700/70 flex items-center gap-1.5 text-[11px] font-semibold text-purple-600 dark:text-lime-400">
                            <Database className="w-3 h-3 shrink-0" />
                            <span>{msg.source}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}

                {/* Local FAQ list inside chat log when only welcome message exists */}
                {messages.length === 1 && !isTyping && (
                  <div className="mt-3 ml-8 space-y-2 animate-fade-in">
                    <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5 px-1">
                      {ct.chatbot.faqHeader}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {FAQ.slice(0, 4).map((faq, idx) => {
                        const questionText = lang === 'ua' ? faq.questionUa : lang === 'es' ? faq.questionEs : faq.question
                        return (
                          <button
                            key={idx}
                            onClick={() => handleSend(questionText)}
                            className="text-left px-3.5 py-2.5 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between gap-2 group shadow-xs active:scale-[0.99] bg-white hover:bg-slate-50 text-slate-800 hover:text-purple-700 border-slate-200/90 hover:border-purple-300 dark:bg-slate-800/90 dark:hover:bg-slate-800 dark:text-slate-200 dark:hover:text-lime-300 dark:border-slate-700/70 dark:hover:border-lime-500/50"
                            type="button"
                          >
                            <span className="text-xs sm:text-[13px] font-medium leading-snug line-clamp-2">
                              {questionText}
                            </span>
                            <ArrowRight className="w-3.5 h-3.5 shrink-0 text-slate-400 dark:text-slate-500 group-hover:text-purple-600 dark:group-hover:text-lime-400 group-hover:translate-x-0.5 transition-all" aria-hidden="true" />
                          </button>
                        )
                      })}
                    </div>
                  </div>
                )}

                {/* Typing status dots */}
                {isTyping && (
                  <div className="flex items-start space-x-2.5 justify-start">
                    <div className="w-7 h-7 rounded-full bg-purple-100 dark:bg-lime-500/15 flex items-center justify-center text-purple-600 dark:text-lime-400 shrink-0">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                    <div className="bg-white dark:bg-slate-800 px-3.5 py-2.5 rounded-2xl rounded-tl-sm border border-slate-200/60 dark:border-slate-700/80 shadow-sm flex items-center space-x-1 shrink-0">
                      <span className="w-1 h-1 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
                      <span className="w-1 h-1 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
                      <span className="w-1 h-1 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce" />
                    </div>
                  </div>
                )}

              </div>

              {/* Console Input Footer */}
              <div className="p-3.5 border-t border-slate-200/70 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/40 space-y-2.5">
                
                {/* Contextual Follow-Up Suggestions or FAQ Chips */}
                {messages.length > 1 && (
                  <div className="flex flex-wrap gap-1.5">
                    {followUpChips.length > 0
                      ? followUpChips.slice(0, 3).map((chip, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleSend(chip)}
                            className="px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer shadow-xs active:scale-95 bg-white hover:bg-purple-50 text-slate-700 hover:text-purple-700 border border-slate-200 hover:border-purple-300 dark:bg-slate-800 dark:hover:bg-slate-800 dark:text-slate-200 dark:hover:text-lime-300 dark:border-slate-700 dark:hover:border-lime-500/40"
                            type="button"
                          >
                            {chip}
                          </button>
                        ))
                      : activeSuggestions.slice(0, 2).map((faq, idx) => {
                          const questionText = lang === 'ua' ? faq.questionUa : lang === 'es' ? faq.questionEs : faq.question
                          return (
                            <button
                              key={idx}
                              onClick={() => handleSend(questionText)}
                              className="px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer shadow-xs active:scale-95 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-300 dark:bg-slate-800 dark:hover:bg-slate-800 dark:text-slate-300 dark:hover:text-white dark:border-slate-700 dark:hover:border-slate-600"
                              type="button"
                            >
                              {questionText}
                            </button>
                          )
                        })}
                  </div>
                )}

                <div className="flex items-center space-x-2">
                  <div className="flex-1 flex items-center bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-full px-4 py-1 focus-within:border-purple-600 dark:focus-within:border-lime-400 focus-within:ring-2 focus-within:ring-purple-600/20 dark:focus-within:ring-lime-400/20 transition-all duration-200 shadow-xs">
                    <input
                      className="flex-1 bg-transparent border-0 outline-none text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm py-1"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSend(input)}
                      placeholder={ct.chatbot.placeholder}
                      aria-label={ct.chatbot.a11y?.inputLabel || ct.chatbot.placeholder || 'Type your question'}
                    />
                  </div>
                  <button
                    onClick={() => handleSend(input)}
                    className="w-9 h-9 rounded-full bg-purple-600 hover:bg-purple-700 dark:bg-lime-500 dark:hover:bg-lime-400 text-white dark:text-slate-950 flex items-center justify-center transition-all shadow-md active:scale-95 shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 dark:focus-visible:outline-lime-400 cursor-pointer"
                    title={ct.chatbot.sendButton}
                    aria-label={ct.chatbot.sendButton || 'Send message'}
                    type="button"
                  >
                    <Send className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact
