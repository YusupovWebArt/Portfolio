# Specification: Telemetry, Analytics, and Search Console Infrastructure

## 1. Context and Problem Statement
- **Background**: The Artur Yusupov portfolio is an enterprise-grade fullstack web application built on Next.js 16 App Router, React 19, TypeScript 6, and Tailwind CSS v4, hosted on Vercel with Cloudflare DNS. It comprises 519 static pre-rendered routes across four native locales (English `en`, Ukrainian `ua`, Spanish `es`, and German `de`), 70 commercial case studies, 47 technical blog deep-dives, and an autonomous Hybrid RAG AI chat engine.
- **Problem Statement**: Without rigorous client-side telemetry and search engine instrumentation, engineering leadership cannot measure user engagement funnels (CV downloads, recruiter contact inquiries, AI chat interactions) nor observe search indexing health. Furthermore, international privacy laws (EU GDPR, ePrivacy Directive, and Spanish LOPDGDD / LSSI-CE) mandate strict opt-in consent before executing any tracking scripts.
- **Scope**:
  - **In-Scope**:
    - Privacy-first Google Analytics 4 (GA4) integration using Consent Mode v2 Basic.
    - Zero network dispatch before explicit user opt-in via the Cookie Consent modal.
    - Extended event and user data retention set to 14 months.
    - Custom event taxonomy for core conversion points: `contact_click`, `cv_download`, and `ai_chat_interaction`.
    - Custom dimensions in GA4: `contact_channel`, `download_source`, and `chat_action`.
    - Verification and indexing of domain property `sc-domain:yusupovartur.com` in Google Search Console.
    - Automated multilingual XML sitemap generation via Next.js App Router (`app/sitemap.ts`) covering 512+ pages with bidirectional hreflang links.
    - Proactive 4xx error crawl remediation and index validation.
    - Zero-commit secrets policy ensuring zero sensitive credentials or private tokens are stored in the public repository.
  - **Out-of-Scope**:
    - Invasive third-party advertising trackers or fingerprinting libraries.
    - Storing personally identifiable information (PII) such as unhashed emails or telephone numbers in analytics events.

---

## 2. Functional Requirements (FR)

### FR-1: GDPR Consent Mode v2 Basic Implementation
- The client application must initialize Google Consent Mode v2 in a locked default state (`ad_storage: denied`, `analytics_storage: denied`, `ad_user_data: denied`, `ad_personalization: denied`) before loading external scripts.
- In Basic Consent Mode, Google Analytics 4 scripts must be physically prevented from executing network requests until the user clicks `Accept All` or grants analytics consent in `ConsentModal.tsx`.
- Consent state must be managed via React 19 `useSyncExternalStore` in `ConsentContext.tsx` to eliminate SSR hydration mismatches on Next.js 16 and survive page refreshes through `localStorage`.

### FR-2: GA4 Event Taxonomy & Key Events (Conversions)
- The application must dispatch semantic custom events for all high-intent user interactions:
  - `contact_click`: Triggered whenever a visitor initiates communication through any channel (Email, Telegram, WhatsApp, LinkedIn, GitHub).
  - `cv_download`: Triggered whenever a visitor downloads the Artur Yusupov CV PDF from any location on the site.
  - `ai_chat_interaction`: Triggered when visitors interact with the AI assistant (opening modal, clicking suggestion chips, asking questions, triggering generative tools).
- In the GA4 administrative console under `Webart React Portfolio` (`yusupovartur.com`), `contact_click` and `cv_download` must be designated and starred as **Key Events** (Conversions).

### FR-3: GA4 Custom Dimensions
- To provide deep behavioral insights without recording PII, three event-scoped custom dimensions must be registered in GA4:
  1. **Contact Channel** (`contact_channel`): captures the specific platform clicked (`email`, `telegram`, `whatsapp`, `linkedin`, `github`).
  2. **Download Source** (`download_source`): captures the UI section initiating the download (`hero`, `header`, `about`, `footer`, `skills`).
  3. **Chat Action** (`chat_action`): captures the specific interaction type within the AI assistant (`open`, `close`, `suggestion_click`, `ask_question`, `tool_call`).

