

import Page from './page.js';


/**
 * sub page containing specific selectors and methods for a specific page
 */
class Registration extends Page {
    /**
     * define selectors using getter methods
     */
    get first_Name() {
        return $('#firstName');
    }
    
    get last_Name() {
        return $('#lastName');
    }

    get email_Address() {
        return $('#emailAddress');
    }

    get password1() {
        return $('#password');
    }

    get con_password() {
        return $('#confirmPassword');
    }

    get add_ress() {
        return $('.registerAddress .rbFieldIsRequired');
    }

    get aptSteUnit() {
        return $('#registerForm .registerAddress:nth-child(6) [type]');
    }
    
    get Country() {
        return $('#country');

        // return $('//select[@id='country']/option[@value='UNITED STATES']');
    }

    get City() {
        return $('#city');
    }

    get State() {
        return $('#state'); 
    }

    get Zip() {
        return $('#zip');
    }


    get Canada() {
        return $('#stateCa') 
    }

    get phone1() {
        return $('#phoneNumber');
    }

    get phone2() {
        return $('#phoneNumber2');
    }

    get phone3() {
        return $('#phoneNumber3');
    }

    get Next_btn() {
        return $('#register1Next');
    }
    
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    
    async login (firstName,lastName,email,password,confirmPassword,address,apt, country, city, state, zip, ph1, ph2, ph3) {
        await this.first_Name.setValue(firstName);
        await this.last_Name.setValue(lastName);
        await this.email_Address.setValue(email);
        await this.password1.setValue(password);
        await this.con_password.setValue(confirmPassword);
        await this.add_ress.setValue(address);
        await this.aptSteUnit.setValue(apt); 
        await this.Country.selectByVisibleText(country);
        await this.City.setValue(city); 
        await this.State.selectByVisibleText(state);
        await this.Zip.setValue(zip);
        await this.phone1.setValue(ph1);
        await this.phone2.setValue(ph2);
        await this.phone3.setValue(ph3);
}



async login2 (firstName,lastName,email,password,confirmPassword,address,apt, country, city, can, zip, ph1, ph2, ph3) {
    await this.first_Name.setValue(firstName);
    await this.last_Name.setValue(lastName);
    await this.email_Address.setValue(email);
    await this.password1.setValue(password);
    await this.con_password.setValue(confirmPassword);
    await this.add_ress.setValue(address);
    await this.aptSteUnit.setValue(apt); 
    await this.Country.selectByVisibleText(country);
    await this.City.setValue(city); 
    await this.Canada.selectByVisibleText(can); 
    await this.Zip.setValue(zip);
    await this.phone1.setValue(ph1);
    //work in progress
}


async login3 (firstName,lastName,email,password,confirmPassword,address,apt, country, city, zip, ph1, ph2, ph3) {
    // await this.first_Name.setValue(firstName);
    // await this.last_Name.setValue(lastName);
    // await this.email_Address.setValue(email);
    // await this.password1.setValue(password);
    // await this.con_password.setValue(confirmPassword);
    // await this.add_ress.setValue(address);
    // await this.aptSteUnit.setValue(apt); 
    // await this.Country.selectByVisibleText(country);
    // await this.City.setValue(city); 
    // await this.Zip.setValue(zip);
    // await this.phone1.setValue(ph1);
    // await this.phone2.setValue(ph2);
    // await this.phone3.setValue(ph3);

}


async sort (input) {

    await this.first_Name.setValue(input.FirstName); 
    await this.last_Name.setValue(input.lastname);  
    await this.email_Address.setValue(input.email_Address);
    await this.password1.setValue(input.Password);
    await this.con_password.setValue(input.Confirm_Password);
    await this.add_ress.setValue(input.Address);
    await this.aptSteUnit.setValue(input.Apt_Suite_Unit); 
    await this.Country.selectByVisibleText(input.Country);
    await this.City.setValue(input.City);
    await this.State.selectByVisibleText(input.State);
    await this.Zip.setValue(input.Zip);
    await this.phone1.setValue(input.Phone1);
    await this.phone2.setValue(input.Phone2);
    await this.phone3.setValue(input.Phone3);


}







    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('Register');
    }
}

export default new Registration();