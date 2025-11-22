// WHY EVENTS MATTER?
// Events allow your webpage to *react* to user actions like clicks,
// typing, scrolling, form submissions, key presses, and more.
//
// Instead of writing code that runs once, events help JavaScript
// respond dynamically to interactions.
//
// ------------------------------------------------
// 1. OLD WAY (DON'T USE): onclick, onmouseover, etc.
// ------------------------------------------------
// ❌ LIMITATIONS:
// - You get almost no information about the event
// - You can't attach multiple events to the same element
// - Hard to debug
//
// Example:
// document.getElementById('btn').onclick = function () { }
//
// ------------------------------------------------
// 2. RECOMMENDED WAY: addEventListener()
// ------------------------------------------------
//
// Syntax:
// element.addEventListener("eventName", callbackFunction, useCapture);
//
// WHY USE THIS?
// - Supports Event Bubbling & Capturing
// - Allows multiple listeners on the same element
// - Gives full event object (e), containing EVERYTHING about the interaction
//
// Example:
// document.getElementById('btn').addEventListener("click", (e) => {
//     console.log("Button clicked!");
// });
//
// ------------------------------------------------
// 3. EVENT OBJECT (e)
// ------------------------------------------------
// Every event listener receives a SPECIAL OBJECT called 'event' or (e).
// It stores important details about what happened.
//
// MOST IMPORTANT PROPERTIES:
//
// e.type           → event type ("click", "keyup")
// e.timeStamp      → time when event executed
// e.target         → the element that triggered event
// e.currentTarget  → element currently handling the event
//
// Mouse:
// e.clientX, e.clientY    → mouse position (viewport)
// e.screenX, e.screenY    → mouse position (screen)
//
// Keyboard:
// e.key           → key pressed
// e.keyCode       → numeric key code (deprecated)
//
// Form:
// e.preventDefault()   → stop default behavior (e.g., form reload)
//
// ------------------------------------------------
// 4. EVENT PROPAGATION
// ------------------------------------------------
// PHASES OF PROPAGATION:
// 1. Capture Phase     (top → bottom)
// 2. Target Phase      (actual clicked element)
// 3. Bubbling Phase    (bottom → top) → DEFAULT
//
// Bubbling Example: img → li → ul → body → document
//
// CAPTURING MODE:
// element.addEventListener("click", callback, true);
//
// BUBBLING MODE (default):
// element.addEventListener("click", callback, false);
//
// ------------------------------------------------
// 5. stopPropagation()
// ------------------------------------------------
//
// Stops the event from traveling further.
//
// example:
// forest.addEventListener("click", (e) => {
//     e.stopPropagation();
// });
//
// ------------------------------------------------
// 6. preventDefault()
// ------------------------------------------------
//
// Stops browser default behavior.
//
// example:
// googleLink.addEventListener("click", (e) => {
//     e.preventDefault();
//     console.log("Prevented Google redirect");
// });
//
// ------------------------------------------------
// 7. EVENT DELEGATION
// ------------------------------------------------
//
// Instead of adding 20 listeners for 20 images,
// attach ONE listener to the parent <ul>.
//
// Example:
// document.querySelector('#images').addEventListener('click', (e) => {
//     if (e.target.tagName === 'IMG') {
//         e.target.parentNode.remove();
//     }
// });
//
// BENEFITS:
// - Better performance
// - Works with dynamically added elements
//
// ------------------------------------------------
// 8. IMPORTANT EVENT TYPES
// ------------------------------------------------
//
// FORM EVENTS:
// "input"     – real-time typing
// "change"    – value changed & focus lost
// "submit"    – form submitted
// "focus"
// "blur"
//
// MOUSE EVENTS:
// "click"
// "dblclick"
// "mousedown"
// "mouseup"
// "mouseover"
// "mouseout"
// "mousemove"
//
// KEYBOARD EVENTS:
// "keydown"
// "keyup"
//
// WINDOW/DOCUMENT EVENTS:
// "load"
// "DOMContentLoaded"
// "resize"
// "scroll"
//
// ------------------------------------------------
// SUMMARY
// ------------------------------------------------
// ✔ addEventListener → BEST way to handle events
// ✔ e.target → actual clicked element
// ✔ e.preventDefault → stops default behavior
// ✔ e.stopPropagation → stops bubbling
// ✔ Delegation → ONE listener for MANY items

