/**
 * test with page objects
 */
import RegistrationPage from '../../pageobjects/Registration.page.js'
import { Positive_vals } from '../../TestData/Positives.js';

describe('Positive test for Rallybound ', () => {
    it('Account Registration', async () => {
        await RegistrationPage.open(); 

        //await expect(RegistrationPage.firstName).toBeExisting(); 
        //await (RegistrationPage.firstname).setValue(Positive_vals.Pos_case_EP.Firstname);




        
            
    }); 

})

