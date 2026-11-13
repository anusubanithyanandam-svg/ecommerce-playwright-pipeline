const{ test , expect } = require('@playwright/test');

test('Day 1 - Verify HomePage Title',async ({page}) =>{
  await page.goto('https://automationexercise.com/');
  await expect(page).toHaveTitle(/Automation Exercise/);
});
