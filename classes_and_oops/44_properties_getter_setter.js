//function based syntax
function User(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "email", {
    //function is a object hence we can call object's properties, emaill is for what we want to overwrite
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (value) {
      this._email = value;
    },
    // Correct getter/setter pattern
    // _email and _password are backing fields (actual storage)

    // email and password are public properties
    // getter reads from backing field
    // setter writes to backing field

    // Getter and setter NEVER access the same property name
    // This avoids infinite recursion / stack overflow

    // This is the correct and standard JS design
  });
  Object.defineProperty(this, "password", {
    get: function () {
      return this._password.toUpperCase();
    },
    set: function (value) {
      this._password = value;
    },
  });
}

const chai = new User("chai@chai.com", "chai");

// console.log(chai.email);

//object based syntax
const user = {
  _email: "ha@email.com",
  _password: "abc",

  get email() {
    return this._email.toUpperCase();
  },
  set email (value){
    this._email = value
  }
};

const tea = Object.create(user)
console.log(tea.email);

