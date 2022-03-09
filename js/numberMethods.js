// toString, parseInt, parseFloat, toFixed,

var num = 100000;

num.toString();

console.log(typeof num); // number

var num = +"10.1234"; // string;
console.log(typeof num); // string

// parseInt, parseFloat

console.log(num);

// console.log(typeof parseInt(num));
// console.log(parseInt(num));

console.log(typeof parseFloat(num));
console.log(parseFloat(num).toFixed(1));
// ----------------------------------------------

// Math.round, Math.ceil, Math.random

// 10.4 ---- > 10
// 10.9 ---- > 11
// 10.1 --- > 10 | 11

console.log(Math.round(parseInt("10.4")));
console.log(Math.round(10.3));
console.log(Math.round(10.9));

console.log(Math.floor(10.99999999999)); // 0.999 - 0 | 9.9999 - 9
console.log(Math.ceil(10.0001)); // 0.123 - 1

var round = Math.ceil(Math.random() * 6);

console.log(round);

var expectdValue = prompt("Guess a number b/w 1-6");
console.log(expectdValue);

//
