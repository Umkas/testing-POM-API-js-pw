import { test, expect } from "@playwright/test";
import { ReqresPage } from "../pages/reqres.in.js";

// checking swagger logo to goto by clicking
test('test', async ({ page }) => {
    const Reqres = new ReqresPage(page);
    await Reqres.gotoReqresIn();

    await Reqres.SwaggerClick();
    await expect(page.Reqres.swaggerLogo).toBeVisible();
    await expect(page.url()).toBe('https://reqres.in/api-docs/')
})

// check the support reqres button1 goto ankor
test('test2', async ({page}) =>{
    const Reqres = new ReqresPage(page);
    await Reqres.gotoReqresIn();

    await Reqres.supportReqresButton1Click();
    await expect(page.url()).toBe('https://reqres.in/#support-heading')
})