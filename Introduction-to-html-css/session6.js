// "use strict";

/*
higher order function/component
asynchronous programming in javascript - callback, promises, async/await(ES6)
DOM manipulation - 
*/

// function a() {
//   "use strict";
//   console.log("Inside a", this);
// }

function b(a) {
  const d = function () {
    console.log(this);
  };
  // higher order function - callback

  return d;
}

const c = b();
c();

const obj = {
  firstName: "Sumit",
  greetName: function () {
    console.log(this.firstName, this);
  },
};
const e = obj.greetName.bind(obj); // just a reference.
e(); // invokation
// callback queue and callback queue follows FIFO model.

console.log(1);
setTimeout(function () {
  console.log(3);
}, 0);
setTimeout(() => {
  console.log(10);
}, 0);
console.log(2);
console.log(4);
/*
[{name:"One plus 7", price:"28000", merchant:""},{name:"Washing Machine", price:10000, merchant:""},{}] - LineItems
status - success
PG - store it in database

*/

// Amazon
// either through an API or through module in node.js\
// const createPurchase = require("create-purchase");
// ESM
// API - Application programming interface that basically acts as a way to exchange data between client and server.
// import createPurchase from "./Session5";

// default export and named export.

// const purchase = createPurchase(cartDetails, function (data) {
//   const payment = collectPayment(data, function (response) {
//     const uiData = constructData(payment, function (results) {
//       //--- do something here
//       {
//         {
//           // cb call
//           {
//             // service threw error
//           }
//         }
//       }
//     });
//   });
// });

// return { purchase };

// Callback hell - drawback hell
// Inversion of control.

// Promise -> FulFilled, rejected or pending
// pending -> rejected
// pending -> FulFilled

const promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject("Something went wrong");
  }, 1000);
});
// promise.
console.log(promise); // At that time promise was in pending state.

promise
  .then(function (data) {
    console.log("What is this data?? ", data);
  })
  .catch(function (err) {
    console.log("what is the error?? ", err);
  });

console.log("Control over here");

// const result = fetch("https://jsonplaceholder.typicode.com/posts").then(
//   (response) => {
//     response.json().then((data) => {
//       console.log("get the data", data);
//     });
//   }
// );
// console.log(result);
// promise chaining.

// const result = fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log("Inside", data);
//   })
//   .catch((err) => {
//     console.log("In here error", err);
//   });

// promise.all([promise1, promise2, promise3, promise4]) //
// promise.any([promise1, promise2, promise3, promise4])
// promise.race() //

// async/await

async function getPosts() {
  try {
    const result = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await result.json();
    console.log(data);
    console.log("next line in execution");
  } catch (err) {
    console.log("In here", err);
  }
}

getPosts();

console.log(
  "In para container",
  document.getElementById("para-container").innerHTML
);
const element = document.getElementById("para-container");
console.log(element);
const element2 = document.querySelectorAll("#para-container");
console.log(element2);

element.style.backgroundColor = "blue";
element.style.color = "white";

const paraGraph = document.createElement("p");

paraGraph.innerText = "Inside the main paragraph";
paraGraph.style.backgroundColor = "brown";
paraGraph.style.color = "red";

element.appendChild(paraGraph);

paraGraph.addEventListener("click", () => {
  alert("Hello world");
});

// onClick, onMouseover, onMouseOut, onchange

document.createElement("table");

document
  .querySelector(".parent-container")
  .addEventListener("click", function (e) {
    alert("Parent clicked", e);
  });
document.querySelector(".children-1").addEventListener("click", function (e) {
  console.log(e);
  e.preventDefault();
  e.stopPropagation(); // code for preventing it
  alert("children clicked", e);
});
