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
