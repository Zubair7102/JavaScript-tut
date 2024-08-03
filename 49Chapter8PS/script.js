// document.getElementById("google").addEventListener("click", function() { 
//   window.location = "https://www.google.com";
// The window.location object can be used to get the current page address (URL) and to redirect the browser to a new page.
// win.focus();

// })


// const fetchContent = async (url) => {
//   con = await fetch(url);
//   let a = await con.json()
//   return a;
// }


// The setInterval() method calls a function at specified intervals (in milliseconds).
// The setInterval() method continues calling the function until clearInterval() is called, or the window is closed.
// 1 second = 1000 milliseconds.

// setInterval(async function() {
//   let url = "https://jsonplaceholder.typicode.com/todos/1"
//   console.log(await fetchContent(url))
// }, 3000)



setInterval(async function() {
  document.querySelector("#bulb").classList.toggle("bulb")
}, 300)