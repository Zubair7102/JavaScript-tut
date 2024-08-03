let first = document.getElementById("first");
// here we are using first because it is the first element in the body tag
let a = first.getAttribute("class")
// above line of code will give the value of class 
// console.log(a)
// console.log(first.hasAttribute("class"))
// console.log(first.hasAttribute("style"))
// first.setAttribute("hidden", "true")
// first.setAttribute("class", "true sachin")
// first.removeAttribute("class")
// console.log(first.attributes)
console.log(first.dataset)
// the above line of code will give us the the custom attributes 
console.log(first.dataset.game)
console.log(first.dataset.player)