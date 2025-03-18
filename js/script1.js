"use strict";

// let number = 5;
// const leftBorderWidth = 1; //camelCase

// number = 10;
// console.log(number);

// //Exercise 1:
// let userName = "John";
// let userNumber = 25;
// userNumber = 24;

// const obj = {
//   a: 50,
// };
// obj.a = 10;
// console.log(obj);

// //Hosting
// console.log(name);
// var name = "Ivan"; //var = let

// // //
// {
//   let result = 50;
// }

// console.log(result);

//10
// let number = 4.6;

// console.log(-4 / 0);
// console.log("string" * 9);

// const persone = "Alex lorem5";

// const bool = true;

// // console.log(something);

// let und;
// console.log(und);

// //Objects
// const obj = {
//   name: "John",
//   age: 25,
//   isMarried: false,
// };

// // console.log(obj.name)
// console.log(obj['name']);

// //Array
// let arr = ['plum.png', 'orange.jpg', 'apple.bmp', 6, {}, []];
// console.log(arr[6])

//11
// const arr = [1, 2, 3];

// arr[10] = "3456";

// console.log(arr);
// const obj = { a: 1, b: 2 };

// const arrObj = {
//   a: "a",
//   1: "b",
//   2: "c",
//   abc: {
//     df: [{}, {}],
//     def: {},
//   },
// };
// const b = "b";

// arrObj[b] = '1234'
// arrObj.b = "1234";
// !!! arrObj['b'] = "1234";

// console.log(arrObj.b);

//Exercise 2
// let storeName = "Shop";
// const storeDescription = {
//   budget: 10000,
//   employees: ["Anna", "Alex", "Anton"],
//   products: {
//     note: 200,
//     book: 300,
//   },

//   open: true,
// };

//12

// alert("Hello");
// const result = confirm("Are you here?");
// console.log(result);

// const answer = +prompt("Are you 18 yo?", "18");
// console.log(answer + 5);

// const answers = [];
// answers[0] = prompt("What is your name?", "");
// answers[1] = prompt("What is your lastname?", "");
// answers[2] = prompt("How old are you?", "");

// console.log(answers);
// console.log(typeof null);

// let arr = [1, 2, 3];
// console.log(typeof arr); // "object"

//13
// const category = "toys";

// console.log(`https://someurl.com/${category}`);

// const user = "name";

// alert(`Privet, ${user}`);

//14
// console.log(4 + +"5");

// let incr = 10,
//   decr = 10;

// // ++incr;
// // --decr;

// console.log(++incr);
// console.log(--decr);

// console.log(5 % 2);

// console.log(2 + 2 * 2 !== "6");

// const isChecked = false,
//   isCLose = false;

// console.log(isChecked || !isCLose);

//19
// if (4 == 9) {
//   console.log("ok!");
// } else {
//   console.log("error");
// }

// const num = 50;

// if (num < 49) {
//   console.log("error");
// } else if (num > 100) {
//   console.log("erorr2");
// } else {
//   console.log("ok");
// }

// (num === 50) ? console.log("ok") : console.log("error");
// 4 + 4 binarbyj argument
// 4 - 4 unarnyj argument

// const num = 50;

// switch (num) {
//   case 49:
//     console.log("nie ok");
//     break;
//   case 100:
//     console.log("nie ok");
//     break;
//   case 51:
//     console.log("ok");
//     break;
//   default:
//     console.log("nie okk");
//     break;
// }

//20

// const hamburger = 5;
// const fries = null;

// if (hamburger && fries) {
//   console.log("I'm ok");
// }

// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && "aaaa");

// if (hamburger === 3 && cola === 1 && fries) {
//   console.log("all");
// } else {
//   console.log("no");
// }

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if ((hamburger === 3 && cola === 2) || (fries === 3 && nuggets)) {
//   console.log("all");
// } else {
//   console.log("no");
// }
// console.log((hamburger === 3 && cola === 2) || (fries === 3 && nuggets));

// // let jhnReport,
// //   alexReport,
// //   samReport,
// //   mariaReport = "done";

// // console.log(jhnReport || alexReport || samReport || mariaReport);

// console.log(!0);

console.log(NaN || 2 || undefined); //2 !!
console.log(NaN && 2 && undefined); //NaN
console.log(1 && 2 && 3); //3
console.log((!1 && 2) || !3); //false
console.log(25 || (null && !3)); //25 !!
console.log(NaN || null || !3 || undefined || 5); //5
console.log(NaN || (null && !3 && undefined) || 5); //false !!
console.log((5 === 5 && 3 > 1) || 5); //true !

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//   console.log('Done!')
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger || cola || fries === 3 || nuggets) {
//   console.log('Done!')
// }

let hamburger; //undefined
const fries = NaN;
const cola = 0;
const nuggets = 2;

if ((hamburger && cola) || (fries === 3 && nuggets)) {
  console.log("Done!");
}
