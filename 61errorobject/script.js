try {
        let age = prompt("Enter your age")
        age = Number.parseInt(age) 
        if(age>150){
        throw new ReferenceError("This is probably not true")
        }
} catch (error) {
        // eroor inside the catch(____) is set as variable it can be anything of users choice 
        console.log(error.name)
        console.log(error.message)
        console.log(error.stack)
}

console.log("The script is still running")



// This code uses a `try...catch` block to handle potential errors when prompting the user for their age and attempting to convert it to a number using `Number.parseInt()`. Let's break down the code step by step:

// 1. `let age = prompt("Enter your age")`:
//    - This line displays a prompt dialog to the user, asking them to enter their age. The user's input is stored in the `age` variable.

// 2. `age = Number.parseInt(age)`:
//    - The code attempts to parse the user's input (which is initially a string) into an integer using `Number.parseInt()`. This conversion ensures that the entered value is treated as a number.

// 3. `if (age > 150) { ... }`:
//    - The code checks whether the parsed `age` is greater than 150. If the condition is true (i.e., if the user entered an age over 150), it throws an error using the `throw` statement.

// 4. `throw new ReferenceError("This is probably not true")`:
//    - If the condition in the `if` statement is met, the code explicitly throws a `ReferenceError` with the message "This is probably not true." This is a deliberate error created to be caught by the `catch` block.

// 5. `catch (error)`:
//    - If an error is thrown within the `try` block, it is caught by the `catch` block. The caught error is assigned to the `error` variable.

// 6. Inside the `catch` block:
//    - The code logs information about the caught error:
//      - `error.name`: This logs the name of the error, which is "ReferenceError."
//      - `error.message`: This logs the custom message provided when the error was thrown, which is "This is probably not true."
//      - `error.stack`: This logs the stack trace, which is a sequence of function calls and file locations that led to the error.

// 7. `console.log("The script is still running")`:
//    - Regardless of whether an error is thrown or caught, this line logs "The script is still running" to the console.

// Here's the flow of execution:

// - If the user enters an age greater than 150, the `if` condition is true, and a `ReferenceError` is thrown.
// - The `catch` block catches the error, logs its details (name, message, and stack), and continues executing the script.
// - If the user's input is a valid age (not greater than 150), no error is thrown, and the code proceeds to log "The script is still running" to the console.

// In summary, this code demonstrates the use of a `try...catch` block for error handling when user input is involved, ensuring that the script continues to run even if an error occurs during execution.