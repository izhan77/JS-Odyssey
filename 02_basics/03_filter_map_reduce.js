
// ============================================
// 1. FILTER() METHOD
// ============================================

/*
filter() creates a NEW array with elements that pass a test
- Does NOT modify the original array
- Returns a new array
- If no elements pass, returns empty array []
*/

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Basic filter - numbers greater than 5
const newNums = nums.filter((num) => {
    return num > 5;
});
console.log(newNums); // [6, 7, 8, 9, 10]

// Shorthand (implicit return) - when one line
const newNums2 = nums.filter(num => num > 5);
console.log(newNums2); // [6, 7, 8, 9, 10]

// Even numbers only
const evenNums = nums.filter(num => num % 2 === 0);
console.log(evenNums); // [2, 4, 6, 8, 10]

// Odd numbers only
const oddNums = nums.filter(num => num % 2 !== 0);
console.log(oddNums); // [1, 3, 5, 7, 9]


// ============================================
// 2. FILTER() vs FOREACH() FOR FILTERING
// ============================================

// Using forEach (Old Way - More Code)
const manualFilter = [];
nums.forEach((num) => {
    if (num > 4) {
        manualFilter.push(num);
    }
});
console.log(manualFilter); // [5, 6, 7, 8, 9, 10]

// Using filter (Modern Way - Cleaner)
const modernFilter = nums.filter(num => num > 4);
console.log(modernFilter); // [5, 6, 7, 8, 9, 10]

// WHY filter() IS BETTER:
// ✅ Less code
// ✅ More readable
// ✅ Declarative (says WHAT you want, not HOW)
// ✅ Returns new array directly


// ============================================
// 3. FILTER() WITH OBJECTS (REAL-WORLD)
// ============================================

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 1996 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Fiction', publish: 2001, edition: 2010 }
];

// Filter by single condition
const historyBooks = books.filter(book => book.genre === 'History');
console.log(historyBooks);
// [{ title: 'Book Three', genre: 'History', ... }, ...]

// Filter by multiple conditions (AND)
const recentHistory = books.filter(book => {
    return book.publish >= 1995 && book.genre === 'History';
});
console.log(recentHistory);
// [{ title: 'Book Three', genre: 'History', publish: 1999, ... }]

// Filter by multiple conditions (OR)
const scienceOrFiction = books.filter(book => {
    return book.genre === 'Science' || book.genre === 'Fiction';
});
console.log(scienceOrFiction);

// Complex filtering
const oldBooksNewEditions = books.filter(book => {
    return book.publish < 1990 && book.edition >= 2000;
});
console.log(oldBooksNewEditions);

// Filter books published in specific decade
const nineties = books.filter(book => {
    return book.publish >= 1990 && book.publish < 2000;
});
console.log(nineties);


// ============================================
// 4. MAP() METHOD
// ============================================

/*
map() transforms each element and creates a NEW array
- Does NOT modify the original array
- ALWAYS returns an array of the same length
- Use when you want to transform data
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Add 10 to each number
const addTen = numbers.map(num => num + 10);
console.log(addTen); // [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// Multiply each number by 10
const multiplyTen = numbers.map(num => num * 10);
console.log(multiplyTen); // [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

// Square each number
const squared = numbers.map(num => num * num);
console.log(squared); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

// Convert to strings
const stringNums = numbers.map(num => `Number ${num}`);
console.log(stringNums); // ["Number 1", "Number 2", ...]


// ============================================
// 5. MAP() WITH OBJECTS
// ============================================

const users = [
    { name: "Izhan", age: 21 },
    { name: "Ahmed", age: 25 },
    { name: "Sara", age: 22 }
];

// Extract only names
const names = users.map(user => user.name);
console.log(names); // ["Izhan", "Ahmed", "Sara"]

// Extract only ages
const ages = users.map(user => user.age);
console.log(ages); // [21, 25, 22]

// Transform objects
const userSummaries = users.map(user => {
    return `${user.name} is ${user.age} years old`;
});
console.log(userSummaries);
// ["Izhan is 21 years old", "Ahmed is 25 years old", ...]

// Create new objects with additional properties
const usersWithId = users.map((user, index) => {
    return {
        id: index + 1,
        ...user,
        isAdult: user.age >= 18
    };
});
console.log(usersWithId);
// [{ id: 1, name: "Izhan", age: 21, isAdult: true }, ...]


// ============================================
// 6. CHAINING METHODS (POWERFUL!)
// ============================================

const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Chain 1: Multiple transformations
const result1 = values
    .map(num => num * 10)        // [10, 20, 30, ..., 100]
    .map(num => num + 5)         // [15, 25, 35, ..., 105]
    .filter(num => num > 40);    // [45, 55, 65, 75, 85, 95, 105]

console.log(result1); // [45, 55, 65, 75, 85, 95, 105]

// Chain 2: Filter then transform
const result2 = values
    .filter(num => num > 5)      // [6, 7, 8, 9, 10]
    .map(num => num * 2);        // [12, 14, 16, 18, 20]

console.log(result2); // [12, 14, 16, 18, 20]

// Chain 3: Real-world example with books
const expensiveFictionTitles = books
    .filter(book => book.genre === 'Fiction')
    .filter(book => book.publish >= 2000)
    .map(book => book.title.toUpperCase());

console.log(expensiveFictionTitles);

// Chain 4: Complex transformation
const processedData = values
    .filter(num => num % 2 === 0)  // Even numbers only
    .map(num => num ** 2)          // Square them
    .filter(num => num > 20)       // Keep only > 20
    .map(num => `Value: ${num}`);  // Format as string

console.log(processedData); // ["Value: 36", "Value: 64", "Value: 100"]


// ============================================
// 7. REDUCE() METHOD - THE MOST POWERFUL
// ============================================

/*
reduce() reduces an array to a SINGLE value
- Executes a reducer function on each element
- Returns a single output value
- Can be used for: sum, product, counting, grouping, etc.

Syntax: array.reduce((accumulator, currentValue) => { }, initialValue)
- accumulator: accumulated value (running total)
- currentValue: current element being processed
- initialValue: starting value for accumulator
*/

