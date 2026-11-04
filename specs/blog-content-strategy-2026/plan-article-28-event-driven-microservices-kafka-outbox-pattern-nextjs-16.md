# Plan: Article 37 - Event-Driven Microservices Architecture with Kafka / Redpanda: Transactional Outbox Pattern, CDC & Distributed Sagas in Next.js 16

## 1. Overview & Context

- **Slug**: `event-driven-microservices-kafka-outbox-pattern-nextjs-16`
- **Category**: Architecture & Cloud / Microservices / Next.js 16
- **Read Time**: 16 min / 16 хв / 16 min
- **Applied Projects**:
  - `yusupovartur-nextjs-portfolio` (Flagship Next.js 16 App Router platform)
  - `fullstack-ai-lab` (Interactive Fullstack & EdTech microservices ecosystem)
- **Primary Technical Objectives**:
  1. Solve the dual-write anti-pattern between relational databases (PostgreSQL) and message brokers (Kafka/Redpanda) in Next.js 16 Server Actions using the Transactional Outbox Pattern.
  2. Implement Change Data Capture (CDC) via PostgreSQL logical decoding (`pgoutput`) and Debezium/Kafka Connect for at-least-once guaranteed event delivery with zero polling overhead.
  3. Design distributed Saga orchestrations with deterministic compensating transactions for cross-service consistency (Orders, Payments, Inventory, Notifications).
  4. Implement strict idempotency keys with Redis bloom filters and database unique constraints to guarantee exactly-once consumer semantics.
  5. Provide end-to-end production TypeScript implementations, Prometheus/OpenTelemetry tracing spans, and comprehensive benchmarks.

## 2. Article Structure & Content Sections

- **Section 1**: The Dual-Write Dilemma in Modern Fullstack Web Apps (Why direct message publishing from Next.js Server Actions causes ghost orders and silent data corruption).
- **Section 2**: Transactional Outbox Pattern & CDC Engine (Atomically committing domain state and outbox events in a single ACID transaction; Debezium / pgoutput logical replication stream).
- **Section 3**: Distributed Sagas & Compensating Transactions (Choreography vs Orchestration; state machine transitions, timeout handling, and automatic compensation rollback).
- **Section 4**: Exactly-Once Processing Semantics (Idempotency keys, consumer deduplication with Redis bloom filters, dead-letter queues (DLQ), and exponential backoff retry policies).
- **Section 5**: End-to-End TypeScript Implementation (Next.js 16 Server Action with Outbox write, Kafka consumer service, Saga coordinator, and compensating actions).
- **Section 6**: Production Benchmarks & Comparative Metrics (Throughput under load, outbox ingestion latency, consumer lag, and failure recovery metrics).

## 3. Mandatory Compliance & Verification Standards

- **Typography**: Exactly 0 em dashes (\u2014) across all markdown, code comments, and SVG text. Only standard hyphens `-`.
- **Typing**: Strict zero-`any` in all TypeScript code examples.
- **Template Literal Safety**: Escape any `${...}` inside markdown template strings as `\${...}`.
- **Parity**: Complete trilingual content parity across English (`en`), Ukrainian (`ua`), and Spanish (`es`).
- **Cover Image**: Dedicated high-resolution SVG diagram in `public/images/blog/cover-event-driven-microservices-kafka-outbox.svg`.
- **Quality Gates**:
  - `pnpm exec tsc --noEmit` (0 errors)
  - `pnpm eslint` (0 errors)
  - `pnpm vitest run` (34/34 tests pass)
  - `pnpm build:next` (334 static pages: 331 + 3)
  - `pnpm build` (Vite SPA passes)
  - `pnpm check:budget` (Initial JS < 150 KB gzip)
