// * Destructuring in JS is a way to writing a expression so we can get values from arrays/objects to a variable.

// ? So How Destructuring works?
// * Suppose you have a array/object and you can make a copy and make logic with spread operator. but if you want to access of a each element in array/object you can do that by the help of Destructuring.

// * methord 1: how to get element values in variables
// for example: you have a object.
let obj = {
 name: "Ayush",
 age: 21,
 location: "SomeWhere in India",
};

// make variables and assign it.
let objName = obj.name;
let objAge = obj.age;
let objLoc = obj.location;
console.log(objName, objAge, objLoc); // output: Ayush 21 SomeWhere in India

// To make this process easy! Destructuring helps
// ! methord 2
let { name, age, location } = obj;
console.log(name, age, location); // output: Ayush 21 SomeWhere in India

// very easy right?

// we can also use Destructuring with Arrays
let a, b;
[a, b] = [10, 20];
console.log(a, b); // 10 20

// * using with spread operator
let arr = [10, 20, 30, 40, 50];
let [x, y, ...rest] = arr;
console.log(x, y); // 10 20
console.log(rest); // [ 30, 40, 50 ]

// * using list
// access these values with destructuring
let nameList = ["Ayush", "Shashank", "kakkar"];
let [firstName, secName, thirdName] = nameList;
console.log(
 `${firstName} is Rameja, ${secName} is Kumar and ${thirdName} is Puchuk :)`
); //Ayush is Rameja, Shashank is Kumar and kakkar is Puchuk :)
