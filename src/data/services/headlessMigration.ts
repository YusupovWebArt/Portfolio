import type { ServiceItem } from './types'

export const headlessMigrationService: ServiceItem = {
  slug: 'headless-wordpress-nextjs-migration',
  audience: 'both',
  iconName: 'LuCodeXml',
  relevantProjectSlugs: ['unitrition', 'fullstack-ai-lab', 'it-magic', 'yusupovartur-nextjs-portfolio'],
  content: {
    es: {
      badge: 'Arquitectura Headless / Modernización Web',
      title: 'Migración de WordPress y Sistemas Legacy a Next.js 16 Headless',
      shortDesc: 'Moderniza tu web a la velocidad de Next.js 16 conservando la facilidad de gestión de WordPress. Cero caídas por picos de tráfico, seguridad blindada y 100% de SEO preservado.',
      heroLead: 'Desacopla la interfaz visual de tu base de datos para ofrecer una velocidad instantánea a tus usuarios mientras tu equipo editorial sigue publicando contenidos en el panel habitual de WordPress. Una solución definitiva para eliminar plugins lentos, vulnerabilidades de seguridad y caídas de servidor.',
      metrics: [
        { value: '<0.8s', label: 'Tiempo de carga de página (LCP)' },
        { value: '100%', label: 'Preservación de rankings e URLs' },
        { value: '0', label: 'Consultas a MySQL en visitas públicas' },
        { value: '95-100', label: 'Puntuación en Google PageSpeed' },
      ],
      problemsSolved: [
        {
          title: 'Servidores saturados y caídas durante campañas de publicidad',
          desc: 'Un WordPress tradicional ejecuta cientos de consultas PHP/MySQL en cada visita. Con Next.js 16 estático (SSG/ISR), tu web se sirve desde una red de distribución global (Edge CDN) soportando millones de visitas sin inmutarse.',
        },
        {
          title: 'Vulnerabilidades de seguridad constantes en plugins de terceros',
          desc: 'Al desacoplar el frontend del gestor, el panel de administración de WordPress queda aislado tras un cortafuegos. Los atacantes no pueden inyectar código malicioso ni comprometer la web pública.',
        },
        {
          title: 'Miedo a perder posicionamiento orgánico en Google durante la migración',
          desc: 'Mapeo exhaustivo 1 a 1 de URLs, redirecciones 301 automatizadas, microdatos Schema.org sincronizados e indexabilidad limpia para que tu tráfico orgánico crezca en lugar de desplomarse.',
        },
      ],
      deliverables: [
        {
          title: 'Arquitectura Frontend de Alto Rendimiento',
          items: [
            'Frontend moderno en Next.js 16 con App Router, React 19 y TypeScript 6 estricto.',
            'Revalidación estática bajo demanda mediante webhooks seguros: cuando editas un post en WordPress, la web se actualiza en menos de 2 segundos.',
            'Puntuación Core Web Vitals verde (LCP < 0.8s, INP < 50ms, CLS 0.00) en móvil y escritorio.',
          ],
        },
        {
          title: 'Optimización del Backend WordPress',
          items: [
            'Configuración de WPGraphQL o REST API limpia y securizada con caché persistente en Redis.',
            'Preservación de tipos de contenido personalizados (CPT), taxonomías y campos flexibles de ACF Pro.',
            'Aislamiento del entorno de administración mediante cabeceras de seguridad estrictas y autenticación en dos pasos.',
          ],
        },
        {
          title: 'Auditoría SEO y Traspaso Seguro',
          items: [
            'Comprobación automatizada de equivalencia canónica, etiquetas hreflang y sitemaps XML.',
            'Monitorización en tiempo real durante el corte de DNS con cero minutos de tiempo de inactividad.',
          ],
        },
      ],
      workflowSteps: [
        {
          step: 'Fase 1',
          title: 'Auditoría de Plugins y Mapeo de Arquitectura',
          desc: 'Analizamos la base de datos de WordPress, identificamos plugins obsoletos que se pueden reemplazar con código nativo y elaboramos el inventario de URLs.',
        },
        {
          step: 'Fase 2',
          title: 'Construcción del Frontend Desacoplado',
          desc: 'Desarrollamos la interfaz en Next.js 16 conectada a los endpoints de WordPress en un entorno de desarrollo privado.',
        },
        {
          step: 'Fase 3',
          title: 'Pruebas de Carga y Verificación SEO',
          desc: 'Simulamos picos de tráfico intensos y comprobamos que todos los metadatos, enlaces internos y tiempos de respuesta cumplan los objetivos.',
        },
        {
          step: 'Fase 4',
          title: 'Lanzamiento Cero Downtime y Monitorización',
          desc: 'Cambiamos los registros DNS a la CDN global sin interrumpir el servicio y monitorizamos métricas durante las 72 horas posteriores.',
        },
      ],
      faqs: [
        {
          q: '¿Mi equipo tendrá que aprender una herramienta nueva para subir artículos o productos?',
          a: 'No. El panel de WordPress sigue siendo exactamente el mismo para redactores y gestores de catálogo. La única diferencia es que el botón de publicar actualiza la web al instante en la red de distribución.',
        },
        {
          q: '¿Es más caro mantener una web Headless que un hosting tradicional?',
          a: 'Generalmente el coste operativo se reduce. El frontend de Next.js se aloja en plataformas serverless optimizadas (como Vercel o Cloudflare) con costes mínimos, y el servidor de WordPress necesita mucha menos potencia porque ya no atiende visitas públicas.',
        },
        {
          q: '¿Qué ocurre con plugins populares como Yoast SEO o Rank Math?',
          a: 'Los campos de SEO se sincronizan mediante la API y se inyectan como metadatos nativos y Schema.org en el código generado por Next.js, mejorando la indexabilidad de los motores de búsqueda.',
        },
        {
          q: '¿Cuánto tiempo dura habitualmente una migración completa?',
          a: 'Para sitios corporativos o editoriales medios, el proceso dura entre 2 y 4 semanas. En tiendas complejas de WooCommerce, solemos planificar entre 4 y 8 semanas con fases de pruebas exhaustivas.',
        },
      ],
      ctaHeadline: '¿Tu WordPress va lento o temes que se caiga ante picos de visitas?',
      ctaLead: 'Hablemos por WhatsApp. Analizo la velocidad de tu web actual y te explico cómo dar el salto a una arquitectura Headless sin fricción.',
      whatsappMessage: 'Hola Artur, nos gustaría consultar sobre la migración de nuestro sitio WordPress a Next.js 16 Headless.',
      schemaDescription: 'Servicio de migración de WordPress monolítico a Next.js 16 Headless desacoplado en España. Máxima velocidad, seguridad blindada y preservación total de SEO.',
    },
    en: {
      badge: 'Headless Architecture / Web Modernization',
      title: 'Headless WordPress & Legacy Monolith Migration to Next.js 16',
      shortDesc: 'Modernize your web presence with Next.js 16 velocity while keeping your intuitive WordPress editorial panel. Zero traffic crashes, fortified security, and 100% SEO preservation.',
      heroLead: 'Decouple your visual front-end from your underlying database to provide instantaneous load speeds for your visitors while your editorial team continues publishing content in their familiar WordPress dashboard. The definitive engineering solution to eliminate slow plugins and server bottlenecks.',
      metrics: [
        { value: '<0.8s', label: 'Largest Contentful Paint (LCP)' },
        { value: '100%', label: 'Search ranking & URL preservation' },
        { value: '0', label: 'Public MySQL queries on page views' },
        { value: '95-100', label: 'Google PageSpeed score benchmark' },
      ],
      problemsSolved: [
        {
          title: 'Servers crashing during marketing campaigns and traffic spikes',
          desc: 'Monolithic WordPress executes hundreds of PHP/database queries on every page hit. With static Next.js 16 (SSG/ISR), pages are delivered from global Edge CDNs, handling millions of simultaneous visitors effortlessly.',
        },
        {
          title: 'Recurring security vulnerabilities in third-party plugins',
          desc: 'By decoupling front-end presentation, your administrative WordPress CMS is isolated behind an edge firewall. Attackers cannot inject malicious frontend scripts or compromise the public site.',
        },
        {
          title: 'Fear of losing organic search engine rankings during migration',
          desc: 'Rigorous 1-to-1 URL redirect mapping, structured Schema.org validation, and clean crawlability ensure your organic search traffic grows instead of experiencing disruptions.',
        },
      ],
      deliverables: [
        {
          title: 'High-Performance Frontend Architecture',
          items: [
            'Modern Next.js 16 frontend built with App Router, React 19 Server Components, and TypeScript 6.',
            'On-demand static revalidation via secure HMAC webhooks: updating a post in WordPress updates the edge cache in under 2 seconds.',
            'Green Core Web Vitals (LCP < 0.8s, INP < 50ms, CLS 0.00) across all devices.',
          ],
        },
        {
          title: 'WordPress Backend Hardening',
          items: [
            'Clean and secured WPGraphQL or REST API endpoints with persistent Redis caching.',
            'Seamless preservation of custom post types (CPT), taxonomies, and ACF Pro flexible content layouts.',
            'Administrative backend protection with strict Content Security Policies and two-factor authentication.',
          ],
        },
        {
          title: 'SEO Audit & Zero-Downtime Cutover',
          items: [
            'Automated verification of canonical tags, hreflang alternates, and XML sitemaps.',
            'Real-time DNS cutover with zero downtime for existing visitors and active search bots.',
          ],
        },
      ],
      workflowSteps: [
        {
          step: 'Phase 1',
          title: 'Plugin Audit & Architectural Mapping',
          desc: 'We analyze your WordPress database, identify obsolete plugins that can be replaced by native code, and compile the full URL inventory.',
        },
        {
          step: 'Phase 2',
          title: 'Decoupled Frontend Development',
          desc: 'We build the modern Next.js 16 interface connected to your WordPress endpoints in an isolated development environment.',
        },
        {
          step: 'Phase 3',
          title: 'Load Stress Testing & SEO Verification',
          desc: 'We simulate heavy traffic spikes and confirm that all metadata, internal linking, and response latencies satisfy target KPIs.',
        },
        {
          step: 'Phase 4',
          title: 'Zero-Downtime Launch & Monitoring',
          desc: 'We switch DNS records to the global CDN without interrupting active sessions and monitor telemetry for 72 hours post-launch.',
        },
      ],
      faqs: [
        {
          q: 'Will my team have to learn a completely new editorial software?',
          a: 'No. The WordPress administrative panel remains identical for your writers and marketing team. The only difference is that hitting Publish updates the edge CDN in seconds.',
        },
        {
          q: 'Is maintaining a Headless website more expensive than shared hosting?',
          a: 'In most scenarios, operational infrastructure costs decline. The Next.js frontend is served via scalable edge networks with low computing overhead, and WordPress requires minimal resources since it no longer serves public traffic.',
        },
        {
          q: 'What happens to SEO plugins like Yoast or Rank Math?',
          a: 'SEO fields are extracted via the API and injected natively as metadata and Schema.org graphs in Next.js, significantly improving search crawler rendering.',
        },
        {
          q: 'How long does a complete headless migration take?',
          a: 'Standard corporate and editorial websites typically require 2 to 4 weeks. High-SKU WooCommerce platforms usually span 4 to 8 weeks with dedicated regression testing.',
        },
      ],
      ctaHeadline: 'Is your WordPress sluggish or failing during high-traffic surges?',
      ctaLead: 'Connect with me on WhatsApp. I will inspect your current site performance and explain how to migrate to Headless without business disruption.',
      whatsappMessage: 'Hi Artur, we would like to consult about migrating our WordPress platform to Headless Next.js 16.',
      schemaDescription: 'Decoupled Headless WordPress and legacy system migration services to Next.js 16. Sub-second speed, hardened security, and complete organic SEO preservation.',
    },
    ua: {
      badge: 'Headless Архітектура / Модернізація',
      title: 'Міграція з монолітного WordPress та застарілих систем на Next.js 16 Headless',
      shortDesc: 'Оновлення сайту до швидкості Next.js 16 зі збереженням звичної панелі WordPress. Жодних падінь під час напливу трафіку, максимальна безпека та повне збереження SEO.',
      heroLead: 'Відокремлення візуальної частини від бази даних забезпечує миттєве завантаження сторінок для користувачів, тоді як редактори продовжують публікувати матеріали у знайомій адмінці WordPress. Найкраще інженерне рішення проти повільних плагінів та вразливостей.',
      metrics: [
        { value: '<0.8с', label: 'Час завантаження основного контенту (LCP)' },
        { value: '100%', label: 'Збереження позицій та посилань в Google' },
        { value: '0', label: 'Запитів до MySQL при відкритті сторінок' },
        { value: '95-100', label: 'Оцінка в Google PageSpeed Insights' },
      ],
      problemsSolved: [
        {
          title: 'Сервер зависає та падає під час запуску реклами чи напливу відвідувачів',
          desc: 'Звичайний WordPress виконує десятки SQL-запитів на кожен перегляд. Статичний Next.js 16 (SSG/ISR) обслуговує сторінки з глобальної мережі CDN, витримуючи мільйони відвідувань без додаткових витрат.',
        },
        {
          title: 'Регулярні зламування та вразливості сторонніх плагінів',
          desc: 'Після розділення фронтенду та бекенду адмін-панель WordPress ховається за надійним фаєрволом. Зловмисники не мають доступу до бази даних через публічний сайт.',
        },
        {
          title: 'Острах втратити позиції у пошуковій видачі під час редизайну',
          desc: 'Повне посторінкове зіставлення адрес, автоматичні 301-редиректи, валідація Schema.org та швидка індексація гарантують зростання органічного трафіку замість його просідання.',
        },
      ],
      deliverables: [
        {
          title: 'Високопродуктивний Frontend',
          items: [
            'Сучасний інтерфейс на Next.js 16 з App Router, React 19 та суворою типізацією TypeScript.',
            'Статична ревалідація за запитом через захищені вебхуки: редагування статті у WordPress оновлює публічну сторінку за 2 секунди.',
            'Зелена зона Core Web Vitals (LCP < 0.8с, INP < 50мс, CLS 0.00) на мобільних пристроях.',
          ],
        },
        {
          title: 'Оптимізація та ізоляція WordPress Backend',
          items: [
            'Налаштування захищеного WPGraphQL або REST API з постійним кешуванням у Redis.',
            'Збереження кастомних типів записів (CPT), таксономій та складних макетів ACF Pro.',
            'Захист панелі керування двофакторною автентифікацією та суворими правилами CSP.',
          ],
        },
        {
          title: 'SEO-аудит та безшовне перемикання',
          items: [
            'Автоматична перевірка канонічних тегів, альтернативних мовних версій та sitemap.xml.',
            'Перемикання DNS без жодної секунди простою сайту для відвідувачів.',
          ],
        },
      ],
      workflowSteps: [
        {
          step: 'Фаза 1',
          title: 'Аудит плагінів та структури бази даних',
          desc: 'Аналізуємо базу даних WordPress, замінюємо повільні плагіни нативним кодом та фіксуємо повний реєстр адрес.',
        },
        {
          step: 'Фаза 2',
          title: 'Розробка окремого фронтенду Next.js',
          desc: 'Створюємо новий швидкий інтерфейс на Next.js 16, підключений до API WordPress на тестовому домені.',
        },
        {
          step: 'Фаза 3',
          title: 'Навантажувальне тестування та перевірка SEO',
          desc: 'Симулюємо пікові навантаження та перевіряємо коректність структурованих даних і метатегів.',
        },
        {
          step: 'Фаза 4',
          title: 'Реліз без простою та цілодобовий моніторинг',
          desc: 'Перемикаємо DNS на глобальну CDN та контролюємо стабільність роботи у перші 72 години після запуску.',
        },
      ],
      faqs: [
        {
          q: 'Чи потрібно команді навчатися нової системи для публікації контенту?',
          a: 'Ні. Панель керування WordPress залишається звичною для маркетологів та копірайтерів. Публікація нових статей відбувається точно так само, як і раніше.',
        },
        {
          q: 'Чи дорожче утримувати Headless-сайт порівняно зі звичайним хостингом?',
          a: 'Зазвичай витрати зменшуються. Фронтенд Next.js обслуговується на оптимізованих edge-платформах з мінімальною вартістю, а сервер WordPress потребує значно менше ресурсів.',
        },
        {
          q: 'Що відбувається з налаштуваннями плагінів Yoast або Rank Math?',
          a: 'Усі SEO-поля передаються через API та вбудовуються у нативний код Next.js як валідна розмітка Schema.org, що покращує сприйняття сайту пошуковими ботами.',
        },
        {
          q: 'Скільки часу займає повний процес міграції?',
          a: 'Для корпоративних або контентних сайтів міграція зазвичай триває від 2 до 4 тижнів. Для великих інтернет-магазинів - від 4 до 8 тижнів з детальним тестуванням замовлень.',
        },
      ],
      ctaHeadline: 'Ваш WordPress працює повільно або падає під час пікових навантажень?',
      ctaLead: 'Напишіть мені у WhatsApp. Проаналізую продуктивність вашого сайту та запропоную план безшовної міграції на Headless.',
      whatsappMessage: 'Вітаю Артуре! Хочемо проконсультуватися щодо міграції нашого WordPress сайту на Next.js 16 Headless.',
      schemaDescription: 'Послуги переведення монолітного WordPress на архітектуру Next.js 16 Headless в Іспанії та Європі. Максимальна швидкість, надійний захист та повне збереження SEO.',
    },
  },
}
