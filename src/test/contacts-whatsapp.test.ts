import { describe, it, expect, vi } from 'vitest'
import {
  buildWhatsAppDirectUrl,
  openWhatsAppDirect,
  PENDING_DOMAIN_EMAIL,
  decodeContact,
  OBFUSCATED_CONTACTS,
} from '../lib/contacts'

describe('Direct 1-Click WhatsApp & Obfuscated Contact Specification (TDD)', () => {
  it('should build direct WhatsApp URL with localized pre-filled greetings', () => {
    const esUrl = buildWhatsAppDirectUrl('es')
    expect(esUrl).toContain('https://wa.me/34')
    expect(esUrl).toContain(encodeURIComponent('Hola Artur, me gustaría consultar la disponibilidad para un proyecto web.'))

    const enUrl = buildWhatsAppDirectUrl('en')
    expect(enUrl).toContain('https://wa.me/34')
    expect(enUrl).toContain(encodeURIComponent('Hi Artur, I would like to inquire about availability for a web project.'))

    const uaUrl = buildWhatsAppDirectUrl('ua')
    expect(uaUrl).toContain('https://wa.me/34')
    expect(uaUrl).toContain(encodeURIComponent('Привіт Артуре, хочу обговорити розробку веб-проєкту.'))
  })

  it('should support custom inquiry messages', () => {
    const custom = buildWhatsAppDirectUrl('es', 'Consulta para desarrollo Marca Blanca')
    expect(custom).toContain(encodeURIComponent('Consulta para desarrollo Marca Blanca'))
  })

  it('should open WhatsApp direct URL in new browser window', () => {
    const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null)
    openWhatsAppDirect('es')
    expect(openSpy).toHaveBeenCalledWith(
      expect.stringContaining('https://wa.me/34'),
      '_blank',
      'noopener,noreferrer',
    )
    openSpy.mockRestore()
  })

  it('should maintain PENDING_DOMAIN_EMAIL slot for future domain mailbox integration', () => {
    expect(PENDING_DOMAIN_EMAIL).toBeNull()
    const decodedEmail = decodeContact(OBFUSCATED_CONTACTS.email)
    expect(decodedEmail).toContain('@')
  })
})
