const {test, expect} = require('@playwright/test');
const loginpage = require("../pages/loginpage")
const homepage = require("../pages/homepage")
const practise = require("../pages/practisepage")

test('practise test', async ({ page }) => { 

    await page.goto('https://freelance-learn-automation.vercel.app/login');


    const login1 = new loginpage.LoginPage(page);

    await login1.login("bharatqa84@gmail.com", "Bj@123$%");

    const home1 = new homepage.HomePage(page);
    await page.waitForTimeout(3000);
    await home1.clickonpractise();
    

    const practise1 = new practise.PracticePage(page);

    await practise1.verifypractisepage();
    await page.waitForTimeout(3000);     

    await practise1.clickonenablefield(); 
    await page.waitForTimeout(3000);  
    
    await practise1.verifyotherfield();

});

  