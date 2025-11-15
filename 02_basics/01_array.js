/* 

------------------------------------------------
1. WHAT IS AN ARRAY?
------------------------------------------------
An array is a special variable that can store multiple values.
Normally, a variable stores ONE value:

    let x = 5;

But an ARRAY stores MANY values inside one container:

    let players = ["Ronaldo", "Messi", "Neymar"];

Why use arrays?
- To group related data
- To loop over values
- To store lists (users, products, heroes, etc.)

------------------------------------------------
2. HOW TO CREATE ARRAYS
------------------------------------------------

The normal and most common way:
------------------------------------------------
let arr = [1, 2, 3, 4, 5];

BEGINNERS: This is the syntax you should ALWAYS use.

The old, rarely used way:
------------------------------------------------
let arr2 = new Array(1, 2, 3);
This works, but is not recommended unless you have a reason.

------------------------------------------------
3. ACCESSING ITEMS IN AN ARRAY
------------------------------------------------
Arrays use ZERO‑BASED indexing.

Index:  0        1        2
Value: "ronaldo","messi","neymar"

Example:
------------------------------------------------
const players = ["ronaldo", "messi", "neymar"];

players[0] → "ronaldo"
players[1] → "messi"
players[2] → "neymar"

If you try:
players[10] → undefined
(Because it doesn't exist)

------------------------------------------------
4. MODIFYING ARRAYS — ADD/REMOVE ITEMS
------------------------------------------------

-------------- PUSH -----------------------------
Adds an item to the END of the array.

    arr.push(99);

Why use it?
- When you want to add data step by step
- When receiving new items from API

-------------- POP ------------------------------
Removes the LAST item of the array.

    arr.pop();

Why use it?
- Undo last addition
- Remove most recent item

-------------- UNSHIFT --------------------------
Adds an item at the START of array.

    arr.unshift(10);

Why use it?
- When new data must come before older data
- Example: showing newest messages first

-------------- SHIFT ----------------------------
Removes the FIRST item.

    arr.shift();

Why use it?
- Removing first element (like queue behavior)

------------------------------------------------
5. SLICE VS SPLICE — THE MOST CONFUSING PART FOR BEGINNERS
------------------------------------------------

-------------- SLICE (NON‑DESTRUCTIVE) ----------
Creates a *new array* from a range.
It DOES NOT change the original array.

    const arr = [1,2,3,4,5];
    const sliced = arr.slice(1, 3);

What does it return?
Index 1 → 2  
Index 2 → 3  
Stops before index 3

So → [2, 3]

The original array stays the same.

WHY USE SLICE?
- When you want a copy of a part of the array
- When you do NOT want to change original data

-------------- SPLICE (DESTRUCTIVE) ------------
Removes OR inserts elements in the original array.
It CHANGES the original array.

    const arr = [1,2,3,4,5];
    const removed = arr.splice(1, 3);

This removes:
Index 1 → 2  
Index 2 → 3  
Index 3 → 4  

Returns → [2,3,4]
Original becomes → [1,5]

WHY USE SPLICE?
- When you WANT to modify the array permanently
- Removing multiple items
- Inserting items

------------------------------------------------
6. MERGING ARRAYS (THERE IS A RIGHT AND WRONG WAY)
------------------------------------------------

-------------- BAD WAY (PUSH ARRAY INSIDE ARRAY) ------------
    marvel.push(dc);

This results in:
["thor","spiderman","ironman", ["superman","batman","aquaman"]]

One array INSIDE another array — not what you want.

-------------- concat() — GOOD WAY ---------------
Does NOT change existing arrays.

    const merged = marvel.concat(dc);

-------------- Spread operator — BEST WAY --------
Modern, clean, fastest:

    const allHeroes = [...marvel, ...dc];

------------------------------------------------
7. FLATTENING NESTED ARRAYS
------------------------------------------------
Sometimes arrays contain arrays inside them.

    const arr = [1,2,[3,4,[5,6]]];

To flatten (make it one layer):

    arr.flat(Infinity);

WHY USE IT?
- When API returns deeply nested data
- When files or folders are structured in levels

------------------------------------------------
8. IMPORTANT UTILITY FUNCTIONS
------------------------------------------------

-------------- Array.isArray() ------------------
Checks if something is an array.

    Array.isArray(123) → false
    Array.isArray([1,2,3]) → true

-------------- Array.from() ----------------------
Convert ANY iterable (string, arguments, NodeList) into an array.

    Array.from("IZHAN") → ["I","Z","H","A","N"]

-------------- Array.of() ------------------------
Creates arrays from arguments:

    Array.of(1,2,3) → [1,2,3]

------------------------------------------------
9. MUST‑KNOW METHODS FOR REAL‑WORLD JAVASCRIPT
------------------------------------------------

-------------- map() ----------------------------
Transforms each element.

    [1,2,3].map(n => n*2) → [2,4,6]

-------------- filter() -------------------------
Keeps only items that match a condition.

    [1,2,3,4].filter(n => n % 2 === 0) → [2,4]

-------------- reduce() -------------------------
Reduces array to ONE value.

    [1,2,3].reduce((a,b) => a+b, 0) → 6

-------------- find() ---------------------------
Returns FIRST matching element.

-------------- findIndex() ----------------------
Returns the index of first match.

-------------- every() --------------------------
Checks if ALL elements satisfy a condition.

-------------- some() ---------------------------
Checks if AT LEAST ONE satisfies a condition.

-------------- includes() -----------------------
Checks if value exists in array.

-------------- sort() ---------------------------
Sorts array (needs compare function for numbers).

------------------------------------------------
10. REAL-LIFE PRACTICAL EXAMPLE (BEGINNER TO PRO LEVEL)
------------------------------------------------

const users = [
  { name: "Izhan", age: 21 },
  { name: "Ali",   age: 22 },
  { name: "Sara",  age: 20 }
];

// Get all names
const names = users.map(u => u.name);

// Filter only adults
const adults = users.filter(u => u.age >= 21);

// Total age of all users
const totalAge = users.reduce((sum, u) => sum + u.age, 0);

*/
