import { expect, test } from '@playwright/test'

test('test', async ({ page }) => {
  await page.goto('http://uitestingplayground.com/textinput')

  await expect(page.locator('#newButtonName')).toBeVisible()
  await page.locator('#newButtonName').fill('New Button Name')

  await page.locator('#updatingButton').click()
  await expect(page.locator('#updatingButton')).toHaveText('New Button Name')
})
