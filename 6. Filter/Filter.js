// * Filter is pretty similar to the map function but what filter does is it filter out elements in array based upon the condition.

// for example
let arr = [4, 5, 6, 7];

let moreThanSix = arr.filter((ele) => {
 // * return contains the condition
 return ele >= 6;
});

console.log(moreThanSix); // [ 6, 7 ]