### FR-4: GA4 Property and Stream Configuration
- **Account**: Dedicated clean account `Webart React Portfolio` (`560702615`).
- **Property**: `yusupovartur.com`.
- **Web Stream**: `Artur Yusupov Production (https://www.yusupovartur.com)`.
- **Public Measurement ID**: `G-STZ8DN2KND` (public client-side tag identifier).
- **Data Retention**: Event and user data retention must be set to **14 months** (maximum allowed in standard GA4).
- **Enhanced Measurement**: Active with page views (including browser history change events for Next.js App Router client-side navigation), 90% scroll tracking, outbound link clicks, site search, and file downloads.

### FR-5: Google Search Console (GSC) Domain Property & Linking
- GSC must be configured as a Domain Property (`sc-domain:yusupovartur.com`), verifying all protocols (`http`, `https`) and subdomains (`www`, apex) via DNS TXT record at the domain registrar level.
- GSC must be linked directly to the GA4 web stream `Artur Yusupov Production`, enabling Search Console organic query reports (search queries, impressions, clicks, average position, and landing pages) inside Google Analytics.

### FR-6: Automated 512+ Page Multilingual XML Sitemap
- The Next.js 16 App Router route handler `app/sitemap.ts` must dynamically generate `https://www.yusupovartur.com/sitemap.xml`.
- The sitemap must expose all 519 static pre-rendered routes across four supported locales (`en`, `ua`, `es`, `de` + `x-default`), including:
  - 4 localized root landing pages (`/en`, `/ua`, `/es`, `/de`).
  - 70 localized project case study pages per language (`/projects/[slug]`).
  - 47 localized engineering blog deep-dives per language (`/blog/[slug]`).
  - Legal, privacy policy, and imprint pages.
- Every URL entry must contain bidirectional `xhtml:link rel="alternate"` annotations for strict international targeting (`hreflang`).
- In Google Search Console, the sitemap must be processed with green `Success` status and zero parse errors.

### FR-7: Proactive 4xx Crawl Resolution
- All historical 404/410 crawl errors identified in Google Search Console must be systematically audited and resolved via SSG generation or 301 redirects, followed by validation requests submitted directly to Google crawler bots.

---

## 3. Non-Functional Requirements (NFR)

### NFR-1: Zero-Commit Secrets Policy (Security & Privacy)
- As specified in `SECURITY.md`, no private credentials, Google account passwords, Google Cloud service account keys, DNS provider tokens, or Measurement Protocol API secrets may ever be written to documentation, source files, or git commits.
- The repository is public. Only public client identifiers (such as the public Measurement ID `G-STZ8DN2KND` and public domain identifier `sc-domain:yusupovartur.com`) are permissible in code and configuration files.

### NFR-2: Performance & Core Web Vitals Budget
- Gated analytics loading must not degrade performance metrics:
  - First Contentful Paint (FCP) <= 0.8s.
  - Largest Contentful Paint (LCP) <= 1.2s.
  - Cumulative Layout Shift (CLS) = 0.00.
- GA4 script tags must use asynchronous deferral (`async`/`defer`) and execute only post-consent without blocking main-thread rendering.

### NFR-3: Accessibility (WCAG 2.2 AA / EAA 2026)
- The Cookie Consent banner must maintain full keyboard operability (`Tab`, `Enter`, `Escape`), focus trapping, explicit ARIA roles, and high-contrast color ratios (> 4.5:1).
- Consent status buttons must have clear accessible labels matching visible text (WCAG 2.5.3).

### NFR-4: Internationalization (i18n) Parity
- Cookie consent notices, privacy policy descriptions, and telemetry disclosures must maintain 100% parity across English, Ukrainian, Spanish, and German.

