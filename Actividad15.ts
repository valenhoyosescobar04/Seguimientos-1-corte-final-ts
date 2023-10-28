const asteriscos: string = "* * * * * * ";
const igual: string = "=============================================";

for (let i: number = 1; i <= 5; i++) {
  console.log(asteriscos);
  if (i < 5) {
    console.log(igual);
  }
}
console.log(igual);
