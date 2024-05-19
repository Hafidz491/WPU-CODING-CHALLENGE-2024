// WPU CHALLENGE 2024
// 45/366
// https://www.codewars.com/kata/56f69d9f9400f508fb000ba7

// function monkeyCount(n) {
//   let result = [];

//   for (let i = 1; i <= n; i++) {
//     result.push(i);
//   }

//   return result;
// }

const monkeyCount = (n) => Array.from({ length: n }, (_, i) => i + 1);

console.log(monkeyCount(10));
