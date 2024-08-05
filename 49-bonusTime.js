// WPU CHALLENGE 2024
// 48/366
//https://www.codewars.com/kata/56f6ad906b88de513f000d96

// function bonusTime(salary, bonus) {
//   if (bonus === true) {
//     return "£" + salary * 10;
//   } else {
//     return "£" + salary;
//   }
// }

function bonusTime(salary, bonus) {
  return `£${bonus ? salary * 10 : salary}`;
}

console.log(bonusTime(10000, true));
