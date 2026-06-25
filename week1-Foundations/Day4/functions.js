// Regular Functions: Standard blocks that run to completion and can return any specified value.
// Arrow Functions: Shorter syntax definitions that lack their own bindings to this, arguments, or super.
// Async Functions: Codeblocks that return a Promise and can be paused or resumed via await.
// Generator Functions: Iterative blocks that return a Generator object and use yield to pause execution.

function greetUser(userName, message) {
  return `${message}, ${userName}`;
}

greetUser("ankita", "Hello");
