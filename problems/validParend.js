/* eslint-disable no-console */
// console.log("Evens");
// console.log(evens);

// Given a string containing just the characters
// '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// Same pairs close, empty sting also valid

// I: string of parentheses to validate
// O: Boolean if valid or empty
// C: O(n)
// E: -

// Example '[{cat}]'
// Example '[]'
//         ^

// set up our function and take in the string to validate
const isValid = function (string) {
  // validParens as object '(', ')', '{', '}', '[', ']'
  const validParens = {
    '{': '}',
    '(': ')',
    '[': ']',
  };
  const stack = [];

  // loop over the string by index
  for (let i = 0; i < string.length; i += 1) {
    const test = string[i];
    // if i matches a closing paren in the validParen obj
    if (Object.values(validParens).indexOf(test) > -1) {
      // if it match the last item in the stack
      if (test === stack[stack.length - 1]) {
        stack.pop();
      } else {
        return false;
      }
    }
    // if i matches a opening paren in the validParen obj
    if (validParens[test]) {
      // store closing in the stack
      stack.push(validParens[test]);
    }
  }

  if (stack.length) return false;

  return true;
};

console.log(isValid('{{{}}}')); // true
console.log(isValid('')); // true
console.log(isValid('()[]{}')); // true
console.log(isValid('[()')); // false
console.log(isValid('([)]')); // false
