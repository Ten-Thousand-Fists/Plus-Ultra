/**
 * test with page objects
 */
import RegistrationPage from '../pageobjects/Registration.page.js'
import { Positive_vals } from '../TestData/Positives.js';

describe('ALL POSITIVE TESTS FOR RALLYBOUND ', () => {


  it ('Positive Test case 1', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Positive_vals.Reference_vals);

        await RegistrationPage.Next_btn.click(); 

        await expect (RegistrationPage.pageChecker).toBeExisting(); 


        
    }); 







   // FIRST NAME POSITIVE TEST CASES 
  it ('Positive Test case 2', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Positive_vals.Reference_vals);
        await (RegistrationPage.first_Name).setValue(Positive_vals.Testcase_2.TagV2); 
        await RegistrationPage.Next_btn.click(); 
        await expect (RegistrationPage.pageChecker).toBeExisting(); 


        
    }); 

  it ('Positive Test case 3', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Positive_vals.Reference_vals);
        await (RegistrationPage.first_Name).setValue(Positive_vals.Testcase_3.TagV3); 
        await RegistrationPage.Next_btn.click(); 
        await expect (RegistrationPage.pageChecker).toBeExisting(); 


        
    }); 

  it ('Positive Test case 4', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Positive_vals.Reference_vals);
        await (RegistrationPage.first_Name).setValue(Positive_vals.Testcase_4.TagV4); 
        await RegistrationPage.Next_btn.click(); 
        await expect (RegistrationPage.pageChecker).toBeExisting(); 


        
    }); 

  it ('Positive Test case 5', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Positive_vals.Reference_vals);
        await (RegistrationPage.first_Name).setValue(Positive_vals.Testcase_5.TagV5); 
        await RegistrationPage.Next_btn.click(); 
        await expect (RegistrationPage.pageChecker).toBeExisting(); 


        
    }); 







   // LAST NAME POSITIVE TEST CASES
  it ('Positive Test case 6', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Positive_vals.Reference_vals);
        await (RegistrationPage.last_Name).setValue(Positive_vals.Testcase_6.TagV7); 
        await RegistrationPage.Next_btn.click(); 
        await expect (RegistrationPage.pageChecker).toBeExisting(); 


        
    }); 

  it ('Positive Test case 7', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Positive_vals.Reference_vals);
        await (RegistrationPage.last_Name).setValue(Positive_vals.Testcase_7.TagV8); 
        await RegistrationPage.Next_btn.click(); 
        await expect (RegistrationPage.pageChecker).toBeExisting(); 


        
    }); 

  it ('Positive Test case 8', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Positive_vals.Reference_vals);
        await (RegistrationPage.last_Name).setValue(Positive_vals.Testcase_8.TagV9); 
        await RegistrationPage.Next_btn.click(); 
        await expect (RegistrationPage.pageChecker).toBeExisting(); 


        
    }); 

  it ('Positive Test case 9', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Positive_vals.Reference_vals);
        await (RegistrationPage.last_Name).setValue(Positive_vals.Testcase_9.TagV10); 
        await RegistrationPage.Next_btn.click(); 
        await expect (RegistrationPage.pageChecker).toBeExisting(); 


        
    });







   // EMAIL ADDRESS POSITIVE TEST CASES
  it ('Positive Test case 10', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Positive_vals.Reference_vals);
        await (RegistrationPage.email_Address).setValue(Positive_vals.Testcase_10.TagV12); 
        await RegistrationPage.Next_btn.click(); 
        await expect (RegistrationPage.pageChecker).toBeExisting(); 


        
    }); 

  it ('Positive Test case 11', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Positive_vals.Reference_vals);
        await (RegistrationPage.email_Address).setValue(Positive_vals.Testcase_11.TagV13); 
        await RegistrationPage.Next_btn.click(); 
        await expect (RegistrationPage.pageChecker).toBeExisting(); 


        
    }); 

    it ('Positive Test case 12', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Positive_vals.Reference_vals);
        await (RegistrationPage.email_Address).setValue(Positive_vals.Testcase_12.TagV14); 
        await RegistrationPage.Next_btn.click(); 
        await expect (RegistrationPage.pageChecker).toBeExisting(); 


        
    }); 

    it ('Positive Test case 13', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Positive_vals.Reference_vals);
        await (RegistrationPage.email_Address).setValue(Positive_vals.Testcase_13.TagV15); 
        await RegistrationPage.Next_btn.click(); 
        await expect (RegistrationPage.pageChecker).toBeExisting(); 


        
    });
    
    





    // PASSWORD POSITIVE TEST CASES
    it ('Positive Test case 14', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Positive_vals.Reference_vals);
        await (RegistrationPage.password1).setValue(Positive_vals.Testcase_14.TagV17); 
        await RegistrationPage.Next_btn.click(); 
        await expect (RegistrationPage.pageChecker).toBeExisting(); 


        
    }); 

    it ('Positive Test case 15', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Positive_vals.Reference_vals);
        await (RegistrationPage.password1).setValue(Positive_vals.Testcase_15.TagV18); 
        await RegistrationPage.Next_btn.click(); 
        await expect (RegistrationPage.pageChecker).toBeExisting(); 


        
    }); 

    it ('Positive Test case 16', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Positive_vals.Reference_vals);
        await (RegistrationPage.password1).setValue(Positive_vals.Testcase_16.TagV19); 
        await RegistrationPage.Next_btn.click(); 
        await expect (RegistrationPage.pageChecker).toBeExisting(); 


        
    }); 

    it ('Positive Test case 17', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Positive_vals.Reference_vals);
        await (RegistrationPage.password1).setValue(Positive_vals.Testcase_17.TagV20); 
        await RegistrationPage.Next_btn.click(); 
        await expect (RegistrationPage.pageChecker).toBeExisting(); 


        
    }); 

    it ('Positive Test case 18', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Positive_vals.Reference_vals);
        await (RegistrationPage.email_Address).setValue(Positive_vals.Testcase_18.TagV21); 
        await RegistrationPage.Next_btn.click(); 
        await expect (RegistrationPage.pageChecker).toBeExisting(); 


        
    }); 

    it ('Positive Test case 19', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Positive_vals.Reference_vals);
        await (RegistrationPage.email_Address).setValue(Positive_vals.Testcase_19.TagV22); 
        await RegistrationPage.Next_btn.click(); 
        await expect (RegistrationPage.pageChecker).toBeExisting(); 


        
    });







    // ADDRESS POSITIVE TEST CASES
    it ('Positive Test case 20', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Positive_vals.Reference_vals);
        await (RegistrationPage.add_ress).setValue(Positive_vals.Testcase_20.TagV25); 
        await RegistrationPage.Next_btn.click(); 
        await expect (RegistrationPage.pageChecker).toBeExisting(); 


        
    }); 

    it ('Positive Test case 21', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Positive_vals.Reference_vals);
        await (RegistrationPage.add_ress).setValue(Positive_vals.Testcase_21.TagV26); 
        await RegistrationPage.Next_btn.click(); 
        await expect (RegistrationPage.pageChecker).toBeExisting(); 


        
    }); 

    it ('Positive Test case 22', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Positive_vals.Reference_vals);
        await (RegistrationPage.add_ress).setValue(Positive_vals.Testcase_22.TagV27); 
        await RegistrationPage.Next_btn.click(); 
        await expect (RegistrationPage.pageChecker).toBeExisting(); 


        
    }); 

    it ('Positive Test case 23', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Positive_vals.Reference_vals);
        await (RegistrationPage.add_ress).setValue(Positive_vals.Testcase_23.TagV28); 
        await RegistrationPage.Next_btn.click(); 
        await expect (RegistrationPage.pageChecker).toBeExisting(); 


        
    }); 







    // APT/SUITE/UNIT POSITIVE TEST CASES
    it ('Positive Test case 24', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Positive_vals.Reference_vals);
        await (RegistrationPage.aptSteUnit).setValue(Positive_vals.Testcase_24.TagV30); 
        await RegistrationPage.Next_btn.click(); 
        await expect (RegistrationPage.pageChecker).toBeExisting(); 


        
    }); 

    it ('Positive Test case 25', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Positive_vals.Reference_vals);
        await (RegistrationPage.aptSteUnit).setValue(Positive_vals.Testcase_25.TagV31); 
        await RegistrationPage.Next_btn.click(); 
        await expect (RegistrationPage.pageChecker).toBeExisting(); 


        
    }); 






    
    // CANADA POSTAL POSITIVE TEST CASES
    it ('Positive Test case 26(CANADA TagV34 and TagV41)', async () => {  
        await RegistrationPage.open(); 
        await RegistrationPage.sort2(Positive_vals.Canada_Vals);
        await browser.pause(2000);
        await (RegistrationPage.Canada).selectByVisibleText(Positive_vals.Testcase_26v3.TagV41);  
        await browser.pause(2000);

        await RegistrationPage.Next_btn.click(); 
        await expect (RegistrationPage.pageChecker).toBeExisting(); 


        
    }); 

    it ('Positive Test case 26(CANADA Tag_V35 and TagV41)', async () => {  
        await RegistrationPage.open(); 

        await RegistrationPage.sort2(Positive_vals.Canada_Vals);
        await (RegistrationPage.Canada).selectByVisibleText(Positive_vals.Testcase_26v3.TagV41);  

        await RegistrationPage.Next_btn.click(); 
        await expect (RegistrationPage.pageChecker).toBeExisting(); 


        
    }); 

    it ('Positive Test case 26', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort2(Positive_vals.Canada_Vals);
        await (RegistrationPage.Canada).selectByVisibleText(Positive_vals.Testcase_26v3.TagV41);  


        await (RegistrationPage.Zip).setValue(Positive_vals.Testcase_26.TagV45); 

        await RegistrationPage.Next_btn.click(); 
        await expect (RegistrationPage.pageChecker).toBeExisting(); 


        
    }); 

    it ('Positive Test case 26v2', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort2(Positive_vals.Canada_Vals);
        await (RegistrationPage.Canada).selectByVisibleText(Positive_vals.Testcase_26v3.TagV41);  


        await (RegistrationPage.Zip).setValue(Positive_vals.Testcase_26v2.TagV46); 

        await RegistrationPage.Next_btn.click(); 
        await expect (RegistrationPage.pageChecker).toBeExisting(); 


        
    }); 







    // OTHER POSTAL POSITIVE TEST CASES
    it ('Positive Test case 28', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort2(Positive_vals.France_Vals);
        await (RegistrationPage.Zip).setValue(Positive_vals.Testcase_28.TagV47); 
        await RegistrationPage.Next_btn.click(); 
        await expect (RegistrationPage.pageChecker).toBeExisting(); 


        
    }); 

    it ('Positive Test case 29', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort2(Positive_vals.France_Vals);
        await (RegistrationPage.Zip).setValue(Positive_vals.Testcase_29.TagV48); 
        await RegistrationPage.Next_btn.click(); 
        await expect (RegistrationPage.pageChecker).toBeExisting(); 


        
    }); 

    it ('Positive Test case 30', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort2(Positive_vals.France_Vals);
        await (RegistrationPage.Zip).setValue(Positive_vals.Testcase_30.TagV49); 
        await RegistrationPage.Next_btn.click(); 
        await expect (RegistrationPage.pageChecker).toBeExisting(); 


        
    }); 

    it ('Positive Test case 31', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort2(Positive_vals.France_Vals);
        await (RegistrationPage.Zip).setValue(Positive_vals.Testcase_31.TagV50); 
        await RegistrationPage.Next_btn.click(); 
        await expect (RegistrationPage.pageChecker).toBeExisting(); 


        
    }); 







    
    
   





    


   
  











}); 