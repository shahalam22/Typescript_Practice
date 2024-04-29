// console.log("Hello");


        // // Lecture 2

// const country = "I love Bangladesh";
// console.log(country);


        // // lecture 3

// // example - 1
// let playerName = "Shakib";
// console.log(playerName);

// playerName = 71;    // Error - Type 'number' is not assignable to type 'string'.
// console.log(playerName);

// // example - 2
// // Ei error hobe jokhon declare and define ek sathe kora hobe.
// // But declare ar define aladavabe korle kono error dekhabe na.
// let studentName;

// studentName = "Shakib";
// console.log(studentName);

// studentName = 71;  // No Error
// console.log(studentName);

// // example - 3
// function add(num1: number, num2: number) {  // ekhane number type bole na dile implicitely any type dhore kaj korto. jeta error dekhato
//     return num1 + num2;
// }

// console.log(add(5, 10));    // no Error
// console.log(add("5", 10));   // Error - Argument of type 'string' is not assignable to parameter of type 'number'.

// // example - 4
// let fruits = ["Apple", "Banana", "Orange"];

// fruits.push("Mango");   // No Error
// console.log(fruits);

// fruits.push(5);   // Error - Argument of type '5' is not assignable to parameter of type 'string'.
// console.log(fruits);

// // example - 5
// let mixed = ["apple", 5, true];

// mixed.push("Mango");   // No Error
// mixed.push(5);   // No Error
// mixed.push(true);   // No Error

// mixed.push({name: "Shakib"});   // Error - Argument of type '{ name: string; }' is not assignable to parameter of type 'string | number | boolean'.

// console.log(mixed);

// // example - 6
// let person = {
//     name: "Shakib",
//     age: 35,
//     isStudent: false
// };

// person.name = "Tamim";   // No Error
// person.name = 35;   // Error - Type 'number' is not assignable to type 'string'.
// person.country = 'Bangladesh';  // Error - Property 'country' does not exist on type '{ name: string; age: number; isStudent: boolean; }'.


        // // Lecture 4

// // example - 1
// let a: string;
// a = "Hello";    // No Error
// a = 5;  // Error - Type 'number' is not assignable to type 'string'.

// let b: number;
// b = 5;  // No Error
// b = "Hello";  // Error - Type 'string' is not assignable to type 'number'.

// // example - 2
// let a: string[] = [];    // array of string

// a.push("Hello");    // No Error
// a.push(5);  // Error - Argument of type '5' is not assignable to parameter of type 'string'.

// // example - 3
// let a: (string | number)[] = [];    // array of string or number. (string | number) Union of string and Number - means a array can contain string or number.

// a.push("Hello");    // No Error
// a.push(5);  // No Error

// console.log(a);

// let b: string | number;
// b = "Hello";    // No Error
// console.log(b);

// b = 5;  // No Error
// console.log(b);

// // example - 4
// let c: object;

// // schema bola nai tai amra ja iccha tai dite parbo ar schema jodi object declare korar sathe sathe define kore ditam tahole amra just oi schema onujayi object e data store korte partam.
// c = {name: "Shakib"};    // No Error
// console.log(c);

// c = {
//     name: "Tamim",
//     age: 35
// };    // No Error
// console.log(c);

// // schema diye declare -
// let d: {
//     name: string,
//     age: number
// };

// d = {name: "Shakib", age: 35};    // No Error
// console.log(d);

// d = {name: "Tamim", age: 35, country: "Bangladesh"};    // Error - Object literal may only specify known properties, and 'country' does not exist in type '{ name: string; age: number; }'.


        // // Lecture 5

// // example - 1
// let a: any;
// a = "Hello";    // No Error
// console.log(a);

// a = 5;  // No Error
// console.log(a);

// // example - 2
// let a: any[] = [];

// a.push("Hello");    // No Error
// a.push(5);  // No Error
// a.push(true);   // No Error
// a.push({name: "Shakib", age: 22});   // No Error

// console.log(a);

// // example - 3
// let a: {
//     name: any,
//     age: any
// };

// a = {name: "Shakib", age: 35};    // No Error
// console.log(a);

// a = {name: 35, age: "Shakib"};    // No Error
// console.log(a);


        // // Lecture 6

// // example - 1
// let myFunc: Function;

// myFunc = () => {
//     console.log("Hello");
// }

// myFunc();

// myFunc = 5;  // Error - Type '5' is not assignable to type 'Function'.

// // example - 2
// const myFunc = (a: string, b: string) => {
//     console.log(`Hello ${a} & ${b}`);
//     ;
// }

// myFunc("Shakib", "Tamim");   // No Error
// myFunc(5, 10);   // Error - Argument of type 'number' is not assignable to parameter of type 'string'.

// // example - 3   : optional parameter setting
// const myfunc = (a: string, b?: string) => {
//     console.log(`Hello ${a}`);
//     console.log(`Hello ${b}`);
// }

// myfunc("Shakib");    // No Error

