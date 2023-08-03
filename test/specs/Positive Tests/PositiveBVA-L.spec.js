/**
 * test with page objects
 */
import Registration from '../../pageobjects/Registration.page.js'

describe('Positive test for Rallybound ', () => {
    it('Account Registration', async () => {
        await Registration.open(); 

        await expect(Registration.firstName).toBeExisting(); 
        await expect(Registration.lastName).toBeExisting(); 
        await expect(Registration.emailAddress).toBeExisting(); 
        await expect(Registration.confirmPassword).toBeExisting(); 
        await expect(Registration.address).toBeExisting(); 
        await expect(Registration.aptSteUnit).toBeExisting(); 
        await expect(Registration.country).toBeExisting(); 
        await expect(Registration.city).toBeExisting(); 
        await expect(Registration.state).toBeExisting(); 
        await expect(Registration.Zip).toBeExisting(); 
        await expect(Registration.numberSection2).toBeExisting(); 
        await expect(Registration.numberSection3).toBeExisting(); 




        
            
    }); 

})

