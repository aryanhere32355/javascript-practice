let myName = "  aryan"
// console.log(myName.trim().length);
// console.log(myName.trueLength);

// myHeroes is an Array
// Internally: myHeroes → Array.prototype → Object.prototype → null
let myHeroes = ["thor", "spiderman"]


// heroPower is a plain Object literal
// Internally: heroPower → Object.prototype → null
let heroPower = {
    thor: "hammer",          // property of heroPower
    spiderman: "sling",      // property of heroPower

    // method: 'this' refers to heroPower when called as heroPower.getSpiderPower()
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}


// Adding method to Object.prototype
// ⚠️ This means EVERY object/array/function can access 'ar'
Object.prototype.ar = function(){
   console.log(`aryan is present in all objects`);
}


// Adding method ONLY to Array.prototype
// This will be available ONLY to arrays
Array.prototype.heyAr = function(){
    console.log(`Hey i am saying hello`);
}


// myHeroes is an array → goes up to Object.prototype → ar() found
myHeroes.ar()      // ✅ works


// myHeroes is an array → heyAr exists directly on Array.prototype
myHeroes.heyAr()   // ✅ works


// heroPower is NOT an array
// heroPower → Object.prototype → null
// Array.prototype is NEVER checked
// heroPower.heyAr()    // ❌ undefined (if called, error)

/*
================ EXTRA IMPORTANT POINTS =================

1️⃣ Prototype lookup rule:
   JS searches:
   object → its prototype → parent prototype → ... → null

2️⃣ Why myHeroes.ar() works?
   Because:
   Array.prototype itself comes from Object.prototype

3️⃣ Why heroPower.heyAr() fails?
   Because:
   Object.prototype does NOT come from Array.prototype

4️⃣ Prototype chain is ONE-WAY (bottom → top)
   ❌ Parent never gets child properties
   ✅ Child can access parent properties

5️⃣ Object.prototype injection is dangerous
   - Affects ALL objects globally
   - Can break libraries
   - Use ONLY for learning or polyfills

6️⃣ Array.prototype injection is safer
   - Affects only arrays
   - Still avoid in production unless necessary

7️⃣ Interview one-liner:
   "Arrays inherit from Object, but Objects do not inherit from Array"

========================================================
*/


//Inheritance //to exchange information we can use prototype
const user = {
    name: "chai"
}
const Teacher = {
    makevideo: true
}

const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: 'JS assignment',
fullTime: true,
__proto__: TeachingSupport//giving reference to teaching support/access
} 
Teacher.__proto__= user//Teache getting user property here
 
//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

//to give truelength superpower to all strings
let anotherUsername = "  cahaurco  de"//middle spaces will be counted

String.prototype.truelength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`true length is: ${this.trim().length}`);
    
}
anotherUsername.truelength()
//now beacuse this propetry craeted is for strings we can use it for other strings too eg.

"  a ama".truelength()