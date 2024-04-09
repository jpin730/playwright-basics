# Playwright Basics

This repository contains the basics of Playwright, a Node.js library to automate the browser. It is a high-level API to control headless or full versions of Chromium, Firefox, and WebKit. It can be used to perform tasks such as filling out forms, clicking buttons, and navigating through pages.

To run tests, run the following command:

```bash
npx playwright test
```

To debug mode, run the following command:

```bash
npx playwright test --debug
```

To run tests in headful mode, run the following command:

```bash
npx playwright test --headed
```

Note: Uncomment the `slowMo` option in the `playwright.config.js` file to slow down the test execution.
