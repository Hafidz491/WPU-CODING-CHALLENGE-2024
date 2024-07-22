// WPU CHALLENGE 2024
// 46/366
//https://www.codewars.com/kata/5ce9c1000bab0b001134f5af

// const quarterOf = (month) => {
//   // Your code here
//   if (month <= 3) {
//     return 1;
//   } else if (month <= 6) {
//     return 2;
//   } else if (month <= 9) {
//     return 3;
//   } else {
//     return 4;
//   }
// };

// const quarterOf = (month) =>
//   month <= 3 ? 1 : month <= 6 ? 2 : month <= 9 ? 3 : 4;

// MENGGUNAKAN RUMUS MTK
const quarterOf = (month) => Math.ceil(month / 3);

console.log(quarterOf(8));
