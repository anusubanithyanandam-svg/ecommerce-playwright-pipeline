const{ test , expect } = require('@playwright/test');
test.beforeEach(async({page}) => {
    await page.goto('https://www.saucedemo.com');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
});
test('Verify products page header',async({page})=>{
    await expect (page.locator('.title')).toHaveText('Products');

});
test('Verify cart badge updates to 1',async({page})=>{
await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
await expect (page.locator('.shopping_cart_badge')).toHaveText('1');
});