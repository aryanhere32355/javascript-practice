// when you make object through a constructor then it becomes singleton but h=when we declare like actual literals then it is not singleton eg object.JsUser
//object literal

const mySym = Symbol("key1")
const mySym1 = Symbol("key11")

const JsUser = {
    name: "Aryan",
    age: 18,
    mySym: "mykey1",
    [mySym1]: "mykey11",
    location: "Jaipur",
    "email Id": "aryan3848@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email Id"])

// console.log(typeof JsUser.mySym)//string but we want to use it as symbol hence we need a square bracket for symbol
// console.log(JsUser[mySym1])//using as a symbol

JsUser["email Id"] = "scniscni"
// Object.freeze(JsUser)
JsUser["email Id"] = "scnjdfbhbvdbvbsiscni"

// console.log(JsUser["email Id"])//will not change after yo freeze an object

// console.log(JsUser) //{
//   name: 'Aryan',
//   age: 18,
//   mySym: 'mykey1',
//   location: 'Jaipur',
//   'email Id': 'scniscni',
//   isLoggedIn: false,
//   lastLoginDays: [ 'Monday', 'Tuesday' ],
//   [Symbol(key11)]: 'mykey11' {this is due to square bracket}
// }

JsUser.greeting= function(){
    console.log("Hello this is x")
}
console.log(JsUser.greeting())

JsUser.greetingTwo= function(){
    console.log(`Hello this is x ${this.age}`)
}
console.log(JsUser.greetingTwo())

