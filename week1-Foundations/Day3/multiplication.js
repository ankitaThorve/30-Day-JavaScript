// using a for loop

let num = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
}

// using while loop

const num1 = 6;
let i = 1;
while (i <= 10) {
  console.log(`${num1} x ${i} = ${num1 * i}`);
  i++;
}

// using for...of loop

const num2 = 7;
const multipliers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const i of multipliers) {
  console.log(`${num2} x ${i} = ${num2 * i}`);
}
