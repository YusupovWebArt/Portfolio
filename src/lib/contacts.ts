/**
 * Verified single source of truth for Artur Yusupov's contact details.
 * In compliance with SECURITY.md and DevSecOps guidelines, personal contact
 * credentials (email, phone, Telegram) are stored as Base64 strings to prevent
 * automated web scrapers and SSR leaks.
 */

export const OBFUSCATED_CONTACTS = {
  // Obfuscated personal email address
  email: 'd2ViLnN1bmxpbmVAZ21haWwuY29t',
  // Obfuscated mailto link
  emailMailto: 'bWFpbHRvOndlYi5zdW5saW5lQGdtYWlsLmNvbQ==',
  // Obfuscated phone credential
  phone: 'KzM0NjQyNDEzOTY3',
  // Obfuscated WhatsApp chat URL
  whatsappUrl: 'aHR0cHM6Ly93YS5tZS8zNDY0MjQxMzk2Nw==',
  // Obfuscated Telegram handle
  telegram: 'QGRldmVsb3BfY3JlYXRl',
  // Obfuscated Telegram direct link
  telegramUrl: 'aHR0cHM6Ly90Lm1lL2RldmVsb3BfY3JlYXRl',
} as const

import { PUBLIC_PROFILES } from './profiles'
export { PUBLIC_PROFILES }

export type ContactKind = 'email' | 'phone' | 'telegram'

export interface RevealedContact {
  label: string
  href: string
}

/**
 * Safe runtime Base64 decoder compatible with both Browser (atob) and Node.js environments.
 */
export function decodeContact(b64: string): string {
  if (typeof atob === 'function') {
    return atob(b64)
  }
  return Buffer.from(b64, 'base64').toString('utf-8')
}

/**
 * Reveal verified contact details on user demand.
 */
export function revealContact(kind: ContactKind): RevealedContact {
  switch (kind) {
    case 'email':
      return {
        label: decodeContact(OBFUSCATED_CONTACTS.email),
        href: decodeContact(OBFUSCATED_CONTACTS.emailMailto),
      }
    case 'phone':
      return {
        label: decodeContact(OBFUSCATED_CONTACTS.phone),
        href: decodeContact(OBFUSCATED_CONTACTS.whatsappUrl),
      }
    case 'telegram':
      return {
        label: decodeContact(OBFUSCATED_CONTACTS.telegram),
        href: decodeContact(OBFUSCATED_CONTACTS.telegramUrl),
      }
  }
}

export interface DecodedContactInfo {
  name: string
  role: string
  location: string
  email: string
  emailUrl: string
  phone: string
  whatsappUrl: string
  telegram: string
  telegramUrl: string
  githubUrl: string
  linkedinUrl: string
}

export function getDecodedContactInfo(): DecodedContactInfo {
  return {
    name: PUBLIC_PROFILES.name,
    role: PUBLIC_PROFILES.role,
    location: PUBLIC_PROFILES.location,
    email: decodeContact(OBFUSCATED_CONTACTS.email),
    emailUrl: decodeContact(OBFUSCATED_CONTACTS.emailMailto),
    phone: decodeContact(OBFUSCATED_CONTACTS.phone),
    whatsappUrl: decodeContact(OBFUSCATED_CONTACTS.whatsappUrl),
    telegram: decodeContact(OBFUSCATED_CONTACTS.telegram),
    telegramUrl: decodeContact(OBFUSCATED_CONTACTS.telegramUrl),
    githubUrl: PUBLIC_PROFILES.githubUrl,
    linkedinUrl: PUBLIC_PROFILES.linkedinUrl,
  }
}
