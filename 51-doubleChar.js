// WPU CHALLENGE 2024
// 51/366
//https://www.codewars.com/kata/56b1f01c247c01db92000076

// function doubleChar(str) {
//   // Your code here
//   let newStr = "";
//   for (let i = 0; i < str.length; i++) {
//     newStr += str[i] + str[i];
//   }
//   return newStr;
// }

const doubleChar = (str) =>
  str
    .split("")
    .map((a) => a + a)
    .join("");

console.log(doubleChar("abcd"));
