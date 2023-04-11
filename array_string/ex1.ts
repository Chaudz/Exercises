let color: string[] = [
  "Blue ",
  "Green",
  "Red",
  "Orange",
  "Violet",
  "Indigo",
  "Yellow ",
];
let o: string[] = ["th", "st", "nd", "rd"];
for (let i = 0; i < color.length; i++) {
  if (i < 4) {
    console.log(`${i + 1}${o[i]} choice is ${color[i]}.`);
  } else {
    console.log(`${i + 1}th choice is ${color[i]}.`);
  }
}
