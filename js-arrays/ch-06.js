// Ch6 - Remove a specific array element

// Write a function that takes an array (a) and a value (b) as argument
// The function should clean a from all occurrences of b
// Return the filtered array
function myFunction(a, b) {
  return a.filter((el) => el !==b);

  // let answer = []
  // for (i=0;i<a.length;i++) {
  //   if (a[i] !== b) {
  //     answer.push(a[i]);
  //   }
  //}
  //return answer;
}

/* Test Cases
myFunction([1,2,3], 2) Expected [1, 3]
myFunction([1,2,'2'], '2') Expected [1, 2]
myFunction([false,'2',1], false) Expected ['2', 1]
myFunction([1,2,'2',1], 1) Expected [2, '2']
*/
console.log(myFunction([1,2,3], 2));
console.log(myFunction([1,2,'2'], '2'));
console.log(myFunction([false,'2',1], false));
console.log(myFunction([1,2,'2',1], 1));