// WPU CHALLENGE 2024
// 67/366
//https://www.codewars.com/kata/5966e33c4e686b508700002d

// function sumStr(a, b) {
//   return (parseInt(a) + parseInt(b)).toString();
// }

function sumStr(a, b) {
  return `${parseInt(a || 0) + parseInt(b || 0)}`;
}

console.log(sumStr("5", "4"));
