let key = prompt("Enter key you want to set")
let value = prompt("Enter value you want to set")

localStorage.setItem(key, value)

console.log(`The value at ${key} is ${localStorage.getItem(key)}`)

if (key == "red" || key == "blue") {
        localStorage.removeItem(key)
}

if (key == 0) {
        localStorage.clear()
}


// This JavaScript code interacts with the `localStorage` object, which allows you to store key-value pairs in the user's web browser for persistent storage. Here's a step-by-step explanation of what each part of the code does:

// 1. User Input:
//    - The code prompts the user to enter a key and a value. The user's input is stored in the `key` and `value` variables.

// 2. `localStorage.setItem(key, value)`:
//    - This line uses the `localStorage` object to set a key-value pair. It stores the `value` in the web browser's local storage under the specified `key`. This data will persist across browser sessions.

// 3. `console.log(`The value at ${key} is ${localStorage.getItem(key)}`)`:
//    - This line logs a message to the console that includes the `key` and the corresponding value retrieved from `localStorage`. It demonstrates how to retrieve and display the value associated with a specific key.

// 4. `if (key == "red" || key == "blue")`:
//    - This is a conditional statement that checks if the value of `key` is either "red" or "blue." If `key` matches either of these values, the code proceeds to the next line.

// 5. `localStorage.removeItem(key)`:
//    - If the `key` is "red" or "blue," this line removes the corresponding key-value pair from `localStorage`. This means the data associated with "red" or "blue" is deleted.

// 6. `if (key == 0)`:
//    - This is another conditional statement that checks if the value of `key` is equal to 0 (zero). If `key` is 0, the code proceeds to the next line.

// 7. `localStorage.clear()`:
//    - If the `key` is 0, this line clears the entire `localStorage`, removing all key-value pairs stored in it. This effectively wipes out all local storage data.

// In summary, this code:

// - Allows the user to set key-value pairs in the web browser's `localStorage` using user input.
// - Demonstrates how to retrieve and display the value associated with a specific key from `localStorage`.
// - Checks and removes key-value pairs if the key matches specific values ("red" or "blue").
// - Clears the entire `localStorage` if the key is equal to 0.

// Keep in mind that `localStorage` is used for client-side storage and is limited to the same domain. Data stored in `localStorage` will persist even after the user closes and reopens the browser, but it is limited in size and is accessible only from the same domain as the web page that set the data.