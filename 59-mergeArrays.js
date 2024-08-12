// WPU CHALLENGE 2024
// 59/366
//https://www.codewars.com/kata/5899642f6e1b25935d000161

// function mergeArrays(arr1, arr2) {
//   return Array.from(new Set(arr1.concat(arr2).sort((a,b) => (a-b))));
// }

function mergeArrays(arr1, arr2) {
  const arr = arr1.concat(arr2).sort((a, b) => a - b);

  const newArr = new Set(arr);
  const result = [...newArr];

  return result;
}

console.log(mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2]));
