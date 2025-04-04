// Apply  call and Bind


//call
//problem statement
console.log("hello")
let userDetail = {
    name: "mohit kumar",
    age: 28,
    Designation: "software developer",
    printDetails: function () {
        console.log(this)
    }
}
userDetail.printDetails();
let userDetail2 = {
    name: "tashu kumar",
    age: 28,
    Designation: "software developer",

}
// currently the function printDetails this point to object userDetail object but i want they should point to object userDetails2 ,this is done through call() method
// call method is basically used for function borrowing front another object
userDetail.printDetails.call(userDetail2);


let userDetail3 = {
    name: "mohit kumar singh",
    age: 30,
    Designation: "software developer",

}
let print = function printDetails(state, country) {
    console.log(this.name + " " + state + " " + country)
}
print.call(userDetail3, "Delhi", "india");

//Imagine This:
//You have a person and they have a function to say their name.

const person = {
    name: "Mohit",
    sayHello: function () {
        console.log("Hello, my name is " + this.name);
    }
};
//Now, let’s do this:  
const hello = person.sayHello;
hello(); // ❌ Oops! "this" is lost — Output: "Hello, my name is undefined"
//Why? Because this doesn’t know it's coming from person anymore.

//✅ Fix with .bind():
javascript
Copy
Edit
const hello2 = person.sayHello.bind(person);
hello2(); // ✅ "Hello, my name is Mohit"
/*
So, what .bind(person) did is:
👉 “Always remember this should point to person.”

Think of .bind() like this:
You're tying the function to always remember who it belongs to.

Summary:
Term	Meaning
this	Who is calling the function
.bind(obj)	Lock the this to always point to obj */