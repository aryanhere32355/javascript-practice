//Immediately invoked function expressions
// we want to immediately activate any function as soon as file open
// Also sometimes global scope variable polluts/create problem in proper execution,hence we want to declare a completely new scope which can declared in function to remove the pollution of global scope variable
//we will use two paranthesis of ()(),1st will define the fn and other will execute it
(function(){             //named iife
    console.log(`chai`)
})();
                       //when we use two iife, the1st fn donot know where it have to stop the context,hence we need to end the line with ;
((name) => {              //unamed iife
    console.log(`chai ${name}`)
})("Aman")