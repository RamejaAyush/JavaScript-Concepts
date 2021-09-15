// * Reduce is a function which executes a user-supplied callback function for each element of the array.

// for example

const arr = [1, 2, 3, 4];

// The logic
const logic = (firstValue, secondValue) => firstValue + secondValue;

console.log(arr.reduce(logic)); // 10

// ? so what happened?
// reduce will take firstvalue as 1 and secondvalue as 2
// then sum will be 3, then firstvalue will be 3 and secondvalue is 3
// then sum is 6, then firstvalue is 6 and secondvalue is 4
// then the sum is 10 and thats the final solution

// we can implement same to multiply elements
const logic2 = (firstValue, secondValue) => firstValue * 2 + secondValue * 3;

console.log(arr.reduce(logic2)); // 62
