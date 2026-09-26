import { test, expect } from '@playwright/test';

// Relative URLs are resolved against `baseURL` in playwright.config.ts, which
// already includes the site's `/Levi.github.io` base path.
test('home page loads and renders core content', async ({ page }) => {
  const response = await page.goto('./');
  expect(response, 'expected an HTTP response for the home page').not.toBeNull();
  expect(response!.status(), 'home page should not error').toBeLessThan(400);

  await expect(page).toHaveTitle(/Levi Joan Tampus/);
  await expect(page.locator('main#main')).toBeVisible();
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Levi');
});

test('projects page loads', async ({ page }) => {
  const response = await page.goto('./projects/');
  expect(response, 'expected an HTTP response for the projects page').not.toBeNull();
  expect(response!.status(), 'projects page should not error').toBeLessThan(400);

  await expect(page.locator('main#main')).toBeVisible();
});
