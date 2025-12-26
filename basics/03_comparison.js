console.log("2" > 1)
console.log("02" > 1)

// true as js converts string into number automatically

console.log(null > 0)   //false
console.log(null == 0)   //false
console.log(null >= 0)  //true
console.log(null <= 0)   //true

// For equality (==) → null is treated as “no value”

// For comparisons (< > >= <=) → null is treated as 0


console.log(undefined > 0)
console.log(undefined < 0)
console.log(undefined == 0)

// all false as undefined is always undefined

// === is used for strict check as it checks the value as well as datatypes of it