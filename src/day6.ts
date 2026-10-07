// what is generic?
//generics allow us to create reusable code that work
// different data types without losing type safety.

// why do we need generic ?

function getNumber(value:number):number{
return value;
}


// it works only with number.
// console.log(getNumber(10));

//but what if we want to pass a string ?
console.log(getNumber("Hello"));

// we could create another function;

// we could create another function:
function getString(value:string):string{
    return value;
}

// this create duplicate code . generic solve this problem.
// Basic generic syntax
//syntax:

//function functionName<T>(value:T):T{
// return value;}

//<T> is a type parameter used to represent Type.

//Generic Function

// Generic Function

function identity<T>(value:T):T{
    return value;
}

// now the same function can work with different type.

//number

let result = identity<number>(100);
console.log(result);

// string

let result2 = identity<string>("hello");
console.log(result2);

// one function work with  multiple type



// Understanding <T>
// function identity<T>(value: T): T
// <T> → creating a type parameter
// value: T → parameter can be any type
// : T → return value will be the same type


//6. generic type inference

// instead of:
//let result = identity<number>(100);

// we write:
let result = identity(100);

// typescript automatically understand :T = number

let name = identity("Diya");
let status = identity(true);

// this is called type inference.

// usually prefer
//identity(100);

// instead of:
//identity<number>(100);

// we can Typescript can infer type correctly.
//7. generic function with arrays
// generic are very useful with arrays.



// Entire array
function getArray<T>(items: T[]): T[] {
    return items;
}

let Arr = getArray([10, 20, 30]);
console.log(Arr);

function getFirst<T>(items: T[]): T | undefined {
    return items[0];
}

// number array 
let firstNumber = getFirst([10,20,30]);
console.log(firstNumber);


// string array

let firstName = getFirst(["john","devi","alex"]);

console.log(firstName);

// why not use any?


// example:

// function getFirst(items:any[]):any{
// return items[0];
// }

// this work, but it loses type safety.

// for eg:
//let result = getFirst ([10,20,30]);

// bez the return type is any , typescript doesn't know that result is a number.

// with generics:

// function getFirst<T>(items:T[]):T{
// return items[0];
// }

// TypeScript knows:
// number[] → number
// string[] → string
// boolean[] → boolean

// Important difference

// any	
// Loses type safety	
// Flexible	
// Type information is lost	
// Less safe	
// Avoid when possible	

// Generics
// Maintains type safety
// Flexible
// Type information is preserved
// More safe
// Recommended for reusable typed code

// 9. generic function with multiple parameters

// we can use multiple type parameter

function pair<T, U>(first:T, second:U){
    return{first,second};
}

//usage:
let resultt = pair("Age",23);
console.log(resultt)


// another example:

// let result2 = pair(10,true);
// console.log(result2)

//10. generic arrow functions

 const identity = <T> (value:T):T => {
    return value;
};

//usage :

console.log(identity(100));
console.log(identity("hello"));
console.log(identity(true));


// 11. generic with objects

// suppose we have:
function printData<T>(data:T):T{
return data;

}


// we pass an object:

const student = {
    name:"rah",
    age:22
};

let res = printData(student);
console.log(res);
console.log(res.age);

//12. generic interfaces


// generic can also be used with interfaceses

// example :

interface Box<T>{
    value:T;
}

// now we can create different type of boxes
// number box

let numberBox:Box<number> ={
    value:100
};

console.log(numberBox)


// string box 

let stringBox :Box<string> = {
    value:"hello"
};

console.log(stringBox)


// the same interface can work with differnt type


// 13. generic type Alias

// generic also work with type.

type ResponseData<T> = {
    data: T ;
    status:number;
};

// now :
let userResponse: ResponseData<string> = {
    data:"User Data",
    status:200
};




let numberResponse: ResponseData<number> ={
    data:100,
    status:200
};

console.log(numberResponse)


// 14 . Generic with Objects

//consider an API response may look like:
//{
// data:...
// status:200
// }

// but data can be different type

// for eg:

interface ApiResponse<T>{
    data:T;
    status:number;
}


// user response

interface UserP{
    id:number;
    name:string;
}

const response:ApiResponse<User> = {
    data:{
        id:1,
        name:"rah"
    },
    status:200
};

// now 
console.log(response.data.name);

// typescript know that:
// response.data is a userResponse
// generic vs union

// union


// function print(value: string|number){
//consol,e.log(value);
// }

// it means:

// the value can be either string or number.

// generic 
// function identity <T>(value:T):T {
// return value;
//

// }

//it means : what ever type come in , preserve that same type

//for ex:

// For example:
// let result = identity(100);

// let result1 = identity("Hello");

// Key difference
// Union	
// Allows predefined types	
// string | number	
// Good for alternatives

// Generic
// Works with many types
// T
// Good for reusable code



// 24. Example -- reusable API response

interface ApiResponse<T> {
    data: T;
    status: number;
    message: string;
}

// User

interface User {
    id: number;
    name: string;
}

// Product

interface Product {
    id: number;
    name: string;
    price: number;
}

// User response

const userResponse: ApiResponse<User> = {
    data: {
        id: 1,
        name: "rah"
    },
    status: 200,
    message: "success"
};

// Product response

const productResponse: ApiResponse<Product> = {
    data: {
        id: 1,
        name: "apple",
        price: 100
    },
    status: 200,
    message: "success"
};




//  Exercise 1 – Generic Identity
//  Create:
//  function identity<T>(value: T): T

//  Test it with:
//  - number
//  - string
//  - boolean








function identity<T>(value: T): T {
    return value;
}

let numberResult = identity(100);
console.log(numberResult);

let stringResult = identity("Hello");
console.log(stringResult);

let booleanResult = identity(true);
console.log(booleanResult);