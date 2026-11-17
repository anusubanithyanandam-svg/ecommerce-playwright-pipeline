const { test , expect} = require('@playwright/test');
test('Day 5 - Complete Checkout flow',async({page}) =>{
await page.goto('https://www.saucedemo.com/');
await page.locator('#user-name').fill('standard_user');
await page.locator('#password').fill('secret-sauce');
await page.locator('#login-button').click();
await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
await page.locator('.shopping_cart_link').click();
await page.locator('[data-test="checkout"]').click();
await page.locator('[data-test="firstName"]').fill('Anusuya');
await page.locator('[data-test="lastName"]').fill('N');
await page.locator('[data-test="postalCode"]').fill('628501');
await page.locator('[data-test="continue"]').click();
await page.locator('[data-test="finish"]').click();
await expect(page.locator('.complete-header').toContainText('Thank you for your order!'));
});