# 🧩 Section 1: JavaScript Basics

### 📚 Topics Covered
- Variables and Data Types  
- Type Conversion & Operators  
- Strings  
- Numbers & Math  
- Date & Time  
- Mini Quizzes  

---

# 📘 Why Do We Write Files in `.js` and Not `.txt`?

### ❓ Question
What is the difference? Why do we write files in `.js` instead of `.txt`? And what software recognizes these files and executes our code?

---

### ✅ Answer

The text you write in a `.js` file and a `.txt` file *might* look the same, but the **context and purpose** are completely different.  

Example:  
```js
// test.js
console.log("Izhan");
```

```txt
// test.txt
console.log("Izhan");
```

Both files contain the same text, but only the `.js` file will actually execute as **JavaScript code**. Why? Let’s break it down.  

---

## 1. Programming Code ≠ Random Text
- A `.txt` file contains **plain text**. No software assumes it has any special meaning.  
- A `.js` file contains **JavaScript code**, which follows a proper **syntax** and **rules**.  

For example:  
- `console` is a keyword.  
- It must be spelled exactly `console`, not `consol` or `consolee`.  
- Writing `console.log("Izhan")` follows JavaScript’s **syntax rules**:  
  - Keyword → dot → method → parentheses → argument  

This syntax has meaning only to software that **understands JavaScript**.  

---

## 2. Who Understands the Code? (Compilers & Interpreters)
Software like **compilers** and **interpreters** exist to read your code and “make sense” of it.  

They ask questions such as:  
- “This file has a `.js` extension — should I try to parse it as JavaScript?”  
- “I see the keyword `console`. Should I print something to the terminal?”  
- “I see `main()` in C. Should I start the program there?”  

👉 The **file extension (.js, .py, .java, etc.)** tells the software how to interpret the text.  

---

## 3. JavaScript in the Browser
For many years, JavaScript could only be executed **inside browsers**.  
- Every browser (Chrome, Firefox, Safari) comes with a built-in JavaScript engine:  
  - Chrome → **V8**  
  - Firefox → **SpiderMonkey**  
  - Safari → **JavaScriptCore**  
- That’s why tutorials often start with `index.html` and `<script>` tags — the browser was the only “JavaScript runtime” available.  

---

## 4. Running JavaScript Outside the Browser
Later, developers realized: *“Why should JavaScript live only in the browser?”*  

So in 2009, **Ryan Dahl** created **Node.js**:  
- A standalone **JavaScript runtime environment** powered by the Chrome V8 engine.  
- This made JavaScript files (`.js`) executable just like C, Python, or Java files.  
- Example:  
  ```bash
  node test.js
  ```
- Output:  
  ```
  Izhan
  ```

👉 This is why JavaScript is no longer “just a frontend/browser language” — it’s now used for **backend servers, APIs, mobile apps, desktop apps, and more**.  

---

## 5. Node.js vs Deno
- **Node.js** (2009, Ryan Dahl) → Runs JavaScript outside the browser. Extremely popular.  
- **Deno** (2018, Ryan Dahl + Bert Belder) → A modern alternative to Node.js, designed to fix Node’s limitations. Supports **JavaScript, TypeScript, and WebAssembly**.  

---

## 6. Why `.js` and Not `.txt`?
If you load both files (`test.js` and `test.txt`) into Node.js:  
- Node.js will accept the `.js` file and parse it as JavaScript.  
- Node.js will ignore the `.txt` file because `.txt` means *plain text*, not code.  

The **extension** tells the runtime:  
- `.js` → “Parse this as JavaScript code.”  
- `.txt` → “This is just text. Do nothing special.”  

---

## 🔑 Summary
- `.txt` → plain text, no special meaning.  
- `.js` → JavaScript source code, parsed by runtimes like Node.js or browsers.  
- JavaScript engines (V8, SpiderMonkey, etc.) or runtimes (Node.js, Deno) recognize keywords like `console.log` and execute them.  
- This separation is what makes JavaScript a **programming language**, not just “text.”  

---

## 📌 FAQ

**Q: Couldn’t we just rename `.txt` to `.js` and run it?**  
- Yes — if the file contains valid JavaScript syntax, renaming it to `.js` lets the runtime execute it.  

**Q: Is `.js` the only extension for JavaScript?**  
- Mostly yes, but TypeScript uses `.ts`. JSX files in React use `.jsx`.  

**Q: What if I write random text in a `.js` file?**  
- The runtime will throw **syntax errors** because it expects valid JavaScript.  

**Q: Why does Node.js use the Chrome V8 engine?**  
- V8 is fast, efficient, and already battle-tested in browsers. Using it allowed Node.js to scale quickly.  

---

✨ Now you understand why `.js` is not the same as `.txt`, what software executes your code, and how Node.js changed the game for JavaScript.
