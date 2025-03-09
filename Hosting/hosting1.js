
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

// Question 4.

var name = "Lokesh Prajapati"; // global variable and hoisted and initlized with "Lokesh Prajapati"

(function () {// Entering the IIFE (Immediately Invoked Function Expression , there also created local scope and name is hoisted at top of the local scope and assigned value is undifined due to hosting with var declration.

    console.log(name); // That's why it print undifined here 

    var name = "Lokesh Prajapati";

})(); // Output: undefined;

// Question 5

function sayHelloWorld() {   // when sayHellowWorld() call then first function declaration is hoisted first with their defination , var sayGoodbyeWorld is also hoisted but its declartion not it initlize with undifined now hoisting is done and then javascript engine exceute function line by line and they return hoisted function 
    /*
    return sayGoodbyeWorld(){
    return "Goodbye, World"
    }

    code not reached the assigment to var sayGoodbyeWorld 
    */



    var sayGoodbyeWorld = function () {

        return "Hello, World!";

    };

    function sayGoodbyeWorld() {

        return "Goodbye, World!";

    }
    return sayGoodbyeWorld();
}

console.log(sayHelloWorld()); // output " Goodbye, world"