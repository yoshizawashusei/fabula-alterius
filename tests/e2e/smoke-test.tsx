import { test, expect } from '@playwright/test';

test('ホームページが正常に表示される', async ({ page }) => {
  const response = await page.goto('/');

  expect(response?.status()).toBe(200);

  await expect(page).toHaveTitle(/Fabula Alterius/);
});