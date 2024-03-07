// WPU CHALLENGE 2024
// 37/366
// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9

// var number = function (array) {
//   //your awesome code here
//   return array.map((element, index) => `${index + 1}: ${element}`);
// };

var number = function (array) {
  //your awesome code here
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (!array) {
      return result;
    }
    result.push(`${i + 1}: ${array[i]}`);
  }

  return result;
};

console.log(number([]));
console.log(number(["a", "b", "c"]));
