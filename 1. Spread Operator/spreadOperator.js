// ! install "Better Comments" extension in vscode if you'r are using it. (for better visuals) //not mendatory :)

// * Spread Operator: It basically means spreading each element in array/object.

// * Using Spread Opeator in Arrays
// assume a array
let arr = [1, 2, 3];

// we can make a copy of it
let arr2 = [...arr];
console.log(arr2); // output: [1, 2, 3]

// we can also make a new array with arr elements
let arr3 = [...arr, 4, 5, 6];
console.log(arr3); // output: [1, 2, 3, 4, 5, 6]

// we can also use multiple spread operators
let arr4 = [...arr, ...arr3];
console.log(arr4); // output: [1, 2, 3, 1, 2, 3, 4, 5, 6]

// * we can use spread operator with functions
// function which find the average of numbers

const findAvg = (a, b, c) => {
 return (a + b + c) / 3;
};

let a = findAvg(...arr);
console.log(a); // output: (1 + 2 + 3) / 3 = 2

// * whatIf we have a array of 6 numbers and we pass it to a function which takes only 3 parameters.
// * In this case only first 3 numbers in the array will be considered rest will be ignored

// for example we pass arr4 in findAvg function
let b = findAvg(...arr4);
console.log(b); // output: (1 + 2 + 3) / 3 = 2 because only 1, 2, 3 are considered

// * Using Spread Operator in Objects

// assume a object
let obj = {
 name: "Ayush Rameja",
 occupation: "Make Good UI ;)",
 age: "100 million",
};

// we can make a copy of it
let obj2 = { ...obj };
console.log(obj2); // output: { name: 'Ayush Rameja', occupation: 'Make Good UI ;)', age: '100 million' }

// * whatIf we want to change any value from obj
// !  methord 1:

// declare a empty obj
let obj3 = {};

// declare each value separately
obj3.name = obj.name;
obj3.occupation = obj.occupation;
obj3.age = 21; // because I am actually 21 :|

console.log(obj3); //{ name: 'Ayush Rameja', occupation: 'Make Good UI ;)', age: 21 }

// ! methord 2:
// use spread operator
// * ya it is that easy :o
let obj4 = { ...obj, age: 21 };
console.log(obj4); //{ name: 'Ayush Rameja', occupation: 'Make Good UI ;)', age: 21 }
