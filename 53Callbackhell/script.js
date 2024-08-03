// Callbacks
function loadScript(src, callback) {
        var script = document.createElement("script");
        script.src = src;
        script.onload = function() {
                console.log("Loaded script with SRC: " + src)
                callback(null, src);
        }
        script.onerror = function() {
                console.log("Error loading script with SRC: " + src);
                callback(new Error("Src got some error"))
        }
        document.body.appendChild(script);
//         The line `document.body.appendChild(script);` is used to append an HTML element represented by the `script` variable to the `<body>` element of an HTML document. Here's what it does:

// 1. `document.body`:
//    - `document` refers to the Document Object Model (DOM) of the web page.
//    - `document.body` is a reference to the `<body>` element of the current HTML document. It represents the main content area of the web page.

// 2. `.appendChild(script)`:
//    - `appendChild` is a method available on DOM elements, including the `<body>` element.
//    - It is used to insert a new child element within the specified parent element.
//    - In this case, the `script` variable likely contains a reference to a dynamically created `<script>` element.

// So, the line `document.body.appendChild(script);` effectively adds the dynamically created `<script>` element to the end of the `<body>` element in the HTML document. This is a common technique for including external JavaScript files in a web page dynamically.

// When you append a `<script>` element like this, the browser will begin to load and execute the JavaScript code from the `src` URL specified in the `script.src` property.
}

function hello(error, src) {
        if (error) {
                console.log(error)
                return
        }
        alert('Hello World!' + src);
}




loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", function goodmorning(error, src) {
        if (error) {
                console.log(error)
                sendEmergencyMessageToCeo();
                return
        }
        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap2.bundle.min.js", function goodmorning(error, src) {
                if (error) {
                        console.log(error)
                        sendEmergencyMessageToCeo();
                        return
                }
                loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap3.bundle.min.js", function goodmorning(error, src) {
                        if (error) {
                                console.log(error)
                                sendEmergencyMessageToCeo();
                                return
                        }
                        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap4.bundle.min.js", function goodmorning(error, src) {
                                if (error) {
                                        console.log(error)
                                        sendEmergencyMessageToCeo();
                                        return
                                }
                                loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap5.bundle.min.js", function goodmorning(error, src) {
                                        if (error) {
                                                console.log(error)
                                                sendEmergencyMessageToCeo();
                                                return
                                        }
                                        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap6.bundle.min.js", function goodmorning(error, src) {
                                                if (error) {
                                                        console.log(error)
                                                        sendEmergencyMessageToCeo();
                                                        return
                                                }
                                                loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap7.bundle.min.js", function goodmorning(error, src) {
                                                        if (error) {
                                                                console.log(error)
                                                                sendEmergencyMessageToCeo();
                                                                return
                                                        }
                                                        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap8.bundle.min.js", function goodmorning(error, src) {
                                                                if (error) {
                                                                        console.log(error)
                                                                        sendEmergencyMessageToCeo();
                                                                        return
                                                                }
                                                                loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap9.bundle.min.js", function goodmorning(error, src) { })
                                                        })
                                                })
                                        })
                                })
                        })
                })
        })
})
// Chintu



// The code you've provided is an example of asynchronous JavaScript using callbacks to load several script files. It also demonstrates error handling for each script load operation. Let's break down the code step by step:

// 1. `loadScript` Function:
//    - The `loadScript` function is defined to load an external JavaScript file specified by the `src` parameter.
//    - It accepts two arguments: `src` (the URL of the script to load) and `callback` (a callback function to execute when the script has either loaded successfully or encountered an error).
//    - Inside the function, a new `script` element is created and appended to the document's body.
//    - Two event listeners are added to the `script` element:
//      - `script.onload`: This event listener is triggered when the script has loaded successfully. It logs a message to the console and invokes the `callback` function with `null` as the first argument (indicating no error) and the `src` as the second argument.
//      - `script.onerror`: This event listener is triggered if the script encounters an error during loading. It logs an error message and calls the `callback` function with a new `Error` object as the first argument, indicating an error occurred.

// 2. `hello` Function:
//    - The `hello` function is defined to handle the result of loading a script.
//    - If there's an error (i.e., `error` is truthy), it logs the error to the console.
//    - If there's no error, it displays an alert with the message "Hello World!" followed by the `src`.

// 3. Nested `loadScript` Calls:
//    - The code demonstrates a series of nested `loadScript` calls, where each call loads a different script. These calls are nested inside each other.
//    - For each script load, it checks for errors using the `hello` function as the callback. If an error occurs, it logs the error and presumably should call `sendEmergencyMessageToCeo()` to handle the error and notify the CEO.

// The main flow of the code can be summarized as follows:
// - It loads a series of JavaScript files from different URLs one by one, and for each load, it checks for errors using the `hello` function.
// - If any script load encounters an error, it logs the error and potentially sends an emergency message to the CEO (this part of the code assumes the existence of a function `sendEmergencyMessageToCeo()`).
// - If a script loads successfully, it displays an alert with a "Hello World!" message followed by the URL of the loaded script.

// Please note that in practice, handling errors and notifying the CEO might require more comprehensive error-handling mechanisms, and this code is a simplified example for demonstration purposes.