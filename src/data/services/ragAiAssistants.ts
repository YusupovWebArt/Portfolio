import type { ServiceItem } from './types'

export const ragAiAssistantsService: ServiceItem = {
  slug: 'rag-ai-assistants-business',
  audience: 'both',
  iconName: 'LuBot',
  relevantProjectSlugs: ['yusupovartur-nextjs-portfolio', 'fullstack-ai-lab', 'unitrition'],
  content: {
    es: {
      badge: 'Inteligencia Artificial / RAG & Automatización B2B',
      title: 'Asistentes Virtuales de IA con RAG y Automatización 24/7 para Empresas',
      shortDesc: 'Implementa un consultor de IA inteligente que responde preguntas complejas basándose estrictamente en tus documentos y tarifas reales. Cero alucinaciones, atención continua y captación de clientes.',
      heroLead: 'La mayoría de los chatbots tradicionales frustran a los usuarios con respuestas automáticas torpes. Desarrollo asistentes avanzados con arquitectura RAG (Generación Aumentada por Recuperación) que comprenden el lenguaje natural, consultan la base de conocimiento de tu empresa en milisegundos y transfieren al cliente cualificado directamente a tu WhatsApp.',
      metrics: [
        { value: '24/7', label: 'Disponibilidad ininterrumpida sin esperas' },
        { value: '0%', label: 'Alucinaciones de precios o datos falsos' },
        { value: '<500ms', label: 'Respuesta semántica en tiempo real' },
        { value: '100%', label: 'Privacidad RGPD y procesamiento seguro' },
      ],
      problemsSolved: [
        {
          title: 'Clientes potenciales que se van a la competencia por no recibir respuesta fuera de horario',
          desc: 'Las solicitudes que entran por la tarde, en fines de semana o festivos suelen tardar horas en responderse. Un asistente con IA atiende al visitante de inmediato, resuelve dudas técnicas o de precios y agenda la cita o llamada.',
        },
        {
          title: 'Miedo a que la inteligencia artificial invente datos o precios incorrectos',
          desc: 'Mediante la arquitectura RAG acotamos el modelo: la IA solo puede responder utilizando la información verificada de tus manuales, tarifas o catálogo. Si un dato no figura en la base de datos, el asistente deriva la consulta al equipo humano.',
        },
        {
          title: 'Equipos de atención saturados respondiendo siempre las mismas 20 preguntas',
          desc: 'Automatiza la resolución de dudas frecuentes, condiciones de envío, preparación previa a consultas médicas o requisitos documentales para liberar tiempo a tu personal.',
        },
      ],
      deliverables: [
        {
          title: 'Ingeniería de Base de Conocimiento y Vectores',
          items: [
            'Procesamiento y estructuración de la documentación de tu empresa (PDFs, fichas de producto, tarifas, preguntas frecuentes).',
            'Generación de índices vectoriales semánticos para recuperación de información en menos de 50 milisegundos.',
            'Reglas estrictas de seguridad (Guardrails) para impedir inyecciones de instrucciones o respuestas fuera de contexto.',
          ],
        },
        {
          title: 'Interfaz Web y Componentes Interactivos',
          items: [
            'Consola de chat moderna integrada con el diseño de tu web, compatible con ordenadores y móviles.',
            'Tarjetas visuales interactivas (comparativas de servicios, presupuestos estimados y selección de opciones).',
            'Botón de traspaso directo a WhatsApp que incluye un resumen previo de la consulta para tu comercial.',
          ],
        },
        {
          title: 'Privacidad y Cumplimiento Normativo (RGPD)',
          items: [
            'Procesamiento efímero en memoria volátil sin almacenamiento de datos personales sensibles.',
            'Cláusulas de privacidad específicas para asistentes virtuales conformes al Reglamento Europeo.',
          ],
        },
      ],
      workflowSteps: [
        {
          step: 'Fase 1',
          title: 'Recopilación de Documentos y Casos de Uso',
          desc: 'Reunimos los catálogos, normativas internas y preguntas más repetidas de tus clientes para alimentar el motor.',
        },
        {
          step: 'Fase 2',
          title: 'Entrenamiento del Índice Semántico y Pruebas',
          desc: 'Configuramos la búsqueda vectorial y realizamos pruebas intensivas para asegurar que las respuestas sean 100% exactas.',
        },
        {
          step: 'Fase 3',
          title: 'Integración en tu Sitio Web o CRM',
          desc: 'Incrustamos el componente de chat interactivo adaptado a los colores y tipografía de tu marca.',
        },
        {
          step: 'Fase 4',
          title: 'Lanzamiento y Ajuste Continuo',
          desc: 'Monitorizamos las interacciones de las primeras semanas para afinar el tono de comunicación y añadir nuevas respuestas.',
        },
      ],
      faqs: [
        {
          q: '¿Qué diferencia hay entre un chatbot clásico y un asistente con RAG?',
          a: 'Los chatbots clásicos funcionan con árboles de decisión rígidos (si el usuario dice A, responde B) y fallan ante frases complejas. El asistente con RAG comprende preguntas naturales en cualquier idioma y busca la respuesta exacta dentro de tus documentos reales.',
        },
        {
          q: '¿Es compatible con mi página web actual de WordPress, Shopify o Next.js?',
          a: 'Sí. El asistente se puede integrar en cualquier plataforma web moderna como un widget ligero o una consola dedicada sin ralentizar la velocidad de carga.',
        },
        {
          q: '¿Qué costes de consumo de IA tiene el asistente mes a mes?',
          a: 'Los costes de las APIs de lenguaje actuales (como OpenAI o Gemini) son extremadamente reducidos para una pyme: habitualmente entre 5€ y 20€ al mes para miles de consultas respondidas.',
        },
        {
          q: '¿Cumple con la normativa de protección de datos (RGPD)?',
          a: 'Totalmente. Configuramos el sistema para que no guarde historiales permanentes con datos confidenciales y utilizamos proveedores con garantías de cumplimiento del marco europeo de privacidad.',
        },
      ],
      ctaHeadline: '¿Quieres automatizar la atención a clientes y captar leads mientras duermes?',
      ctaLead: 'Escríbeme por WhatsApp. Te muestro una demostración interactiva de cómo funciona un asistente RAG adaptado a tu sector.',
      whatsappMessage: 'Hola Artur, me gustaría informarme sobre la implementación de un Asistente de IA con RAG para mi empresa.',
      schemaDescription: 'Servicio de desarrollo e integración de Asistentes Virtuales de IA con RAG para empresas y clínicas en España. Atención 24/7, cero alucinaciones y cumplimiento RGPD.',
    },
    en: {
      badge: 'Artificial Intelligence / B2B RAG & Automation',
      title: 'Custom RAG AI Assistants & 24/7 Automation Engines for Businesses',
      shortDesc: 'Deploy an intelligent AI consultant that answers complex customer questions strictly using your verified documents and price sheets. Zero hallucinations, 24/7 availability, and lead capture.',
      heroLead: 'Traditional chatbots frustrate visitors with robotic, repetitive menu trees. I engineer autonomous Retrieval-Augmented Generation (RAG) assistants that comprehend natural conversational language, query your business documents in milliseconds, and transfer qualified leads directly to your WhatsApp.',
      metrics: [
        { value: '24/7', label: 'Continuous customer qualification' },
        { value: '0%', label: 'Hallucinations or fabricated price data' },
        { value: '<500ms', label: 'Real-time semantic vector response' },
        { value: '100%', label: 'GDPR privacy compliance and safeguards' },
      ],
      problemsSolved: [
        {
          title: 'Prospective clients turning to competitors due to slow response times outside business hours',
          desc: 'Inquiries submitted during evenings, weekends, or holidays often sit unread for hours. A RAG assistant engages prospects instantly, addresses technical and pricing queries, and coordinates consultations.',
        },
        {
          title: 'Fear that artificial intelligence will fabricate false guarantees or inaccurate pricing',
          desc: 'RAG architecture establishes strict boundaries: the AI is grounded exclusively in verified manuals, pricing tiers, and service agreements. If requested data is missing, the assistant gracefully escalates to your team.',
        },
        {
          title: 'Customer support teams bogged down answering the same repetitive questions daily',
          desc: 'Automate resolution of recurring questions regarding service protocols, pre-appointment preparation, delivery windows, or document prerequisites to free your staff for high-value work.',
        },
      ],
      deliverables: [
        {
          title: 'Knowledge Base & Vector Index Engineering',
          items: [
            'Document ingestion and semantic chunking for business files (PDFs, product catalogs, pricing sheets, FAQs).',
            'Sub-50ms vector similarity retrieval with hybrid BM25 lexical keyword ranking.',
            'Strict safety guardrails preventing prompt injection and out-of-scope discussions.',
          ],
        },
        {
          title: 'Frontend Console & Interactive UI Components',
          items: [
            'Bespoke chat console styled to your brand aesthetics across mobile and desktop devices.',
            'Generative UI components (interactive service comparisons, budget calculators, and booking triggers).',
            '1-click handoff to WhatsApp with synthesized conversation context for your sales team.',
          ],
        },
        {
          title: 'European Privacy Compliance (GDPR)',
          items: [
            'Ephemeral in-memory query processing with zero permanent storage of sensitive customer data.',
            'Transparent privacy policy disclosures tailored for commercial AI assistants.',
          ],
        },
      ],
      workflowSteps: [
        {
          step: 'Phase 1',
          title: 'Knowledge Ingestion & Use Case Scoping',
          desc: 'We gather your service guidelines, catalogs, and top customer inquiries to build the factual grounding repository.',
        },
        {
          step: 'Phase 2',
          title: 'Vector Index Construction & Accuracy Tuning',
          desc: 'We configure embeddings, calibrate similarity thresholds, and run stress tests to ensure 100% factual fidelity.',
        },
        {
          step: 'Phase 3',
          title: 'Frontend Embed & CRM Integration',
          desc: 'We embed the chat console onto your website, perfectly styled to your company color palette and fonts.',
        },
        {
          step: 'Phase 4',
          title: 'Deployment & Continuous Optimization',
          desc: 'We monitor live interactions during the first month to refine conversational nuances and expand knowledge coverage.',
        },
      ],
      faqs: [
        {
          q: 'How does a RAG assistant differ from a traditional rule-based chatbot?',
          a: 'Rule-based chatbots rely on rigid if-else menu trees and break down when users type unexpected phrasing. RAG assistants understand semantic intent in any language and extract precise factual answers from your actual documents.',
        },
        {
          q: 'Is it compatible with my existing WordPress, Shopify, or Next.js website?',
          a: 'Yes. The assistant can be embedded into any modern website platform as a lightweight async widget or dedicated interactive page with zero impact on page load speed.',
        },
        {
          q: 'What are the ongoing monthly AI API costs?',
          a: 'Modern language model inference APIs (such as OpenAI or Google Gemini) are exceptionally economical: typically between €5 and €20 per month for thousands of client interactions.',
        },
        {
          q: 'Does this comply with European privacy regulations (GDPR)?',
          a: 'Yes. The system processes conversations in volatile memory without logging personal identifiable information and uses enterprise cloud providers operating under European data privacy agreements.',
        },
      ],
      ctaHeadline: 'Ready to capture and qualify leads around the clock?',
      ctaLead: 'Reach out on WhatsApp. I will give you a live demonstration of a RAG assistant customized for your industry.',
      whatsappMessage: 'Hi Artur, I would like to learn more about deploying a custom RAG AI Assistant for my business.',
      schemaDescription: 'Custom RAG AI Assistant and business automation development for companies and clinics in Spain. 24/7 client qualification, zero hallucinations, and GDPR compliance.',
    },
    ua: {
      badge: 'Штучний Інтелект / RAG & B2B Автоматизація',
      title: 'Корпоративні RAG AI-асистенти та цілодобова автоматизація для бізнесу',
      shortDesc: 'Впровадження розумного ІІ-консультанта, який відповідає на запитання клієнтів строго за вашими документами та реальними тарифами. 0% галюцинацій, цілодобова робота та кваліфікація лідів.',
      heroLead: 'Звичайні чат-боти дратують користувачів примітивними шаблонними відповідями. Я розробляю автономних асистентів з архітектурою RAG (Retrieval-Augmented Generation), які розуміють живу мову, миттєво знаходять інформацію у базі знань вашої компанії та передають готового гарячого клієнта у WhatsApp.',
      metrics: [
        { value: '24/7', label: 'Цілодобова робота без затримок і вихідних' },
        { value: '0%', label: 'Вигаданих цін чи неправдивих відповідей' },
        { value: '<500мс', label: 'Семантичний пошук та генерація в реальному часі' },
        { value: '100%', label: 'Безпека даних та відповідність GDPR' },
      ],
      problemsSolved: [
        {
          title: 'Клієнти йдуть до конкурентів через відсутність відповіді у неробочий час',
          desc: 'Запити, що надходять ввечері або у вихідні, часто чекають на менеджера до ранку. RAG-асистент миттєво вітає відвідувача, відповідає на технічні питання та фіксує контакт для зв\'язку.',
        },
        {
          title: 'Острах, що штучний інтелект вигадає неправильні ціни чи умови',
          desc: 'Завдяки архітектурі RAG модель обмежена суворими правилами: відповіді базуються виключно на ваших документах. Якщо інформації немає в базі, асистент чесно передає діалог менеджеру.',
        },
        {
          title: 'Співробітники перевантажені постійними відповідями на одні й ті самі питання',
          desc: 'Автоматизуйте консультації щодо графіку роботи, підготовки до медичних процедур, варіантів оплати чи доставки, щоб команда сфокусувалася на продажах.',
        },
      ],
      deliverables: [
        {
          title: 'Інженерія бази знань та векторного пошуку',
          items: [
            'Структурування та індексація матеріалів компанії (PDF-інструкції, прайс-листи, часті запитання).',
            'Гібридний векторний та лексичний пошук (BM25) з часом відповіді менше 50 мілісекунд.',
            'Захисні бар\'єри (Guardrails) проти сторонніх тем та спроб маніпуляції запитами.',
          ],
        },
        {
          title: 'Інтерфейс чату та інтерактивні елементи',
          items: [
            'Сучасна консоль діалогу, адаптована під фірмовий стиль вашого сайту для десктопу та смартфонів.',
            'Генеративні інтерактивні картки (калькулятор орієнтовної вартості, порівняння послуг).',
            'Кнопка швидкого переходу у WhatsApp із передачею контексту розмови менеджеру.',
          ],
        },
        {
          title: 'Конфіденційність та європейські стандарти (GDPR)',
          items: [
            'Ефемерна обробка запитів в оперативній пам\'яті без постійного збереження конфіденційної інформації.',
            'Прозорі юридичні положення щодо взаємодії з ІІ для сайту.',
          ],
        },
      ],
      workflowSteps: [
        {
          step: 'Фаза 1',
          title: 'Збір матеріалів та визначення сценаріїв',
          desc: 'Аналізуємо часті запитання клієнтів, тарифи та регламенти послуг для формування фактологічної бази знань.',
        },
        {
          step: 'Фаза 2',
          title: 'Створення векторного індексу та тестування',
          desc: 'Налаштовуємо точність пошуку та проводимо серію стрес-тестів для досягнення 100% відповідності фактів.',
        },
        {
          step: 'Фаза 3',
          title: 'Інтеграція у веб-сайт або CRM-систему',
          desc: 'Підключаємо віджет чату на сайт із повною адаптацією під дизайн-систему вашого бренду.',
        },
        {
          step: 'Фаза 4',
          title: 'Запуск та щотижневе калібрування',
          desc: 'Аналізуємо перші запити відвідувачів, доповнюємо базу знань новими відповідями та оптимізуємо конверсію.',
        },
      ],
      faqs: [
        {
          q: 'Чим RAG-асистент відрізняється від звичайного кнопкового чат-бота?',
          a: 'Звичайний бот працює за жорстким деревом кнопок і губиться, якщо користувач ставить нестандартне питання. RAG-асистент розуміє зміст живого тексту будь-якою мовою та знаходить точну відповідь у ваших документах.',
        },
        {
          q: 'Чи можна встановити асистента на мій існуючий сайт на WordPress або Shopify?',
          a: 'Так. Асистент легко інтегрується на будь-яку платформу у вигляді легкого скрипта без сповільнення швидкості відкриття сторінок.',
        },
        {
          q: 'Яка вартість використання API штучного інтелекту на місяць?',
          a: 'Сучасні тарифи OpenAI та Google Gemini є надзвичайно доступними: для типового бізнесу витрати на генерацію відповідей зазвичай становлять від 5€ до 20€ на місяць.',
        },
        {
          q: 'Чи безпечно це з точки зору збереження комерційної таємниці?',
          a: 'Так. Запити передаються через захищені протоколи корпоративних API, які не використовують дані клієнтів для навчання загальних моделей, відповідно до європейських вимог GDPR.',
        },
      ],
      ctaHeadline: 'Бажаєте кваліфікувати лідів та консультувати клієнтів 24/7?',
      ctaLead: 'Напишіть мені у WhatsApp. Продемонструю живий приклад роботи корпоративного RAG-асистента для вашої ніші.',
      whatsappMessage: 'Вітаю Артуре! Хочу дізнатися більше про впровадження RAG AI-асистента для мого бізнесу.',
      schemaDescription: 'Розробка та впровадження корпоративних RAG AI-асистентів для бізнесу та клінік в Іспанії та Європі. Цілодобова консультація, 0% галюцинацій та відповідність GDPR.',
    },
    de: {
      badge: 'Künstliche Intelligenz / B2B RAG & Automatisierung',
      title: 'Maßgeschneiderte RAG-KI-Assistenten & 24/7 Automatisierung für Unternehmen',
      shortDesc: 'Setzen Sie einen intelligenten KI-Berater ein, der Kundenfragen strikt anhand Ihrer verifizierten Dokumente und Preislisten beantwortet. Keine Halluzinationen, 24/7-Verfügbarkeit und direkte Lead-Qualifizierung.',
      heroLead: 'Klassische Chatbots frustrieren Besucher mit starren Menü-Bäumen. Ich entwickle autonome Retrieval-Augmented-Generation-Assistenten (RAG), die natürliche Sprache verstehen, Ihre Unternehmensdokumente in Millisekunden durchsuchen und qualifizierte Leads direkt per WhatsApp übergeben.',
      metrics: [
        { value: '24/7', label: 'Durchgehende Lead-Qualifizierung' },
        { value: '0%', label: 'Halluzinationen oder erfundene Preise' },
        { value: '<500ms', label: 'Semantische Vektor-Antwort in Echtzeit' },
        { value: '100%', label: 'DSGVO-Konformität & Datenschutz-Schutz' },
      ],
      problemsSolved: [
        {
          title: 'Potenzielle Kunden wandern zur Konkurrenz ab, wenn außerhalb der Geschäftszeiten niemand antwortet',
          desc: 'Abend- oder Wochenendanfragen bleiben oft stundenlang unbeantwortet. Ein RAG-Assistent begrüßt Interessenten sofort, beantwortet Fach- und Preisfragen und koordiniert direkt den Kontakt.',
        },
        {
          title: 'Sorge, dass die KI falsche Preise oder unhaltbare Versprechen erfindet',
          desc: 'Die RAG-Architektur setzt harte Grenzen: Alle Antworten stützen sich ausschließlich auf Ihre geprüften Handbücher, Preislisten und Leistungsbeschreibungen. Fehlt eine Information, eskaliert der Assistent sauber an Ihr Team.',
        },
        {
          title: 'Support-Teams verlieren täglich Stunden mit denselben Standardfragen',
          desc: 'Automatisieren Sie Auskünfte zu Abläufen, Terminvorbereitungen, Lieferfenstern oder Voraussetzungen - so gewinnt Ihr Team Zeit für wertschöpfende Beratungen.',
        },
      ],
      deliverables: [
        {
          title: 'Wissensdatenbank & Vektor-Index-Engineering',
          items: [
            'Aufbereitung und semantisches Chunking Ihrer Unternehmensunterlagen (PDFs, Produktkataloge, Preislisten, FAQs).',
            'Hybride Vektor-Ähnlichkeitssuche unter 50ms kombiniert mit lexikalischem BM25-Ranking.',
            'Strikte Sicherheits-Guardrails gegen Prompt-Injection und themenfremde Abschweifungen.',
          ],
        },
        {
          title: 'Frontend-Konsole & Interaktive UI-Komponenten',
          items: [
            'Maßgeschneiderte Chat-Oberfläche im Corporate Design Ihres Unternehmens für Desktop und Mobile.',
            'Generative UI-Karten (interaktive Stack-Vergleiche, Budget-Rechner und Termin-Trigger).',
            '1-Klick-Übergabe an WhatsApp inklusive zusammengefasstem Gesprächskontext für Ihr Vertriebsteam.',
          ],
        },
        {
          title: 'Europäischer Datenschutz (DSGVO / GDPR)',
          items: [
            'Flüchtige Verarbeitung im Arbeitsspeicher ohne dauerhafte Speicherung sensibler Kundendaten.',
            'Transparente Datenschutzhinweise speziell abgestimmt auf kommerzielle KI-Assistenten.',
          ],
        },
      ],
      workflowSteps: [
        {
          step: 'Phase 1',
          title: 'Wissensaufnahme & Anwendungsfall-Analyse',
          desc: 'Wir sammeln Ihre Leitfäden, Kataloge und häufigsten Kundenfragen als verlässliche Faktengrundlage.',
        },
        {
          step: 'Phase 2',
          title: 'Vektor-Index-Aufbau & Präzisions-Tuning',
          desc: 'Wir konfigurieren Embeddings, kalibrieren Schwellenwerte und testen die Faktentreue unter realen Szenarien auf 100%.',
        },
        {
          step: 'Phase 3',
          title: 'Frontend-Einbindung & CRM-Übergabe',
          desc: 'Wir integrieren die Chat-Konsole nahtlos in Farbschema und Typografie Ihrer bestehenden Website.',
        },
        {
          step: 'Phase 4',
          title: 'Go-Live & laufende Feinabstimmung',
          desc: 'Im ersten Monat werten wir echte Nutzeranfragen aus, um Nuancen zu verfeinern und die Wissensbasis gezielt zu erweitern.',
        },
      ],
      faqs: [
        {
          q: 'Wie unterscheidet sich ein RAG-Assistent von einem klassischen regelbasierten Chatbot?',
          a: 'Regelbasierte Bots folgen starren Entscheidungsbäumen und scheitern bei freien Formulierungen. Ein RAG-Assistent versteht echte Bedeutung in beliebigen Sprachen und zieht präzise Antworten direkt aus Ihren Dokumenten.',
        },
        {
          q: 'Lässt sich der Assistent in bestehende WordPress-, Shopify- oder Next.js-Websites integrieren?',
          a: 'Ja. Der Assistent wird als leichtgewichtiges Widget oder eigene interaktive Seite eingebettet - ohne die Ladezeit Ihrer Website zu beeinträchtigen.',
        },
        {
          q: 'Wie hoch sind die laufenden monatlichen KI-API-Kosten?',
          a: 'Moderne Sprachmodell-APIs (wie OpenAI oder Google Gemini) sind sehr kosteneffizient: Für typische Unternehmen liegen die API-Kosten bei etwa 5 bis 20 Euro pro Monat für Tausende Gespräche.',
        },
        {
          q: 'Entspricht diese Lösung dem europäischen Datenschutzrecht (DSGVO)?',
          a: 'Ja. Das System verarbeitet Gespräche flüchtig ohne dauerhafte Speicherung personenbezogener Daten und nutzt Enterprise-Schnittstellen unter europäischen Datenschutzvereinbarungen.',
        },
      ],
      ctaHeadline: 'Bereit, Leads rund um die Uhr automatisch zu qualifizieren?',
      ctaLead: 'Melden Sie sich per WhatsApp. Ich zeige Ihnen eine Live-Demonstration eines RAG-Assistenten abgestimmt auf Ihre Branche.',
      whatsappMessage: 'Hallo Artur, ich möchte mehr über die Einführung eines maßgeschneiderten RAG-KI-Assistenten für mein Unternehmen erfahren.',
      schemaDescription: 'Entwicklung maßgeschneiderter RAG-KI-Assistenten und Geschäftsautomatisierung für Unternehmen und Kliniken in Spanien und der EU. 24/7 Qualifizierung, keine Halluzinationen und DSGVO-konform.',
    },
  },
}
