const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { CheckoutPage } = require('../pages/CheckoutPage');

test('Complete checkout successfully', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const checkoutPage = new CheckoutPage(page);

    // Login
    await loginPage.open();
    await loginPage.login('standard_user', 'secret_sauce');

    // Add product
    await inventoryPage.addToCartButton.click();
    await inventoryPage.cartIcon.click();

    // Checkout
    await checkoutPage.checkoutButton.click();

    // Enter customer information
    await checkoutPage.firstName.fill('Raj');
    await checkoutPage.lastName.fill('Gurung');
    await checkoutPage.postalCode.fill('44600');

    await checkoutPage.continueButton.click();

    // Finish order
    await checkoutPage.finishButton.click();

    // Verify success
    await expect(checkoutPage.successMessage)
        .toHaveText('Thank you for your order!');
});