import { Page, expect } from "@playwright/test";

export class CartPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async openCart() {
    await this.page.locator(".shopping_cart_link").click();
  }

  async verifyProduct(productName: string) {
    await expect(this.page.locator(".inventory_item_name")).toHaveText(productName);
  }

  async verifyQuantity(quantity: string) {
    await expect(this.page.locator(".cart_quantity")).toHaveText(quantity);
  }
}