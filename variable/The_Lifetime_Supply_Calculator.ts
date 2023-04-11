let currentAge: number = 30;
let maxAge: number = 80;
let snacksPerDay: number = 2;

let yearsRemaining: number = maxAge - currentAge;
let daysRemaining: number = yearsRemaining * 365;
let totalSnacksNeeded: number = daysRemaining * snacksPerDay;

console.log(
  `You will need ${totalSnacksNeeded} snacks to last you until the ripe old age of ${maxAge}.`
);
