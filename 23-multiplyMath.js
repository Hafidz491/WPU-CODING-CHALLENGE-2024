// WPU CHALLENGE 2024
// 23/366
// https://www.codewars.com/kata/5708f682c69b48047b000e07

function multiply(number) {
  //Math.abs() fungsi untuk menghilangkan minus
  return number * 5 ** String(Math.abs(number)).length;
}

console.log(multiply(-5));
