// WPU CHALLENGE 2024
// DAY 1/366
// https://www.codewars.com/kata/57f780909f7e8e3183000078

// FUNCTION DECLARATION
// function grow(x) {
//   let result = x[0];
//   for (i = 1; i < x.length; i++) {
//     result = result * x[i];
//   }
//   return result;
// }

// function grow(x) {
//   const result = x.reduce((acc, curr) => acc * curr);

//   return result;
// }

// FUNCTION EXPRESSION
const grow = (x) => x.reduce((acc, curr) => acc * curr);

console.log(grow([2, 2, 2, 2, 2, 2]));
