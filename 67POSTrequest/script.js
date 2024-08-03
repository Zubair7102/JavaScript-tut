const createTodo = async (todo) => {
        let options = {
                method: "POST",
                // // popular HTTP methods for making requests and interacting with your servers is the POST method, which you can use to send data to a server
                headers: {
                        "Content-type": "application/json"
                },
                body: JSON.stringify(todo),
        }

//         This code defines a JavaScript object called `options` that is typically used when making an HTTP request using JavaScript, particularly when using the `fetch` function. Let's break down what each part of this code does:

// 1. `options` Object:
//    - This is an object that contains various properties, which are used to configure an HTTP request. These properties specify the details of the request, such as its method, headers, and the data to send in the request.

// 2. `method: "POST"`:
//    - This property sets the HTTP method for the request to "POST." This means that the request is intended to create or submit data to the server. When you send a "POST" request, you typically include data in the request body, which is used to create or update a resource on the server.

// 3. `headers` Object:
//    - This property is an object that represents the HTTP headers to be included in the request. In this case, there is one header defined:
//      - `"Content-type": "application/json"`: This header indicates that the content being sent in the request body is in JSON format. It tells the server how to interpret the data in the request body.

// 4. `body: JSON.stringify(todo)`:
//    - This property sets the request body, which is the data to be sent to the server in the HTTP request. It takes the `todo` variable, presumably an object or data that you want to send, and converts it into a JSON string using `JSON.stringify`. This is necessary because the HTTP request body typically expects data in string format, and JSON is a common format for sending structured data.

// So, in summary, this code is configuring the `options` object for an HTTP POST request. It specifies the method as "POST," sets the "Content-type" header to indicate that the data is in JSON format, and includes the data from the `todo` object in the request body after converting it to a JSON string. This `options` object can be used as a parameter when making an HTTP request using JavaScript's `fetch` or similar methods.

        
let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
        // popular HTTP methods for making requests and interacting with your servers is the POST method, which you can use to send data to a server
        let response = await p.json()
        return response

        
// 1. `fetch` Function:
//    - The `fetch` function is used to make an HTTP request to a specified URL. In this case, it's making a request to `'https://jsonplaceholder.typicode.com/posts'`. This URL is an example endpoint provided by JSONPlaceholder, a fake online REST API for testing and prototyping.    it is a website that provide fake API go search on google.

// 2. `options` Object:
//    - The `options` object, as defined in your previous code, is passed as the second argument to the `fetch` function. It contains the configuration for the HTTP request, specifying that it's a "POST" request and that the data being sent is in JSON format.

// 3. `await` Keyword:
//    - The `await` keyword is used to pause the execution of the code until the HTTP request completes. It's typically used within an `async` function.

// 4. `let response = await p.json();`:
//    - This line takes the response from the `fetch` function (stored in `p`) and asynchronously reads the response body as JSON. This assumes that the server is expected to respond with JSON data. The response is parsed and stored in the `response` variable.

// 5. `return response`:
//    - The parsed JSON response is returned from the `async` function as the result of the function. This means that when you call this function, it will return the JSON data received from the specified URL.

// In summary, this code sends an HTTP POST request to 'https://jsonplaceholder.typicode.com/posts' with the specified `options` for headers and data format. It then waits for the response, parses it as JSON, and returns the parsed JSON data. This code is commonly used to fetch data from a server or API, process it, and work with it in a JavaScript application.
}



const getTodo = async (id) => {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
        let r = await response.json()
        return r
}


// 1. `getTodo` Function:
//    - This code defines an asynchronous arrow function called `getTodo`. The function takes one argument, `id`, which is presumably an identifier for a specific resource.

// ```javascript
//         let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
// ```

// 2. `fetch` Function:
//    - The `fetch` function is used to make an HTTP request to a URL, which in this case is `'https://jsonplaceholder.typicode.com/posts/'` followed by the `id` variable. This means it's making a GET request to a specific URL, which may include the `id` as a parameter to retrieve a specific resource.

// 3. `await` Keyword:
//    - The `await` keyword is used to pause the execution of the code until the HTTP request is completed. It's typically used within an `async` function.

// 4. `let response = await fetch(...)`:
//    - This line sends an HTTP GET request to the specified URL, waits for the response, and stores the response in the `response` variable.

// ```javascript
//         let r = await response.json();
// ```

// 5. Parsing the JSON Response:
//    - After receiving the response, this line asynchronously reads the response body as JSON. This assumes that the server is expected to respond with JSON data. The parsed JSON data is stored in the variable `r`.

// ```javascript
//         return r;
// ```

// 6. Returning the Result:
//    - The parsed JSON data (`r`) is returned from the `async` function as the result of the function. When you call this function with an `id`, it will make an HTTP request to the specified URL, retrieve the JSON data, and return it.

// In summary, this code defines an asynchronous function, `getTodo`, that fetches a specific resource (a "todo" item, in this case) from the URL `'https://jsonplaceholder.typicode.com/posts/'` by appending the `id` to the URL. It waits for the response, parses it as JSON, and returns the parsed JSON data. This function is used to fetch and retrieve specific resources from a server or API based on the provided `id`.



const mainFunc = async () => {
        let todo = {
                title: 'Harry2',
                body: 'bhai2',
                userId: 1100,
        }
        let todor = await createTodo(todo)
        console.log(todor)
        console.log(await getTodo(101))
}

mainFunc()





// 1. `mainFunc` Function:
//    - This code defines an asynchronous arrow function called `mainFunc`. This function does not take any arguments. It is the main function where you'll execute various tasks.

// ```javascript
//         let todo = {
//                 title: 'Harry2',
//                 body: 'bhai2',
//                 userId: 1100,
//         }
// ```

// 2. Creating a `todo` Object:
//    - This section of the code defines an object called `todo`. It contains properties such as `title`, `body`, and `userId` with specific values. This object represents a task or a "todo" item.

// ```javascript
//         let todor = await createTodo(todo);
// ```

// 3. Calling `createTodo` Function:
//    - This line calls an asynchronous function called `createTodo` and passes the `todo` object as an argument. It awaits the result of this function, which suggests that `createTodo` returns a value or a promise that needs to be resolved.

// ```javascript
//         console.log(todor);
// ```

// 4. Logging `todor`:
//    - The code logs the value of `todor` to the console. This is the result returned by the `createTodo` function, and it represents the response or data created on the server.

// ```javascript
//         console.log(await getTodo(101));
// ```

// 5. Fetching a Specific `todo`:
//    - This line fetches a specific "todo" item with an `id` of 101 by calling the `getTodo` function and awaiting the result. It then logs the result to the console.

// ```javascript
// mainFunc();
// ```

// 6. Invoking `mainFunc`:
//    - Finally, the `mainFunc` function is invoked, which triggers the entire sequence of actions described above.

// In summary, this code defines a main function (`mainFunc`) that does the following:
// 1. Creates a `todo` object.
// 2. Calls the `createTodo` function to create a "todo" item on the server and logs the result.
// 3. Calls the `getTodo` function to fetch a specific "todo" item (with an `id` of 101) from the server and logs the result.

// This code demonstrates the typical flow of a client-side application that interacts with a backend API to create and retrieve data (in this case, "todo" items).