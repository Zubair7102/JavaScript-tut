let promise = new Promise(function(resolve, reject) {
        alert("Hello")
        resolve(56)

// After the alert is displayed, you're calling the resolve function with the argument 56.
// This transitions the Promise to the "fulfilled" state, and the value 56 becomes the resolved value of the Promise.
})

console.log("Hello One")
setTimeout(function() {
        console.log("Hello Two in 2 seconds")
}, 2000)

console.log("My name is " + "Hello Three")
console.log(promise)


// Fetch google.com homepage  ==> console.log("google.com homepage done")
// Fetch data from the data api 
// Fetch pictures from the server 
// Print downloading 
// Rest of the script 