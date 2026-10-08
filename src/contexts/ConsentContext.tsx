import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { initGoogleAnalytics, purgeAnalyticsCookies } from '../lib/analytics';

export type ConsentStatus = 'granted' | 'denied' | 'undecided';

export interface ConsentRecord {
  status: 'granted' | 'denied';
  timestamp: number;
  policyVersion: string;
}

export const CURRENT_POLICY_VERSION = '1.0';
export const CONSENT_STORAGE_KEY = 'cookie_consent';
// 24 months (in milliseconds) as recommended by European DPA (AEPD/GDPR)
export const MAX_CONSENT_AGE_MS = 24 * 30 * 24 * 60 * 60 * 1000;

export interface ConsentContextType {
  status: ConsentStatus;
  isBannerOpen: boolean;
  isPolicyModalOpen: boolean;
  acceptCookies: () => void;
  declineCookies: () => void;
  openSettings: () => void;
  openPolicyModal: () => void;
  closePolicyModal: () => void;
}

const ConsentContext = createContext<ConsentContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useConsent = (): ConsentContextType => {
  const context = useContext(ConsentContext);
  if (!context) {
    throw new Error('useConsent must be used within a ConsentProvider');
  }
  return context;
};

export const ConsentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [status, setStatus] = useState<ConsentStatus>('undecided');
  const [isBannerOpen, setIsBannerOpen] = useState<boolean>(false);
  const [isPolicyModalOpen, setIsPolicyModalOpen] = useState<boolean>(false);

  // Read stored preference on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
      if (!stored) {
        setStatus('undecided');
        setIsBannerOpen(true);
        return;
      }

      const parsed: ConsentRecord = JSON.parse(stored);
      const isExpired = Date.now() - parsed.timestamp > MAX_CONSENT_AGE_MS;
      const isOutdatedVersion = parsed.policyVersion !== CURRENT_POLICY_VERSION;

      if (isExpired || isOutdatedVersion) {
        setStatus('undecided');
        setIsBannerOpen(true);
        return;
      }

      setStatus(parsed.status);
      setIsBannerOpen(false);

      if (parsed.status === 'granted') {
        initGoogleAnalytics();
      } else {
        purgeAnalyticsCookies();
      }
    } catch {
      // JSON parse error or security exception
      setStatus('undecided');
      setIsBannerOpen(true);
    }
  }, []);

  const acceptCookies = useCallback(() => {
    const record: ConsentRecord = {
      status: 'granted',
      timestamp: Date.now(),
      policyVersion: CURRENT_POLICY_VERSION,
    };
    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(record));
    } catch {
      // Storage unavailable fallback
    }
    setStatus('granted');
    setIsBannerOpen(false);
    initGoogleAnalytics();
  }, []);

  const declineCookies = useCallback(() => {
    const record: ConsentRecord = {
      status: 'denied',
      timestamp: Date.now(),
      policyVersion: CURRENT_POLICY_VERSION,
    };
    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(record));
    } catch {
      // Storage unavailable fallback
    }
    setStatus('denied');
    setIsBannerOpen(false);
    purgeAnalyticsCookies();
  }, []);

  const openSettings = useCallback(() => {
    setIsBannerOpen(true);
  }, []);

  const openPolicyModal = useCallback(() => {
    setIsPolicyModalOpen(true);
  }, []);

  const closePolicyModal = useCallback(() => {
    setIsPolicyModalOpen(false);
  }, []);

  return (
    <ConsentContext.Provider
      value={{
        status,
        isBannerOpen,
        isPolicyModalOpen,
        acceptCookies,
        declineCookies,
        openSettings,
        openPolicyModal,
        closePolicyModal,
      }}
    >
      {children}
    </ConsentContext.Provider>
  );
};
