function color(duplicatesArray) {
  return [...new Set(duplicatesArray)];
}

// Test
const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow'];
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];

console.log(color(colours)); // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(color(testScores)); // [ 55, 84, 97, 63, 32, 91, 43 ]