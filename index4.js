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