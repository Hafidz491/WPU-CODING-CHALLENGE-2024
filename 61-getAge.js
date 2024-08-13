// WPU CHALLENGE 2024
// 61/366
//https://www.codewars.com/kata/557cd6882bfa3c8a9f0000c1

// function getAge(inputString) {
//   return Number(
//     inputString
//       .split(",")
//       .map((i) => i[0])
//       .join()
//   );
// }

// const getAge = (inputString) => Number(inputString.split(",").map((i) => i[0]));

function getAge(inputString) {
  //   return Number(inputString[0]);
  return parseInt(inputString);
}

console.log(getAge("4 years old"));
