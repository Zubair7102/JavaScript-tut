let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
                console.log("Resolved after 2 seconds")
                resolve(56)
        }, 2000)
})

p1.then((value) => {
        console.log(value)
        return new Promise((resolve, reject) => {
                setTimeout(() => 
                {
                        resolve("Promise 2") 
                }, 2000)
        }) 
}).then((value) => {
        console.log("We are done")
        return 2
}).then((value)=>{
        console.log("Now we are pakka done")
})


// This code demonstrates the chaining of Promises in JavaScript. Let's break down the code step by step:

// Creating p1 Promise:

// The code starts by creating a Promise p1 using the Promise constructor.
// Inside the Promise constructor function, a setTimeout is used to simulate an asynchronous operation. After 2 seconds, the Promise is resolved with the value 56.
// p1.then((value) => {...}:

// The then method is called on the p1 Promise, which allows you to specify what to do when p1 is resolved.
// Inside the callback function, the value 56 (which is the resolved value of p1) is logged to the console.
// Returning a New Promise:

// Inside the then callback for p1, a new Promise is created using the Promise constructor. This new Promise also simulates an asynchronous operation with a setTimeout.
// After 2 seconds, the new Promise is resolved with the value "Promise 2."
// Chaining Promises:

// The then method is called again on the Promise returned in the previous then callback.
// In this callback, "We are done" is logged to the console.
// Returning a Value:

// In the same then callback, a plain value 2 is returned. When a plain value is returned within a then callback, it is automatically wrapped in a resolved Promise with that value.
// Chaining Another then:

// Another then method is called, this time on the resolved Promise with the value 2.
// In this final then callback, "Now we are pakka done" is logged to the console.
// In summary, this code demonstrates a sequence of asynchronous operations that are executed in a chained manner using Promises. Each then callback is called after the previous Promise has been resolved. This allows you to create a structured flow of asynchronous tasks, making it easier to manage and coordinate complex asynchronous operations.
