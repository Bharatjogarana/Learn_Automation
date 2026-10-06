const {test, expect} = require('@playwright/test');
const loginpage = require("../loginpage")
const homepage = require("../homepage")

test('login test', async ({ page }) => {

    await page.goto('https://freelance-learn-automation.vercel.app/login');


    const login1 = new loginpage.LoginPage(page);

    await login1.login("bharatqa84@gmail.com", "Bj@123$%");

    const home1 = new homepage.HomePage(page);

     await home1.verifyhomepage();

     await home1.logoutfromapplication();

     await login1.verifyloginpage();

});

  