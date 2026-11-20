const {test , expect} = require('@playwright/test');
const{LoginPage} = require('./Pages/LoginPage');

test('Day 8 -Login using Page Object Model',async({page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user','secret_sauce');
    await expect(page.locator('.title')).toHaveText('Products');
});