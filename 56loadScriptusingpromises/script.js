const loadScript = (src) => {
        return new Promise((resolve, reject) => {
                let script = document.createElement("script")
                script.type = "text/javascript"
                script.src = src
                document.body.appendChild(script)
                script.onload = (script) => {
                        resolve("Script has been loaded sir")
                }
                script.onerror = () => 
                {
                        reject(0) 
                }
        })
}

let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js")
p1.then((value) => {
        console.log(value)
        return loadScript("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js")
}).then((value) => {
        console.log("Second script ready")
}).catch((error) => {
        console.log("We are sorry but we are having problems loading this script")
})



// This code demonstrates the use of Promises for dynamically loading external JavaScript files and chaining multiple asynchronous operations. Let's break down the code step by step:

// 1. `loadScript` Function:
//    - The `loadScript` function is defined as an arrow function, which takes a single argument `src` representing the URL of an external script to load.
//    - It returns a Promise that represents the loading of the script.

// 2. Inside the `loadScript` Function:
//    - A new `<script>` element is created, and its `type` and `src` attributes are set.
//    - The script element is appended to the `<body>` of the HTML document using `document.body.appendChild(script)`. This action initiates the loading of the script from the specified URL.
//    - Two event listeners are added to the script:
//      - `script.onload`: This event listener is triggered when the script has been successfully loaded. It resolves the Promise with the message "Script has been loaded sir."
//      - `script.onerror`: This event listener is triggered if an error occurs during script loading. It rejects the Promise with a value of 0.

// 3. Creating `p1` Promise:
//    - You create a Promise `p1` by calling the `loadScript` function with the URL of the Bootstrap script. This starts the process of loading the script.

// 4. `p1.then((value) => {...}`:
//    - You use the `then` method on `p1` to specify what should happen when `p1` is resolved (i.e., when the Bootstrap script has loaded successfully).
//    - Inside the callback function, you log the value "Script has been loaded sir" to the console, and then you return the result of another `loadScript` call to load the jQuery script.

// 5. Chaining Promises:
//    - The `.then` method can be chained, so when the Bootstrap script is loaded successfully, the code proceeds to load the jQuery script.
//    - Once the jQuery script is loaded successfully, the next `.then` callback is executed, logging "Second script ready" to the console.

// 6. `.catch((error) => {...}`:
//    - The `.catch` method is used to catch any errors that may occur during the loading of the scripts.
//    - If there is an error (for example, if the scripts fail to load), it logs "We are sorry but we are having problems loading this script" to the console.

// In summary, this code creates a chain of Promises where each script is loaded after the previous one has successfully loaded. If an error occurs during loading, it is caught and handled using the `catch` method. This pattern allows for clean and organized handling of asynchronous script loading and error management.