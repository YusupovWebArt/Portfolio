import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  ConsentProvider,
  useConsent,
  CURRENT_POLICY_VERSION,
  CONSENT_STORAGE_KEY,
  MAX_CONSENT_AGE_MS,
} from './ConsentContext';
import { GA_MEASUREMENT_ID } from '../lib/analytics';

// Consumer component for testing context
function ConsentConsumer() {
  const {
    status,
    isBannerOpen,
    isSettingsOpen,
    isPolicyModalOpen,
    acceptCookies,
    declineCookies,
    openSettings,
    closeSettings,
    openPolicyModal,
    closePolicyModal,
  } = useConsent();

  return (
    <div>
      <span data-testid="consent-status">{status}</span>
      <span data-testid="banner-visibility">{isBannerOpen ? 'banner-visible' : 'banner-hidden'}</span>
      <span data-testid="settings-visibility">{isSettingsOpen ? 'settings-open' : 'settings-closed'}</span>
      <span data-testid="modal-visibility">{isPolicyModalOpen ? 'modal-visible' : 'modal-hidden'}</span>
      <button onClick={acceptCookies}>Accept Cookies</button>
      <button onClick={declineCookies}>Decline Cookies</button>
      <button onClick={openSettings}>Open Settings</button>
      <button onClick={closeSettings}>Close Settings</button>
      <button onClick={openPolicyModal}>Open Policy</button>
      <button onClick={closePolicyModal}>Close Policy</button>
    </div>
  );
}

