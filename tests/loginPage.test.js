const dataSet = require('../Helpers/dataset.json');
import  LoginPage  from "../Page/LoginPage";


dataSet.forEach(url => {
fixture('login with Guru99')
    .page(url.BaseUrl);
    
})

dataSet.forEach(data => {
test('Login with valid users', async t => {
         await t
         .maximizeWindow()
         .typeText(LoginPage.firstnameInput,data.username)
         .typeText(LoginPage.PasswordInput,data.Password)
         .click(LoginPage.clickonLigin)
         .takeScreenshot();
        
});

});
