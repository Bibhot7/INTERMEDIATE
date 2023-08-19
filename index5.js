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