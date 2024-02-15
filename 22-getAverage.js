// WPU CHALLENGE 2024
// 22/366
// https://www.codewars.com/kata/563e320cee5dddcf77000158

// function getAverage(marks) {
//   //TODO : calculate the downward rounded average of the marks array

//   let result = 0;

//   for (let i = 0; i < marks.length; i++) {
//     result += marks[i];
//   }

//  FUNGSI PEMBULATAN PADA JAVASCRIPT ADA 3: 1. floor (pembulatan kebawah cth: 3,8 = 3), 2. ceil (pembulatan keatas cth: 3,1 = 4), 3. rounded (pembulatan dengan pecahan terdekat cth: 3,6 = 4, 3,4 = 3)
//   return Math.floor(result / marks.length);
// }

const getAverage = (marks) =>
  Math.floor(marks.reduce((a, b) => a + b) / marks.length);

console.log(getAverage([2, 2, 3, 2, 2]));
