const user = {
    username: "Aman",
    price: 199,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`); //to access the current context we need this keyword
        // console.log(this)                                    //means to access any var in this scope we need this inside ``
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()  //'this' changed the current context


// console.log(this)//here no context is given in global object, so empty={},but browser js will give you window as window is global object


// ARROW FUNCTIONS

// function chai(){
//     let username = "Aman"
//     console.log(this)   //only this will give you many things but thi.username will give u undefined which means it is not accessible in functions
// }
// chai()

// const chai = () => {
//     let username = "Aman"
//     console.log(this)  //here this will give you undefined, means we cannot use it here
// }
// chai()

// const addTwo = (n1, n2)=>{
//     return n1+n2
// }
//or 
// const addTwo = (n1,n2) => n1+n2
//or
// const addTwo = (n1,n2) => (n1+n2) //no. can be represented like this also and do not need return word here,but paranthesis need return word
 //but
//  const addTwo = (n1,n2) => ({username: "Aman"}) //this is object it need to have a return vaue hence wrapped in paranthesis
// console.log(addTwo())