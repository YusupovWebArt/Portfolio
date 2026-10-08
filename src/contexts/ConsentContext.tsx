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

function getInitialConsentRecord(): ConsentRecord | null {
  if (typeof window === 'undefined') return null;
  try {
    const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!stored) return null;
    const parsed: ConsentRecord = JSON.parse(stored);
    const isExpired = Date.now() - parsed.timestamp > MAX_CONSENT_AGE_MS;
    const isOutdatedVersion = parsed.policyVersion !== CURRENT_POLICY_VERSION;
    if (isExpired || isOutdatedVersion) return null;
    return parsed;
  } catch {
    return null;
  }
}

export const ConsentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [status, setStatus] = useState<ConsentStatus>(() => {
    const record = getInitialConsentRecord();
    return record ? record.status : 'undecided';
  });
  const [isBannerOpen, setIsBannerOpen] = useState<boolean>(() => {
    const record = getInitialConsentRecord();
    return !record;
  });
  const [isPolicyModalOpen, setIsPolicyModalOpen] = useState<boolean>(false);

  // Synchronize analytics loader based on status
  useEffect(() => {
    if (status === 'granted') {
      initGoogleAnalytics();
    } else if (status === 'denied') {
      purgeAnalyticsCookies();
    }
  }, [status]);

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
