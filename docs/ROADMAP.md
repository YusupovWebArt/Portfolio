# Продуктовый и технический роадмеп (Post-Audit Roadmap)

Актуально на: 17 октября 2026.
Базовый статус: все контуры безопасности (DevSecOps), приватности (RGPD / LSSI-CE / Consent Mode v2), доступности (WCAG 2.2 AA / EAA 2026) и производительности закрыты и приняты по итогам аудита (`docs/AUDIT_SUMMARY.md`).

---

## Направление 1: Завершение релиза в продакшн (Production Launch)

1. **Верификация боевого домена и окружения Vercel:**
   - Привязка основного домена `yusupovartur.com` / `www.yusupovartur.com` в панели Vercel.
   - Настройка переменных окружения в Vercel Dashboard -> Settings -> Environment Variables:
     - `OPENAI_API_KEY` (для потоковой генерации ответов LLM в `/api/chat`, при отсутствии ключа автоматически работает локальный Hybrid RAG движок).
     - `UPSTASH_REDIS_REST_URL` и `UPSTASH_REDIS_REST_TOKEN` (для глобального распределенного rate-лимитера).
     - `NEXT_PUBLIC_SITE_URL` (`https://yusupovartur.com`).
   - Запуск автоматизированной проверки заголовков безопасности:
     ```bash
     pnpm verify:live https://www.yusupovartur.com/en
     ```

2. **Финансовые и операционные лимиты (Защита бюджета):**
   - В консоли **OpenAI Platform** (Settings -> Billing -> Limits) задать жесткий месячный лимит (`Hard limit`, например, $10-$15/месяц).
   - В консоли **Upstash Redis** проверить активный лимит бесплатного тарифа (10 000 команд/сутки).
   - В панели **Vercel** (Settings -> Git -> Ignored Build Step) убедиться, что для ветки `gh-pages` включено правило пропуска сборки:
     ```bash
     if [ "$VERCEL_GIT_COMMIT_REF" = "gh-pages" ]; then exit 0; else exit 1; fi
     ```

