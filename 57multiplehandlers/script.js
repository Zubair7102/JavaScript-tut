let p1 = new Promise((resolve, reject) => {
        // alert("Hey I am not resolved")
        setTimeout(() => {
                resolve(1);
        }, 2000)
})

p1.then(() => {
        console.log("Hurray")
        return new Promise((resolve, reject) => {
                setTimeout(() => {
                        resolve(4)
                }, 6000)
        })
}).then((value) => { console.log(value) })

p1.then(() => {
        console.log("Congratulations this promise is now resolved")
})



// This code demonstrates how Promises work and how multiple `then` handlers are executed for a single Promise. Let's break it down step by step:

// 1. Creating `p1` Promise:
//    - You create a Promise `p1` using the `Promise` constructor.
//    - Inside the `Promise` constructor, you have a `setTimeout` that simulates an asynchronous operation with a 2-second delay.
//    - After 2 seconds, the Promise is resolved with the value `1`.

// 2. First `then` Block:
//    - The `then` method is called on the `p1` Promise.
//    - Inside this `then` handler, you have the following code:
//      - `console.log("Hurray")`: This logs "Hurray" to the console.

//    - You also return a new Promise from this `then` handler. This new Promise simulates another asynchronous operation with a 6-second delay.
//    - After 6 seconds, this new Promise is resolved with the value `4`.

// 3. Second `then` Block:
//    - After the first `then` handler, you have another `then` handler for the `p1` Promise.
//    - Inside this second `then` handler, you have the following code:
//      - `console.log("Congratulations this promise is now resolved")`: This logs "Congratulations this promise is now resolved" to the console.

// Here's the sequence of events:

// 1. The `p1` Promise is created, and after a 2-second delay, it is resolved with the value `1`.
// 2. The first `then` handler is executed and logs "Hurray" to the console.
// 3. Inside the first `then` handler, you return a new Promise with a 6-second delay that resolves with the value `4`. However, this new Promise's resolution is not directly linked to the subsequent `then` handler.
// 4. The second `then` handler is executed independently of the first `then` handler and logs "Congratulations this promise is now resolved" to the console.

// It's important to note that each `then` handler attached to a Promise represents a separate step in the asynchronous chain, and they execute independently. The resolution of the initial Promise, `p1`, is not affected by the second `then` handler. This allows for the orchestration of asynchronous operations in a structured and flexible way using Promises.
