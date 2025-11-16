// // ============================================
// // JAVASCRIPT OBJECTS - ZERO TO HERO GUIDE
// // ============================================

// // ============================================
// // 1. OBJECT BASICS & CREATION METHODS
// // ============================================

// // Method 1: Object Literal (Most Common)
// const user1 = {
//     name: "Izhan",
//     age: 21,
//     city: "Karachi"
// };

// // Method 2: Using new Object()
// const user2 = new Object();
// user2.name = "Ahmed";
// user2.age = 25;

// // Method 3: Object.create() (Prototype-based)
// const personPrototype = {
//     greet() {
//         console.log(`Hello, I'm ${this.name}`);
//     }
// };
// const user3 = Object.create(personPrototype);
// user3.name = "Sara";

// // Method 4: Constructor Function (Old Way)
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// const user4 = new Person("Ali", 30);

// // Method 5: ES6 Class (Modern Way)
// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }
// const user5 = new User("Fatima", 22);


// // ============================================
// // 2. ACCESSING OBJECT PROPERTIES
// // ============================================

// const student = {
//     name: "Izhan",
//     "full name": "Muhammad Izhan Waheed",
//     age: 21,
//     location: "Karachi",
//     email: "izhan@google.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]
// };

// // Dot Notation (Most Common)
// console.log(student.name); // "Izhan"
// console.log(student.age);  // 21

// // Bracket Notation (Required for special keys)
// console.log(student["email"]); // "izhan@google.com"
// console.log(student["full name"]); // Works with spaces!

// // Dynamic Property Access
// const key = "location";
// console.log(student[key]); // "Karachi"

// // WRONG: console.log(student.full name); // Syntax Error!


// // ============================================
// // 3. WORKING WITH SYMBOLS AS KEYS
// // ============================================

// // Symbols create unique identifiers
// const mySym1 = Symbol("key1");
// const mySym2 = Symbol("key2");

// const JsUser = {
//     name: "Izhan",
//     age: 21,
//     [mySym1]: "mykey1",  // CORRECT: Use brackets for Symbol keys
//     mySym2: "not a symbol key"  // This is just a string key named "mySym2"
// };

// console.log(JsUser[mySym1]); // "mykey1" (Symbol key - unique)
// console.log(typeof mySym1);  // "symbol"

// console.log(JsUser.mySym2);  // "not a symbol key" (Regular string key)
// console.log(JsUser["mySym2"]); // "not a symbol key"

// // Why use Symbols?
// // - Create truly unique property keys
// // - Avoid naming collisions
// // - Hidden from Object.keys() and for...in loops


// // ============================================
// // 4. MODIFYING OBJECTS
// // ============================================

// const product = {
//     name: "Laptop",
//     price: 50000
// };

// // Adding Properties
// product.brand = "Dell";
// product["stock"] = 15;

// // Updating Properties
// product.price = 45000;
// product["stock"] = 20;

// // Deleting Properties
// delete product.stock;

// console.log(product); // { name: "Laptop", price: 45000, brand: "Dell" }


// // ============================================
// // 5. OBJECT METHODS
// // ============================================

// const calculator = {
//     num1: 10,
//     num2: 5,
    
//     // Method Definition (ES6 Shorthand)
//     add() {
//         return this.num1 + this.num2;
//     },
    
//     // Traditional Method Definition
//     subtract: function() {
//         return this.num1 - this.num2;
//     },
    
//     // Arrow Function (Be careful with 'this'!)
//     multiply: () => {
//         // Arrow functions don't have their own 'this'
//         // This won't work as expected in objects
//         return this.num1 * this.num2; // undefined
//     }
// };

// console.log(calculator.add());      // 15
// console.log(calculator.subtract()); // 5


// // ============================================
// // 6. THE 'this' KEYWORD
// // ============================================

// const userProfile = {
//     firstName: "Izhan",
//     lastName: "Waheed",
//     age: 21,
    
//     getFullName() {
//         // 'this' refers to the current object
//         return `${this.firstName} ${this.lastName}`;
//     },
    
//     celebrateBirthday() {
//         this.age++;
//         console.log(`Happy Birthday! Now ${this.age} years old.`);
//     }
// };

// console.log(userProfile.getFullName()); // "Izhan Waheed"
// userProfile.celebrateBirthday();        // "Happy Birthday! Now 22 years old."


// // ============================================
// // 7. NESTED OBJECTS
// // ============================================

