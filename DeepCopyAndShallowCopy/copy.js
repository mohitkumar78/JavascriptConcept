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


//Deep Copy
//A deep copy in JavaScript creates a new object that is completely independent of the original one, including all nested objects. Changes in the copied object will not affect the original object.

let deepcopy = JSON.parse(JSON.stringify(original));
console.log(deepcopy);
deepcopy.details.age = 83

console.log(original.details.age)


// deep copy without using JSON.parse(JSON.stringfy())

let obj4 = {
    name: "mohit",
    age: 37,
    social: {
        facebook: {
            ac1: "something@gmail.com",
            ac2: "something2@gmail.com"
        }
        ,
        twitter: {
            free: {
                ac1: "something free@gmail.com"
            },
            paid: {
                ac1: "comethingpaid @gmail.com"
            }
        }
    }
}

function makeDeepCopy(obj7) {
    if (typeof obj7 !== 'object' || obj7 === null) {
        return obj7;
    }
    var copiedval = Array.isArray(obj7) ? [] : {}

    var keys = Object.keys(obj7);
    for (var i = 0; i < keys.length; i++) {
        copiedval[keys[i]] = makeDeepCopy(obj7[keys[i]]);
    }
    return copiedval;
}
var deepcopied = makeDeepCopy(obj4)
console.log("line 78", deepcopied)

