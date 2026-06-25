// Regular Functions: Standard blocks that run to completion and can return any specified value.
// Arrow Functions: Shorter syntax definitions that lack their own bindings to this, arguments, or super.
// Async Functions: Codeblocks that return a Promise and can be paused or resumed via await.
// Generator Functions: Iterative blocks that return a Generator object and use yield to pause execution.

function greetUser(userName, message) {
  return `${message}, ${userName}`;
}

console.log(greetUser("ankita", "Hello"));

// Parameters vs. Arguments: Parameters are the variable names listed in the function definition. Arguments are the real values passed when invoking it.
// Passed by Value: Primitive parameters are passed by value. If you overwrite a parameter inside the function body, it will not affect any global or external variables.
// Missing Arguments: If you don't supply an argument for a defined parameter, its internal value defaults to undefined

// Default Parameter--

function setRole(user, role = "guest") {
  return `${user} is logged in as a ${role}.`;
}

console.log(setRole("Omkar"));

// Rest Parameter--

function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sumAll(1, 2, 3, 4));

// Destructuring Parameters

function displayProfile({ name, age }) {
  console.log(`${name} is ${age} years old.`);
}

const userObj = { name: "Charlie", age: 30, city: "NY" };
displayProfile(userObj);

// Expected Count

function func1() {}
console.log(func1.length);

function func2(a, b) {}
console.log(func2.length);
console.log(arguments.length);
