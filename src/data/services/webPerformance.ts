import type { ServiceItem } from './types'

export const webPerformanceService: ServiceItem = {
  slug: 'web-performance-core-web-vitals',
  audience: 'both',
  iconName: 'LuZap',
  relevantProjectSlugs: ['yusupovartur-nextjs-portfolio', 'kidzely', 'unitrition', 'artezioeu'],
  content: {
    es: {
      badge: 'Rendimiento Extremo / CRO & Google Ads',
      title: 'Optimización de Velocidad Web y Core Web Vitals (PageSpeed 95+)',
      shortDesc: 'Acelera tu web a menos de 0.8 segundos. Mejora el Quality Score en Google Ads, reduce el coste por clic (CPC) y multiplica las conversiones en móvil sin cambiar de diseño.',
      heroLead: 'Cada segundo extra de carga en móvil destruye hasta un 20% de tus conversiones publicitarias. Analizo y optimizo el código de tu sitio web a nivel de ingeniería (bundle splitting, optimización de fuentes y assets, caché perimetral) para colocar tus métricas de Google en verde y maximizar el retorno de tu inversión.',
      metrics: [
        { value: '<0.8s', label: 'Largest Contentful Paint (LCP)' },
        { value: '-25%', label: 'Reducción estimada del CPC en Google Ads' },
        { value: '+18%', label: 'Incremento medio en tasa de conversión móvil' },
        { value: '95-100', label: 'Puntuación móvil en PageSpeed Insights' },
      ],
      problemsSolved: [
        {
          title: 'Presupuesto de Google Ads malgastado por páginas de destino lentas',
          desc: 'Google penaliza las landing pages lentas con un bajo Nivel de Calidad (Quality Score), lo que encarece tus pujas de CPC y reduce las impresiones. Acelerar tu web reduce directamente el coste por adquisición de clientes.',
        },
        {
          title: 'Usuarios móviles que abandonan antes de que cargue el primer elemento',
          desc: 'Más del 50% del tráfico web procede de smartphones en redes móviles variables. Optimizamos la ruta crítica de renderizado para mostrar contenido interactivo de inmediato.',
        },
        {
          title: 'Avisos de advertencia en Google Search Console por métricas INP o CLS deficientes',
          desc: 'Google utiliza los datos de usuarios reales (CrUX) como factor directo de posicionamiento. Solucionamos cambios inesperados de diseño (CLS) y retrasos en la respuesta a clics (INP).',
        },
      ],
      deliverables: [
        {
          title: 'Auditoría Profunda y Diagnóstico de Cuellos de Botella',
          items: [
            'Inspección de tiempos de respuesta del servidor (TTFB), scripts de terceros y librerías que bloquean el renderizado.',
            'Informe técnico con antes y después cuantificado en milisegundos y métricas Core Web Vitals.',
          ],
        },
        {
          title: 'Intervención de Ingeniería en el Código',
          items: [
            'Optimización radical del peso de JavaScript (Tree-shaking, lazy loading de scripts auxiliares y Google Tag Manager).',
            'Conversión de imágenes a formatos modernos WebP/AVIF con tamaños adaptativos responsive.',
            'Estrategia de precarga de fuentes críticas sin provocar parpadeos de texto (FOIT / FOUT).',
          ],
        },
        {
          title: 'Caché Avanzada y Rendimiento en Red',
          items: [
            'Configuración de cabeceras HTTP de caché óptimas y compresión Brotli.',
            'Integración de CDN perimetral (Cloudflare o CloudFront) para servir assets estáticos a menos de 30ms.',
          ],
        },
      ],
      workflowSteps: [
        {
          step: 'Paso 1',
          title: 'Auditoría Inicial y Medición de Línea Base',
          desc: 'Registramos las métricas de laboratorio y de campo (CrUX) de tu web para establecer los objetivos de rendimiento garantizados.',
        },
        {
          step: 'Paso 2',
          title: 'Optimización en Entorno Seguro de Pruebas',
          desc: 'Aplicamos las modificaciones de código en una copia de staging sin riesgo de alterar el funcionamiento de la web en producción.',
        },
        {
          step: 'Paso 3',
          title: 'Validación de Conversión y Pasarelas',
          desc: 'Comprobamos minuciosamente que formularios, carritos de compra y herramientas de analítica sigan midiendo con absoluta precisión.',
        },
        {
          step: 'Paso 4',
          title: 'Despliegue y Monitorización de Resultados',
          desc: 'Publicamos las mejoras en producción y monitorizamos la subida en las puntuaciones de PageSpeed y Search Console.',
        },
      ],
      faqs: [
        {
          q: '¿Se alterará el diseño visual o la funcionalidad de mi web?',
          a: 'No. El objetivo de la optimización técnica es que la web tenga exactamente el mismo diseño y funcione mejor, cargando los mismos elementos de forma mucho más eficiente y sin bloqueos.',
        },
        {
          q: '¿Qué diferencia hay entre vuestro trabajo y un plugin de caché de WordPress?',
          a: 'Los plugins de caché solo guardan páginas HTML, pero no resuelven scripts mal programados, librerías pesadas en exceso, fuentes mal alojadas o problemas de ejecución en el navegador. Realizo una intervención quirúrgica en el código fuente.',
        },
        {
          q: '¿Cómo influye la velocidad en mis campañas de Google Ads?',
          a: 'Google evalúa la experiencia en la página de destino para calcular el Quality Score. Una web rápida aumenta tu puntuación, lo que te permite ganar mejores posiciones publicitarias pagando menos por cada clic.',
        },
        {
          q: '¿Ofrecéis garantía de resultados?',
          a: 'Sí. Acordamos previamente unos objetivos concretos de métricas Core Web Vitals (como situar el móvil por encima de 90 puntos o reducir el LCP por debajo de 1.2 segundos). Si no se alcanzan, no se abona el tramo final.',
        },
      ],
      ctaHeadline: '¿Tu web tarda más de 2 segundos en cargar en el móvil?',
      ctaLead: 'Escríbeme por WhatsApp con la dirección de tu página. Realizo una auditoría rápida de velocidad y te explico dónde están los frenos.',
      whatsappMessage: 'Hola Artur, quiero optimizar la velocidad y las métricas Core Web Vitals de mi página web.',
      schemaDescription: 'Servicio de optimización técnica de velocidad web y Core Web Vitals en España. PageSpeed 95+, reducción de coste de Google Ads y mejora de conversión móvil.',
    },
    en: {
      badge: 'Extreme Performance / CRO & Google Ads',
      title: 'Core Web Vitals & Sub-Second Performance Optimization (PageSpeed 95+)',
      shortDesc: 'Accelerate your web platform to sub-0.8s load times. Improve your Google Ads Quality Score, reduce cost-per-click (CPC), and boost mobile checkout conversions.',
      heroLead: 'Every additional second of mobile loading latency burns up to 20% of your advertising conversions. I perform engineering-level codebase optimizations (bundle splitting, asset pipelines, edge caching) to get your metrics into the green and maximize advertising ROI.',
      metrics: [
        { value: '<0.8s', label: 'Largest Contentful Paint (LCP)' },
        { value: '-25%', label: 'Estimated Google Ads CPC cost reduction' },
        { value: '+18%', label: 'Average mobile conversion lift' },
        { value: '95-100', label: 'Mobile PageSpeed Insights score' },
      ],
      problemsSolved: [
        {
          title: 'Google Ads budgets wasted on slow landing pages',
          desc: 'Google penalizes sluggish landing pages with lower Quality Scores, inflating your CPC bids and reducing ad impression volume. Accelerating your website directly lowers your client acquisition cost.',
        },
        {
          title: 'Mobile visitors bouncing before interactive elements load',
          desc: 'Over 50% of web traffic originates from smartphones on fluctuating cellular connections. We optimize the critical rendering path to display interactive content immediately.',
        },
        {
          title: 'Warnings in Google Search Console for poor INP or CLS metrics',
          desc: 'Google relies on real-world user metrics (CrUX) as a direct search ranking signal. We fix unexpected layout shifts (CLS) and click responsiveness delays (INP).',
        },
      ],
      deliverables: [
        {
          title: 'Deep Engineering Audit & Bottleneck Diagnostics',
          items: [
            'Server response profiling (TTFB), third-party script audit, and render-blocking asset breakdown.',
            'Comprehensive technical report quantifying before-and-after milliseconds across Core Web Vitals.',
          ],
        },
        {
          title: 'Codebase Engineering Interventions',
          items: [
            'Radical JavaScript payload reduction (Tree-shaking, tag manager script deferral, dynamic imports).',
            'Image pipeline transformation to WebP/AVIF with responsive srcset sizing.',
            'Critical font preloading strategy eliminating layout shifts (FOIT / FOUT).',
          ],
        },
        {
          title: 'Advanced Edge Caching & Network Layer Tuning',
          items: [
            'Optimized HTTP cache-control headers and Brotli compression.',
            'Edge CDN configuration (Cloudflare or CloudFront) serving assets with under 30ms latency.',
          ],
        },
      ],
      workflowSteps: [
        {
          step: 'Step 1',
          title: 'Baseline Measurement & Diagnostic Audit',
          desc: 'We measure laboratory synthetic benchmarks and real-user data (CrUX) to set guaranteed performance KPIs.',
        },
        {
          step: 'Step 2',
          title: 'Staging Codebase Optimization',
          desc: 'We implement performance improvements on an isolated staging clone with zero risk to live production traffic.',
        },
        {
          step: 'Step 3',
          title: 'Checkout & Conversion Validation',
          desc: 'We verify that checkout flows, forms, tracking pixels, and analytics events execute with flawless accuracy.',
        },
        {
          step: 'Step 4',
          title: 'Production Deployment & KPI Monitoring',
          desc: 'We deploy optimizations to production and monitor score improvements across PageSpeed and Search Console.',
        },
      ],
      faqs: [
        {
          q: 'Will code optimization alter the visual design or existing features?',
          a: 'No. The goal of engineering performance tuning is to preserve your exact visual design while loading all assets with maximum efficiency and zero browser thread blocking.',
        },
        {
          q: 'How does this differ from installing a WordPress cache plugin?',
          a: 'Cache plugins only save static HTML copies. They do not fix bloated JavaScript execution, render-blocking tags, unoptimized web fonts, or poor browser thread efficiency. We perform surgical source code optimizations.',
        },
        {
          q: 'How does site velocity impact my Google Ads campaigns?',
          a: 'Google evaluates landing page experience to establish Quality Score. A fast website improves your score, allowing you to secure higher ad positions at a lower cost per click.',
        },
        {
          q: 'Do you offer a performance outcome guarantee?',
          a: 'Yes. We define explicit Core Web Vitals targets beforehand (such as mobile scores exceeding 90 or LCP under 1.2s). If targets are not met, the final milestone invoice is waived.',
        },
      ],
      ctaHeadline: 'Does your website take more than 2 seconds to load on mobile?',
      ctaLead: 'Send me a message on WhatsApp with your website URL. I will perform a quick speed audit and highlight key bottlenecks.',
      whatsappMessage: 'Hi Artur, I would like to optimize the loading speed and Core Web Vitals of my website.',
      schemaDescription: 'Web performance optimization and Core Web Vitals tuning in Spain and the EU. PageSpeed 95+, Google Ads Quality Score lift, and higher mobile conversions.',
    },
    ua: {
      badge: 'Екстремальна Швидкість / CRO & Google Ads',
      title: 'Оптимізація швидкості завантаження сайту та Core Web Vitals (PageSpeed 95+)',
      shortDesc: 'Прискорення вашого сайту до менш ніж 0.8 секунди. Покращення Quality Score в Google Ads, зниження ціни за клік (CPC) та зростання конверсії на смартфонах.',
      heroLead: 'Кожна додаткова секунда очікування на мобільному телефоні забирає до 20% рекламних конверсій. Я проводжу інженерну оптимізацію коду (розділення бандлів, стиснення ресурсів, налаштування кешування), щоб вивести метрики сайту в зелену зону та знизити вартість лідів.',
      metrics: [
        { value: '<0.8с', label: 'Largest Contentful Paint (LCP)' },
        { value: '-25%', label: 'Зниження ціни за клік у Google Ads' },
        { value: '+18%', label: 'Середнє зростання мобільної конверсії' },
        { value: '95-100', label: 'Оцінка в PageSpeed Insights для мобільних' },
      ],
      problemsSolved: [
        {
          title: 'Рекламний бюджет у Google Ads спалюється через повільні сторінки',
          desc: 'Google знижує показник якості (Quality Score) повільних лендінгів, що призводить до зростання ставок CPC. Прискорення сайту напряму зменшує вартість залучення кожного клієнта.',
        },
        {
          title: 'Мобільні користувачі закривають сайт до його повного завантаження',
          desc: 'Понад 50% трафіку надходить зі смартфонів через мобільні мережі. Ми оптимізуємо критичний шлях рендерингу для миттєвої взаємодії з інтерфейсом.',
        },
        {
          title: 'Попередження у Google Search Console про проблеми з INP або CLS',
          desc: 'Google використовує реальні дані користувачів (CrUX) як фактор ранжування. Ми усуваємо неочікувані зсуви макета (CLS) та затримки реакції на клік (INP).',
        },
      ],
      deliverables: [
        {
          title: 'Глибокий технічний аудит та пошук вузьких місць',
          items: [
            'Аналіз часу відповіді сервера (TTFB), сторонніх лічильників та скриптів, що блокують відображення.',
            'Технічний звіт із вимірюванням показників у мілісекундах до та після впровадження змін.',
          ],
        },
        {
          title: 'Інженерні оптимізації у коді сайту',
          items: [
            'Зменшення обсягу JavaScript (Tree-shaking, відкладене завантаження аналітики та Google Tag Manager).',
            'Конвертація зображень у сучасні формати WebP/AVIF з адаптивними розмірами.',
            'Оптимізація підключення шрифтів без ефекту миготіння тексту (FOIT / FOUT).',
          ],
        },
        {
          title: 'Налаштування мережевого кешування',
          items: [
            'Правильні заголовки HTTP Cache-Control та алгоритм стиснення Brotli.',
            'Підключення глобальної мережі CDN (Cloudflare або CloudFront) для доставки ресурсів швидше 30мс.',
          ],
        },
      ],
      workflowSteps: [
        {
          step: 'Крок 1',
          title: 'Вимірювання початкових показників',
          desc: 'Фіксуємо синтетичні тести та реальні метрики відвідувачів (CrUX) для визначення гарантованих цілей.',
        },
        {
          step: 'Крок 2',
          title: 'Оптимізація на тестовому сервері',
          desc: 'Вносимо зміни у копію сайту на Staging-сервері без ризику порушити роботу активного проєкту.',
        },
        {
          step: 'Крок 3',
          title: 'Перевірка функціоналу та аналітики',
          desc: 'Ретельно тестуємо форму замовлення, кошик та коректність спрацьовування рекламних пікселів.',
        },
        {
          step: 'Крок 4',
          title: 'Реліз оптимізацій у production',
          desc: 'Застосовуємо покращення на основному домені та фіксуємо зростання оцінок у Google Search Console.',
        },
      ],
      faqs: [
        {
          q: 'Чи зміниться зовнішній вигляд або дизайн мого сайту?',
          a: 'Ні. Мета інженерної оптимізації полягає в тому, щоб дизайн залишився ідентичним, але код виконувався в рази швидше та без зависань браузера.',
        },
        {
          q: 'Чим ваша робота відрізняється від плагінів кешування у WordPress?',
          a: 'Плагіни кешування лише зберігають HTML, але не виправляють важкі сторонні скрипти, повільні шрифти чи блокування потоку рендерингу. Я оптимізую безпосередньо вихідний код.',
        },
        {
          q: 'Як швидкість впливає на мої рекламні кампанії у Google Ads?',
          a: 'Google аналізує зручність цільової сторінки для розрахунку показника якості. Швидкий сайт дозволяє отримувати вищі позиції у видачі за меншу вартість за клік.',
        },
        {
          q: 'Чи надаєте ви гарантію результату?',
          a: 'Так. Ми попередньо погоджуємо конкретні цілі Core Web Vitals (наприклад, понад 90 балів для мобільних або LCP до 1.2с). Якщо ціль не досягнута, фінальний платіж скасовується.',
        },
      ],
      ctaHeadline: 'Ваш сайт завантажується довше 2 секунд на телефоні?',
      ctaLead: 'Напишіть мені у WhatsApp посилання на сайт. Я проведу експрес-аудит та покажу, що саме його сповільнює.',
      whatsappMessage: 'Вітаю Артуре! Хочу оптимізувати швидкість завантаження сайту та показники Core Web Vitals.',
      schemaDescription: 'Послуги інженерної оптимізації швидкості сайтів та Core Web Vitals в Іспанії та Європі. PageSpeed 95+, зниження вартості реклами в Google Ads та зростання конверсії.',
    },
  },
}
