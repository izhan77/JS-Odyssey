
/*
========================================================
WHAT IS THE DOM?
========================================================
The DOM (Document Object Model) is how JavaScript interacts
with the HTML page. The browser converts HTML into a 
tree-like structure made of nodes.

window  --> top-level object (browser)
document --> the HTML page inside that window
*/

// =======================================================
// WINDOW & DOCUMENT
// =======================================================

console.log(window);        // Entire browser window object
console.log(document);      // HTML document object
console.log(window.document);

// =======================================================
// HTMLCollection vs NodeList vs Arrays
// =======================================================
/*
HTMLCollection
- Returned by getElementsByClassName, getElementsByTagName
- LIVE collection (updates automatically when DOM changes)
- NOT a real array (no .forEach)

NodeList
- Returned by querySelectorAll
- NOT live (static)
- Supports forEach
- Still NOT a real array

Array
- Fully featured JS array
- You must convert HTMLCollection → Array if needed:

  Array.from(htmlCollection)
*/

// =======================================================
// SELECTORS
// =======================================================

// By ID
document.getElementById("title");

// By Class
document.getElementsByClassName("heading");

// Modern Selectors
document.querySelector("h1");
document.querySelector("#title");
document.querySelector(".heading");
document.querySelector('input[type="password"]');

// Selecting all
document.querySelectorAll("li");

// =======================================================
// WORKING WITH ELEMENTS
// =======================================================

const title = document.getElementById("title");

// Reading properties
title.id;
title.className;
title.innerHTML;
title.innerText;
title.textContent;

// Writing properties
title.style.backgroundColor = "red";
title.style.color = "white";
title.style.padding = "10px 20px";

// Changing attributes
title.setAttribute("class", "test heading");

// =======================================================
// INNER TEXT vs TEXT CONTENT vs INNER HTML
// =======================================================
/*
innerText:
- Shows only visible text
- Respects CSS (ignores display:none)

textContent:
- Shows ALL text (including hidden ones)

innerHTML:
- Shows + allows modifying HTML tags
*/

// =======================================================
// QUERYING MULTIPLE ELEMENTS
// =======================================================

// NodeList
const listItems = document.querySelectorAll("li");

// Can loop directly
listItems.forEach((li) => {
  li.style.backgroundColor = "yellow";
  li.style.color = "black";
});

// HTMLCollection
const tempClassList = document.getElementsByClassName("list-item");

// ERROR: tempClassList.forEach is not a function
// Convert to array:
Array.from(tempClassList).forEach((li) => {
  li.style.backgroundColor = "green";
});

// =======================================================
// COMMON ERRORS EXPLAINED
// =======================================================
/*
1) document.getElementById('title').class
   ❌ undefined — because property name is className

2) myList.style.color = 'red'
   ❌ myList is NodeList or HTMLCollection, not an element

Fix:
myList[0].style.color = "red";
or convert to array and loop
*/

