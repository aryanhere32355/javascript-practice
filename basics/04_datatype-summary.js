// on the basis of access of datatypes(call by value and call by reference in cpp), there are two type
// primitive(call by value) 7 type - string, number, Boolean, Null, Undefined, Symbol, Bigint

// non-primitive(call by reference) - Arrays, Objects, Functions
const heros = ["shaktiman", "Nagraj"]

let objects = {
    name : "Aryan",
    age : 19,
} //we can put any type of data inside an object (inside curly braces is object)

const myFunction = function(){
    console.log("hello world")
}

// Table 20 — typeof Operator Results

// Type of val                                              Result
// --------------------------------------------------------------
// Undefined                                                "undefined"
// Null                                                     "object"
// Boolean                                                  "boolean"
// Number                                                   "number"
// String                                                   "string"
// Object (native and does not implement [[Call]])     -->  "object"
// Object (native or host and does implement [[Call]]) -->  "function"
// Object (host and does not implement [[Call]])    -->      Implementation-defined
//                                                           (except may not be
//                                                           "undefined", "boolean",
//                                                           "number", or "string")




// memory -> stack(primitive)
//           heap (non-primitive)