//javascript intermediate---------------------------------------------------------------------------------------------------------------------------------//
//QUESTION NUMBER 1----------------------------------------------------------------------------------------------------------------------------//

function capitalizeFirstLetterOfWords(inputString) {
  return inputString.replace(/\b\w/g, char => char.toUpperCase());
}

// Example usage 
let myString = "los angeles";
let capitalizedString = capitalizeFirstLetterOfWords(myString);
console.log(capitalizedString);

//QUESTION NUMBER 2---------------------------------------------------------------------------------------------------------------------------------------//
// Using a regular if-else statement question 2
function truncate(str, max) {
  if (str.length > max) {
    return str.slice(0, max) + "...";
  } else {
    return str;
  }
}

// Using a conditional (ternary) operator
function truncateWithConditional(str, max) {
  return str.length > max ? str.slice(0, max) + "..." : str;
}

// Example usage
let longText = "This is a long piece of text that needs to be truncated.";
let maxLength = 20;

let truncatedText = truncate(longText, maxLength);
console.log(truncatedText);

let truncatedTextWithConditional = truncateWithConditional(longText, maxLength);
console.log(truncatedTextWithConditional);

//QUESTION NUMBER 3--------------------------------------------------------------------------------------------------------------------------------------------------//
const animals = ['Tiger', 'Giraffe'];

// a) Add 2 new values to the end
animals.push('Elephant', 'Lion');
console.log("After adding to the end:", animals);

// b) Add 2 new values to the beginning
animals.unshift('Monkey', 'Zebra');
console.log("After adding to the beginning:", animals);

// c) Sort the values alphabetically
animals.sort();
console.log("After sorting:", animals);

// d) Write a function replaceMiddleAnimal(newValue)
function replaceMiddleAnimal(newValue) {
  const middleIndex = Math.floor(animals.length / 2);
  animals[middleIndex] = newValue;
}
replaceMiddleAnimal('Kangaroo');
console.log("After replacing middle animal:", animals);

// e) Write a function findMatchingAnimals(beginsWith)
function findMatchingAnimals(beginsWith) {
  const matchingAnimals = animals.filter(animal =>
    animal.toLowerCase().startsWith(beginsWith.toLowerCase())
  );
  return matchingAnimals;
}

const matchingAnimalsResult = findMatchingAnimals('t');
console.log("Matching animals:", matchingAnimalsResult);


//QUESTIO NUMBER 4----------------------------------------------------------------------------------------------------------------------------------------------------------------//
// Original camelCase function
function camelCase(cssProp) {
  return cssProp.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
}

// Variant using a standard for loop
function camelCaseWithForLoop(cssProp) {
  let result = '';
  const words = cssProp.split('-');
  for (let i = 0; i < words.length; i++) {
    if (i === 0) {
      result += words[i];
    } else {
      result += words[i][0].toUpperCase() + words[i].slice(1);
    }
  }
  return result;
}

// Variant using a for...of loop
function camelCaseWithForOfLoop(cssProp) {
  let result = '';
  const words = cssProp.split('-');
  for (const [index, word] of words.entries()) {
    if (index === 0) {
      result += word;
    } else {
      result += word[0].toUpperCase() + word.slice(1);
    }
  }
  return result;
}

