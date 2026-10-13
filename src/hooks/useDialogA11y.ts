import { useEffect, useRef } from 'react'

export interface UseDialogA11yOptions {
  isOpen: boolean
  onClose: () => void
  dialogRef: React.RefObject<HTMLElement | null>
  initialFocusRef?: React.RefObject<HTMLElement | null>
  closeOnEscape?: boolean
}

/**
 * Hook providing WCAG 2.2 AA and European Accessibility Act (EAA 2026) compliant dialog accessibility:
 * 1. Background inerting (marking background sibling elements inert so screen readers and keyboard focus cannot leak out)
 * 2. Focus entrapment (loops Tab / Shift+Tab within focusable elements)
 * 3. Escape key handling
 * 4. Automatic initial focus
 * 5. Restoration of focus to opener upon closing (clearing inert BEFORE focusing)
 */
export function useDialogA11y({
  isOpen,
  onClose,
  dialogRef,
  initialFocusRef,
  closeOnEscape = true,
}: UseDialogA11yOptions): void {
  const previousFocusRef = useRef<HTMLElement | null>(null)
  const inertElementsRef = useRef<HTMLElement[]>([])

  useEffect(() => {
    if (!isOpen) return

    // Save active element that opened the dialog
    if (document.activeElement instanceof HTMLElement) {
      previousFocusRef.current = document.activeElement
    }

    const dialogNode = dialogRef.current
    if (!dialogNode) return

    // Find the topmost container of the dialog overlay to inert its siblings
    const rootContainer = dialogNode.parentElement || dialogNode
    const inertTargets: HTMLElement[] = []

    // Walk up to find siblings across parent chain up to document.body
    let cur: HTMLElement | null = rootContainer
    while (cur && cur.parentElement && cur.parentElement !== document.body) {
      const parent = cur.parentElement
      for (const child of Array.from(parent.children)) {
        if (child !== cur && child instanceof HTMLElement && !child.contains(dialogNode)) {
          if (!child.inert) {
            child.inert = true
            child.setAttribute('inert', '')
            inertTargets.push(child)
          }
        }
      }
      cur = parent
    }

    // Body children siblings
    for (const child of Array.from(document.body.children)) {
      if (child instanceof HTMLElement && !child.contains(dialogNode) && child !== cur) {
        if (!child.inert) {
          child.inert = true
          child.setAttribute('inert', '')
          inertTargets.push(child)
        }
      }
    }

    inertElementsRef.current = inertTargets

    // Initial focus
    const focusTimer = setTimeout(() => {
      if (initialFocusRef?.current) {
        initialFocusRef.current.focus()
      } else if (dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
        )
        if (focusable.length > 0) {
          focusable[0].focus()
        } else {
          dialogRef.current.focus()
        }
      }
    }, 16)

    // Keydown handler for Escape & Tab focus trap
    const handleKeyDown = (e: KeyboardEvent) => {
      if (closeOnEscape && e.key === 'Escape') {
        e.preventDefault()
        e.stopPropagation()
        onClose()
        return
      }

      if (e.key === 'Tab' && dialogRef.current) {
        const focusable = Array.from(
          dialogRef.current.querySelectorAll<HTMLElement>(
            'button:not([disabled]):not([aria-hidden="true"]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
          ),
        ).filter((el) => {
          if (typeof window !== 'undefined' && 'getComputedStyle' in window) {
            const style = window.getComputedStyle(el)
            if (style.display === 'none' || style.visibility === 'hidden') return false
          }
          return true
        })

        if (focusable.length === 0) {
          e.preventDefault()
          return
        }

        const first = focusable[0]
        const last = focusable[focusable.length - 1]

        if (e.shiftKey) {
          if (document.activeElement === first || !dialogRef.current.contains(document.activeElement)) {
            e.preventDefault()
            last.focus()
          }
        } else {
          if (document.activeElement === last || !dialogRef.current.contains(document.activeElement)) {
            e.preventDefault()
            first.focus()
          }
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown, true)

    return () => {
      clearTimeout(focusTimer)
      window.removeEventListener('keydown', handleKeyDown, true)

      // 1. Un-inert background elements BEFORE restoring focus
      for (const el of inertElementsRef.current) {
        el.inert = false
        el.removeAttribute('inert')
      }
      inertElementsRef.current = []

      // 2. Restore focus to opening element
      if (previousFocusRef.current && typeof previousFocusRef.current.focus === 'function') {
        try {
          previousFocusRef.current.focus()
        } catch {
          // Ignore focus error
        }
        previousFocusRef.current = null
      }
    }
  }, [isOpen, onClose, dialogRef, initialFocusRef, closeOnEscape])
}
