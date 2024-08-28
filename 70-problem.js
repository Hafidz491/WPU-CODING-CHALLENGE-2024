// WPU CHALLENGE 2024
// 70/366
//https://www.codewars.com/kata/55a5bfaa756cfede78000026

function problem(x) {
  if (typeof x !== "number") {
    return "Error";
  } else {
    return x * 50 + 6;
  }
}

const problem = (x) => (typeof x !== "number" ? "Error" : x * 50 + 6);

console.log(problem(1));
