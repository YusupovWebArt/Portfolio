import { useState, useEffect, useRef } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Github,
  Linkedin,
  Send,
  Bot,
  User,
  Trash2,
} from 'lucide-react'

import { FAQ, getBotAnswer, Message } from '../data/chatFaq'

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'web.sunline@gmail.com',
      link: 'mailto:web.sunline@gmail.com',
      glowColor: 'bg-blue-500',
      iconColor: 'text-blue-500 dark:text-blue-400',
      borderHover: 'group-hover:border-blue-500/30',
      tag: 'For official requests & projects',
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone/WhatsApp',
      value: '+34642413967',
      link: 'https://wa.me/34642413967',
      glowColor: 'bg-emerald-500',
      iconColor: 'text-emerald-500 dark:text-emerald-400',
      borderHover: 'group-hover:border-emerald-500/30',
      tag: 'Best for quick chats',
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: 'Telegram',
      value: '@develop_create',
      link: 'https://t.me/develop_create',
      glowColor: 'bg-sky-500',
      iconColor: 'text-sky-500 dark:text-sky-400',
      borderHover: 'group-hover:border-sky-500/30',
      tag: 'Immediate response',
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'Spain, Seville',
      link: '#',
      glowColor: 'bg-rose-500',
      iconColor: 'text-rose-500 dark:text-rose-400',
      borderHover: 'group-hover:border-rose-500/30',
      tag: 'Remote / Relocate-ready',
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
      url: 'https://www.linkedin.com/in/artur-iusupov/',
      hoverColor: 'hover:text-purple-600 dark:hover:text-lime-400 hover:border-purple-500/40 dark:hover:border-lime-500/40',
    },
  ]

  // States for embedded AI console
  const [messages, setMessages] = useState<Message[]>(() => {
    const saved = sessionStorage.getItem('portfolio_chat_contact_messages')
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        return parsed.map((m: any) => ({
          ...m,
          timestamp: m.timestamp ? new Date(m.timestamp) : undefined,
        }))
      } catch (e) {
        // Fallback to default
      }
    }
    return [
      {
        id: 'welcome',
        from: 'bot',
        text: "Hi! I am Artur's AI assistant. 🤖 Ask me anything about his experience, skills, stack, or select one of the suggested questions below!",
      },
    ]
  })
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    sessionStorage.setItem(
      'portfolio_chat_contact_messages',
      JSON.stringify(messages),
    )
  }, [messages])

  const scrollToBottom = () => {
    if (scrollContainerRef.current) {
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
      id: `user-${Date.now()}`,
      from: 'user',
      text: textToSend,
    }

    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setIsTyping(true)

    setTimeout(() => {
      setIsTyping(false)
      const botMsg: Message = {
        id: `bot-${Date.now()}`,
        from: 'bot',
        text: getBotAnswer(textToSend),
      }
      setMessages((prev) => [...prev, botMsg])
    }, 950)
  }

  const handleClearChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        from: 'bot',
        text: "Hi! I am Artur's AI assistant. 🤖 Ask me anything about his experience, skills, stack, or select one of the suggested questions below!",
      },
    ])
  }

  const activeSuggestions = FAQ.filter(
    (faq) => !messages.some((m) => m.from === 'user' && m.text === faq.question)
  )

  return (
    <section
      id="contact"
      className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Soft background gradient rings */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-purple-500/5 dark:bg-lime-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-lime-500/10 dark:to-lime-600/10 text-purple-700 dark:text-lime-400 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            Get In Touch
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Let's build something{' '}
            <span className="bg-gradient-to-r from-purple-500 to-indigo-600 dark:from-lime-400 dark:to-lime-500 bg-clip-text text-transparent">
              extraordinary
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Ready to bring your project to life? Choose a messaging channel below or test my virtual assistant for quick answers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Apple Liquid Glass Contacts */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-4 px-1">
              Direct Channels
            </h3>
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target={item.link === '#' ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-4 p-4 bg-white dark:bg-slate-900 lg:bg-white/40 lg:dark:bg-slate-900/40 lg:backdrop-blur-md border border-slate-200/60 dark:border-white/5 rounded-2xl hover:bg-white/70 dark:hover:bg-slate-900/80 hover:border-slate-300 dark:hover:border-white/10 hover:scale-[1.01] hover:-translate-y-0.5 transition-all duration-300 shadow-sm relative overflow-hidden"
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
                      <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                        {item.label}
                      </span>
                      <span className="text-[10px] text-slate-400 dark:text-slate-500 bg-slate-100/55 dark:bg-slate-950/30 px-2 py-0.5 rounded-full font-medium shrink-0">
                        {item.tag}
                      </span>
                    </div>
                    <div className="font-bold text-slate-900 dark:text-white text-sm mt-0.5 truncate">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links Row */}
            <div className="pt-6 border-t border-slate-200/60 dark:border-white/5">
              <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-4 px-1">
                Follow Credentials
              </h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
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
            <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-4 px-1">
              AI Assistant Console
            </h3>
            
            <div className="relative overflow-hidden bg-white dark:bg-slate-900 lg:bg-white/60 lg:dark:bg-slate-900/60 lg:backdrop-blur-xl border border-slate-200/80 dark:border-white/10 rounded-3xl h-[420px] flex flex-col shadow-lg hover:border-slate-300 dark:hover:border-white/15 transition-all duration-300">
              
              {/* Header inside the console */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-200/50 dark:border-white/5 bg-slate-50/50 dark:bg-slate-950/20">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-lime-500/10 flex items-center justify-center text-purple-600 dark:text-lime-400 shrink-0">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-white text-xs leading-none">
                      Artur's Assistant
                    </h4>
                    <div className="flex items-center space-x-1.5 mt-0.5">
                      <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[9px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                        Live Console
                      </span>
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={handleClearChat}
                  className="p-1.5 hover:bg-slate-100 dark:hover:bg-white/5 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
                  title="Reset Conversation"
                  type="button"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Chat History List */}
              <div
                ref={scrollContainerRef}
                className="flex-1 overflow-y-auto px-5 py-4 space-y-3.5 bg-slate-50/20 dark:bg-slate-950/5 custom-scrollbar"
              >
                {messages.map((msg) => {
                  const isBot = msg.from === 'bot'
                  return (
                    <div
                      key={msg.id}
                      className={`flex items-start space-x-2 ${
                        isBot ? 'justify-start' : 'justify-end space-x-reverse'
                      }`}
                    >
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-[10px] ${
                          isBot
                            ? 'bg-purple-100 dark:bg-lime-500/10 text-purple-600 dark:text-lime-400'
                            : 'bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-slate-300'
                        }`}
                      >
                        {isBot ? <Bot className="w-3 h-3" /> : <User className="w-3 h-3" />}
                      </div>

                      <div
                        className={`px-3.5 py-2 rounded-2xl max-w-[82%] text-xs leading-relaxed shadow-sm ${
                          isBot
                            ? 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-tl-sm border border-slate-200/40 dark:border-white/5'
                            : 'bg-purple-600 dark:bg-lime-500 text-white dark:text-slate-900 rounded-tr-sm font-medium'
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  )
                })}

                {/* Local FAQ list inside chat log when only welcome message exists */}
                {messages.length === 1 && !isTyping && (
                  <div className="mt-4 ml-8 space-y-1.5 animate-fade-in">
                    <div className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1 px-1">
                      Frequently Asked Questions
                    </div>
                    <div className="grid grid-cols-1 gap-1.5">
                      {FAQ.slice(0, 4).map((faq, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSend(faq.question)}
                          className="text-left px-3.5 py-2 bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-750 text-[11px] font-semibold text-purple-600 dark:text-lime-400 hover:text-purple-700 dark:hover:text-lime-300 rounded-xl border border-slate-200/50 dark:border-white/5 shadow-sm transition-all duration-200 active:scale-[0.99] flex items-center justify-between group"
                          type="button"
                        >
                          <span>{faq.question}</span>
                          <span className="text-slate-300 dark:text-slate-600 group-hover:translate-x-0.5 transition-transform shrink-0 ml-2">→</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Typing status dots */}
                {isTyping && (
                  <div className="flex items-start space-x-2 justify-start">
                    <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-lime-500/10 flex items-center justify-center text-purple-600 dark:text-lime-400 shrink-0">
                      <Bot className="w-3 h-3" />
                    </div>
                    <div className="bg-white dark:bg-slate-800 px-3 py-2.5 rounded-2xl rounded-tl-sm border border-slate-200/40 dark:border-white/5 shadow-sm flex items-center space-x-1 shrink-0">
                      <span className="w-1 h-1 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
                      <span className="w-1 h-1 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
                      <span className="w-1 h-1 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce" />
                    </div>
                  </div>
                )}

              </div>

              {/* Console Input Footer */}
              <div className="p-3 border-t border-slate-200/50 dark:border-white/5 bg-slate-50/50 dark:bg-slate-950/20 space-y-2">
                
                {/* Active Suggestion Chips (Wrapped & Compact, max 2 items for space) */}
                {activeSuggestions.length > 0 && messages.length > 1 && (
                  <div className="flex flex-wrap gap-1.5">
                    {activeSuggestions.slice(0, 2).map((faq, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSend(faq.question)}
                        className="px-2.5 py-1 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/80 text-[10px] font-semibold text-slate-500 dark:text-slate-300 rounded-full border border-slate-200/60 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/10 shadow-sm transition-all active:scale-95 duration-250"
                        type="button"
                      >
                        {faq.question}
                      </button>
                    ))}
                  </div>
                )}

                <div className="flex items-center space-x-2">
                  <div className="flex-1 flex items-center bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/5 rounded-full px-3.5 py-1 focus-within:border-purple-500/50 dark:focus-within:border-lime-500/50 focus-within:ring-2 focus-within:ring-purple-500/5 dark:focus-within:ring-lime-500/5 transition-all duration-250">
                    <input
                      className="flex-1 bg-transparent border-0 outline-none text-slate-800 dark:text-slate-100 placeholder-slate-400 text-xs py-1"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSend(input)}
                      placeholder="Type your question..."
                    />
                  </div>
                  <button
                    onClick={() => handleSend(input)}
                    className="w-8.5 h-8.5 w-8 h-8 rounded-full bg-purple-600 hover:bg-purple-700 dark:bg-lime-500 dark:hover:bg-lime-400 text-white dark:text-slate-900 flex items-center justify-center transition-all shadow-md active:scale-95 shrink-0"
                    title="Send to assistant"
                    type="button"
                  >
                    <Send className="w-3.5 h-3.5" />
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
