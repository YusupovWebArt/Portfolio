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

1. **Прямая отправка заявок в Telegram / Email (`/api/contact`):**
   - Добавить защищенную форму обратной связи с отправкой уведомлений напрямую в ваш личный Telegram-бот (через Telegram Bot API) или на почту (через Resend) с защитой тем же rate-лимитером Upstash и валидацией Zod.

2. **Расширение Generative UI и интеллекта в AI-ассистенте:**
   - [x] Увеличенное модальное окно чата (`max-w-3xl lg:max-w-4xl`, `h-[740px] sm:h-[780px]`) с 2-колоночной сеткой карточек проектов (`ProjectToolCard`).
   - [x] Многошаговая память диалога (`inferProjectFromHistory`), нечеткий поиск с защитой от опечаток (`damerauLevenshteinDistance` / `resolveProjectFromQuery`), динамические контекстные подсказки (`getContextualFollowUps`).
   - [x] Форматирование ответов (`FormattedChatText`), интерактивный виджет связи и скачивания резюме (`ContactActionCard`), копирование ответов в 1 клик и кнопка остановки генерации (`AbortController`).
   - [ ] Сравнительные таблицы стека технологий и ориентировочный калькулятор сроков/этапов разработки по запросу клиента в чате.

3. **Инженерный блог и технические статьи (MDX Case Studies):**
   - Раздел `/[locale]/blog` с разбором архитектурных решений (Headless WordPress vs Next.js, внедрение Hybrid RAG без внешних векторных БД, SDD + TDD пайплайны) для усиления органического SEO и цитирования в AI-поисковиках (ChatGPT, Claude, Perplexity).

4. **Инженерный бэклог оптимизации:**
   - Асинхронное разделение словарей локализации (`locales`) при переходе на серверный роутинг словарей (дополнительный запас ~70 КБ к стартовому бандлу).
   - Переход на динамический рендеринг с криптографическим `nonce` в заголовке `Content-Security-Policy` для Next.js при отказе от `unsafe-inline`.
