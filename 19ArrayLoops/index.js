let num = [3, 5, 1, 2, 4]

// for(let i=0; i<num.length;i++){
//   console.log(num[i])
// }

// ForEach Loop
num.forEach((element) => {
  console.log(element * element)
})

// Array.from 
// array.from converts any strting or object into an array like here harry was a string but later it was converted to array
let name = "Harry"
let arr = Array.from(name)
console.log(arr)

// for...of 
for (let item of num){
  console.log(item)
}

// for...in
for (let i in num){
  console.log(num[i])
}