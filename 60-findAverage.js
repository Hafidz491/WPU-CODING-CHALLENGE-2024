// WPU CHALLENGE 2024
// 60/366
//https://www.codewars.com/kata/57a2013acf1fa5bfc4000921

// function findAverage(array) {
//   if (array != 0) {
//     return array.reduce((a, b) => a + b) / array.length;
//   } else {
//     return 0;
//   }
// }

const findAverage = (array) =>
  array != 0 ? array.reduce((a, b) => a + b) / array.length : 0;

console.log(findAverage([]));
