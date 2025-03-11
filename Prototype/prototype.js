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


// Question 1
function Person(name) {
    this.name = name;
}

Person.prototype.greet = function () {
    return "Hello, " + this.name;
};

const user = new Person("Mohit");
console.log(user.greet());  // Output "Hello Mohit"
console.log(user.__proto__ === Person.prototype); // true
console.log(Person.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__); // null


// Question2  // instance level prototyoical overriding

function Animal() { }

Animal.prototype.makeSound = function () {
    return "Generic sound";
};

let cat = new Animal();
console.log(cat.__proto__);
cat.makeSound = function () {
    return "Meow";
};

console.log(cat.makeSound()); // "Meow"
delete cat.makeSound;
console.log(cat.makeSound()); // "Generic sound"

// Question 3  Prototypical inheritance

let obj3 = {
    a: 10,
    b: 20
};

let obj4 = Object.create(obj3);
obj4.c = 30;

console.log(obj4.a, obj4.b, obj4.c); // 10,20,30
console.log(obj4.hasOwnProperty("a"))// false
console.log(obj4.hasOwnProperty("c")); // true
