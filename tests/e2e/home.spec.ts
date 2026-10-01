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

test('projects page tells the narrative', async ({ page }) => {
  await page.goto('./projects/');

  await expect(
    page.getByRole('heading', { level: 2, name: /How I got here/i }),
  ).toBeVisible();
  await expect(page.getByText('The deep build')).toBeVisible();
  await expect(page.getByText('From my day job')).toBeVisible();
  await expect(page.getByRole('link', { name: /RAG Eval Assistant/i }).first()).toBeVisible();
  await expect(page.getByText('Coming soon').first()).toBeVisible();
});

test('projects index lists projects linking to case studies', async ({ page }) => {
  await page.goto('./projects/');

  await expect(page.getByRole('heading', { level: 2, name: /All projects/i })).toBeVisible();

  const row = page.getByRole('link', { name: /LangChain Practice Project/i }).first();
  await expect(row).toBeVisible();
  await expect(row).toHaveAttribute('href', /\/projects\/langchain-practice-project\/?$/);
});

test('a project case study page loads', async ({ page }) => {
  const response = await page.goto('./projects/langchain-practice-project/');
  expect(response, 'expected an HTTP response for the case study page').not.toBeNull();
  expect(response!.status(), 'case study page should not error').toBeLessThan(400);

  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    'LangChain Practice Project',
  );
});
