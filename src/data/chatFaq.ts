import type { ServiceItem } from './services/types'
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
  serviceCard?: ServiceItem
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
    keywords: [
      'who is',
      'who are you',
      'about artur',
      'about yourself',
      'bio',
      'yourself',
      'introduce',
      'artur',
      'кто',
      'артур',
      'о себе',
      'расскажи',
      'хто',
      'розкажи',
      'про себе',
      'хто такий',
      'quién',
      'sobre ti',
      'sobre artur',
      'presentate',
    ],
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
    keywords: [
      'technologies',
      'stack',
      'specialize',
      'skills',
      'tools',
      'frontend',
      'backend',
      'технологии',
      'стек',
      'навыки',
      'технології',
      'tecnologias',
      'habilidades',
      'herramientas',
      'especializ',
    ],
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
    keywords: [
      'years',
      'experience',
      'how long',
      'опыт',
      'лет',
      'разработке',
      'досвід',
      'років',
      'anos',
      'experiencia',
      'cuantos',
    ],
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
    keywords: [
      'projects',
      'portfolio',
      'completed',
      'websites you made',
      'show me projects',
      'проєкты',
      'портфолио',
      'работы',
      'проєкти',
      'proyectos',
      'portafolio',
      'trabajo',
    ],
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
    keywords: [
      'ai',
      'rag',
      'retrieval',
      'copilot',
      'cursor',
      'windsurf',
      'artificial intelligence',
      'agents',
      'mcp',
      'antigravity',
      'ии',
      'интеллект',
      'нейросети',
      'sdd',
      'spec',
      'штучний',
      'inteligencia artificial',
      'ia',
      'workflow',
    ],
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
    keywords: [
      'services',
      'offer',
      'hire',
      'rates',
      'price',
      'freelance',
      'contract',
      'collaboration',
      'услуги',
      'нанять',
      'цена',
      'стоимость',
      'работать',
      'послуги',
      'найняти',
      'servicios',
      'contratar',
      'precio',
      'colaboracion',
    ],
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
    keywords: [
      'seo',
      'pagespeed',
      'сео',
      'оптимизация',
      'поиск',
      'пошук',
      'posicionamiento',
      'busqueda',
      'optimizacion',
    ],
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
    keywords: [
      'location',
      'located',
      'where',
      'based',
      'seville',
      'где',
      'находишься',
      'локация',
      'испания',
      'де',
      'ubicacion',
      'sevilla',
      'espana',
      'donde',
    ],
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
    keywords: [
      'english',
      'proficiency',
      'английский',
      'англійська',
      'ingles',
    ],
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
    keywords: [
      'motivate',
      'motivation',
      'inspire',
      'мотивация',
      'мотивирует',
      'мотивація',
      'motivacion',
      'inspira',
    ],
    answer:
      'I am driven by solving complex problems, building user-friendly and fast digital experiences, and continuously learning new technologies. I love combining clean code with direct business results.',
    answerUa:
      'Мене мотивує вирішення складних задач, створення швидких та зручних цифрових продуктів і постійне вивчення нових технологій. Люблю поєднувати чистий код із реальними бізнес-результатами.',
    answerEs:
      'Me impulsa resolver problemas complejos, crear experiencias digitales rápidas y amigables para el usuario, y aprender continuamente nuevas tecnologías. Me encanta combinar código limpio con resultados empresariales concretos.',
  },
  {
    question: 'How do you handle Headless WordPress and Next.js 16 caching without stale data?',
    questionUa: 'Як ви налаштовуєте кешування для Headless WordPress та Next.js 16 без застарілих даних?',
    questionEs: '¿Cómo gestionas la caché entre Headless WordPress y Next.js 16 sin servir contenido obsoleto?',
    keywords: [
      'caching',
      'cache',
      'headless wordpress',
      'revalidation',
      'revalidatetag',
      'invalidation',
      'кеш',
      'кешування',
      'інвалідація',
      'ревалідація',
      'хедлесс',
      'invalida',
      'caché',
      'revalidar',
    ],
    answer:
      'I engineer an event-driven caching loop: a lightweight PHP 8.2 transition_post_status hook signs payload updates with HMAC-SHA256, sending non-blocking webhooks to Next.js 16 App Router. Next.js validates the signature with timing-safe comparison and triggers on-demand revalidateTag(). This yields sub-50ms edge reads with instant 80ms editor publication and 95%+ MySQL query reduction. Read full breakdown: /en/blog/headless-wordpress-nextjs-16-caching-architecture',
    answerUa:
      'Я проєктую подієвий цикл кешування: легковаговий хук PHP 8.2 transition_post_status підписує зміни через HMAC-SHA256 і надсилає неблокуючий вебхук у Next.js 16 App Router. Next.js перевіряє підпис і запускає точкову ревалідацію revalidateTag(). Це забезпечує TTFB < 50мс на edge, оновлення контенту за 80мс та скорочення запитів до MySQL на 95%+. Повний розбір: /ua/blog/headless-wordpress-nextjs-16-caching-architecture',
    answerEs:
      'Diseño un bucle de caché reactivo: un hook ligero en PHP 8.2 transition_post_status firma actualizaciones con HMAC-SHA256 y envía webhooks no bloqueantes a Next.js 16 App Router. Next.js valida la firma y ejecuta revalidateTag() bajo demanda. Esto logra lecturas sub-50ms en el edge, publicación en 80ms y reducción de más del 95% en MySQL. Desglose completo: /es/blog/headless-wordpress-nextjs-16-caching-architecture',
  },
  {
    question: 'How do you fix slow WooCommerce checkout and database deadlocks on large stores?',
    questionUa: 'Як ви оптимізуєте повільний чекаут WooCommerce та усуваєте дедлоки бази даних на великих магазинах?',
    questionEs: '¿Cómo solucionas el checkout lento en WooCommerce y los bloqueos de base de datos en tiendas grandes?',
    keywords: [
      'woocommerce',
      'hpos',
      'checkout',
      'deadlock',
      'deadlocks',
      'slow checkout',
      'чекаут',
      'вукомерс',
      'дедлок',
      'блокування',
      'bloqueo',
      'pedidos',
    ],
    answer:
      'I migrate stores to High-Performance Order Storage (HPOS), moving order data out of wp_posts/wp_postmeta into dedicated indexed tables (wp_wc_orders). Combined with a hardened Redis Object Cache with non-persistent session isolation and PHP 8.2 wc_get_orders() query refactoring, checkout latency drops from 3.8s to 420ms with zero MySQL deadlocks. Read full breakdown: /en/blog/woocommerce-hpos-redis-caching-10k-skus',
    answerUa:
      'Я переводжу магазини на High-Performance Order Storage (HPOS), виділяючи замовлення з wp_posts/wp_postmeta в окремі індексовані таблиці (wp_wc_orders). У поєднанні з налаштованим об’єктним кешем Redis із суворою ізоляцією сесій кошика та оптимізованими викликами wc_get_orders() на PHP 8.2, затримка чекауту скорочується з 3.8с до 420мс без дедлоків MySQL. Повний розбір: /ua/blog/woocommerce-hpos-redis-caching-10k-skus',
    answerEs:
      'Migro las tiendas a High-Performance Order Storage (HPOS), trasladando los pedidos de wp_posts/wp_postmeta a tablas dedicadas e indexadas (wp_wc_orders). Junto con una caché de objetos en Redis con aislamiento estricto de sesiones de carrito y consultas refactorizadas con wc_get_orders() en PHP 8.2, la latencia de pago se reduce de 3.8s a 420ms sin deadlocks en MySQL. Desglose completo: /es/blog/woocommerce-hpos-redis-caching-10k-skus',
  },
  {
    question: 'How do you run WordPress and PHP 8.4 in the browser without backend servers?',
    questionUa: 'Як ви запускаєте WordPress та PHP 8.4 у браузері без бекенд-серверів?',
    questionEs: '¿Cómo ejecutas WordPress y PHP 8.4 en el navegador sin servidores backend?',
    keywords: [
      'webassembly',
      'wasm',
      'playground',
      'sqlite vfs',
      'browser php',
      'sandbox',
      'песочница',
      'вебассембли',
      'пісочниця',
      'navegador',
    ],
    answer:
      'In Fullstack AI Lab, I compile PHP 8.4 to WebAssembly (WASM) via Emscripten and mount WordPress onto an in-memory SQLite Virtual File System (VFS). Declarative JSON blueprints install plugins and seed tables instantaneously, delivering 120ms cold boots and zero container fees. Read full breakdown: /en/blog/wasm-wordpress-php-in-browser-zero-server',
    answerUa:
      'У проєкті Fullstack AI Lab я компілюю PHP 8.4 у WebAssembly (WASM) через Emscripten та монтую ядро WordPress на віртуальну файлову систему SQLite VFS. Декларативні JSON-блюпринти автоматично встановлюють плагіни та наповнюють БД за мілісекунди, забезпечуючи старт за 120мс та $0 витрат на сервери. Повний розбір: /ua/blog/wasm-wordpress-php-in-browser-zero-server',
    answerEs:
      'En Fullstack AI Lab, compilo PHP 8.4 a WebAssembly (WASM) con Emscripten y monto WordPress sobre SQLite Virtual File System (VFS). Mediante blueprints declarativos en JSON se instalan plugins y se siembran tablas al instante, logrando arranques en 120ms y cero costes de servidor. Desglose completo: /es/blog/wasm-wordpress-php-in-browser-zero-server',
  },
  {
    question: 'How do you integrate clinical food APIs like USDA FoodData Central securely in Next.js?',
    questionUa: 'Як ви безпечно інтегруєте клінічні API харчування на зразок USDA FoodData Central у Next.js?',
    questionEs: '¿Cómo integras APIs clínicas de nutrición como USDA FoodData Central de forma segura en Next.js?',
    keywords: [
      'usda',
      'healthtech',
      'nutrition',
      'bread units',
      'хлібні одиниці',
      'хлебные единицы',
      'диета',
      'дієта',
      'dieta',
      'hipaa',
    ],
    answer:
      'In Unitrition, I engineered a server-side Next.js 16 Edge Route Handler proxying the USDA FoodData Central API. It masks private credentials, caches responses with sub-30ms stale-while-revalidate headers, normalizes hundreds of nutrient formats, calculates Bread Units (Net Carbs / 12), and isolates patient logs in Supabase PostgreSQL via Row Level Security (RLS). Read full breakdown: /en/blog/clinical-government-api-headless-integration-unitrition',
    answerUa:
      'У проєкті Unitrition я створив серверний Next.js 16 Edge Route Handler для проксіювання USDA FoodData Central API. Він маскує приватні ключі, кешує відповіді на edge за 28мс, нормалізує формати нутрієнтів, обчислює Хлібні Одиниці (Чисті вуглеводи / 12) та ізолює дані пацієнтів у Supabase PostgreSQL через Row Level Security (RLS). Повний розбір: /ua/blog/clinical-government-api-headless-integration-unitrition',
    answerEs:
      'En Unitrition, diseñé un Route Handler en el edge de Next.js 16 que actúa como proxy para la API USDA FoodData Central. Oculta credenciales privadas, almacena en caché respuestas en 28ms, normaliza nutrientes, calcula Unidades de Pan (Carbohidratos netos / 12) y aísla registros de pacientes en Supabase PostgreSQL con Row Level Security (RLS). Desglose completo: /es/blog/clinical-government-api-headless-integration-unitrition',
  },
  {
    question: 'How do you protect high-load web applications from Layer 7 DDoS, AI scrapers, and bot floods?',
    questionUa: 'Як ви захищаєте високонавантажені веб-додатки від DDoS 7-го рівня, AI-скраперів та бот-атак?',
    questionEs: '¿Cómo proteges aplicaciones web de alto tráfico frente a DDoS L7, scrapers de IA y bots?',
    keywords: [
      'waf',
      'aws waf',
      'ddos',
      'rate limit',
      'rate limiting',
      'anti-scraping',
      'боты',
      'боти',
      'скрапинг',
      'скрапінг',
      'cloudfront security',
      'layer 7',
    ],
    answer:
      'I deploy a tiered perimeter defense: AWS CloudFront edge PoPs terminate TLS and absorb L3/L4 floods, AWS WAFv2 inspects packets with managed CRS and rate-based rules (400 req/5m per IP), Next.js 16 Edge Middleware applies sliding-window quotas in Redis, and reverse DNS cryptographically validates search crawlers while dropping rogue AI scrapers. Read the full architectural guide: /en/blog/enterprise-cloud-web-security-waf-anti-scraping',
    answerUa:
      'Я впроваджую багаторівневий захист периметра: точки присутності AWS CloudFront термінують TLS і гасять L3/L4 повені, AWS WAFv2 аналізує пакети через CRS і ліміти (400 зап/5хв на IP), Next.js 16 Edge Middleware застосовує лічильник ковзного вікна в Redis, а reverse DNS валідує пошукових ботів і блокує несанкціоновані AI-парсери. Повний інженерний розбір: /ua/blog/enterprise-cloud-web-security-waf-anti-scraping',
    answerEs:
      'Implemento un perímetro de defensa escalonado: CloudFront Edge PoPs terminan TLS y absorben ataques L3/L4, AWS WAFv2 inspecciona paquetes con CRS y límites de 400 pet/5min por IP, Next.js 16 Edge Middleware aplica ventanas deslizantes en Redis, y reverse DNS valida rastreadores legítimos bloqueando scrapers de IA. Guía técnica completa: /es/blog/enterprise-cloud-web-security-waf-anti-scraping',
  },
  {
    question: 'How do you optimize international multi-currency checkouts in WooCommerce with Next.js and Stripe?',
    questionUa: 'Як ви оптимізуєте міжнародний мультивалютний чекаут у WooCommerce за допомогою Next.js та Stripe?',
    questionEs: '¿Cómo optimizas checkouts internacionales multidivisa en WooCommerce con Next.js y Stripe?',
    keywords: [
      'checkout',
      'чекаут',
      'stripe',
      'stripe elements',
      'multicurrency',
      'мультивалют',
      'multidivisa',
      'vat oss',
      'cart abandonment',
      'брошенные корзины',
      'покинуті кошики',
    ],
    answer:
      'I decouple the checkout surface into Next.js 16 with Stripe Payment Element: tax and currency conversions execute on Edge Route Handlers in under 50ms (reducing UI lag by 91%), and orders are provisioned asynchronously in WooCommerce HPOS via idempotent Redis webhooks to eliminate database deadlocks. Read full blueprint: /en/blog/headless-multicurrency-checkout-woocommerce-stripe',
    answerUa:
      'Я відокремлюю чекаут у Next.js 16 зі Stripe Payment Element: розрахунок податків і валют відбувається на Edge Route Handlers менше ніж за 50мс (знижуючи затримку UI на 91%), а замовлення створюються в WooCommerce HPOS асинхронно через ідемпотентні вебхуки в Redis без дедлоків бази. Повний посібник: /ua/blog/headless-multicurrency-checkout-woocommerce-stripe',
    answerEs:
      'Desacoplo el checkout en Next.js 16 con Stripe Payment Element: el cálculo de impuestos y divisas se ejecuta en Route Handlers en el edge en menos de 50ms (reduciendo la latencia de UI un 91%) y los pedidos se registran de forma asíncrona en WooCommerce HPOS mediante webhooks idempotentes en Redis. Guía completa: /es/blog/headless-multicurrency-checkout-woocommerce-stripe',
  },
  {
    question: 'How do you build zero-cost in-browser semantic search using WebAssembly embeddings and BM25?',
    questionUa: 'Як ви створюєте безкоштовний семантичний пошук у браузері через WebAssembly-ембеддінги та BM25?',
    questionEs: '¿Cómo construyes búsqueda semántica a coste cero en el navegador con embeddings WebAssembly y BM25?',
    keywords: [
      'semantic search',
      'семантический поиск',
      'семантичний пошук',
      'busqueda semantica',
      'vector search',
      'векторный поиск',
      'векторний пошук',
      'webassembly search',
      'wasm embeddings',
      'onnx',
      'bm25',
    ],
    answer:
      'I execute quantized INT8 transformer models (23MB) directly in a Web Worker using WebAssembly SIMD and IndexedDB model caching. Queries are evaluated in under 18ms by combining dense vector Cosine Similarity with sparse lexical Okapi BM25 via Reciprocal Rank Fusion (RRF), running 100% offline with zero cloud vector database fees. Read full breakdown: /en/blog/in-browser-semantic-search-webassembly-embeddings-ecommerce',
    answerUa:
      'Я запускаю квантовані INT8 моделі-трансформери (23 МБ) безпосередньо у Web Worker за допомогою WebAssembly SIMD і кешування в IndexedDB. Запити обробляються менше ніж за 18мс завдяки поєднанню косинусної схожості з лексичним пошуком Okapi BM25 через метод Reciprocal Rank Fusion (RRF), працюючи 100% офлайн без витрат на векторні бази даних. Повний розбір: /ua/blog/in-browser-semantic-search-webassembly-embeddings-ecommerce',
    answerEs:
      'Ejecuto modelos transformer cuantizados en INT8 (23MB) directamente en un Web Worker mediante WebAssembly SIMD y almacenamiento en IndexedDB. Las consultas se resuelven en menos de 18ms combinando similitud de coseno vectorial con análisis léxico Okapi BM25 mediante Reciprocal Rank Fusion (RRF), con operatividad 100% offline y coste cero en bases vectoriales. Desglose completo: /es/blog/in-browser-semantic-search-webassembly-embeddings-ecommerce',
  },
  {
    question: 'How do you prevent inventory overselling across Shopify, WooCommerce, and ERP systems?',
    questionUa: 'Як ви запобігаєте оверселінгу залишків між Shopify, WooCommerce та ERP-системами?',
    questionEs: '¿Cómo evitas la sobreventa de inventario entre Shopify, WooCommerce y sistemas ERP?',
    keywords: [
      'omnichannel',
      'inventory sync',
      'redlock',
      'overselling',
      'оверселлинг',
      'оверселінг',
      'синхронизация остатков',
      'синхронізація залишків',
      'sincronizacion de inventario',
      'sobreventa',
      'bullmq',
      'distributed lock',
    ],
    answer:
      'I prevent multi-channel race conditions using distributed locking with Redis Redlock, optimistic cart reservations (10-minute TTL), and debounced BullMQ webhook queues with exponential backoff. This eliminates overselling across Shopify, WooCommerce, and central ERP systems during flash sales while maintaining sub-45ms checkout latency. Read full architecture guide: /en/blog/realtime-omnichannel-inventory-sync-redlock',
    answerUa:
      'Я запобігаю конфліктам паралельних замовлень за допомогою розподілених блокувань Redis Redlock, оптимістичного резервування в кошику (TTL 10 хв) та дебаунс-черг BullMQ з експоненційним бекофом. Це повністю усуває оверселінг між Shopify, WooCommerce та ERP під час пікових навантажень, зберігаючи затримку чекауту до 45мс. Повний розбір архітектури: /ua/blog/realtime-omnichannel-inventory-sync-redlock',
    answerEs:
      'Evito las condiciones de carrera multicanal mediante bloqueos distribuidos con Redis Redlock, reservas optimistas de carrito (TTL de 10 min) y colas BullMQ con debouncing y retroceso exponencial. Esto elimina la sobreventa entre Shopify, WooCommerce y ERP centrales durante picos de venta manteniendo la latencia de pago por debajo de 45ms. Guía de arquitectura completa: /es/blog/realtime-omnichannel-inventory-sync-redlock',
  },
  {
    question: 'How do you automate visual accessibility and Schema.org metadata for EAA 2026 compliance?',
    questionUa: 'Як ви автоматизуєте візуальну доступність та Schema.org метадані для відповідності EAA 2026?',
    questionEs: '¿Cómo automatizas la accesibilidad visual y los metadatos Schema.org para cumplir con EAA 2026?',
    keywords: [
      'visual accessibility',
      'eaa 2026',
      'wcag 2.2',
      'alt text',
      'multimodal',
      'vision llm',
      'schema.org product',
      'доступность',
      'доступність',
      'візуальна доступність',
      'accesibilidad visual',
      'texto alternativo',
    ],
    answer:
      'I automate catalog visual accessibility across 50,000+ SKUs using multimodal Vision LLMs with strict Zod structured outputs. The pipeline generates concise, context-aware alt text (<125 chars), filters decorative graphics via aria-hidden, and synthesizes rich Schema.org Product and ImageObject JSON-LD at €0.0018 per SKU with a 99.4% WCAG 2.2 AA audit pass rate. Read full blueprint: /en/blog/automated-visual-accessibility-metadata-multimodal-llms-eaa2026',
    answerUa:
      'Я автоматизую візуальну доступність каталогів на 50 000+ SKU за допомогою мультимодальних Vision LLM та суворої валідації через Zod. Конвеєр генерує лаконічний alt-текст (<125 символів), фільтрує декоративні елементи через aria-hidden та створює розмітку Schema.org Product та ImageObject JSON-LD за ціною €0.0018 за SKU з 99.4% проходження аудиту WCAG 2.2 AA. Повний посібник: /ua/blog/automated-visual-accessibility-metadata-multimodal-llms-eaa2026',
    answerEs:
      'Automatizo la accesibilidad visual en catálogos de más de 50.000 SKUs mediante LLMs de visión multimodal y esquemas estructurados Zod. El flujo genera texto alternativo conciso (<125 caracteres), clasifica gráficos decorativos con aria-hidden y sintetiza Schema.org Product e ImageObject JSON-LD a 0,0018 € por SKU con un 99,4% de aprobación WCAG 2.2 AA. Desglose completo: /es/blog/automated-visual-accessibility-metadata-multimodal-llms-eaa2026',
  },
  {
    question: 'How do you build autonomous AI agents with zero-cold-start V8 isolates and structured tool calling?',
    questionUa: 'Як ви створюєте автономних AI-агентів у V8-ізолятах без холодного старту зі структурованим викликом функцій?',
    questionEs: '¿Cómo construyes agentes de IA autónomos con aisladores V8 sin cold start y tool calling estructurado?',
    keywords: [
      'ai agent',
      'edge agent',
      'tool calling',
      'function calling',
      'v8 isolate',
      'generative ui',
      'аи агент',
      'ai агенти',
      'вызов функций',
      'виклик функцій',
      'agente de ia',
    ],
    answer:
      'I engineer autonomous AI agents on Next.js 16 Edge Route Handlers running in V8 isolates: startup takes under 1ms (zero cold start) with sub-35ms TTFB. Agents execute deterministic business logic through strict JSON Schema tool calling, validating arguments with Zod and streaming real-time Generative UI components to the browser via Server-Sent Events with $0 idle compute costs. Read full architecture guide: /en/blog/autonomous-edge-ai-agents-tool-calling-v8-isolates',
    answerUa:
      'Я розробляю автономних AI-агентів на базі Edge Route Handlers у Next.js 16 в ізолятах V8: старт займає менше 1мс (нульовий холодний старт) із TTFB до 35мс. Агенти виконують детерміновану бізнес-логіку через суворий виклик функцій JSON Schema з валідацією Zod та стрімінгом віджетів Generative UI через Server-Sent Events без витрат на простій. Повний розбір архітектури: /ua/blog/autonomous-edge-ai-agents-tool-calling-v8-isolates',
    answerEs:
      'Desarrollo agentes de IA autónomos en Route Handlers de Next.js 16 ejecutados en aisladores V8: el arranque toma menos de 1ms (cero cold start) con un TTFB inferior a 35ms. Los agentes ejecutan lógica determinista mediante tool calling estricto con JSON Schema y Zod, transmitiendo componentes interactivos de Generative UI vía Server-Sent Events sin costes de infraestructura en reposo. Guía de arquitectura completa: /es/blog/autonomous-edge-ai-agents-tool-calling-v8-isolates',
  },
  {
    question: 'How do you compile 1,100+ MDX lessons in under 90 seconds in Next.js 16?',
    questionUa: 'Як ви компілюєте 1 100+ MDX-уроків менше ніж за 90 секунд у Next.js 16?',
    questionEs: '¿Cómo compilas más de 1.100 lecciones MDX en menos de 90 segundos en Next.js 16?',
    keywords: [
      'rust mdx',
      'mdx-rs',
      'compile mdx',
      'компиляция mdx',
      'компіляція mdx',
      'compilacion mdx',
      'ast virtualization',
      'edtech build',
    ],
    answer:
      'I replace slow JavaScript Babel and Unified MDX pipelines with a native Rust MDX-RS compiler via N-API bindings: parsing uses zero-copy byte slices, saturating 98% of multi-core CPU capacity. In Fullstack AI Lab (1,135 lessons), this reduced build time from 24m 14s to 78 seconds (18.6x faster), dropped peak RAM from 4.2GB to 310MB, and eliminated heap OOM crashes. Read full compiler breakdown: /en/blog/compiling-1100-mdx-lessons-native-rust-mdx-rs-nextjs-16',
    answerUa:
      'Я замінюю повільні конвеєри Babel та Unified на нативний компілятор Rust MDX-RS через біндінги N-API: парсинг використовує zero-copy зрізи пам’яті, завантажуючи ядра процесора на 98%. У Fullstack AI Lab (1 135 уроків) це скоротило час збірки з 24хв 14с до 78 секунд (у 18.6 раза швидше), знизило RAM з 4.2 ГБ до 310 МБ та усунуло помилки пам’яті. Повний розбір: /ua/blog/compiling-1100-mdx-lessons-native-rust-mdx-rs-nextjs-16',
    answerEs:
      'Sustituyo los lentos pipelines de Babel y Unified por el compilador nativo en Rust MDX-RS mediante enlaces N-API: el análisis usa cortes zero-copy saturando el 98% de la CPU multinúcleo. En Fullstack AI Lab (1.135 lecciones), redujo el tiempo de build de 24m 14s a 78 segundos (18,6x más rápido), bajó la RAM de 4,2GB a 310MB y eliminó caídas por memoria. Desglose completo: /es/blog/compiling-1100-mdx-lessons-native-rust-mdx-rs-nextjs-16',
  },
  {
    question: 'How do you build a local-first e-commerce cart with CRDTs and offline sync?',
    questionUa: 'Як ви створюєте Local-First e-commerce кошик на базі CRDT з офлайн-синхронізацією?',
    questionEs: '¿Cómo construyes un carrito de e-commerce local-first con CRDTs y sincronización offline?',
    keywords: [
      'local-first',
      'crdt',
      'offline cart',
      'yjs',
      'indexeddb',
      'офлайн корзина',
      'офлайн кошик',
      'синхронизация корзины',
      'carrito offline',
      'pwa cart',
    ],
    answer:
      'I engineer local-first e-commerce carts with Yjs CRDTs and IndexedDB: all mutations resolve client-side in sub-10ms (empirical average 4ms) with zero network dependency. State vectors synchronize bi-directionally with Next.js 16 Edge Route Handlers when online, deterministically merging concurrent multi-tab changes without data loss. In Organic Bed, this eliminated 100% of offline cart drops and lifted mobile conversion by +23.6%. Read full architecture guide: /en/blog/local-first-ecommerce-pwa-offline-cart-crdt-yjs-indexeddb',
    answerUa:
      'Я розробляю Local-First кошики на базі Yjs CRDT та IndexedDB: всі мутації виконуються на клієнті менше ніж за 10мс (в середньому 4мс) без очікування мережі. Вектори стану синхронізуються з Edge Route Handlers у Next.js 16 при появі зв’язку, детерміновано об’єднуючи зміни з кількох вкладок без втрати товарів. В Organic Bed це усунуло втрату кошиків та підняло мобільну конверсію на +23.6%. Повний посібник: /ua/blog/local-first-ecommerce-pwa-offline-cart-crdt-yjs-indexeddb',
    answerEs:
      'Diseño carritos e-commerce local-first con Yjs CRDTs e IndexedDB: las mutaciones se ejecutan en el cliente en menos de 10ms (media de 4ms) sin esperar a la red. Los vectores de estado se sincronizan con Route Handlers de Next.js 16 al recuperar la conexión, fusionando cambios multipestaña de forma determinista y sin pérdida de datos. En Organic Bed eliminó los carritos perdidos y aumentó la conversión móvil en un +23,6%. Guía de arquitectura completa: /es/blog/local-first-ecommerce-pwa-offline-cart-crdt-yjs-indexeddb',
  },
  {
    question: 'How do you build enterprise programmatic SEO (pSEO) with Next.js 16 and avoid Google penalties?',
    questionUa: 'Як ви створюєте корпоративне програмне SEO (pSEO) на Next.js 16 без санкцій Google?',
    questionEs: '¿Cómo construyes SEO programático empresarial (pSEO) con Next.js 16 sin penalizaciones de Google?',
    keywords: [
      'programmatic seo',
      'pseo',
      'программное сео',
      'програмне сео',
      'seo programatico',
      'helpful content',
      'json-ld graph',
      'schema.org',
    ],
    answer:
      'I build enterprise programmatic SEO on Next.js 16 App Router using SSG and On-Demand ISR: each page is enriched with deterministic data tables, calculators, and LLM analysis validated through strict Zod schemas (>900 unique words) to prevent thin content. Pages output linked Schema.org graphs (Dataset, Service, FAQPage), achieving a 98.2% Google indexation rate and 140k+ monthly impressions. Read full strategy: /en/blog/enterprise-programmatic-seo-pseo-nextjs-16-autonomous-llm-pipelines',
    answerUa:
      'Я розробляю корпоративне програмне SEO на Next.js 16 App Router через поєднання SSG та ISR: кожна сторінка містить детерміновані таблиці, калькулятори та LLM-аналіз, валідований схемами Zod (від 900 унікальних слів) для захисту від фільтрів. Сторінки генерують зв’язані графи Schema.org (Dataset, Service, FAQPage), забезпечуючи 98.2% індексації в Google та 140k+ показів. Повний розбір: /ua/blog/enterprise-programmatic-seo-pseo-nextjs-16-autonomous-llm-pipelines',
    answerEs:
      'Implemento SEO programático empresarial en Next.js 16 App Router mediante SSG e ISR: cada página se enriquece con datos deterministas, calculadoras y análisis de LLMs validados con Zod (>900 palabras únicas) para evitar penalizaciones por contenido delgado. Genera grafos interconectados de Schema.org logrando un 98,2% de indexación en Google y más de 140k impresiones mensuales. Guía completa: /es/blog/enterprise-programmatic-seo-pseo-nextjs-16-autonomous-llm-pipelines',
  },
  {
    question: 'How do you build enterprise B2B headless e-commerce with Next.js 16 and WooCommerce HPOS?',
    questionUa: 'Як ви реалізуєте корпоративний B2B headless e-commerce на Next.js 16 та WooCommerce HPOS?',
    questionEs: '¿Cómo implementas e-commerce B2B headless empresarial con Next.js 16 y WooCommerce HPOS?',
    keywords: [
      'b2b ecommerce',
      'tiered pricing',
      'b2b headless',
      'woocommerce hpos',
      'net-30',
      'b2b опт',
      'оптові ціни',
      'precios mayoristas',
    ],
    answer:
      'I architect enterprise B2B headless commerce platforms with Next.js 16 App Router and WooCommerce HPOS: implementing company-scoped customer catalogs, real-time volume tiered pricing matrices, and Net-30 invoice checkout. The architecture handles ERP stock synchronization via Redis BullMQ queues with HMAC verification and sub-50ms catalog responses through Tag-based ISR. Read full guide: /en/blog/enterprise-b2b-headless-ecommerce-tiered-pricing-erp-sync-woocommerce-hpos',
    answerUa:
      'Я проєктую корпоративні B2B headless платформи на Next.js 16 App Router та WooCommerce HPOS: компанійні каталоги з індивідуальними ціновими матрицями за обсяг, Net-30 фактурування та суб-50ms видача через ISR. Система обробляє синхронізацію складів з ERP через черги Redis BullMQ з HMAC-перевіркою та гарантією доставки. Детальний розбір: /ua/blog/enterprise-b2b-headless-ecommerce-tiered-pricing-erp-sync-woocommerce-hpos',
    answerEs:
      'Arquitecto plataformas B2B headless empresariales con Next.js 16 App Router y WooCommerce HPOS: implementando catálogos restringidos por empresa, matrices de precios escalonados por volumen y pagos a 30 días (Net-30). La infraestructura sincroniza el ERP mediante colas Redis BullMQ con verificación HMAC y respuestas en menos de 50 ms vía ISR. Guía completa: /es/blog/enterprise-b2b-headless-ecommerce-tiered-pricing-erp-sync-woocommerce-hpos',
  },
  {
    question: 'How do you build voice-driven conversational e-commerce in Next.js 16?',
    questionUa: 'Як ви створюєте голосовий діалоговий e-commerce на Next.js 16?',
    questionEs: '¿Cómo construyes e-commerce conversacional por voz en Next.js 16?',
    keywords: [
      'voice commerce',
      'web speech api',
      'conversational commerce',
      'голосовой поиск',
      'голосовой магазин',
      'голосовий пошук',
      'comercio por voz',
      'speech recognition',
    ],
    answer:
      'I engineer sub-180ms voice commerce experiences using native browser Web Speech API (0 KB extra bundle weight) combined with Next.js 16 V8 Edge Isolates for structured tool-calling (search, cart mutations, coupons). The UI updates optimistically in <16ms via React 19 Server Actions and maintains strict WCAG 2.2 AA accessibility with ARIA live regions. Read full guide: /en/blog/voice-driven-conversational-ecommerce-web-speech-edge-ai-nextjs-16',
    answerUa:
      'Я розробляю голосовий e-commerce із затримкою до 180 ms на базі нативного Web Speech API (0 KB оверхеду на бандл) та V8 Edge-ізолятів у Next.js 16 для виклику інструментів кошика. Інтерфейс оптимістично оновлюється за <16 ms через Server Actions у React 19 та відповідає стандарту WCAG 2.2 AA завдяки ARIA live regions. Детальний розбір: /ua/blog/voice-driven-conversational-ecommerce-web-speech-edge-ai-nextjs-16',
    answerEs:
      'Desarrollo experiencias de comercio por voz con latencias inferiores a 180 ms combinando la Web Speech API nativa (0 KB de bundle) con aislados V8 Edge en Next.js 16 para llamadas estructuradas a herramientas. La interfaz se actualiza de forma optimista en menos de 16 ms con Server Actions de React 19 y cumple estrictamente con WCAG 2.2 AA. Guía completa: /es/blog/voice-driven-conversational-ecommerce-web-speech-edge-ai-nextjs-16',
  },
  {
    question: 'How do you architect headless subscriptions with Stripe Billing and Next.js 16?',
    questionUa: 'Як ви проектуєте headless-підписки зі Stripe Billing та Next.js 16?',
    questionEs: '¿Cómo arquitectas suscripciones headless con Stripe Billing y Next.js 16?',
    keywords: [
      'stripe billing',
      'headless subscriptions',
      'usage-based billing',
      'dunning',
      'подписки stripe',
      'биллинг stripe',
      'підписки stripe',
      'suscripciones stripe',
    ],
    answer:
      'I architect enterprise headless subscription engines using Next.js 16 App Router and Stripe Billing: combining base recurring tiers with high-throughput Stripe Meter Events buffered in Redis. The platform renders mathematically exact mid-cycle proration previews in real time and uses Redis BullMQ webhook workers with automated grace periods to recover 24.8% of failed payments. Read full guide: /en/blog/headless-subscription-architecture-usage-based-billing-stripe-nextjs-16',
    answerUa:
      'Я розробляю корпоративні headless-двигуни підписок на базі Next.js 16 App Router та Stripe Billing: поєдную базові плани з обліком навантаження через Stripe Meter Events у Redis. Система формує точні попередні розрахунки переходу між тарифами в реальному часі та використовує черги Redis BullMQ для даннінгу, повертаючи 24.8% невдалих платежів. Детальний розбір: /ua/blog/headless-subscription-architecture-usage-based-billing-stripe-nextjs-16',
    answerEs:
      'Diseño motores de suscripción headless empresariales con Next.js 16 App Router y Stripe Billing: combinando cuotas periódicas con eventos de consumo en Stripe Meter Events agrupados en Redis. La plataforma calcula prorrateos exactos a mitad de ciclo en tiempo real y gestiona reintentos con colas Redis BullMQ, recuperando el 24.8% de cobros fallidos. Guía completa: /es/blog/headless-subscription-architecture-usage-based-billing-stripe-nextjs-16',
  },
  {
    question: 'How do you secure Next.js 16 e-commerce checkouts for PCI-DSS v4.0 compliance?',
    questionUa: 'Як ви захищаєте e-commerce чекаути на Next.js 16 для відповідності PCI-DSS v4.0?',
    questionEs: '¿Cómo proteges pasarelas de pago en Next.js 16 para cumplir con PCI-DSS v4.0?',
    keywords: [
      'pci-dss',
      'pci-dss v4.0',
      'checkout security',
      'csp level 3',
      'magecart',
      'безопасность чекаута',
      'безпека чекауту',
      'seguridad de checkout',
    ],
    answer:
      'I harden Next.js 16 e-commerce checkouts for mandatory PCI-DSS v4.0 (Req 6.4.3 & 11.6.1) compliance by generating dynamic cryptographic CSP Level 3 nonces in Edge Middleware (<0.4ms overhead) and validating Subresource Integrity (SRI) SHA-384 hashes for all assets. This setup neutralizes Magecart supply-chain attacks and clears sensitive credentials from browser memory. Read full guide: /en/blog/zero-leakage-checkout-security-pci-dss-v4-csp-nextjs-16',
    answerUa:
      'Я захищаю чекаути на Next.js 16 відповідно до вимог стандарту PCI-DSS v4.0 (6.4.3 та 11.6.1): генерація динамічних nonce для CSP Level 3 в Edge Middleware (<0.4 ms оверхеду) та валідація хешів Subresource Integrity (SRI) SHA-384. Це повністю нейтралізує атаки Magecart та гарантує очищення пам’яті від платіжних даних. Детальний розбір: /ua/blog/zero-leakage-checkout-security-pci-dss-v4-csp-nextjs-16',
    answerEs:
      'Protejo los procesos de pago en Next.js 16 bajo el estándar obligatorio PCI-DSS v4.0 (Req 6.4.3 y 11.6.1) generando nonces criptográficos dinámicos para CSP Nivel 3 en Edge Middleware (<0.4 ms) y validando hashes SHA-384 con Subresource Integrity (SRI). Esta arquitectura bloquea ataques Magecart y borra credenciales de la memoria del navegador. Guía completa: /es/blog/zero-leakage-checkout-security-pci-dss-v4-csp-nextjs-16',
  },
  {
    question: 'How do you scale Next.js 16 applications with Multi-Zone micro-frontends at the edge?',
    questionUa: 'Як ви масштабуєте додатки Next.js 16 за допомогою Multi-Zone мікрофронтендів на Edge?',
    questionEs: '¿Cómo escalas aplicaciones Next.js 16 con micro-frontends multi-zona en el Edge?',
    keywords: [
      'multi-zone',
      'micro-frontends',
      'next.js multi-zones',
      'микрофронтенды',
      'мікрофронтенди',
      'cloudflare workers routing',
      'turborepo',
      'zero downtime',
    ],
    answer:
      'I scale enterprise platforms using Next.js 16 Multi-Zones and Cloudflare Workers reverse proxy routing (<4ms overhead): decoupling heavy sub-applications (Storefront, WASM Lab, Tech Blog, User Portal) under a unified apex domain. Each zone builds autonomously in Turborepo with zero-downtime canary deployments and shared View Transitions. Read full guide: /en/blog/multi-zone-micro-frontends-edge-nextjs-16-autonomous-deployments',
    answerUa:
      'Я масштабую корпоративні платформи через Next.js 16 Multi-Zones та зворотний проксі Cloudflare Workers (<4 ms затримки): відокремлюю ресурсомісткі модулі (магазин, WASM-лабораторію, блог, кабінет) під єдиним доменом. Кожна зона збирається автономно в Turborepo з нульовим часом простою та спільними View Transitions. Детальний розбір: /ua/blog/multi-zone-micro-frontends-edge-nextjs-16-autonomous-deployments',
    answerEs:
      'Escalo plataformas empresariales mediante Next.js 16 Multi-Zones y enrutamiento proxy con Cloudflare Workers (<4 ms de sobrecarga): desacoplando aplicaciones críticas (tienda, laboratorio WASM, blog, portal) bajo un dominio unificado. Cada zona compila de forma aislada en Turborepo con despliegues Canary sin caídas y View Transitions. Guía completa: /es/blog/multi-zone-micro-frontends-edge-nextjs-16-autonomous-deployments',
  },
  {
    question: 'How do you build browser-native WASM sandboxes for safe AI code execution in Next.js 16?',
    questionUa: 'Як ви створюєте браузерні WASM-пісочниці для безпечного виконання коду AI в Next.js 16?',
    questionEs: '¿Cómo construyes sandboxes WASM en navegador para ejecución segura de código de IA en Next.js 16?',
    keywords: [
      'wasm sandboxes',
      'webcontainers',
      'wasi',
      'ai code execution',
      'песочница wasm',
      'пісочниця wasm',
      'ejecucion wasm',
      'edtech runtimes',
    ],
    answer:
      'I architect in-browser multi-language execution sandboxes using WebContainers, WASI, and Next.js 16 App Router: running Node.js, Python, and PHP client-side with zero cloud compute cost ($0 server bills). The architecture enforces Cross-Origin Isolation (COOP/COEP) for SharedArrayBuffer, memory limits via Web Workers, and automated AI self-healing diagnostics for failed scripts. Read full guide: /en/blog/browser-native-wasm-sandboxes-safe-ai-code-execution-nextjs-16',
    answerUa:
      'Я розробляю браузерні мультимовні пісочниці на базі WebContainers, WASI та Next.js 16 App Router: клієнтське виконання Node.js, Python та PHP з нульовими витратами на хмарні сервери ($0). Архітектура використовує Cross-Origin Isolation (COOP/COEP) для SharedArrayBuffer, обмеження ресурсів у Web Workers та AI-діагностику помилок коду. Детальний розбір: /ua/blog/browser-native-wasm-sandboxes-safe-ai-code-execution-nextjs-16',
    answerEs:
      'Diseño entornos de ejecución multilenguaje en el navegador mediante WebContainers, WASI y Next.js 16: ejecutando Node.js, Python y PHP en el cliente a coste cero en servidores ($0). La solución aplica aislamiento Cross-Origin (COOP/COEP) para SharedArrayBuffer, cuotas de memoria en Web Workers y diagnóstico automatizado con IA. Guía completa: /es/blog/browser-native-wasm-sandboxes-safe-ai-code-execution-nextjs-16',
  },
  {
    question: 'How do you achieve global sub-20ms database read latency at the edge in Next.js 16?',
    questionUa: 'Як ви досягаєте глобальної затримки читання БД менше 20 ms на Edge у Next.js 16?',
    questionEs: '¿Cómo logras una latencia de lectura de base de datos menor a 20 ms en el Edge con Next.js 16?',
    keywords: [
      'cloudflare hyperdrive',
      'turso',
      'database latency',
      'edge database',
      'база данных edge',
      'база даних edge',
      'base de datos edge',
      'embedded replicas',
    ],
    answer:
      'I architect sub-20ms global database read architectures by combining Cloudflare Hyperdrive connection pooling for centralized MySQL/PostgreSQL clusters (reusing pre-warmed TCP pools to cut query times from 280ms to <15ms) with Turso libSQL embedded in-memory SQLite replicas (<2ms reads) and Next.js 16 On-Demand ISR tag invalidation. Read full guide: /en/blog/global-sub-20ms-database-read-latency-edge-cloudflare-hyperdrive-nextjs-16',
    answerUa:
      'Я розробляю глобальну архітектуру читання баз даних із затримкою до 20 ms через об’єднання пулінгу Cloudflare Hyperdrive для MySQL/PostgreSQL (перевикористання розігрітих TCP-з’єднань скорочує час з 280 ms до <15 ms) із вбудованими репліками Turso libSQL (<2 ms читання) та інвалідацією тегів у Next.js 16. Детальний розбір: /ua/blog/global-sub-20ms-database-read-latency-edge-cloudflare-hyperdrive-nextjs-16',
    answerEs:
      'Arquitecto soluciones de lectura en bases de datos con latencias inferiores a 20 ms a nivel global combinando Cloudflare Hyperdrive para clústeres MySQL/Postgres (reutilizando conexiones TCP para reducir tiempos de 280 ms a <15 ms) con réplicas embebidas en memoria de Turso libSQL (<2 ms) e invalidación ISR en Next.js 16. Guía completa: /es/blog/global-sub-20ms-database-read-latency-edge-cloudflare-hyperdrive-nextjs-16',
  },
  {
    question: 'How do you run client-side WebGPU predictive personalization in Next.js 16?',
    questionUa: 'Як ви запускаєте клієнтську предиктивну персоналізацію на WebGPU в Next.js 16?',
    questionEs: '¿Cómo ejecutas la personalización predictiva en cliente con WebGPU en Next.js 16?',
    keywords: [
      'webgpu',
      'predictive personalization',
      'collaborative filtering',
      'onnx runtime web',
      'onnx web',
      'клиентский ml',
      'клієнтський ml',
      'персонализация webgpu',
      'персоналізація webgpu',
      'personalizacion webgpu',
      'on-device ml',
    ],
    answer:
      'I run quantized neural collaborative filtering models (4.2MB ONNX) directly on the client GPU via WebGPU and ONNX Runtime Web. User interactions (clicks, views, dwell time) generate real-time vector embeddings in IndexedDB with zero cloud inference cost ($0 GPU servers) and total privacy compliance (GDPR/CCPA/HIPAA), yielding sub-12ms top-10 product ranking in Next.js 16. Read full breakdown: /en/blog/clientside-webgpu-predictive-personalization-collaborative-filtering-nextjs-16',
    answerUa:
      'Я запускаю квантовані нейромережеві моделі колаборативної фільтрації (4.2 МБ ONNX) безпосередньо на GPU клієнта через WebGPU та ONNX Runtime Web. Дії користувача (кліки, перегляди, час на сторінці) формують векторні ембеддинги в IndexedDB із нульовими витратами на хмарні сервери ($0) і 100% відповідністю стандартам приватності (GDPR/CCPA), забезпечуючи ранжування топ-10 товарів за <12мс у Next.js 16. Детальний розбір: /ua/blog/clientside-webgpu-predictive-personalization-collaborative-filtering-nextjs-16',
    answerEs:
      'Ejecuto modelos neuronales cuantizados de filtrado colaborativo (4.2MB ONNX) directamente en la GPU del cliente con WebGPU y ONNX Runtime Web. Las interacciones del usuario generan incrustaciones vectoriales en IndexedDB con coste cero de inferencia en la nube ($0) y cumplimiento total de privacidad (GDPR/CCPA), logrando recomendaciones top-10 en menos de 12ms en Next.js 16. Desglose completo: /es/blog/clientside-webgpu-predictive-personalization-collaborative-filtering-nextjs-16',
  },
  {
    question: 'How do you build an autonomous AI quality harness with Spec-Driven Development in Next.js 16?',
    questionUa: 'Як ви будуєте автономне середовище якості для AI на базі Spec-Driven Development у Next.js 16?',
    questionEs: '¿Cómo construyes un entorno de calidad para IA autónoma con Desarrollo Dirigido por Especificaciones en Next.js 16?',
    keywords: [
      'sdd',
      'spec-driven development',
      'ai quality harness',
      'ast invariants',
      'self-healing test',
      'контроль качества ai',
      'контроль якості ai',
      'качество ai',
      'якість ai',
      'typescript compiler api',
      'calidad de ia',
      'desarrollo dirigido por especificaciones',
    ],
    answer:
      'I engineer autonomous AI quality harnesses by uniting 5-phase Spec-Driven Development (SDD) gating (spec.md -> plan.md -> tasks.md), Abstract Syntax Tree (AST) invariant checks via TypeScript Compiler API (enforcing strict zero-any, boundary firewalls, and typography rules in pre-commit hooks), and self-healing Vitest loops that capture test failures and auto-generate bounded code remedies. Read full architecture guide: /en/blog/autonomous-ai-quality-harness-spec-driven-development-sdd-nextjs-16',
    answerUa:
      'Я розробляю автономні середовища якості для AI через поєднання 5-фазового шлюзування SDD (spec.md -> plan.md -> tasks.md), перевірки синтаксичних інваріантів AST за допомогою TypeScript Compiler API (блокування any, контроль меж модулів та правил коду в pre-commit хуках) та циклів самовідновлення у Vitest, які перехоплюють збої тестів та автоматично генерують точкові виправлення. Детальний розбір: /ua/blog/autonomous-ai-quality-harness-spec-driven-development-sdd-nextjs-16',
    answerEs:
      'Diseño entornos de calidad para agentes autónomos de IA integrando control de fases SDD (spec.md -> plan.md -> tasks.md), verificación de invariantes AST con TypeScript Compiler API (bloqueo estricto de any, cortafuegos de módulos y sintaxis en pre-commit) y bucles de auto-reparación en Vitest que capturan fallos y generan parches precisos de forma automática. Guía de arquitectura completa: /es/blog/autonomous-ai-quality-harness-spec-driven-development-sdd-nextjs-16',
  },  {
    question: 'How do you build streaming voice and vision AI agents at the edge in Next.js 16?',
    questionUa: 'Як ви створюєте потокових мультимодальних голосових та візуальних AI-агентів на Edge у Next.js 16?',
    questionEs: '¿Cómo construyes agentes de IA multimodales de voz y visión en streaming en el Edge con Next.js 16?',
    keywords: [
      'multimodal ai',
      'gemini live',
      'webrtc ai',
      'generative ui',
      'voice ai agent',
      'vision ai',
      'голосовой ai агент',
      'голосовий ai агент',
      'мультимодальный ai',
      'мультимодальний ai',
      'agente de voz ia',
      'ia multimodal',
    ],
    answer:
      'I engineer low-latency multimodal streaming AI agents by connecting browser WebRTC audio/video tracks to Google Gemini Live API over bi-directional WebSockets via Next.js 16 Edge Route Handlers. The agent streams sub-300ms PCM 24kHz audio replies while pushing structured Generative UI tool payloads that dynamically hydrate interactive React 19 components in the client viewport. Read full architecture breakdown: /en/blog/multimodal-streaming-voice-vision-edge-ai-agents-nextjs-16',
    answerUa:
      'Я розробляю низьколатентних мультимодальних потокових AI-агентів, підключаючи WebRTC аудіо- та відеотреки браузера до Google Gemini Live API через двонаправлені WebSockets на Edge Route Handlers у Next.js 16. Агент транслює голосові відповіді PCM 24kHz із затримкою до 300мс і одночасно надсилає структуровані інструментальні виклики Generative UI для динамічної гідратації інтерактивних компонентів React 19. Детальний розбір: /ua/blog/multimodal-streaming-voice-vision-edge-ai-agents-nextjs-16',
    answerEs:
      'Diseño agentes de IA multimodales en streaming de baja latencia conectando pistas de audio y vídeo WebRTC del navegador a la API Gemini Live mediante WebSockets bidireccionales en Route Handlers de Edge en Next.js 16. El agente transmite respuestas de audio PCM a 24kHz con latencias inferiores a 300ms y emite llamadas estructuradas de Generative UI que hidratan componentes interactivos de React 19 en tiempo real. Guía de arquitectura completa: /es/blog/multimodal-streaming-voice-vision-edge-ai-agents-nextjs-16',
  },
  {
    question: 'How do you implement the Transactional Outbox pattern with Kafka and CDC in Next.js 16?',
    questionUa: 'Як ви реалізуєте патерн Transactional Outbox з Kafka та CDC у Next.js 16?',
    questionEs: '¿Cómo implementas el patrón Transactional Outbox con Kafka y CDC en Next.js 16?',
    keywords: [
      'transactional outbox',
      'kafka outbox',
      'cdc debezium',
      'debezium',
      'distributed saga',
      'dual write',
      'паттерн outbox',
      'патерн outbox',
      'двойная запись',
      'подвійний запис',
      'redpanda',
      'sagas distribuidas',
    ],
    answer:
      'I eliminate the distributed dual-write anti-pattern in Next.js 16 Server Actions by committing domain entities and outbox events in a single local ACID transaction. A Debezium CDC connector reads the PostgreSQL Write-Ahead Log (WAL) via pgoutput logical decoding, streaming events to Kafka/Redpanda with sub-18ms replication lag. Distributed cross-service consistency is guaranteed via orchestrated Sagas with automated compensating rollbacks and Redis Bloom filter idempotency keys. Read full architecture breakdown: /en/blog/event-driven-microservices-kafka-outbox-pattern-nextjs-16',
    answerUa:
      'Я усуваю антипатерн подвійного запису (Dual-Write) у Server Actions Next.js 16 завдяки фіксації сутності та події Outbox в єдиній локальній ACID-транзакції. Конектор Debezium CDC читає журнал WAL у PostgreSQL через логічне декодування pgoutput, транслюючи події в Kafka/Redpanda із затримкою до 18мс. Узгодженість між мікросервісами гарантується оркестрованими сагами з автоматичними компенсаційними транзакціями та ключами ідемпотентності з фільтрами Блума в Redis. Детальний розбір: /ua/blog/event-driven-microservices-kafka-outbox-pattern-nextjs-16',
    answerEs:
      'Elimino el antipatrón de doble escritura en Server Actions de Next.js 16 confirmando entidades de dominio y eventos outbox en una única transacción ACID local. El conector Debezium CDC lee el Write-Ahead Log (WAL) de PostgreSQL mediante pgoutput, transmitiendo eventos a Kafka/Redpanda con latencias inferiores a 18ms. La coherencia entre microservicios se asegura mediante sagas orquestadas con compensaciones automáticas e idempotencia con filtros Bloom en Redis. Guía de arquitectura completa: /es/blog/event-driven-microservices-kafka-outbox-pattern-nextjs-16',
  },
  {
    question: 'How do you implement Fine-Grained Authorization and ReBAC with Google Zanzibar in Next.js 16?',
    questionUa: 'Як ви реалізуєте гранулярну авторизацію та ReBAC на базі Google Zanzibar у Next.js 16?',
    questionEs: '¿Cómo implementas la autorización granular y ReBAC con Google Zanzibar en Next.js 16?',
    keywords: [
      'rebac',
      'google zanzibar',
      'openfga',
      'fine-grained authorization',
      'гранулярная авторизация',
      'гранулярна авторизація',
      'авторизация zanzibar',
      'авторизація zanzibar',
      'autorizacion granular',
      'role explosion',
      'выбух ролей',
      'вибух ролей',
    ],
    answer:
      'I replace brittle RBAC role explosion in multi-tenant platforms with Google Zanzibar-inspired Relationship-Based Access Control (ReBAC) using OpenFGA. Permissions are evaluated as graph relationship tuples (user:X is relation of object:Y) with transitive inheritance (e.g., folder editors inherit document write permissions). Combined with Next.js 16 Edge Middleware and Redis evaluation caching, authorization checks resolve in sub-12ms with strict zero-trust validation before all database mutations. Read full architecture breakdown: /en/blog/fine-grained-access-control-rebac-openfga-nextjs-16',
    answerUa:
      'Я замінюю крихкий вибух ролей RBAC у багатокористувацьких платформах на модель ReBAC (Relationship-Based Access Control) на базі Google Zanzibar та OpenFGA. Права обчислюються як кортежі зв’язків у графі (user:X має relation до object:Y) з транзитивним успадкуванням (наприклад, редактори папки автоматично отримують права на запис вкладених документів). У поєднанні з Edge Middleware у Next.js 16 та кешуванням у Redis перевірка прав виконується за <12мс із безапеляційною Zero-Trust валідацією перед будь-якою мутацією БД. Детальний розбір: /ua/blog/fine-grained-access-control-rebac-openfga-nextjs-16',
    answerEs:
      'Sustituyo la explosión de roles de RBAC tradicional en plataformas SaaS multiinquilino por el modelo ReBAC (Relationship-Based Access Control) inspirado en Google Zanzibar con OpenFGA. Los permisos se evalúan como tuplas de grafos de relaciones con herencia transitiva (los editores de una carpeta heredan permisos de escritura en los documentos). Con Edge Middleware en Next.js 16 y caché en Redis, las comprobaciones se ejecutan en menos de 12ms con validación estricta Zero-Trust previa a cada mutación de base de datos. Guía de arquitectura completa: /es/blog/fine-grained-access-control-rebac-openfga-nextjs-16',
  },
  {
    question: 'How do you engineer a deterministic financial ledger with TigerBeetle in Next.js 16?',
    questionUa: 'Як ви створюєте детермінований фінансовий реєстр на базі TigerBeetle у Next.js 16?',
    questionEs: '¿Cómo diseñas un libro mayor financiero determinista con TigerBeetle en Next.js 16?',
    keywords: [
      'tigerbeetle',
      'double-entry',
      'financial ledger',
      'temporal workflows',
      'фінансовий реєстр',
      'подвійний запис',
      'двойная запись',
      'финансовый учет',
      'бухгалтерия',
      'partida doble',
      'libro mayor',
      'idempotency key',
    ],
    answer:
      'I engineer mission-critical financial ledgers using TigerBeetle: enforcing the immutable double-entry equation (Sum(Debits) - Sum(Credits) == 0) with native 128-bit unsigned integer arithmetic (eliminating floating-point drift). High-concurrency checkout mutations execute two-phase transfers (pending authorization hold -> post or void) committing in sub-800 microseconds. Multi-step bank settlements and webhook retries are coordinated via Temporal durable workflows with strict idempotency keys to eliminate duplicate charges. Read full architecture breakdown: /en/blog/deterministic-financial-ledger-double-entry-tigerbeetle-nextjs-16',
    answerUa:
      'Я розробляю відмовостійкі фінансові реєстри на базі TigerBeetle: дотримання інваріанта подвійного запису (Сума(Дебет) - Сума(Кредит) == 0) із нативною 128-бітною цілочисельною арифметикою повністю виключає помилки чисел із плаваючою комою. Високонавантажені мутації замовлень використовують двофазні перекази (блокування коштів -> фіксація або скасування) із затримкою до 800 мікросекунд. Банківські платежі та вебхуки координуються довговічними сагами Temporal зі 128-бітними ключами ідемпотентності для захисту від повторних списань. Детальний розбір: /ua/blog/deterministic-financial-ledger-double-entry-tigerbeetle-nextjs-16',
    answerEs:
      'Diseño libros mayores financieros de misión crítica con TigerBeetle: aplico el principio estricto de partida doble (Suma(Débitos) - Suma(Créditos) == 0) con aritmética nativa de enteros de 128 bits eliminando desviaciones por redondeo. Las transacciones concurrentes ejecutan transferencias en dos fases (retención pendiente -> liquidación o anulación) con latencias inferiores a 800 microsegundos. Las liquidaciones bancarias se coordinan mediante flujos duraderos de Temporal con claves de idempotencia para prevenir cobros duplicados. Guía de arquitectura completa: /es/blog/deterministic-financial-ledger-double-entry-tigerbeetle-nextjs-16',
  },

]

export function matchesFaqKeyword(text: string, kw: string): boolean {
  const lower = text.toLowerCase()
  const lowerKw = kw.toLowerCase()
  if (lowerKw.length <= 4) {
    const rx = new RegExp(`(^|[^a-z0-9а-яіїєґ])${lowerKw}([^a-z0-9а-яіїєґ]|$)`, 'i')
    return rx.test(lower)
  }
  return lower.includes(lowerKw)
}

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
    if (item.keywords.some((kw) => matchesFaqKeyword(lower, kw))) {
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
