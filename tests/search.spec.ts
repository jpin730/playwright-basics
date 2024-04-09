import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('https://playwright.dev/docs/intro')
})

test('Perform a search that has no results', async ({ page }) => {
  await page.getByRole('button', { name: 'Search' }).click()

  await page.getByPlaceholder('Search docs').click()

  await page.getByPlaceholder('Search docs').fill('hascontent')

  await expect(page.locator('.DocSearch-NoResults')).toBeVisible()

  await expect(
    page.locator('.DocSearch-NoResults .DocSearch-Title'),
  ).toHaveText('No results for "hascontent"')
})

test('Clear the search input', async ({ page }) => {
  await page.getByRole('button', { name: 'Search' }).click()

  const searchBox = page.getByPlaceholder('Search docs')

  await searchBox.click()

  await searchBox.fill('somerandomtext')

  await expect(searchBox).toHaveValue('somerandomtext')

  await page.getByRole('button', { name: 'Clear the query' }).click()

  await expect(searchBox).toHaveAttribute('value', '')
})

test('Perform a search that generates at least one result', async ({
  page,
}) => {
  await page.getByRole('button', { name: 'Search ' }).click()

  const searchBox = page.getByPlaceholder('Search docs')

  await searchBox.click()

  await page.getByPlaceholder('Search docs').fill('havetext')

  await expect(searchBox).toHaveValue('havetext')

  await page.locator('.DocSearch-Dropdown-Container section').nth(1).waitFor()
  const numberOfResults = await page
    .locator('.DocSearch-Dropdown-Container section')
    .count()
  await expect(numberOfResults).toBeGreaterThan(0)
})
