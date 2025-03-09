
//Question 1.

console.log("value of age is", age); // due hoisting age variable hosting at top of the scope and intialize with undifined 
var age = 30;
console.log("value of age", age); //here we initlized with 30 so that it print 30 in console




// Question 2.    hosting with let and const
/*
age1 = 100;
console.log("value of age is", age1) // we got a refrenece Error due to Temporal Dead Zone
let age1 = 30;
console.log("value of age is", age1);
// Reason

When we declare the variable with let and const they are not initialized immediately.
The period from start of the scope untill the variable is declared is the Temperol dead zone,if try to acess they give you Reffrence Error
*/

// Question 3. hosting with functiin declration

var x = 1;

function foo() {

    x = 10;

    return;

    function x() {

    }

}

foo();

console.log(x)  // output:1

/* Explaination 
When the javascript engine first time parse the script var x is initlize with unfined and then function is Foo is hoisted.
Now Inside  the foo function, function x is also hosited at top of their local scope inside foo function when the execution of foo function is start then,
  
     he assignment x = 10; modifies the local x, which is actually a function, not the global x.
     then return  from the function without altring the global variable x.
     That's why the output is 1 
     */
