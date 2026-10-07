// let username : string ="diya";

// The syntax is:
// let variableName : dataType = value;

//2. Type Annotation
//what is Annotation?
// type annotation means explicitly telling Typescript what 
//type of value a variable should contain.



let name : string = "Rahul";

let age : number = 20;

let isStudent : boolean = true;

console.log(name);
console.log(age);
console.log(isStudent);


// 3. Type Inference
// type inference doesn't always requires us to write the type.


let username = "diya";
let user_age = 21;


// console.log(username)

//typescript automatically understand:


// username -> string
// user_age -> number
//this is called type inference.


// example

let city ="kozhikode";

// typescript sees: "kozhikode" is a string, so it automatically infers that city is of type string.

// city ->string


//so;

//city = 123; //error


//4 type annotation vs type inference
// type annotation is explicitly telling typescript what type of value a variable should contain.
// type inference is when typescript automatically infers the type of a variable based on the value assigned to it. 

// explicit 

//let age: number = 25; // type annotation
// we explicitly tell typescript that age is of type number

//inference

//let age = 25; // type inference
// typescript automatically understand : age is number


// annotation = we tell typescript the type

// inference = typescript tells the type.


//5.let,const,and var
//let
//let age: number = 25;
age = 26;
// resign allowed

//const
//const country: string = "India";
//cannot reassign:
//country = "USA"; //error
// use const when the variable should not be reassigned.

//var
//var score: number = 100;
//it works, but in modern typescript/javascript,prefer using let and const instead of var, because var has some scoping issues.



//6.string

let firstName: string = "Rahul";
let lastName: string = "Kumar"; 

//or template literals `hello`
// template literals eg;

// let name: string = "Rahul";
// let age1: number = 25;
//console,log(`My name is ${firstName} ${lastName} and I am ${age1} years old.`);


//7. number
//typescript has one main numeric type;
//number
//exmple:
let age1: number = 25;
let price: number = 99.99; 
let temperature: number = -10;
    //all are numbers

//8. boolean
// boolean conatins only two values: true or false

//example:
let isloggedIn: boolean = true;
let isAdmin: boolean = false;


//9.array
//array can conatin multiple values of the same type.
//string array.
//let students: string[] = ["Rahul", "Kumar", "Diya"];
// 
// //number array
//let mark:number[] = [90, 80, 70];

       //    //boolean array
// let results: boolean[] = [true, false, true];

// Alternative Array Syntax..
// instead of:
// let students: string[] = ["Rahul", "Kumar", "Diya"];
// we can also write:
// let students: Array<string> = ["Rahul", "Kumar", "Diya"];


//10.array of objects
// let students:{name:string, age:number}[] = 

