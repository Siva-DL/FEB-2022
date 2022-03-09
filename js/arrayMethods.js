var arr = [];
console.log(arr);
arr[0] = 1;
arr[2] = 1;

console.log(arr);

// push, pop, shift, unshift,
// splice, slice, join, concat

arr.push("newValue");
arr.push("newValue1");
arr.push("newValue2");

arr.unshift("firstString");
arr.unshift("firstString1");

// arr.pop();
// arr.pop();

// arr.shift();
// arr.shift();
// arr.shift();

console.log(arr.slice(0, 1));

arr.splice(5, 5);

console.log(arr);

arr1 = [1, 2, 4];

console.log(arr1.join("*"));

console.log(arr1.concat(arr));
