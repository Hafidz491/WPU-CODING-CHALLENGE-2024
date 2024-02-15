// WPU CHALLENGE 2024
// 24/366
// https://www.codewars.com/kata/58d248c7012397a81800005c

// function cubeChecker(volume, side) {
//   return volume > 0 ? Math.pow(side, 3) === volume : false;
// }

const cubeChecker = (volume, side) =>
  volume > 0 ? Math.pow(side, 3) === volume : false;

console.log(cubeChecker(0, 0));
