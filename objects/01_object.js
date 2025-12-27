// when you make object through a constructor then it becomes singleton but h=when we declare like actual literals then it is not singleton eg object.JsUser
//object literal

const mySym = Symbol("key1")

const JsUser = {
    name: "Aryan",
    age: 18,
    location: "Jaipur",
    "email Id": "aryan3848@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]
}

// console.log(JsUser.email)
console.log(JsUser["email Id"])