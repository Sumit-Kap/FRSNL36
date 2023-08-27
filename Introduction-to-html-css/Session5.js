//currySum(1,2,3)(4,5,6,7)(8,9,10)(11,12,13,14,15).........() // 1+2+3+4+5+6+7+8+9.....
// closure, function currying, function as a first class object
let sum = 0;
function currySum(...args) {
  args.forEach((item) => {
    sum += item;
  });
  return (...b) => {
    if (b.length === 0) {
      // base condition where my recursion will stop.
      return sum;
    } else {
      return currySum(...b); // recursively calling the outerfunction
    }
  };
}
console.log(
  currySum(1, 2, 3)(4, 5, 6, 7)(8, 9, 10)(11, 12, 13, 15)(16, 17, 18, 19, 20)(
    21,
    22
  )()
);

// for(let i=0; i<length; i++){

// }
// for(initialization, condition, incremnet)
console.log(this);
let name = "Sumit";
function user() {
  console.log(this); // window object
  function greetUser() {
    console.log("In here->", this); // what will this point to?? undefined
  }
  greetUser(); // invoked from inside the user function -> Local
}

user(); // global scope -> this will always be equal to window object

const obj = {
  firstName: "John",
  lastName: "Doe",
  showName: function () {
    console.log(this);
    const self = this;
    const fn = function () {
      console.log(this.firstName, arguments);
    }.bind(this, "12", 13, 14);
    fn();
  },
};
// call - immediately calls the function, takes comma seperated list of arguments
// apply - immediately calls the function, array of arguments.
// bind - returns the function, comma seperated list of arguments
obj.showName();

// camelCase -> factory functions
function userInfo(radius, x, y) {
  return {
    radius,
    length: x,
    breadth: y,
  };
}

const square = userInfo(0, 10, 10);
const rectangle = userInfo(0, 10, 5);
const circle = userInfo(5, 0, 0);

console.log(square.breadth, rectangle, circle);

// constructor functions

function UserFn(name, age, gender) {
  // this.name = name;
  // this.age = age;
  // this.gender = gender;
}
// create an empty this object and properties gets assigned to this keyword.
// {} -> this.name, this.age, this.gender
// CJS + ESM = CJS - Common JS module system
// ESM - EcmaScript module system.
export let ph;
export const userfn = new UserFn("John", 28, "M");
console.log(userfn);
// polyfill promise polyfill -> constructor function -> classes in js.

// ES6 -> in JS

class Product {
  msg;
  constructor(price, name, id) {
    this.name = name;
    this.log = [];
    this.id = id;
    this.price = price;
    this.msg = "Hello world";
  }

  get getProductDetails() {
    return `Product name is ${this.name} and price is ${this.price} with product code as ${this.id} and ${this.msg}`;
  }
  set setProductPrice(price) {
    this.price = price;
  }
  setProductDetails(name, price, id) {
    this.name = name;
    this.price = price;
    this.id = id;
  }
}

const product = new Product(1000, "Umbrella", "P01");

console.log(product.getProductDetails);
product.setProductPrice = 2000;
console.log(product.getProductDetails);
product.setProductDetails(4000, "Micorwave", "P20");
console.log(product.getProductDetails);

// Employee class that takes an array and that is list of employess with there salary, department, tenure, age, name

//polyfills ->Edge-E6, IE-E2, Safari-E7, chrome - ES7, firefox - E6, opera - E5
// map, forEach, filter, reduce, classes- ES6

const a = [1, 2, 3];
console.log(a.map((item) => item * 2));

let animal = {
  eats: true,
};
let rabbit = {
  jumps: true,
};

rabbit.__proto__ = animal;
console.log(rabbit.eats);
console.log(rabbit.__proto__);
const arr = [1, 2, 3, 4];
// polyfills
Array.prototype.map = function (cb) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(cb(this[i]));
  }
  return output;
};

// filter, promise.all, promise.any, promise.race, reduce, map, call, apply, bind

console.log(arr.map((f) => f * 2));

const engine = {
  chasisNo: "12345",
  registrationNo: "12455",
};

const Car = {
  __proto__: engine,
  color: "black",
  chasisNo: "2456",
  model: 2022,
  fuel: "petrol",
};
const Bike = {};
console.log(Car.chasisNo);

console.log(b);
const b = 10;

// Logical AND & logical OR
