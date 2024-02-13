// WPU CHALLENGE 2024
// 19/366
// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151

// function arrayPlusArray(arr1, arr2) {
//   let result = 0;
//   for (let i = 0; i < arr1.length; i++) {
//     result += arr1[i];
//   }

//   for (let i = 0; i < arr2.length; i++) {
//     result += arr2[i];
//   }

//   return result;
// }

// function arrayPlusArray(arr1, arr2) {
//   let result = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     for (let j = 0; j < arguments[i].length; j++) {
//       result += arguments[i][j];
//     }
//   }

//   return result;
// }

// FUNGSI CONCAT UNTUK MENGGABUNGKAN DUA ARRAY MENJADI 1 ARRAY BARU
// FUNGSI REDUCE UNTUK MEMPROSES (+, -, X, /) ARRAY MENJADI 1 NILAI
const arrayPlusArray = (arr1, arr2) =>
  arr1.concat(arr2).reduce((a, b) => a + b);

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
