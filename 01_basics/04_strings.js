/*

Strings are one of the most commonly used data types in JavaScript. They are used to represent text and can be handled in multiple ways.

1. String Concatenation vs Interpolation :

const name = "Izhan"
const repoValue = 50;

console.log(name + repoValue + " Value") // Wrong/old style
console.log(`${name}${repoValue} Value`) // Right (Template Literals)


Using + for concatenation works, but it’s messy and hard to read for long strings.
Backticks (`) allow Template Literals → easy string building.
Syntax: `${variable} text here`
Cleaner and supports multi-line strings.

👉 Always prefer template literals in modern JavaScript.

2. String Object vs Primitive String :

const gameName = new String("Izhan77")

"Izhan77" → primitive string
new String("Izhan77") → creates a String object

Both behave similarly, but String object has extra properties and methods.

console.log(gameName[0]) // I
console.log(gameName.__proto__) // shows all methods like charAt, slice, etc.
__proto__ reveals all functions available on string objects → because in JS, even primitive strings temporarily behave like objects (thanks to “autoboxing”).

3. String Properties & Methods :

🔹 Length
console.log(gameName.length) // 7
.length gives number of characters.

🔹 charAt()
console.log(gameName.charAt(2)) // h
Returns character at specific index.

🔹 indexOf()
console.log(gameName.indexOf('a')) // 3
Returns first occurrence of a character.
If not found → returns -1.

🔹 substring()
const newString = gameName.substring(0,4);
console.log(newString); // Izha
Extracts part of a string.
substring(start, end) → includes start, excludes end.
Negative values are treated as 0.

🔹 slice()
const newSlice = gameName.slice(-8,4)
console.log(newSlice); // Izha
Similar to substring(), but supports negative indexes (counts from end).
Very useful for trimming from the right.

🔹 trim()
const newStringOne = "      izhan.     "
console.log(newStringOne.trim()) // "izhan."
Removes extra spaces (only from start & end, not in between).
Great for cleaning user input.



❓ Q1: What’s the difference between primitive string and new String() object?

✅ Primitive:

let str = "Hello"
console.log(typeof str) // string


✅ Object:

let strObj = new String("Hello")
console.log(typeof strObj) // object

Use primitive strings in most cases. String objects can cause confusion in comparisons (===) -> Objects bring unnecessary complexity in equality checks


❓ Q2: Difference between substring() and slice()?

substring() → negative indexes become 0.
slice() → negative indexes count from the end.

"Hello".substring(-2, 4) // "Hell"
"Hello".slice(-2, 4)     // "l"

❓ Q3: Why does " hello ".trim() not remove middle spaces?

Because .trim() only removes leading and trailing whitespace, not spaces in between. For middle spaces, you’d need .replace(/\s+/g, "").

❓ Q4: Are strings mutable in JavaScript?

No. Strings are immutable.

"Izhan"[0] = "i" → won’t work.

If you want a modified string, you must create a new one.

❓ Q5: Why does __proto__ show so many methods?

Because JavaScript uses prototypes.

All string objects inherit methods (like slice, split, toUpperCase) from String.prototype.

📌 Summary

Use template literals (`${}`) → modern, clean string handling.
Strings in JS are immutable but come with many built-in methods.
substring() vs slice() → know the difference in negative indexes.
.trim() is for cleaning input.
Primitive strings are enough; avoid new String().


*/