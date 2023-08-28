export class Negative_vals {



        static Reference_vals = {

            FirstName: "Loren",
            lastname: "Kim",
            email_Address: "NatalieHawkins@gmail.com",
            Password: "Thi$îsth3Way!",
            Confirm_Password: "Thi$îsth3Way!",
            Address: "54321 Carmel Valley Road",
            Apt_Suite_Unit: "A#650",
            Country: "UNITED STATES",
            City: "San Diego",
            State: "CA",
            Zip: "92110",
            Phone1: "619",
            Phone2: "577",
            Phone3: "3145",

          
            
        
    
    } 



    //First Name Negative Case Type's
    
    static Testcase_31 = {
        
         TagX1: "l"  

    }

    static Testcase_32 = {
        
        TagX2: "lorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenloren"  //This is a EPH invalid input

    }

    static Testcase_33 = {
        
        TagX3: "L^rem"

    }

    static Testcase_34 = {
        
        TagX4: "L0ren"

    }

    static Testcase_35 = {
        
        TagX5: "" //This is supposed to be a Null input for this test case 

    }

    static Testcase_36 = {
        
        TagX6: "Lo ren Kim"

    }





    
    //Last Name Negative Case Type

    static Testcase_37 = {
        
         TagX7: "M"

    }

    static Testcase_38 = {
        
        TagX8: "dominguezdominguezdominguezdominguezdominguezdominguezdominguezdominguez" //This is a EPH invalid input

    }

    static Testcase_39 = {
        
        TagX9: "K!m"

    }

    static Testcase_40 = {
        
        TagX10: "K1m"

    }

    static Testcase_41 = {
        
        TagX11: "" //This is supposed to be a Null input for this test case 


    }

    static Testcase_42 = {
        
        TagX12: "K  im"

    }






    //Email Negative test Cases 

    static Testcase_43 = {
        
        TagX13: "N@.com"

    }

    static Testcase_44 = {
        
        TagX14: "NatalieHawkins@gmail.comNatalieHawkins@gmail.comNatalieHawkins@gm" //This is a EPH invalid input

    }

    static Testcase_45 = {
        
        TagX15: "" //This is supposed to be a Null input for this test case 

    }

    static Testcase_46 = {
        
        TagX16: "@bennygmail.com"

    }

    static Testcase_47 = {
        
        TagX17: "Natalie@Hawkins@gmail.com"

    }

    static Testcase_48 = {
        
        TagX18: "NatalieHawkins.gmail.com"

    }

    static Testcase_49 = {
        
        TagX19: "NatalieHawkinsgmail.com@"

    }

    static Testcase_50 = {
        
        TagX20: "Natalie Hawkins @gmail.com"

    }
    






    //Password Negative Test Cases

    static Testcase_51 = {
        
        TagX21: "1DKf!"

    }

    static Testcase_52 = {
        
        TagX22: "$@#!$2131gGSCVSEFESVdadiafjodpfhaewiopfhaeiowfj;23$%@#$RQEFW)vagtu9j34got9ehjnrp" //This is a EPH invalid input

    }

    static Testcase_53 = {
        
        TagX23: "" //This is supposed to be a Null input 

    }

    static Testcase_54 = {
        
        TagX24: "NatalieHawkins@gmail.com"

    }

    static Testcase_55 = {
        
        TagX25: "r!ff7even"

    }

    static Testcase_56 = {
        
        TagX26: "Yas!!!!!!!!!!"

    }

    static Testcase_57 = {
        
        TagX27: "IT'S ME!!!1"

    }

    static Testcase_58 = {
        
        TagX28: "Loren"

    }

    static Testcase_59 = {
        
        TagX29: "Kim"

    }

    static Testcase_60 = {
        
        TagX30: "Thisistheway"

    }







    // Negative Address test cases 
    static Testcase_61 = {
        
        TagX31: "Ave"

    }

    static Testcase_62 = {
        
        TagX32: "54321CarmelValleyRoad54321CarmelValleyRoad54321CarmelValleyRoad54" //This is a EPH invalid input

    }

    static Testcase_63 = {
        
        TagX33: "54321 Carme! Valley Road"

    }







    // Negative Apt test cases

    static Testcase_64 = {
        
        TagX34: "A#"

    }

    static Testcase_65 = {
        
        TagX35: "A#650A#650A" //This is a EPH invalid input

    }

    static Testcase_66 = {
        
        TagX36: "0#6A5"

    }

    static Testcase_67 = {
        
        TagX37: "A@650"

    }







    //Negative City test cases

    static Testcase_68 = {
        
        TagX38: "USD"

    }

    static Testcase_69 = {
        
        TagX39: "SanDiegoSanDiegoSanDiegoSanDiegoSanDiegoSanDiegoSanDiegoSanDiegoS" //This is a EPH invalid input

    }

    static Testcase_70 = {
        
        TagX40: "San Di3go"

    }

    static Testcase_71 = {
        
        TagX41: "S@n Diego"

    }

    static Testcase_72 = {
        
        TagX42: "" //This input is a Null input

    }

    static Testcase_73 = {
        
        TagX43: "" //This input is a Null input for the state 

    }






    //Negative test cases for US Zip 

    static Testcase_74 = {
        
        TagX44: "92!10"

    }

    static Testcase_75 = {
        
        TagX45: "9211Q"

    }

    static Testcase_76 = {
        
        TagX46: "9210"

    }

    static Testcase_77 = {
        
        TagX47: "921100" //This is a EPH invalid input

    }

    static Testcase_78 = {
        
        TagX48: "921 10"

    }

    static Testcase_79 = {
        
        TagX49: "" //This input is a Null input 

    }







    //Negative test cases for Canada Postal 

    static Testcase_80 = {
        
        TagX50: "M5C 2^9"

    }

    static Testcase_81 = {
        
        TagX51: "M5Ç 2V9"

    }

    static Testcase_82 = {
        
        TagX52: "" //This input is a Null input

    }

    static Testcase_83 = {
        
        TagX53: "M5 2V"

    }

    static Testcase_84 = {
        
        TagX54: "M5C 2V999" //This is a EPH invalid input

    }

    static Testcase_85 = {
        
        TagX55: "M5C22V9"

    }






    //Negative test cases for Other Postal 
    
    static Testcase_86 = {
        
        TagX56: "O'ha"

    }

    static Testcase_87 = {
        
        TagX57: "1"

    }

    static Testcase_88 = {
        
        TagX58: "Moseelookmeguntic" //This is a EPH invalid input

    }

    static Testcase_89 = {
        
        TagX59: "" //This is a Null input

    }






    //This is Negative Phone number test cases

    static Testcase_90 = {
        
         TagX60: {
            input1: "lor", 
            input2: "en7",
            input3: "3146",

        }

    }     

    static Testcase_91 = {
        
        TagX61: {
            input1: "619",
            input2: "577",
            input3: "3145",
        }

    }

    static Testcase_92 = {
        
        TagX62: {
           input1: "619_",  //Watch these inputs in when the test is running
           input2: "577_", 
           input3: "3145",

        }

    }

    static Testcase_93 = {
        
        TagX63: {
           input1: "119",
           input2: "577",
           input3: "3145",
        
        }

    }

    static Testcase_94 = {
        
        TagX64: {
           input1: "019",
           input2: "577",
           input3: "3145",
  
        }

    }

    static Testcase_95 = {
        
        TagX65: {
            input1: "314", 
            input2: "5",
            input2: "",
        }

    }

    static Testcase_96 = {
        
        TagX66: {         //This is a EPH invalid input
           input1: "123",
           input2: "456",
           input3: "7891011",
        }

    }

    static Testcase_97 = {
        
        TagX67: {       //This is a Null input 
            input1: "", 
            input2: "", 
            input3: "",
        }

    }





    









    




























































































}