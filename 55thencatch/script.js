let p1 = new Promise((resolve, reject) => {
        console.log("Promise is pending")
        setTimeout(() => {
                // console.log("I am a promise and I am resolved")
                resolve(true)
        }, 5000)
})

let p2 = new Promise((resolve, reject) => {
        console.log("Promise is pending")
        setTimeout(() => {
                // console.log("I am a promise and I am rejected")
                reject(new Error("I am an error"))
        }, 5000)
})

// To get the value
p1.then((value) => {
        console.log(value)
})

// To catch the errors
// p2.catch((error) => {
//         console.log("some error occurred in p2")
// })

p2.then((value)=>{
        console.log(value) 
},(error)=>{
        console.log(error)
})




// The code you've provided demonstrates the use of Promises in JavaScript to handle asynchronous operations and how to access the results or errors of those operations. Let's break down the code step by step:

// 1. Creating Promises (`p1` and `p2`):
//    - You create two Promise objects, `p1` and `p2`, using the `Promise` constructor. Each Promise has an executor function that takes two parameters, `resolve` and `reject`, which are used to control the state of the Promise.

// 2. Inside `p1` and `p2`:
//    - In both promises, you log "Promise is pending" to the console. This is printed when the Promise is initially created and is in the pending state.

// 3. `setTimeout`:
//    - Inside each Promise, you use `setTimeout` to simulate an asynchronous operation that takes 5 seconds to complete.

// 4. In `p1`:
//    - After a 5-second delay, you call `resolve(true)`. This means that the Promise `p1` is fulfilled (resolved) with the value `true`.

// 5. In `p2`:
//    - After a 5-second delay, you call `reject(new Error("I am an error"))`. This means that the Promise `p2` is rejected with an `Error` object containing the message "I am an error."

// 6. Handling the Promises:
//    - You use the `then` method to handle the results of `p1` and `p2`.
//    - For `p1`, you call `p1.then((value) => { console.log(value) })`, which means that when `p1` is resolved, the provided callback function is called with the resolved value (`true` in this case), and it logs the value to the console.

//    - For `p2`, you use both `then` and `catch`. This is an alternative way to handle resolved and rejected states. In the `then` call, you have both success and error callbacks:

//      ```javascript
//      p2.then(
//        (value) => {
//          console.log(value);
//        },
//        (error) => {
//          console.log(error);
//        }
//      );
//      ```

//      - If `p2` is resolved, the success callback is called with the resolved value (which is not defined in this case).
//      - If `p2` is rejected, the error callback is called with the error object (an instance of `Error`) and logs the error message to the console.

//    - You've commented out a section where you explicitly use `p2.catch` to catch errors. Both approaches are equivalent; you can use either `then` with an error callback or `catch` to handle Promise rejections.

// In summary, the code demonstrates how to create and use Promises to handle asynchronous operations. The `then` method is used to handle both successful resolutions and errors, and it logs the results to the console. This code simulates asynchronous delays using `setTimeout` to showcase how Promises work.