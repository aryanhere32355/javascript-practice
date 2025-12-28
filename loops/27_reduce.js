const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (accumulatorumulator, currentvalue) {
//     console.log(`accumulator: ${accumulator} and currentvalue: ${currentvalue}`);
//     return accumulator + currentvalue
// }, 0)  //0 will be initial value for accumulator


const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

// console.log(myTotal);

//this can be used to cal total price of items added in cart 

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]



const totalPrice = shoppingCart.reduce( (price, item) => (price + item.price), 0) //item denotes each objects inside the array
console.log(totalPrice);
