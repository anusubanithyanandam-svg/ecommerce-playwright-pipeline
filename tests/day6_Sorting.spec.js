const { test,expect} = require('@playwright/test');
test('Day 6 - Sort Product Low to High',async({page}) =>{
    await page.goto('https://www.saucedemo.com');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
    await page.getByRole('combobox').selectOption('lohi');
    await expect(page.locator('.inventory_item_name').first()).toContainText('Sauce Labs Onesie');
    await expect(page.locator('.inventory_item_price').first()).toContainText('$7.99');


});
