/* ------- Array destructuring */

const alphabet = ['a', 'b', 'c', 'd', 'e'];
const numbers = ['1', '2', '3', '4', '5'];

const [a, ...rest] = alphabet;
//if we put ','(or more) after 'a,' that comma will be like 'b' ; rest = ['c','d','e']
console.log(rest);
// a = 'a' ; rest = ['b','c','d','e']

const newArray = [...alphabet, ...numbers]
console.log(newArray);


/* -------- Object destructuring       */


