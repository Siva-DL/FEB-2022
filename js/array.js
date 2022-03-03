var _name, contact, email;

_name = "somex";
contact = "12312";
email = "asda@asddas.com";

console.log(_name); // somex
// 0           1          2
var person1 = [12312312, "Somex", "ewer@as.com"];
var person2 = [
  12312312,
  "Somex",
  "ewer@as.com",
  null,
  undefined,
  true,
  ["red", "green", [1, 2, 3]],
];

// var color =

// person2[6][0];

console.log(person2[6][2][2]);

person2[6] == undefined; // false;

person2[7] == undefined; // true
person2[7] = "newValue";

var fruits = [];

fruits[0] = "Mango";
fruits[1] = "apple";
fruits[2] = "banana";
fruits[4] = "grapes";

console.log(fruits);
