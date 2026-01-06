class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
    static createId(){ //if we donot want to give access to create multiple id then we should use static keyword
        return `123`
    }
}

const hitesh = new User("hitesh")
// console.log((hitesh.createId()));

class Teacher extends User {
constructor(username, email){
    super(username)
    this.email = email
}
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe()
console.log((iphone.createId()));//error

