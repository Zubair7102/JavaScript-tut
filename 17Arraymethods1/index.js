// Array Methods
let num = [1, 2, 3, 34, 4]
let b = num.toString() // b is now a string  .toString converts the array into a string
console.log(b, typeof b)
let c = num.join(" and ")
// 1 and 2 and 3 and 34 and 4 string is the output
console.log(c, typeof c)
// let r = num.pop() // pop returns the popped element
// console.log(num, r)
// let r = num.push(56) // push returns the new array length
// console.log(num, r)
// let r = num.shift()
// console.log(r, num) // Removes an element from the start of the array

let r = num.unshift(78)
console.log(r, num)
console.log(r)