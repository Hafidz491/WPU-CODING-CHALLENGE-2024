// WPU CHALLENGE 2024
// 48/366
//https://www.codewars.com/kata/568dcc3c7f12767a62000038

// function setAlarm(employed, vacation) {
//   if (employed === true && vacation === true) {
//     return false;
//   } else if (employed === true && vacation === false) {
//     return true;
//   } else if (employed === false && vacation === true) {
//     return false;
//   } else {
//     return false;
//   }
// }

const setAlarm = (employed, vacation) => employed && !vacation;

console.log(setAlarm(true, false));
