exports.ReqresPage = class ReqresPage{

        constructor(page){
            this.page = page;
            this.swaggerLogo = page.locator('//img[@src="/img/swagger-logo-horizontal.jpeg"]'); 
            this.supportReqresButton1 = page.locator('//a[@href="#support-heading"]');
        }

        async supportReqresButton1Click(){
            await this.supportReqresButton1.click();
        }

        async swaggerClick(){
            await this.swaggerLogo.click();
        }

        async gotoReqresIn(){
            await this.page.goto('https://reqres.in/');
        }
}