setTimeout(()=>{
console.log("Hacking wifi.... Please wait..." ) 
}, 1000)

try{
        setTimeout(()=>{ 
                console.log(rahul)  
        }, 100)
}
catch(err){
        console.log("Balle balle")
}


setTimeout(()=>{ 
        console.log("Fetching username and password.... Please wait..." )
}, 2000) 

setTimeout(()=>{ 
console.log("Hacking Rahul's facebook id.... Please wait..." )
}, 3000) 

setTimeout(()=>{ 
console.log("Username and password of Rahul (+919356700001) fetched.... Please wait..." )
}, 4000) 



// This code involves the use of JavaScript's `setTimeout` function to create asynchronous operations and includes a `try...catch` block for error handling. Let's break down the code step by step:

// 1. `setTimeout` with "Hacking wifi...":
//    - The first `setTimeout` function is set to execute after a delay of 1000 milliseconds (1 second). It logs "Hacking wifi... Please wait..." to the console.

// 2. `try...catch` block:
//    - Inside the `try` block, another `setTimeout` function is set to execute after a delay of 100 milliseconds (0.1 seconds).
//    - In this inner `setTimeout`, there's an attempt to log the value of a variable `rahul`. However, `rahul` is not defined, so it will throw an error.

// 3. `catch` block:
//    - The `catch` block is used for error handling. It catches any error that occurs within the `try` block.
//    - Inside the `catch` block, "Balle balle" is logged to the console.

// 4. More `setTimeout` functions:
//    - Three more `setTimeout` functions are used with increasing delays to simulate additional asynchronous operations:
//      - "Fetching username and password... Please wait..." after 2000 milliseconds (2 seconds).
//      - "Hacking Rahul's Facebook ID... Please wait..." after 3000 milliseconds (3 seconds).
//      - "Username and password of Rahul (+919356700001) fetched... Please wait..." after 4000 milliseconds (4 seconds).

// Here's how the code executes:

// 1. The first `setTimeout` logs "Hacking wifi... Please wait..." after 1 second.

// 2. The inner `setTimeout` within the `try` block attempts to log the undefined variable `rahul`, which throws an error. The `catch` block then catches this error and logs "Balle balle."

// 3. The remaining `setTimeout` functions execute as scheduled, logging their respective messages at the specified times.

// In summary, this code demonstrates the use of asynchronous operations with `setTimeout` and showcases error handling with a `try...catch` block. The code logs messages at different times, simulating a sequence of events.