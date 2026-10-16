import { test, expect, type Locator } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("WCAG 2.2 AA Accessibility Audits (EAA 2026 / EN 301 549)", () => {
  test("home page in default dark theme should have zero critical or serious a11y violations", async ({ page }) => {
    await page.goto("./");
    await page.waitForLoadState("networkidle");

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
      .analyze();

    const criticalOrSerious = accessibilityScanResults.violations.filter(
      (v) => v.impact === "critical" || v.impact === "serious"
    );

    expect(criticalOrSerious, JSON.stringify(criticalOrSerious, null, 2)).toEqual([]);
  });

  test("home page in light theme should maintain contrast and accessibility standards", async ({ page }) => {
    await page.goto("./");
    await page.waitForLoadState("networkidle");

    // Toggle theme to light
    const themeButton = page.getByRole("button", { name: /switch to (light|dark) mode/i });
    await themeButton.click();

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
      .analyze();

    const criticalOrSerious = accessibilityScanResults.violations.filter(
      (v) => v.impact === "critical" || v.impact === "serious"
    );

    expect(criticalOrSerious, JSON.stringify(criticalOrSerious, null, 2)).toEqual([]);
  });

  test("project detail view should maintain accessible structure and navigation", async ({ page }) => {
    await page.goto("./");
    await page.waitForLoadState("networkidle");

    // Click first View Details button
    const firstDetailButton = page.getByRole("button", { name: /view details/i }).first();
    await firstDetailButton.click();

    // Verify detail view mounted
    await expect(page.getByRole("button", { name: /back to (featured )?projects/i })).toBeVisible();

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
      .analyze();

    const criticalOrSerious = accessibilityScanResults.violations.filter(
      (v) => v.impact === "critical" || v.impact === "serious"
    );

    expect(criticalOrSerious, JSON.stringify(criticalOrSerious, null, 2)).toEqual([]);
  });

  test("every keyboard tab stop shows a focus indicator (WCAG 2.4.7)", async ({ page }) => {
    await page.goto("./");
    await page.waitForLoadState("networkidle");

    const bad: string[] = [];
    for (let i = 0; i < 60; i++) {
      await page.keyboard.press("Tab");
      const info = await page.evaluate(() => {
        const el = document.activeElement as HTMLElement | null;
        if (!el || el === document.body) return null;
        const shown = (node: Element | null): boolean => {
          if (!node) return false;
          const s = getComputedStyle(node);
          return (
            (s.outlineStyle !== "none" && parseFloat(s.outlineWidth) > 0) ||
            s.boxShadow !== "none"
          );
        };
        const visible =
          shown(el) ||
          shown(el.parentElement) ||
          shown(el.parentElement?.parentElement ?? null);
        return {
          visible,
          label:
            el.getAttribute("aria-label") ??
            el.textContent?.trim().slice(0, 30) ??
            el.tagName,
        };
      });
      if (info && !info.visible) bad.push(info.label);
    }
    expect(bad).toEqual([]);
  });

  test("previously broken controls show an outline on keyboard focus (N1 targeted verification)", async ({ page }) => {
    async function expectOutlineOnKeyboardFocus(locator: Locator): Promise<void> {
      await locator.scrollIntoViewIfNeeded();
      await locator.focus();
      await page.keyboard.press("Tab");
      await page.keyboard.press("Shift+Tab");
      await expect(locator).toBeFocused();
      const ring = await locator.evaluate((el) => {
        const s = getComputedStyle(el);
        return { style: s.outlineStyle, width: parseFloat(s.outlineWidth) || 0 };
      });
      expect(ring.style).not.toBe("none");
      expect(ring.width).toBeGreaterThan(0);
    }

    await page.goto("./");
    await page.waitForLoadState("networkidle");
    await page.keyboard.press("Tab");

    // 1. Consent banner buttons (initial undecided visit)
    const banner = page.getByTestId("consent-banner");
    await expect(banner).toBeVisible();

    const bannerPolicyBtn = banner.locator("button").filter({ hasText: /cookie policy|політика cookies|política de cookies/i });
    await expectOutlineOnKeyboardFocus(bannerPolicyBtn);

    const bannerSettingsBtn = banner.locator("button").filter({ hasText: /cookie settings|налаштування cookies|configuración de cookies/i });
    await expectOutlineOnKeyboardFocus(bannerSettingsBtn);

    // 2. Open Consent Settings dialog and test its controls
    await bannerSettingsBtn.click();
    const settingsDialog = page.getByRole("dialog");
    await expect(settingsDialog).toBeVisible();

    const dialogPolicyBtn = settingsDialog.locator("button").filter({ hasText: /cookie policy|політика cookies|política de cookies/i });
    await expectOutlineOnKeyboardFocus(dialogPolicyBtn);

    const savePreferencesBtn = settingsDialog.getByRole("button", { name: /save preferences|зберегти налаштування|guardar preferencias/i });
    await expectOutlineOnKeyboardFocus(savePreferencesBtn);
    await savePreferencesBtn.click();
    await expect(settingsDialog).toBeHidden();

    // 3. Footer cookie settings button
    const footerSettingsBtn = page.locator("footer").getByRole("button", { name: /cookie settings|налаштування cookies|configuración de cookies/i });
    await expectOutlineOnKeyboardFocus(footerSettingsBtn);

    // 4. Contact section chatbot controls
    const contactSection = page.locator("#contact");
    await contactSection.scrollIntoViewIfNeeded();

    const clearChatBtn = contactSection.locator('button[aria-label*="lear" i], button[aria-label*="очистити" i], button[aria-label*="limpiar" i]');
    if (await clearChatBtn.isVisible()) {
      await expectOutlineOnKeyboardFocus(clearChatBtn);
    }

    const contactSendBtn = contactSection.locator('button:has(svg.lucide-send)').first();
    await expectOutlineOnKeyboardFocus(contactSendBtn);

    // 5. ChatModal controls
    const chatTriggerBtn = page.getByRole("button", { name: /chat with.*ai|спілкуватися.*ai|chatear.*ai/i }).first();
    if (await chatTriggerBtn.isVisible()) {
      await chatTriggerBtn.click();
      const chatModal = page.locator('div[role="dialog"]');
      await expect(chatModal).toBeVisible();

      const modalSendBtn = chatModal.locator('button:has(svg.lucide-send)').first();
      await expectOutlineOnKeyboardFocus(modalSendBtn);

      const modalCloseBtn = chatModal.locator('button:has(svg.lucide-x)').first();
      await expectOutlineOnKeyboardFocus(modalCloseBtn);
      await modalCloseBtn.click();
      await expect(chatModal).toBeHidden();
    }

    // 6. Project detail screenshot modal controls
    const firstDetailButton = page.locator("#projects").getByRole("button", { name: /view details|детальніше|ver detalles/i }).first();
    if (await firstDetailButton.isVisible()) {
      await firstDetailButton.scrollIntoViewIfNeeded();
      await firstDetailButton.click();

      const zoomBtn = page.locator('button[title="Zoom"], button:has(svg.lucide-eye)').first();
      if (await zoomBtn.isVisible({ timeout: 5000 })) {
        await zoomBtn.click();
        const screenshotModal = page.locator('div[role="dialog"][aria-labelledby="screenshot-modal-title"]');
        if (await screenshotModal.isVisible({ timeout: 5000 })) {
          const screenshotCloseBtn = screenshotModal.locator('button:has(svg.lucide-x)').first();
          await expectOutlineOnKeyboardFocus(screenshotCloseBtn);

          const prevBtn = screenshotModal.locator('button[aria-label*="previous" i], button[aria-label*="попередн" i], button[aria-label*="anterior" i]');
          if (await prevBtn.isVisible()) {
            await expectOutlineOnKeyboardFocus(prevBtn);
          }

          const nextBtn = screenshotModal.locator('button[aria-label*="next" i], button[aria-label*="наступн" i], button[aria-label*="siguiente" i]');
          if (await nextBtn.isVisible()) {
            await expectOutlineOnKeyboardFocus(nextBtn);
          }

          await screenshotCloseBtn.click();
        }
      }
    }
  });
});
