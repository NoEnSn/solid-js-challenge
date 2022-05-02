// Ch-7 - Get first n characters of string

// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result

function myFunction(a) {
  return a.slice(0,3);
  
  // return a.substr(0,3);
  
  // let b=[];
  // for (i=0;i<3;i++) {
  //   b.push(a[i]);
  // }
  // return b.join("");
}
/*
myFunction('abcdefg') Expected 'abc'
myFunction('1234') Expected '123'
myFunction('fgedcba') Expected 'fge'
*/
console.log(myFunction('abcdefg'));
console.log(myFunction('1234'));
console.log(myFunction('fgedcba'));