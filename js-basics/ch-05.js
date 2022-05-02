// Ch-5 - Remove first n characters of string

// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result
function myFunction(a) {
  return a.slice(3);
}

/*
myFunction('abcdefg') Expected 'defg'
myFunction('1234') Expected '4'
myFunction('fgedcba') Expected 'dcba'
*/
console.log(myFunction('abcdefg'));
console.log(myFunction('1234'));
console.log(myFunction('fgedcba'));