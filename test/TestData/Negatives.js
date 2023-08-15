import {Reference} from  './Reference.js'; 



 export class Negative_vals {


    static Negative = {
       
        new: "wow"
       
    } 







    static Tags = {

        First_name: {x1: "wow", 
                     x2: "hell",
                     x3: "wo",
                     }, 
        
        Last_name: {x1: "sum"
               
                   }, 

        Email_add: {

                   }, 

        Password:  {

                   }, 

        Con_pass:  {

                   }, 

        Address:   {

                   }, 

        Apt_suite: {

                   }, 

        Country:   {

                   }, 

        City:      {

                   },
                   
        State:     {

                   },

        Us_zip:    {

                   },
                   
        Canda_pos: {

                   }, 

        Other_pos: {

                   },

        Phone_num: {

                   }, 

        Next_btn:  {

                   },
                   
        

    }










}















var Term = Negative.concat(Reference); 

console.log(Term); 



function spliceArrays(reference, negative_val){

    let newArray = reference.slice(); 

    for (let i = 0; i < negative_val.length; i++) {

        newArray.splice(newArray.length, 0, negative_val[i]); 
    }

    return newArray; 
}

// A function that splices an array by elements
// array: the array to splice
// element: the element to search for
// deleteCount: the number of elements to delete after the element
// ...items: the elements to insert after the element
function spliceByElement(array, element, deleteCount, ...items) {
    // Find the index of the element in the array
    let index = array.indexOf(element);
    // If the element is not found, return the original array
    if (index === -1) {
      return array;
    }
    // Slice the array before and after the splice point
    let before = array.slice(0, index + 1);
    let after = array.slice(index + 1 + deleteCount);
    // Concatenate the sliced arrays with the items to insert
    return before.concat(items, after);
  }
  
  // Example usage
  let fruits = ["apple", "banana", "orange", "mango"];
  console.log(spliceByElement(fruits, "banana", 1, "kiwi", "lemon"));
  // Output: ["apple", "banana", "kiwi", "lemon", "mango"]
  






 

 