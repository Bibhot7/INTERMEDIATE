const today = new Date();

// Print the current time
console.log('Current time is ' + today.toLocaleTimeString());

// Print the number of hours that have passed so far today
console.log(today.getHours() + ' hours have passed so far today');

// a) Print the total number of minutes that have passed so far today
const minutesPassed = today.getHours() * 60 + today.getMinutes();
console.log(minutesPassed + ' minutes have passed so far today');

// b) Print the total number of seconds that have passed so far today
const secondsPassed = minutesPassed * 60 + today.getSeconds();
console.log(secondsPassed + ' seconds have passed so far today');

// c) Calculate and print your age
const birthDate = new Date('YYYY-MM-DD'); // Replace with your birthdate
const ageInMilliseconds = today - birthDate;
const ageInSeconds = ageInMilliseconds / 1000;
const ageInYears = Math.floor(ageInSeconds / (60 * 60 * 24 * 365.25));
const ageInMonths = Math.floor((ageInSeconds % (60 * 60 * 24 * 365.25)) / (60 * 60 * 24 * 30.44));
const ageInDays = Math.floor((ageInSeconds % (60 * 60 * 24 * 365.25)) % (60 * 60 * 24 * 30.44));
console.log(`I am ${ageInYears} years, ${ageInMonths} months and ${ageInDays} days old`);

// d) Write a function daysInBetween
function daysInBetween(date1, date2) {
  const timeDifference = Math.abs(date2 - date1);
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  return daysDifference;
}

const date1 = new Date('2023-01-01');
const date2 = new Date('2023-08-19');
console.log(daysInBetween(date1, date2));





