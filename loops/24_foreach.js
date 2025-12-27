const coding = ["js", "cpp", "py"]

coding.forEach( function (val){           //callback function hai, they donot have names
            //   console.log(val);        //1st type 
})
coding.forEach((val) => {           
            //   console.log(val);        //2nd type,arrow function
})


function printMe(item){
    // console.log(item);                  //3rd type with printMe function
}

coding.forEach(printMe)

coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
    
})

 //very important example
const myCoding = [
      {
        langname: "java",
        filename: "js"
      },
      {
        langname: "cpp",
        filename: "c++"
      },
      {
        langname: "python",
        filename: "py"
      }

]  //array ke andar 3 objects hain, very important for db

myCoding.forEach((item) => {
    console.log(item.langname);
    
})