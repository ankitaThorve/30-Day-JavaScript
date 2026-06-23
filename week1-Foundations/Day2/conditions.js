// if...else statement

let time = 14;

if (time < 12) {
  console.log("Good morning!");
} else if (time < 18) {
  console.log("Good afternoon!"); // This block runs
} else {
  console.log("Good evening!");
}

// switch Statement

let fruit = "Apple";

switch (fruit) {
  case "Banana":
    console.log("Bananas are yellow");
    break;
  case "Apple":
    console.log("Apples are red");
    break;
  default:
    console.log("Unknown fruit");
}

// conditional(Ternary) operator
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status);

// Truthy vs Falsy values---
// There are exactly eight falsy values that evaluate to false in a conditional context:
// All other values are evaluated as truthy

// false
// 0 (and -0, 0n)
// "" empty string
// null
// undefined
// NaN
