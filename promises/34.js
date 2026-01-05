//1. with variable
const promiseOne = new Promise(function (resolve, reject) {
  //promises have two parts resolve and reject
  //these tasks can be and async task,DB calls, cryptography, network
  setTimeout(function () {
    //settimeout is fn which will execute after a particular time and inside it is the fn which we will execute
    console.log("Async task is complete");
    resolve(); //used to connect  resolvbe from .then
  }, 1000);
});

promiseOne.then(function () {
  // for consuming the promise we will use then which is directly  related to resolve, and inside it we get a callback function which receives an argument automatically which return the values from above
  console.log("Promise done");
});

//2. direct making promise without variable
// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Task 2");
//     resolve();
//   }, 1000);
// }).then(function(){
//     console.log("task 2 resolved");
    
// }) 

//3. returning something through resolve
// const promiseThree = new Promise(function(resolve,rreject) {
//     setTimeout(function(){
//         resolve({usernme: "chai", email: "chai@example.com"})//whatever we pass in resolve param will be returned to the below fn
//     })
// }, 1000)

// promiseThree.then(function(ab){
//     console.log(ab);
    
// })

//4.getting a particular object value from resolve

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function() {
//         let error = false
//         if (!error) {
//             resolve({username: "aman", email: "amanhu"})
//         }else{
//           reject('ERROR: something went wrong') 
//         } 
//     }, 1000)
// })
// // const  username = promiseFour.then((user) => {
// //     console.log(ab);  //wrong method
// //     return ab.username
// // })
// // console.log(username);//will not work
// promiseFour
// .then((user) => {
//     console.log(user);
//     return user.username
// })
// .then((username) => {
//     console.log(username);
// })
// .catch(function(error){
//     console.log(error);
// }).finally(() => console.log("The promise is either resolved or rejected")
// )

//5.error handling in async await through try catch

// const promiseFive = new Promise((resolve,reject) => {
//     setTimeout(function() {
//         let error = true
//         if (!error) {
//             resolve({username: "JS", email: "amanhu"})
//         }else{
//           reject('ERROR: JS went wrong') 
//         } 
//     }, 1000)
// })

// //promise can be caught using .then/.catch or async await and promise is an object
// //async await cant handle error directly, hence use try catch
// async function consumePromiseFive() {
//     // const response = await promiseFive
//     // console.log(response);
//     try {
//         const response = await promiseFive
//         console.log(response)
//     } catch (error) {
//        console.log(error);
        
//     }
// }

// consumePromiseFive()


// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);//to check that code does not have any problem
        
//         const data =  await response.json()//used await because conversion in json takes time
//         console.log(data);
//     } catch (error) {
//         console.log("E: ",error);
        
//     }
// }
// getAllUsers()


//using then catch
// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response) => {
//     return response.json()
// })
// .then((data) => {
//    console.log(data);
   
// })
// .catch((error) => console.log(error))