// const company = {
//     name: "Tech Corp",
//     address: {
//         street: "123 Main St",
//         city: "Karachi",
//         country: "Pakistan",
//         coordinates: {
//             lat: 24.8607,
//             lng: 67.0011
//         }
//     },
//     employees: {
//         count: 150,
//         departments: ["HR", "IT", "Sales"]
//     }
// };

// // Accessing Nested Properties
// console.log(company.address.city);                    // "Karachi"
// console.log(company.address.coordinates.lat);         // 24.8607
// console.log(company.employees.departments[1]);        // "IT"

// // Optional Chaining (ES2020) - Prevents errors
// console.log(company.address?.zipcode);                // undefined (no error)
// console.log(company.ceo?.name);                       // undefined (no error)


// // ============================================
// // 8. OBJECT DESTRUCTURING
// // ============================================

// const profile = {
//     username: "izhan_dev",
//     email: "izhan@example.com",
//     age: 21,
//     location: "Karachi"
// };

// // Basic Destructuring
// const { username, email } = profile;
// console.log(username); // "izhan_dev"
// console.log(email);    // "izhan@example.com"

// // Renaming Variables
// const { username: user, age: userAge } = profile;
// console.log(user);    // "izhan_dev"
// console.log(userAge); // 21

// // Default Values
// const { country = "Pakistan", phone = "N/A" } = profile;
// console.log(country); // "Pakistan" (default)
// console.log(phone);   // "N/A" (default)

// // Nested Destructuring
// const person = {
//     name: "Izhan",
//     address: {
//         city: "Karachi",
//         country: "Pakistan"
//     }
// };

// const { address: { city, country: nation } } = person;
// console.log(city);   // "Karachi"
// console.log(nation); // "Pakistan"


// // ============================================
// // 9. OBJECT METHODS (Built-in)
// // ============================================

// const car = {
//     brand: "Toyota",
//     model: "Corolla",
//     year: 2023,
//     color: "White"
// };

// // Object.keys() - Get all keys as array
// console.log(Object.keys(car)); 
// // ["brand", "model", "year", "color"]

// // Object.values() - Get all values as array
// console.log(Object.values(car)); 
// // ["Toyota", "Corolla", 2023, "White"]

// // Object.entries() - Get key-value pairs
// console.log(Object.entries(car)); 
// // [["brand", "Toyota"], ["model", "Corolla"], ...]

// // Object.assign() - Copy/Merge objects
// const carDetails = { price: 3500000, seller: "CarMax" };
// const fullCarInfo = Object.assign({}, car, carDetails);
// console.log(fullCarInfo); 
// // { brand: "Toyota", ..., price: 3500000, seller: "CarMax" }

// // Spread Operator (Modern Way)
// const fullCarInfo2 = { ...car, ...carDetails };
// console.log(fullCarInfo2); // Same result

// // Object.freeze() - Make object immutable
// Object.freeze(car);
// car.color = "Black"; // Won't work
// console.log(car.color); // Still "White"

// // Object.seal() - Prevent adding/removing properties
// const laptop = { brand: "Dell", price: 50000 };
// Object.seal(laptop);
// laptop.price = 45000;  // Allowed
// laptop.model = "XPS";  // Not allowed
// delete laptop.brand;   // Not allowed

// // hasOwnProperty() - Check if property exists
// console.log(car.hasOwnProperty("brand")); // true
// console.log(car.hasOwnProperty("price")); // false


// // ============================================
// // 10. LOOPING THROUGH OBJECTS
// // ============================================

// const scores = {
//     math: 95,
//     english: 88,
//     science: 92,
//     history: 85
// };

// // for...in loop
// for (let subject in scores) {
//     console.log(`${subject}: ${scores[subject]}`);
// }

// // Object.keys() with forEach
// Object.keys(scores).forEach(subject => {
//     console.log(`${subject}: ${scores[subject]}`);
// });

// // Object.entries() with for...of
// for (let [subject, score] of Object.entries(scores)) {
//     console.log(`${subject}: ${score}`);
// }


// // ============================================
// // 11. CHECKING PROPERTY EXISTENCE
// // ============================================

// const settings = {
//     theme: "dark",
//     notifications: true
// };

// // Method 1: in operator
// console.log("theme" in settings);        // true
// console.log("language" in settings);     // false

// // Method 2: hasOwnProperty()
// console.log(settings.hasOwnProperty("theme")); // true

// // Method 3: Checking for undefined
// console.log(settings.theme !== undefined);     // true
// console.log(settings.language !== undefined);  // false


// // ============================================
// // 12. OBJECT COMPARISON
// // ============================================

