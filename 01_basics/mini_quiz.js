/*

Q1) What is the difference between let, const, and var?

Ans) In const variable declaration, we cannot reassign or update that variable declared with const - immutable
    let variable declaration allows reassign or update that variable - mutable
    var also allows reassign or update that variable - mutable

Q2) Can you declare a variable without let/const/var? What happens?

Ans) Yes we can declare a variable without let/const/var, the moment we declare it becomes a global variable, like it becomes a property to gloabl object 
     But note in strict mode 'use strict'; if we try to assign value without declaring, so it will throw an error!

Q3) What will happen if you try to reassign a value to a const variable?

Ans) It will throw an Assignement Error 

Q4) Predict the output:

    let x;
    console.log(x);

Ans) undefined

Q5) What is the default value of a variable that is declared but not initialized?

Ans) undefined

Q6) Which one is a primitive data type in JavaScript?

(a) Object

(b) Number

(c) Array

(d) Function

Ans) Number

Q7) True or False: var is block-scoped while let is function-scoped.

Ans) False, var is function-scoped, let is block-scoped

Q8) Why is it generally recommended to avoid using var in modern JavaScript?

Ans) - no accidental memory leakage like variables declared with var can accidenetly leak outside of their scope to interfere with other codes and cause bugs
     - no accidental over riding like there is possiblilty of a risk of var overiding prevous data if used with same varaible name
     - global pollution

Q9) Predict the output:

    console.log(a);
    var a = 5;

Ans) undefined

Q10) Why does typeof null return "object"?

Ans) - Back in 1995 , when javascript was first created by brendan eich, back then the values in JS were represented as tags with small type identifier
     - for example : Numbers had one tag, Objects had another and Strings had another
     - so null was given the same tag as objects like (binary value 000), bcz developers thought null as an 'empty object referenece' 
     - so whenever you ask for typeof null, Javascript sees the tag 000 and returns object

Q11) What is hoisting? How does it affect var, let, and const differently?

Ans) Hoisting means Pre Preperation Phase like JS prepares variables/functions before executing code but behaves differently for var VS let/const.
    A - var Hoisting (Weird Behavior)
        - declaration is moved to top, initialized with undefined

        - How you see it : 
        - e.g: console.log(x); //undefined (not an error!)
                var x = 5;
        
        - How JS sees it : 
            var x;          // declaration hoisted (value = undefined)
            console.log(x); // undefined
            x = 5;          // assignement happens here

    B - let/const Hoisting (Weird Behavior)
        - declaration is hoisted but not initialized (unlike var ) -> Temporal Dead Zone (TDZ)
        
        - How you see it : 
        - e.g: console.log(x); // Reference error : x is not defined (TDZ)
                let x = 5;
        
        - How JS sees it :
            let age;            // declaration hoisted but no value assigned - TDZ
            console.log(age);   // X Error : Cant use before initialization
            age = 25;           // Now usable   

Q12) What is the difference between undefined and null? Give an example of each.

Ans) - undefined: a primitive that means “no value was assigned” Created automatically by the language (e.g. when a variable is declared but not initialized, or a function has no return)
     - null: a primitive whose value is “no object” - typically used by programmers to intentionally indicate “no value” or “empty reference”
     
     - Example : 
        let a; console.log(a); // undefined — you didn’t give it a value.
        let o = null; — you explicitly say “I mean no object here.”








*/