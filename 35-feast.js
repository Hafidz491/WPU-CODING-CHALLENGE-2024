// WPU CHALLENGE 2024
// 35/366
// https://www.codewars.com/kata/5aa736a455f906981800360d

// const feast = (beast, dish) =>
//   beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1];

const feast = (beast, dish) =>
  beast.at(0) === dish.at(0) && beast.at(-1) === dish.at(-1);

console.log(feast("great blue heron", "garlic naan"));