// Variant without the conditional operator
function camelCaseWithoutConditional(cssProp) {
  return cssProp.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

// Test
const cssProperty = 'margin-left';

console.log(camelCase(cssProperty));
console.log(camelCaseWithForLoop(cssProperty));
console.log(camelCaseWithForOfLoop(cssProperty));
console.log(camelCaseWithoutConditional(cssProperty));

//QUESTION NUMBER 5----------------------------------------------------------------------------------------------------------------------------------------------------------------------//
function currencyAddition(float1, float2) {
  return parseFloat((float1 + float2).toFixed(2));

}//a) The issue with the code that uses toFixed is that it converts
// the numbers to strings with a fixed number of decimal places. When you 
//concatenate these strings, JavaScript treats them as strings and performs string concatenation
//instead of numerical addition. This is why you're getting unexpected results

// Test
console.log(0.3 === currencyAddition(0.1, 0.2)); // true
function currencyOperation(float1, float2, operation) {
  switch (operation) {
    case '+':
      return parseFloat((float1 + float2).toFixed(2));
    case '-':
      return parseFloat((float1 - float2).toFixed(2));
    case '*':
      return parseFloat((float1 * float2).toFixed(2));
    case '/':
      return parseFloat((float1 / float2).toFixed(2));
    default:
      return NaN; // Invalid operation
  }
}

// Test
console.log(currencyOperation(0.1, 0.2, '+')); // 0.3
console.log(currencyOperation(0.3, 0.1, '-')); // 0.2
console.log(currencyOperation(0.1, 0.2, '*')); // 0.02
console.log(currencyOperation(0.3, 0.1, '/')); // 3.00
console.log(currencyOperation(0.1, 0.2, '$')); // NaN (invalid operation)
function currencyOperation(float1, float2, operation, numDecimals) {
  const multiplier = Math.pow(10, numDecimals);
  
  switch (operation) {
    case '+':
      return parseFloat(((float1 + float2) * multiplier).toFixed(0)) / multiplier;
    case '-':
      return parseFloat(((float1 - float2) * multiplier).toFixed(0)) / multiplier;
    case '*':
      return parseFloat((float1 * float2).toFixed(numDecimals));
    case '/':
      return parseFloat((float1 / float2).toFixed(numDecimals));
    default:
      return NaN; // Invalid operation
  }
}

// Test with different decimal places
console.log(currencyOperation(0.1, 0.2, '+', 2)); // 0.3
console.log(currencyOperation(0.1, 0.2, '+', 3)); // 0.3
console.log(currencyOperation(0.1, 0.2, '*', 3)); // 0.020
console.log(currencyOperation(0.3, 0.1, '/', 1)); // 3.0
//make it into one.
console.log(0.3 == currencyAddition(0.1, 0.2)) // true
console.log(0.3 == currencyOperation(0.1, 0.2, '+')) // true

//QUESTION NUMBER 6----------------------------------------------------------------------------------------------------------------------------------------------------------//
function color(duplicatesArray) {
  return [...new Set(duplicatesArray)];
}

// Test
const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow'];
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];

console.log(color(colours)); // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(color(testScores)); // [ 55, 84, 97, 63, 32, 91, 43 ]

//QUESTION NUMBER 7-------------------------------------------------------------------------------------------------------------------------------------------------//
const books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
  { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
  { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
  { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];

// a) getBookTitle
function getBookTitle(bookId) {
  const book = books.find(book => book.id === bookId);
  return book ? book.title : 'Book not found';
}

console.log(getBookTitle(3)); // Output: '1984'

// b) getOldBooks
function getOldBooks() {
  const currentYear = new Date().getFullYear();
  return books.filter(book => book.year < 1950);
}

console.log(getOldBooks());

// c) addGenre
function addGenre() {
  return books.map(book => ({ ...book, genre: 'classic' }));
}

console.log(addGenre());
// d) getTitles
function getTitles(authorInitial) {
  return books
    .filter(book => book.author.startsWith(authorInitial))
    .map(book => book.title);
}

console.log(getTitles('F')); // Output: [ 'The Great Gatsby' ]

// e) latestBook
function latestBook() {
  let latest = books[0];
  books.forEach(book => {
    if (book.year > latest.year) {
      latest = book;
    }
  });
  return latest;
}

console.log(latestBook());


//QUESTION NUMBER 8--------------------------------------------------------------------------------------------------------------------------------------------//
const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')
// Part a
const phoneBookDEF = new Map();

// Part b
const keysValuesDEF = [
  ['David', '0466778899'],
  ['Ella', '0488990011'],
  ['Frank', '0400112233']
];
phoneBookDEF.set('David', '0466778899');
phoneBookDEF.set('Ella', '0488990011');
phoneBookDEF.set('Frank', '0400112233');

// Part c
phoneBookABC.set('Caroline', '0499887766');

// Part d
function printPhoneBook(contacts) {
  contacts.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });
}

// Part e
const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);

// Part f
console.log("Full list of names in the combined phone book:");
printPhoneBook(phoneBook);

//QUESTION NUMBER 9------------------------------------------------------------------------------------------------------------------------------------------------------------------//
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


//QUESTION NUMBER 10-------------------------------------------------------------------------------------------------------------------------------------------------//
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


//JAVASCRIPT INTERMEDIATE COMPLETE---------------------------------------------------------------------------------------------------------------.//





