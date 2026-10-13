import React, { useState, useRef } from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { useDialogA11y } from '../hooks/useDialogA11y'

const TestDialog = ({
  initialOpen = false,
  onClose = vi.fn(),
}: {
  initialOpen?: boolean
  onClose?: () => void
}) => {
  const [isOpen, setIsOpen] = useState(initialOpen)
  const dialogRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleClose = () => {
    setIsOpen(false)
    onClose()
  }

  useDialogA11y({
    isOpen,
    onClose: handleClose,
    dialogRef,
    initialFocusRef: inputRef,
  })

  return (
    <div>
      <div data-testid="background-content">
        <button type="button" data-testid="open-button" onClick={() => setIsOpen(true)}>
          Open Dialog
        </button>
      </div>
      {isOpen && (
        <div data-testid="dialog-backdrop">
          <div ref={dialogRef} role="dialog" aria-modal="true" data-testid="dialog-box">
            <input ref={inputRef} data-testid="dialog-input" />
            <button type="button" data-testid="first-button">
              First Action
            </button>
            <button type="button" data-testid="close-button" onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

describe('useDialogA11y Specification (WCAG 2.2 AA / EAA 2026)', () => {
  it('should trap focus, handle Escape key, and mark background inert', () => {
    const handleClose = vi.fn()
    render(<TestDialog onClose={handleClose} />)

    const openBtn = screen.getByTestId('open-button')
    openBtn.focus()
    expect(document.activeElement).toBe(openBtn)

    fireEvent.click(openBtn)

    const dialogBox = screen.getByTestId('dialog-box')
    expect(dialogBox).toBeDefined()

    const backgroundContent = screen.getByTestId('background-content')
    expect(backgroundContent.hasAttribute('inert')).toBe(true)

    // Press Escape to dismiss
    fireEvent.keyDown(window, { key: 'Escape' })
    expect(handleClose).toHaveBeenCalledTimes(1)
  })

  it('should loop focus with Tab and Shift+Tab inside dialog', () => {
    render(<TestDialog initialOpen={true} />)

    const input = screen.getByTestId('dialog-input')
    const closeBtn = screen.getByTestId('close-button')

    input.focus()
    expect(document.activeElement).toBe(input)

    // Shift+Tab from first element wraps to last element
    fireEvent.keyDown(window, { key: 'Tab', shiftKey: true })
    expect(document.activeElement).toBe(closeBtn)

    // Tab from last element wraps to first element
    fireEvent.keyDown(window, { key: 'Tab', shiftKey: false })
    expect(document.activeElement).toBe(input)
  })
})
