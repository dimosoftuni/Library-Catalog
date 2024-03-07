const { expect, test } = require('@playwright/test');

const baseURL = "http://localhost:3000"
const user = 'peter@abv.bg'
const password = '123456'

test("Verify All Books link is visible", async ( {page} ) => {
    await page.goto(baseURL);
    await page.waitForSelector("nav.navbar");
    const allBooksLink = await page.$('a[href="/catalog"]');
    const isAllBooksLinkVisible = await allBooksLink.isVisible();
    expect(isAllBooksLinkVisible).toBe(true);
});

test("Verify Login button is visible", async ( {page} ) => {
    await page.goto(baseURL);
    await page.waitForSelector("nav.navbar");
    const loginButton = await page.$('a[href="/login"]');
    const isLoginButtonVisisble = await loginButton.isVisible();
    expect(isLoginButtonVisisble).toBe(true);
});

test("Verify Register button is visible", async ( {page} ) => {
    await page.goto(baseURL);
    await page.waitForSelector("nav.navbar");
    const registerButton = await page.$('a[href="/register"]');
    const isRegisterButtonVisisble = await registerButton.isVisible();
    expect(isRegisterButtonVisisble).toBe(true);
});

test("Verify All Books link is visible after user is logged in", async ( {page} ) => {
    await page.goto(baseURL);
    await page.waitForSelector("nav.navbar");
    await page.click('a[href="/login"]');
    await page.fill('#email', user);
    await page.fill('#password', password);
    await page.click('#login-form > fieldset > input');

    // Check if Logout button is visible
    const logoutButton = await page.$('#logoutBtn');
    const isLogoutButtonVisible = await logoutButton.isVisible();
    expect(isLogoutButtonVisible).toBe(true);

    // Check if All Books link is visible
    const allBooksLink = await page.$('a[href="/catalog"]');
    const isAllBooksLinkVisible = await allBooksLink.isVisible();
    expect(isAllBooksLinkVisible).toBe(true);
});