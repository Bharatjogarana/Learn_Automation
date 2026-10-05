const { expect } = require("@playwright/test");

class HomePage {

    constructor(page) {
        this.page = page;

        this.menu ="//img[@alt='menu']"
        this.signout="//button[normalize-space()='Sign out']"
        this.manage="//button[normalize-space()='Cart']"

    }

    async logoutfromapplication() {
        await this.page.click(this.menu);
        await this.page.click(this.signout);
    }

    async verifyhomepage() {
        await expect(this.page.locator(this.manage)).toBeVisible();

    }
}
module.exports = { HomePage };