let runAgain = true;
// default value of confirm is true 

const canDrive = (age) => {
  return age >= 18 ? true : false
}

while (runAgain) {
  // this program will keep running untill confirmation is chosen false 
  
  let age = prompt("Enter your age")
  age = Number.parseInt(age)
  if (age < 0) {
    console.error("Please enter a valid age");
    break;
  }

  if (canDrive(age)) {
    alert("Yes you can drive")
  }
  else {
    alert("You cannot drive")
  }
  runAgain = confirm("Do you want to play again?")
  // confirm is pre defined function which gives you a confirmation pop up 
}