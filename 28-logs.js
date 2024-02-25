// WPU CHALLENGE 2024
// 28/366
// https://www.codewars.com/kata/5b68c7029756802aa2000176

function logs(x, a, b) {
  //your code here
  let logA = Math.log(a) / Math.log(x);
  let logB = Math.log(b) / Math.log(x);

  let logSum = logA + logB;
  return logSum;
}

console.log(logs(10, 2, 3));
