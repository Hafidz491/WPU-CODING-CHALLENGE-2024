// WPU CHALLENGE 2024
// 69/366
//https://www.codewars.com/kata/53d16bd82578b1fb5b00128c

const grader = (score) =>
  score > 1 || score < 0.6
    ? "F"
    : score >= 0.9
    ? "A"
    : score >= 0.8
    ? "B"
    : score >= 0.7
    ? "C"
    : score >= 0.6
    ? "D"
    : "F";

console.log(grader(0.9));
