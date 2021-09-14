// * Async means I will execute the thing first which is executing faster. I will take care of the rest later.

// So it does mean? :o?
// for example
const fun1 = () => {
 console.log("I am First function");
};

const fun2 = () => {
 console.log("I am Second function");
};

const fun3 = () => {
 console.log("I am Third function");
};

fun1();
setTimeout(fun2, 1000);
fun3();

// output:
// I am First function
// I am Third function
// I am Second function

// javaScript will never wait for any function to be executed. It will execute the fun1 and fun3 first and then let fun2 to finish its execution.

// importing file system
let fs = require("fs");

// reads the file and execute
fs.readFile("./3. Async/file.txt", "utf-8", (err, data) => {
 console.log(err, data); // null Hi, I am Ayush
});

console.log("I come after the fs function");

// output:
// I come after the file function
// null Hi, I am Ayush

// so this the default nature of javaScript

// * To change this default nature of javaScript promises comes in.
// now what is promises?
// I means javaScript promises that i will execute the function when ever it is completed

// to return a promise
let fsp = require("fs/promises");

let a = fsp.readFile("./3. Async/file.txt", "utf-8");
console.log(a);

console.log("I come after the fsp function");

// output:
// Promise { <pending> }
// I come after the fsp function

// * For callbacks we use .then methord
// we use to add some extra functionality to our promise
let ap = fsp.readFile("./3. Async/file.txt", "utf-8");
ap.then((data) => {
 console.log(`${data} and this the added text`);
}); // Hi, I am Ayush and this the added text
