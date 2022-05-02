// Ch9 - Sum object values

// Write a function that takes an object (a) as argument
// Return the sum of all object values
function myFunction(a) {
  let answer = 0
  for (i=0;i<Object.values(a).length;i++) {
    answer +=Object.values(a)[i]
  }
  return answer;
}
 
/* Test Cases              
myFunction({a:1,b:2,c:3}) Expected 6
myFunction({j:9,i:2,x:3,z:4}) Expected 18
myFunction({w:15,x:22,y:13}) Expected 50
*/
console.log(myFunction({a:1,b:2,c:3}));
console.log(myFunction({j:9,i:2,x:3,z:4}));
console.log(myFunction({w:15,x:22,y:13}));