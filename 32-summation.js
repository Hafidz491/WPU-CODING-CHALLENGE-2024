// WPU CHALLENGE 2024
// 32/366
// https://www.codewars.com/kata/55d24f55d7dd296eb9000030

// var summation = function (num) {
//   let result = 0;
//   for (var i = 1; i <= num; i++) {
//     result += i;
//   }

//   return result;
// };

const summation = (num) => (num * (num + 1)) / 2;

console.log(summation(8));