const simpleNums = [1, 2, 3, 4, 5];

// Example 1: Sum of all numbers
const sum = simpleNums.reduce((acc, curr) => {
    console.log(`acc: ${acc}, curr: ${curr}`);
    return acc + curr;
}, 0);
console.log(`Total Sum: ${sum}`); // 15

// Step-by-step breakdown:
// acc: 0, curr: 1 → return 0 + 1 = 1
// acc: 1, curr: 2 → return 1 + 2 = 3
// acc: 3, curr: 3 → return 3 + 3 = 6
// acc: 6, curr: 4 → return 6 + 4 = 10
// acc: 10, curr: 5 → return 10 + 5 = 15

// Example 2: Starting with different initial value
const sumWithInitial = simpleNums.reduce((acc, curr) => {
    console.log(`acc: ${acc}, curr: ${curr}`);
    return acc + curr;
}, 100); // Starting at 100
console.log(`Sum: ${sumWithInitial}`); // 115

// Example 3: Product of all numbers
const product = simpleNums.reduce((acc, curr) => acc * curr, 1);
console.log(`Product: ${product}`); // 120 (1*2*3*4*5)

// Example 4: Find maximum number
const max = simpleNums.reduce((acc, curr) => {
    return curr > acc ? curr : acc;
}, simpleNums[0]);
console.log(`Max: ${max}`); // 5

// Example 5: Find minimum number
const min = simpleNums.reduce((acc, curr) => {
    return curr < acc ? curr : acc;
}, simpleNums[0]);
console.log(`Min: ${min}`); // 1


// ============================================
// 8. REDUCE() WITH OBJECTS - REAL-WORLD
// ============================================

const shoppingCart = [
    { itemName: "js course", price: 999 },
    { itemName: "css course", price: 99 },
    { itemName: "html course", price: 9 },
    { itemName: "ai course", price: 2999 },
    { itemName: "data science course", price: 1500 }
];

// Calculate total price
const totalPrice = shoppingCart.reduce((acc, item) => {
    console.log(`acc: ${acc}, price: ${item.price}`);
    return acc + item.price;
}, 0);
console.log(`Total Shopping Price: ${totalPrice}`); // 5606

// Step-by-step:
// acc: 0, price: 999 → 0 + 999 = 999
// acc: 999, price: 99 → 999 + 99 = 1098
// acc: 1098, price: 9 → 1098 + 9 = 1107
// acc: 1107, price: 2999 → 1107 + 2999 = 4106
// acc: 4106, price: 1500 → 4106 + 1500 = 5606


// ============================================
// 9. ADVANCED REDUCE() EXAMPLES
// ============================================

const products = [
    { name: "Laptop", category: "Electronics", price: 50000 },
    { name: "Phone", category: "Electronics", price: 30000 },
    { name: "Shirt", category: "Clothing", price: 2000 },
    { name: "Shoes", category: "Clothing", price: 5000 },
    { name: "Watch", category: "Accessories", price: 10000 }
];

