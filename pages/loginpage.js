const { expect } = require("@playwright/test");

class LoginPage {
    constructor(page) {
        this.page = page;       
        this.usernameInput = '#email1';
        this.passwordInput = '#password1';
        this.loginButton = '//button[normalize-space()="Sign in"]';
        this.signinlabel='//h2[normalize-space()="Sign In"]';
    }

    async login(username, password) {
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.loginButton);
        
    }

    async verifyloginpage() {
        await expect(this.page.locator(this.signinlabel)).toBeVisible();
    }
}

module.exports = { LoginPage };