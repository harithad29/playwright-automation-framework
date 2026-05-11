# Playwright Automation Framework

This project demonstrates an end-to-end test automation framework using Playwright and TypeScript.

## Features

- Page Object Model (POM)
- Positive and negative UI test scenarios
- API testing using Playwright request context
- Cross-browser testing
- Reusable page classes
- Hooks (`beforeEach`)
- Assertions and validations

## Test Scenarios

### UI Tests
- Login
- Invalid login
- Add to cart
- Remove item
- Checkout
- Negative checkout validations

### API Tests
- GET request validation
- POST request validation
- Negative API endpoint validation

## Tech Stack

- Playwright
- TypeScript
- Node.js

## Run Tests

```bash
npx playwright test