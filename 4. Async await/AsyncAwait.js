// * In Async Await we can change the asynchronous nature of javaScript

// so we will take a example from file system
let fs = require("fs/promises");

// function which reads files
const readFiles = async (file1, file2, file3) => {
 let f1 = fs.readFile(file1, "utf-8");
 let f2 = fs.readFile(file2, "utf-8");
 let f3 = fs.readFile(file3, "utf-8");

 //  using await to wait for the functions to be executed
 let e1 = await f1;
 console.log(e1);
 let e2 = await f2;
 console.log(e2);
 let e3 = await f3;
 console.log(e3);
};

readFiles(
 "./4. Async await/file1.txt",
 "./4. Async await/file2.txt",
 "./4. Async await/file3.txt"
);