// Example 1: Group by category
const groupedByCategory = products.reduce((acc, product) => {
    const category = product.category;
    if (!acc[category]) {
        acc[category] = [];
    }
    acc[category].push(product);
    return acc;
}, {});
console.log(groupedByCategory);
/* Output:
{
    Electronics: [{name: "Laptop", ...}, {name: "Phone", ...}],
    Clothing: [{name: "Shirt", ...}, {name: "Shoes", ...}],
    Accessories: [{name: "Watch", ...}]
}
*/

// Example 2: Count by category
const countByCategory = products.reduce((acc, product) => {
    const category = product.category;
    acc[category] = (acc[category] || 0) + 1;
    return acc;
}, {});
console.log(countByCategory);
// { Electronics: 2, Clothing: 2, Accessories: 1 }

// Example 3: Sum price by category
const totalByCategory = products.reduce((acc, product) => {
    const category = product.category;
    acc[category] = (acc[category] || 0) + product.price;
    return acc;
}, {});
console.log(totalByCategory);
// { Electronics: 80000, Clothing: 7000, Accessories: 10000 }

// Example 4: Find most expensive item
const mostExpensive = products.reduce((acc, product) => {
    return product.price > acc.price ? product : acc;
}, products[0]);
console.log(mostExpensive);
// { name: "Laptop", category: "Electronics", price: 50000 }

// Example 5: Create a string from array
const itemNames = products.reduce((acc, product, index) => {
    return acc + (index > 0 ? ", " : "") + product.name;
}, "Items: ");
console.log(itemNames); // "Items: Laptop, Phone, Shirt, Shoes, Watch"


// ============================================
// 10. COMBINING FILTER, MAP, AND REDUCE
// ============================================

const transactions = [
    { type: "income", amount: 5000, date: "2024-01-15" },
    { type: "expense", amount: 1500, date: "2024-01-16" },
    { type: "income", amount: 3000, date: "2024-01-17" },
    { type: "expense", amount: 800, date: "2024-01-18" },
    { type: "income", amount: 2000, date: "2024-01-19" },
    { type: "expense", amount: 1200, date: "2024-01-20" }
];

// Total income
const totalIncome = transactions
    .filter(t => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);
console.log(`Total Income: ${totalIncome}`); // 10000

// Total expenses
const totalExpense = transactions
    .filter(t => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);
console.log(`Total Expense: ${totalExpense}`); // 3500

// Net balance
const netBalance = totalIncome - totalExpense;
console.log(`Net Balance: ${netBalance}`); // 6500

// Get all amounts above 2000
const largeTransactions = transactions
    .filter(t => t.amount >= 2000)
    .map(t => `${t.type.toUpperCase()}: Rs. ${t.amount}`)
    .join(" | ");
console.log(largeTransactions);
// "INCOME: Rs. 5000 | INCOME: Rs. 3000 | INCOME: Rs. 2000"


// ============================================
// 11. WHEN TO USE WHICH METHOD?
// ============================================

/*
USE filter() WHEN:
✅ You want to select specific items from an array
✅ You need a subset of the original array
✅ Return value: NEW array (same or fewer items)
Example: Get all users above 18 years old

USE map() WHEN:
✅ You want to transform each element
✅ You need to extract specific properties
✅ Return value: NEW array (same number of items)
Example: Convert array of objects to array of names

USE reduce() WHEN:
✅ You want to calculate a single value
✅ You need to sum, count, group, or aggregate data
✅ Return value: SINGLE value (number, string, object, etc.)
Example: Calculate total price of shopping cart

USE forEach() WHEN:
✅ You want to perform side effects (console.log, DOM manipulation)
✅ You don't need a return value
✅ Return value: undefined (no return)
Example: Display each item in the console
*/


// ============================================
// 12. PRACTICAL REAL-WORLD EXAMPLES
// ============================================

// Example 1: E-commerce Product Filtering
const ecommerceProducts = [
    { id: 1, name: "Laptop", price: 50000, rating: 4.5, inStock: true },
    { id: 2, name: "Phone", price: 30000, rating: 4.2, inStock: true },
    { id: 3, name: "Tablet", price: 25000, rating: 4.0, inStock: false },
    { id: 4, name: "Headphones", price: 5000, rating: 4.8, inStock: true },
    { id: 5, name: "Smartwatch", price: 15000, rating: 4.3, inStock: true }
];

// Get affordable products (< 20000) in stock with good rating
const affordableQualityProducts = ecommerceProducts
    .filter(p => p.price < 20000)
    .filter(p => p.inStock === true)
    .filter(p => p.rating >= 4.2)
    .map(p => ({
        name: p.name,
        price: `Rs. ${p.price}`,
        rating: `${p.rating}⭐`
    }));

console.log(affordableQualityProducts);

