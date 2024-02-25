// WPU CHALLENGE 2024
// 33/366
//https://www.codewars.com/kata/568d0dd208ee69389d000016

// function rentalCarCost(d) {
//   // Your solution here
//   let result = 0;
//   if (d >= 3) {
//     result = 40 * d - 20;
//   } else if (d >= 7) {
//     result = 40 * d - 50;
//   } else {
//     result = 40 * d;
//   }

//   return result;
// }

const rentalCarCost = (d) =>
  d >= 7 ? 40 * d - 50 : d >= 3 ? 40 * d - 20 : 40 * d;

console.log(rentalCarCost(3));
