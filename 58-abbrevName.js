// WPU CHALLENGE 2024
// 58/366
//https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

const abbrevName = (name) =>
  name
    .split(" ")
    .map((i) => i[0])
    .join(".")
    .toUpperCase();

console.log(abbrevName("Sam Harris"));
