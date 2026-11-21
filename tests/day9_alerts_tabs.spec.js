const { test , expect} = require('@playwright/test');
test('Handle Javascript Alerts',async({page})=>{
await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
page.once('dialog',dialog => dialog.accept());
await page.getByRole('button',{name:'Click for JS Alert'}).click();
await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
});
test('Handle Multiple Browser Tabs',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/windows');
    const popupPromise = page.waitForEvent('popup');
    await page.getByRole('link',{name:'Click Here'}).click();
    const newTab = await popupPromise;
    await expect(newTab.getByRole('heading')).toHaveText('New Window');
});