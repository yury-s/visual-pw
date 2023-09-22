import { test, expect } from '@playwright/test';
import {argosScreenshot} from '@argos-ci/playwright';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
  await expect(page).toHaveScreenshot();
  await argosScreenshot(page, 'title');
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
  await expect(page).toHaveScreenshot();
  await argosScreenshot(page, 'get started link');
});
