// function calCartPrice(num1){
//     return num1
// }

// console.log(calCartPrice(2, 4, 5))   //prints only one no.for multiple  no.hence use ...num1 in function


// function calCartPrice(val1, val2, ...num1){
//     return num1
// }

// console.log(calCartPrice(2, 4, 5, 6))  //num1 contains all except the 1st two

const user = {
    username: "Aman",
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user)

handleObject({
    username: "Aman",
    price: 19
})





