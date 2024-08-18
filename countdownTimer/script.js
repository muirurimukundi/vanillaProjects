const newYears = "1st Jan 2025";

function countDown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const seconds = new Date(newYearsDate - currentDate) / 1000;

  const days = Math.floor(seconds / 3600 / 24); 
  

}

//  initial call 
setInterval(countDown, 1000);
