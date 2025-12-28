const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 ) //10,20,30,...,100 will pass in below map
                .map( (num) => num + 1)  //11,21,31,41,...,101 will pass in below map
                .filter( (num) => num >= 40) //41,51,61,71,81,91,101 will be passed in newNums finally!!SIMPLE

console.log(newNums);