// WPU CHALLENGE 2024
// 47/366
//https://www.codewars.com/kata/58649884a1659ed6cb000072

// function updateLight(current) {
//   //your code here!
//   if (current === "green") {
//     return "yellow";
//   } else if (current === "yellow") {
//     return "red";
//   } else {
//     return "green";
//   }
// }

const updateLight = (current) =>
  current === "green" ? "yellow" : current === "yellow" ? "red" : "green";

console.log(updateLight("red"));
