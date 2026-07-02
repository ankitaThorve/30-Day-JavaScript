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

// The filter() method creates a shallow copy of a portion of a given array, filtered down to only the elements that pass a specific conditional test.
// Behavior: Like map(), it is non-mutating and returns a new array.
// Mechanism: It runs a callback function for each element. If the callback returns a truthy value, that element is included in the new array; if it returns falsy, it is excluded.
// Ideal Use Case: Removing unwanted items from a data collection based on specific criteria.

const score = [12, 5, 8, 130, 54];
// Filtering out numbers that are less than 10
const bigScore = score.filter((score) => score >= 10);

console.log(score);
console.log(bigScore);

// The reduce() method reduces an array of values down to just one value. To get the output value, it runs a reducer function on each element of the array.
// Syntax
// arr.reduce(callback[, initialValue])

// The callback argument is a function that will be called once for every item in the array. This function takes four arguments, but often only the first two are used.

// accumulator - the returned value of the previous iteration
// currentValue - the current item in the array
// index - the index of the current item
// array - the original array on which reduce was called
// The initialValue argument is optional. If provided, it will be used as the initial accumulator value in the first call to the callback function.

const nums = [1, 2, 3, 4];
const sum = nums.reduce(function (result, item) {
  return result + item;
}, 0);
console.log(sum);
