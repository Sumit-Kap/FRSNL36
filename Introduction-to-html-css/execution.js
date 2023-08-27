"use strict"; // strict mode starts here
console.log(a);
var a = 100;
// hoisting memory phase starts in JS it moves every declaration to the top of the file. It also moves function declaration also.
// console.log(b);
// let b = 25;

// console.log(c);
// const c = 30;

//Memory creation -> execution in call stack
// First phase it defined memory -> var p = undefined, let, const

abc();
function abc() {
  // normal functions are always hoisted.
  console.log("Hello");
}
// def();
// var def = () => {
//   console.log("In here");
// };
// f();
// const f = function () {
//   console.log("Inside anonymouse");
// };

function pqr(...args) {
  console.log(args);
}

pqr(1, 2, 3, 4, 5, 6, 7, 8, 9);
let z = 200;
{
  let z = 100;

  console.log(z);
}

console.log(z);
