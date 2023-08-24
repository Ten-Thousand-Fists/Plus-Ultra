/**
 * test with page objects
 */
import RegistrationPage from '../pageobjects/Registration.page.js'
import { Positive_vals } from '../TestData/Positives.js';
import { Negative_vals } from '../TestData/Negatives.js';

describe('Positive test for Rallybound ', () => {


    xit('Account Registration', async () => {
        await RegistrationPage.open(); 


        await RegistrationPage.sort(Positive_vals.Pos_case_EP);
        
        
        await browser.pause(4000);
        await RegistrationPage.Next_btn.click(); 
        
    }); 

    it ('Negative test', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Negative_vals.Reference_vals);
        await RegistrationPage.first_Name.setValue(Negative_vals.Testcase_45.TagX15); 
        await browser.pause(2000);
        await RegistrationPage.Next_btn.click();  
        await browser.pause(4000);
        await expect (RegistrationPage.first_Name).toBeExisting(); 





    }); 

    it ('Negative test', async () => {
        await RegistrationPage.open(); 
        
        await browser.pause(2000);
        await RegistrationPage.Next_btn.click();  
        await browser.pause(4000);
        await expect (RegistrationPage.flash_alert).toBeExisting(); 

    }); 





}); 