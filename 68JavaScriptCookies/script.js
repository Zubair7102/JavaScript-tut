console.log(document.cookie)
document.cookie = "name=harry1122334400"
document.cookie = "name2=harry11223344002"
document.cookie = "name=harry"
let key = prompt("enter your key")
let value = prompt("enter your value")
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie)




// The provided JavaScript code interacts with browser cookies. Here's a step-by-step explanation of what each part of the code does:

// 1. `console.log(document.cookie)`:
//    - This line logs the current value of the `document.cookie` property to the console. The `document.cookie` property contains all the cookies associated with the current web page. It's a string that lists all the cookies, separated by semicolons, and looks something like `"name=harry1122334400; name2=harry11223344002"`.

// 2. `document.cookie = "name=harry1122334400"`:
//    - This line sets a cookie with the name "name" and the value "harry1122334400." It creates or updates the "name" cookie with this new value.

// 3. `document.cookie = "name2=harry11223344002"`:
//    - This line sets another cookie with the name "name2" and the value "harry11223344002." If a "name2" cookie already exists, it will be updated with the new value.

// 4. `document.cookie = "name=harry"`:
//    - This line attempts to change the value of the "name" cookie to "harry." It effectively updates the "name" cookie with the new value.

// 5. User Input:
//    - These lines prompt the user to enter a key and a value. The entered key and value are then used to set a new cookie using the `document.cookie` property. The key and value are properly encoded using `encodeURIComponent` to ensure they are correctly formatted for cookies.

// 6. `document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`:
//    - This line sets a new cookie with the key-value pair provided by the user. The user's input is URL-encoded using `encodeURIComponent` to handle any special characters.

// 7. `console.log(document.cookie)`:
//    - After the user has entered their key and value, this line logs the updated value of the `document.cookie` property. The output will include any cookies that were set or updated in the previous steps, as well as the one set based on the user's input.

// In summary, this code demonstrates how to interact with browser cookies using JavaScript:

// - It shows how to read and display existing cookies using `document.cookie`.
// - It demonstrates how to set or update cookies by assigning values to `document.cookie`.
// - It includes a feature for user input, allowing users to set new cookies with custom key-value pairs.
// - Cookies are typically stored as key-value pairs in the `document.cookie` property, and this code allows you to manipulate them.