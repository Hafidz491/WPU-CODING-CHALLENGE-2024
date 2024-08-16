// WPU CHALLENGE 2024
// 66/366
//https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b

var humanYearsCatYearsDogYears = function (humanYears) {
  if (humanYears == 1) return [1, 15, 15];
  if (humanYears == 2) return [2, 24, 24];
  return [humanYears, 24 + (humanYears - 2) * 4, 24 + (humanYears - 2) * 5];
};

console.log(humanYearsCatYearsDogYears(4));
