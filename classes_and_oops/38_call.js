function SetUsername(username){
    //complex DB calls is done in backend suppose
    this.username = username
    // console.log("helllo");
}

function createUser(username,email,password){
    // SetUsername(username)//here we are only giving refernece of upper function's username not calling it
    SetUsername.call(this, username)//hence call here is current execution context passes to another function but for interview perspective give proper example
    this.email = email
    this.password =password
}

const chai = new createUser("chai","cjhai@com", "123")
console.log(chai);//here we will not get  username but pass and emailwill be given
