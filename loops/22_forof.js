// used in ["", "", ""]
//         [{}, {}, {}]

const arr = [1, 2, 3, 4];

for (const num of arr) {
//   console.log(num);
}
 const greetings = "Hello world"
  for (const greet of greetings) {
    // console.log(greet);
}

//MAPS

const map = new Map()
map.set('In', "India")
map.set('In', "India") //will not appear two times
map.set('Usa', "America")
map.set('Africa', "Africa")

// console.log(map);

// for (const key of map) {
//     console.log(key);
// }
for (const [key, value] of map) {
    console.log(key, value);
}                                //interesting syntax and also called destructure of array
                                 //maps are iterable through for of loop but not iterable for object
