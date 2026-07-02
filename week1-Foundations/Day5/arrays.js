// an Array is a global object used to store ordered collections of data.

// The push() method adds one or more elements directly to the end of an array.
// Behavior: It is a mutating method, meaning it directly modifies the original array rather than creating a new one.
// Return Value: It returns the new length property of the mutated array.

const fruits = ["apple", "banana"];

// Adding a single element
const newLength = fruits.push("orange");

console.log(fruits);
console.log(newLength);

// The map() method creates a brand-new array populated with the results of calling a provided callback function on every single element in the calling array.
// Behavior: It is non-mutating. The original array stays completely unchanged.
// Callback Arguments: The callback function accepts three arguments: the current element, the index, and the source array.
// Ideal Use Case: Transforming a list of data from one format into another (e.g., doubling numbers, extracting object properties).

const numbers = [1, 2, 3, 4];
// Transforming data by squaring each number
const squared = numbers.map((num) => num * num);

console.log(numbers);
console.log(squared);
