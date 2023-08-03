/**
 * test with page objects
 */
import RegistrationPage from '../pageobjects/Registration.page.js'

describe('Positive test for Rallybound ', () => {
    it('Account Registration', async () => {
        await RegistrationPage.open(); 

        await expect(RegistrationPage.firstName).toBeExisting(); 
        await expect(RegistrationPage.lastName).toBeExisting(); 
        await expect(RegistrationPage.emailAddress).toBeExisting(); 
        await expect(RegistrationPage.confirmPassword).toBeExisting(); 
        await expect(RegistrationPage.address).toBeExisting(); 
        await expect(RegistrationPage.aptSteUnit).toBeExisting(); 
        await expect(RegistrationPage.country).toBeExisting(); 
        await expect(RegistrationPage.city).toBeExisting(); 
        await expect(RegistrationPage.state).toBeExisting(); 
        await expect(RegistrationPage.Zip).toBeExisting(); 
        await expect(RegistrationPage.numberSection2).toBeExisting(); 
        await expect(RegistrationPage.numberSection3).toBeExisting(); 




        
            
    }); 

})

