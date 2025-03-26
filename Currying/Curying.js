//Q1. convert below function curried function

function sum(a, b, c) {
    return a + b + c;
}

console.log("Line no 7", sum(1, 2, 3))

//curried function

function currieedsum(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

console.log(currieedsum(1)(2)(2));

/*Q2. implement the function evaluate
   evaluate("sum")(4)(2) =>6
   evaluate("multiply")(4)(2)=>8
   evaluate("divide")(4)(2)=>2
   evaluate("substract")(4)(2)
   */


function evaluate(opration) {
    return function (a) {
        return function (b) {
            if (opration === "sum") {
                return a + b;
            }
            else if (opration === "multiply") {
                return a * b;
            }
            else if (opration === "divide") {
                return a / b;
            }
            else if (opration === "substract") {
                return a - b;
            }
        }
    }
}
console.log(evaluate("sum")(4)(2)); // 6
console.log(evaluate("multiply")(4)(2)); //8
console.log(evaluate("divide")(4)(2))  // 2
console.log(evaluate("substract")(4)(2)) // 2


// Infine curying

function Add(a) {
    return function (b) {
        if (b) return Add(a + b);

        return a;
    }
}
console.log(Add(2)(3)(4)(5)());

//👉 Write a function multiply that supports infinite currying and returns the product when called with ().

function multi(a) {
    return function (b) {
        if (b) return multi(a * b);
        return a;
    }
}
console.log(multi(2)(3)(4)()); // Output: 24
console.log(multi(5)(10)());   // Output: 50

//Write a function concatStr that allows infinite currying and concatenates strings until () is called.

function concatStr(str) {
    return function (str2) {
        if (str2) return concatStr(str + " " + str2);

        return str;
    }
}
console.log(concatStr("hello")("mohit")("singh")("bansal")());


// Genral Partial function 
function sum(a, b, c) {
    return a + b + c;
}

function Partial(fn, ...fixedArgument) {
    return function (...restArgument) {
        return fn(...fixedArgument, ...restArgument)
    }
}

const sum2 = Partial(sum, 4);
console.log(sum2(3, 4));

// Dom Manipulation using curying

function updateHeader(id) {
    return function (content) {
        document.querySelector("#" + id).textContent = content
    };
}

const update = updateHeader("heading");
update("my name rohn")
update("my name is rohan")