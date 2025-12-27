const userEmail = []

// if (userEmail) {
//     console.log("we have email");
    
//     //will execute because of truthy values
// }

// falsy value 
// false, 0, -0, BigInt 0n, "", null, undefined, NAN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length == 0){
//     console.log("empty array");
    
// }

const emptyObject = {

}

if (Object.keys(emptyObject).length == 0) {  //object.keys gives you an array of an object

    console.log("empty array");
}

false == 0
false == ''
'' == 0 //all are true