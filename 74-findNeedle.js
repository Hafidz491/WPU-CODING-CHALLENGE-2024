// WPU CHALLENGE 2024
// 74/366
//https://www.codewars.com/kata/56676e8fabd2d1ff3000000c

function findNeedle(haystack) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === "needle") {
      return "found the needle at position " + i;
    }
  }
}

console.log(
  findNeedle(["hay", "junk", "hay", "junk", "needle", "hay", "junk"])
);
