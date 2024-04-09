import { expect, test } from '@playwright/test'

test('test', async ({ page }) => {
  await page.goto('http://uitestingplayground.com/')

  //   await page.getByText("Aristotle").click();
  await page.locator('text=Aristotle').click()

  //   await page.getByRole("link", { name: "Resources" }).click();
  await page.locator('a.nav-link:has-text("Resources")').click()
  await expect(page).toHaveURL('http://uitestingplayground.com/resources')

  await page.locator('a.nav-link:has-text("Home")').click()
  await expect(page).toHaveURL('http://uitestingplayground.com/home')

  //   await page.getByRole('link', { name: 'Click' }).click()
  await page.locator('a:has-text("Click")').click()
  await expect(page).toHaveURL('http://uitestingplayground.com/click')

  await expect(page.locator('button#badButton')).toHaveClass('btn btn-primary')
  await page.locator('button#badButton').click()
  await expect(page.locator('button#badButton')).toHaveClass('btn btn-success')
})
