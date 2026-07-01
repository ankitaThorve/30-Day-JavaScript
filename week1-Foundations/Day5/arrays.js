// an Array is a global object used to store ordered collections of data.

// The push() method adds one or more elements directly to the end of an array.Behavior: It is a mutating method, meaning it directly modifies the original array rather than creating a new one.Return Value: It returns the new length property of the mutated array.

const fruits = ["apple", "banana"];

// Adding a single element
const newLength = fruits.push("orange");

console.log(fruits);
console.log(newLength);
