// Basic FizzBuzz Function with One Parameter---
function runFizzBuzz(limit) {
  // 'limit' is the parameter that acts as a placeholder for the number passed in
  for (let i = 1; i <= limit; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
// Calling the function with an 'argument' of 15
console.log(runFizzBuzz(15));

// Returning an Array Instead of Logging---
function getFizzBuzzArray(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i.toString());
    }
  }
  return result;
}

const output = getFizzBuzzArray(5);
console.log(output);
