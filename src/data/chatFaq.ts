export type FaqItem = {
  question: string
  questionUa: string
  questionEs: string
  keywords: string[]
  answer: string
  answerUa: string
  answerEs: string
}

export type Message = {
  id: string
  from: 'user' | 'bot'
  text: string
  source?: string
  timestamp?: Date
  showContactCard?: boolean
  showEstimateCalculator?: boolean
  showStackComparison?: boolean
  followUps?: string[]
  projects?: {
    slug: string
    title: string
    description: string
    image: string
    category: string
    liveUrl?: string
    githubUrl?: string
  }[]
}

export const FAQ: FaqItem[] = [
  {
    question: 'Who is Artur? / Tell me about yourself',
    questionUa: 'Хто такий Артур? / Розкажи про себе',
    questionEs: '¿Quién es Artur? / Háblame de ti',
    keywords: ['who is', 'who are you', 'about artur', 'about yourself', 'bio', 'yourself', 'introduce', 'artur', 'кто', 'артур', 'о себе', 'расскажи', 'хто', 'розкажи', 'про себе', 'хто такий', 'quién', 'sobre ti', 'sobre artur', 'preséntate'],
    answer:
      'Artur Yusupov is a Fullstack WordPress Developer and React/Next.js Engineer with over 5+ years of professional experience. Currently based in Seville, Spain, he specializes in high-performance web engineering, custom themes/plugins, Hybrid RAG AI assistants, and Spec-Driven AI development.',
    answerUa:
      'Артур Юсупов - Fullstack WordPress-розробник та React/Next.js інженер із понад 5 роками професійного досвіду. Зараз проживає в Севільї (Іспанія) та спеціалізується на розробці високопродуктивних сайтів, кастомних тем/плагінів, Hybrid RAG AI-асистентів та розробці за методологією SDD.',
    answerEs:
      'Artur Yusupov es un desarrollador Fullstack de WordPress e ingeniero React/Next.js con más de 5 años de experiencia profesional. Actualmente reside en Sevilla, España, y se especializa en ingeniería web de alto rendimiento, temas y plugins personalizados, asistentes IA con arquitectura Hybrid RAG y desarrollo potenciado por IA.',
  },
  {
    question: 'What technologies do you specialize in?',
    questionUa: 'На яких технологіях ви спеціалізуєтеся?',
    questionEs: '¿En qué tecnologías te especializas?',
    keywords: ['technologies', 'stack', 'specialize', 'skills', 'tools', 'frontend', 'backend', 'технологии', 'стек', 'навыки', 'технології', 'tecnologías', 'habilidades', 'herramientas', 'especializ'],
    answer:
      'My core stack includes WordPress (custom themes/plugins, WooCommerce), React 19, Next.js 16 (App Router), TypeScript, Node.js, and PHP 8+. I also engineer custom Hybrid RAG (Retrieval-Augmented Generation) pipelines, Tailwind CSS interfaces, and REST/GraphQL APIs.',
    answerUa:
      'Мій основний стек включає WordPress (кастомні теми та плагіни, WooCommerce), React 19, Next.js 16 (App Router), TypeScript, Node.js та PHP 8+. Також я проєктую кастомні Hybrid RAG (Retrieval-Augmented Generation) пайплайни, інтерфейси на Tailwind CSS та REST/GraphQL API.',
    answerEs:
      'Mi stack principal incluye WordPress (temas y plugins personalizados, WooCommerce), React 19, Next.js 16 (App Router), TypeScript, Node.js y PHP 8+. También desarrollo pipelines Hybrid RAG (Retrieval-Augmented Generation) personalizados, interfaces con Tailwind CSS y APIs REST/GraphQL.',
  },
  {
    question: 'How many years of development experience do you have?',
    questionUa: 'Скільки років досвіду розробки у вас?',
    questionEs: '¿Cuántos años de experiencia en desarrollo tienes?',
    keywords: ['years', 'experience', 'develop', 'how long', 'work', 'опыт', 'лет', 'разработке', 'досвід', 'років', 'años', 'experiencia', 'cuántos'],
    answer:
      'I have over 5+ years of professional experience in web development, having delivered 70+ completed projects ranging from custom business websites to international enterprise applications (e.g. IT-Magic, Unitrition, Frontdeskhelpers).',
    answerUa:
      'Маю понад 5 років професійного досвіду у веб-розробці та 70+ реалізованих проєктів - від кастомних корпоративних сайтів до міжнародних enterprise-проєктів (наприклад, IT-Magic, Unitrition, Frontdeskhelpers).',
    answerEs:
      'Tengo más de 5 años de experiencia profesional en desarrollo web, con más de 70 proyectos completados, desde sitios web corporativos personalizados hasta aplicaciones empresariales internacionales (como IT-Magic, Unitrition y Frontdeskhelpers).',
  },
  {
    question: 'What projects have you completed? / Tell me about your work',
    questionUa: 'Які проєкти ви створили? / Портфоліо',
    questionEs: '¿Qué proyectos has completado? / Cuéntame sobre tu trabajo',
    keywords: ['projects', 'portfolio', 'completed', 'examples', 'websites you made', 'done', 'show me', 'проєкты', 'портфолио', 'работы', 'проєкти', 'proyectos', 'portafolio', 'trabajo', 'ejemplos'],
    answer:
      'I have launched 70+ web projects indexed directly in this Hybrid RAG assistant! You can explore them in the "Featured Projects" section or ask me about any specific project (e.g. "Tell me about IT-Magic" or "Unitrition tech stack").',
    answerUa:
      'Я запустив понад 70 веб-проєктів, і всі вони проіндексовані прямо в цьому Hybrid RAG асистенті! Ви можете переглянути їх у секції "Вибрані проєкти" або запитати мене про будь-який конкретний проєкт (наприклад, про IT-Magic або Unitrition).',
    answerEs:
      '¡He lanzado más de 70 proyectos web indexados directamente en este asistente Hybrid RAG! Puede explorarlos en la sección "Proyectos destacados" o preguntarme por cualquier proyecto específico (por ejemplo, IT-Magic o Unitrition).',
  },
  {
    question: 'How do you use AI & RAG in your workflow?',
    questionUa: 'Як ви використовуєте AI та RAG у розробці?',
    questionEs: '¿Cómo usas la IA y RAG en tu flujo de desarrollo?',
    keywords: ['ai', 'rag', 'retrieval', 'copilot', 'cursor', 'windsurf', 'artificial intelligence', 'agents', 'mcp', 'antigravity', 'ии', 'интеллект', 'нейросети', 'sdd', 'spec', 'спец', 'штучний', 'inteligencia artificial', 'ia', 'flujo', 'workflow'],
    answer:
      'I build custom Hybrid RAG (Retrieval-Augmented Generation) systems - including this very portfolio assistant that indexes 70 case studies with lexical and cosine scoring. In development, I integrate Claude Code, Cursor, and Google Antigravity into a strict Spec-Driven Development (SDD) + TDD pipeline, accelerating delivery by 3x with zero hallucinations.',
    answerUa:
      'Я створюю кастомні системи Hybrid RAG (Retrieval-Augmented Generation) - включно з цим самим асистентом портфоліо, який індексує 70 кейсів із лексичним та косинусним скорингом. У розробці я інтегрую Claude Code, Cursor та Google Antigravity у строгий процес Spec-Driven Development (SDD) + TDD, що прискорює розробку в 3 рази без галюцинацій.',
    answerEs:
      'Desarrollo sistemas Hybrid RAG (Retrieval-Augmented Generation) personalizados, incluido este mismo asistente de portfolio que indexa 70 casos de estudio mediante puntuación léxica y similitud de coseno. En el desarrollo, integro Claude Code, Cursor y Google Antigravity bajo una metodología Spec-Driven Development (SDD) + TDD que acelera la entrega 3 veces sin alucinaciones.',
  },
  {
    question: 'What services do you offer? / Can I hire you?',
    questionUa: 'Які послуги ви надаєте? / Чи можна вас найняти?',
    questionEs: '¿Qué servicios ofreces? / ¿Puedo contratarte?',
    keywords: ['services', 'offer', 'hire', 'rates', 'price', 'freelance', 'contract', 'collaboration', 'услуги', 'нанять', 'цена', 'стоимость', 'работать', 'послуги', 'найняти', 'servicios', 'contratar', 'precio', 'colaboración'],
    answer:
      'I am fully open to remote full-time, part-time, or contract roles. My services include custom React/Next.js 16 app engineering, custom WordPress architecture from scratch, custom RAG AI chatbot development grounded in business data, and Core Web Vitals optimization.',
    answerUa:
      'Я відкритий до дистанційної роботи (Full-time, Part-time або контракт). Мої послуги включають розробку додатків на React/Next.js 16, кастомну архітектуру WordPress з нуля, створення RAG AI-чатботів на базі даних вашого бізнесу та оптимізацію Core Web Vitals.',
    answerEs:
      'Estoy completamente abierto a roles remotos a tiempo completo, parcial o por contrato. Mis servicios incluyen ingeniería de aplicaciones React/Next.js 16 personalizadas, arquitectura WordPress desde cero, desarrollo de asistentes IA con RAG basados en datos de negocio y optimización de Core Web Vitals.',
  },
  {
    question: 'Can you describe your experience with SEO?',
    questionUa: 'Який у вас досвід у SEO?',
    questionEs: '¿Puedes describir tu experiencia con SEO?',
    keywords: ['seo', 'search', 'optimization', 'indexing', 'pagespeed', 'google', 'сео', 'оптимизация', 'поиск', 'пошук', 'posicionamiento', 'búsqueda', 'optimización'],
    answer:
      'I specialize in technical SEO, including Core Web Vitals, site speed tuning, semantic HTML, structured data schema, and mobile-first accessibility. This helps client websites achieve higher Google rankings and better organic conversion rates.',
    answerUa:
      'Я спеціалізуюся на технічному SEO: оптимізація Core Web Vitals, прискорення завантаження, семантичний HTML, мікророзмітка Schema та адаптивність mobile-first. Це допомагає сайтам клієнтів займати вищі позиції у Google.',
    answerEs:
      'Me especializo en SEO técnico, incluyendo Core Web Vitals, optimización de velocidad, HTML semántico, esquemas de datos estructurados y accesibilidad mobile-first. Esto ayuda a los sitios web a lograr mejores posiciones en Google y mayores tasas de conversión.',
  },
  {
    question: 'Where are you located?',
    questionUa: 'Де ви знаходитесь?',
    questionEs: '¿Dónde estás ubicado?',
    keywords: ['location', 'located', 'where', 'based', 'spain', 'seville', 'где', 'находишься', 'локация', 'испания', 'де', 'ubicación', 'sevilla', 'españa', 'dónde'],
    answer:
      'I am currently based in Seville, Spain, but I work remotely and collaborate seamlessly with international clients and teams across different time zones.',
    answerUa:
      'Наразі я проживаю у Севільї, Іспанія, але працюю віддалено та ефективно співпрацюю з міжнародними клієнтами у різних часових поясах.',
    answerEs:
      'Actualmente resido en Sevilla, España, pero trabajo de forma remota y colaboro con clientes y equipos internacionales en diferentes zonas horarias.',
  },
  {
    question: 'What is your English proficiency level?',
    questionUa: 'Який у вас рівень англійської мови?',
    questionEs: '¿Cuál es tu nivel de inglés?',
    keywords: ['english', 'language', 'proficiency', 'level', 'speak', 'английский', 'язык', 'уровень', 'англійська', 'inglés', 'idioma', 'nivel'],
    answer:
      'My English level is Upper-Intermediate (B2). I am fully comfortable participating in video calls, writing documentation, and conducting daily technical discussions.',
    answerUa:
      'Мій рівень англійської - Upper-Intermediate (B2). Я вільно беру участь у відеодзвінках, отримую та складаю ТЗ, веду щоденні технічні обговорення.',
    answerEs:
      'Mi nivel de inglés es Upper-Intermediate (B2). Me siento completamente cómodo participando en videollamadas, redactando documentación y manteniendo conversaciones técnicas diarias.',
  },
  {
    question: 'What motivates you as a developer?',
    questionUa: 'Що вас мотивує як розробника?',
    questionEs: '¿Qué te motiva como desarrollador?',
    keywords: ['motivate', 'motivation', 'inspire', 'drive', 'why', 'мотивация', 'мотивирует', 'мотивація', 'motivación', 'inspira', 'apasiona'],
    answer:
      'I am driven by solving complex problems, building user-friendly and fast digital experiences, and continuously learning new technologies. I love combining clean code with direct business results.',
    answerUa:
      'Мене мотивує вирішення складних задач, створення швидких та зручних цифрових продуктів і постійне вивчення нових технологій. Люблю поєднувати чистий код із реальними бізнес-результатами.',
    answerEs:
      'Me impulsa resolver problemas complejos, crear experiencias digitales rápidas y amigables para el usuario, y aprender continuamente nuevas tecnologías. Me encanta combinar código limpio con resultados empresariales concretos.',
  },
]

export function getBotAnswer(question: string, lang: 'en' | 'ua' | 'es' = 'en'): string {
  const lower = question.toLowerCase()
  for (const item of FAQ) {
    if (
      lower === item.question.toLowerCase() ||
      (item.questionUa && lower === item.questionUa.toLowerCase()) ||
      (item.questionEs && lower === item.questionEs.toLowerCase())
    ) {
      if (lang === 'ua') return item.answerUa
      if (lang === 'es') return item.answerEs
      return item.answer
    }
  }
  for (const item of FAQ) {
    if (item.keywords.some((kw) => lower.includes(kw))) {
      if (lang === 'ua') return item.answerUa
      if (lang === 'es') return item.answerEs
      return item.answer
    }
  }
  if (lang === 'ua') {
    return 'Я не зовсім впевнений щодо цього. Спробуйте обрати одне із запропонованих питань нижче або запитайте про мої навички, досвід чи локацію.'
  }
  if (lang === 'es') {
    return 'No estoy seguro al respecto. Intente seleccionar una de las preguntas sugeridas o pregunte sobre mis habilidades, experiencia o ubicación.'
  }
  return "I'm not sure about that. Try selecting one of the suggested questions, or ask about my skills, experience, location, or English level."
}
