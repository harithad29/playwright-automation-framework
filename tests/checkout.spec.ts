import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login("standard_user", "secret_sauce");
});

test("User can complete checkout", async ({ page }) => {
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await inventoryPage.addBackpackToCart();
  await inventoryPage.openCart();

  await cartPage.verifyProduct("Sauce Labs Backpack");

  await checkoutPage.clickCheckout();

  await checkoutPage.enterCheckoutInfo("John", "Doe", "12345");
  await checkoutPage.continueCheckout();

  await checkoutPage.finishCheckout();

  await expect(page.getByText("Thank you for your order!")).toBeVisible();
});