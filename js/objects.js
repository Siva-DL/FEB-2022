// Objects

var person = ["name", "contact", "email"];

var obj = {
  contact: 123123,
  email: "as@as.com",
  name: "somex",
  "first Name": "someY",
};

console.log(obj["contact"]);
console.log(obj.contact);

console.log(obj["first Name"]);

obj["color"] = "red";

console.log(obj);

var users = [{ name: "test1" }, { name: "test2" }];

console.log(users[0].name); // test1
console.log(users[1].name); // test2
