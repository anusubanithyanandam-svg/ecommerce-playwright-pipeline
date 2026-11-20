const {test , expect} = require('@playwright/test');
const{LoginPage, LoginPage} = require('./Pages/LoginPage');

test('Day 8 -Login using Page Object Model',async({page})=>{
    const LoginPage = new LoginPage(page);
    await LoginPage.goto();
    await LoginPage.login('standard_user','secret_sauce');
    await expect(page.locator('.title')).toHaveText('Products');
});