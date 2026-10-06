const { expect } = require("@playwright/test");

class PracticePage {
    
    constructor(page) {
        this.page = page;
       
        this.pagelabel="//h3[contains(text(),'This page is under development. It will be live so')]"
        this.enablefield ="//button[normalize-space()='Enable field']"
        this.textfield="//input[@placeholder='Now you can write']"
        this.double1="//button[normalize-space()='Double Click me to see magic']"


    }

    async verifypractisepage() {
        await expect(this.page.locator(this.pagelabel)).toBeVisible();

    }
    async clickonenablefield() {
        await this.page.click(this.enablefield);
        await this.page.waitForTimeout(2000);
    }
    

    async verifyotherfield() {
        await this.page.mouse.wheel(0, 1000);
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.double1).dblclick();
        await this.page.waitForTimeout(2000);
        
       
       
    }

}
module.exports = { PracticePage };