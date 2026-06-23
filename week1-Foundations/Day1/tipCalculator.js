const billAmount = 50.0;
const tipPercentage = 15;
const numberOfPeople = 2;

// Convert percentage to decimal
const tipFraction = tipPercentage / 100;

// to find total tip
const totalTip = billAmount * tipFraction;

// to find overall bill
const totalBill = billAmount + totalTip;

// to split the bill
const amountPerPerson = totalBill / numberOfPeople;

console.log(`Total Tip: ${totalTip.toFixed(2)}`);
console.log(`Total Bill: ${totalBill.toFixed(2)}`);
console.log(`Per Person: ${amountPerPerson.toFixed(2)}`);
