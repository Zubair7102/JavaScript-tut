// sessionStorage.getItem("name")
// sessionStorage.clear()
// sessionStorage.removeItem("name")
// sessionStorage.setItem("name", "harry")
// sessionStorage.removeItem("name")


window.onstorage = (e) => {
        alert("changed")
        console.log(e)
}


// The provided JavaScript code sets up an event listener to respond to changes in the web storage (localStorage and sessionStorage) in the browser. Here's an explanation of what each part of the code does:

// 1. `window.onstorage`:
//    - `window.onstorage` is an event handler that listens for changes to the web storage (localStorage and sessionStorage) in the browser.

// 2. `(e) => { ... }`:
//    - This is an arrow function that defines what should happen when a storage change event occurs. The arrow function takes one parameter, `e`, which represents the event object containing information about the storage change.

// 3. `alert("changed")`:
//    - This line displays an alert message with the text "changed" whenever a storage change event is detected. This is a simple way to notify the user that a change in web storage has occurred.

// 4. `console.log(e)`:
//    - This line logs the event object `e` to the console. The event object contains information about the storage change, including the key that was changed, the old value, and the new value.

// In summary, this code sets up an event listener that watches for changes to the web storage in the browser. When a change is detected, it triggers an alert to notify the user and logs the event object to the console, allowing you to see the details of the storage change.

// This can be useful for scenarios where multiple tabs or windows of the same website need to share data using web storage, and you want to respond to changes made in one tab/window in real-time in others. The event handler allows you to synchronize and respond to these changes as they occur.