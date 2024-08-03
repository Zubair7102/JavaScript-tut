function play() {
  var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
  audio.play();
}

setInterval(() => {
  let d = new Date()
  time.innerHTML = d.toDateString() + " " + d.toTimeString()
  // The d.toDateString() method is a built-in JavaScript function that is used to convert a Date object into a human-readable string representation of the date, excluding the time. It returns a string containing the date portion of the Date object.

  // The toTimeString() method provides the time information, including the hours, minutes, seconds, and milliseconds. The format of the time string usually looks like "HH:MM:SS 

}, 1000)




// The provided JavaScript code defines a function called setAlarm using an arrow function. This function sets a timer to trigger another function (play()) after a specified number of seconds.
const setAlarm = (seconds) => {
  let d = new Date().getTime()
  setTimeout(() => {
    play()
  }, seconds * 1000)

  setInterval(() => {
    secondsLeft = - (new Date().getTime() - (d + seconds * 1000))
    // This line calculates the difference between the current time (retrieved using new Date().getTime()) and the time when the alarm (d) should go off. The seconds variable represents the number of seconds until the alarm, and it's multiplied by 1000 to convert it to milliseconds.
// The negative sign at the beginning indicates how many milliseconds have passed since the alarm time.
    if (secondsLeft > 0) {

      //     This if statement checks if secondsLeft is greater than 0. If it is, it means that the alarm time has not been reached yet, so it updates the content of the HTML element with the id alarm.
      alarm.innerHTML = "Alarm ringing in " + Math.floor(secondsLeft / 1000) + " seconds"
      // The alarm.innerHTML property is set to display a message that indicates how many seconds are left until the alarm rings. The Math.floor(secondsLeft / 1000) part calculates the number of seconds by dividing secondsLeft by 1000 (to convert milliseconds to seconds) and rounding down to the nearest whole number.
    }

  })
}


let s = prompt("After how many seconds do you want an alarm?")
setAlarm(parseInt(s))

// parseInt is a built-in JavaScript function used for parsing a string and converting it into an integer (a whole number). 

