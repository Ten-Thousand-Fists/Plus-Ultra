

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

    get label() { 
        return $('.registerAddress > label')
    }
    
    get Country() {
        return $('#country');  //Look back at the test cases that to see which ones incorporate a different country value

        
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
        return $('select#stateCa') 
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

    get pageChecker() {
        return $('.registerh2'); 
    }




    //These is to check for negatives test as passing will mean it failed successfully

    get firstname_alert(){
        return $('#firstName-errorDv');
    }

    get lastname_alert(){
        return $('#lastName-errorDv')
    }

    get email_alert(){
        return $('#emailAddress-errorDv')
    }

    get password_alert(){
        return $('#password-errorDv')
    }

    get conpass_alert(){
        return $('#confirmPassword-errorDv')
    }

    get address_alert(){
        return $('#address1-errorDv')
    }

    get apt_ste_unit (){
        return $('#apt/ste/unit-errorDv')  //Made up selector for missing error code 
    }

    get city_alert(){
        return $('#city-errorDv')
    }

    get zip_alert(){
        return $('#zip-errorDv')
    }

    get canada_alert(){
        return $('#canada_postal-errorDV')  //Made up selector for missing error code 
    }

    

    get phone_alert(){
        return $('#phoneNumber3-errorDv')
    }












    
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    
    








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



async sort2 (input) {    // This funtion is for a when a different Country is selected

    await this.first_Name.setValue(input.FirstName); 
    await this.last_Name.setValue(input.lastname);  
    await this.email_Address.setValue(input.email_Address);
    await this.password1.setValue(input.Password);
    await this.con_password.setValue(input.Confirm_Password);
    await this.add_ress.setValue(input.Address);
    await this.aptSteUnit.setValue(input.Apt_Suite_Unit); 
    await this.Country.selectByVisibleText(input.Country);
    await this.City.setValue(input.City);
    await this.Zip.setValue(input.Zip);
    await this.phone1.setValue(input.Phone1);
    await this.phone2.setValue(input.Phone2);
    await this.phone3.setValue(input.Phone3);


}

async sort3 (input) {

    await this.first_Name.setValue(input.FirstName); 
    await this.last_Name.setValue(input.lastname);  
    await this.email_Address.setValue(input.email_Address);
    await this.password1.setValue(input.Password);
    await this.con_password.setValue(input.Confirm_Password);
    await this.add_ress.setValue(input.Address);
    await this.aptSteUnit.setValue(input.Apt_Suite_Unit); 
    await this.Country.selectByVisibleText(input.Country);
    await this.City.setValue(input.City);
    await this.Canada.selectByVisibleText(input.State);
    await this.Zip.setValue(input.Zip);
    await this.phone1.setValue(input.Phone1);
    await this.phone2.setValue(input.Phone2);
    await this.phone3.setValue(input.Phone3);


}








async phone (input) {
    await this.phone1.setValue(input.input1);
    await this.phone2.setValue(input.input2);
    await this.phone3.setValue(input.input3);
}







    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('Register');
    }
}

export default new Registration();