import type { CookiePolicyPageData } from './types'
import { LEGAL_CONFIG } from './legalConfig'

export const cookiePolicyData: Record<'en' | 'ua' | 'es', CookiePolicyPageData> = {
  en: {
    badge: 'LSSI-CE Art. 22.2 & AEPD Guide',
    title: 'Cookie Policy',
    subtitle: 'Detailed information regarding the use of cookies, local storage identifiers, and Google Consent Mode v2 on this website.',
    lastUpdatedLabel: 'Last updated',
    lastUpdatedDate: LEGAL_CONFIG.lastUpdatedDate,
    interactiveSettingsLabel: 'Your Preferences & Cookie Management',
    interactiveSettingsDesc: 'You can review, grant, or revoke your consent for analytical cookies at any time using our interactive settings panel.',
    openSettingsBtn: 'Open Cookie Settings',
    tableHeaders: {
      cookie: 'Name / Key',
      provider: 'Provider',
      purpose: 'Technical Purpose',
      expiry: 'Duration',
      type: 'Category',
    },
    tableRows: [
      {
        cookie: 'cookie_consent',
        provider: 'yusupovartur.com (First Party)',
        purpose: 'Stores the visitor consent state (granted or denied) to comply with European privacy directives.',
        expiry: '24 months',
        type: 'Strictly Necessary',
      },
      {
        cookie: 'portfolio_theme',
        provider: 'yusupovartur.com (First Party)',
        purpose: 'Stores user visual theme preference (dark mode or light mode).',
        expiry: 'Persistent (Local Storage)',
        type: 'Technical / Functional',
      },
      {
        cookie: 'portfolio_lang',
        provider: 'yusupovartur.com (First Party)',
        purpose: 'Preserves the visitor chosen language navigation (English, Spanish, Ukrainian).',
        expiry: 'Persistent (Local Storage)',
        type: 'Technical / Functional',
      },
      {
        cookie: '_ga, _ga_*',
        provider: 'Google Ireland Ltd. / Google LLC',
        purpose: 'Aggregated statistical metrics of visitor interactions, bounce rates, and traffic sources via Google Analytics 4.',
        expiry: '24 months / 24 hours',
        type: 'Analytical (Requires Consent)',
      },
    ],
    sections: [
      {
        id: 'what-are-cookies',
        title: '1. What Are Cookies and Local Storage Identifiers?',
        paragraphs: [
          'A cookie is a small text file downloaded to your computer or mobile device when you access certain web pages. Cookies allow a website to recognize a device, track navigation preferences, and enhance browsing performance.',
          'In addition to HTTP cookies, modern web architectures may use HTML5 Local Storage to persist UI preferences (such as color themes or chosen interface language) directly inside your web browser without sending data across network requests.',
        ],
      },
      {
        id: 'consent-mode-v2',
        title: '2. Google Consent Mode v2 Basic Implementation',
        paragraphs: [
          'This portfolio strictly adheres to the Spanish AEPD Guidelines on Cookies and the European Union Digital Markets Act (DMA) through Google Consent Mode v2 in its Basic implementation architecture.',
          'Under this privacy-first setup, Google Analytics 4 tags are strictly blocked from loading or executing until you explicitly grant consent through our consent banner. If you reject analytics cookies, no measurement tags are executed and no tracking cookies are created on your device.',
        ],
      },
      {
        id: 'browser-management',
        title: '3. How to Disable or Delete Cookies in Your Browser',
        paragraphs: [
          'You can allow, block, or delete cookies installed on your computer by configuring the settings of the web browser installed on your computer:',
        ],
        bulletPoints: [
          'Google Chrome: Settings > Privacy and security > Third-party cookies.',
          'Mozilla Firefox: Settings > Privacy & Security > Cookies and Site Data.',
          'Apple Safari: Preferences > Privacy > Block all cookies.',
          'Microsoft Edge: Settings > Cookies and site permissions > Manage and delete cookies.',
        ],
      },
      {
        id: 'updates',
        title: '4. Policy Updates and Inquiries',
        paragraphs: [
          'This Cookie Policy may be revised when required by legislative updates or modifications in the technical architecture of this site. We recommend reviewing this document periodically.',
        ],
      },
    ],
  },
  es: {
    badge: 'Art. 22.2 LSSI-CE y Guía de la AEPD',
    title: 'Política de Cookies',
    subtitle: 'Información transparente y detallada sobre el uso de cookies, almacenamiento local y Google Consent Mode v2 en este sitio web.',
    lastUpdatedLabel: 'Última actualización',
    lastUpdatedDate: LEGAL_CONFIG.lastUpdatedDate,
    interactiveSettingsLabel: 'Gestión de Preferencias y Consentimiento',
    interactiveSettingsDesc: 'Puedes revisar, conceder o retirar tu consentimiento para las cookies analíticas en cualquier momento mediante nuestro panel interactivo.',
    openSettingsBtn: 'Configurar Cookies',
    tableHeaders: {
      cookie: 'Nombre / Clave',
      provider: 'Proveedor',
      purpose: 'Finalidad Técnica',
      expiry: 'Duración',
      type: 'Tipología',
    },
    tableRows: [
      {
        cookie: 'cookie_consent',
        provider: 'yusupovartur.com (Propia)',
        purpose: 'Almacena el estado de consentimiento (concedido o denegado) para cumplir con las directrices de la AEPD.',
        expiry: '24 meses',
        type: 'Técnica / Necesaria',
      },
      {
        cookie: 'portfolio_theme',
        provider: 'yusupovartur.com (Propia)',
        purpose: 'Registra la preferencia estética del usuario (modo oscuro o modo claro).',
        expiry: 'Persistente (Almacenamiento Local)',
        type: 'Técnica / Preferencias',
      },
      {
        cookie: 'portfolio_lang',
        provider: 'yusupovartur.com (Propia)',
        purpose: 'Conserva el idioma seleccionado de navegación (español, inglés, ucraniano).',
        expiry: 'Persistente (Almacenamiento Local)',
        type: 'Técnica / Preferencias',
      },
      {
        cookie: '_ga, _ga_*',
        provider: 'Google Ireland Ltd. / Google LLC',
        purpose: 'Medición estadística agregada de páginas visitadas y rendimiento técnico mediante Google Analytics 4.',
        expiry: '24 meses / 24 horas',
        type: 'Analítica (Requiere Consentimiento)',
      },
    ],
    sections: [
      {
        id: 'what-are-cookies',
        title: '1. ¿Qué son las Cookies y los Identificadores Locales?',
        paragraphs: [
          'Una cookie es un fichero de texto que se descarga en su dispositivo al acceder a determinadas páginas web. Permite a un sitio web almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo.',
          'Además de las cookies convencionales, este sitio web utiliza almacenamiento local HTML5 (Local Storage) para preservar opciones de interfaz (como el tema visual o el idioma preferido) directamente en su navegador sin transmitir información a través de las cabeceras HTTP.',
        ],
      },
      {
        id: 'consent-mode-v2',
        title: '2. Arquitectura Google Consent Mode v2 Basic',
        paragraphs: [
          'Este sitio web cumple con las directrices de la Agencia Española de Protección de Datos (AEPD) y el Reglamento General de Protección de Datos mediante el estándar Google Consent Mode v2 en modalidad Basic.',
          'Bajo esta configuración estricta, las etiquetas de Google Analytics 4 no se cargan ni se ejecutan en el navegador hasta que usted otorgue explícitamente su consentimiento voluntario en el banner. Si usted pulsa Rechazar, no se envía ninguna telemetría ni se instalan cookies analíticas en su terminal.',
        ],
      },
      {
        id: 'browser-management',
        title: '3. Cómo Desactivar o Eliminar Cookies desde el Navegador',
        paragraphs: [
          'Usted puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador:',
        ],
        bulletPoints: [
          'Google Chrome: Configuración > Privacidad y seguridad > Cookies de terceros.',
          'Mozilla Firefox: Ajustes > Privacidad y Seguridad > Cookies y datos del sitio.',
          'Apple Safari: Preferencias > Privacidad > Bloquear todas las cookies.',
          'Microsoft Edge: Configuración > Permisos del sitio y cookies > Administrar y eliminar cookies.',
        ],
      },
      {
        id: 'updates',
        title: '4. Actualización de la Política de Cookies',
        paragraphs: [
          'Esta Política de Cookies puede ser modificada en función de exigencias legislativas, reglamentarias o por instrucciones de la AEPD. Se aconseja a los usuarios visitarla periódicamente.',
        ],
      },
    ],
  },
  ua: {
    badge: 'Директива ePrivacy & AEPD',
    title: 'Політика використання файлів cookie',
    subtitle: 'Детальна інформація про застосування файлів cookie, локального сховища та Google Consent Mode v2 на цьому веб-сайті.',
    lastUpdatedLabel: 'Останнє оновлення',
    lastUpdatedDate: LEGAL_CONFIG.lastUpdatedDate,
    interactiveSettingsLabel: 'Керування параметрами конфіденційності',
    interactiveSettingsDesc: 'Ви можете будь-якої миті переглянути, надати або відкликати свою згоду на використання аналітичних файлів cookie за допомогою нашої панелі налаштувань.',
    openSettingsBtn: 'Налаштувати cookies',
    tableHeaders: {
      cookie: 'Назва / Ключ',
      provider: 'Провайдер',
      purpose: 'Технічне призначення',
      expiry: 'Термін дії',
      type: 'Категорія',
    },
    tableRows: [
      {
        cookie: 'cookie_consent',
        provider: 'yusupovartur.com (Власні)',
        purpose: 'Зберігає вибір користувача щодо згоди (надано або відхилено) відповідно до європейських вимог.',
        expiry: '24 місяці',
        type: 'Технічні / Обов\'язкові',
      },
      {
        cookie: 'portfolio_theme',
        provider: 'yusupovartur.com (Власні)',
        purpose: 'Зберігає вибрану тему оформлення (темна або світла).',
        expiry: 'Постійно (Local Storage)',
        type: 'Технічні / Функціональні',
      },
      {
        cookie: 'portfolio_lang',
        provider: 'yusupovartur.com (Власні)',
        purpose: 'Зберігає обрану мову інтерфейсу (англійська, іспанська, українська).',
        expiry: 'Постійно (Local Storage)',
        type: 'Технічні / Функціональні',
      },
      {
        cookie: '_ga, _ga_*',
        provider: 'Google Ireland Ltd. / Google LLC',
        purpose: 'Агрегована статистична аналітика відвідуваності та взаємодії через Google Analytics 4.',
        expiry: '24 місяці / 24 години',
        type: 'Аналітичні (Вимагають згоди)',
      },
    ],
    sections: [
      {
        id: 'what-are-cookies',
        title: '1. Що таке файли cookie та локальне сховище?',
        paragraphs: [
          'Файл cookie - це невеликий текстовий файл, який зберігається на вашому комп\'ютері або мобільному пристрої під час перегляду сайтів. Cookie допомагають запам\'ятовувати налаштування та оптимізувати роботу сайту.',
          'Окрім стандартних cookie, цей сайт використовує HTML5 Local Storage для збереження візуальних уподобань (тема та мова інтерфейсу) безпосередньо у вашому браузері без передачі через мережеві заголовки.',
        ],
      },
      {
        id: 'consent-mode-v2',
        title: '2. Архітектура Google Consent Mode v2 Basic',
        paragraphs: [
          'Веб-сайт суворо дотримується європейських правил захисту даних за допомогою стандарту Google Consent Mode v2 у конфігурації Basic.',
          'Скрипти Google Analytics 4 не завантажуються і не активуються, доки ви не надасте добровільну згоду у відповідному банері. Якщо ви натискаєте Відхилити, аналітичні теги не виконуються і жодні аналітичні cookie не створюються.',
        ],
      },
      {
        id: 'browser-management',
        title: '3. Як вимкнути або видалити файли cookie у браузері',
        paragraphs: [
          'Ви можете будь-коли заблокувати або очистити файли cookie у параметрах вашого браузера:',
        ],
        bulletPoints: [
          'Google Chrome: Налаштування > Конфіденційність і безпека > Сторонні файли cookie.',
          'Mozilla Firefox: Налаштування > Приватність і безпека > Файли cookie та дані сайтів.',
          'Apple Safari: Параметри > Конфіденційність > Блокувати всі файли cookie.',
          'Microsoft Edge: Налаштування > Дозволи для сайтів і файли cookie.',
        ],
      },
      {
        id: 'updates',
        title: '4. Оновлення політики та контакти',
        paragraphs: [
          'Ця Політика використання файлів cookie може періодично оновлюватися у зв\'язку зі змінами у законодавстві або структурі сайту.',
        ],
      },
    ],
  },
}
