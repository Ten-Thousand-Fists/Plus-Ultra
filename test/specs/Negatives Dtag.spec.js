/**
 * test with page objects
 */
import RegistrationPage from '../pageobjects/Registration.page.js'
import { NegativeD_vals } from '../TestData/Negatives_Dtag.js';

describe('Negative tests for Rallybound ', () => {

    
    // FIRST NAME NEGATIVES TEST CASES

    xit ('Negative test case 98', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort( NegativeD_vals.Reference_vals)

        await (RegistrationPage.first_Name).setValue(NegativeD_vals.Test_Case_98_Negative.TagD1); 
        await RegistrationPage.Next_btn.click();  
        await expect (RegistrationPage.firstname_alert).toBeExisting(); 


    }); 

    xit ('Negative test case 99', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort( NegativeD_vals.Reference_vals)
        await (RegistrationPage.first_Name).setValue( NegativeD_vals.Test_Case_99_Negative.TagD2); 
        await browser.pause(2000);

        await RegistrationPage.Next_btn.click();  
        await expect (RegistrationPage.firstname_alert).toBeExisting(); 


    }); 







    // LAST NAME NEGATIVES TEST CASES

    xit ('Negative test case 100', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort( NegativeD_vals.Reference_vals)
        await (RegistrationPage.last_Name).setValue( NegativeD_vals.Test_Case_100_Negative.TagD3); 
        await RegistrationPage.Next_btn.click();  
        await expect (RegistrationPage.lastname_alert).toBeExisting(); 


    }); 

    xit ('Negative test case 101', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort( NegativeD_vals.Reference_vals)
        await (RegistrationPage.last_Name).setValue( NegativeD_vals.Test_Case_101_Negative.TagD4); 
        await RegistrationPage.Next_btn.click();  
        await expect (RegistrationPage.lastname_alert).toBeExisting(); 


    }); 







    // EMAIL ADDRESS NEGATIVE TEST CASES
    xit ('Negative test case 102', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort( NegativeD_vals.Reference_vals)
        await (RegistrationPage.email_Address).setValue( NegativeD_vals.Test_Case_102_Negative.TagD5); 
        await RegistrationPage.Next_btn.click();  
        await expect (RegistrationPage.email_alert).toBeExisting(); 


    }); 

    xit ('Negative test case 103', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort( NegativeD_vals.Reference_vals)
        await (RegistrationPage.email_Address).setValue( NegativeD_vals.Test_Case_103_Negative.TagD6); 
        await RegistrationPage.Next_btn.click();  
        await expect (RegistrationPage.email_alert).toBeExisting(); 


    }); 







    // PASSWORD NEGATIVE TEST CASES
    xit ('Negative test case 104', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort( NegativeD_vals.Reference_vals)
        await (RegistrationPage.password1).setValue( NegativeD_vals.Test_Case_104_Negative.TagD7); 
        await RegistrationPage.Next_btn.click();  
        await expect (RegistrationPage.password_alert).toBeExisting(); 


    }); 

    xit ('Negative test case 105', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort( NegativeD_vals.Reference_vals)
        await (RegistrationPage.password1).setValue( NegativeD_vals.Test_Case_105_Negative.TagD8); 
        await RegistrationPage.Next_btn.click();  
        await expect (RegistrationPage.password_alert).toBeExisting(); 


    }); 







    // ADDRESS NEGATIVE TEST CASES
    xit ('Negative test case 106', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort( NegativeD_vals.Reference_vals)
        await (RegistrationPage.add_ress).setValue( NegativeD_vals.Test_Case_106_Negative.TagD9); 
        await RegistrationPage.Next_btn.click();  
        await expect (RegistrationPage.address_alert).toBeExisting(); 


    }); 

    xit ('Negative test case 107', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort( NegativeD_vals.Reference_vals)
        await (RegistrationPage.add_ress).setValue( NegativeD_vals.Test_Case_107_Negative.TagD10); 
        await RegistrationPage.Next_btn.click();  
        await expect (RegistrationPage.address_alert).toBeExisting(); 


    }); 








    // APT/SUITE/UNIT NEGATIVE TEST CASES
    xit ('Negative test case 108', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort( NegativeD_vals.Reference_vals)
        await (RegistrationPage.add_ress).setValue( NegativeD_vals.Test_Case_108_Negative.TagD11); 
        await RegistrationPage.Next_btn.click();  
        await expect (RegistrationPage.address_alert).toBeExisting(); 


    }); 


    xit ('Negative test case 109', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort( NegativeD_vals.Reference_vals)
        await (RegistrationPage.add_ress).setValue( NegativeD_vals.Test_Case_109_Negative.TagD12); 
        await RegistrationPage.Next_btn.click();  
        await expect (RegistrationPage.address_alert).toBeExisting(); 


    });
    
    






    // CITY NEGATIVE TEST CASES
    xit ('Negative test case 110', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort( NegativeD_vals.Reference_vals)
        await (RegistrationPage.City).setValue( NegativeD_vals.Test_Case_110_Negative.TagD13); 
        await RegistrationPage.Next_btn.click();  
        await expect (RegistrationPage.city_alert).toBeExisting(); 


    }); 


    xit ('Negative test case 111', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort( NegativeD_vals.Reference_vals)
        await (RegistrationPage.City).setValue( NegativeD_vals.Test_Case_111_Negative.TagD14); 
        await RegistrationPage.Next_btn.click();  
        await expect (RegistrationPage.city_alert).toBeExisting(); 


    }); 








    // ZIP NEGATIVE TEST CASES
    xit ('Negative test case 112', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort( NegativeD_vals.Reference_vals)
        await (RegistrationPage.Zip).setValue( NegativeD_vals.Test_Case_112_Negative.TagD15); 
        await RegistrationPage.Next_btn.click();  
        await expect (RegistrationPage.zip_alert).toBeExisting(); 


    }); 


    xit ('Negative test case 113', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort( NegativeD_vals.Reference_vals)
        await (RegistrationPage.Zip).setValue( NegativeD_vals.Test_Case_113_Negative.TagD16); 
        await RegistrationPage.Next_btn.click();  
        await expect (RegistrationPage.zip_alert).toBeExisting(); 


    }); 


    xit ('Negative test case 114', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort( NegativeD_vals.Reference_vals)
        await (RegistrationPage.Zip).setValue( NegativeD_vals.Test_Case_114_Negative.TagD17); 
        await RegistrationPage.Next_btn.click();  
        await expect (RegistrationPage.zip_alert).toBeExisting(); 


    }); 


    xit ('Negative test case 115', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort( NegativeD_vals.Reference_vals)
        await (RegistrationPage.Zip).setValue( NegativeD_vals.Test_Case_115_Negative.TagD18); 
        await RegistrationPage.Next_btn.click();  
        await expect (RegistrationPage.zip_alert).toBeExisting(); 


    });
    
    






    // OTHER POSTAL NEGATIVE TEST CASES 
    xit ('Negative test case 116', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort( NegativeD_vals.Reference_vals)
        await (RegistrationPage.Zip).setValue( NegativeD_vals.Test_Case_116_Negative.TagD19); 
        await RegistrationPage.Next_btn.click();  
        await expect (RegistrationPage.zip_alert).toBeExisting(); 


    });
    
    






    // CANADA POSTAL NEGATIVES TESTS
    xit ('Negative test case 117', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort( NegativeD_vals.Reference_vals)
        await (RegistrationPage.Canada).setValue( NegativeD_vals.Test_Case_117_Negative.TagD20); 
        await RegistrationPage.Next_btn.click();  
        await expect (RegistrationPage.canada_alert).toBeExisting(); 


    }); 

    // OTHER POSTAL NEGATIVE TEST CASES
    xit ('Negative test case 118', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort( NegativeD_vals.Reference_vals)
        await (RegistrationPage.Zip).setValue( NegativeD_vals.Test_Case_118_Negative.TagD21); 
        await RegistrationPage.Next_btn.click();  
        await expect (RegistrationPage.zip_alert).toBeExisting(); 


    }); 


    xit ('Negative test case 119', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort( NegativeD_vals.Reference_vals)
        await (RegistrationPage.Zip).setValue( NegativeD_vals.Test_Case_119_Negative.TagD22); 
        await RegistrationPage.Next_btn.click();  
        await expect (RegistrationPage.zip_alert).toBeExisting(); 


    });








    // PHONE NUMBER NEGATIVE TEST CASES
    it ('Negative test case 120', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(NegativeD_vals.Reference_vals)
        await RegistrationPage.phone(NegativeD_vals.Test_Case_120_Negative.TagD23); 
        await RegistrationPage.Next_btn.click();  
        await expect (RegistrationPage.phone_alert).toBeExisting(); 
    }); 

    it ('Negative test case 121', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(NegativeD_vals.Reference_vals)
        await RegistrationPage.phone(NegativeD_vals.Test_Case_121_Negative.TagD24); 
        await RegistrationPage.Next_btn.click();  
        await expect (RegistrationPage.phone_alert).toBeExisting(); 
    }); 


    it ('Negative test case 122', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(NegativeD_vals.Reference_vals)
        await RegistrationPage.phone(NegativeD_vals.Test_Case_122_Negative.TagD25); 
        await RegistrationPage.Next_btn.click();  
        await expect (RegistrationPage.phone_alert).toBeExisting(); 
    }); 


















    





    



    

    



}); 