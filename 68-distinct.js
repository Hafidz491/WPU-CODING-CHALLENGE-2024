// WPU CHALLENGE 2024
// 68/366
//https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118

function distinct(str) {
  return [...new Set(str)];
}

console.log(distinct([1, 1, 2]));
