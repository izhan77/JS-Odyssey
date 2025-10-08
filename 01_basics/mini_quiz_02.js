/*

Q1. What will be the output of this code and why?

console.log(a);
var a = 5;
let b = 10;
console.log(b);

Why ? 

-> Temporal Dead Zone ( TDZ ) like basically when this code is parsed at Javascript runtime : 

What we see : 
console.log(a);
var a = 5;
let b = 10;
console.log(b);

-> When a variable is printed without declaring, in case of var it be default gets value of undefined at the start

What JS see :
var a; // a = undefined
console.log(a); // undefined
a = 5; // a = 5
let b = 10;
console.log(b); // 10

*/


/*

Q2. What’s the difference between these three declarations?

const x = 10;
let y = 20;
z = 30;

Explain how each behaves inside and outside a function.

-> const and let are different ways to declare a variable in JS. 
by using const, you cannot reassign value in const, it does not let u to reassign
by using let, it lets you reassign value in let variable

but in case of z = 30;
there is no error but assigning value to variable without declaring, becomes a global variable
e.g : in browser, global object is windows
so console.log(windows.z) will give 30;

not recommended in ES6 onwards in mordern JS. 

// function test(){
//     const a = 5;
//     console.log(a);
// } since const is block-scoped not function scoped so if variable a is accessed outside block will give Reference Error

// test();
// console.log(a);


// function test1(){
//     let a = 6;
//     console.log(a);
// } since let is block-scoped not function scoped so if variable a is accessed outside block will give Reference Error

// test1();
// console.log(a);

// function test2(){
//     a = 8;
//     console.log(a);
// } assigning a without declaration becomes a global variable which then can be accessed anywhere in anyscope

// test2();
// console.log(a);

*/

/*

Q3. What happens if you try to reassign a const variable to a new value? Can you modify properties of a const object? Give examples.

const a = 5;
a = 4;

console.log(a);

it will give me type error -> Assignment to constant variable if i try to resassign a value in variable declared with const 

idk about modifying properties like i didnt get it what u said

*/

/*

Q4. Predict the output and explain step by step:

console.log(Number("33abc"));
console.log(typeof Number("33abc"));
console.log(Number(null));
console.log(Number(undefined));
console.log(Number(false));
console.log(Number(true));

-> console.log(Number("33abc"));
this will give NaN -> because converting an invalid string with mix numbers and string will confuse JS which will result in NaN

-> console.log(typeof Number("33abc"));
this will give Number as a type

-> console.log(Number(null));
this will give 0 because null is basically nothing / an intentional absence value 

-> console.log(Number(undefined));
this will give NaN because Number type conversion cant convert an 

-> console.log(Number(false));
this will give 0 because boolean false = 0

-> console.log(Number(true));
this will give 1 because boolean true = 1

*/

/*

Q5. What’s the output and why?

let x = "5";
let y = 10;
console.log(x + y);
console.log(x - y);

-> console.log(x+y) will give 510
because when there is + operator and one of the operand is string so JS use type coersion to concatenate it by converting second operand to string it is like console.log(x + String("y"));

-> console.log(x-y) will give -5
because other operators like - / * performs arithematic operation only like
console.log(Number(x) - y);
 


*/

/*

Q6. Why does typeof null return "object"? Explain historically and conceptually.

-> Back in 1995 when JS was first created by Brenden Eich in just 10 days. In that old system values in JS were represented as "tags" with a small type identifier. 

e.g:
Numbers had one tag -> binary value [002]
Strings had one tag
Objects had another

So in that old system null was given the same tag as objects because developers thought null as an "empty object reference", so when we type typeof null, so JS sees that same tag of null as in object and returns object

*/

/*

Q7. What will be logged here?

let score = "100";
let result = score / "2";
console.log(result); 
console.log(typeof result);

-> console.log(result) = 50;
-> console.log(typeof result); = number

*/

/*

Q8. What’s the difference between the following?

const str1 = "Hello";
const str2 = new String("Hello");
console.log(str1 === str2);

Why?

-> const str1 = "Hello" , this is a primitive string data type 
-> const str2 = new String("Hello") , this is a non-primitive object string data type
str1 === str2 will result false bcz String != Object

*/

/*

Q9. Predict the output and explain:

let gameName = "Izhan77";
console.log(gameName.slice(-4, 6)); // an7
console.log(gameName.substring(-4, 6)); // Izhan77

-> In slice, negative index starts opposite counting indexing 
In substring, negative indexing is not supported and starts from 0

*/

/*

Q10.
Write a one-liner that:

Takes " JavaScript Mastery "
Removes all extra spaces from start & end
Converts it to lowercase
Then logs → javascript mastery

-> console.log(" JavaScript Mastery ".trim().toLowerCase());

*/

/*

Q11.
Using template literals, print:
My name is Izhan and I scored 95 marks in JS.
using variables.

-> const name = "Izhan";
const marks = 95;

console.log(`My name is ${name} and I scored ${marks} in JS.`)

*/

/*

Q12.
Predict the output:

console.log(Math.floor(Math.random() * 10) + 1);

What range of numbers can this produce?
Explain the role of each function.

-> 1-10
Math.random() : generates random number between 0 and 1
Math.floor() : round off the number to previous value like 4.7 in Math.floor(4.7) = 4
console.log() : to print on terminal

*/

/*

Q13. Write a one-liner that gives a random integer between 50 and 100 (inclusive).

-> Math.floor(Math.random() * (max - min + 1) + min);

*/

/*

Q14.
What’s the output and why?

let num = new Number(123);
console.log(typeof num);
console.log(num === 123);

-> let num = new Number(123);
console.log(typeof num); // Object
console.log(num === 123); // false
 because 123 = number -> primitive data type
 Number(123) = object -> non-primitive data type
 therefore Object != number 

*/

/*

Q15.
Explain difference between:

toFixed(2)
toPrecision(3)
with examples.

-> toFixed ensures the decimal places 
e.g: let num = 123.4567;
    console.log(num.toFixed(2)) // 123.46

-> toPrecision ensures the number of significant digits
e.g: let num = 0.00583;
    console.log(num.toPrecision(3)) // 583

*/

/*

Q16. const date = new Date(2025, 0, 15);
console.log(date.toDateString());

-> wed 2025-January-15

*/

/*

Q22.
Can you explain why Math.random() never returns 1, and how you could modify it to include 1 in the range?

-> because Math.random() generates random number between 0 inclusive and 1 exclusive. So in order to include 1 we need to increase range by adding 1

*/



















