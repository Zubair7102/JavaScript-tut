async function harry() {
        let delhiWeather = new Promise((resolve, reject) => {
                setTimeout(() => {
                        resolve("27 Deg")
                }, 2000)
        })

        let bangaloreWeather = new Promise((resolve, reject) => {
                setTimeout(() => {
                        resolve("21 Deg")
                }, 5000)
        })

        // delhiWeather.then(alert)
        // bangaloreWeather.then(alert)
        console.log("Fetching Delhi Weather Please wait ...")
        let delhiW = await delhiWeather
        console.log("Fetched Delhi Weather: " + delhiW)
        console.log("Fetching Bangalore Weather Please wait ...")
        let bangaloreW = await bangaloreWeather
        console.log("Fetched Bangalore Weather: " + bangaloreW)
        return [delhiW, bangaloreW]
}

const cherry = async () => {
        console.log("Hey I am cherry and I am waiting ")
}

const main1 = async () => {
        console.log("Welcome to weather control room")
        let a = await harry()
        let b = await cherry()

}
main1()




// This code demonstrates the use of asynchronous functions, Promises, and the `await` keyword to fetch weather information for two cities, Delhi and Bangalore, sequentially. Here's a step-by-step explanation of how the code works:

// 1. `async function harry()`:
//    - The `harry` function is an asynchronous function that fetches weather information for Delhi and Bangalore.
//    - Two Promises, `delhiWeather` and `bangaloreWeather`, are created. These Promises simulate fetching weather information with different delays.

// 2. Commented `delhiWeather.then(alert)` and `bangaloreWeather.then(alert)`:
//    - These lines show how you could handle the resolved values of the Promises by displaying them in an alert dialog. However, they are currently commented out.

// 3. Logging Weather Fetch:
//    - `console.log("Fetching Delhi Weather Please wait ...")` and `console.log("Fetching Bangalore Weather Please wait ...")` are used to display messages indicating the weather fetch operation is in progress.

// 4. `await` Keyword:
//    - The `await` keyword is used to pause the execution of the function until the awaited Promise resolves. In this case, `await` is used with the `delhiWeather` and `bangaloreWeather` Promises.

// 5. Fetching and Logging Weather Data:
//    - After waiting for each weather Promise to resolve, the code logs the fetched weather information for Delhi and Bangalore.

// 6. `return [delhiW, bangaloreW]`:
//    - The `harry` function returns an array containing the fetched weather data for Delhi and Bangalore.

// 7. `const cherry = async () =>`:
//    - The `cherry` function is another asynchronous function that logs a message. It doesn't use the `await` keyword and is used as an example of an asynchronous function that doesn't involve Promises.

// 8. `const main1 = async () =>`:
//    - The `main1` function is another asynchronous function that serves as the entry point of the program.
//    - It logs a welcome message.
//    - It uses `await` to call the `harry` function to fetch weather data for Delhi and Bangalore.
//    - It also calls the `cherry` function, which logs a message.

// 9. `main1()`:
//    - Finally, `main1()` is called to start the program execution. It logs messages, fetches weather data, and logs the weather information sequentially.

// In summary, this code showcases the use of asynchronous JavaScript functions and the `await` keyword to manage asynchronous operations and handle them sequentially. It fetches weather information for two cities and demonstrates the order of execution in an asynchronous context.