/**
 * test with page objects
 */
import RegistrationPage from '../pageobjects/Registration.page.js'
import { Positive_vals } from '../TestData/Positives.js';

describe('ALL POSITIVE TESTS FOR RALLYBOUND (Section 2)', () => {   // This is done becasue when having these test with the original file
                                                                   // These test would fail for som unknown reason


  
    // CITY POSITIVE TEST CASES
    it ('Positive Test case 32', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Positive_vals.Reference_vals);
        await (RegistrationPage.City).setValue(Positive_vals.Testcase_32.TagV38); 
        await RegistrationPage.Next_btn.click(); 
        await expect (RegistrationPage.pageChecker).toBeExisting(); 


        
    }); 

    it ('Positive Test case 33', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Positive_vals.Reference_vals);
        await (RegistrationPage.City).setValue(Positive_vals.Testcase_33.TagV39); 
        await RegistrationPage.Next_btn.click(); 
        await expect (RegistrationPage.pageChecker).toBeExisting(); 


        
    }); 

    it ('Positive Test case 34', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Positive_vals.Reference_vals);
        await (RegistrationPage.City).setValue(Positive_vals.Testcase_34.TagV40); 
        await RegistrationPage.Next_btn.click(); 
        await expect (RegistrationPage.pageChecker).toBeExisting(); 


        
    }); 







    // PHONE NUMBER POSITIVE TEST CASE
    it ('Positive Test case 34', async () => {   //Phone Number Test inside of test case 34
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Positive_vals.Reference_vals);
        await RegistrationPage.phone(Positive_vals.Testcase_34v1.TagV54); 
        await RegistrationPage.Next_btn.click(); 
        await expect (RegistrationPage.pageChecker).toBeExisting(); 


        
    });
    
    





    // BTAGS POSITIVE TEST CASES
    it ('Positive Test case 35', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Positive_vals.Testcase_35);
        await RegistrationPage.Next_btn.click(); 
        await expect (RegistrationPage.pageChecker).toBeExisting(); 


        
    }); 

    it ('Positive Test case 36', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Positive_vals.Testcase_36);
        await RegistrationPage.Next_btn.click(); 
        await expect (RegistrationPage.pageChecker).toBeExisting(); 


        
    }); 

    
   





    


   
  











}); 