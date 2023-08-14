/**
 * test with page objects
 */
import RegistrationPage from '../pageobjects/Registration.page.js'
import { Positive_vals } from '../TestData/Positives.js';

describe('Positive test for Rallybound ', () => {
    it('Account Registration', async () => {
        await RegistrationPage.open(); 

        await browser.pause(1000);
        await RegistrationPage.login(
            Positive_vals.Pos_case_EP.firstName,
            Positive_vals.Pos_case_EP.lastName,
            Positive_vals.Pos_case_EP.emailAddress,
            Positive_vals.Pos_case_EP.Password,
            Positive_vals.Pos_case_EP.confirmPassword,
            Positive_vals.Pos_case_EP.Address,
            Positive_vals.Pos_case_EP.Apt_Suite_Unit,
            Positive_vals.Pos_case_EP.Country,
            //Positive_vals.Pos_case_EP.City,
            // Positive_vals.Pos_case_EP.State,
            // Positive_vals.Pos_case_EP.Zip 
            // Positive_vals.Pos_case_EP.Phone_Number
            );
        await browser.pause(2000);

    
            
    }); 

})

