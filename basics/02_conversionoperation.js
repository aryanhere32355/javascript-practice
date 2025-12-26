// string to number

let score = true
// console.log(typeof score) //number
// console.log(typeof (score))

let valueInNumber = Number(score)
// console.log(valueInNumber)
// console.log(typeof valueInNumber)

//"33"=>33
// "33abc"=>NaN
// "aryan"=>NaN
// true=>1/false=>0


// string to bool
let isLoggedIn = ""
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)
// console.log(typeof booleanIsLoggedIn)

// 1 => true 0 => false
// string => true
// "" => false

// no. to string
let somenumber = true
let stringNumber = String(somenumber)
// console.log(stringNumber)
// console.log(typeof stringNumber)


let str1="hello"
let str2=" aryan"

let str3 = str1 + str2
// console.log(str3)

console.log(1 + "2")  //12
console.log("1" + 2)  //12
console.log(1 + 2 + "2")   //32
console.log("1" + 2 + 2)  //122

//consider it as rule and can take refernce for more clarity on mdn docs
// we should never use these types of codes as it is very confusing and confusing codes are always considered bad

console.log(3 + 4 % 5 * 8) //35


// prefix and postfix

let a = 2
b = a++
c = ++a
console.log(a , b, c )