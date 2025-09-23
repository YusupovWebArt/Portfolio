import { useState } from 'react'

type FaqItem = {
  question: string
  keywords: string[]
  answer: string
}

const FAQ: FaqItem[] = [
  {
    question: 'How many years of development experience do you have?',
    keywords: ['years', 'experience', 'develop', 'how long'],
    answer:
      'I have over 5+ years of professional experience in web development, working on a wide range of projects from small business websites to large-scale enterprise applications.',
  },
  {
    question: 'What technologies do you specialize in?',
    keywords: ['technologies', 'stack', 'specialize', 'skills', 'tools'],
    answer:
      'My core stack includes WordPress, React, Next.js, TypeScript, Node.js. I am also proficient with Tailwind CSS, REST APIs, and modern frontend tooling.',
  },
  {
    question: 'Can you describe your experience with SEO?',
    keywords: ['seo', 'search', 'optimization'],
    answer:
      'I have a strong background in technical SEO, including site speed optimization, structured data, accessibility, and best practices for both on-page and off-page SEO. My work has helped clients achieve higher search rankings and improved organic traffic.',
  },
  {
    question: 'What is your English proficiency level?',
    keywords: ['english', 'language', 'proficiency', 'level'],
    answer:
      'My English proficiency is Upper-Intermediate (B2). I am comfortable communicating in both written and spoken English, including technical discussions and client meetings.',
  },
  {
    question: 'Are you open to remote work?',
    keywords: ['remote', 'relocate', 'relocation', 'work from home', 'hybrid'],
    answer:
      'Yes, I am fully open to remote and hybrid work opportunities. I have extensive experience collaborating with distributed teams across different time zones.',
  },
  {
    question: 'Where are you located?',
    keywords: ['location', 'located', 'where', 'based'],
    answer:
      'I am currently based in Seville, Spain, but I am flexible and have experience working with international clients and teams.',
  },
  {
    question: 'How do you stay updated with the latest technologies?',
    keywords: ['updated', 'latest', 'learn', 'education', 'follow', 'keep up'],
    answer:
      'I regularly follow industry blogs, attend webinars, and participate in online courses. I experiment with new frameworks and tools in my personal projects.',
  },
  {
    question: 'What motivates you as a developer?',
    keywords: ['motivate', 'motivation', 'inspire', 'drive'],
    answer:
      'I am motivated by solving complex problems, creating user-friendly experiences, and continuously learning new technologies. I enjoy collaborating with teams to deliver impactful solutions that make a difference for users and businesses.',
  },
]

function getBotAnswer(question: string) {
  const lower = question.toLowerCase()
  // Сначала ищем полное совпадение вопроса
  for (const item of FAQ) {
    if (lower === item.question.toLowerCase()) {
      return item.answer
    }
  }
  // Потом ищем по ключевым словам
  for (const item of FAQ) {
    if (item.keywords.some((kw) => lower.includes(kw))) {
      return item.answer
    }
  }
  return "Thank you for your question! I'll get back to you by email or respond personally as soon as possible."
}

const ChatModal = ({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) => {
  const [messages, setMessages] = useState<
    { from: 'user' | 'bot'; text: string }[]
  >([])
  const [input, setInput] = useState('')
  const [showQuestions, setShowQuestions] = useState(true)

  const sendMessage = () => {
    if (!input.trim()) return
    setMessages([...messages, { from: 'user', text: input }])
    setTimeout(() => {
      setMessages((msgs) => [
        ...msgs,
        { from: 'bot', text: getBotAnswer(input) },
      ])
    }, 500)
    setInput('')
    setShowQuestions(false)
  }

  const handleQuestionClick = (question: string) => {
    setMessages([
      ...messages,
      { from: 'user', text: question },
      { from: 'bot', text: getBotAnswer(question) },
    ])
    setShowQuestions(false)
    setInput('')
  }

  const handleBackToQuestions = () => {
    setMessages([])
    setInput('')
    setShowQuestions(true)
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 w-full max-w-2xl shadow-lg relative">
        <button className="absolute top-2 right-2 text-xl" onClick={onClose}>
          ×
        </button>
        <h2 className="text-lg dark:text-lime-500 font-bold mb-4">
          Ask my chatbot more questions about me
        </h2>
        <div className="h-64 overflow-y-auto mb-4 border rounded p-2 bg-slate-50 dark:bg-slate-900">
          {showQuestions ? (
            <div>
              <div className="text-gray-400 text-center mb-2">
                Select a question or type your own:
              </div>
              <ul className="space-y-2">
                {FAQ.map((item, idx) => (
                  <li key={idx}>
                    <button
                      className="text-blue-600 dark:text-lime-500 hover:underline text-left w-full"
                      onClick={() => handleQuestionClick(item.question)}
                      type="button"
                    >
                      {item.question}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <>
              <button
                className="mb-4 text-sm text-gray-400 hover:underline"
                onClick={handleBackToQuestions}
                type="button"
              >
                ← Back to questions
              </button>
              <div>
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={msg.from === 'user' ? 'text-right' : 'text-left'}
                  >
                    <span
                      className={
                        msg.from === 'user' ? 'text-lime-500' : 'text-white'
                      }
                    >
                      {msg.text}
                    </span>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
        <div className="flex gap-2">
          <input
            className="flex-1 border rounded px-2 py-1"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Type your question..."
          />
          <button
            className="bg-purple-600 text-white px-4 py-1 rounded"
            onClick={sendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChatModal
