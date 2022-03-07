// "use strict";
// console.log(abc);
abc = 10;

var abc;
// console.log(abc);

// demo();
// demo();
// demo();
// demo();
function demo() {
  console.log("demo...!");
}

// function functionName(){
// code here
// }

// Invoking / Calling
// demo();

//
// demo1();
var demo1 = function () {
  // code Here
  console.log("Demo1 function...!");
};

// demo1();
// demo1();
// demo1();

var demo2 = () => {
  // code Here
  console.log("Demo1 function...!");
};

// IIFE

var result = (function () {
  var obj = {};
  console.log("IIFE");

  return obj;
})();

// Scope; local and Global

var _global = "GLoabl 10";

function testFn() {
  var _local = "Local Scope 10";
  console.log(_local);
  console.log(_global);
}

testFn();

// console.log(_local);

// Arguments:

function add(a = 50, b = 50) {
  console.log(a + b);
}

add();
add(10, 10);
add(20, 10);
add(1, 1);
add(2, 2);
add(3, 10);

// Return

function _returnVal(a, b) {
  if (a * b == 45) {
    return { result: a * b };
  } else {
    return { result: "not Matched" };
  }
}

add(_returnVal(5, 5), 20);
alert(123123);

console.log(_returnVal(5, 9));
