// indexOf, lastIndexOf, search,
// slice, substring,
// split, trim

var str = "demo@gmail.com";
console.log(str.indexOf("demo")); // -1

var str1 = "gail@gmail.com";
console.log(str1.indexOf("gmail", 1)); // 0
console.log(str1.lastIndexOf("gmail", 5)); // 6

var regExVal = /gmail/g;
var demo = str1.search(regExVal);
console.log(demo); // 0

// Slice, subString.                    5, 10

// ksajhdajksdas WordPress asshdkjasdhkas
// slice(start, end)
console.log(
  str1.substring(str1.indexOf("gmail"), str1.indexOf("gmail") + "gmail".length)
);

console.log(str1.slice(-9, -4));

// record1 / record2

var _splitValue = "     record1 / record2              ";

console.log(_splitValue);
console.log(_splitValue.trim());

console.log(_splitValue.trim().split("/"));
