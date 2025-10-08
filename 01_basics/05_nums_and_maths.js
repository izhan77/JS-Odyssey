// A simple number (primitive type)
const score = 400;
// console.log(score); // 👉 Output: 400

// Creating a Number object explicitly using the Number constructor
const balance = new Number(100);
// console.log(balance); // 👉 Output: [Number: 100]
// Note: Usually, we use primitive numbers like 100 instead of Number objects.
// Number objects are rarely needed in modern JS.

// Convert number to string
// console.log(balance.toString().length); 
// 👉 Converts 100 → "100" → Then checks length (3)

// Formats number to a fixed number of decimal places
// console.log(balance.toFixed(2)); 
// 👉 Output: "100.00"
// Commonly used in billing, currency formatting, etc.

const otherNumber = 1123.8966;
// console.log(otherNumber.toPrecision(3)); 
// 👉 Output: "1.12e+3" (scientific notation)
// toPrecision() keeps the *total number of significant digits*,
// not just after the decimal. Try .toPrecision(5) to see the difference.

const hundreds = 1000000;
// console.log(hundreds.toLocaleString()); 
// 👉 Output (US locale default): "1,000,000"
// Adds commas or locale-based separators automatically.
// For example, you can do .toLocaleString('en-IN') → "10,00,000"

// ------------------ Maths ------------------

// console.log(Math); // 👉 Built-in Math object with many static methods.

// console.log(Math.abs(-4)); 
// 👉 Converts negative to positive → 4

// console.log(Math.round(4.7)); 
// 👉 Normal rounding → 5 (rounds up if >= .5)

// console.log(Math.ceil(4.2)); 
// 👉 Always rounds *up* → 5

// console.log(Math.floor(4.7)); 
// 👉 Always rounds *down* → 4

// console.log(Math.min(4,3,8,5)); 
// 👉 Smallest number → 3

// console.log(Math.max(4,3,8,5)); 
// 👉 Largest number → 8

// ------------------ Random Numbers ------------------

// Math.random() gives a random decimal between 0 (inclusive) and 1 (exclusive)
console.log(Math.random()); 
// Example output: 0.37482936

// Multiply by 10 → random decimal between 0 and 10
console.log(Math.random() * 10); 
// Example output: 3.7482936

// Math.floor() removes decimal part
// +1 ensures the range becomes 1–10 instead of 0–9
console.log(Math.floor(Math.random() * 10) + 1);
// Example output: 7

// ------------------ Random Numbers in a Range ------------------

const min = 10;
const max = 20;

// Formula: Math.floor(Math.random() * (max - min + 1)) + min
// Step-by-step:
// 1️⃣ (max - min + 1) → Range size (here: 11 → numbers from 10–20)
// 2️⃣ Math.random() * range → Scales random number to that range
// 3️⃣ Math.floor() → Converts decimal to whole number
// 4️⃣ + min → Shifts range start from 0 to desired min (10)
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// 👉 Generates random integer between 10 and 20 (inclusive)
