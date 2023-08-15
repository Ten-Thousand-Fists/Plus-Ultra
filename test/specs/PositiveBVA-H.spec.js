/**
 * test with page objects
 */
import RegistrationPage from '../pageobjects/Registration.page.js'
import { Positive_vals } from '../TestData/Positives.js';

describe('Positive test for Rallybound ', () => {


    it('Account Registration', async () => {
        await RegistrationPage.open(); 


        await RegistrationPage.sort(Positive_vals.Pos_case_EP);
        
        
        await browser.pause(4000);
        await RegistrationPage.Next_btn.click(); 
        
    }); 




    xit('Account Registration', async () => {
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
            Positive_vals.Pos_case_EP.City,
            Positive_vals.Pos_case_EP.State,
            Positive_vals.Pos_case_EP.Zip, 
            Positive_vals.Pos_case_EP.Phone1, 
            Positive_vals.Pos_case_EP.Phone2, 
            Positive_vals.Pos_case_EP.Phone3,
            );
        await browser.pause(2000);
        await RegistrationPage.Next_btn.click(); 
        await browser.pause(5000);

    
            
    }); 

    xit('Selection as Canada: Work in progress----', async () => {

        //There are some values that were not working with province selector for automation such as the province AB
        //Unsure about other values that do not work. 
        //Also check if the rest of the test works in regards to the Phone1, Phone2, Phone3
        //Also at home setup is not working with other browsers only with the edge browser check if that is also the case as well 
        //at NFAR too. 


        await RegistrationPage.open(); 

        await browser.pause(1000);

        await RegistrationPage.login2(
            Positive_vals.Test1.firstName,
            Positive_vals.Test1.lastName,
            Positive_vals.Test1.emailAddress,
            Positive_vals.Test1.Password,
            Positive_vals.Test1.confirmPassword,
            Positive_vals.Test1.Address,
            Positive_vals.Test1.Apt_Suite_Unit,
            Positive_vals.Test1.Country,
            Positive_vals.Test1.City,
            Positive_vals.Test1.Province,
            Positive_vals.Test1.Postal, 
            //Positive_vals.Test1.Phone1, 
        //     // Positive_vals.Test1.Phone2, 
        //     // Positive_vals.Test1.Phone3

            );
            

            
        
        //await RegistrationPage.login2(Positive_vals.Test1.Country,Positive_vals.Test1.Province); 

        await browser.pause(2000);
    })



    it('Account Registration', async () => {
        await RegistrationPage.open(); 


        await RegistrationPage.sort(Positive_vals.Pos_case_EP);
        await browser.pause(4000);
        

    
            
    }); 

    xit('Account Registration', async () => {
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
            Positive_vals.Pos_case_EP.City,
            Positive_vals.Pos_case_EP.State,
            Positive_vals.Pos_case_EP.Zip, 
            Positive_vals.Pos_case_EP.Phone1, 
            Positive_vals.Pos_case_EP.Phone2, 
            Positive_vals.Pos_case_EP.Phone3,
            );
        await browser.pause(2000);
        await RegistrationPage.Next_btn.click(); 
        await browser.pause(5000);





})

}); 