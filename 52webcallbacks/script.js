// Callbacks
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", goodmorning );

function loadScript(src, callback) {
  var script = document.createElement("script");
  script.src = src;
  //   In this JavaScript code snippet, you're creating a new <script> element and setting its src attribute. Here's an explanation of each part:

  // var script = document.createElement("script");: This line creates a new variable named "script" and assigns it a newly created HTML <script> element. This element represents a JavaScript script that can be added to a web page.

  // script.src = src;: This line sets the src attribute of the <script> element. The src attribute specifies the source (i.e., the URL) of the external JavaScript file you want to load and execute.

  // The src variable, should be a string containing the URL of the JavaScript file you want to load.

   
  script.onerror = function () {
    // What does Onerror do in JavaScript
    // The onerror event is triggered if an error occurs while loading an external file

    console.log("Error loading script with SRC: " + src);
    callback(new Error("Src got some error"));
    //     This line calls a function named callback and passes it an Error object as an argument.
    // The Error object is typically used to represent and throw exceptions in JavaScript. In this case, it's being created with the message "Src got some error."
    // By passing this Error object to the callback function, the code signals that an error has occurred while trying to load the resource specified by the src. The callback function can then handle or report this error as needed.
  };
  document.body.appendChild(script);
}

function hello(error, src) {
  if (error) {
    console.log(error);
    return;
  }
  alert("Hello World!" + src);
}

function goodmorning(error, src) {
  if (error) {
    console.log(error);
    sendEmergencyMessageToCeo();
    // Calls a function named sendEmergencyMessageToCeo(). This function is presumably responsible for sending an emergency message to the CEO of the organization or some other appropriate action to handle critical errors.
    return;
  }
  alert("Good morning" + src);
}


