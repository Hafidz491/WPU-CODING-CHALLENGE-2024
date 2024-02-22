// WPU CHALLENGE 2024
// 26/366
// https://www.codewars.com/kata/5ab6538b379d20ad880000ab

// const areaOrPerimeter = function (l, w) {
//   // Return your answer
//   if (l == w) {
//     return l * w;
//   } else {
//     return l * 2 + w * 2;
//   }
// };

const areaOrPerimeter = (l, w) => (l == w ? l * w : l * 2 + w * 2);

console.log(areaOrPerimeter(6, 10));
