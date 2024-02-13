// WPU CHALLENGE 2024
// 20/366
// https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad

// function invert(array) {
//   for (let i = 0; i < array.length; i++) {
//     array[i] *= -1;
//   }
//   return array;
// }

// const invert = (array) =>
//   array.length === 0 ? [] : array.map((x) => (x *= -1));

const invert = (array) => array.map((x) => -x);

console.log(invert([-1, 2, 3, -4, 5]));
