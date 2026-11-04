import type { LegalPageData } from './types'
import { LEGAL_CONFIG } from './legalConfig'

export const privacyData: Record<'en' | 'ua' | 'es', LegalPageData> = {
  en: {
    badge: 'RGPD / EU Data Protection Regulation',
    title: 'Privacy Policy',
    subtitle: 'Transparent notice regarding personal data processing, analytics telemetry, and RAG AI Assistant usage.',
    lastUpdatedLabel: 'Last updated',
    lastUpdatedDate: LEGAL_CONFIG.lastUpdatedDate,
    sections: [
      {
        id: 'controller',
        title: '1. Data Controller Identification',
        paragraphs: [
          `The controller responsible for processing personal data collected through this website (https://www.yusupovartur.com) is Artur Yusupov, acting as an independent software engineer and technology consultant residing in ${LEGAL_CONFIG.location}.`,
          'Direct contact for privacy inquiries and the exercise of data protection rights can be performed via the verified contact channels provided on the website.',
        ],
      },
      {
        id: 'purposes',
        title: '2. Purposes of Data Processing & Legal Basis',
        paragraphs: [
          'Personal data is collected and processed under the provisions of Regulation (EU) 2016/679 (General Data Protection Regulation - GDPR) and Spanish Organic Law 3/2018 (LOPDGDD) for the following specific purposes:',
        ],
        bulletPoints: [
          'Professional Inquiries: Responding to direct inquiries, engineering project proposals, and professional correspondence initiated by the user (Legal basis: GDPR Art. 6(1)(b) - pre-contractual measures).',
          'Analytical Measurement: Aggregated, anonymized website traffic telemetry via Google Analytics 4, exclusively activated upon voluntary user consent (Legal basis: GDPR Art. 6(1)(a) and Spanish LSSI-CE Art. 22.2).',
          'Security & Anti-Abuse: Monitoring technical infrastructure, edge firewall rate-limiting, and preventing malicious automated attacks (Legal basis: GDPR Art. 6(1)(f) - legitimate interest in maintaining cybersecurity).',
        ],
      },
      {
        id: 'ai-assistant',
        title: '3. Autonomous RAG AI Assistant Processing Rules',
        paragraphs: [
          'This platform features an interactive in-browser and server-assisted Hybrid RAG (Retrieval-Augmented Generation) AI Assistant designed to answer technical questions regarding Artur Yusupov\'s engineering portfolio, stack architectures, and case studies.',
          'Crucial privacy and security standards governing the AI Assistant console:',
        ],
        bulletPoints: [
          'Ephemeral Processing: User questions and synthesized AI answers are processed ephemerally in volatile memory to stream answers in real time. No permanent database logging, conversational profiling, or training on user submissions is performed.',
          'Local-First Context: Session message history is retained strictly within the visitor\'s browser sessionStorage and is immediately wiped when clicking Clear Chat or closing the browsing session.',
          'Strict Prohibition of Sensitive Data: Visitors are expressly prohibited from submitting proprietary business trade secrets, third-party confidential credentials, health or medical data, or special categories of personal data (GDPR Art. 9) into the chat console.',
        ],
      },
      {
        id: 'recipients',
        title: '4. Data Recipients & International Transfers',
        paragraphs: [
          'Personal data is never sold, rented, or transferred to third parties for commercial or advertising purposes.',
          'Technical telemetry data collected through Google Analytics 4 is processed under the EU-US Data Privacy Framework with IP anonymization enabled. Hosting and static asset distribution are delivered via Vercel Edge Network and Cloudflare infrastructure with strict Content Security Policies (CSP).',
        ],
      },
      {
        id: 'retention',
        title: '5. Data Retention Periods',
        paragraphs: [
          'Contact inquiry details are retained only for the duration necessary to address the professional request and conclude relevant contractual discussions.',
          'Aggregated analytics telemetry cookies are retained for a maximum duration of 14-24 months or until consent is explicitly revoked by the user.',
        ],
      },
      {
        id: 'rights',
        title: '6. User Rights (ARSOPOL) & Supervisory Authority',
        paragraphs: [
          'Users hold the following rights under GDPR and LOPDGDD regarding their personal data: Right of Access, Rectification, Erasure (Right to be Forgotten), Restriction of Processing, Data Portability, and Objection.',
          'To exercise these rights, users may send a written request through the website\'s direct contact channels. If you consider that your data protection rights have been infringed, you also have the right to lodge a complaint with the Spanish Data Protection Agency (Agencia Española de Protección de Datos - AEPD) at www.aepd.es.',
        ],
      },
    ],
  },
  es: {
    badge: 'RGPD / Ley Orgánica de Protección de Datos (LOPDGDD)',
    title: 'Política de Privacidad',
    subtitle: 'Información transparente sobre el tratamiento de datos personales, telemetría analítica y uso del Asistente RAG IA.',
    lastUpdatedLabel: 'Última actualización',
    lastUpdatedDate: LEGAL_CONFIG.lastUpdatedDate,
    sections: [
      {
        id: 'controller',
        title: '1. Identificación del Responsable del Tratamiento',
        paragraphs: [
          `El responsable del tratamiento de los datos personales recogidos a través de este sitio web (https://www.yusupovartur.com) es Artur Yusupov, actuando como profesional independiente de ingeniería web y consultoría tecnológica residente en ${LEGAL_CONFIG.location}.`,
          'La comunicación para consultas de privacidad y ejercicio de derechos de protección de datos se realiza a través de los canales de contacto verificados disponibles en el sitio web.',
        ],
      },
      {
        id: 'purposes',
        title: '2. Finalidades del Tratamiento y Base Jurídica',
        paragraphs: [
          'Los datos personales se recogen y tratan conforme al Reglamento (UE) 2016/679 (Reglamento General de Protección de Datos - RGPD) y la Ley Orgánica 3/2018 (LOPDGDD) para las siguientes finalidades legítimas:',
        ],
        bulletPoints: [
          'Atención de Consultas Profesionales: Gestión de solicitudes de contacto, presupuestos de ingeniería web y correspondencia profesional iniciada por el usuario (Base jurídica: art. 6.1.b RGPD - aplicación de medidas precontractuales).',
          'Medición Analítica y Rendimiento: Telemetría agregada y anónima sobre el tráfico del sitio mediante Google Analytics 4, activada únicamente tras el consentimiento previo y explícito del usuario (Base jurídica: art. 6.1.a RGPD y art. 22.2 LSSI-CE).',
          'Seguridad y Prevención de Abusos: Monitorización de la infraestructura técnica, limitación de tasa contra ataques de denegación de servicio y protección de los sistemas (Base jurídica: art. 6.1.f RGPD - interés legítimo en la ciberseguridad).',
        ],
      },
      {
        id: 'ai-assistant',
        title: '3. Normativa de Tratamiento en el Asistente RAG IA',
        paragraphs: [
          'Este sitio web integra una consola interactiva de Asistente de IA con arquitectura Hybrid RAG (Retrieval-Augmented Generation) diseñada para responder preguntas técnicas sobre los proyectos, arquitecturas y casos de estudio del portfolio.',
          'Garantías estrictas de privacidad y seguridad aplicadas a la consola de IA:',
        ],
        bulletPoints: [
          'Tratamiento Efímero: Las preguntas del usuario y las respuestas sintetizadas por la IA se procesan de forma estrictamente efímera en memoria para generar la respuesta en streaming. No se realiza almacenamiento en bases de datos persistentes ni entrenamiento de modelos con las entradas del usuario.',
          'Almacenamiento Local de Sesión: El historial temporal de mensajes se mantiene únicamente en el almacenamiento local del navegador del visitante (sessionStorage) y se elimina de inmediato al pulsar "Limpiar chat" o cerrar la ventana de navegación.',
          'Prohibición de Datos Confidenciales o Médicos: Queda expresamente prohibido introducir secretos comerciales, claves de acceso confidenciales de terceros, datos de salud o categorías especiales de datos personales (art. 9 RGPD) en la consola de chat.',
        ],
      },
      {
        id: 'recipients',
        title: '4. Destinatarios y Transferencias Internacionales',
        paragraphs: [
          'Los datos personales de los usuarios no se venden, alquilan ni ceden a terceros para fines comerciales o publicitarios.',
          'Los datos de telemetría analítica de Google Analytics 4 se gestionan bajo el marco de privacidad UE-EE.UU. (Data Privacy Framework) con anonimización de direcciones IP. El alojamiento y distribución de recursos estáticos se realiza mediante la red perimetral de Vercel y Cloudflare con estrictas cabeceras de seguridad (CSP).',
        ],
      },
      {
        id: 'retention',
        title: '5. Plazos de Conservación de los Datos',
        paragraphs: [
          'Los datos facilitados en consultas de contacto se conservan durante el tiempo estrictamente necesario para atender la solicitud profesional y gestionar la relación precontractual o contractual.',
          'Las métricas analíticas de cookies se conservan durante un plazo máximo de 14-24 meses o hasta la revocación del consentimiento por parte del usuario.',
        ],
      },
      {
        id: 'rights',
        title: '6. Derechos del Usuario (ARSOPOL) y Reclamaciones ante la AEPD',
        paragraphs: [
          'El usuario puede ejercer en cualquier momento sus derechos de Acceso, Rectificación, Supresión (derecho al olvido), Limitación del tratamiento, Portabilidad y Oposición reconocidos por el RGPD y la LOPDGDD.',
          'Para ejercer estos derechos, puede remitir una comunicación a través de los canales directos del sitio web. Asimismo, tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) a través de su sede electrónica en www.aepd.es si considera vulnerados sus derechos.',
        ],
      },
    ],
  },
  ua: {
    badge: 'RGPD / Регламент захисту даних ЄС',
    title: 'Політика конфіденційності',
    subtitle: 'Прозора інформація про обробку персональних даних, аналітичну телеметрію та використання RAG AI-асистента.',
    lastUpdatedLabel: 'Останнє оновлення',
    lastUpdatedDate: LEGAL_CONFIG.lastUpdatedDate,
    sections: [
      {
        id: 'controller',
        title: '1. Ідентифікація володільця даних',
        paragraphs: [
          `Володільцем персональних даних, зібраних через цей веб-сайт (https://www.yusupovartur.com), є Артур Юсупов, який діє як незалежний веб-інженер та технологічний консультант, що проживає в ${LEGAL_CONFIG.location}.`,
          'Зв\'язок щодо питань конфіденційності та реалізації прав захисту даних здійснюється через верифіковані канали зв\'язку на сайті.',
        ],
      },
      {
        id: 'purposes',
        title: '2. Цілі обробки даних та правові підстави',
        paragraphs: [
          'Персональні дані обробляються відповідно до Регламенту (ЄС) 2016/679 (GDPR) та законодавства Королівства Іспанія (LOPDGDD) для таких конкретних цілей:',
        ],
        bulletPoints: [
          'Професійні запити: Обробка звернень щодо інженерних проєктів, співпраці та ділового листування (Правова підстава: ст. 6(1)(b) GDPR - переддоговірні заходи).',
          'Аналітика та продуктивність: Збір агрегованої знеособленої статистики через Google Analytics 4, що активується виключно після добровільної згоди відвідувача (Правова підстава: ст. 6(1)(a) GDPR та ст. 22.2 LSSI-CE).',
          'Безпека інфраструктури: Моніторинг технічного стану, запобігання спаму та DDoS-атакам (Правова підстава: ст. 6(1)(f) GDPR - законний інтерес у кібербезпеці).',
        ],
      },
      {
        id: 'ai-assistant',
        title: '3. Правила обробки запитів у RAG AI-асистенті',
        paragraphs: [
          'На платформі інтегровано автономну консоль Hybrid RAG (Retrieval-Augmented Generation) AI-асистента для надання технічних відповідей щодо портфоліо та архітектурних рішень.',
          'Ключові стандарти приватності консолі:',
        ],
        bulletPoints: [
          'Ефемерна обробка: Запити користувача та згенеровані відповіді обробляються виключно в оперативній пам\'яті в режимі реального часу. Жодні діалоги не записуються до постійних баз даних.',
          'Локальна історія: Тимчасова історія повідомлень зберігається виключно у браузері відвідувача (sessionStorage) і повністю очищається при натисканні "Очистити чат" або закритті вкладки.',
          'Заборона конфіденційних даних: Відвідувачам суворо заборонено вводити комерційні таємниці, конфіденційні паролі третіх осіб або медичні дані спеціальних категорій (ст. 9 GDPR).',
        ],
      },
      {
        id: 'recipients',
        title: '4. Одержувачі даних та міжнародні передачі',
        paragraphs: [
          'Персональні дані за жодних обставин не продаються і не передаються третім особам у маркетингових цілях.',
          'Збір аналітики Google Analytics 4 регулюється рамкою конфіденційності EU-US Data Privacy Framework з увімкненою анонімізацією IP-адрес.',
        ],
      },
      {
        id: 'retention',
        title: '5. Терміни зберігання даних',
        paragraphs: [
          'Дані прямих звернень зберігаються лише протягом періоду, необхідного для надання відповіді на запит та реалізації взаємодії.',
          'Аналітичні cookie-файли зберігаються не більше 14-24 місяців або до моменту відкликання згоди користувачем.',
        ],
      },
      {
        id: 'rights',
        title: '6. Права користувачів (ARSOPOL) та скарги до AEPD',
        paragraphs: [
          'Користувачі мають право на доступ до своїх даних, виправлення, видалення ("право бути забутим"), обмеження обробки та перенесення даних відповідно до норм GDPR.',
          'Для реалізації прав можна надіслати запит через прямі канали зв\'язку сайту, а також звернутися зі скаргою до Іспанського агентства захисту даних (AEPD, www.aepd.es).',
        ],
      },
    ],
  },
}
