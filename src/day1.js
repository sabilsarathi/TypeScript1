"use strict";
let userName = "Arun";
console.log(userName);
// 1.what is Type script?
// TypeScript is a superset of JavaScript that adds typing to JavaScript.
//what is a superset?
// javaScript+TypeScript feature = TypeScript
// the JavaScript program code work in TypeScript
// let fname = "megha"
// console.log(fname)
// but TypeScript allows us to add types
// let firstname:string  = "megha";
// console.log(firstname);
//why typescript?
// let age = 25; // age => number
//age = "twenty five"; // age => string
// javaScript is dynamically typed.
// this can cause problems in large application.
// for eg:-
//fuction calculatedAge(age){
// return age +5 ;
// }
// console.log(calculateAge("25")); // (here "25" +5 becomes string concatenation)
// TypeScript  helps catch this kind of mistake earlier.
//fuction calculateAge(age:number):number {
// return age +5;
// }
// console.log(calcualteAge(25))
// JavaScript                          |    typeScript
// dynamically typed                    | .ts file
//Browser can execute directly         | usually compiled/transpiled to javascript
// type checking happen mainly at runtime| type check happen during development/compiling
//easier to start                       | more structured for large applications
//fewer type annotations                | support type annotation
// Type script does not replace JavaScript insted:
// "typescript is javaScript with with addition feature, especially a type system"
// which is then transformed into JavaScript that run in environments such as browser,
// / which is then transformed in to javaScript that can run in environment such as browser
// main adv of type script
//1. static type checking
// let age : number = 25;
// this tells typescript :age should contain a number.
// age = "hello"; // this is incorrect;
// 2. better code completion
//  editors such as VS code can understand the type.
//  for example:
// let studentName :string ="Arun";
//when you type:
//    studentName:(the editor know that this is a string and can suggest string methods)
// 3. Easier debugging
// many errror can caught while writting the code instead of discovering then after the running the application
//4. better for large projects
//  typescript become particularly useful when appplication become large./
// this is one reason it commonly used with :
// React +typeScript
// 5. is typeScript a completely different language?
// no
// typescript includes javascript
// let x =10;
// if (x>5){
//     console.log("greater")
// }
// typeScript adds additional features such as:
//   let x:number = 10;
//   so:
//   javascript+type+additional TypeScript features = Typescript
// 6. how does TypeScript actually work?
// A: browser understand javaScript,
// A:browser does not normally execute typescript directly
// suppose we created:
// app.ts
// let age: number = 25;
// console.log(age);
//we cannot simply expect the browser to execute the type script syntax.
// instead, type
