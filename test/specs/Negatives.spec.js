/**
 * test with page objects
 */
import RegistrationPage from '../pageobjects/Registration.page.js'
import { Negative_vals } from '../TestData/Negatives_Xtag.js';

describe('Negative tests for Rallybound ', () => {


    //FIRSTNAME NEGATIVE TESTS CASES
    xit ('(Firstname tests)Negative test case 31', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Negative_vals.Reference_vals)
        await (RegistrationPage.first_Name).setValue(Negative_vals.Testcase_31.TagX1); 
        await browser.pause(2000); 
        await RegistrationPage.Next_btn.click();  
        await browser.pause(2000); 
        await expect (RegistrationPage.firstname_alert).toBeExisting(); 

       
    }); 

    xit ('Negative test case 32', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Negative_vals.Reference_vals)
        await (RegistrationPage.first_Name).setValue(Negative_vals.Testcase_32.TagX2); 
        await browser.pause(2000); 
        await RegistrationPage.Next_btn.click();  
        await browser.pause(2000); 
        await expect (RegistrationPage.firstname_alert).toBeExisting(); 

    }); 


    xit ('Negative test case 33', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Negative_vals.Reference_vals)
        await (RegistrationPage.first_Name).setValue(Negative_vals.Testcase_33.TagX3); 
        await browser.pause(2000); 
        await RegistrationPage.Next_btn.click();  
        await browser.pause(2000); 
        await expect (RegistrationPage.firstname_alert).toBeExisting(); 

    }); 


    xit ('Negative test case 34', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Negative_vals.Reference_vals)
        await (RegistrationPage.first_Name).setValue(Negative_vals.Testcase_34.TagX4); 
        await browser.pause(2000); 
        await RegistrationPage.Next_btn.click();  
        await browser.pause(2000); 
        await expect (RegistrationPage.firstname_alert).toBeExisting(); 

    }); 

    xit ('Negative test case 35', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Negative_vals.Reference_vals)
        await (RegistrationPage.first_Name).setValue(Negative_vals.Testcase_35.TagX5); 
        await browser.pause(2000); 
        await RegistrationPage.Next_btn.click();  
        await browser.pause(2000); 
        await expect (RegistrationPage.firstname_alert).toBeExisting(); 

    }); 

    xit ('Negative test case 36', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Negative_vals.Reference_vals)
        await (RegistrationPage.first_Name).setValue(Negative_vals.Testcase_36.TagX6); 
        await browser.pause(2000); 
        await RegistrationPage.Next_btn.click();  
        await browser.pause(2000); 
        await expect (RegistrationPage.firstname_alert).toBeExisting(); 

    }); 





       // LAST NAME NEGATIVE TEST CASES

    xit ('Negative test case 37', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Negative_vals.Reference_vals)
        await (RegistrationPage.last_Name).setValue(Negative_vals.Testcase_37.TagX7); 
        await browser.pause(2000); 
        await RegistrationPage.Next_btn.click();  
        await browser.pause(2000); 
        await expect (RegistrationPage.lastname_alert).toBeExisting(); 

    }); 

    xit ('Negative test case 38', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Negative_vals.Reference_vals)
        await (RegistrationPage.last_Name).setValue(Negative_vals.Testcase_38.TagX8); 
        await browser.pause(2000); 
        await RegistrationPage.Next_btn.click();  
        await browser.pause(2000); 
        await expect (RegistrationPage.lastname_alert).toBeExisting(); 

    }); 

    xit ('Negative test case 39', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Negative_vals.Reference_vals)
        await (RegistrationPage.last_Name).setValue(Negative_vals.Testcase_39.TagX9); 
        await browser.pause(2000); 
        await RegistrationPage.Next_btn.click();  
        await browser.pause(2000); 
        await expect (RegistrationPage.lastname_alert).toBeExisting(); 

    }); 

    xit ('Negative test case 40', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Negative_vals.Reference_vals)
        await (RegistrationPage.last_Name).setValue(Negative_vals.Testcase_40.TagX10); 
        await browser.pause(2000); 
        await RegistrationPage.Next_btn.click();  
        await browser.pause(2000); 
        await expect (RegistrationPage.lastname_alert).toBeExisting(); 

    }); 

    xit ('Negative test case 41', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Negative_vals.Reference_vals)
        await (RegistrationPage.last_Name).setValue(Negative_vals.Testcase_41.TagX11); 
        await browser.pause(2000); 
        await RegistrationPage.Next_btn.click();  
        await browser.pause(2000); 
        await expect (RegistrationPage.lastname_alert).toBeExisting(); 

    }); 

    xit ('Negative test case 42', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Negative_vals.Reference_vals)
        await (RegistrationPage.last_Name).setValue(Negative_vals.Testcase_42.TagX12); 
        await browser.pause(2000); 
        await RegistrationPage.Next_btn.click();  
        await browser.pause(2000); 
        await expect (RegistrationPage.lastname_alert).toBeExisting(); 

    }); 






    // EMAIL NEGATIVE TESTS CASES

    xit ('Negative test case 43', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Negative_vals.Reference_vals)
        await (RegistrationPage.email_Address).setValue(Negative_vals.Testcase_43.TagX13); 
        await browser.pause(2000); 
        await RegistrationPage.Next_btn.click();  
        await browser.pause(2000); 
        await expect (RegistrationPage.email_alert).toBeExisting(); 

    }); 

    xit ('Negative test case 44', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Negative_vals.Reference_vals)
        await (RegistrationPage.email_Address).setValue(Negative_vals.Testcase_44.TagX14); 
        await browser.pause(2000); 
        await RegistrationPage.Next_btn.click();  
        await browser.pause(2000); 
        await expect (RegistrationPage.email_alert).toBeExisting(); 

    }); 

    xit ('Negative test case 45', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Negative_vals.Reference_vals)
        await (RegistrationPage.email_Address).setValue(Negative_vals.Testcase_45.TagX15); 
        await browser.pause(2000); 
        await RegistrationPage.Next_btn.click();  
        await browser.pause(2000); 
        await expect (RegistrationPage.email_alert).toBeExisting(); 

    }); 

    xit ('Negative test case 46', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Negative_vals.Reference_vals)
        await (RegistrationPage.email_Address).setValue(Negative_vals.Testcase_46.TagX16); 
        await browser.pause(2000); 
        await RegistrationPage.Next_btn.click();  
        await browser.pause(2000); 
        await expect (RegistrationPage.email_alert).toBeExisting(); 

    }); 

    xit ('Negative test case 47', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Negative_vals.Reference_vals)
        await (RegistrationPage.email_Address).setValue(Negative_vals.Testcase_47.TagX17); 
        await browser.pause(2000); 
        await RegistrationPage.Next_btn.click();  
        await browser.pause(2000); 
        await expect (RegistrationPage.email_alert).toBeExisting(); 

    }); 

    xit ('Negative test case 48', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Negative_vals.Reference_vals)
        await (RegistrationPage.email_Address).setValue(Negative_vals.Testcase_48.TagX18); 
        await browser.pause(2000); 
        await RegistrationPage.Next_btn.click();  
        await browser.pause(2000); 
        await expect (RegistrationPage.email_alert).toBeExisting(); 

    }); 

    xit ('Negative test case 49', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Negative_vals.Reference_vals)
        await (RegistrationPage.email_Address).setValue(Negative_vals.Testcase_49.TagX19); 
        await browser.pause(2000); 
        await RegistrationPage.Next_btn.click();  
        await browser.pause(2000); 
        await expect (RegistrationPage.email_alert).toBeExisting(); 

    }); 

    xit ('Negative test case 50', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Negative_vals.Reference_vals)
        await (RegistrationPage.email_Address).setValue(Negative_vals.Testcase_50.TagX20); 
        await browser.pause(2000); 
        await RegistrationPage.Next_btn.click();  
        await browser.pause(2000); 
        await expect (RegistrationPage.email_alert).toBeExisting(); 

    }); 





    //PASSWORD NEGATIVE TEST CASES (Covers Confirm Password input field as well)
    xit ('Negative test case 51', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Negative_vals.Reference_vals)
        await (RegistrationPage.password1).setValue(Negative_vals.Testcase_51.TagX21); 
        await browser.pause(2000); 
        await RegistrationPage.Next_btn.click();  
        await browser.pause(2000); 
        await expect (RegistrationPage.password_alert).toBeExisting(); 

    }); 

    xit ('Negative test case 52', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Negative_vals.Reference_vals)
        await (RegistrationPage.password1).setValue(Negative_vals.Testcase_52.TagX22); 
        await browser.pause(2000); 
        await RegistrationPage.Next_btn.click();  
        await browser.pause(2000); 
        await expect (RegistrationPage.password_alert).toBeExisting(); 

    }); 

    xit ('Negative test case 53', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Negative_vals.Reference_vals)
        await (RegistrationPage.password1).setValue(Negative_vals.Testcase_53.TagX23); 
        await browser.pause(2000); 
        await RegistrationPage.Next_btn.click();  
        await browser.pause(2000); 
        await expect (RegistrationPage.password_alert).toBeExisting(); 

    }); 

    xit ('Negative test case 54', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Negative_vals.Reference_vals)
        await (RegistrationPage.password1).setValue(Negative_vals.Testcase_54.TagX24); 
        await browser.pause(2000); 
        await RegistrationPage.Next_btn.click();  
        await browser.pause(2000); 
        await expect (RegistrationPage.password_alert).toBeExisting(); 

    }); 

    xit ('Negative test case 55', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Negative_vals.Reference_vals)
        await (RegistrationPage.password1).setValue(Negative_vals.Testcase_55.TagX25); 
        await browser.pause(2000); 
        await RegistrationPage.Next_btn.click();  
        await browser.pause(2000); 
        await expect (RegistrationPage.password_alert).toBeExisting(); 

    }); 

    xit ('Negative test case 56', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Negative_vals.Reference_vals)
        await (RegistrationPage.password1).setValue(Negative_vals.Testcase_56.TagX26); 
        await browser.pause(2000); 
        await RegistrationPage.Next_btn.click();  
        await browser.pause(2000); 
        await expect (RegistrationPage.password_alert).toBeExisting(); 

    }); 

    xit ('Negative test case 57', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Negative_vals.Reference_vals)
        await (RegistrationPage.password1).setValue(Negative_vals.Testcase_57.TagX27); 
        await browser.pause(2000); 
        await RegistrationPage.Next_btn.click();  
        await browser.pause(2000); 
        await expect (RegistrationPage.password_alert).toBeExisting(); 

    }); 

    xit ('Negative test case 58', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Negative_vals.Reference_vals)
        await (RegistrationPage.password1).setValue(Negative_vals.Testcase_58.TagX28); 
        await browser.pause(2000); 
        await RegistrationPage.Next_btn.click();  
        await browser.pause(2000); 
        await expect (RegistrationPage.password_alert).toBeExisting(); 

    }); 

    xit ('Negative test case 59', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Negative_vals.Reference_vals)
        await (RegistrationPage.password1).setValue(Negative_vals.Testcase_59.TagX29); 
        await browser.pause(2000); 
        await RegistrationPage.Next_btn.click();  
        await browser.pause(2000); 
        await expect (RegistrationPage.password_alert).toBeExisting(); 

    }); 

    xit ('Negative test case 60', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Negative_vals.Reference_vals)
        await (RegistrationPage.password1).setValue(Negative_vals.Testcase_60.TagX30); 
        await browser.pause(2000); 
        await RegistrationPage.Next_btn.click();  
        await browser.pause(2000); 
        await expect (RegistrationPage.password_alert).toBeExisting(); 

    }); 





    
    //ADDRESS NEGATIVE TEST CASES
    it ('Negative test case 61', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Negative_vals.Reference_vals)
        await (RegistrationPage.add_ress).setValue(Negative_vals.Testcase_61.TagX31); 
        await browser.pause(2000); 
        await RegistrationPage.Next_btn.click();  
        await browser.pause(2000); 
        await expect (RegistrationPage.address_alert).toBeExisting(); 

    }); 

    it ('Negative test case 62', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Negative_vals.Reference_vals)
        await (RegistrationPage.add_ress).setValue(Negative_vals.Testcase_62.TagX32); 
        await browser.pause(2000); 
        await RegistrationPage.Next_btn.click();  
        await browser.pause(2000); 
        await expect (RegistrationPage.address_alert).toBeExisting(); 

    }); 

    it ('Negative test case 63', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Negative_vals.Reference_vals)
        await (RegistrationPage.add_ress).setValue(Negative_vals.Testcase_63.TagX33); 
        await browser.pause(2000); 
        await RegistrationPage.Next_btn.click();  
        await browser.pause(2000); 
        await expect (RegistrationPage.address_alert).toBeExisting(); 

    }); 






    //APT_SUITE_UNIT NEGATIVE TEST CASES
    xit ('Negative test case 64', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Negative_vals.Reference_vals)
        await (RegistrationPage.aptSteUnit).setValue(Negative_vals.Testcase_64.TagX34); 
        await browser.pause(2000); 
        await RegistrationPage.Next_btn.click();  
        await browser.pause(2000); 
        //await expect (RegistrationPage.firstname_alert).toBeExisting(); 

    }); 

    xit ('Negative test case 65', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Negative_vals.Reference_vals)
        await (RegistrationPage.aptSteUnit).setValue(Negative_vals.Testcase_65.TagX35); 
        await browser.pause(2000); 
        await RegistrationPage.Next_btn.click();  
        await browser.pause(2000); 
        //await expect (RegistrationPage.firstname_alert).toBeExisting(); 

    }); 

    xit ('Negative test case 66', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Negative_vals.Reference_vals)
        await (RegistrationPage.aptSteUnit).setValue(Negative_vals.Testcase_66.TagX36); 
        await browser.pause(2000); 
        await RegistrationPage.Next_btn.click();  
        await browser.pause(2000); 
        //await expect (RegistrationPage.firstname_alert).toBeExisting(); 

    }); 

    xit ('Negative test case 67', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Negative_vals.Reference_vals)
        await (RegistrationPage.aptSteUnit).setValue(Negative_vals.Testcase_67.TagX37); 
        await browser.pause(2000); 
        await RegistrationPage.Next_btn.click();  
        await browser.pause(2000); 
        //await expect (RegistrationPage.firstname_alert).toBeExisting(); 

    }); 







   
    





    



    

    



}); 