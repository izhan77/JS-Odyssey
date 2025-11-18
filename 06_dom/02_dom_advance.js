
// <!DOCTYPE html>
// <html>
//   <head>
//     <title>Page</title>
//   </head>
//   <body>
//     <div id="container">
//       <h1>Hello</h1>
//       <p>Text</p>
//     </div>
//   </body>
// </html>


/*

DOM Tree:
document
  └── html
      ├── head
      │   └── title
      └── body
          └── div#container
              ├── h1
              └── p
*/


// ============================================
// 1. SELECTING ELEMENTS (FINDING ELEMENTS)
// ============================================

// Method 1: getElementById() - Returns single element
const header = document.getElementById('header');
console.log(header);

// Method 2: getElementsByClassName() - Returns HTMLCollection (array-like)
const buttons = document.getElementsByClassName('btn');
console.log(buttons); // HTMLCollection
console.log(buttons[0]); // Access first button

// Method 3: getElementsByTagName() - Returns HTMLCollection
const paragraphs = document.getElementsByTagName('p');
console.log(paragraphs);

// Method 4: querySelector() - Returns FIRST matching element (CSS selectors)
const firstDay = document.querySelector('.day');
console.log(firstDay); // Only first .day element

const specificDiv = document.querySelector('div.day');
const byId = document.querySelector('#myId');
const complex = document.querySelector('div.parent > .day');

// Method 5: querySelectorAll() - Returns NodeList (array-like) of ALL matches
const allDays = document.querySelectorAll('.day');
console.log(allDays); // NodeList of all .day elements

// You can loop through NodeList
allDays.forEach(day => {
    console.log(day.innerHTML);
});

/*
DIFFERENCE BETWEEN querySelector vs getElement methods:

querySelector/querySelectorAll:
✅ Use CSS selectors (more flexible)
✅ Can combine selectors
✅ Returns NodeList (forEach works)
❌ Slightly slower

getElementById/getElementsByClassName:
✅ Faster performance
✅ Live collections (auto-update)
❌ Less flexible
❌ HTMLCollection (forEach doesn't work directly)
*/


// ============================================
// 2. UNDERSTANDING NODES VS ELEMENTS
// ============================================

const parent = document.querySelector('.parent');

// Children vs ChildNodes
console.log(parent.children);    // HTMLCollection - ONLY element nodes
console.log(parent.childNodes);  // NodeList - ALL nodes (text, elements, comments)

/*
NODES: Everything in DOM is a node
- Element nodes: <div>, <p>, <h1>
- Text nodes: text content (including whitespace!)
- Comment nodes: <!-- comments -->
- Document node: document itself

NodeList Output Example:
NodeList(9) [text, div.day, text, div.day, text, div.day, text, div.day, text]
         ↑          ↑        ↑
    whitespace   element  whitespace

WHY? Because HTML whitespace (spaces, newlines) creates text nodes!

<div class="parent">
    <div class="day">Monday</div>  ← newline creates text node
    <div class="day">Tuesday</div>
</div>
*/

// Loop through children (elements only)
for (let i = 0; i < parent.children.length; i++) {
    console.log(parent.children[i].innerHTML);
}

// Converting HTMLCollection to Array
const childrenArray = Array.from(parent.children);
childrenArray.forEach(child => {
    console.log(child.textContent);
});


// ============================================
// 3. NAVIGATING THE DOM (TRAVERSING)
// ============================================

const dayOne = document.querySelector('.day');

// PARENT NAVIGATION
console.log(dayOne.parentElement);      // Direct parent element
console.log(dayOne.parentNode);         // Direct parent node
console.log(dayOne.closest('.parent')); // Nearest ancestor matching selector

// SIBLING NAVIGATION (Elements only)
console.log(dayOne.nextElementSibling);     // Next sibling element
console.log(dayOne.previousElementSibling); // Previous sibling element

// SIBLING NAVIGATION (All nodes)
console.log(dayOne.nextSibling);            // Next node (might be text!)
console.log(dayOne.previousSibling);        // Previous node

// CHILDREN NAVIGATION (Elements only)
console.log(parent.firstElementChild);  // First child element
console.log(parent.lastElementChild);   // Last child element
console.log(parent.children);           // All child elements
console.log(parent.children[1]);        // Second child element

// CHILDREN NAVIGATION (All nodes)
console.log(parent.firstChild);   // First child node (might be text!)
console.log(parent.lastChild);    // Last child node
console.log(parent.childNodes);   // All child nodes

