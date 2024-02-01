// WPU CHALLENGE 2024
// 13/366
// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0

function removeChar(str) {
  //   return str.slice(1, -1);
  return str.slice(1, str.length - 1);
}

console.log(removeChar("eloquent"));
