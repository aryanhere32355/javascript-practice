//ARRAYS

const myArr = [0,1,2,3,4,5]
const myheroes = ["Shaktiman", "Nagraaj"]

const myArr2 = new Array(0, 1, 2, 3, 4, 5)
// console.log(myArr)

//Arrays Method
myArr.push(6)
console.log(myArr)
console.log(myArr.toString())
myArr.unshift(0)//adds value in 1st position and .shift()removes element in 1st position
console.log(myArr.includes(9)) //false
console.log(myArr.indexOf(5)) //6
const newArr = myArr.join() //converts in string

//slice and splice
console.log("A ",myArr);
const myn1 = myArr.slice(1,4)
console.log(myn1)

console.log("B ",myArr)

const myn2 = myArr.splice(1, 3)
console.log(myn2)
console.log("C ",myArr)

// slice-Returns a new array by copying a portion of an array without changing the original.Exclude the last index.
// splice-Adds / removes / replaces elements by modifying the original array.Includes the last index.