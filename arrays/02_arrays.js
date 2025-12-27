const marvel_heroes = ["Ironman", "Spiderman", "Thor"]
const dc_heroes = ["Batman", "Superman", "Flash"]

marvel_heroes.push(dc_heroes) //pushes anything as last element 
console.log(marvel_heroes)
console.log(marvel_heroes[3][2]) //bad way

const allHeroes = marvel_heroes.concat(dc_heroes) //not used much and also it can be applied with two arrays only
console.log(allHeroes)

const newHeroes = [...marvel_heroes, ...dc_heroes] //more efficient way to combine multiple arrays
console.log(newHeroes)

const anotherArray = [1,2,[3,4], 5, 6, [7, 8, [9, 10]]]
const realArray = anotherArray.flat(Infinity) //converts all in single array remember!!
console.log(realArray)


console.log(Array.isArray("Aryan"))
console.log(Array.from("Aryan"))
console.log(Array.from({name: "Aryan"})) //interview this makes array as per the given key,if key is having 0 element then returned array is empty

let s1 = 100
let s2 = 200
let s3 = 300
console.log(Array.of(s1,s2,s3))