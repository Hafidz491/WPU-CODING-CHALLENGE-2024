// WPU CHALLENGE 2024
// 11/366
// ...

function lovefunc(flower1, flower2) {
  // moment of truth
  if (
    (flower1 % 2 == 0 && flower2 % 2 == 1) ||
    (flower1 % 2 == 1 && flower2 % 2 == 0)
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(lovefunc(0, 0));
