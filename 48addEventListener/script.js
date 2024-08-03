let x = function(event) {
  
  alert("Hello World1!")
}

let y = function(e) {
  // console.log(e)
  // e is not mandetory you can use it or leave it, e is event object  
  alert("Hello World2!")
}

btn.addEventListener('click', x)


btn.addEventListener('click', y)
  
let a = prompt("What is your favorite number?");


if (a == "2") {
  btn.removeEventListener('click', x)
}
