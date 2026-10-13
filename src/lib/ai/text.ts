/**
 * Multilingual NLP and search text processing pipeline.
 * Provides Unicode NFKC normalization, diacritic folding (Spanish/accents),
 * Cyrillic-safe tokenization (Ukrainian/Russian), stop-word filtering,
 * query expansion across EN/UA/ES, and prompt-injection sanitization.
 */

const SHORT_TECH_WHITELIST = new Set([
  'go',
  'js',
  'ts',
  'r',
  'c',
  'ui',
  'ux',
  'ai',
  'db',
  'qa',
  'ci',
  'cd',
  'wp',
])

const MULTILINGUAL_STOP_WORDS = new Set([
  // English
  'the',
  'is',
  'in',
  'at',
  'of',
  'and',
  'a',
  'an',
  'for',
  'on',
  'with',
  'as',
  'by',
  'to',
  'from',
  'it',
  'its',
  'or',
  'be',
  'are',
  'was',
  'were',
  'this',
  'that',
  'how',
  'what',
  'which',
  'when',
  'who',
  'where',
  'why',
  'can',
  'you',
  'tell',
  'me',
  'about',
  // Ukrainian
  'як',
  'що',
  'це',
  'на',
  'та',
  'і',
  'в',
  'до',
  'для',
  'по',
  'про',
  'чи',
  'або',
  'із',
  'зі',
  'за',
  'від',
  'під',
  'над',
  'який',
  'яка',
  'які',
  'яке',
  'був',
  'була',
  'були',
  'є',
  'ви',
  'ти',
  'мене',
  'мені',
  'нас',
  'робота',
  // Spanish
  'el',
  'la',
  'los',
  'las',
  'un',
  'una',
  'unos',
  'unas',
  'de',
  'del',
  'en',
  'y',
  'o',
  'con',
  'por',
  'para',
  'que',
  'se',
  'es',
  'su',
  'sus',
  'como',
  'cual',
  'cuales',
  'sobre',
  'este',
  'esta',
  'estos',
  'estas',
  'son',
  'fue',
  'ha',
  'han',
  // Russian
  'как',
  'что',
  'это',
  'на',
  'и',
  'в',
  'для',
  'по',
  'о',
  'об',
  'или',
  'от',
  'из',
  'за',
  'какой',
  'какая',
  'какие',
  'был',
  'была',
  'были',
  'вы',
  'ты',
  'мне',
])

const SYNONYM_EXPANSIONS: Record<string, string[]> = {
  // Stack / technologies
  стек: ['stack', 'technologies', 'tech'],
  технологии: ['technologies', 'stack', 'tech'],
  технологий: ['technologies', 'stack', 'tech'],
  технології: ['technologies', 'stack', 'tech'],
  технологій: ['technologies', 'stack', 'tech'],
  tecnologia: ['technologies', 'stack', 'tech'],
  tecnologias: ['technologies', 'stack', 'tech'],
  stack: ['technologies', 'tech'],

  // Services / offerings
  послуги: ['services', 'offerings', 'solutions'],
  послуг: ['services', 'offerings', 'solutions'],
  услуги: ['services', 'offerings', 'solutions'],
  услуг: ['services', 'offerings', 'solutions'],
  servicios: ['services', 'offerings', 'solutions'],
  servicio: ['services', 'offerings', 'solutions'],

  // Pricing / cost / rates
  ціна: ['pricing', 'rates', 'cost', 'service'],
  ціни: ['pricing', 'rates', 'cost', 'service'],
  вартість: ['pricing', 'rates', 'cost', 'service'],
  цена: ['pricing', 'rates', 'cost', 'service'],
  цены: ['pricing', 'rates', 'cost', 'service'],
  стоимость: ['pricing', 'rates', 'cost', 'service'],
  precio: ['pricing', 'rates', 'cost', 'service'],
  precios: ['pricing', 'rates', 'cost', 'service'],
  cost: ['pricing', 'rates', 'service'],
  rates: ['pricing', 'cost', 'service'],

  // Architecture / engineering
  архітектура: ['architecture', 'infrastructure', 'backend'],
  архітектури: ['architecture', 'infrastructure', 'backend'],
  архитектура: ['architecture', 'infrastructure', 'backend'],
  архитектуры: ['architecture', 'infrastructure', 'backend'],
  arquitectura: ['architecture', 'infrastructure', 'backend'],

  // Features
  функції: ['features', 'capabilities', 'functionality'],
  функцій: ['features', 'capabilities', 'functionality'],
  функции: ['features', 'capabilities', 'functionality'],
  функций: ['features', 'capabilities', 'functionality'],
  funciones: ['features', 'capabilities', 'functionality'],
  features: ['capabilities', 'functionality'],

  // Challenges / solutions
  виклики: ['challenges', 'problems'],
  викликів: ['challenges', 'problems'],
  вызовы: ['challenges', 'problems'],
  desafios: ['challenges', 'problems'],
  рішення: ['solutions'],
  решения: ['solutions'],
  soluciones: ['solutions'],

  // Experience / bio / profile
  досвід: ['experience', 'profile', 'bio', 'years'],
  досвіду: ['experience', 'profile', 'bio', 'years'],
  опыт: ['experience', 'profile', 'bio', 'years'],
  опыта: ['experience', 'profile', 'bio', 'years'],
  experiencia: ['experience', 'profile', 'bio', 'years'],
  хто: ['who', 'profile', 'bio', 'artur'],
  кто: ['who', 'profile', 'bio', 'artur'],
  quien: ['who', 'profile', 'bio', 'artur'],

  // Contact
  контакти: ['contact', 'email', 'telegram', 'whatsapp'],
  контакты: ['contact', 'email', 'telegram', 'whatsapp'],
  contacto: ['contact', 'email', 'telegram', 'whatsapp'],
  contactar: ['contact', 'email', 'telegram', 'whatsapp'],
}

