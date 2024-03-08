// WPU CHALLENGE 2024
// 38/366
// https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036

// function toCsvText(...array) {
//   // good luck
//   return array.flat().join("\n");
// }

// const toCsvText = (...array) => array.flat().join("\n");

const toCsvText = (array) => array.join("\n");

console.log(
  toCsvText([
    [0, 1, 2, 3, 45],
    [10, 11, 12, 13, 14],
    [20, 21, 22, 23, 24],
    [30, 31, 32, 33, 34],
  ])
);
