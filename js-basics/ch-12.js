// Check if a number is even

// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false

function myFunction(a) {
  return a % 2 === 0;
  // if (a%2===0) {
  //   return true;
  // } else {
  //   return false;
  // }
}

/*
myFunction(10) Expected true
myFunction(-4) Expected true
myFunction(5) Expected false
myFunction(-111) Expected false
*/
console.log(myFunction(10));
console.log(myFunction(-4));
console.log(myFunction(5));
console.log(myFunction(-111) );