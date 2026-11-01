class LoginPage{
    constructor(page){
        this.page = page;
        this.username = page.locator('#user-name');
        this.password = page.locator('#password');
        this.btn = page.locator('#login-button');
        this.errormsg = page.locator('[data-test="error"]');    
    }

    async open(){
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username,password){
        await this.username.fill(username);
        await this.password.fill(password);
        await this.btn.click();
    }
}

module.exports= {LoginPage}