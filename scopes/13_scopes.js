//var c = 300

let a = 300 //global scope
if (true){
    let a = 2
    const b = 22
    // console.log(a) //2  local scope
}
//   but if we use var b or just b, it becomes global, so we should never use any variable like this
// console.log(a)//300


function one(){
    const username = "Aman"
           function two(){
             const website = "youtube"
             console.log(username)
           }
    // console.log(website)
    two()
}
one()


if (true){
    const username = "akash"
         if(username === "akash"){
            const website = " youtube"
            console.log(username + website)
         }
        //  console.log(website)
}
// console.log(username)



console.log(addone(1))
function addone(num){
    return num +1
}


// console.log(addTwo(1))
// const addTwo = function(num){      //Both are type of functions but this is varible type as in js variables are very powerful and can hold many things
                                    //   also it cannot be called from above like normal functions
//     return num + 1
// }
