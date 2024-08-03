function getDateTime() {
        var now = new Date();
        var year = now.getFullYear();
        var month = now.getMonth() + 1;
        var day = now.getDate();
        var hour = now.getHours();
        var minute = now.getMinutes();
        var second = now.getSeconds();
        if (month.toString().length == 1) {
                month = '0' + month;
        }
        if (day.toString().length == 1) {
                day = '0' + day;
        }
        if (hour.toString().length == 1) {
                hour = '0' + hour;
        }
        if (minute.toString().length == 1) {
                minute = '0' + minute;
        }
        if (second.toString().length == 1) {
                second = '0' + second;
        }
        var dateTime = year + '/' + month + '/' + day + ' ' + hour + ':' + minute + ':' + second;
        return dateTime;
}

// example usage: realtime clock
setInterval(function() {
        currentTime = getDateTime();
        document.getElementById("time").innerHTML = currentTime;
}, 1000);



// This JavaScript code defines a function called `getDateTime` and demonstrates how to use it to create a real-time clock that updates the displayed time every second. Here's a step-by-step explanation:

// 1. `getDateTime` Function:
//    - The `getDateTime` function is defined to retrieve the current date and time and format it as a string.
//    - It starts by creating a `Date` object, `now`, which represents the current date and time.

// 2. Extracting Date and Time Components:
//    - The function extracts various components of the date and time, such as year, month, day, hour, minute, and second, from the `now` object. These components are stored in separate variables.

// 3. Formatting Date and Time:
//    - The code ensures that each component has at least two digits by adding a leading '0' if needed. This is done to format the date and time as a user-friendly string.
//    - For example, if the month is single-digit (e.g., 4), it is converted to a string with two digits (e.g., '04').

// 4. Constructing `dateTime` String:
//    - The `dateTime` string is constructed by concatenating the formatted components with the appropriate delimiters, resulting in a string in the format "YYYY/MM/DD HH:MM:SS."

// 5. Returning `dateTime`:
//    - The formatted `dateTime` string is returned as the result of the function.

// 6. Real-Time Clock Implementation:
//    - The code uses the `setInterval` function to repeatedly update the displayed time on the webpage.
//    - Inside the `setInterval` function, the `currentTime` variable is updated with the result of the `getDateTime` function, which retrieves the current date and time as a string.
//    - The `document.getElementById("time").innerHTML` line updates the content of an HTML element with the ID "time" to display the `currentTime` string.
