// Ch6 - Swap object keys and values

// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object
function myFunction(obj) {
  return Object.fromEntries(Object.entries(obj).map((el) => el.reverse()));
}

/* Test Case     
myFunction({z:'a',y:'b',x:'c',w:'d'}) Expected {a:'z',b:'y',c:'x',d:'w'}
myFunction({2:'a',4:'b',6:'c',8:'d'}) Expected {a:'2',b:'4',c:'6',d:'8'}
myFunction({a:1,z:24}) Expected {1:'a',24:'z'}
*/
console.log(myFunction({z:'a',y:'b',x:'c',w:'d'}));
console.log(myFunction({2:'a',4:'b',6:'c',8:'d'}));
console.log(myFunction({a:1,z:24}));