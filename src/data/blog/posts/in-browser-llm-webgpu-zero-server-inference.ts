import type { BlogPost } from '../types'

export const inBrowserLlmWebGpuPost: BlogPost = {
  slug: 'in-browser-llm-webgpu-zero-server-inference',
  title: {
    en: 'Local-First In-Browser LLMs via WebGPU: Zero-Server Privacy-Preserving Inference in Modern Web Apps',
    ua: 'Local-First LLM у браузері через WebGPU: інференс без серверів та повна приватність у веб-застосунках',
    es: 'LLMs locales en el navegador mediante WebGPU: inferencia sin servidores y privacidad total en aplicaciones web',
  },
  description: {
    en: 'An architectural deep-dive on running quantized 1B-3B parameter Large Language Models (Llama 3.2, Gemma 2, SmolLM2) directly inside client web browsers using WebGPU, Transformers.js v3, and ONNX Runtime Web. Zero hosting costs, 100% offline capability, zero data exfiltration, and sub-second token streaming.',
    ua: 'Глибокий інженерний розбір запуску квантованих мовних моделей на 1B-3B параметрів (Llama 3.2, Gemma 2, SmolLM2) безпосередньо у браузері клієнта через WebGPU, Transformers.js v3 та ONNX Runtime Web: нульові витрати на серверний інференс та повна конфіденційність.',
    es: 'Análisis arquitectónico sobre la ejecución de modelos de lenguaje cuantizados de 1B-3B parámetros (Llama 3.2, Gemma 2, SmolLM2) directamente en el navegador del cliente mediante WebGPU, Transformers.js v3 y ONNX Runtime Web: coste cero de servidores y privacidad absoluta.',
  },
  date: '2026-11-12',
  readTime: {
    en: '10 min read',
    ua: '10 хв читання',
    es: '10 min de lectura',
  },
  category: 'ai-rag',
  categoryLabel: {
    en: 'AI & RAG Engineering',
    ua: 'AI та RAG-інженерія',
    es: 'Ingeniería de IA y RAG',
  },
  tags: ['WebGPU', 'Local LLM', 'Transformers.js', 'ONNX Runtime', 'React 19', 'Edge AI', 'Privacy', 'Llama 3.2'],
  author: {
    name: 'Artur Yusupov',
    role: {
      en: 'Fullstack Web Engineer & AI Developer',
      ua: 'Fullstack веб-інженер та AI-розробник',
      es: 'Ingeniero Web Fullstack y Desarrollador IA',
    },
  },
  coverImage: '/Portfolio/images/blog/cover-webgpu-in-browser-llm.svg',
  appliedProjects: [
    {
      projectId: 29500,
      slug: 'yusupovartur-nextjs-portfolio',
      name: 'Next.js 16 & Hybrid RAG Portfolio Platform',
      note: {
        en: 'Employs client-side in-browser semantic vector retrieval with cosine similarity calculation and offline knowledge matching.',
        ua: 'Використовує клієнтський браузерний семантичний векторний пошук із розрахунком косинусної подібності та офлайн-базою знань.',
        es: 'Implementa búsqueda vectorial semántica en el navegador con cálculo de similitud coseno y base de conocimiento offline.',
      },
    },
    {
      projectId: 28500,
      slug: 'fullstack-ai-lab',
      name: 'Fullstack AI Lab',
      note: {
        en: 'Features interactive client-side WebGPU neural network playgrounds running zero-server token generation and live parameter adjustments.',
        ua: 'Містить інтерактивні браузерні пісочниці нейромереж на WebGPU із генерацією токенів без серверів та живим налаштуванням параметрів.',
        es: 'Ofrece entornos de experimentación con redes neuronales sobre WebGPU sin servidores y ajuste de hiperparámetros en tiempo real.',
      },
    },
    {
      projectId: 14500,
      slug: 'alldaymedicalcare',
      name: 'All Day Medical Care Clinic',
      note: {
        en: 'Researched zero-exfiltration healthcare architectures where patient symptoms are analyzed strictly on-device to ensure HIPAA compliance.',
        ua: 'Дослідницька архітектура для медичних даних із нульовим витоком інформації, де аналіз симптомів виконується локально на пристрої пацієнта.',
        es: 'Arquitectura médica con cero exfiltración de datos donde el análisis de síntomas se procesa localmente en el dispositivo para garantizar HIPAA.',
      },
    },
  ],
  tldr: {
    en: [
      'Cloud-hosted LLMs introduce significant hosting costs, unpredictable API latency, and data privacy vulnerabilities for sensitive consumer inputs.',
      'WebGPU provides direct client hardware GPU access via compute shaders (WGSL), delivering up to 35 tokens per second on consumer laptops and mobile devices.',
      'Modern 1B to 3B parameter models (such as Llama 3.2 1B and SmolLM2) quantized to 4-bit precision (q4f16) require less than 700MB of storage.',
      'Isolating model execution inside a dedicated Web Worker guarantees that the main thread maintains a buttery 60 FPS user interface during continuous streaming.',
    ],
    ua: [
      'Хмарні LLM спричиняють високі витрати на хостинг, непередбачувану мережеву затримку та ризики витоку конфіденційних даних клієнтів.',
      'WebGPU надає прямий доступ до апаратного прискорювача (GPU) через обчислювальні шейдери (WGSL), забезпечуючи швидкість до 35 токенів на секунду.',
      'Сучасні моделі на 1B-3B параметрів (Llama 3.2 1B, SmolLM2), квантовані до 4 біт (q4f16), займають менше 700 МБ пам яті при високій точності.',
      'Ізоляція виконання моделі у Web Worker гарантує стабільні 60 FPS інтерфейсу без підвисань під час потокової генерації відповіді.',
    ],
    es: [
      'Los LLMs en la nube implican elevados costes de infraestructura, latencia de red variable y riesgos de privacidad con datos sensibles.',
      'WebGPU permite acceder directamente a la GPU del cliente mediante compute shaders (WGSL), alcanzando hasta 35 tokens por segundo en dispositivos de consumo.',
      'Los modelos modernos de 1B a 3B parámetros (Llama 3.2 1B, SmolLM2) cuantizados a 4 bits (q4f16) requieren menos de 700MB de almacenamiento.',
      'Aislar el cómputo en un Web Worker dedicado asegura que la interfaz de usuario en React se mantenga fluida a 60 FPS durante la generación.',
    ],
  },
  content: {
    en: `
### 1. The Paradigm Shift: Why Local-First AI Matters

For the past three years, the default AI engineering pattern has been centralized cloud inference: the client sends sensitive user prompts over HTTPS to an external API (OpenAI, Anthropic, or cloud GPU clusters), waits for the network roundtrip, and streams back tokens.

In 2026, three major forces are accelerating the transition to **local-first, in-browser AI**:

1. **Zero Server Inference Costs:** Once an application is downloaded, running inference on client hardware costs the developer exactly $0.00 in cloud GPU compute.
2. **Absolute Data Privacy:** For regulated sectors (such as healthcare under HIPAA, or EU enterprises under GDPR), sensitive user health data, proprietary financial documents, or personal notes never traverse the public internet.
3. **Offline Resilience:** PWAs equipped with local models function flawlessly on airplanes, remote field operations, or during network disruptions.

---

### 2. WebGPU vs WebGL: The Technical Leap

Previous browser machine learning frameworks relied on WebGL, which forced developers to disguise general-purpose matrix operations as 2D pixel rendering shaders.

\`\`\`
WebGL (Legacy ML Hack)          vs          WebGPU (Modern Compute Native)
┌─────────────────────────┐                 ┌─────────────────────────┐
│ Fragment Shaders        │                 │ Pure Compute Shaders    │
│ Textures as Arrays      │                 │ Direct Memory Buffers   │
│ CPU-GPU sync overhead   │                 │ Async Command Encoders  │
│ Max 8-12 tokens/sec     │                 │ 35-50+ tokens/sec (f16) │
└─────────────────────────┘                 └─────────────────────────┘
\`\`\`

WebGPU introduces native **Compute Shaders** written in WGSL (WebGPU Shading Language), full support for 16-bit floating-point math (\`f16\`), and zero-overhead memory mapped buffers directly aligned with hardware execution on Apple Metal, DirectX 12, and Vulkan.

---

### 3. Loading Quantized Models with Transformers.js v3

Thanks to advances in quantization (AWQ and GGUF/ONNX), state-of-the-art small language models like **Meta Llama 3.2 1B** and **HuggingFace SmolLM2** can be compressed down to 600MB - 800MB without significant degradation in conversational reasoning.

\`\`\`typescript
// src/lib/ai/local-llm-engine.ts
import { pipeline, env } from '@huggingface/transformers';

// Configure WebGPU backend and local weight persistence
env.backends.onnx.wasm.proxy = true;

export interface GenerationProgress {
  status: 'loading' | 'ready' | 'generating';
  progress?: number;
  tokensPerSec?: number;
}

export async function initializeLocalLLM(onProgress?: (p: GenerationProgress) => void) {
  // Check if browser supports WebGPU
  if (!navigator.gpu) {
    throw new Error('WebGPU is not supported in this browser. Fallback to Cloud API.');
  }

  onProgress?.({ status: 'loading', progress: 0 });

  // Load 4-bit quantized Llama 3.2 1B Instruct
  const generator = await pipeline(
    'text-generation',
    'onnx-community/Llama-3.2-1B-Instruct',
    {
      device: 'webgpu',
      dtype: 'q4f16', // 4-bit weights with 16-bit float activation math
      progress_callback: (info: any) => {
        if (info.status === 'progress') {
          onProgress?.({ status: 'loading', progress: Math.round(info.progress || 0) });
        }
      },
    }
  );

  onProgress?.({ status: 'ready' });
  return generator;
}
\`\`\`

---

### 4. Web Worker Isolation: Keeping UI at 60 FPS

Running matrix multiplications on the main thread will instantly freeze the browser UI, causing noticeable scrolling jank and dropped frames. To avoid this, model execution must be strictly isolated within a dedicated Web Worker:

\`\`\`typescript
// worker/llm-worker.ts
import { initializeLocalLLM } from '../src/lib/ai/local-llm-engine';

let generator: any = null;

self.onmessage = async (e: MessageEvent) => {
  const { type, payload } = e.data;

  if (type === 'INIT') {
    generator = await initializeLocalLLM((p) => self.postMessage({ type: 'STATUS', payload: p }));
    self.postMessage({ type: 'READY' });
  }

  if (type === 'GENERATE') {
    const { messages, maxTokens = 512 } = payload;
    let startTime = performance.now();
    let tokenCount = 0;

    const output = await generator(messages, {
      max_new_tokens: maxTokens,
      temperature: 0.3,
      streamer: {
        put: (tokens: any) => {
          tokenCount++;
          self.postMessage({ type: 'TOKEN', payload: tokens });
        },
        end: () => {
          const elapsed = (performance.now() - startTime) / 1000;
          self.postMessage({
            type: 'COMPLETE',
            payload: { tokensPerSec: Math.round(tokenCount / elapsed) },
          });
        },
      },
    });
  }
};
\`\`\`

---

### 5. Persistent Caching via Origin Private File System (OPFS)

Downloading a 650MB model on every page visit would ruin user retention. Modern browsers support the **Origin Private File System (OPFS)** and the **Cache API**, allowing model weights to be fetched once and stored indefinitely in client disk storage:

\`\`\`typescript
// Check if model weights are already cached locally
export async function isModelCachedLocally(modelId: string): Promise<boolean> {
  const cacheNames = await caches.keys();
  for (const name of cacheNames) {
    if (name.includes(modelId)) return true;
  }
  return false;
}
\`\`\`

---

### 6. Hybrid Fallback Architecture

In production environments, a robust web application should never assume 100% WebGPU availability. The recommended architectural pattern is a **Smart Hybrid Fallback**:

\`\`\`
User Query
    │
    ▼
Does browser support WebGPU?
   ├── YES ──> Check device memory (> 4GB RAM)
   │               ├── YES ──> In-Browser Local LLM ($0.00 cost, 100% private)
   │               └── NO  ──> Fallback to Cloud RAG API (Gemini / Claude)
   └── NO  ──> Fallback to Cloud RAG API (Gemini / Claude)
\`\`\`

This pattern delivers the best of both worlds: zero-cost private inference for 80% of modern desktop and flagship mobile users, with bulletproof cloud fallback for older devices.
`,
    ua: `
### 1. Зміна парадигми: чому Local-First AI перемагає

Протягом останніх років типовим патерном розробки AI-застосунків був централізований хмарний інференс: клієнт надсилає промпт через HTTPS на сторонній сервер (OpenAI, Anthropic тощо), чекає мережевої відповіді та приймає потік токенів.

У 2026 році спостерігається масовий перехід до **Local-First AI у браузері**:

1. **Нульові витрати на сервери:** Після одноразового завантаження моделі інференс на процесорі клієнта коштує рівно $0.00 для розробника.
2. **Абсолютна конфіденційність:** Для медичних сервісів (HIPAA) чи європейського бізнесу (GDPR) персональні дані користувача взагалі не залишають його пристрій.
3. **Повна автономність:** Офлайн-робота застосунку у літаку, у польових умовах чи за нестабільного зв язку.

---

### 2. Технологічний прорив: WebGPU замість WebGL

Раніше машинне навчання в браузері базувалося на WebGL, де матричні обчислення доводилося маскувати під шейдери рендерингу пікселів.

**WebGPU** відкриває прямий доступ до апаратного прискорювача через нативні **Compute Shaders** на мові WGSL, підтримує 16-бітну математику (\`f16\`) та працює через Metal, DirectX 12 та Vulkan зі швидкістю до 35-50 токенів на секунду.

---

### 3. Запуск квантованих моделей через Transformers.js v3

Сучасні компактні моделі, такі як **Llama 3.2 1B** чи **SmolLM2**, квантовані до 4 біт (q4f16), займають всього 650-750 МБ пам яті при збереженні високої якості логіки.

Бібліотека Transformers.js v3 ініціалізує конвеєр за декілька рядків:

\`\`\`typescript
import { pipeline } from '@huggingface/transformers';

const generator = await pipeline(
  'text-generation',
  'onnx-community/Llama-3.2-1B-Instruct',
  { device: 'webgpu', dtype: 'q4f16' }
);
\`\`\`

---

### 4. Ізоляція у Web Worker для стабільних 60 FPS

Виконання нейромережевих обчислень в основному потоці блокує інтерфейс користувача. Перенесення інференсу у фоновий **Web Worker** гарантує плавну анімацію та збереження 60 FPS у React під час генерації тексту.

---

### 5. Гібридна архітектура відмовостійкості

У реальних проєктах застосовується гібридний патерн:
- Якщо браузер підтримує WebGPU та має достатньо оперативної пам яті - працює локальна модель ($0 витрат, максимальна приватність).
- Для застарілих браузерів або слабких пристроїв система плавно перемикається на хмарний API (Gemini / Claude).
`,
    es: `
### 1. Cambio de paradigma: por qué el Local-First AI transforma la web

Durante años, la arquitectura estándar de IA ha dependido de servidores centralizados en la nube: el cliente envía datos sensibles mediante HTTPS, asume costes recurrentes de GPU y depende de la estabilidad de la red.

En 2026, el enfoque **Local-First en el navegador** ofrece tres ventajas decisivas:
- **Coste cero de infraestructura:** El cómputo corre a cargo del hardware del usuario ($0.00 en factura de servidores).
- **Privacidad total:** Datos confidenciales bajo normativas HIPAA o GDPR nunca salen del dispositivo del cliente.
- **Funcionamiento 100% offline:** Aplicaciones PWA que responden sin conexión a internet.

---

### 2. WebGPU frente a WebGL

WebGPU introduce **Compute Shaders** nativos en WGSL, soporte para operaciones de punto flotante de 16 bits (\`f16\`) y acceso directo a APIs de bajo nivel (Metal, DirectX 12, Vulkan), multiplicando la velocidad de inferencia hasta alcanzar 35-50 tokens por segundo.

---

### 3. Modelos ligeros con Transformers.js v3

Modelos como **Llama 3.2 1B** y **SmolLM2**, cuantizados a 4 bits (\`q4f16\`), ocupan entre 600MB y 750MB en disco y ofrecen capacidades de razonamiento excepcionales en dispositivos móviles y portátiles.

---

### 4. Aislamiento en Web Workers y arquitectura híbrida

Ejecutar la inferencia en un **Web Worker** dedicado evita congelar el hilo principal de renderizado en React, manteniendo 60 FPS constantes. Si el dispositivo no cuenta con aceleración WebGPU, el sistema conmuta automáticamente hacia la API en la nube como mecanismo de fallback transparente.
`,
  },
}
