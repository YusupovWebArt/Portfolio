import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test.describe('Next.js 16 Navigation and Case Study Verification', () => {
  test('should navigate to project case study and verify SEO/a11y standards', async ({
    page,
  }) => {
    await page.goto('./')
    await page.waitForLoadState('networkidle')

    // Find and navigate to first project details or standalone route
    const detailsButtons = page.getByRole('button', { name: /view details/i })
    if ((await detailsButtons.count()) > 0) {
      await detailsButtons.first().click()
      await expect(
        page.getByRole('button', { name: /back to (featured )?projects/i }),
      ).toBeVisible()
    }

    // Run axe-core accessibility audit
    const scanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
      .analyze()

    const criticalOrSerious = scanResults.violations.filter(
      (v) => v.impact === 'critical' || v.impact === 'serious',
    )

    expect(criticalOrSerious).toEqual([])
  })
})