/*
RULE OF THUMB:
- Use "Element" methods (firstElementChild, nextElementSibling) 
  when you want ONLY HTML elements
- Use plain methods (firstChild, nextSibling) 
  when you need ALL nodes including text
*/


// ============================================
// 4. READING & MODIFYING CONTENT
// ============================================

const element = document.querySelector('.day');

// innerHTML - Gets/Sets HTML content (including tags)
console.log(element.innerHTML);        // "Monday"
element.innerHTML = "<strong>Monday</strong>"; // Adds HTML

// innerText - Gets/Sets visible text only (respects CSS)
console.log(element.innerText);        // "Monday"
element.innerText = "New Monday";      // Plain text only

// textContent - Gets/Sets all text (ignores CSS)
console.log(element.textContent);      // "Monday"
element.textContent = "Updated Monday";

// outerHTML - Gets/Sets element including the element itself
console.log(element.outerHTML);        // "<div class='day'>Monday</div>"
element.outerHTML = "<span>Monday</span>"; // Replaces entire element

/*
DIFFERENCES:

innerHTML:
✅ Can add HTML tags
✅ Faster for large content
❌ Security risk (XSS attacks if using user input)
Example: element.innerHTML = "<strong>Bold</strong>"

innerText:
✅ Only visible text
✅ Respects CSS (hidden elements ignored)
✅ Slower (triggers reflow)
Example: element.innerText = "Plain text"

textContent:
✅ All text including hidden
✅ Faster than innerText
✅ Safe from XSS
Example: element.textContent = "Safe text"

SECURITY TIP: Never use innerHTML with user input!
❌ BAD:  element.innerHTML = userInput;
✅ GOOD: element.textContent = userInput;
*/


// ============================================
// 5. WORKING WITH ATTRIBUTES
// ============================================

const link = document.querySelector('a');

// getAttribute() - Get attribute value
const href = link.getAttribute('href');
console.log(href);

// setAttribute() - Set/Update attribute
link.setAttribute('href', 'https://google.com');
link.setAttribute('target', '_blank');
link.setAttribute('title', 'Go to Google');

// removeAttribute() - Remove attribute
link.removeAttribute('target');

// hasAttribute() - Check if attribute exists
if (link.hasAttribute('href')) {
    console.log('Link has href');
}

// Direct property access (common attributes)
console.log(link.href);        // Get href
link.href = 'https://new.com'; // Set href
console.log(link.id);          // Get id
link.id = 'myLink';            // Set id

// data-* attributes (Custom data)
// HTML: <div data-user-id="123" data-role="admin"></div>
const userDiv = document.querySelector('[data-user-id]');
console.log(userDiv.dataset.userId);  // "123"
console.log(userDiv.dataset.role);    // "admin"
userDiv.dataset.status = "active";    // Add new data attribute

/*
getAttribute vs Direct Property:

getAttribute('href'):
- Returns exact HTML attribute value
- Example: getAttribute('href') → "/page"

Direct property (element.href):
- Returns computed/absolute value
- Example: element.href → "http://example.com/page"

For most cases, use direct properties for common attributes!
*/


// ============================================
// 6. WORKING WITH CSS CLASSES
// ============================================

const box = document.querySelector('.box');

// className - Get/Set entire class string
console.log(box.className);        // "box active"
box.className = "box inactive";    // Replaces ALL classes
box.className += " highlight";     // Adds class (with space!)

// classList - Modern way (Recommended!)
console.log(box.classList);        // DOMTokenList ['box', 'active']

// Add class
box.classList.add('highlight');
box.classList.add('new-class', 'another-class'); // Add multiple

// Remove class
box.classList.remove('active');
box.classList.remove('old', 'unused'); // Remove multiple

// Toggle class (add if absent, remove if present)
box.classList.toggle('active');     // If active → remove, if not → add
box.classList.toggle('dark-mode');  // Great for themes!

// Check if class exists
if (box.classList.contains('active')) {
    console.log('Box is active');
}

// Replace class
box.classList.replace('old-class', 'new-class');

/*
classList is BETTER than className because:
✅ No string manipulation needed
✅ No risk of removing other classes accidentally
✅ More methods available
✅ Cleaner code

❌ BAD:  element.className = "box active";
✅ GOOD: element.classList.add('active');
*/


// ============================================
// 7. INLINE STYLES (style property)
// ============================================

