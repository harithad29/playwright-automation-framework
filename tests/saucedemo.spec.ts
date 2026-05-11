import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { CartPage } from "../pages/CartPage";

test("User can add item to cart", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login("standard_user", "secret_sauce");

   await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();await page.locator(".shopping_cart_link").click();
   await expect(page.locator(".shopping_cart_badge")).toHaveText("1");

await expect(page.getByText("Sauce Labs Backpack")).toBeVisible();
await expect(page.locator(".cart_quantity")).toHaveText("1");
 

  

});