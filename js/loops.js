// for, for in , for of, while, forEach, ,  | Es6: map, filter, reduce
console.log(users);

// increament =  ++
// decrement = --

// for Loop
var userRecords = "";
for (var i = 0; i < users.length; i++) {
  console.log(users[i].name, users[i].id);
  userRecords += "<li>" + users[i].name;
  userRecords += "<p>" + users[i].name + "</p></li>";
}
console.log(userRecords); //

// for In

for (var i in users) {
  console.log(users[i]);
  userRecords += "<li>" + users[i].name + "</li>";
}

//For Of
for (var i of users) {
  console.log(i.name);
}

// while

var i = 0;
while (i < users.length) {
  console.log(users[i].id);
  i++;
}