const card = document.querySelector('.card');

// Set individual styles
card.style.backgroundColor = "blue";        // camelCase!
card.style.color = "white";
card.style.padding = "20px";
card.style.fontSize = "18px";
card.style.borderRadius = "10px";
card.style.margin = "10px auto";

// Get computed style (read-only)
const styles = window.getComputedStyle(card);
console.log(styles.backgroundColor);  // rgb(0, 0, 255)
console.log(styles.width);            // "300px"

// Set multiple styles at once (using cssText)
card.style.cssText = "background-color: red; color: white; padding: 20px;";

// Remove inline style
card.style.backgroundColor = "";  // Removes inline style

/*
IMPORTANT NOTES:

1. CSS Property Names:
   CSS: background-color
   JS:  backgroundColor (camelCase)
   
   CSS: font-size
   JS:  fontSize

2. Values must be strings:
   ✅ element.style.width = "100px";
   ❌ element.style.width = 100;

3. Units required:
   ✅ element.style.width = "100px";
   ❌ element.style.width = "100";

4. Inline styles override CSS files!
   Order: Inline > Internal > External

5. For multiple styles, use CSS classes instead:
   ✅ element.classList.add('styled-box');
   ❌ element.style.backgroundColor = "...";
      element.style.color = "...";
      element.style.padding = "...";
*/


// ============================================
// 8. CREATING NEW ELEMENTS
// ============================================

// Step 1: Create element
const newDiv = document.createElement('div');

// Step 2: Set attributes and styles
newDiv.className = "main";
newDiv.id = "unique-id-" + Math.round(Math.random() * 1000);
newDiv.setAttribute("title", "Generated Title");
newDiv.setAttribute("data-type", "dynamic");

// Step 3: Add styles
newDiv.style.backgroundColor = "green";
newDiv.style.padding = "20px";
newDiv.style.color = "white";
newDiv.style.borderRadius = "8px";

// Step 4: Add content (Method 1 - Simple)
newDiv.innerText = "This is new content";

// Step 4: Add content (Method 2 - Recommended for text)
const textNode = document.createTextNode("JavaScript DOM");
newDiv.appendChild(textNode);

// Step 5: Append to DOM
document.body.appendChild(newDiv);

/*
WHY createTextNode instead of innerText?

createTextNode():
✅ More secure (no XSS risk)
✅ Better performance for text
✅ Proper DOM manipulation
Example: node = createTextNode("text")

innerText/innerHTML:
✅ Easier to write
✅ Can add formatted content
❌ Security risk with user input
Example: element.innerText = "text"

BEST PRACTICE:
- Use createTextNode() for pure text
- Use innerText for simple static content
- NEVER use innerHTML with user input
*/

// Creating complex elements
const article = document.createElement('article');
article.innerHTML = `
    <h2>Article Title</h2>
    <p>Article content goes here...</p>
    <button class="read-more">Read More</button>
`;
document.body.appendChild(article);


// ============================================
// 9. ADDING ELEMENTS TO THE DOM
// ============================================

const container = document.querySelector('.container');
const newElement = document.createElement('div');
newElement.textContent = "New Element";

// appendChild() - Adds as last child
container.appendChild(newElement);

// append() - Modern, can add multiple items and text
container.append(newElement);
container.append("Some text", newElement, "More text");

// prepend() - Adds as first child
container.prepend(newElement);

// insertBefore() - Insert before a reference node
const referenceNode = container.children[1];
container.insertBefore(newElement, referenceNode);

// insertAdjacentHTML() - Insert HTML at specific position
container.insertAdjacentHTML('beforebegin', '<div>Before container</div>');
container.insertAdjacentHTML('afterbegin', '<div>First child</div>');
container.insertAdjacentHTML('beforeend', '<div>Last child</div>');
container.insertAdjacentHTML('afterend', '<div>After container</div>');

/*
insertAdjacentHTML() positions:

<!-- beforebegin -->
<div class="container">
    <!-- afterbegin -->
    ...content...
    <!-- beforeend -->
</div>
<!-- afterend -->
*/

// insertAdjacentElement() - Insert element at specific position
const span = document.createElement('span');
container.insertAdjacentElement('afterbegin', span);

// after() and before() - Modern methods
const existing = document.querySelector('.existing');
existing.after(newElement);    // Insert after existing
existing.before(newElement);   // Insert before existing

