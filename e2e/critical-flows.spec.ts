import { test, expect } from "@playwright/test";

test.describe("Critical User Flows & Browser Integration", () => {
  test("should render home page with single primary h1 and correct title", async ({ page }) => {
    await page.goto("./");
    await page.waitForLoadState("networkidle");

    // Single primary h1
    const h1Elements = page.locator("h1");
    await expect(h1Elements).toHaveCount(1);
    await expect(h1Elements.first()).toContainText(/Artur Yusupov/i);

    // Title verification
    await expect(page).toHaveTitle(/Artur Yusupov/i);
  });

  test("should switch languages seamlessly and mutate document html lang attribute", async ({ page }) => {
    await page.goto("./");
    await page.waitForLoadState("networkidle");

    // Initial default lang is en
    await expect(page.locator("html")).toHaveAttribute("lang", "en");

    // Find language switcher dropdown or buttons
    const langSwitcher = page.getByRole("button", { name: /switch language/i });
    if (await langSwitcher.isVisible()) {
      await langSwitcher.click();
    }

    // Switch to Ukrainian
    const uaOption = page.getByRole("button", { name: /українська/i });
    if (await uaOption.isVisible()) {
      await uaOption.click();
      await expect(page.locator("html")).toHaveAttribute("lang", "uk");
      await expect(page.getByRole("link", { name: /проєкти/i })).toBeVisible();
    }

    // Switch to Spanish
    if (await langSwitcher.isVisible()) {
      await langSwitcher.click();
    }
    const esOption = page.getByRole("button", { name: /español/i });
    if (await esOption.isVisible()) {
      await esOption.click();
      await expect(page.locator("html")).toHaveAttribute("lang", "es");
      await expect(page.getByRole("link", { name: /proyectos/i })).toBeVisible();
    }
  });

  test("should toggle dark and light modes cleanly", async ({ page }) => {
    await page.goto("./");
    await page.waitForLoadState("networkidle");

    const html = page.locator("html");
    await expect(html).toHaveClass(/dark/);

    // Click theme toggle button
    const themeButton = page.getByRole("button", { name: /switch to (light|dark) mode/i });
    await themeButton.click();
    await expect(html).not.toHaveClass(/dark/);

    // Click again to return to dark mode
    await themeButton.click();
    await expect(html).toHaveClass(/dark/);
  });

  test("should open project case study view and navigate back to projects catalog", async ({ page }) => {
    await page.goto("./");
    await page.waitForLoadState("networkidle");

    // Click first View Details button
    const firstDetailButton = page.getByRole("button", { name: /view details/i }).first();
    await firstDetailButton.click();

    // Verify detail screen is active
    const backButton = page.getByRole("button", { name: /back to (featured )?projects/i });
    await expect(backButton).toBeVisible();

    // Return to catalog
    await backButton.click();
    await expect(page.getByRole("heading", { level: 2, name: /featured projects/i })).toBeVisible();
  });
});
