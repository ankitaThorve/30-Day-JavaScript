// Creating objects
const user = { name: "Alice", age: 30 };

// type, model, and color are properties
// "Fiat", "500", and "white" are property values
const car = { type: "Fiat", model: "500", color: "white" };

// can also create an empty object, and add the properties later:
const person = {};

person.firstName = "John";
person.lastName = "Carter";
person.age1 = 28;
person.eyeColor = "blue";

console.log(person);

// Using the new keyword ---- not recommended
const animal = new Object({
  name: "Sally",
  age: 1,
  eyesColor: "gray",
});

// Accessing properties
// Dot notation-----

console.log(user.name);

// Bracket notation -----
let n1 = "firstName";
let n2 = "lastName";

let name = person[n1] + " " + person[n2];
console.log(name);

// Deleting property---
delete person.age1;
console.log(person);

// Check if a property exists------ in operator
let result = "firstName" in person;
console.log(result);
