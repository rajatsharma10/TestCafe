import { Selector, t } from 'testcafe';
 
class LoginPage {
 
   constructor() {

    this.firstnameInput = Selector('input').withAttribute("name", "uid");
    this.PasswordInput = Selector('input').withAttribute("name", "password");
    this.clickonLigin=Selector('input').withAttribute("name", "btnLogin");;

   }
  
}
 
export default new LoginPage();