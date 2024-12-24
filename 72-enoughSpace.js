// WPU CHALLENGE 2024
// 72/366
//https://www.codewars.com/kata/5875b200d520904a04000003

function enough(cap, on, wait) {
  if (cap >= on + wait) {
    return 0;
  } else {
    return wait + on - cap;
  }
}

// const enough = (cap, on, wait) => (cap >= on + wait ? 0 : wait - (cap - on));

console.log(enough(61, 61, 60));
console.log(enough(100, 60, 50));
console.log(enough(82, 75, 52));