/*
appendChild vs append:

appendChild():
- Only accepts one Node
- Returns the appended node
- Older method
Example: parent.appendChild(child)

append():
- Accepts multiple nodes/strings
- Returns undefined
- Modern method
- Can add text directly
Example: parent.append(child1, "text", child2)
*/


// ============================================
// 10. REMOVING ELEMENTS
// ============================================

const elementToRemove = document.querySelector('.remove-me');

// Method 1: remove() - Modern, direct removal
elementToRemove.remove();

// Method 2: removeChild() - Remove from parent
const parent2 = document.querySelector('.parent');
const child = parent2.querySelector('.child');
parent2.removeChild(child);

// Remove all children
parent2.innerHTML = "";  // Quick but not recommended
// OR
while (parent2.firstChild) {
    parent2.removeChild(parent2.firstChild);
}

// Remove specific children
const allDivs = document.querySelectorAll('.container div');
allDivs.forEach(div => div.remove());


// ============================================
// 11. REPLACING ELEMENTS
// ============================================

const oldElement = document.querySelector('.old');
const newElement2 = document.createElement('div');
newElement2.textContent = "New Content";

// replaceWith() - Modern method
oldElement.replaceWith(newElement2);

// replaceChild() - Older method
const parentEl = oldElement.parentElement;
parentEl.replaceChild(newElement2, oldElement);


// ============================================
// 12. CLONING ELEMENTS
// ============================================

const original = document.querySelector('.template');

// Shallow clone (element only, no children)
const shallowClone = original.cloneNode(false);

// Deep clone (element with all children)
const deepClone = original.cloneNode(true);

// Modify and add to DOM
deepClone.id = "cloned-element";
deepClone.textContent = "This is a clone";
document.body.appendChild(deepClone);

/*
cloneNode(deep):
- true: Clone element AND all descendants
- false: Clone only the element itself

IMPORTANT: Event listeners are NOT cloned!
You need to re-attach event listeners to cloned elements.
*/


// ============================================
// 13. WORKING WITH FORMS
// ============================================

const form = document.querySelector('form');
const input = document.querySelector('input[name="username"]');

// Get form values
console.log(input.value);           // Current input value
console.log(input.type);            // Input type
console.log(input.placeholder);     // Placeholder text

// Set form values
input.value = "John Doe";
input.placeholder = "Enter name";

// Form element properties
const checkbox = document.querySelector('input[type="checkbox"]');
console.log(checkbox.checked);      // true/false
checkbox.checked = true;            // Check the checkbox

const select = document.querySelector('select');
console.log(select.value);          // Selected option value
console.log(select.selectedIndex);  // Index of selected option

// Radio buttons
const radio = document.querySelector('input[name="gender"]:checked');
console.log(radio ? radio.value : "None selected");

// Get all form data
const formData = new FormData(form);
for (let [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
}


// ============================================
// 14. ELEMENT PROPERTIES & MEASUREMENTS
// ============================================

const elem = document.querySelector('.box');

// Content dimensions (excluding padding, border, scrollbar)
console.log(elem.clientWidth);   // Content + padding (no border/scrollbar)
console.log(elem.clientHeight);

// Full dimensions (including border, but not margin)
console.log(elem.offsetWidth);   // Content + padding + border
console.log(elem.offsetHeight);

// Scroll dimensions
console.log(elem.scrollWidth);   // Full content width (including hidden)
console.log(elem.scrollHeight);  // Full content height (including hidden)
console.log(elem.scrollTop);     // Pixels scrolled from top
console.log(elem.scrollLeft);    // Pixels scrolled from left

// Position relative to viewport
const rect = elem.getBoundingClientRect();
console.log(rect.top);           // Distance from top of viewport
console.log(rect.left);          // Distance from left of viewport
console.log(rect.right);
console.log(rect.bottom);
console.log(rect.width);
console.log(rect.height);

// Position relative to offset parent
console.log(elem.offsetTop);     // Distance from offsetParent top
console.log(elem.offsetLeft);    // Distance from offsetParent left
console.log(elem.offsetParent);  // Nearest positioned ancestor

/*
MEASUREMENT COMPARISON:

clientWidth/Height:
- Content + padding
- NO border, NO scrollbar
- Use for: Inner dimensions

offsetWidth/Height:
- Content + padding + border
- Use for: Total element size

scrollWidth/Height:
- Full content size (even if hidden by overflow)
- Use for: Detecting if content overflows

getBoundingClientRect():
- Position relative to viewport
- Use for: Scroll animations, sticky elements
*/


// ============================================
// 15. CHECKING ELEMENT VISIBILITY & STATE
// ============================================

const element2 = document.querySelector('.my-element');

// Check if element exists
if (element2) {
    console.log("Element exists");
} else {
    console.log("Element not found");
}

// Check if element is hidden
const isHidden = element2.offsetParent === null;
console.log(isHidden);

// Check if element is in viewport
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= window.innerHeight &&
        rect.right <= window.innerWidth
    );
}
console.log(isInViewport(element2));

