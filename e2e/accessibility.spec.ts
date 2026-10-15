import { test, expect } from "@playwright/test";
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
});
