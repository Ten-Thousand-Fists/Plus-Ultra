/**
 * test with page objects
 */
import RegistrationPage from '../../pageobjects/Registration.page.js'
import { Positive_vals } from '../../TestData/Positives.js';

describe('Positive test for Rallybound ', () => {
    xit('Account Registration', async () => {
        await RegistrationPage.open(); 

        await expect(RegistrationPage.firstName).toBeExisting(); 
        await browser.pause(1000);
        await (RegistrationPage.firstname).setValue(Positive_vals.Pos_case_EP[1]);
        await browser.pause(2000);


        



        
            
    }); 

})

