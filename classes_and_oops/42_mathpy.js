// is it possible to change the value of math.py in javascript??if yes then how, if no then why?
// some values inside the  predefined JS cannot be changed but whatever we are making have changable property.Also some of them doesnt allow iteration, we can also disable it for our data.

// Math is a large module and PI is a key for it which have that value

// Math.PI = 5
// console.log(Math.PI);//cannot be changed

// const pi = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(pi);

// const chai = {
//   name: "giger chai",
//   price: 250,
//   isAvailbe: true,

//   orderrChai: function(){
//     console.log("chai nahi bani");//added afte reaching to line 30
//   }
// };
// Object.defineProperty(chai, 'name', { //use properties for multiple changes
//     enumerable: false
// })
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// for (let [key, value] of chai) {
//   //object is not iterable here but still some of objects are iterable
//   console.log(`${key} : ${value}`);
// }
// for (let [key, value] of Object.entries(chai)) {
//   console.log(`${key} : ${value}`);
// }

const chai = {
  name: "giger chai",
  price: 250,
  isAvailbe: true,

  orderrChai: function () {
    console.log("chai nahi bani");
  },
};

Object.defineProperty(chai, "name", {
  enumerable: false, //name will not print removes this name from iteration
});

for (let [key, value] of Object.entries(chai)) { //Object.entries only takes enumerable properties
    if (typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}
