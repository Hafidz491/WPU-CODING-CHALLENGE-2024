// WPU CHALLENGE 2024
// 42/366
// https://www.codewars.com/kata/523f5d21c841566fde000009

// function arrayDiff(a, b) {
//   let result = [];
//   for (let i = 0; i < a.length; i++) {
//     if (b.indexOf(a[i]) === -1) {
//       result.push(a[i]);
//     }
//   }
//   return result;
// }

const arrayDiff = (a, b) => a.filter((x) => !b.includes(x));

console.log(arrayDiff([1, 2], [1]));
