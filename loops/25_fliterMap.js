const coding = ["Js", "py", "cpp"]


const val = coding.forEach((item) => {
    // console.log(item);
}
    // return item
)

// console.log(val) //forEach doesnot return any value, hence we will get undefined in return step

// for return of values we will use another operators
//filter
const myNums = [1, 2, 3, 4, 5, 6, 7]
// const newNums = myNums.filter( (nums) => {
    // return nums > 4})
// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


//   const userbooks = books.filter( (bk) => {
//     return bk.genre === 'History'
//   })
  const userbooks = books.filter( (bk) => bk.genre === 'History')

//   console.log(userbooks); //we can use && also, for multiple condition check
   
//map is also similar to filter and also return automatically


const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumers.map( (num) => { return num + 10})

console.log(newNums);