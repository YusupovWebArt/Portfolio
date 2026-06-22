export type FaqItem = {
  question: string
  keywords: string[]
  answer: string
}

export type Message = {
  id: string
  from: 'user' | 'bot'
  text: string
  timestamp?: Date
}

export const FAQ: FaqItem[] = [
  {
    question: 'Who is Artur? / Tell me about yourself',
    keywords: ['who is', 'who are you', 'about artur', 'about yourself', 'bio', 'yourself', 'introduce', 'artur', 'кто', 'артур', 'о себе', 'расскажи'],
    answer:
      'Artur Yusupov is a Fullstack WordPress Developer and React/Next.js Engineer with over 5+ years of professional experience. Currently based in Seville, Spain, he specializes in high-performance web engineering, custom themes/plugins, and AI-augmented development.',
  },
  {
    question: 'What technologies do you specialize in?',
    keywords: ['technologies', 'stack', 'specialize', 'skills', 'tools', 'frontend', 'backend', 'технологии', 'стек', 'навыки'],
    answer:
      'My core stack includes WordPress (custom themes/plugins), React, Next.js, TypeScript, Node.js, and PHP. I am also proficient with Tailwind CSS, REST APIs, and modern AI development tooling.',
  },
  {
    question: 'How many years of development experience do you have?',
    keywords: ['years', 'experience', 'develop', 'how long', 'work', 'опыт', 'лет', 'разработке'],
    answer:
      'I have over 5+ years of professional experience in web development, working on 50+ completed projects ranging from custom business websites to international enterprise applications (e.g. Agenturro, Frontdeskhelpers).',
  },
  {
    question: 'What projects have you completed? / Tell me about your work',
    keywords: ['projects', 'portfolio', 'completed', 'examples', 'websites you made', 'done', 'show me', 'проекты', 'портфолио', 'работы'],
    answer:
      'I have launched over 50+ web projects. You can explore some of my featured work in the "Featured Projects" section on this page, including custom WordPress integrations and Next.js applications.',
  },
  {
    question: 'How do you use AI in your development workflow?',
    keywords: ['ai', 'copilot', 'cursor', 'windsurf', 'artificial intelligence', 'agents', 'mcp', 'antigravity', 'ии', 'интеллект', 'нейросети'],
    answer:
      'I integrate an advanced AI ecosystem (Cursor, Windsurf, Claude Code, Devin, Antigravity) with local protocols (MCP) and agentic workflows. This increases development speed by 2x-3x, minimizes technical debt, and ensures high-quality code output.',
  },
  {
    question: 'What services do you offer? / Can I hire you?',
    keywords: ['services', 'offer', 'hire', 'rates', 'price', 'freelance', 'contract', 'collaboration', 'услуги', 'нанять', 'цена', 'стоимость', 'работать'],
    answer:
      'I am fully open to remote full-time, part-time, or contract roles. My services include custom React/Next.js app engineering, custom WordPress architecture (built from scratch), Core Web Vitals optimization, and AI automation.',
  },
  {
    question: 'Can you describe your experience with SEO?',
    keywords: ['seo', 'search', 'optimization', 'indexing', 'pagespeed', 'google', 'сео', 'оптимизация', 'поиск'],
    answer:
      'I specialize in technical SEO, including Core Web Vitals, site speed tuning, semantic HTML, structured data schema, and mobile-first accessibility. This helps client websites achieve higher Google rankings and better organic conversion rates.',
  },
  {
    question: 'Where are you located?',
    keywords: ['location', 'located', 'where', 'based', 'spain', 'seville', 'где', 'находишься', 'локация', 'испания'],
    answer:
      'I am currently based in Seville, Spain, but I work remotely and collaborate seamlessly with international clients and teams across different time zones.',
  },
  {
    question: 'What is your English proficiency level?',
    keywords: ['english', 'language', 'proficiency', 'level', 'speak', 'английский', 'язык', 'уровень'],
    answer:
      'My English level is Upper-Intermediate (B2). I am fully comfortable participating in video calls, writing documentation, and conducting daily technical discussions.',
  },
  {
    question: 'What motivates you as a developer?',
    keywords: ['motivate', 'motivation', 'inspire', 'drive', 'why', 'мотивация', 'мотивирует'],
    answer:
      'I am driven by solving complex problems, building user-friendly and fast digital experiences, and continuously learning new technologies. I love combining clean code with direct business results.',
  },
]

export function getBotAnswer(question: string): string {
  const lower = question.toLowerCase()
  for (const item of FAQ) {
    if (lower === item.question.toLowerCase()) {
      return item.answer
    }
  }
  for (const item of FAQ) {
    if (item.keywords.some((kw) => lower.includes(kw))) {
      return item.answer
    }
  }
  return "I'm not sure about that. Try selecting one of the suggested questions, or ask about my skills, experience, location, or English level."
}
