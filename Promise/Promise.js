// Promise is nothing but a object which representing the eventual completion or failure of  an asynchronous task

const promiseOne = new Promise((resolve, reject) => {
    // Do an async task
    //DB calls,cryptography,network
    setTimeout(function () {
        console.log("Async task is completed")
        resolve("happy coding")
    }, 1000)
})

// consume the promise

promiseOne.then((data) => {
    console.log("promise consumed", data)
})  // connection with resolve

// promise chaining in javascript means linking multiple .then() and .catch() method to perform asynchronous operation in sequence ,each .then() receives the result of the previous promise, allowing for cleaner and more readable code.

let promisefour = new Promise((resolve, reject) => {

    setTimeout(() => {
        const error = false;
        if (!error) {
            resolve({ username: "mohit" })
        } else {
            reject("something went wrong")
        }
    }, 1000)

})
promisefour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username)
}).catch((error) => {
    console.log(error)
}).finally(() => console.log("promise is either rejected or resolve"))