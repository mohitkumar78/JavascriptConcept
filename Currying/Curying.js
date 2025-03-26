// convert below function curried function

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