const { expect } = require("@playwright/test");

class HomePage {

    constructor(page) {
        this.page = page;

        this.menu ="//img[@alt='menu']"
        this.signout="//button[normalize-space()='Sign out']"
        this.manage="//button[normalize-space()='Cart']"
        this.practise = "//div[normalize-space()='Practise']";

    }

    async logoutfromapplication() {
        await this.page.click(this.menu);
        await this.page.click(this.signout);
    }

    async verifyhomepage() {
        await expect(this.page.locator(this.manage)).toBeVisible();

    }

    async clickonpractise() {
        await this.page.click(this.menu);
        await this.page.waitForTimeout(2000);
        await this.page.click(this.practise);
    }
}
module.exports = { HomePage };