3. **SEO, индексация и GEO (Generative Engine Optimization):**
   - Добавить домен в [Google Search Console](https://search.google.com/search-console).
   - Отправить карту сайта `https://yusupovartur.com/sitemap.xml` (217 статических маршрутов для локалей `en`, `ua`, `es`).
   - Проверить статус индексации и показатели Core Web Vitals в Search Console.

4. **Ручные и юридические предрелизные проверки:**
   - Проверить события Google Analytics 4 в режиме **GA4 DebugView** (события должны приходить только после нажатия "Accept All" и прекращаться после отзыва согласия через "Cookie Settings" в футере).
   - Провести ручное тестирование с экранным диктором (**NVDA** на Windows или **VoiceOver** на macOS / iOS) для модальных окон (`ChatModal`, `ConsentBanner`, `CookiePolicyModal`) и табов в карточках проектов.
   - Провести финальную юридическую вычитку текстов Cookie Policy и Privacy Policy.
   - При необходимости ротировать публичные контактные каналы на выделенные бизнес-алиасы (отдельный почтовый алиас и аккаунт WhatsApp Business).

---

## Направление 2: Продуктовое развитие и новые фичи (Feature Backlog)

1. **Прямая форма быстрой заявки с отправкой в Telegram / Email (`POST /api/contact`):**
   - **Цель:** Позволить клиентам и рекрутерам отправить быструю заявку на разработку прямо с сайта за 30 секунд (Имя, Email/Telegram, Тип проекта, Бюджет/Сроки, Сообщение).
   - **Архитектура безопасности:**
     - Защита эндпоинта через распределенный rate-лимитер Upstash Redis (лимит 5 запросов / 15 минут на IP).
     - Скрытое поле-ловушка для спам-ботов (honeypot field) и валидация схемы входных данных через Zod.
     - Отправка мгновенного push-уведомления в Telegram владельца через официальный Telegram Bot API (`sendMessage` с MarkdownV2 форматированием).
     - Дублирование резервной копии заявки на защищенный email через Resend API.
     - Интеграция с существующей политикой согласия (RGPD / LSSI-CE) и отслеживанием событий в GA4 (событие `generate_lead` только при наличии согласия).

2. **Расширение Generative UI и интеллекта в AI-ассистенте:**
   - [x] Увеличенное модальное окно чата (`max-w-5xl / xl:max-w-6xl`) с полноэкранным режимом Maximize (`w-[96vw] max-w-[1550px]`) и 2-колоночной сеткой карточек проектов (`ProjectToolCard`).
   - [x] Умная категоризация запросов «best projects» по технологическим стекам (Next.js, WordPress, React, Shopify) с показом ключевых флагманов и защитой от опечаток (`dest projects`).
   - [x] Многошаговая память диалога (`inferProjectFromHistory`), нечеткий поиск с защитой от опечаток (`damerauLevenshteinDistance` / `resolveProjectFromQuery`), динамические контекстные подсказки (`getContextualFollowUps`).
   - [x] Форматирование ответов (`FormattedChatText`), интерактивный виджет связи и скачивания резюме (`ContactActionCard`), копирование ответов в 1 клик и кнопка остановки генерации (`AbortController`).
   - [x] Интерактивная матрица сравнения архитектурных стеков (`StackComparisonCard`: Next.js 16 vs Headless WP vs Custom WP vs Shopify с показателями Core Web Vitals, SEO и Time-to-Market).
   - [x] Интерактивный калькулятор оценки сроков и этапов проекта (`ProjectEstimateCalculatorCard` с выбором архетипа, модулей i18n/RAG/Headless и поэтапным SDD планом).

3. **Улучшение каталога проектов (`Projects.tsx`) и страниц кейсов (`ProjectDetail.tsx`):**
   - [x] Выделение личных авторских проектов (Next.js 16 Platform, Unitrition, React Portfolio) стильными бейджами `★ Personal Project`, быстрым фильтром в каталоге и hero-плашкой в детальных кейсах.
   - [x] Расширение глобальной контентной сетки до `max-w-[1600px]` на широкоформатных мониторах (с комфортной шириной карточек ~480px).
   - [x] Живой поиск и фильтрация проектов по названию, описанию и стеку технологий (`Projects.tsx`) с очисткой в 1 клик, счетчиком совпадений и экраном пустого состояния (Empty State).
   - [x] Блок «Схожие проекты и кейсы» (Related Case Studies) внизу каждого кейса (`ProjectDetail.tsx`) для бесшовного перехода между смежными работами.

4. **Инженерная оптимизация и запас производительности (Core Web Vitals):**
   - [x] Ленивая загрузка (`lazy()` + `Suspense`) тяжелых секций `Skills` и `B2bServices` на клиенте.
   - [x] Асинхронное разделение словарей локализации (`locales`): базовый английский словарь `locale-en` изолирован (28.07 КБ raw / 10.71 КБ gzip), а словари `locale-ua` (46.41 КБ) и `locale-es` (32.60 КБ) загружаются динамически по требованию (`language-loader.ts`).
   - [x] Рекордное сокращение стартового бандла JS: начальный объем снижен с 467.89 КБ до 391.67 КБ raw (сокращение на 76.22 КБ raw / 23.54 КБ gzip). Запас прочности под жестким лимитом 500 КБ увеличен до 108.33 КБ (21.67%).
   - [x] Автоматический CI-контроль отсутствия ленивых чанков локализации в критическом пути загрузки в `scripts/check-bundle-budget.mjs`.
   - [ ] Переход на динамический рендеринг с криптографическим `nonce` в заголовке `Content-Security-Policy` для Next.js при отказе от `unsafe-inline`.

5. **SEO и Generative Engine Optimization (GEO для AI-поисковиков):**
   - [x] Структурированная Schema.org микроразметка `FAQPage` в `index.html` и `app/[locale]/layout.tsx` для цитирования в Google AI Overviews, Perplexity и SearchGPT.
   - [x] Расширенные мета-теги Open Graph, Twitter Summary Large Image и языковые hreflang-альтернативы для мультиязычной индексации (`en`, `ua`, `es`).
   - [ ] Раздел `/[locale]/blog` с разбором архитектурных решений (Headless WordPress vs Next.js, внедрение Hybrid RAG без внешних векторных БД, SDD + TDD пайплайны).
