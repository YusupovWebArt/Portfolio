import { useState, useEffect, useRef } from 'react'
import { Send, Bot, User, X, Trash2 } from 'lucide-react'

import { FAQ, getBotAnswer, Message } from '../data/chatFaq'

const ChatModal = ({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) => {
  const [messages, setMessages] = useState<Message[]>(() => {
    const saved = sessionStorage.getItem('portfolio_chat_modal_messages')
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
        text: "Hi! I am Artur's AI assistant. 🤖 Feel free to ask me anything about his professional experience, skills, stack, or availability, or click one of the suggested questions below!",
        timestamp: new Date(),
      },
    ]
  })
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    sessionStorage.setItem(
      'portfolio_chat_modal_messages',
      JSON.stringify(messages),
    )
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (open) {
      setTimeout(scrollToBottom, 50)
    }
  }, [messages, isTyping, open])

  const handleSend = (textToSend: string) => {
    if (!textToSend.trim()) return

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      from: 'user',
      text: textToSend,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    // Simulate natural AI thinking delay
    setTimeout(() => {
      setIsTyping(false)
      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        from: 'bot',
        text: getBotAnswer(textToSend),
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
    }, 900)
  }

  const handleClearChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        from: 'bot',
        text: "Hi! I am Artur's AI assistant. 🤖 Feel free to ask me anything about his professional experience, skills, stack, or availability, or click one of the suggested questions below!",
        timestamp: new Date(),
      },
    ])
  }

  if (!open) return null

  // We only show suggestions that haven't been clicked or just show a subset of FAQs that fit in horizontal bar
  const activeSuggestions = FAQ.filter(
    (faq) => !messages.some((m) => m.from === 'user' && m.text === faq.question)
  )

  return (
    <div className="fixed inset-0 bg-slate-900/40 dark:bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-all duration-300">
      <div className="relative w-full max-w-xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 rounded-3xl shadow-2xl flex flex-col h-[550px] overflow-hidden transition-all duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200/60 dark:border-white/5 bg-slate-50/50 dark:bg-slate-950/20">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-lime-500/10 flex items-center justify-center text-purple-600 dark:text-lime-400 shrink-0">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 dark:text-white text-sm leading-none">
                Artur's Assistant
              </h3>
              <div className="flex items-center space-x-1.5 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                  Online
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={handleClearChat}
              className="p-2 hover:bg-slate-100 dark:hover:bg-white/5 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
              title="Clear chat"
              type="button"
            >
              <Trash2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-100 dark:hover:bg-white/5 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
              title="Close chat"
              type="button"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Message Area */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 bg-slate-50/30 dark:bg-slate-950/10 custom-scrollbar">
          {messages.map((msg) => {
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
                >
                  {isBot ? <Bot className="w-3.5 h-3.5" /> : <User className="w-3.5 h-3.5" />}
                </div>

                {/* Message Bubble */}
                <div
                  className={`px-4 py-2.5 rounded-2xl max-w-[80%] text-sm shadow-sm leading-relaxed ${
                    isBot
                      ? 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-tl-sm border border-slate-200/50 dark:border-white/5'
                      : 'bg-purple-600 dark:bg-lime-500 text-white dark:text-slate-900 rounded-tr-sm font-medium'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            )
          })}

          {/* Initial FAQ List inside the chat log */}
          {messages.length === 1 && !isTyping && (
            <div className="mt-4 ml-9 space-y-2 animate-fade-in">
              <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
                Suggested Questions
              </div>
              <div className="grid grid-cols-1 gap-2">
                {FAQ.map((faq, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(faq.question)}
                    className="text-left px-4 py-2.5 bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700/80 text-xs font-semibold text-purple-600 dark:text-lime-400 hover:text-purple-700 dark:hover:text-lime-300 rounded-2xl border border-slate-200/80 dark:border-white/5 shadow-sm transition-all duration-200 active:scale-[0.99] flex items-center justify-between group"
                    type="button"
                  >
                    <span>{faq.question}</span>
                    <span className="text-slate-300 dark:text-slate-600 group-hover:translate-x-1 transition-transform ml-2 shrink-0">→</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex items-start space-x-2 justify-start">
              <div className="w-7 h-7 rounded-full bg-purple-100 dark:bg-lime-500/10 flex items-center justify-center text-purple-600 dark:text-lime-400 shrink-0">
                <Bot className="w-3.5 h-3.5" />
              </div>
              <div className="bg-white dark:bg-slate-800 px-4 py-3 rounded-2xl rounded-tl-sm border border-slate-200/50 dark:border-white/5 shadow-sm flex items-center space-x-1">
                <span className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
                <span className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
                <span className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce" />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Footer & Inputs */}
        <div className="p-4 border-t border-slate-200/60 dark:border-white/5 bg-slate-50/50 dark:bg-slate-950/20 space-y-3">
          
          {/* Suggestion Chips (Wrapped & Compact, only for active chats) */}
          {activeSuggestions.length > 0 && messages.length > 1 && (
            <div className="flex flex-wrap gap-2 pb-1">
              {activeSuggestions.slice(0, 3).map((faq, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(faq.question)}
                  className="px-3.5 py-1.5 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/80 text-[11px] font-semibold text-slate-600 dark:text-slate-300 rounded-full border border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/10 shadow-sm transition-all active:scale-95 duration-200"
                  type="button"
                >
                  {faq.question}
                </button>
              ))}
            </div>
          )}

          {/* Form Input */}
          <div className="flex items-center space-x-2">
            <div className="flex-1 flex items-center bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/5 rounded-full px-4 py-1.5 focus-within:border-purple-500/50 dark:focus-within:border-lime-500/50 focus-within:ring-2 focus-within:ring-purple-500/10 dark:focus-within:ring-lime-500/10 transition-all duration-200">
              <input
                className="flex-1 bg-transparent border-0 outline-none text-slate-800 dark:text-slate-100 placeholder-slate-400 text-sm py-1"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend(input)}
                placeholder="Type your question..."
              />
            </div>
            <button
              onClick={() => handleSend(input)}
              className="w-10 h-10 rounded-full bg-purple-600 hover:bg-purple-700 dark:bg-lime-500 dark:hover:bg-lime-400 text-white dark:text-slate-900 flex items-center justify-center transition-all shadow-md active:scale-95 shrink-0"
              title="Send message"
              type="button"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ChatModal
