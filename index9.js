let salaries = {
  "Timothy": 35000,
  "David": 25000,
  "Mary": 55000,
  "Christina": 75000,
  "James": 43000
};

// a) Write a function sumSalaries
function sumSalaries(salaries) {
  let total = 0;
  for (const salary of Object.values(salaries)) {
    total += salary;
  }
  return total;
}

console.log("Total salaries:", sumSalaries(salaries));

// b) Write a function topEarner
function topEarner(salaries) {
  let maxSalary = 0;
  let topEarnerName = '';

  for (const [name, salary] of Object.entries(salaries)) {
    if (salary > maxSalary) {
      maxSalary = salary;
      topEarnerName = name;
    }
  }
  return topEarnerName;
}

console.log("Top earner:", topEarner(salaries));