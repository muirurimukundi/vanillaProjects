const newYears = "1st Jan 2024";

function countDown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  console.log(newYearsDate - currentDate);
}

//  initial call 
setInterval(countdown, 1000);