// Check element type
console.log(element2.tagName);        // "DIV"
console.log(element2.nodeName);       // "DIV"
console.log(element2.nodeType);       // 1 (Element node)

// Check if elements match
const div1 = document.querySelector('#div1');
const div2 = document.querySelector('#div2');
console.log(div1 === div2);           // false (different elements)
console.log(div1.isEqualNode(div2));  // true if same structure/content

// Check if element matches selector
console.log(div1.matches('.active')); // true if has 'active' class
console.log(div1.matches('div'));     // true if it's a div


// ============================================
// 16. PRACTICAL REAL-WORLD EXAMPLES
// ============================================

// Example 1: Create a dynamic card
function createCard(title, description, imageUrl) {
    const card = document.createElement('div');
    card.className = 'card';
    
    card.innerHTML = `
        <img src="${imageUrl}" alt="${title}">
        <div class="card-body">
            <h3>${title}</h3>
            <p>${description}</p>
            <button class="btn">Read More</button>
        </div>
    `;
    
    // Add styles
    card.style.cssText = `
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 16px;
        margin: 10px;
        max-width: 300px;
    `;
    
    return card;
}

// Use it
const myCard = createCard(
    "JavaScript Tutorial",
    "Learn DOM manipulation from scratch",
    "image.jpg"
);
document.body.appendChild(myCard);


// Example 2: Toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
}

// Load saved preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}


// Example 3: Create a dynamic list
function createList(items) {
    const ul = document.createElement('ul');
    ul.className = 'dynamic-list';
    
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        li.style.padding = '8px';
        li.style.borderBottom = '1px solid #eee';
        ul.appendChild(li);
    });
    
    return ul;
}

const myList = createList(['Apple', 'Banana', 'Orange', 'Mango']);
document.querySelector('.container').appendChild(myList);


// Example 4: Highlight active navigation
function setActiveNav() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname;
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}


// Example 5: Image gallery generator
function createGallery(images) {
    const gallery = document.createElement('div');
    gallery.className = 'gallery';
    gallery.style.display = 'grid';
    gallery.style.gridTemplateColumns = 'repeat(3, 1fr)';
    gallery.style.gap = '10px';
    
    images.forEach(imgSrc => {
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = 'Gallery image';
        img.style.width = '100%';
        img.style.borderRadius = '8px';
        img.style.cursor = 'pointer';
        
        img.addEventListener('click', () => {
            // Open lightbox
            console.log(`Clicked: ${imgSrc}`);
        });
        
        gallery.appendChild(img);
    });
    
    return gallery;
}


// ============================================
// 17. PERFORMANCE BEST PRACTICES
// ============================================

/*
1. CACHE SELECTORS
❌ BAD:
document.querySelector('.box').style.color = "red";
document.querySelector('.box').style.padding = "20px";

✅ GOOD:
const box = document.querySelector('.box');
box.style.color = "red";
box.style.padding = "20px";


2. BATCH DOM CHANGES
❌ BAD:
for (let i = 0; i < 1000; i++) {
    const div = document.createElement('div');
    document.body.appendChild(div);  // 1000 reflows!
}

✅ GOOD:
const fragment = document.createDocumentFragment();
for (let i = 0; i < 1000; i++) {
    const div = document.createElement('div');
    fragment.appendChild(div);
}
document.body.appendChild(fragment);  // 1 reflow!


3. MINIMIZE REFLOWS/REPAINTS
❌ BAD:
element.style.width = "100px";
element.style.height = "100px";
element.style.padding = "20px";

✅ GOOD:
element.style.cssText = "width: 100px; height: 100px; padding: 20px;";
// OR
element.className = "sized-box";


4. USE EVENT DELEGATION (covered in events)
❌ BAD:
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => {
    btn.addEventListener('click', handleClick);  // Multiple listeners
});

✅ GOOD:
document.querySelector('.container').addEventListener('click', (e) => {
    if (e.target.matches('.btn')) {
        handleClick(e);  // Single listener
    }
});


5. AVOID UNNECESSARY QUERIES
❌ BAD:
function update() {
    document.querySelector('.counter').textContent = count;
    document.querySelector('.status').textContent = status;
}

✅ GOOD:
const counter = document.querySelector('.counter');
const statusEl = document.querySelector('.status');
function update() {
    counter.textContent = count;
    statusEl.textContent = status;
}
*/


