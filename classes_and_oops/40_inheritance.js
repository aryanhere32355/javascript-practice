class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class Teacher extends User {
  constructor(username,email,password){
    super(username)//it will go and search for the extended class and set the required alues itself
     this.email = email
     this.password = password
  }

  addCourse(){
    console.log(`Anew course was added by ${this.username}`);
    
  }
}

const chai = new Teacher("chai", "chia@", "123")
chai.addCourse()
const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai instanceof User);
