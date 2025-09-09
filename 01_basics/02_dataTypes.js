/*

1. "use strict";
   - This line tells JavaScript to run in "modern mode".
   - It helps you avoid old coding mistakes and follow newer standards.
   - Example: without strict mode, you could create a variable without declaring it.

   Example:
   myVar = 10; // works in old JS (not safe)
   "use strict";
   myVar = 10; // ❌ Error: must declare variable first (safer)

2. JavaScript Evolution:
   - Long ago (5-10 years back), JavaScript was simpler.
     It didn’t have `classes`, `modules`, or `arrow functions`.
   - To keep old code working while adding new features,
     a global standard was needed → **ECMAScript (ES)**.
   - ECMA is the committee that decides the rules of JavaScript.
   - Official docs: https://tc39.es/ecma262/
   - Easy docs (use this often): https://developer.mozilla.org (MDN)

3. Semicolons `;`
   - Always end a statement with `;`
   - If you don’t, JS might get confused.
   Example:
     console.log(3+3) console.log("Izhan") // ❌ error
     console.log(3+3); console.log("Izhan"); // ✅ correct
*/

/* -----------------------
📌 Variables in JavaScript
----------------------- */
let name = "Izhan";
let age = 20;
let isLoggedIn = true;

console.log(name, age, isLoggedIn);

/*
🔹 Now let’s talk about **Data Types** in JavaScript.
There are 2 main categories:
1. Primitive (basic/simple types)
2. Non-Primitive (reference types like objects, arrays, functions)
*/

/* --------------------------
📌 Primitive Data Types (7 total)
-------------------------- */

// 1. String → Text inside quotes
let firstName = "Izhan";
console.log(typeof firstName); // "string"

// 2. Number → All numbers (no separate int/float)
let score = 99;
let pi = 3.14;
console.log(typeof score); // "number"
console.log(typeof pi);    // "number"

// 3. Boolean → true or false
let loggedIn = true;
let paymentDone = false;
console.log(typeof loggedIn); // "boolean"

// 4. Undefined → variable declared but not given a value
let myVar;
console.log(myVar);          // undefined
console.log(typeof myVar);   // "undefined"

// 5. Null → an intentional "empty value"
let user = null;
console.log(user);           // null
console.log(typeof user);    // ❌ "object" (weird bug in JS, not fixed for backward compatibility)

// 6. Symbol → unique values (used in advanced coding)
let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log(sym1 === sym2);  // false (unique every time)
console.log(typeof sym1);    // "symbol"

// 7. BigInt → for very large numbers beyond normal limits
let bigNum = 123456789012345678901234567890n;
console.log(typeof bigNum); // "bigint"

/* -----------------------------
📌 Non-Primitive (Reference) Types
----------------------------- */

// 1. Object → collection of key-value pairs
let person = {
  name: "Izhan",
  age: 20,
  isStudent: true
};
console.log(typeof person); // "object"

// 2. Array → ordered collection (list of items)
let numbers = [1, 2, 3, 4, 5];
console.log(typeof numbers); // "object" (yes, arrays are special objects)

// 3. Function → block of code that can be reused
function greet() {
  console.log("Hello World!");
}
console.log(typeof greet); // "function" (a special type of object)

/* -----------------------------
📌 Key Notes About Types
-----------------------------
- undefined → variable exists but no value assigned yet.
- null → variable exists and is "empty" by intention.
- typeof null → shows "object" (this is a historical bug in JS).
- Arrays and functions are technically "objects".
- JS is dynamically typed → you don’t have to say "this will be a string".
  Example:
    let x = 10;   // number
    x = "text";   // now it's a string (no error)
*/

/*

🔹 Why does typeof null return "object"?

Back in 1995, when JavaScript was first created by Brendan Eich in just 10 days 😅, values in JS were represented as "tags" with a small type identifier.

For example:
Numbers had one tag,
Strings had another,
Objects had another.

In that old system, null was given the same tag as objects (binary value 000), because the creators thought of null as a kind of "empty object reference."
This means when you ask typeof null, JavaScript sees the tag 000 and says → "object".

🔹 Why didn’t they fix it?

This behavior was a bug, but by the time it was noticed, millions of web pages already relied on it.
If they changed it, it would break old websites.
JavaScript follows a rule called backward compatibility → old code should keep working forever.
So instead of fixing it, the bug became a permanent quirk of JavaScript.

🔹 The reality today

null is not an object. It’s a primitive data type (a standalone value).
But typeof null will always say "object".
That’s why developers say: “typeof null returning object is a historical bug in JavaScript that can’t be fixed.”

*/