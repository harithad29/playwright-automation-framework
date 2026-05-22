import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";
import { CartPage } from "../pages/CartPage";
import { loginData, productData } from "../test-data";

test.describe("Cart functionality", () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(
      loginData.validUser.username,
      loginData.validUser.password
    );
  });

  test("User can add item to cart", async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    await inventoryPage.addBackpackToCart();

    await expect(page.locator(".shopping_cart_badge")).toHaveText("2");

    await inventoryPage.openCart();
    await cartPage.verifyProduct(productData.backpack);
    await cartPage.verifyQuantity("1");
  });
});