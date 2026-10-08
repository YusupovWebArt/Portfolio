import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Google Analytics 4 & Consent Mode v2 Basic Specification (E2E & TDD)', () => {
  test('should not make any network requests to Google Analytics before explicit user consent', async ({
    page,
  }) => {
    const trackingRequests: string[] = [];

    // Intercept and record all network traffic to analytics domains
    page.on('request', (request) => {
      const url = request.url();
      if (
        url.includes('googletagmanager.com') ||
        url.includes('google-analytics.com')
      ) {
        trackingRequests.push(url);
      }
    });

    await page.goto('./');
    await page.waitForLoadState('networkidle');

    // Confirm zero analytics requests were initiated on initial boot
    expect(
      trackingRequests,
      `Unexpected tracking requests before consent: ${trackingRequests.join(', ')}`
    ).toHaveLength(0);

    // Verify Consent Banner is visible on initial unconsented visit
    const banner = page.getByRole('region', { name: /cookie consent/i });
    await expect(banner).toBeVisible();
  });

  test('should pass axe-core accessibility audit on consent banner', async ({ page }) => {
    await page.goto('./');
    await page.waitForLoadState('networkidle');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .include('[data-testid="consent-banner"]')
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
      .analyze();

    const criticalAndSerious = accessibilityScanResults.violations.filter(
      (v) => v.impact === 'critical' || v.impact === 'serious'
    );

    expect(
      criticalAndSerious,
      `A11y violations found in consent banner: ${JSON.stringify(criticalAndSerious, null, 2)}`
    ).toHaveLength(0);
  });

  test('should load Google Analytics when visitor clicks Accept, and persist across reloads', async ({
    page,
  }) => {
    const trackingRequests: string[] = [];
    page.on('request', (request) => {
      const url = request.url();
      if (
        url.includes('googletagmanager.com') ||
        url.includes('google-analytics.com')
      ) {
        trackingRequests.push(url);
      }
    });

    await page.goto('./');
    await page.waitForLoadState('networkidle');

    // Click Accept
    const acceptBtn = page.getByRole('button', { name: /accept all|прийняти всі|aceptar todas/i });
    await acceptBtn.click();

    // Script should load
    await page.waitForTimeout(1000);
    const hasAnalyticsScript = await page.evaluate(() => {
      return document.getElementById('gtag-script') !== null;
    });
    expect(hasAnalyticsScript).toBe(true);

    // Reload page: should still retain granted status and not re-show banner
    await page.reload();
    await page.waitForLoadState('networkidle');
    const banner = page.locator('[data-testid="consent-banner"]');
    await expect(banner).toBeHidden();
  });

  test('should not load Google Analytics when visitor clicks Decline, and allow revoking from footer', async ({
    page,
  }) => {
    const trackingRequests: string[] = [];
    page.on('request', (request) => {
      const url = request.url();
      if (
        url.includes('googletagmanager.com') ||
        url.includes('google-analytics.com')
      ) {
        trackingRequests.push(url);
      }
    });

    await page.goto('./');
    await page.waitForLoadState('networkidle');

    // Click Decline
    const declineBtn = page.getByRole('button', { name: /decline|відхилити|rechazar/i });
    await declineBtn.click();

    expect(trackingRequests).toHaveLength(0);

    // Scroll to footer and click Cookie Settings
    const footerSettingsBtn = page.getByRole('button', {
      name: /cookie settings|налаштування cookies|configuración de cookies/i,
    });
    await footerSettingsBtn.scrollIntoViewIfNeeded();
    await footerSettingsBtn.click();

    // Banner should re-open
    const banner = page.locator('[data-testid="consent-banner"]');
    await expect(banner).toBeVisible();
  });
});