/**
 * Enforces zero em dashes and en dashes throughout all strings.
 */
export function stripEmDashes(text: string): string {
  return text.replace(/[\u2013\u2014]/g, '-')
}

/**
 * Normalizes Unicode into standard NFKC form.
 */
export function normalizeUnicode(text: string): string {
  return text.normalize('NFKC')
}

/**
 * Folds Latin accented characters into base Latin characters (e.g. "tecnología" -> "tecnologia", "diseño" -> "diseno").
 * Leaves Cyrillic letters (such as "й", "ї", "є", "ґ") completely intact.
 */
export function foldForSearch(text: string): string {
  return normalizeUnicode(text)
    .toLowerCase()
    .replace(/[áàâäã]/g, 'a')
    .replace(/[éèêë]/g, 'e')
    .replace(/[íìîï]/g, 'i')
    .replace(/[óòôöõ]/g, 'o')
    .replace(/[úùûü]/g, 'u')
    .replace(/[ñ]/g, 'n')
    .replace(/[ç]/g, 'c')
}

export interface TokenizeOptions {
  removeStopWords?: boolean
  foldAccents?: boolean
  minLength?: number
}

/**
 * Multilingual, Unicode-aware tokenizer supporting Latin, Cyrillic, and technical identifiers.
 */
export function tokenize(text: string, options: TokenizeOptions = {}): string[] {
  const { removeStopWords = true, foldAccents = true, minLength = 2 } = options

  if (!text || text.trim().length === 0) {
    return []
  }

  const processed = foldAccents ? foldForSearch(text) : normalizeUnicode(text).toLowerCase()

  // Match sequences of Unicode letters and digits
  const matches = processed.match(/[\p{L}\p{N}]+/gu)
  if (!matches) {
    return []
  }

  const tokens: string[] = []
  for (const rawToken of matches) {
    const token = rawToken.trim()
    if (!token) continue

    const isWhitelisted = SHORT_TECH_WHITELIST.has(token)
    if (!isWhitelisted && token.length < minLength) {
      continue
    }

    if (removeStopWords && !isWhitelisted && MULTILINGUAL_STOP_WORDS.has(token)) {
      continue
    }

    tokens.push(token)
  }

  return tokens
}

/**
 * Expands query tokens using the multilingual cross-language synonym glossary.
 */
export function expandTokens(tokens: string[]): string[] {
  const result: string[] = [...tokens]
  const seen = new Set(tokens)

  for (const token of tokens) {
    const synonyms = SYNONYM_EXPANSIONS[token]
    if (synonyms) {
      for (const syn of synonyms) {
        if (!seen.has(syn)) {
          seen.add(syn)
          result.push(syn)
        }
      }
    }
  }

  return result
}

/**
 * Detects query language among 'en', 'ua', and 'es'.
 */
export function detectLanguage(text: string): 'en' | 'ua' | 'es' {
  if (/[а-яіїєґё]/i.test(text)) {
    return 'ua'
  }
  if (
    /[¿¡áéíóúüñ]/i.test(text) ||
    /\b(que|como|para|por|con|sobre|servicios|hola|quien|cuales|cuanto|experiencia)\b/i.test(text)
  ) {
    return 'es'
  }
  return 'en'
}

/**
 * Sanitizes user input before passing to LLM prompts, preventing tag breakout
 * and prompt injection attacks while clipping length to safe limits.
 */
export function sanitizeLlmInput(text: string, maxChars = 1200): string {
  if (!text) return ''

  let sanitized = stripEmDashes(normalizeUnicode(text))

  // Reject or strip injection markers
  sanitized = sanitized
    .replace(/<system>[\s\S]*?<\/system>/gi, '')
    .replace(/<\/?[a-z_][a-z0-9_-]*>/gi, '') // Strip XML/HTML style breakout tags
    .replace(/###\s*(instruction|system|prompt|human|assistant):/gi, '')
    .replace(/\b(ignore previous instructions|disregard earlier instructions)\b/gi, '')

  if (sanitized.length > maxChars) {
    sanitized = sanitized.slice(0, maxChars)
  }

  return sanitized.trim()
}
