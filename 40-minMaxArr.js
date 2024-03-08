// WPU CHALLENGE 2024
// 40/366
// https://www.codewars.com/kata/559590633066759614000063

function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

console.log(minMax([1, 2, 3, 4, 5]));
console.log(minMax([5]));
