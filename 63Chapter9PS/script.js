// Problem number 1

const loadScript = async (src) => {
        return new Promise((resolve, reject) => {
                let script = document.createElement("script")
                script.src = src
                script.onload = () => {
                        resolve(src + " Done success")
                }
                document.head.append(script)
        })
}
let a = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js")
a.then((value) => {
        console.log(value)
})

// This code defines an asynchronous function `loadScript` and demonstrates how to load an external script and handle the loading process using Promises and `async/await`. Here's a step-by-step explanation:

// 1. `loadScript` Function:
//    - `loadScript` is an asynchronous function that takes a single argument, `src`, representing the URL of the external script you want to load.

// 2. Inside `loadScript` Function:
//    - A new Promise is created to encapsulate the script loading process. The Promise will be resolved when the script is successfully loaded or rejected if an error occurs.

//    - Inside the Promise, a new `<script>` element is created using `document.createElement("script")`.

//    - The `src` attribute of the script element is set to the URL passed as the `src` argument.

//    - An `onload` event handler is defined for the script element. It listens for the "load" event, which is triggered when the script has been successfully loaded.

//    - When the script is loaded successfully, the Promise is resolved with a message that includes the `src` value and "Done success."

//    - The script element is appended to the `<head>` of the HTML document using `document.head.append(script)`. This action initiates the loading of the script from the specified URL.

// 3. Calling `loadScript`:
//    - You call the `loadScript` function with the URL "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js."

// 4. Using `.then()`:
//    - After calling `loadScript`, you use the `.then()` method on the resulting Promise (`a`) to specify what should happen when the script is successfully loaded.

//    - Inside the `.then()` callback, the resolved value (the message that includes the `src` value and "Done success") is logged to the console.



// _______________________________________________________________________________________________________________________________________________________________________





// Problem number 2
const main2 = async () => {
        console.log(new Date().getMilliseconds())
        let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js")
        console.log(a)
        console.log(new Date().getMilliseconds())
}
main2()

// 1. `main2` Function:
//    - `main2` is an asynchronous function that doesn't take any arguments.

// 2. `console.log(new Date().getMilliseconds())`:
//    - The code logs the current time in milliseconds (the value returned by `new Date().getMilliseconds()`) to the console before the script loading process begins. This is the starting time.

// 3. `let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js")`:
//    - Inside `main2`, you use `await` to call the `loadScript` function, which loads the external script at the specified URL.
//    - The execution of `main2` is paused until the Promise returned by `loadScript` is resolved (i.e., until the script has been successfully loaded).
//    - The result of the `loadScript` Promise, which is the success message containing the URL and "Done success," is stored in the variable `a`.

// 4. `console.log(a)`:
//    - The code logs the value of `a` to the console. This is the success message from the `loadScript` Promise, indicating that the script has been loaded.

// 5. `console.log(new Date().getMilliseconds())`:
//    - The code logs the current time in milliseconds again after the script has been loaded. This is the ending time.


// _________________________________________________________________________________________________________________________________________________________________________



// Problem number 3
let p = () => {
        return new Promise((resolve, reject) => {
                setTimeout(() => {
                        reject(new Error("Please this is not acceptable"))
                }, 3000)
        })
}

let a1 = async () => {
        try {
                let c = await p()
                console.log(c)
        }
        catch (err) {
                console.log("This error has been handled")
        }
}
a1()


// p Function:
// p is a function that returns a Promise.
// Inside the Promise, a setTimeout is used to simulate an asynchronous operation that takes 3 seconds (3000 milliseconds) to complete.
// After 3 seconds, the Promise is rejected with an error using reject(new Error("Please this is not acceptable")).

// a1 Function:
// a1 is an asynchronous function that uses the async keyword.
// Inside a, there is a try...catch block, which is used to catch and handle errors that may occur during the asynchronous operation.
// try Block:

// Inside the try block, the code attempts to await the execution of the p function.
// The await keyword pauses the execution of the function until the Promise returned by p either resolves or rejects.
// If the Promise resolves, the result is assigned to the variable c, and it is logged to the console.
// catch Block:

// If the Promise returned by p rejects with an error, the code inside the catch block is executed.
// Inside the catch block, the error is caught and logged to the console with the message "This error has been handled."
// Calling a Function:

// The a1 function is called.


// _________________________________________________________________________________________________________________________________________________________________________






// Problem number 4

let p1 = async () => {
        return new Promise((resolve, reject) => {
                setTimeout(() => {
                        resolve(10)
                }, 2000)
        })
}
let p2 = async () => {
        return new Promise((resolve, reject) => {
                setTimeout(() => {
                        resolve(20)
                }, 1000)
        })
}
let p3 = async () => {
        return new Promise((resolve, reject) => {
                setTimeout(() => {
                        resolve(30)
                }, 3000)
        })
}

const run = async () => {
        console.time("run")
        // let a1 = await p1() // Fetch first 10 products from the database
        // let a2 = await p2() // Fetch another 10 products from the database
        // let a3 = await p3() // Fetch yet another 10 products from the database


        let a1 = p1() // Fetch first 10 products from the database
        let a2 = p2() // Fetch another 10 products from the database
        let a3 = p3() // Fetch yet another 10 products from the database
        let a1a2a3 = await Promise.all([a1, a2, a3])
        console.log(a1a2a3)
        // console.log(a1, a2, a3)
        console.timeEnd("run")
}

run()



// This code demonstrates how to perform asynchronous operations concurrently using `async/await` and the `Promise.all` method. Here's a step-by-step explanation:

// 1. Three Async Functions (`p1`, `p2`, `p3`):
//    - Three async functions, `p1`, `p2`, and `p3`, are defined.
//    - Each function returns a Promise that simulates an asynchronous operation using `setTimeout`. These operations resolve with values 10, 20, and 30, respectively, after specific time delays (2 seconds, 1 second, and 3 seconds).

// 2. `run` Function:
//    - The `run` function is defined as an asynchronous function.

// 3. `console.time("run")`:
//    - A timer is started using `console.time("run")` to measure the time taken to execute a block of code.

// 4. Concurrent Asynchronous Operations:
//    - In the commented section, the code fetches data sequentially by using `await` for each Promise (`p1()`, `p2()`, and `p3()`). This means that each Promise is resolved one after the other, causing a total wait time of 6 seconds.

//    - In the uncommented section, the code fetches the data concurrently by calling `p1()`, `p2()`, and `p3()` without `await`. This means that all three asynchronous operations run in parallel, and the code immediately proceeds to the next step.

// 5. `Promise.all`:
//    - The `Promise.all` method is used to wait for all three Promises to be resolved. It takes an array of Promises as its argument.

// 6. `console.log(a1a2a3)`:
//    - Once all the Promises are resolved, the results are logged to the console. In this case, `a1a2a3` is an array containing the resolved values [10, 20, 30].

// 7. `console.timeEnd("run")`:
//    - The timer measurement is ended using `console.timeEnd("run")`, and the total time taken for the asynchronous operations is logged to the console.

// _________________________________________________________________________________________________________________________________________________________________________
