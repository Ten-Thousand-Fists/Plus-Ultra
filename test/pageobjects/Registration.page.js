

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Registration extends Page {
    /**
     * define selectors using getter methods
     */
    get firstName() {
        return $('#firstName');
    }
    
    get lastName() {
        return $('#lastName');
    }

    get emailAddress() {
        return $('#emailAddress');
    }

    get password() {
        return $('#password');
    }

    get confirmPassword() {
        return $('#confirmPassword');
    }

    get address() {
        return $('.registerAddress .rbFieldIsRequired');
    }

    get aptSteUnit() {
        return $('#registerForm .registerAddress:nth-child(6) [type]');
    }
    
    get country() {
        return $('select#country');
    }

    get city() {
        return $('#city');
    }

    get state() {
        return $('select#state');
    }

    get Zip() {
        return $('#zip');
    }

    get numberSection1() {
        return $('#phoneNumber');
    }

    get numberSection2() {
        return $('#phoneNumber2');
    }

    get numberSection3() {
        return $('#phoneNumber3');
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
        return super.open('Register');
    }
}

export default new Registration();
