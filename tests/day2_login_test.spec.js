const { test,expect} = require('@playwright/test');
test('Day 2 - valid the Login Test',async({page}) =>{
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.locator('#username').fill('tomsmith');
  await page.loactor('#password').fill('SuperSecretPassword!');
  await page.locator('button[type="Submit"]').click();
  await expect(page.locator('#flash')).toconatinText('You logged into a secure area!')'
});
