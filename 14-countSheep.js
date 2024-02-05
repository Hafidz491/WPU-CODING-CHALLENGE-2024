// WPU CHALLENGE 2024
// 14/366
// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077

const countSheep = (num) => {
  return [...Array(num)].map((_, i) => `${i + 1} sheep...`).join("");
};

console.log(countSheep(3));
