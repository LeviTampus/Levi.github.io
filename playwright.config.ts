import { defineConfig, devices } from '@playwright/test';

// This portfolio is a static Astro site served under the `base` path set in
// astro.config.mjs, so the local URL includes that prefix. Both `astro dev`
// and `astro preview` serve it at:
//   http://localhost:4321/Levi.github.io/
const PORT = 4321;
const BASE_PATH = '/Levi.github.io';
const baseURL = `http://localhost:${PORT}${BASE_PATH}/`;

export default defineConfig({
  testDir: './tests/e2e',
  reporter: 'list',
  use: {
    baseURL,
    trace: 'on-first-retry',
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: {
    // Reuses an already-running server (e.g. `npm run preview`) when the URL
    // responds; otherwise starts the Astro dev server.
    command: `npm run dev -- --port ${PORT}`,
    url: baseURL,
    reuseExistingServer: true,
    timeout: 120_000,
  },
});
