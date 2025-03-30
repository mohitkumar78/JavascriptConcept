// Promise Basics
// A Promise is an object representing the eventual completion or failure of an asynchronous task.

const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task is completed");
        resolve("happy coding");
    }, 1000);
});

promiseOne.then((data) => {
    console.log("promise consumed", data);
});

// Promise Chaining
// Promise chaining in JavaScript means linking multiple `.then()` and `.catch()` methods to perform asynchronous operations in sequence.
// Each `.then()` receives the result of the previous promise, allowing for cleaner and more readable code.
let promisefour = new Promise((resolve, reject) => {
    setTimeout(() => {
        const error = false;
        if (!error) {
            resolve({ username: "mohit" });
        } else {
            reject("something went wrong");
        }
    }, 1000);
});

promisefour.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log("promise is either resolved or rejected"));

// Async-Await (Promise Consumption)
// `async` and `await` provide a more readable way to handle promises in JavaScript.
const promisefive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: "javascript", password: "123" });
        } else {
            reject("error: Js something went wrong");
        }
    }, 1000);
});

async function consumePromiseFive() {
    try {
        const response = await promisefive;
        console.log(response);
    } catch (error) {
        console.log("error", error);
    }
}
consumePromiseFive();

// Fetching API Data (Async/Await)
// Fetching user data using `fetch()` with `async/await`.
async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error in getAllusers", error);
    }
}
getAllUsers();

// Fetching API Data (Promise `.then()` Chaining)
// Fetching user data using `fetch()` with `.then()` chaining.
fetch("https://jsonplaceholder.typicode.com/users")
    .then((data) => data.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));


// utility methods of Promise

// Promise.all() It will take array of promise and wait for all of them is resolve , if all the List of promise is resolve sucessfully then it return array of their value ,if any of promise is rejected then Promise.all() immdetiately rejects with that first Error,ignoring other results

// case 1 when all promise is resolve
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ username: "mohit singh" })
    }, 1000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ email: "mohitkumar6204811@gmail.com" })
    }, 500)
})
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ password: "mohitkumar6204811@gmail" })
    }, 500)
})

Promise.all([p1, p2, p3]).then((data) => {
    console.log(data) /*output [
        { username: 'mohit singh' },
        { email: 'mohitkumar6204811@gmail.com' },
        { password: 'mohitkumar6204811@gmail' }
      ] */
}).catch((error) => {
    console.log("Any one of the promise is failed")
})

// case 2 when any of promise is reject

const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ username: "mohit singh" })
    }, 1000)
})

const p5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ email: "mohitkumar6204811@gmail.com" })
    }, 500)
})
const p6 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("promise 6 will rejected")
    }, 300)
})

Promise.all([p4, p5, p6]).then((data) => {
    console.log(data)
}).catch((error) => {
    console.log("Any one of the promise is failed", error)
})

//Promise.allSettled() in JavaScript wait for all the listed promise should be settled regardless they resolved or rejected they give respactive outcomes for all promise
Promise.allSettled([p4, p5, p6]).then((data) => {
    console.log(data)
}).catch((error) => {
    console.log("Any one of the promise is failed", error)

})

// Promise.race() return the first settled promise(resolved or reject) .it wait for the first promise to settle(resolve or reject),if the first promise rejects,Promise.race() rejects immediately
Promise.race([p4, p5, p6]).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log("error in race", error)
})

/*📌Promise.any() Returns the first fulfilled (resolved) promise.

It ignores rejections and waits for the first resolved promise.

If all promises reject, it throws an AggregateError.*/