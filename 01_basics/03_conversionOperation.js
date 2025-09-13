/*

JavaScript is a dynamically typed language → meaning you don’t need to declare variable types. A variable can hold a number one moment, and later a string.
But sometimes, JS converts values between types automatically (called type coercion) or when you do it manually (explicit conversion).

-> Example 1: '33abc'

let score = '33abc'
console.log(typeof score); // string
let valueInNumber = Number(score);
console.log(typeof valueInNumber); // number
console.log(valueInNumber); // NaN

- '33abc' looks like a number at the start, but because it has non-numeric characters (abc), JS fails to parse it.
- Result: NaN → means Not a Number.
- Type is still number (weird, right?). That’s how JS works: NaN is a special numeric value inside the number type.

-> Example 2: null

let score = null
console.log(typeof score); // object (weird historical bug)
let valueInNumber = Number(score);
console.log(typeof valueInNumber); // number
console.log(valueInNumber); // 0

- null represents "nothing" or "empty value".
- When converted to a number → it becomes 0.
- This is a rule in JS type conversion.

-> Example 3: undefined

let score = undefined
console.log(typeof score); // undefined
let valueInNumber = Number(score);
console.log(typeof valueInNumber); // number
console.log(valueInNumber); // NaN

- undefined means "not assigned at all".
- When converted to number → JS has no meaningful numeric representation → results in NaN.

-> Example 4: 'izhan'

let score = 'izhan'
console.log(typeof score); // string
let valueInNumber = Number(score);
console.log(typeof valueInNumber); // number
console.log(valueInNumber); // NaN

- A string without numbers can’t be converted.
- Result → NaN.



🚀 Deep Dive: NaN (Not a Number)

-> What is NaN?
   - NaN is a special numeric value in JavaScript that represents an invalid number.
   - Type of NaN is still number (confuses many beginners).

-> When do we get NaN?
    - Converting invalid strings to numbers (Number("33abc"))
    - Dividing 0/0
    - Math operations on non-numeric values (Math.sqrt(-1))


-> Fun Facts

- NaN is not equal to itself:
    console.log(NaN === NaN); // false
    Because JS treats every NaN as a unique "invalid number".

- To check if something is NaN, use:
    isNaN(value); // true/false
    Or better → Number.isNaN(value) (stricter).

*/

