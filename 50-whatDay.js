// WPU CHALLENGE 2024
// 50/366
//https://www.codewars.com/kata/59dd3ccdded72fc78b000b25

// function whatday(num) {
//   // put your code here
//   if (num === 1) {
//     return "Sunday";
//   } else if (num === 2) {
//     return "Monday";
//   } else if (num === 3) {
//     return "Tuesday";
//   } else if (num === 4) {
//     return "Wednesday";
//   } else if (num === 5) {
//     return "Thursday";
//   } else if (num === 6) {
//     return "Friday";
//   } else if (num === 7) {
//     return "Saturday";
//   } else {
//     return "Wrong, please enter a number between 1 and 7";
//   }
// }

// const whatday = (num) =>
//   num === 1
//     ? "Sunday"
//     : num === 2
//     ? "Monday"
//     : num === 3
//     ? "Tuesday"
//     : num === 4
//     ? "Wednesday"
//     : num === 5
//     ? "Thursday"
//     : num === 6
//     ? "Friday"
//     : num === 7
//     ? "Saturday"
//     : "Wrong, please enter a number between 1 and 7";

// function whatday(num) {
//   switch (num) {
//     case 1:
//       return "Sunday";
//     case 2:
//       return "Monday";
//     case 3:
//       return "Tuesday";
//     case 4:
//       return "Wednesday";
//     case 5:
//       return "Thursday";
//     case 6:
//       return "Friday";
//     case 7:
//       return "Saturday";
//     default:
//       return "Wrong, please enter a number between 1 and 7";
//   }
// }

const whatDay = (num) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[num - 1] || "Wrong, please enter a number between 1 and 7";
};

console.log(whatDay(1));
