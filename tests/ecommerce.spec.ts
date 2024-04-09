import { expect, test } from '@playwright/test'

test('add product to the cart', async ({ page }) => {
  await page.goto('https://automationexercise.com/')

  await page.locator('.product-image-wrapper .choose a >> nth=0').click()

  await page.locator('input#quantity').fill('3')
  await page.locator('button.cart').click()

  await expect(page.locator('#cartModal')).toBeVisible()
  await expect(page.locator('#cartModal .modal-title')).toHaveText('Added!')

  await page.locator('#cartModal button[data-dismiss]').click()
  await expect(page.locator('#cartModal')).not.toBeVisible()
})
