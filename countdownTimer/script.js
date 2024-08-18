const newYears = "1 Jan 2025";

function countDown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = new Date(newYearsDate - currentDate) / 1000;

  const days = Math.floor( totalSeconds / 3600 / 24); 
  const hours = Math.floor( totalSeconds / 3600 ) % 24;
  const minutes = Math.floor( totalSeconds / 60 )  % 60;
  const seconds = Math.floor( totalSeconds )  % 60
  
  console.log(days, hours, minutes, seconds); 

}

//  initial call 
countDown();
setInterval( countDown, 1000 )
