const { test, expect } = require('@playwright/test');
const fs = require('fs');

test('Extract & Validate E-commerce Products', async ({ page }) => {
  await page.goto('https://automationexercise.com/products');
  await expect(page).toHaveTitle(/All Products/);

  const titles = await page.locator('.productinfo p').allInnerTexts();
  const prices = await page.locator('.productinfo h2').allInnerTexts();

  expect(titles.length).toBeGreaterThan(0);
  expect(titles.length).toBe(prices.length);

  const products = titles.map((title, index) => {
    const cleanPrice = prices[index].trim();
    expect(title.trim().length).toBeGreaterThan(0);
    expect(cleanPrice).toMatch(/^Rs\.\s*\d+/);

    return {
      id: index + 1,
      product_name: title.trim(),
      price: cleanPrice
    };
  });

  fs.writeFileSync('extracted_products.json', JSON.stringify(products, null, 2));

  const csvHeader = 'ID,Product Name,Price\n';
  const csvRows = products.map(p => `${p.id},"${p.product_name}","${p.price}"`).join('\n');
  fs.writeFileSync('extracted_products.csv', csvHeader + csvRows);
});
