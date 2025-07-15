import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  reporter: [['html', { outputFolder: 'playwright-report' }]],
  use: {
    baseURL: process.env.BASE_URL,
    headless: false,
    screenshot: 'only-on-failure',
    actionTimeout: +(process.env.TIME_OUT || 15000),
    viewport: { width: 1280, height: 720 },
  }, projects: [
    {
      name: 'chrome',
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome', // Uses Google Chrome instead of Chromium
      },
    },
    {
      name: 'safari',
      use: {
        ...devices['Desktop Safari'],
      },
    },
    {
      name: 'api',
      use: {
        baseURL: process.env.API_URL,
        extraHTTPHeaders: {
          accept: 'application/json', // Default headers for API requests
        },
      },
    }
  ],
});
