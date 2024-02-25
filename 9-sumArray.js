// WPU CHALLENGE 2024
// 9/366
// https://www.codewars.com/kata/576b93db1129fcf2200001e6

// function sumArray(array) {
//   if (!array) {
//     return 0;
//   }

//   array.sort((a, b) => a - b);

//   let total = 0;
//   for (let i = 1; i < array.length - 1; i++) {
//     total += array[i];
//   }

//   return total;
// }

const sumArray = (array) =>
  array == null || array.length <= 2
    ? 0
    : array
        .sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((a, b) => a + b);

console.log(sumArray([6, 2, 1, 8, 10]));