// // example - 4   : default parameter setting
// const myfunc = (a: string, b: string = "Tamim") => {
//     console.log(`Hello ${a}`);
//     console.log(`Hello ${b}`);
// }

// myfunc("Shakib");    // No Error

// // example - 5   : return type setting
// const myfunc = (a: string, b: string = "Tamim"): void => {
//     console.log(`Hello ${a}`);
//     console.log(`Hello ${b}`);
//     return;  // No Error
//     // return a;   // Error - Type 'string' is not assignable to type 'void'.
// }

// myfunc("Shakib", "Al Hasan");    // No Error


        // // Lecture 7 - Type Aliases

// // example - 1
// const userDetails = (
//     id: string | number,
//     user: {
//         name: string, 
//         age: number
//     }
// ) => {
//     console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);    
// }

// const sayHello = (
//     user: {
//         name: string, 
//         age: number
//     }
// ) => {
//     console.log(`Hello ${user.age > 50 ? "Sir" : "Mr."} ${user.name}`);
// }

// // ekhane upore 2ta function lekha. 2ta tei user er jonno amader type checking bar kora lagse. Eita amra Type Aliases use kore 1bar ei korte pari.

// type stingOrNumber = string | number;
// type user = {
//     name: string, 
//     age: number
// };

// const userDetails = (
//     id: stingOrNumber,
//     user: user
// ) => {
//     console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);    
// }

// const sayHello = (
//     user: user
// ) => {
//     console.log(`Hello ${user.age > 50 ? "Sir" : "Mr."} ${user.name}`);
// }


        // // Lecture 8 - Function Signature

// // example - 1  : Function Signature
// let add: (a: number, b:number) => number;   // signature of add function

// add = (a, b) => {
//     return a + b;
// }

// // example - 2 
// let calculation: (a: number, b: number, c: string) => number;

// calculation = (a: number, b: number, c: string) => {
//     if(c === "add") {
//         return a + b;
//     }else if(c === "sub") {
//         return a - b;
//     }else if(c === "mul") {
//         return a * b;
//     }else {
//         return a / b;
//     }
// }

// console.log(calculation(5, 10, "add"));
// console.log(calculation(5, 10, "sub"));
// console.log(calculation(5, 10, "mul"));
// console.log(calculation(5, 10, "div"));

// example - 3
// let userDetails: (
//     id: number | string, 
//     user: {
//         name: string,
//         age: number
//     }
// ) => void;

// userDetails = (id, info) => {
//     console.log(`User id is ${id}, name is ${info.name} and age is ${info.age}`);
// }

// userDetails(1, {name: "Shakib", age: 35});
// userDetails("2", {name: "Tamim", age: "35"});   // Error - Argument of type 'string' is not assignable to parameter of type 'number'.


        // // Lecture 9 - Classes

// // example - 1
// class Player{
//     name: string;
//     age: number;
//     country: string;

//     constructor(n: string, a: number, c: string){
//         this.name = n;
//         this.age = a;
//         this.country = c;
//     }

//     play(){
//         console.log(`${this.name} from ${this.country} is playing`);
//     }
// }

// const shakib = new Player("Shakib", 32, "Bangladesh");
// console.log(shakib.country);
// console.log(shakib.age);
// shakib.play();

// const mashrafi = new Player("Mashrafi", 35, "Bangladesh");
// const mushfiq = new Player("Mushfiq", 32, "Bangladesh");

// // const mashrafi = new Player("Mashrafi", "35", "Bangladesh");    // Error - Argument of type 'string' is not assignable to parameter of type 'number'.

// const players: Player[] = [];
// players.push(shakib);
// players.push(mashrafi);
// players.push(mushfiq);

// console.log(players);


        // // Lecture 10 - Access Modifiers

// // upore lecture - 9 e define kora "Player" class er attributes gula public. Tai amra simply bahir theke call kore attributes gulo dekhte partechi. But amra eke nijeder icche moto private/public rakhte pari.
// // example - 1
// class Player {
//     private name: string;
//     private age: number;
//     private country: string;

// // private - only accessible within class
// // public - accessible from anywhere
// // protected - accessible within class and its child class
// // readonly - can only read the value can't change the value

//     constructor(n: string, a: number, c: string){
//         this.name = n;
//         this.age = a;
//         this.country = c;
//     }

//     // shortcut to merge constructor and attributes
//     // constructor(
//     //     private name: string, 
//     //     private age: number, 
//     //     private country: string
//     // ){}
//     // we only can use this shortcut if all of the attributes are declared with access modifiers.

//     play(){
//         console.log(`${this.name} from ${this.country} is playing`);
//     }
// }

// const shakib = new Player("Shakib", 32, "Bangladesh");
// // shakib.name = "mashrafi";   
// // console.log(shakib.name);   // Error - Property 'name' is private and only accessible within class 'Player'.
// shakib.play();


        // // Lecture 11 - Module System
