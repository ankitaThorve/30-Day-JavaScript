//  Define the possible choices
const choices = ["rock", "paper", "scissors"];

// Simulate choices (replace with actual game input)
const playersChoice = "rock";
const computersChoice = choices[Math.floor(Math.random() * 3)];

console.log(`Player chose: ${playersChoice}`);
console.log(`Computer chose: ${computersChoice}`);

// Control flow and conditionals to determine the winner
if (playersChoice === computersChoice) {
  console.log("It's a tie!");
} else if (
  (playersChoice === "rock" && computersChoice === "scissors") ||
  (playersChoice === "paper" && computersChoice === "rock") ||
  (playersChoice === "scissors" && computersChoice === "paper")
) {
  console.log("You win!");
} else {
  console.log("Computer wins!");
}
