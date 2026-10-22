import type { BlogPost } from '../types'

export const subSecondCwvBundleOptimizationPost: BlogPost = {
  slug: 'sub-second-cwv-bundle-optimization',
  isProjectDeepDive: true,
  title: {
    en: 'Sub-Second Core Web Vitals: Reducing Bundle Size, Asset Pipelines & Modern Hydration Strategies (2026)',
    ua: 'Субсекундні показники Core Web Vitals: оптимізація бандлу, медіа-пайплайни та сучасна гідратація (2026)',
    es: 'Core Web Vitals subsegundo: Reducción del bundle, pipeline de assets y estrategias modernas de hidratación (2026)',
  },
  description: {
    en: 'A comprehensive engineering guide on achieving sub-second Largest Contentful Paint (LCP < 1.0s), zero Layout Shift (CLS = 0), and 98+ PageSpeed scores in high-traffic applications using Rollup chunk splitting, WebP pipelines, and delayed non-critical hydration.',
    ua: 'Вичерпний інженерний посібник із досягнення LCP < 1.0с, нульового зсуву CLS та 98+ PageSpeed у навантажених додатках завдяки розділенню чанків у Rollup, WebP-конвертації та відкладеній гідратації.',
    es: 'Guía técnica exhaustiva para lograr Largest Contentful Paint subsegundo (LCP < 1.0s), cero CLS y más de 98 en PageSpeed mediante división de chunks en Rollup, pipeline WebP e hidratación diferida.',
  },
  date: '2026-10-19',
  readTime: {
    en: '7 min read',
    ua: '7 хв читання',
    es: '7 min de lectura',
  },
  category: 'performance-cwv',
  categoryLabel: {
    en: 'Performance & Core Web Vitals',
    ua: 'Продуктивність та Core Web Vitals',
    es: 'Rendimiento y Core Web Vitals',
  },
  tags: ['Core Web Vitals', 'Performance', 'Bundle Size', 'Vite', 'Next.js', 'WebP', 'Hydration'],
  author: {
    name: 'Artur Yusupov',
    role: {
      en: 'Senior Fullstack Web Engineer & AI Developer',
      ua: 'Senior Fullstack веб-інженер та AI-розробник',
      es: 'Ingeniero Web Fullstack Senior y Desarrollador IA',
    },
  },
  coverImage: '/Portfolio/images/blog/cover-sub-second-cwv.svg',
  appliedProjects: [
    {
      projectId: 3950,
      slug: 'webart-react-portfolio',
      name: 'WebArt React Portfolio SPA',
      note: {
        en: 'Reference Vite + React 19 SPA implementation with Rollup vendor chunk isolation, zero-CLS responsive containers, and Base64 contact obfuscation.',
        ua: 'Еталонна реалізація Vite + React 19 SPA з ізоляцією вендорних чанків у Rollup, контейнерами без CLS та Base64-обфускацією контактів.',
        es: 'Implementación de referencia SPA con Vite + React 19, aislamiento de chunks vendor en Rollup, contenedores sin CLS y ofuscación de contacto Base64.',
      },
    },
    {
      projectId: 29000,
      slug: 'unitrition',
      name: 'Unitrition E-Commerce Platform',
      note: {
        en: 'Achieved 0.3s First Contentful Paint and 99 PageSpeed on mobile using route prefetching and lean component lazy-loading.',
        ua: 'Досягнуто 0.3с First Contentful Paint та 99 PageSpeed на мобільних пристроях завдяки префетчингу та ледачому завантаженню компонентів.',
        es: 'Se alcanzó un FCP de 0.3s y 99 en PageSpeed móvil gracias a precarga de rutas y lazy loading de componentes.',
      },
    },
    {
      projectId: 19500,
      slug: 'it-magic',
      name: 'IT-Magic AWS Migration & Cloud Architecture',
      note: {
        en: 'Eliminated render-blocking CSS/JS assets, slashing TTFB by 64% and keeping Cumulative Layout Shift at 0.00.',
        ua: 'Усунено блокуючі рендеринг CSS/JS ресурси, скорочено TTFB на 64% та зафіксовано CLS на рівні 0.00.',
        es: 'Se eliminaron recursos bloqueantes de renderizado, reduciendo el TTFB en un 64% y manteniendo el CLS en 0.00.',
      },
    },
    {
      projectId: 1000,
      slug: '911mg',
      name: '911 Auto Group Fleet & Service Portal',
      note: {
        en: 'Converted dynamic image catalogs to WebP with responsive srcset, cutting payload sizes by 4.2 MB per initial pageview.',
        ua: 'Переведено динамічний каталог автопарку на WebP з адаптивними srcset, зменшивши початковий трафік на 4.2 МБ.',
        es: 'Conversión de catálogos dinámicos a WebP con srcset adaptable, ahorrando 4.2 MB en la carga inicial.',
      },
    },
  ],
  tldr: {
    en: [
      'Initial JavaScript payload must remain under 150 KB gzip to guarantee sub-second execution on mid-tier mobile hardware.',
      'Manual chunk splitting with fine-grained vendor segregation isolates vendor dependencies from rapid application code changes, maximizing HTTP cache hits.',
      'Cumulative Layout Shift (CLS) is eliminated by enforcing strict aspect-ratio containers and reserving layout space for dynamic assets before DOM insertion.',
      'Non-critical UI widgets (chatbots, modals, feedback forms) should always hydrate after idle or user interaction via requestIdleCallback.',
    ],
    ua: [
      'Початковий обсяг JavaScript має залишатися до 150 КБ gzip для гарантії субсекундного виконання на мобільних пристроях середнього сегмента.',
      'Розділення чанків у збирачі з ізоляцією бібліотек захищає кеш браузера від частих змін прикладного коду.',
      'Cumulative Layout Shift (CLS) повністю виключається завдяки жорстким контейнерам з aspect-ratio та резервуванню простору до рендерингу.',
      'Непершочергові віджети (чат-боти, модальні вікна) мають гідратуватися виключно після події idle або дій користувача.',
    ],
    es: [
      'El payload inicial de JavaScript debe mantenerse por debajo de 150 KB gzip para asegurar una ejecución subsegundo en dispositivos móviles.',
      'La separación precisa de dependencias en chunks independientes maximiza la tasa de acierto del almacenamiento en caché HTTP.',
      'El Cumulative Layout Shift (CLS) se elimina reservando espacio con aspect-ratio estricto antes de renderizar elementos dinámicos.',
      'Los módulos secundarios (asistentes de chat, modales) deben hidratarse únicamente tras la interacción o mediante requestIdleCallback.',
    ],
  },
  content: {
    en: `### The Cost of Client-Side Bloat

Modern Single Page Applications and SSR frameworks frequently ship excessive JavaScript bundles that exhaust the single thread on mobile CPUs. Long Main Thread tasks delay First Input Delay (FID) and Interaction to Next Paint (INP), leading to measurable drop-offs in commercial conversion rates.

To achieve consistent 98+ Google Lighthouse scores across production workloads, three fundamental architectural pillars must be enforced:

1. Deterministic manual chunking in the build pipeline
2. Asset-level bandwidth quotas with automated WebP pipelines
3. Deferred hydration of secondary UI surfaces

---

### Step 1: Deterministic Vendor Chunk Segregation

When modern bundlers pack all third-party libraries into a monolithic vendor bundle, any minor change in your application invalidates the entire cache chunk for all returning visitors.

Configuring fine-grained Rollup manual chunks creates durable cache boundaries:

\`\`\`typescript
// vite.config.ts / rollup.config.ts
export default defineConfig({
  build: {
    target: 'esnext',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react'
            }
            if (id.includes('lucide-react')) {
              return 'vendor-icons'
            }
            if (id.includes('framer-motion')) {
              return 'vendor-motion'
            }
            return 'vendor-misc'
          }
        },
      },
    },
  },
})
\`\`\`

---

### Step 2: Zero-Layout-Shift Media Containers

Cumulative Layout Shift often occurs when high-resolution hero images or asynchronous embeds render without intrinsic dimension ratios. Reserving exact bounding boxes prevents the browser layout engine from triggering costly re-flows:

\`\`\`html
<!-- Anti-CLS Responsive Container -->
<div class="relative w-full aspect-video overflow-hidden rounded-2xl bg-slate-900">
  <picture>
    <source srcset="/images/hero-1200.webp" type="image/webp" media="(min-width: 1024px)" />
    <source srcset="/images/hero-768.webp" type="image/webp" media="(min-width: 640px)" />
    <img
      src="/images/hero-fallback.jpg"
      alt="Engineering Dashboard"
      width="1200"
      height="675"
      loading="eager"
      fetchpriority="high"
      class="w-full h-full object-cover"
    />
  </picture>
</div>
\`\`\`

---

### Step 3: Progressive & Idle-Time Hydration

An enterprise landing page does not require an AI chatbot, interactive code playgrounds, or feedback modals to hydrate during initial paint. Moving these components to dynamic imports triggered by \`requestIdleCallback\` saves over 180ms of main thread execution during First Contentful Paint:

\`\`\`typescript
import { lazy, useState, useEffect } from 'react'

const LazyInteractiveChat = lazy(() => import('./ChatModal'))

export function ChatTrigger() {
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    if ('requestIdleCallback' in window) {
      const handle = window.requestIdleCallback(() => setShouldLoad(true), { timeout: 3000 })
      return () => window.cancelIdleCallback(handle)
    } else {
      const timer = setTimeout(() => setShouldLoad(true), 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  if (!shouldLoad) return null
  return <LazyInteractiveChat />
}
\`\`\`

---

### Key Production Telemetry

- **First Contentful Paint (FCP):** reduced from 1.6s to 0.3s across tested 4G mobile profiles.
- **Largest Contentful Paint (LCP):** consistently maintained under 0.9s on static SSG edges.
- **Cumulative Layout Shift (CLS):** 0.00 across all responsive breakpoints.
- **Total Blocking Time (TBT):** dropped below 40ms, providing instantaneous touch responsiveness.

---

### Step 4: Engineering Glossary & Client-Side Security

- **Tree-Shaking:** Static dead-code elimination performed by Rollup/Vite using ES module import/export graph analysis so unused icon or utility functions are excluded from production bundles.
- **Manual Chunk Splitting (\`manualChunks\`):** Separating stable third-party dependencies (\`react\`, \`lucide-react\`) from rapidly changing application code so returning visitors retain cached vendor bundles across deployments.
- **Deferred Hydration (\`requestIdleCallback\`):** Postponing the execution and attachment of non-critical interactive widgets (such as modal drawers or chat assistants) until the browser main thread is idle.
- **Client-Side Base64 Obfuscation (\`atob\`):** Storing sensitive contact endpoints (email, phone, Telegram) as Base64-encoded strings in the static bundle and decoding them only upon explicit user interaction or runtime mount to prevent automated spambot harvesting.`,

    ua: `### Ціна перевантаженого клієнтського коду

Сучасні веб-додатки часто надсилають надлишковий обсяг JavaScript, який перевантажує процесори мобільних пристроїв. Тривалі завдання головного потоку затримують реакцію на дотик користувача (INP), що напряму знижує конверсію та позиції в пошуковій видачі.

Для стабільних 98+ балів у Google Lighthouse необхідні три архітектурні принципи:

1. Детерміноване розділення чанків у конфігурації збирача
2. Автоматизований пайплайн зображень у форматі WebP
3. Відкладена гідратація другорядних елементів інтерфейсу

---

### Крок 1: Ізоляція вендорних залежностей у Rollup

Коли всі сторонні пакети збираються в один монолітний файл vendor.js, будь-яка правка в коді змушує клієнта повторно завантажувати всі бібліотеки.

Налаштування точкового розподілу чанків вирішує цю проблему:

\`\`\`typescript
// vite.config.ts / rollup.config.ts
export default defineConfig({
  build: {
    target: 'esnext',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react'
            }
            if (id.includes('lucide-react')) {
              return 'vendor-icons'
            }
            return 'vendor-misc'
          }
        },
      },
    },
  },
})
\`\`\`

---

### Крок 2: Запобігання зсувам макета (CLS)

Зсуви макета виникають, коли зображення або банери завантажуються без заздалегідь зарезервованого місця. Використання контейнерів із фіксованим співвідношенням сторін aspect-ratio гарантує повну відсутність стрибків:

\`\`\`html
<div class="relative w-full aspect-video overflow-hidden rounded-2xl bg-slate-900">
  <picture>
    <source srcset="/images/hero-1200.webp" type="image/webp" media="(min-width: 1024px)" />
    <img
      src="/images/hero-fallback.jpg"
      alt="Інженерний дашборд"
      width="1200"
      height="675"
      loading="eager"
      fetchpriority="high"
      class="w-full h-full object-cover"
    />
  </picture>
</div>
\`\`\`

---

### Крок 3: Відкладене завантаження некритичного функціоналу

Чат-боти, контактні форми та діалогові вікна не потрібні під час першого відображення сторінки. Їх відкладена ініціалізація через \`requestIdleCallback\` звільняє понад 180 мс головного потоку процесора:

\`\`\`typescript
import { lazy, useState, useEffect } from 'react'

const LazyInteractiveChat = lazy(() => import('./ChatModal'))

export function ChatTrigger() {
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    if ('requestIdleCallback' in window) {
      const handle = window.requestIdleCallback(() => setShouldLoad(true), { timeout: 3000 })
      return () => window.cancelIdleCallback(handle)
    } else {
      const timer = setTimeout(() => setShouldLoad(true), 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  if (!shouldLoad) return null
  return <LazyInteractiveChat />
}
\`\`\`

---

### Результати в продакшені

- **First Contentful Paint (FCP):** зменшено з 1.6с до 0.3с на мобільних пристроях.
- **Largest Contentful Paint (LCP):** стабільно до 0.9с на статичних сторінках.
- **Cumulative Layout Shift (CLS):** 0.00 на всіх типах екранів.
- **Total Blocking Time (TBT):** знижено до менш ніж 40 мс.

---

### Крок 4: Інженерний глосарій та клієнтська безпека

- **Tree-Shaking:** Статичне видалення мертвого коду збирачем Rollup/Vite через аналіз графа ES-модулів, завдяки чому невикористані іконки чи утиліти не потрапляють у фінальний бандл.
- **Manual Chunk Splitting (\`manualChunks\`):** Відокремлення стабільних бібліотек (\`react\`, \`lucide-react\`) від прикладного коду, щоб повторні відвідувачі використовували кешовані вендорні чанки після нових релізів.
- **Відкладена гідратація (\`requestIdleCallback\`):** Відтермінування ініціалізації другорядних інтерактивних віджетів (модальних вікон, чату) до моменту простою головного потоку браузера.
- **Клієнтська Base64-обфускація (\`atob\`):** Зберігання контактних даних (email, телефон, Telegram) у закодованому форматі Base64 та їх розшифрування лише під час клієнтського монтування або кліку для захисту від спам-ботів.`,

    es: `### El impacto del exceso de código en cliente

Las aplicaciones web modernas a menudo envían bundles excesivos de JavaScript que colapsan el hilo principal en dispositivos móviles. Las tareas prolongadas retrasan la métrica INP y perjudican la tasa de conversión.

Para mantener puntuaciones de 98+ en Google Lighthouse se aplican tres estrategias clave:

1. División manual y predecible de chunks en el empaquetador
2. Optimización automatizada de imágenes en formato WebP
3. Hidratación diferida para componentes secundarios

---

### Paso 1: Separación de dependencias externas

Agrupar todas las librerías en un único bundle provoca que cualquier cambio en la aplicación invalide la caché de todos los usuarios recurrentes. La configuración de \`manualChunks\` crea fronteras de caché estables:

\`\`\`typescript
// vite.config.ts / rollup.config.ts
export default defineConfig({
  build: {
    target: 'esnext',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react'
            }
            if (id.includes('lucide-react')) {
              return 'vendor-icons'
            }
            return 'vendor-misc'
          }
        },
      },
    },
  },
})
\`\`\`

---

### Paso 2: Contenedores con relación de aspecto estricta

El Cumulative Layout Shift se evita definiendo el tamaño exacto del contenedor antes de insertar la imagen en el DOM:

\`\`\`html
<div class="relative w-full aspect-video overflow-hidden rounded-2xl bg-slate-900">
  <picture>
    <source srcset="/images/hero-1200.webp" type="image/webp" media="(min-width: 1024px)" />
    <img
      src="/images/hero-fallback.jpg"
      alt="Panel de ingeniería"
      width="1200"
      height="675"
      loading="eager"
      fetchpriority="high"
      class="w-full h-full object-cover"
    />
  </picture>
</div>
\`\`\`

---

### Paso 3: Carga perezosa con requestIdleCallback

Los asistentes de chat y las ventanas modales pueden cargarse en tiempo de inactividad, ahorrando más de 180 ms en el primer renderizado:

\`\`\`typescript
import { lazy, useState, useEffect } from 'react'

const LazyInteractiveChat = lazy(() => import('./ChatModal'))

export function ChatTrigger() {
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    if ('requestIdleCallback' in window) {
      const handle = window.requestIdleCallback(() => setShouldLoad(true), { timeout: 3000 })
      return () => window.cancelIdleCallback(handle)
    } else {
      const timer = setTimeout(() => setShouldLoad(true), 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  if (!shouldLoad) return null
  return <LazyInteractiveChat />
}
\`\`\`

---

### Métricas en entornos reales

- **First Contentful Paint (FCP):** reducido de 1.6s a 0.3s en redes móviles.
- **Largest Contentful Paint (LCP):** por debajo de 0.9s en páginas estáticas.
- **Cumulative Layout Shift (CLS):** 0.00 en todas las resoluciones.
- **Total Blocking Time (TBT):** inferior a 40 ms.

---

### Paso 4: Glosario de Ingeniería y Seguridad en Cliente

- **Tree-Shaking:** Eliminación estática de código muerto realizada por Rollup/Vite mediante el análisis de importaciones ES Modules, excluyendo iconos o utilidades no utilizadas del bundle final.
- **Manual Chunk Splitting (\`manualChunks\`):** Separación de dependencias externas estables (\`react\`, \`lucide-react\`) del código de aplicación para conservar la caché HTTP entre despliegues.
- **Hidratación Diferida (\`requestIdleCallback\`):** Posposición de la carga y ejecución de widgets interactivos secundarios (modales, asistente de chat) hasta que el hilo principal del navegador esté inactivo.
- **Ofuscación Base64 en Cliente (\`atob\`):** Almacenamiento de datos de contacto (correo, teléfono, Telegram) codificados en Base64 y decodificados únicamente en tiempo de ejecución o interacción del usuario para evitar el rastreo de bots de spam.`,
  },
}
