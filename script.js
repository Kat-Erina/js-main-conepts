// es 1 gamoyeneba
// "use strict";
let personObj = {
  name: "Kato",
  age: 30,
  sayHello: function () {
    return `${this.name} is ${this.age} years old`;
  },
};

let rati = {
  name: "Rati",
  age: 33,
};

// console.log(personObj.sayHello());
// console.log(personObj.sayHello.call(rati));
// console.log(personObj.sayHello.apply(rati));

globalThis.globProp = "Wisen";

function display() {
  console.log(`globProp value is ${this.globProp}`);
}

// display.call(); igivea rac display.call();
console.log(this);

// mesame magaliti
// function printSth() {
//   console.log(this);
// }

// printSth.call(personObj);
// printSth(); undefined

//meore use case qvemot
const sisterObj = {
  name: "Natia",
  age: 33,
};

function useAsMethod() {
  console.log(`${this.name} is ${this.age} years old`);
}

// useAsMethod.call(); arafers gvadzlevs

useAsMethod.call(sisterObj);
// useAsMethod.apply(sisterObj);

// mesame usecase;

function tellSth(city, country) {
  return `${this.name} is ${this.age} years old and lives in ${city}, ${country}`;
}

// console.log(tellSth.call(sisterObj, "Berlin", "Germany"));
console.log(tellSth.apply(sisterObj, ["Berlin", "Germany"]));

// bind()

let testPbj = {
  name: "Valeri",
  city: "Tbilisi",
  familityStatus: "single",
};

let testPbj2 = {
  name: "Nugo",
  city: "Tbilisi",
  familityStatus: "single",
};

function tellMeMore(spouse, children) {
  return `${this.name} is living in ${this.city} and is ${this.familityStatus}, he has ${spouse} and ${children} children`;
}

// console.log(tellMeMore.call(testPbj, 0, 0));
// console.log(tellMeMore.apply(testPbj, [0, 0]));

let boundFunction = tellMeMore.bind(testPbj, 1, 3);
console.log(boundFunction());
// let boundFunction2 = boundFunction.bind(testPbj2, 1, 5);
// console.log(boundFunction2());

function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2);
console.log(double(5));
console.log(double(50));

//exercise

let book = {
  title: "1984",
  author: "John Orwell",
};
let book2 = {
  title: "Animal Farm",
  author: "John Orwell",
};

// function getInfo() {
//   console.log(`${this.title} was written by ${this.author}`);
// }

// getInfo.call(book);

function getInfo2(year) {
  console.log(
    `${this.title} was written by ${this.author} and was released in ${year}`
  );
}
getInfo2.apply(book, [1993]);
// let secondFunction = getInfo2.bind(book2);
// secondFunction(1996);
// da asec sheidzleba
let secondFunction = getInfo2.bind(book2, 1996);
secondFunction();

// Udemy Exercise

let result1 = function calcluateVat(rate) {
  return function calc(value) {
    return rate * value;
  };
};

let result2 = result1(3);
let result3 = result2(10);
console.log(result3);

// making the same with bind method.

function calculateTotal(qnt, price) {
  return qnt * price;
}

let calculateTotal2 = calculateTotal.bind(null, 10);
console.log(calculateTotal2(30));

// challenge

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: Js", "1: C++", "2:Rust", "3:C#"],
  answers: new Array(4).fill(0),
  registerAnswer: function () {
    let num = Number(
      prompt(
        `${this.question}\n ${this.options.join("\n")}\n Write option number`
      )
    );
    num >= 0 && num <= 3 && this.answers[num]++;
    console.log(this.answers);
    this.displayResult("");
  },
  displayResult: function (type = "array") {
    if (typeof type === "array") {
      console.log(this.answers);
    } else console.log(`Results are ${[...this.answers]}`);
  },
};

document
  .querySelector(".btn")
  .addEventListener("click", poll.registerAnswer.bind(poll));

let data1 = {
  answers: [5, 2, 3],
};

let result5 = poll.displayResult.call(data1);
// console.log(result5);

// Functions

function giveMeTotal(qnt = 2, price) {
  console.log(qnt * price);
}

// giveMeTotal(undefined, 50);

// passing arguments to Functions

const age = 30;
const testPerson = {
  name: "Katerina",
  age: 30,
};

function checkTypes(first, second) {
  // first = "Matilda";
  // console.log(first);
  second.age = 50;
  console.log(second);
}

// checkTypes(undefined, testPerson);
// console.log(testPerson.age);

// Higher Order Function
function changeFirstWord(str) {
  let [firstWord, ...restWords] = str.split(" ");
  return (letNewString = [firstWord.toUpperCase(), ...restWords].join(" "));
}

function hiherFunction(str, fn) {
  console.log(`string will be trasnformed by ${fn.name}`);
  return fn(str);
}

// console.log(hiherFunction("me miyvars nugzari", changeFirstWord));

//
// Returning Dunctions

// function sum(a) {
//   return function sum2(b) {
//     return function sum3(c) {
//       return a * b * c;
//     };
//   };
// }

// igive function arrow functionali
let sum = (a) => (sum2 = (b) => (sum3 = (c) => a * b * c));

let res1 = sum(2)(3)(5);
// let res2 = res1(5);
// let res3 = res2(7);
// console.log(res3);
console.log(res1);

// IIFE

(function () {
  console.log("kcbjcbj");
})();

{
  var mama = "Mamama";
}

{
  let mama = "Mamama";
}

console.log(mama);

//Closure

let name3 = "Nodo";

function checkTest() {
  let name3 = "Ormoi";
  return function mama() {
    return (name3 = "Maka");
  };
}
let test10 = checkTest();
test10();
// console.log(checkTest()());
// console.log(name3);
// console.dir(test10); - amit vxedavt closures scope propertyshi

// meore magaliti

let f;

function test() {
  const a = 40;
  // let f; es rom ase yofiliyo , 50 gamoioanda f konsolshi
  return (f = function () {
    return a * 2;
  });
}

console.log(test()());
// console.log(f);

// challenge

(function () {
  let h1 = document.querySelector("h1");
  h1.style.color = "red";
  document.querySelector("body").addEventListener("click", () => {
    console.log("kjbkb");
    h1.style.color = "blue";
  });
})();