// // example - 1
// // kichu configuration er kaj kora lagse tsconfig.json file e
// // "module": "commonjs" e "commonjs" er ekhane "ES2015"
// // "target": "es2016" e "es2016" er ekhane "ES6"
// // index.html file e script tag e type = "module" add korsi
// import { Player } from "./classes/player.js";

// const shakib = new Player("Shakib", 32, "Bangladesh");
// // shakib.name = "mashrafi";   
// // console.log(shakib.name);   // Error - Property 'name' is private and only accessible within class 'Player'.
// shakib.play();


        // // Lecture 12 - Inheritance
// // example - 1   : optional parameter setting
// interface RectangleOptions {
//     width: number,
//     length: number,
//     height?: number // optional parameter
// }

// function drawRectangle(options: RectangleOptions){
//     let width = options.width;
//     let length = options.length;
//     let height = options.height ? options.height : 0;
//     console.log(width);
//     console.log(length);
//     console.log(height);
// }

// drawRectangle({
//     width: 10,
//     length: 20,
//     height: 30
// });

// // example - 2
// interface RectangleOptions {
//     width: number,
//     length: number,
// }

// function drawRectangle(options: RectangleOptions){
//     let width = options.width;
//     let length = options.length;
//     console.log(width);
//     console.log(length);
// }

// // drawRectangle({  // Error - Property 'height' is missing in type '{ width: number; length: number; }' but required in type 'RectangleOptions'.
// //     width: 10,
// //     length: 20,
// //     height: 30
// // });

// // but

// let TDoptions = {
//     width: 10,
//     length: 20,
//     height: 30
// }

// drawRectangle(TDoptions);   // No Error

// //this happened because when we are providing options as an object, it is not checking the type of the object. But when we are providing the object directly, it is checking the type of the object. As it get one parameter that doesn't match with Interface RectangleOptions, it shows an error.
// // but in TDoptions, it passed the reference of the TDoptions, it doesn't cared about extra parameters, It's only cared about the parameters that are defined in the interface. If gets all the parameters then OK, otherwise it will show an error.

// // example - 3  :  interface for class
// // interface defined in the src/interface folder
// import { Player } from "./classes/player.js";
// import { IsPlayer } from "./interfaces/isPlayer";

// let shakib: IsPlayer;
// shakib = new Player("Shakib", 32, "Bangladesh");
// shakib.play();

// const mashrafi = new Player("Mashrafi", 35, "Bangladesh");

// const players: IsPlayer[] = [];

// players.push(shakib);
// players.push(mashrafi);

// console.log(players);


        // // Lecture 13 - Generics

// // example - 1
// const addID = <T extends object>(obj: T) => {      // "extends object" bole na dile just ekta string pathaileo oitake generics hisebe shore ney. Tai T extends object bole diyechi
//     let id = Math.floor(Math.random() * 100);
//     return {...obj, id};
// }

// let user = addID({
//     name: "Shakib",
//     age: 35,
//     country: "Bangladesh"
// });

// console.log(user);
// // 466 line ta "const addID = (obj: object) => {" emon hole, mane generics use na korle nicher line e error dibe
// // console.log(user.name);  // Error - Property 'name' does not exist on type 'object'. Ei error deyar karon TSC jane na "obj" te user ki ki value pathaitese. But ekhane generics use korle generics er maddhome amra ta jante pari.

// console.log(user.name); // No Error
// console.log(user.age);  // No Error

// // example - 2   : interface e generics
// interface APIResponse<T> {
//     status: number,
//     type: string,
//     data: T
// }

// const response1: APIResponse<object> = {
//     status: 200,
//     type: "good",
//     data: {
//         name: "Shakib",
//         age: 35
//     }
// }

// const response2: APIResponse<string> = {
//     status: 200,
//     type: "good",
//     data: "test"
// }


        // // Lecture 14 - Enums

// // example - 1
// enum RType { SUCCESS, FAILURE, UNAUTHENTICATED, FORBIDDEN };

// interface APIResponse<T> {
//     status: number,
//     type: RType,
//     data: T
// }

// const response: APIResponse<string> = {
//     status: 200,
//     type: RType.SUCCESS,
//     data: "test"
// }

// console.log(response);


        // // Lecture 15 - Tuples

// // example - 1
let a = ["apple", 5, true];

a[0] = false;
a[1] = "banana";
a[2] = 100;
// ekhane amra ek type er jaygay onno type er value boshaite pari.
// but tuples er khetre ta kora possible na. jei position e jei type er value thakbe oi position e oi type er value diyei replace kora lagbe

let b: [string, number, boolean] = ["apple", 5, true];

// b[0] = 6;   // Error - Type '6' is not assignable to type 'string'.
// b[1] = "banana";   // Error - Type '"banana"' is not assignable to type 'number'.

// // array er sob method kaj kore tuples e. But we won't use it. Because ogula use korle error ashbe must karon amader tuple er structure venge jabe.