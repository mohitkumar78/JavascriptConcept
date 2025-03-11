/*
Everything in JavaScript is an Object
In JavaScript, almost everything—functions, arrays, objects, and even strings—are objects or behave like objects. This is due to JavaScript’s prototype mechanism.

*/
let obj = {
    name: "Mohit",
    city: "Patna",
    getIntro: function () {
        console.log(this.name + " from " + this.city);
    }
};

let obj2 = {
    name: "Kohit"
};

// Establishing prototypical inheritance
obj2.__proto__ = obj;

console.log(obj2.getIntro()); // Outputs: "Kohit from Patna"
/*
Understanding Prototypes in JavaScript
When you create an object, function, array, or string in JavaScript, they automatically have access to various built-in methods. These methods are not explicitly defined within the object but come from prototypes.

What is a Prototype?
A prototype is simply an object that JavaScript automatically attaches to other objects. This prototype contains additional methods and properties that enhance functionality.

Prototypical Inheritance
In the above example, we assigned obj2.__proto__ = obj. This means:

obj2 now inherits all properties and methods of obj.
Even though getIntro is not defined in obj2, it can still access it from obj via the prototype chain.
This concept of inheriting properties and methods from another object is called Prototypical Inheritance.

*/