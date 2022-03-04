// Conditions - true/false
console.log(users);

// if ("10" === 10) {
//   // true code
//   alert(true);
// } else {
//   // false code
//   alert(false);
// }

var num = 5;

if (num == 5) {
  console.log(num + " is 5");
} else if (num == 10) {
  console.log(num + " is 10");
} else if (num == 0) {
  console.log(num + " is 0");
} else {
  console.log("got unknown number :" + num);
}

// Switch:
switch (num) {
  case 10:
    console.log(num);
    break;
  case 5:
    console.log(num);
    break;
  case 15:
    console.log(num);
    break;
  default:
    console.log("another number...");
}

// Ternary Operator
var result =
  num === 10 ? (a = true ? true : false) : console.log("num is not 10");
