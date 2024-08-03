let user = prompt("Enter S, W or G")
let cpuI = Math.floor(Math.random() * 3);
// The Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number.  38.8: Returns 38 ,,,  -4.2: Returns -5
// Math.random generates a random number between 0 and 1 which can also include decimal numbers so to avoid those points and decimal numbers we add Math.floor function to get a whole number 
// Math.floor(Math.random() * 3); we multiplied it by 3 because we want output in 0 1 and 2 (0 is snake , 1 is water, 2 is gun)
let cpu = ["S", "W", "G"][cpuI]
// here we are assigning 0,1,2 to S,W,G  

const match = (cpu, user)=>{
  if(cpu === user){
    return "Nobody"
  }
  else if(cpu === "S" && user==="W"){
    return "cpu"
  }
  else if(cpu === "S" && user==="G"){
    return "user"
  }
  else if(cpu === "G" && user==="W"){
    return "user"
  }
  else if(cpu === "G" && user==="S"){
    return "cpu"
  }
  else if(cpu === "W" && user==="S"){
    return "user"
  }
  else if(cpu === "W" && user==="G"){
    return "cpu"
  }
}
let result = match(cpu, user)
document.write(`CPU:${cpu} <br> User:${user} <br>The winner is: ${result.toUpperCase()}` )
// document.write is method to push html content into the page using javascript
// https://www.amazon.in/g/9P82UKN45LPQ6N6V - Rs 500 gift voucher