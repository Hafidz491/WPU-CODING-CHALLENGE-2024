// WPU CHALLENGE 2024
// 36/366
// https://www.codewars.com/kata/5bb904724c47249b10000131

const points = (games) =>
  games.reduce((x, y) => x + (y[0] > y[2] ? 3 : y[0] === y[2] ? 1 : 0), 0);

console.log(
  points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
);
