// WPU CHALLENGE 2024
// 27/366
// https://www.codewars.com/kata/55cbd4ba903825f7970000f5

function getGrade(...s) {
  // Code here
  const grade = s.reduce((a, b) => a + b) / s.length;
  if (grade >= 90 && grade <= 100) {
    return "A";
  } else if (grade >= 80 && grade < 90) {
    return "B";
  } else if (grade >= 70 && grade < 80) {
    return "C";
  } else if (grade >= 60 && grade < 70) {
    return "D";
  } else {
    return "F";
  }
}

console.log(getGrade(95, 90, 93, 90, 50));
console.log(getGrade(70, 70, 100));
