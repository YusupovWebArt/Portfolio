import type { BlogPost, BlogLocale } from './types'
import { nextjsVsHeadlessWordPressPost } from './posts/nextjs-vs-headless-wordpress'
import { fullstackAiLabInteractiveEdtechArchitecturePost } from './posts/fullstack-ai-lab-interactive-edtech-architecture'
import { unitritionHeadlessHealthtechArchitecturePost } from './posts/unitrition-headless-healthtech-architecture'
import { autonomousHybridRagPost } from './posts/autonomous-hybrid-rag'
import { wcag22Eaa2026Post } from './posts/wcag-22-eaa-2026'
import { subSecondCwvBundleOptimizationPost } from './posts/sub-second-cwv-bundle-optimization'
import { shopifyLiquidVsCustomWooCommercePost } from './posts/shopify-liquid-vs-custom-woocommerce'
import { clientSideZeroTrustSecurityPost } from './posts/client-side-zero-trust-security'
import { legacyMigrationCloudInfrastructurePost } from './posts/legacy-migration-cloud-infrastructure'
import { headlessWordPressNextJs16CachingArchitecturePost } from './posts/headless-wordpress-nextjs-16-caching-architecture'
import { woocommerceHposRedisCaching10kSkusPost } from './posts/woocommerce-hpos-redis-caching-10k-skus'
import { wasmWordPressPhpInBrowserZeroServerPost } from './posts/wasm-wordpress-php-in-browser-zero-server'
import { clinicalGovernmentApiHeadlessIntegrationUnitritionPost } from './posts/clinical-government-api-headless-integration-unitrition'
import { enterpriseCloudWebSecurityWafAntiScrapingPost } from './posts/enterprise-cloud-web-security-waf-anti-scraping'
import { headlessMulticurrencyCheckoutWoocommerceStripePost } from './posts/headless-multicurrency-checkout-woocommerce-stripe'
import { inBrowserSemanticSearchWebassemblyEmbeddingsEcommercePost } from './posts/in-browser-semantic-search-webassembly-embeddings-ecommerce'
import { realtimeOmnichannelInventorySyncRedlockPost } from './posts/realtime-omnichannel-inventory-sync-redlock'
import { automatedVisualAccessibilityMetadataMultimodalLlmsEaa2026Post } from './posts/automated-visual-accessibility-metadata-multimodal-llms-eaa2026'
import { autonomousEdgeAiAgentsToolCallingV8IsolatesPost } from './posts/autonomous-edge-ai-agents-tool-calling-v8-isolates'
import { compiling1100MdxLessonsNativeRustMdxRsNextjs16Post } from './posts/compiling-1100-mdx-lessons-native-rust-mdx-rs-nextjs-16'
import { localFirstEcommercePwaOfflineCartCrdtYjsIndexeddbPost } from './posts/local-first-ecommerce-pwa-offline-cart-crdt-yjs-indexeddb'
import { enterpriseProgrammaticSeoPseoNextjs16AutonomousLlmPipelinesPost } from './posts/enterprise-programmatic-seo-pseo-nextjs-16-autonomous-llm-pipelines'
import { enterpriseB2bHeadlessEcommerceTieredPricingErpSyncWooCommerceHposPost } from './posts/enterprise-b2b-headless-ecommerce-tiered-pricing-erp-sync-woocommerce-hpos'
import { voiceDrivenConversationalEcommerceWebSpeechEdgeAiNextjs16Post } from './posts/voice-driven-conversational-ecommerce-web-speech-edge-ai-nextjs-16'
import { headlessSubscriptionArchitectureUsageBasedBillingStripeNextjs16Post } from './posts/headless-subscription-architecture-usage-based-billing-stripe-nextjs-16'
import { zeroLeakageCheckoutSecurityPciDssV4CspNextjs16Post } from './posts/zero-leakage-checkout-security-pci-dss-v4-csp-nextjs-16'
import { multiZoneMicroFrontendsEdgeNextjs16AutonomousDeploymentsPost } from './posts/multi-zone-micro-frontends-edge-nextjs-16-autonomous-deployments'
import { browserNativeWasmSandboxesSafeAiCodeExecutionNextjs16Post } from './posts/browser-native-wasm-sandboxes-safe-ai-code-execution-nextjs-16'
import { globalSub20msDatabaseReadLatencyEdgeCloudflareHyperdriveNextjs16Post } from './posts/global-sub-20ms-database-read-latency-edge-cloudflare-hyperdrive-nextjs-16'
import { clientsideWebgpuPredictivePersonalizationCollaborativeFilteringNextjs16Post } from './posts/clientside-webgpu-predictive-personalization-collaborative-filtering-nextjs-16'

