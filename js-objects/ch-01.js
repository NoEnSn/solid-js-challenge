// Ch1 - Accessing object properties one

// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country
function myFunction(obj) {
  return obj.country;
}

/* Test Cases
myFunction({  continent: 'Asia',  country: 'Japan'}) Expected 'Japan'
myFunction({  country: 'Sweden',  continent: 'Europe'}) Expected 'Sweden'
*/
console.log(myFunction({  continent: 'Asia',  country: 'Japan'}));
console.log(myFunction({  country: 'Sweden',  continent: 'Europe'}));