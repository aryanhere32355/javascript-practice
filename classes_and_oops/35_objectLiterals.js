// const user = {  //object literal
//   username: "aman",
//   loginCount: 8,
//   dignedIn: true,
//   getUserdetails: function () {   //method
//     // console.log("Got user details from database");
//     console.log(`Username: ${this.username}`);//this is used because the fn doesn't know where is username, hence we need to tell it to look for outside also for the context
//   },
// };
// console.log(user.username);
// console.log(user.getUserdetails());
// console.log(this); //this we want to be printed in global context which is empty object but in the browser this is not emty
//this was all about object literals

//now constructor function begins(new)

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    return this //this will return automatically, no need to write
}
const userOne = User("aman", 12, false)
const userTwo = User("akash", 2, true)//this will overwrite our code which is too bad hence we new to use new for new instances
console.log(userOne);

//first we will create an object 
//second every data will be passed inside due to call of contructor keywrod "new"
//third, this keywords packs it and passes it to the destination
