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