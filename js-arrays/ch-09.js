// Ch9 - Sort an array of numbers in descending order

// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order
function myFunction(arr) {
  const compareDesc = (a, b) => {
    if (a > b) {
      return -1;
    } else if (a < b) {
      return 1;
    } else {
      return 0;
    }
  };
  return arr.sort(compareDesc);
}

/* Test Cases     
myFunction([1,3,2]) Expected [3,2,1]
myFunction([4,2,3,1]) Expected [4,3,2,1]
*/
console.log(myFunction([1,3,2]));
console.log(myFunction([4,2,3,1]));