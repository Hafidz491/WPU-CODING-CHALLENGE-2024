// WPU CHALLENGE 2024
// 52/366
//https://www.codewars.com/kata/5ae62fcf252e66d44d00008e

function expressionMatter(a, b, c) {
  let value = [];
  value.push(a * (b + c));
  value.push(a * b * c);
  value.push(a + b * c);
  value.push((a + b) * c);
  value.push(a + b + c);
  return Math.max(...value);
}

console.log(expressionMatter(3, 1, 2));
