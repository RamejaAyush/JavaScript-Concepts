// * Map function creates a new array so, we can do itration over each element and do whatever we want.

// for example
let arr = [1, 2, 3, 4];

// return the double value of the each element
let doubleArr = arr.map((element) => {
 return element * 2;
});

// console.log(doubleArr); // [ 2, 4, 6, 8 ]