---

## 4. Telemetry Architecture

```mermaid
flowchart TD
    Visitor[Website Visitor] --> Landing[Next.js 16 App Router Page]
    Landing --> CheckConsent{Consent Stored in localStorage?}
    
    CheckConsent -- No / First Visit --> ShowBanner[Render ConsentModal.tsx]
    CheckConsent -- Yes: Denied --> Block[Block GA4 Network Dispatches]
    CheckConsent -- Yes: Granted --> InitGA4[Load gtag.js & G-STZ8DN2KND]
    
    ShowBanner -- User clicks Accept --> UpdateStorage[Store Consent in localStorage]
    ShowBanner -- User clicks Reject --> UpdateStorage
    UpdateStorage --> DispatchStoreEvent[Custom Storage Event via useSyncExternalStore]
    DispatchStoreEvent --> InitGA4
    
    InitGA4 --> Enhanced[Enhanced Measurement: History Changes, Scroll, Outbound]
    
    subgraph Conversion Telemetry
        UserClickContact[Contact Button Click] --> DispatchContact[gtag event: contact_click]
        DispatchContact --> DimContact[Custom Dimension: contact_channel]
        
        UserDownloadCV[Download CV Button] --> DispatchCV[gtag event: cv_download]
        DispatchCV --> DimCV[Custom Dimension: download_source]
        
        UserChatAction[AI Chat Action] --> DispatchChat[gtag event: ai_chat_interaction]
        DispatchChat --> DimChat[Custom Dimension: chat_action]
    end
    
    InitGA4 --> Conversion Telemetry
    Conversion Telemetry --> GA4Backend[Google Analytics 4: Webart React Portfolio]
    
    subgraph Search Console Integration
        GSC[sc-domain:yusupovartur.com] --> LinkGA4[Direct Product Link to GA4 Stream]
        Sitemap[app/sitemap.ts: 512+ Pages] --> CrawlSuccess[GSC Indexing: Status Success]
        LinkGA4 --> GA4Backend
    end
```

---

## 5. Event and Parameter Reference Table

| Event Name | Type | Key Event (Conversion) | Custom Dimension Parameter | Allowed Parameter Values | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `contact_click` | Custom | Yes | `contact_channel` | `email`, `telegram`, `whatsapp`, `linkedin`, `github` | Visitor clicked a direct communication channel. |
| `cv_download` | Custom | Yes | `download_source` | `hero`, `header`, `about`, `footer`, `skills` | Visitor downloaded the engineering CV PDF. |
| `ai_chat_interaction` | Custom | No | `chat_action` | `open`, `close`, `suggestion_click`, `ask_question`, `tool_call` | Visitor engaged with the Hybrid RAG AI chat assistant. |
| `page_view` | Standard | No | N/A | Current URL pathname | Dispatched on route change via Next.js App Router history changes. |

---

## 6. Verification and Testing Procedures

1. **Consent Gate Verification**:
   - In private browsing mode with cleared cookies, navigate to `https://www.yusupovartur.com`.
   - Open browser Network tab filtered by `google-analytics.com` or `collect`.
   - Verify zero outgoing requests are dispatched prior to clicking `Accept All`.
   - Click `Accept All` and verify outgoing `v=2` collection pings fire with consent parameters.

2. **Custom Dimension Attribution Verification**:
   - In GA4 DebugView, trigger a contact channel click (e.g., Telegram).
   - Verify event `contact_click` arrives with parameter `contact_channel: telegram`.
   - Trigger a CV download from the Hero section.
   - Verify event `cv_download` arrives with parameter `download_source: hero`.

3. **Google Search Console Indexing Verification**:
   - Inspect `https://www.yusupovartur.com/sitemap.xml` in GSC Sitemap report.
   - Verify status displays green `Success` with 512+ discovered URLs.
   - Verify that Google Search Console reports are populated under GA4 `Reports` -> `Search Console`.
