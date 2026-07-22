export type FaqItem = {
  question: string
  questionUa: string
  keywords: string[]
  answer: string
  answerUa: string
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
    questionUa: 'Хто такий Артур? / Розкажи про себе',
    keywords: ['who is', 'who are you', 'about artur', 'about yourself', 'bio', 'yourself', 'introduce', 'artur', 'кто', 'артур', 'о себе', 'расскажи', 'хто', 'розкажи', 'про себе', 'хто такий'],
    answer:
      'Artur Yusupov is a Fullstack WordPress Developer and React/Next.js Engineer with over 5+ years of professional experience. Currently based in Seville, Spain, he specializes in high-performance web engineering, custom themes/plugins, and AI-augmented development.',
    answerUa:
      'Артур Юсупов — Fullstack WordPress-розробник та React/Next.js інженер із понад 5 роками професійного досвіду. Зараз проживає в Севільї (Іспанія) та спеціалізується на розробці високопродуктивних сайтів, кастомних тем/плагінів та розробці з використанням AI.',
  },
  {
    question: 'What technologies do you specialize in?',
    questionUa: 'На яких технологіях ви спеціалізуєтеся?',
    keywords: ['technologies', 'stack', 'specialize', 'skills', 'tools', 'frontend', 'backend', 'технологии', 'стек', 'навыки', 'технології'],
    answer:
      'My core stack includes WordPress (custom themes/plugins), React, Next.js, TypeScript, Node.js, and PHP. I am also proficient with Tailwind CSS, REST APIs, and modern AI development tooling.',
    answerUa:
      'Мій основний стек включає WordPress (кастомні теми та плагіни), React, Next.js, TypeScript, Node.js та PHP. Також я вільно володію Tailwind CSS, REST API та сучасними інструментами розробки з AI.',
  },
  {
    question: 'How many years of development experience do you have?',
    questionUa: 'Скільки років досвіду розробки у вас?',
    keywords: ['years', 'experience', 'develop', 'how long', 'work', 'опыт', 'лет', 'разработке', 'досвід', 'років'],
    answer:
      'I have over 5+ years of professional experience in web development, working on 50+ completed projects ranging from custom business websites to international enterprise applications (e.g. Agenturro, Frontdeskhelpers).',
    answerUa:
      'Маю понад 5 років професійного досвіду у веб-розробці та 50+ реалізованих проєктів — від кастомних корпоративних сайтів до міжнародних enterprise-проєктів (наприклад, Agenturro, Frontdeskhelpers).',
  },
  {
    question: 'What projects have you completed? / Tell me about your work',
    questionUa: 'Які проєкти ви створили? / Портфоліо',
    keywords: ['projects', 'portfolio', 'completed', 'examples', 'websites you made', 'done', 'show me', 'проєкты', 'портфолио', 'работы', 'проєкти'],
    answer:
      'I have launched over 50+ web projects. You can explore some of my featured work in the "Featured Projects" section on this page, including custom WordPress integrations and Next.js applications.',
    answerUa:
      'Я запустив понад 50+ веб-проєктів. Ви можете переглянути мої вибрані роботи у секції "Вибрані проєкти" на цій сторінці, включаючи кастомні інтеграції WordPress та додатки на Next.js.',
  },
  {
    question: 'How do you use AI in your development workflow?',
    questionUa: 'Як ви використовуєте AI у розробці?',
    keywords: ['ai', 'copilot', 'cursor', 'windsurf', 'artificial intelligence', 'agents', 'mcp', 'antigravity', 'ии', 'интеллект', 'нейросети', 'sdd', 'spec', 'спец', 'штучний'],
    answer:
      'I systematically integrate next-generation systems (Claude Code, Cursor, Google Antigravity) directly into the SDLC, following a Spec-Driven Development (SDD) methodology: defining technical specifications first, then having AI implement and verify against them rather than improvise. I also use Gemini Notebook for research, enabling automated workflows that speed up development by 3x.',
    answerUa:
      'Я системно інтегрую інструменти нового покоління (Claude Code, Cursor, Google Antigravity) у SDLC за методологією Spec-Driven Development (SDD): спочатку створюю специфікації, а потім AI реалізує та перевіряє код за ними. Це прискорює розробку у 3 рази.',
  },
  {
    question: 'What services do you offer? / Can I hire you?',
    questionUa: 'Які послуги ви надаєте? / Чи можна вас найняти?',
    keywords: ['services', 'offer', 'hire', 'rates', 'price', 'freelance', 'contract', 'collaboration', 'услуги', 'нанять', 'цена', 'стоимость', 'работать', 'послуги', 'найняти'],
    answer:
      'I am fully open to remote full-time, part-time, or contract roles. My services include custom React/Next.js app engineering, custom WordPress architecture (built from scratch), Core Web Vitals optimization, and AI automation.',
    answerUa:
      'Я відкритий до дистанційної роботи (Full-time, Part-time або контракт). Мої послуги включають розробку додатків на React/Next.js, кастомну архітектуру WordPress з нуля, оптимізацію Core Web Vitals та AI-автоматизацію.',
  },
  {
    question: 'Can you describe your experience with SEO?',
    questionUa: 'Який у вас досвід у SEO?',
    keywords: ['seo', 'search', 'optimization', 'indexing', 'pagespeed', 'google', 'сео', 'оптимизация', 'поиск', 'пошук'],
    answer:
      'I specialize in technical SEO, including Core Web Vitals, site speed tuning, semantic HTML, structured data schema, and mobile-first accessibility. This helps client websites achieve higher Google rankings and better organic conversion rates.',
    answerUa:
      'Я спеціалізуюся на технічному SEO: оптимізація Core Web Vitals, прискорення завантаження, семантичний HTML, мікророзмітка Schema та адаптивність mobile-first. Це допомагає сайтам клієнтів займати вищі позиції у Google.',
  },
  {
    question: 'Where are you located?',
    questionUa: 'Де ви знаходитесь?',
    keywords: ['location', 'located', 'where', 'based', 'spain', 'seville', 'где', 'находишься', 'локация', 'испания', 'де'],
    answer:
      'I am currently based in Seville, Spain, but I work remotely and collaborate seamlessly with international clients and teams across different time zones.',
    answerUa:
      'Наразі я проживаю у Севільї, Іспанія, але працюю віддалено та ефективно співпрацюю з міжнародними клієнтами у різних часових поясах.',
  },
  {
    question: 'What is your English proficiency level?',
    questionUa: 'Який у вас рівень англійської мови?',
    keywords: ['english', 'language', 'proficiency', 'level', 'speak', 'английский', 'язык', 'уровень', 'англійська'],
    answer:
      'My English level is Upper-Intermediate (B2). I am fully comfortable participating in video calls, writing documentation, and conducting daily technical discussions.',
    answerUa:
      'Мій рівень англійської — Upper-Intermediate (B2). Я вільно беру участь у відеодзвінках, отримую та складаю ТЗ, веду щоденні технічні обговорення.',
  },
  {
    question: 'What motivates you as a developer?',
    questionUa: 'Що вас мотивує як розробника?',
    keywords: ['motivate', 'motivation', 'inspire', 'drive', 'why', 'мотивация', 'мотивирует', 'мотивація'],
    answer:
      'I am driven by solving complex problems, building user-friendly and fast digital experiences, and continuously learning new technologies. I love combining clean code with direct business results.',
    answerUa:
      'Мене мотивує вирішення складних задач, створення швидких та зручних цифрових продуктів і постійне вивчення нових технологій. Люблю поєднувати чистий код із реальними бізнес-результатами.',
  },
]

export function getBotAnswer(question: string, lang: 'en' | 'ua' = 'en'): string {
  const lower = question.toLowerCase()
  for (const item of FAQ) {
    if (
      lower === item.question.toLowerCase() ||
      (item.questionUa && lower === item.questionUa.toLowerCase())
    ) {
      return lang === 'ua' ? item.answerUa : item.answer
    }
  }
  for (const item of FAQ) {
    if (item.keywords.some((kw) => lower.includes(kw))) {
      return lang === 'ua' ? item.answerUa : item.answer
    }
  }
  return lang === 'ua'
    ? 'Я не зовсім впевнений щодо цього. Спробуйте обрати одне із запропонованих питань нижче або запитайте про мої навички, досвід чи локацію.'
    : "I'm not sure about that. Try selecting one of the suggested questions, or ask about my skills, experience, location, or English level."
}
