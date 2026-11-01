const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test('Login with valid credentials',async({page})=>{
    const l1 = new LoginPage(page);
    await l1.open();
    await l1.login('standard_user','secret_sauce');
    await expect(page).toHaveURL(/inventory/);
});
test('Login with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login('wrong_user', 'wrong_password');
    await expect(loginPage.errormsg).toBeVisible();
});
