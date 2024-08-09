// WPU CHALLENGE 2024
// 57/366
//https://www.codewars.com/kata/5a07e5b7ffe75fd049000051

function sorter(textbooks) {
  return textbooks.sort((a, b) => (a.toLowerCase() > b.toLowerCase() ? 1 : -1));
}

console.log(sorter(["Algebra", "history", "Geometry", "english"]));
