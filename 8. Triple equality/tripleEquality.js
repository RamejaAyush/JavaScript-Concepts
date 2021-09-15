// * the main thing is "1 == 1" means "they are equal"! right?? by in Javascript first both the values are converted into one datatype and then compared. So, It means we can do this

let number = 45;

if (number == "45") {
 console.log("This is perfectly fine!.");
} else {
 console.log("But it is a string! how they can be compared!");
}

// ? guess the output??
// ! the output is "This is perfectly fine!."

// the solution to this problem is "===". so in this javascript will compare values with there datatypes.

if (number === "45") {
 console.log("This is perfectly fine!.");
} else {
 console.log("But it is a string! how they can be compared!");
}

// * output is "But it is a string! how they can be compared!"
