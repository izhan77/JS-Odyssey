// ==========================
// 01_variables.js
// ==========================

// 'const' → used for values that should never change
// Once assigned, you CANNOT reassign a const variable
const accountId = 12345

// 'let' → used for values that might change later
// It is block-scoped (safe to use in loops/functions)
let accountEmail = "izhan@google.com"

// 'var' → the old way of declaring variables
// It is function-scoped, not block-scoped, and can cause bugs (avoid in modern JS)
var accountPassword = "7890"

// If no keyword (const/let/var) is used → it becomes a GLOBAL variable
// BAD practice: can lead to accidental overwriting in large apps
accountCity = "Karachi"

// Declared with 'let' but NOT assigned → default value is 'undefined'
let accountState;

// ==========================
// Displaying variables
// ==========================

// console.table() prints multiple values in a table format
// Easier to read compared to console.log()
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
 Example Output:

 ┌─────────┬───────────────┐
 │ (index) │   Values      │
 ├─────────┼───────────────┤
 │    0    │    12345      │
 │    1    │ 'izhan@google.com' │
 │    2    │   '7890'      │
 │    3    │  'Karachi'    │
 │    4    │  undefined    │
 └─────────┴───────────────┘
*/

// ==========================
// Best Practices Recap
// ==========================
// 1. Prefer 'const' → default choice for variables
// 2. Use 'let' only if the value will change
// 3. Avoid 'var' → can create scope & hoisting issues
// 4. Never declare variables without keywords (accidental globals)
// 5. Unassigned variables → default to 'undefined'
