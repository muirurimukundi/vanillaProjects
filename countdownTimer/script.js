daysElement = document.getElementById("days");
hoursElement = document.getElementById("hours"); 
minutesElement = document.getElementById("minutes");
secondsElement = document.getElementById("seconds");


const newYears = "1 Jan 2025";

function countDown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = new Date(newYearsDate - currentDate) / 1000;

  const days = Math.floor( totalSeconds / 3600 / 24); 
  const hours = Math.floor( totalSeconds / 3600 ) % 24;
  const minutes = Math.floor( totalSeconds / 60 )  % 60;
  const seconds = Math.floor( totalSeconds )  % 60
  
  daysElement.innerHTML = days;
  hoursElement.innerHTML = hours;
  minutesElement.innerHTML = minutes;
  secondsElement.innerHTML = seconds;

}


// if the time is single digit, append a zero to format it
function formatTime ( time ){
  return time < 10 ? (`0${time}`) : time )
}
//  initial call 
countDown();
setInterval( countDown, 1000 )
 