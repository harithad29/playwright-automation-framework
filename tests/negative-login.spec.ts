import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { loginData } from "../test-data";

test.describe("Negative login scenarios", () => {
  test("Invalid password shows error message", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(
      loginData.invalidUser.username,
      loginData.invalidUser.password
    );

    await expect(page.locator('[data-test="error"]')).toContainText(
      "Username and password do not match"
    );
  });

  test("Locked out user shows locked out error message", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(
      loginData.lockedOutUser.username,
      loginData.lockedOutUser.password
    );

    await expect(page.locator('[data-test="error"]')).toContainText(
      "Sorry, this user has been locked out"
    );
  });
});