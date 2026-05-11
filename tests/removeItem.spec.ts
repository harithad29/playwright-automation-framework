import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";
import { loginData } from "../test-data";

test.describe("Cart item removal", () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(
      loginData.validUser.username,
      loginData.validUser.password
    );
  });

  test("User can remove item from cart", async ({ page }) => {
    const inventoryPage = new InventoryPage(page);

    await inventoryPage.addBackpackToCart();
    await expect(page.locator(".shopping_cart_badge")).toHaveText("1");

    await inventoryPage.removeBackpackFromCart();

    await expect(page.locator(".shopping_cart_badge")).toHaveCount(0);
  });
});