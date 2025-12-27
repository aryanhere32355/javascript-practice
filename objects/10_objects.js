// const tinderUser = new Object()  => singleton object 
// const tinderUser = {} =>non singleton object 
const tinderUser = {}

tinderUser.id = "123"
tinderUser.name = "Aman"
tinderUser.IsLoggedIn = "false"

// console.log(tinderUser)

const regularUser = {
    email: "aman@gmail.com",
    fullname: {
        firstName: "Aman",     //nested object
        lastname: "Raj",
    },
}
// console.log(regularUser.fullname.firstName)

//combining objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {4: "a", 6: "b"}

// const obj4 = {obj1, obj2}  //1.object ke ander object aayega same arrays me bhi yahi problem hota h unlike strings

// const obj4 = Object.assign({}, obj1, obj2)  //2.object.assign(target, source)

// const obj4 = {...obj1, ...obj2, ...obj3} //3.best method to combine objects through spreads.

// console.log(obj4)

//4th type => when data received from db in the form of array

const User = [
    {
        id: "1213anjsd",
        email: "aman@gmail.com",
    },
    {
        id: "1213anjsd",
        email: "aman@gmail.com",
    },
    {
        id: "1213anjsd",
        email: "aman@gmail.com",
    }
]

// console.log(User[0].email)

// console.log(tinderUser)
// console.log(Object.keys(tinderUser)) //returns an array very important!!
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty(`IsLoggedIn`)) //true

const course = {
    courseName: "Js in Hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor is bad way of accessing it 

// hence use this methode instead
const {courseInstructor: a} = course

// console.log(a)
// console.log(courseInstructor)  //both cannot be used once, when you declare variable a
