/**
 * test with page objects
 */
import RegistrationPage from '../pageobjects/Registration.page.js'
import { Positive_vals } from '../TestData/Positives.js';

describe('Positive test for Rallybound ', () => {


    it('Positive Test case 1', async () => {
        await RegistrationPage.open(); 
        await RegistrationPage.sort(Positive_vals.Pos_case_EP);
        await browser.pause(1000);
        await RegistrationPage.Next_btn.click(); 
        await browser.pause(1000);
        await expect (RegistrationPage.pageChecker).toBeExisting(); 


        
    }); 



   
   





}); 