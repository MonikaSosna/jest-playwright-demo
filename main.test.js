afterEach(async () => {
    await page.waitForTimeout(3000);
})

test('enter women and tops categories', async () => {
    await page.goto('http://automationpractice.com/');
    await page.click('a[title="Women"]');
    let category = await page.innerText('span.category-name');
    expect(category).toBe('Women');
    await page.click('div.subcategory-image a[title="Tops"]');
    category = await page.innerText('span.category-name');
    expect(category).toBe('Tops');
})

test('changing size and adding item to cart', async () => {
    await page.click('h5 > a[title="Faded Short Sleeve T-shirts"]');
    await page.selectOption('select#group_1', '2');
    let size = await page.innerText('div.selector > span');
    expect(size).toBe('M');
})
