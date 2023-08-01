

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class loginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get name () {
        return $('#firstName');
    }
    
    get lastName () {
        return $('#lastName');
    }

    get emailAddress () {
        return $('#emailAddress');
    }

    get password () {
        return $('#password');
    }

    get confirmPassword () {
        return $('#confirmPassword');
    }

    get address () {
        return $('.registerAddress .rbFieldIsRequired');
    }

    get aptSteUnit () {
        return $('#registerForm .registerAddress:nth-child(6) [type]');
    }
    
    get country () {
        return $('select#country');
    }



    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    //async login (username, password) {
        //await this.username.setValue(username);
        
    //}

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

export default new loginPage();
