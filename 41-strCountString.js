// WPU CHALLENGE 2024
// 41/366
// https://www.codewars.com/kata/5865918c6b569962950002a1

function strCount(str, letter) {
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      result++;
    }
  }
  return result;
}

// const strCount = (str, letter) => str.split(letter).length - 1;

console.log(strCount("Hello", "l"));
console.log(strCount("", "o"));
