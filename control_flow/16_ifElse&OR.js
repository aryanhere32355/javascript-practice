const balance = 1000
if (balance > 500){

}
// if (balance > 500) console.log("test"), console.log("Aman");//very bad way of writing controls, but executes in one line and scope is also declared in that line only.To end the context we need ;


const IsUserLoggedin = true
const debitCard = false
const loggedInFromGoogle = false
const loggedInFromEmail = true 
if (IsUserLoggedin && debitCard && 2==3){
    console.log("Allow to buy Course");
    
}
if (IsUserLoggedin || debitCard || 2||2){
    console.log("Allow to buy Course1");
    
}
