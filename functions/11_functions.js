// function name () {
//     console.log("a")
// }
// name()//only name is reference of the fn, but to execute it paranthesis is required

function addTwoNumbers(n1, n2) {
  console.log(n1 + n2);
}
// addTwoNumbers(1, "s")//1s
// addTwoNumbers(1, null)//1

// const result = addTwoNumbers(1, 2);

// console.log("Result", result); //fn does not return anything hence result is undefined

function LoginMessage(username) {
    if(!username){   //username === undefined
        return `Please enter username`;
    }
    return `${username}  just logged in!` 
}

// console.log(LoginMessage("Aman"))
console.log(LoginMessage())