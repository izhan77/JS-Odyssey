// -------------------- DATES & TIME IN JAVASCRIPT --------------------

// Create a new Date object representing the current date and time
let myDate = new Date();

// Different ways to display a Date
// console.log(myDate.toString()); 
// 👉 Example: "Tue Oct 08 2025 10:12:30 GMT+0500 (Pakistan Standard Time)"
// Full date + time + timezone in a human-readable format

// console.log(myDate.toDateString()); 
// 👉 Example: "Tue Oct 08 2025"
// Shows only the date (no time)

// console.log(myDate.toTimeString()); 
// 👉 Example: "10:12:30 GMT+0500 (Pakistan Standard Time)"
// Shows only the time (no date)

// console.log(myDate.toISOString()); 
// 👉 Example: "2025-10-08T05:12:30.000Z"
// ISO format (universal standard for APIs, databases, JSON, etc.)

// console.log(myDate.toLocaleString());
// 👉 Example: "10/8/2025, 10:12:30 AM"
// Converts date and time to a localized, human-friendly format based on your system locale

// console.log(typeof myDate);
// 👉 Output: "object"
// Note: Dates in JS are *objects*, not primitive values.

// -------------------- CREATING CUSTOM DATES --------------------

// 1️⃣ Using numbers: new Date(year, month, day)
// Note: Month index starts from 0 (January = 0, December = 11)
// let myCreatedDate = new Date(2023, 0, 23);
// 👉 Jan 23, 2023 (month = 0 → January)

// 2️⃣ You can also include time: new Date(year, month, day, hours, minutes)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3);
// 👉 Jan 23, 2023 05:03 AM

// 3️⃣ Using a string (MM-DD-YYYY or YYYY-MM-DD)
// More readable for many use cases:
let myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate.toLocaleString());
// 👉 "1/14/2023, 12:00:00 AM"

// -------------------- TIMESTAMPS --------------------

// Get current timestamp (milliseconds since Jan 1, 1970)
// This is called the "Unix Epoch Time"
let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// 👉 Example: 1738968592384 (milliseconds)

// Compare timestamps
// console.log(myCreatedDate.getTime());
// 👉 Returns timestamp for the created date (useful for comparisons, sorting, etc.)

// Convert milliseconds to seconds (common in APIs)
// console.log(Math.floor(Date.now() / 1000));
// 👉 Example: 1738968592

// -------------------- GETTING DATE PARTS --------------------

let newDate = new Date();

// console.log(newDate); 
// 👉 Example: Tue Oct 08 2025 10:12:30 GMT+0500

// console.log(newDate.getDay()); 
// 👉 Returns day of the week (0 = Sunday, 6 = Saturday)

// -------------------- FORMATTING DATE PARTS --------------------

// toLocaleString() can take options to customize output
console.log(newDate.toLocaleString('default', {
    weekday: "long", // 👉 Full weekday name (e.g. "Tuesday")
}));
// 👉 Output example: "Wednesday"

// You can add more options like:
// year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit"
// to get a full, formatted date string

