exports.LoginPage = class LoginPage {

    constructor(page){
        this.page = page;
        this.username_box = page.getByLabel('Username');
        this.pass_box = page.getByLabel('Password');
        this.login_button = page.getByRole('button', { name: 'Login' });
    }

    async login(user, pass){
        await this.username_box.fill(user);
        await this.pass_box.fill(pass);
        await this.login_button.click();
    }

    async gotoLoginPage(){
         await this.page.goto('https://the-internet.herokuapp.com/login');
    }


    // await page.goto('https://the-internet.herokuapp.com/login');
    // await page.getByLabel('Username').click();
    // await page.getByLabel('Username').fill('tomsmith');
    // await page.getByLabel('Password').click();
    // await page.getByLabel('Password').fill('SuperSecretPassword!');
    // await page.getByRole('button', { name: ' Login' }).click();
}