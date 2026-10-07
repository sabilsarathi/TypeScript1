// arrays,tuple&enums
// 1.arrays in typescript

// an array stores multiple values of the same type in a single variable.

//JS

let num = [1, 2, 3, 4, 5];
// IN TS:

let num1: number[] = [1, 2, 3, 4, 5];

//2 . string array

let studentNames: string[] = ["Rahul", "Arun", "Meera"];


// access values using index number:

console.log(studentNames[0]); // Rahul
console.log(studentNames[1]); // Arun




// 3.another way to define arrays
// typescript provides another syntax

let numbers: Array<number> = [1, 2, 3, 4, 5];

// both are equal


// 4. type safety in arrays

let mark:number[]=[80,75,90];
mark.push(95);


// mark.push ("100");// raise error



5. //array method

// normal js array methods work in ts


//1.push()

// adds an element

let numbers: number[]= [10,20,30];
numbers.push(40);
//console.log(numbers);





// 2.pop()
//remove the last element

numbers.pop();



// 3.shift()
//remove first element


numbers.shift();

//4. unshift()
// adds an element to the beginning
numbers.unshift(5);


// 6. for of with Arrays

let stud:string[]=["rahul","arun","meera"];

for (let s of stud){
    console.log(s)
}

// 7.map() in ts

let numbers:number[]=[1,2,3,4,5];
let modified:number[]=number.map(
    (num:number):number =>{         // num fn name number value :get value
        return num*2;
    }
);
console.log(modified);


// 8.filter() in ts

let numbers:number[]=[10,20,30,40];


let result:number[] = number.filter(
    (num:number):boolean =>{
        return num >20;
    }
);


// 9 readonly arrays


const num:readonly number[]=[10,20,30];
numbers.push(40);


//10 mixed type array  //to add string and no 


let data:(string|number)[]=[
    "rahul",
    24,
    "python",
    100
    
];

data.push(true); // not possible bez true not here bolen true or false



//11 tuples

//a tuple is different from a normal array.

//a tuple allows us to specify: the exact number and order of element.

//example:

let student: [string,number]=[
    "rahul",22
];

console.log(student[0]);  // return string.
console.log(student[1]);  // return number

// 12.tuple example 

let employee:[string,number,string]=["miya",23,"developer"];

// 13.array vs tuple
//array can have any number of elements of the same type, whereas a tuple has a fixed number of elements of different types.
//array
let numbers:number[]=[1,2,3,4,5];
// number of elements can vary

// tuple
let student:[string,number]=[
    "rahul",22]; 



//comparison between array and tuple

// Array	                                 Tuple
// Multiple values of a type	        Fixed structure
// Number of elements can vary	        Fixed positions
// number[]                         	[string, number]
// Same general type	                Can have different types 




//14 optional tuple elements

// a tuple can have optional element ? not need this but you can


let s:[string,number,string];

s=["rahul",22];
s=["rahul",22,"python"]



// 15. named tuples

let student_details:[
    name:string,
    age:number,
    course:string
] =[
    "rahul",
    22,
    "python"
];

// 16. Enums
// An enum is used to define a set of named choices

// For example:
enum Direction {
    North,
    South,
    East,
    West
}

console.log(Direction.North);
console.log(Direction.South);


// 17. Numeric enum (takes default values)

enum Status {
    Pending,
    Approved,
    Rejected
}

let currentStatus: Status = Status.Pending;
console.log(currentStatus);


// Numeric enum with assigned values

enum Status2 {
    Pending = 1,
    Approved = 2,
    Rejected = 3
}

console.log(Status2.Approved);


// 19. String enum

enum Role {
    Admin = "ADMIN",
    User = "USER",
    Developer = "DEVELOPER"
}

let userRole: Role = Role.Developer;
console.log(userRole);


// 21. Enum with function

// We can pass an enum to a function

enum UserRole {
    Admin = "ADMIN",
    User = "USER",
    Tester = "TESTER"
}

function checkRole(role: UserRole): void {
    console.log(`Current role: ${role}`);
}

checkRole(UserRole.Tester);