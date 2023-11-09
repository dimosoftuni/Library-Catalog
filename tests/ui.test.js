const { expect, test } = require("@playwright/test");
const pageUrl = "http://localhost:3000";

test("Verify All Books link is visible", async ( {page} ) => {
    await page.goto(pageUrl);
    await page.waitForSelector("#site-header > nav");
    const allBooksLink = await page.$('a[href="/catalog"]');
    const isAllBooksLinkVisible = await allBooksLink.isVisible();
    expect(isAllBooksLinkVisible).toBe(true);
});

test("Verify Login button is visible", async ( {page} ) => {
    await page.goto(pageUrl);
    await page.waitForSelector("#site-header > nav");
    const loginButton = await page.$('a[href="/login"]');
    const isLoginButtonVisible = await loginButton.isVisible();
    expect(isLoginButtonVisible).toBe(true);
});

test("Verify Register button is visible", async ( {page} ) => {
    await page.goto(pageUrl);
    await page.waitForSelector("#site-header > nav");
    // const registerButton = await page.$('a[href="/register"]');
    const registerButton = await page.locator('xpath=/html/body/div/header/nav/section/div[1]/a[2]');
    const isRegisterButtonVisible = await registerButton.isVisible();
    expect(isRegisterButtonVisible).toBe(true);
});