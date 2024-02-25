// WPU CHALLENGE 2024
// 31/366
// https://www.codewars.com/kata/55908aad6620c066bc00002a

function XO(str) {
  //code here
  //   let x = str.toLowerCase().split("x").length - 1;
  //   let o = str.toLowerCase().split("o").length - 1;
  //   return x === o;

  return str.toLowerCase().split("x").length ===
    str.toLowerCase().split("o").length
    ? true
    : false;
}

console.log(XO("xxOo"));
