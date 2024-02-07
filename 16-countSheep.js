// WPU CHALLENGE 2024
// 16/366
// https://www.codewars.com/kata/54edbc7200b811e956000556

// function countSheeps(sheep) {
//   // TODO
//   const result = sheep.filter((arrayOfSheep) => arrayOfSheep);
//   return result.length;
// }

function counstSheep(sheep) {
  let num = 0;

  for (let i = 0; i < sheep.length; i++) {
    if (sheep[i] == true) {
      num++;
    }
  }

  return num;
}