// const obj1 = { name: "Izhan" };
// const obj2 = { name: "Izhan" };
// const obj3 = obj1;

// // Objects are compared by reference, not value
// console.log(obj1 === obj2); // false (different references)
// console.log(obj1 === obj3); // true (same reference)

// // To compare values, use JSON.stringify (simple objects only)
// console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); // true


// // ============================================
// // 13. SINGLETON PATTERN
// // ============================================

// // Singleton ensures only one instance exists
// const Singleton = (function() {
//     let instance;
    
//     function createInstance() {
//         return {
//             name: "Singleton Instance",
//             timestamp: Date.now()
//         };
//     }
    
//     return {
//         getInstance() {
//             if (!instance) {
//                 instance = createInstance();
//             }
//             return instance;
//         }
//     };
// })();

// const instance1 = Singleton.getInstance();
// const instance2 = Singleton.getInstance();
// console.log(instance1 === instance2); // true (same instance)


// // ============================================
// // 14. COMPUTED PROPERTY NAMES
// // ============================================

// const field = "email";
// const value = "izhan@example.com";

// const userObj = {
//     [field]: value,  // Computed property name
//     [`is_${field}_verified`]: true
// };

// console.log(userObj); 
// // { email: "izhan@example.com", is_email_verified: true }


// // ============================================
// // 15. OBJECT SHORTHAND
// // ============================================

// const name = "Izhan";
// const age = 21;
// const city = "Karachi";

// // Old Way
// const person1 = {
//     name: name,
//     age: age,
//     city: city
// };

// // ES6 Shorthand (property names match variable names)
// const person2 = { name, age, city };
// console.log(person2); // { name: "Izhan", age: 21, city: "Karachi" }


// // ============================================
// // 16. PRACTICAL EXAMPLES
// // ============================================

// // Example 1: User Management System
// const userSystem = {
//     users: [],
    
//     addUser(name, email) {
//         const newUser = {
//             id: this.users.length + 1,
//             name,
//             email,
//             createdAt: new Date()
//         };
//         this.users.push(newUser);
//         return newUser;
//     },
    
//     findUser(id) {
//         return this.users.find(user => user.id === id);
//     },
    
//     getAllUsers() {
//         return this.users;
//     }
// };

// userSystem.addUser("Izhan", "izhan@example.com");
// userSystem.addUser("Ahmed", "ahmed@example.com");
// console.log(userSystem.getAllUsers());

// // Example 2: Shopping Cart
// const shoppingCart = {
//     items: [],
    
//     addItem(product, quantity) {
//         this.items.push({ product, quantity });
//     },
    
//     getTotal() {
//         return this.items.reduce((total, item) => {
//             return total + (item.product.price * item.quantity);
//         }, 0);
//     },
    
//     clear() {
//         this.items = [];
//     }
// };

// shoppingCart.addItem({ name: "Laptop", price: 50000 }, 1);
// shoppingCart.addItem({ name: "Mouse", price: 1000 }, 2);
// console.log(`Total: Rs. ${shoppingCart.getTotal()}`); // Rs. 52000


// // ============================================
// // 17. COMMON MISTAKES & BEST PRACTICES
// // ============================================

// // ❌ MISTAKE 1: Forgetting 'this' keyword
// const wrong = {
//     value: 10,
//     getValue() {
//         return value; // ReferenceError!
//     }
// };

// // ✅ CORRECT
// const correct = {
//     value: 10,
//     getValue() {
//         return this.value; // Returns 10
//     }
// };

// // ❌ MISTAKE 2: Modifying frozen objects
// const frozen = Object.freeze({ count: 5 });
// frozen.count = 10; // Silently fails in non-strict mode

// // ❌ MISTAKE 3: Direct mutation instead of copying
// const original = { name: "Izhan" };
// const copy = original; // This is a reference, not a copy!
// copy.name = "Ahmed";
// console.log(original.name); // "Ahmed" (original changed too!)

// // ✅ CORRECT: Use spread or Object.assign
// const properCopy = { ...original };


// // ============================================
// // KEY TAKEAWAYS
// // ============================================

// /*
// 1. Objects store key-value pairs
// 2. Use dot notation for simple keys, brackets for special keys
// 3. Symbols create unique property keys
// 4. 'this' refers to the current object in methods
// 5. Use Object.keys/values/entries for iteration
// 6. Destructuring makes extracting values easier
// 7. Objects are passed by reference
// 8. Use spread operator {...} to copy objects
// 9. Object.freeze() makes objects immutable
// 10. Practice with real-world examples!
// */