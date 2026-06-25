// Regular Functions: Standard blocks that run to completion and can return any specified value.
// Arrow Functions: Shorter syntax definitions that lack their own bindings to this, arguments, or super.
// Async Functions: Codeblocks that return a Promise and can be paused or resumed via await.
// Generator Functions: Iterative blocks that return a Generator object and use yield to pause execution.

function greetUser(userName, message) {
  return `${message}, ${userName}`;
}

greetUser("ankita", "Hello");

// Parameters vs. Arguments: Parameters are the variable names listed in the function definition. Arguments are the real values passed when invoking it.
// Passed by Value: Primitive parameters are passed by value. If you overwrite a parameter inside the function body, it will not affect any global or external variables.
// Missing Arguments: If you don't supply an argument for a defined parameter, its internal value defaults to undefined

