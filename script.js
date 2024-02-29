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

giveMeTotal(undefined, 50);