// ============================================
// 18. COMMON MISTAKES & HOW TO FIX THEM
// ============================================

/*
MISTAKE 1: querySelector returns null
❌ WRONG:
const element = document.querySelector('.not-exists');
element.style.color = "red";  // ERROR: Cannot read property 'style' of null

✅ CORRECT:
const element = document.querySelector('.not-exists');
if (element) {
    element.style.color = "red";
}
// OR
const element = document.querySelector('.not-exists');
element?.style.color = "red";  // Optional chaining


MISTAKE 2: Forgetting units in styles
❌ WRONG:
element.style.width = 100;        // No effect!
element.style.padding = 20;       // No effect!

✅ CORRECT:
element.style.width = "100px";
element.style.padding = "20px";


MISTAKE 3: Using innerHTML with user input
❌ WRONG (SECURITY RISK):
const userInput = getUserInput();
element.innerHTML = userInput;  // XSS vulnerability!

✅ CORRECT:
const userInput = getUserInput();
element.textContent = userInput;  // Safe!


MISTAKE 4: Modifying collection while iterating
❌ WRONG:
const divs = document.querySelectorAll('div');
divs.forEach(div => div.remove());  // Some divs remain!

✅ CORRECT:
const divs = Array.from(document.querySelectorAll('div'));
divs.forEach(div => div.remove());


MISTAKE 5: Not using camelCase for CSS properties
❌ WRONG:
element.style.background-color = "red";  // Syntax error!

✅ CORRECT:
element.style.backgroundColor = "red";


MISTAKE 6: Accessing children before elements exist
❌ WRONG (script in <head>):
const element = document.querySelector('.box');  // null!

✅ CORRECT:
// Put script at end of <body>
// OR use DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    const element = document.querySelector('.box');
});
*/


// ============================================
// 19. DOM MANIPULATION CHEAT SHEET
// ============================================

/*
SELECTING:
document.getElementById('id')
document.getElementsByClassName('class')
document.getElementsByTagName('tag')
document.querySelector('.class')
document.querySelectorAll('.class')

CONTENT:
element.innerHTML       // HTML content
element.innerText       // Visible text
element.textContent     // All text

ATTRIBUTES:
element.getAttribute('attr')
element.setAttribute('attr', 'value')
element.removeAttribute('attr')
element.hasAttribute('attr')
element.dataset.customData

CLASSES:
element.classList.add('class')
element.classList.remove('class')
element.classList.toggle('class')
element.classList.contains('class')
element.className = 'class1 class2'

STYLES:
element.style.property = 'value'
element.style.cssText = 'css here'
window.getComputedStyle(element)

CREATING:
document.createElement('tag')
document.createTextNode('text')
element.cloneNode(true/false)

ADDING:
parent.appendChild(child)
parent.append(child1, child2)
parent.prepend(child)
element.insertAdjacentHTML(position, html)

REMOVING:
element.remove()
parent.removeChild(child)

TRAVERSING:
element.parentElement
element.children
element.firstElementChild
element.lastElementChild
element.nextElementSibling
element.previousElementSibling
element.closest('.selector')

MEASUREMENTS:
element.offsetWidth / offsetHeight
element.clientWidth / clientHeight
element.scrollWidth / scrollHeight
element.getBoundingClientRect()
*/


// ============================================
// 20. PRACTICE EXERCISES
// ============================================

/*
EXERCISE 1: Create a TODO List
- Create input and button
- Add new todos dynamically
- Each todo should have delete button
- Style them with classes

EXERCISE 2: Image Carousel
- Create prev/next buttons
- Change image source on click
- Add active indicator dots
- Auto-play functionality

EXERCISE 3: Tabs Component
- Create tab buttons
- Show/hide content based on active tab
- Add 'active' class to selected tab
- Smooth transitions

EXERCISE 4: Modal/Popup
- Create modal with overlay
- Open/close functionality
- Close on outside
*/