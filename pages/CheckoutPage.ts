import { Page } from "@playwright/test";

export class CheckoutPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async clickCheckout() {
    await this.page.locator('[data-test="checkout"]').click();
  }

  async enterCheckoutInfo(firstName: string, lastName: string, postalCode: string) {
    await this.page.getByPlaceholder("First Name").fill(firstName);
    await this.page.getByPlaceholder("Last Name").fill(lastName);
    await this.page.getByPlaceholder("Zip/Postal Code").fill(postalCode);
  }

  async continueCheckout() {
    await this.page.locator('[data-test="continue"]').click();
  }

  async finishCheckout() {
    await this.page.locator('[data-test="finish"]').click();
  }
}