export * from './types'

export const allBlogPosts: BlogPost[] = [
  nextjsVsHeadlessWordPressPost,
  fullstackAiLabInteractiveEdtechArchitecturePost,
  unitritionHeadlessHealthtechArchitecturePost,
  autonomousHybridRagPost,
  subSecondCwvBundleOptimizationPost,
  wcag22Eaa2026Post,
  shopifyLiquidVsCustomWooCommercePost,
  clientSideZeroTrustSecurityPost,
  legacyMigrationCloudInfrastructurePost,
  headlessWordPressNextJs16CachingArchitecturePost,
  woocommerceHposRedisCaching10kSkusPost,
  wasmWordPressPhpInBrowserZeroServerPost,
  clinicalGovernmentApiHeadlessIntegrationUnitritionPost,
  enterpriseCloudWebSecurityWafAntiScrapingPost,
  headlessMulticurrencyCheckoutWoocommerceStripePost,
  inBrowserSemanticSearchWebassemblyEmbeddingsEcommercePost,
  realtimeOmnichannelInventorySyncRedlockPost,
  automatedVisualAccessibilityMetadataMultimodalLlmsEaa2026Post,
  autonomousEdgeAiAgentsToolCallingV8IsolatesPost,
  compiling1100MdxLessonsNativeRustMdxRsNextjs16Post,
  localFirstEcommercePwaOfflineCartCrdtYjsIndexeddbPost,
  enterpriseProgrammaticSeoPseoNextjs16AutonomousLlmPipelinesPost,
  enterpriseB2bHeadlessEcommerceTieredPricingErpSyncWooCommerceHposPost,
  voiceDrivenConversationalEcommerceWebSpeechEdgeAiNextjs16Post,
  headlessSubscriptionArchitectureUsageBasedBillingStripeNextjs16Post,
  zeroLeakageCheckoutSecurityPciDssV4CspNextjs16Post,
  multiZoneMicroFrontendsEdgeNextjs16AutonomousDeploymentsPost,
  browserNativeWasmSandboxesSafeAiCodeExecutionNextjs16Post,
  globalSub20msDatabaseReadLatencyEdgeCloudflareHyperdriveNextjs16Post,
  clientsideWebgpuPredictivePersonalizationCollaborativeFilteringNextjs16Post,
]

export function getAllBlogPosts(): BlogPost[] {
  return allBlogPosts
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return allBlogPosts.find((p) => p.slug === slug)
}

export function getRelatedBlogPosts(currentSlug: string, limit = 2): BlogPost[] {
  return allBlogPosts.filter((p) => p.slug !== currentSlug).slice(0, limit)
}

export function getBlogTitle(post: BlogPost, locale: string): string {
  const l = (locale === 'ua' || locale === 'es' ? locale : 'en') as BlogLocale
  return post.title[l] || post.title.en
}

export function getBlogDescription(post: BlogPost, locale: string): string {
  const l = (locale === 'ua' || locale === 'es' ? locale : 'en') as BlogLocale
  return post.description[l] || post.description.en
}

export function getBlogReadTime(post: BlogPost, locale: string): string {
  const l = (locale === 'ua' || locale === 'es' ? locale : 'en') as BlogLocale
  return post.readTime[l] || post.readTime.en
}

export function getBlogCategoryLabel(post: BlogPost, locale: string): string {
  const l = (locale === 'ua' || locale === 'es' ? locale : 'en') as BlogLocale
  return post.categoryLabel[l] || post.categoryLabel.en
}

export function getBlogContent(post: BlogPost, locale: string): string {
  const l = (locale === 'ua' || locale === 'es' ? locale : 'en') as BlogLocale
  return post.content[l] || post.content.en
}

export function getBlogTldr(post: BlogPost, locale: string): string[] {
  const l = (locale === 'ua' || locale === 'es' ? locale : 'en') as BlogLocale
  return post.tldr[l] || post.tldr.en
}