// Example 2: Student Grade Processing
const students = [
    { name: "Izhan", scores: [85, 90, 78, 92] },
    { name: "Ahmed", scores: [70, 65, 72, 68] },
    { name: "Sara", scores: [95, 98, 92, 96] },
    { name: "Ali", scores: [80, 75, 78, 82] }
];

// Calculate average and determine pass/fail
const studentResults = students.map(student => {
    const average = student.scores.reduce((sum, score) => sum + score, 0) / student.scores.length;
    return {
        name: student.name,
        average: average.toFixed(2),
        status: average >= 75 ? "PASS" : "FAIL"
    };
});

console.log(studentResults);

// Get only passing students
const passingStudents = studentResults.filter(s => s.status === "PASS");
console.log(passingStudents);

// Example 3: Sales Analytics
const salesData = [
    { month: "Jan", sales: 25000, expenses: 15000 },
    { month: "Feb", sales: 32000, expenses: 18000 },
    { month: "Mar", sales: 28000, expenses: 16000 },
    { month: "Apr", sales: 35000, expenses: 20000 }
];

// Calculate profit for each month
const monthlyProfit = salesData.map(month => ({
    month: month.month,
    profit: month.sales - month.expenses
}));
console.log(monthlyProfit);

// Total profit
const totalProfit = monthlyProfit.reduce((acc, month) => acc + month.profit, 0);
console.log(`Total Profit: Rs. ${totalProfit}`);

// Best performing month
const bestMonth = monthlyProfit.reduce((best, current) => {
    return current.profit > best.profit ? current : best;
});
console.log(`Best Month: ${bestMonth.month} (Rs. ${bestMonth.profit})`);


// ============================================
// 13. COMMON MISTAKES & HOW TO AVOID THEM
// ============================================

// ❌ MISTAKE 1: Forgetting to return in filter/map
const wrong1 = nums.filter((num) => {
    num > 5; // Missing return!
});
console.log(wrong1); // [] (empty array)

// ✅ CORRECT: Always return when using {}
const correct1 = nums.filter((num) => {
    return num > 5;
});
// OR use implicit return (no braces)
const correct2 = nums.filter(num => num > 5);


// ❌ MISTAKE 2: Not providing initial value in reduce
const wrong2 = [].reduce((acc, curr) => acc + curr); // Error!

// ✅ CORRECT: Always provide initial value
const correct3 = [].reduce((acc, curr) => acc + curr, 0); // Returns 0


// ❌ MISTAKE 3: Mutating original array
const original = [1, 2, 3];
const wrong3 = original.map((num) => {
    original.push(num * 2); // Don't do this!
    return num * 2;
});

// ✅ CORRECT: Never modify original in map/filter/reduce
const correct4 = original.map(num => num * 2);


// ❌ MISTAKE 4: Using forEach when you need a return value
const wrong4 = nums.forEach(num => num * 2); // Returns undefined

// ✅ CORRECT: Use map when you need transformed array
const correct5 = nums.map(num => num * 2);


// ============================================
// 14. PERFORMANCE TIPS
// ============================================

/*
1. Chain efficiently:
   ✅ Filter first, then map (reduces iterations)
   ❌ Map first, then filter (wastes transformations)

2. Use appropriate method:
   ✅ Use find() instead of filter()[0]
   ✅ Use some() instead of filter().length > 0
   ✅ Use every() instead of filter().length === arr.length

3. Avoid unnecessary chains:
   ❌ arr.filter().map().filter() (too many loops)
   ✅ Combine logic when possible
*/

// Bad: Multiple passes
const bad = nums
    .map(n => n * 2)          // Pass 1
    .filter(n => n > 10)      // Pass 2
    .map(n => n + 5);         // Pass 3

// Better: Fewer passes
const better = nums
    .filter(n => n * 2 > 10)  // Pass 1 (combine logic)
    .map(n => n * 2 + 5);     // Pass 2


// ============================================
// KEY TAKEAWAYS & CHEAT SHEET
// ============================================

/*
METHOD      | PURPOSE                    | RETURNS
------------|----------------------------|------------------
filter()    | Select items               | New array (subset)
map()       | Transform items            | New array (same length)
reduce()    | Aggregate to single value  | Single value
forEach()   | Loop with side effects     | undefined

WHEN TO USE WHAT:
- Selecting: filter()
- Transforming: map()
- Calculating total/sum: reduce()
- Just looping: forEach()

CHAINING ORDER (BEST PRACTICE):
filter() → map() → reduce()
(Filter first to reduce iterations)

REMEMBER:
1. filter/map/reduce do NOT modify original array
2. Always return in filter/map
3. Always provide initial value in reduce
4. Implicit return: num => num * 2
5. Explicit return: num => { return num * 2 }
*/