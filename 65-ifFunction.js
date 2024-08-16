// WPU CHALLENGE 2024
// 65/366
//https://www.codewars.com/kata/54147087d5c2ebe4f1000805

const _if = (bool, func1, func2) => (bool ? func1() : func2());

console.log(
  _if(
    true,
    function () {
      console.log("True");
    },
    function () {
      console.log("false");
    }
  )
);
