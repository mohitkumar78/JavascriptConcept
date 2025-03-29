// shallow copy and deep copy
var obj = {
    name: "harsh",
    age: 25
}
var obj2 = obj;// obj2 is not a copy of obj instead obj2 have refrence of obj
console.log(obj2 === obj)
obj2.name = "mohit"
console.log(obj2)
console.log(obj)

// how copy the acutal object

var obj3 = { ...obj } // obj3 is acutal a copy of obj 
console.log(obj == obj3) //false because obj3 not containing the reference obj instead they acutally a copy og obj


// A shallow copy in javascript means creating a new object that copies the properties of the original object without copyin nested objects deeply,if the original object has nested objects like array or objects inside it,the shallow copy will reference those nestead objects instaed of creating new copies of them

let original = { name: "Mohit", details: { age: 22 } };

// Creating a shallow copy using spread operator
let copy = { ...original };

console.log(copy); // { name: "Mohit", details: { age: 22 } }

// Modifying the nested object in the copy
copy.details.age = 23;

console.log(original.details.age); // 23 (also changed in original)
