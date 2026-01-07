//getter setter is used when we donot want to send the credentials or want to send it in encoded/encrypted/different way, both get-set will be uded at a time

class User {
    constructor(email, password){
        this.email = email,
        this.password = password
    }
//here constructor and setter and similary get also both will try to set the password their own way which will create memory stack overflow,hence we will use _Password
    // get password(){
    //     return this._password.toUpperCase()//password is overwritten here
    // }
    get password(){//we need to take that property name as fucntion name here after get
        return `${this._password}aman`
    }
    
    set password(value){
        this._password = value//.toUpperCase()
    }
    get email(){
        return `${this._email}aman`
    }
    set email(value){
       this._email = value.toUpperCase()
    }
}//we never return setters

const hitesh = new User("h@anam", "abc")
console.log(hitesh.email);