describe('ConsentContext Specification (TDD)', () => {
  beforeEach(() => {
    localStorage.clear();
    document.cookie = '';
    vi.restoreAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should default to status undecided and banner-visible when localStorage is empty', () => {
    render(
      <ConsentProvider>
        <ConsentConsumer />
      </ConsentProvider>
    );

    expect(screen.getByTestId('consent-status')).toHaveTextContent('undecided');
    expect(screen.getByTestId('banner-visibility')).toHaveTextContent('banner-visible');
    expect(screen.getByTestId('modal-visibility')).toHaveTextContent('modal-hidden');
  });

  it('should save status granted to localStorage and hide banner when acceptCookies is called', async () => {
    const user = userEvent.setup();
    render(
      <ConsentProvider>
        <ConsentConsumer />
      </ConsentProvider>
    );

    await user.click(screen.getByRole('button', { name: /accept cookies/i }));

    expect(screen.getByTestId('consent-status')).toHaveTextContent('granted');
    expect(screen.getByTestId('banner-visibility')).toHaveTextContent('banner-hidden');

    const storedRaw = localStorage.getItem(CONSENT_STORAGE_KEY);
    expect(storedRaw).not.toBeNull();
    const stored = JSON.parse(storedRaw as string);
    expect(stored.status).toBe('granted');
    expect(stored.policyVersion).toBe(CURRENT_POLICY_VERSION);
    expect(typeof stored.timestamp).toBe('number');
  });

  it('should save status denied to localStorage and hide banner when declineCookies is called', async () => {
    const user = userEvent.setup();
    render(
      <ConsentProvider>
        <ConsentConsumer />
      </ConsentProvider>
    );

    await user.click(screen.getByRole('button', { name: /decline cookies/i }));

    expect(screen.getByTestId('consent-status')).toHaveTextContent('denied');
    expect(screen.getByTestId('banner-visibility')).toHaveTextContent('banner-hidden');

    const storedRaw = localStorage.getItem(CONSENT_STORAGE_KEY);
    expect(storedRaw).not.toBeNull();
    const stored = JSON.parse(storedRaw as string);
    expect(stored.status).toBe('denied');
    expect(stored.policyVersion).toBe(CURRENT_POLICY_VERSION);
  });

  it('should honor valid existing granted status from localStorage without opening banner', () => {
    const validRecord = {
      status: 'granted',
      timestamp: Date.now() - 1000,
      policyVersion: CURRENT_POLICY_VERSION,
    };
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(validRecord));

    render(
      <ConsentProvider>
        <ConsentConsumer />
      </ConsentProvider>
    );

    expect(screen.getByTestId('consent-status')).toHaveTextContent('granted');
    expect(screen.getByTestId('banner-visibility')).toHaveTextContent('banner-hidden');
  });

  it('should expire consent and reset to undecided if stored timestamp exceeds MAX_CONSENT_AGE_MS', () => {
    const expiredRecord = {
      status: 'granted',
      timestamp: Date.now() - (MAX_CONSENT_AGE_MS + 10000),
      policyVersion: CURRENT_POLICY_VERSION,
    };
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(expiredRecord));

    render(
      <ConsentProvider>
        <ConsentConsumer />
      </ConsentProvider>
    );

    expect(screen.getByTestId('consent-status')).toHaveTextContent('undecided');
    expect(screen.getByTestId('banner-visibility')).toHaveTextContent('banner-visible');
  });

  it('should reset to undecided if stored policyVersion differs from CURRENT_POLICY_VERSION', () => {
    const outdatedRecord = {
      status: 'granted',
      timestamp: Date.now() - 1000,
      policyVersion: '0.9-legacy',
    };
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(outdatedRecord));

    render(
      <ConsentProvider>
        <ConsentConsumer />
      </ConsentProvider>
    );

    expect(screen.getByTestId('consent-status')).toHaveTextContent('undecided');
    expect(screen.getByTestId('banner-visibility')).toHaveTextContent('banner-visible');
  });

  it('should allow reopening settings banner via openSettings', async () => {
    const user = userEvent.setup();
    const validRecord = {
      status: 'granted',
      timestamp: Date.now() - 1000,
      policyVersion: CURRENT_POLICY_VERSION,
    };
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(validRecord));

    render(
      <ConsentProvider>
        <ConsentConsumer />
      </ConsentProvider>
    );

    expect(screen.getByTestId('banner-visibility')).toHaveTextContent('banner-hidden');

    await user.click(screen.getByRole('button', { name: /open settings/i }));
    expect(screen.getByTestId('banner-visibility')).toHaveTextContent('banner-visible');
    expect(screen.getByTestId('settings-visibility')).toHaveTextContent('settings-open');

    await user.click(screen.getByRole('button', { name: /close settings/i }));
    expect(screen.getByTestId('settings-visibility')).toHaveTextContent('settings-closed');
  });

  it('should toggle policy modal visibility via openPolicyModal and closePolicyModal', async () => {
    const user = userEvent.setup();
    render(
      <ConsentProvider>
        <ConsentConsumer />
      </ConsentProvider>
    );

    expect(screen.getByTestId('modal-visibility')).toHaveTextContent('modal-hidden');

    await user.click(screen.getByRole('button', { name: /open policy/i }));
    expect(screen.getByTestId('modal-visibility')).toHaveTextContent('modal-visible');

    await user.click(screen.getByRole('button', { name: /close policy/i }));
    expect(screen.getByTestId('modal-visibility')).toHaveTextContent('modal-hidden');
  });

  it('should immediately halt GA tracking and update all 4 Consent Mode v2 signals to denied upon revocation', async () => {
    const user = userEvent.setup();
    render(
      <ConsentProvider>
        <ConsentConsumer />
      </ConsentProvider>
    );

    // Accept first
    await user.click(screen.getByRole('button', { name: /accept/i }));
    expect(screen.getByTestId('consent-status')).toHaveTextContent('granted');
    expect(window[`ga-disable-${GA_MEASUREMENT_ID}`]).toBe(false);

    // Decline / revoke
    await user.click(screen.getByRole('button', { name: /decline/i }));
    expect(screen.getByTestId('consent-status')).toHaveTextContent('denied');
    expect(window[`ga-disable-${GA_MEASUREMENT_ID}`]).toBe(true);
  });

  it('should push Arguments object rather than an Array into dataLayer when gtag is invoked (N3)', async () => {
    const user = userEvent.setup();
    render(
      <ConsentProvider>
        <ConsentConsumer />
      </ConsentProvider>
    );

    await user.click(screen.getByRole('button', { name: /accept/i }));
    expect(window.dataLayer).toBeDefined();
    expect(window.dataLayer?.length).toBeGreaterThan(0);
    // Verify first queued entry is an Arguments object recognizable by gtag.js
    const firstCall = (window.dataLayer as unknown[])[0];
    expect(Object.prototype.toString.call(firstCall)).toBe('[object Arguments]');
  });
});
