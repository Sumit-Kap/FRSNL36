// let n = 123n;

// // n = "GeeksforGeeks";

// // console.log(typeof NaN);

// const bigInt = 111212312312312313213326789n;
// console.log(typeof n);

// let str1 = "Hey";
// let str2 = "This is a full-stack course";
// console.log(`${str1} ${str2} in react and node`);
// console.log(typeof str1);

// let age;
// console.log(typeof age);

// const a = Symbol("Sumit");
// const b = Symbol("Sumit");
// console.log(a === b);
// console.log(a);

// var name = [];

// name.push("Raghav");
// name.push("rahul");
// console.log(typeof name);

// var obj = {
//   name: "Sumit",
//   age: 28,
//   address: null,
// };

// console.log(obj);
// console.log(typeof obj);

// const fn = function greet() {
//   console.log("Inside function");
// };

// console.log(typeof fn);

// const date = new Date();

// console.log(typeof date);

// for (let i = 0; i < name.length; i++) {
//   console.log(name[i]);
// }

// for (let n of name) {
//   console.log(n);
// }

// for (let i in obj) {
//   console.log(i, obj[i]);
// }
// // obj.name // accessing object
// // obj['address']

// name.forEach(function (item, index) {
//   console.log(item, index);
// });

// // average(1,2,3,4,5,.....n)

// function average(...args) {
//   console.log(arguments);
// }
// average(1, 2, 3);
// average(1, 2, 3, 4, 5, 6);
// average(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 12, 13);
// console.log({ ...obj });
// let i = 0;
// while (i < name.length) {
//   console.log(name[i]);
//   i++;
// }
// i = 0;
// do {
//   console.log(name[i]);
//   i++;
// } while (i < name.length);

// if (name.length < 0) {
//   console.log("In if part");
// } else if (name.length === 0) {
//   console.log("In else if");
// } else {
//   console.log("In else");
// } // strict check that checks value and type

// switch (name.length) {
//   case 1:
//     console.log("In case 1");
//     break;
//   case 2:
//     console.log("In case 2");
//     break;
//   case 3:
//     console.log("In case 3");
//     break;
//   default:
//     console.log("In case 4");
// }

// // === // type and value
// // == // value
// // != // value is equal or not
// // !== // value and type should not be equal

// // && // logical AND
// // || // logical OR

// /*
// multi-line comments

// */

// // single line comments

// // Types of functions in JS.
// // How JS execution works + Web APIs
// // scopes
// // Hoisting
// // closures
// // block shadowing
// // this keyword
// // prototypes
// classes in javascript
// // factory functions and constructor functions.
// // Spread operator.
// // Rest operator.

function greetName(name) {
  // function definition
  console.log(`Hi my name is:${name}`); //Function body
}

greetName("Sumit"); // Function invokation

const greetNameArrow = (name) => {
  // arrow functions
  console.log(`Hi my name is:${name}`);
};

greetNameArrow("Ajay");

// anonymous Functions
const a = function () {
  console.log("Hello world");
};

a();

((a, b, c, d) => {
  // IIFE - Immediately invoked function definition.
  console.log("In here", a, b, c, d);
})(1, 2, 3, 4);

function m(p) {
  p(); // typeof - function
}

const p = () => {
  console.log("Something else");
};

m(p); // invokation

function greetings() {
  const greet = () => {
    return () => {
      console.log("Inside greet");
    };
  };
  return greet;
}

greetings()()(); // reference not done invokation ()-> invokation function body will execute

// fn(1,2,3)(4,5,6)(7,8)(9)......(n)
// company + recursion + function currying to solve this
// function fn(...args) {
//   return () => {
//     return () => {
//       return () => {};
//     };
//   };
// }

//fn(1,2,3,4,5)(2,3)(3,4,5)....() // sum all these numbers or mulitply all these numbers, do an alternate sum + sub
// iterative - upper bound

// for(let i=0; i<n; i++)

// if(arguments.length === 0) { return }

function init() {
  const name = "John doe";
  const age = 26;
  function displayName() {
    console.log(name, age);
  }
  return displayName;
}

const y = init();
y();
// console.log(this);

// CallStack - GEC -> console.log(name)

// Synchronous, single threaded language -> AJAX
// JS program
