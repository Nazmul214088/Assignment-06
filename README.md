1) What is the difference between var, let, and const?
   
   Ans. var: Old way, function-scoped, can be redeclared & updated.
        let: Block-scoped, can be updated but not redeclared in the same scope.
       const: Block-scoped, cannot be updated or redeclared (value is constant).
       Best practice: Use let when the value will change, and const when it won’t. Avoid var.
   
2) What is the difference between map(), forEach(), and filter()?
   
   Ans.
   forEach(): just loops through items, does not return anything.
   map(): loops through items, returns a new array with changed values.
   filter(): loops through items, returns a new array with only items that match a condition.
   
3) What are arrow functions in ES6?
   
   Ans.
   Arrow functions (ES6) are a shorter way to write functions in JavaScript.
   Great for small functions
   
4) How does destructuring assignment work in ES6?
   
   Ans.
   Destructuring = easy way to take values from arrays or objects and put them into variables.
   example:
   let [a, b] = [2, 5]; // a = 2, b = 5
   
5) Explain template literals in ES6. How are they different from string concatenation?
6) 
   Ans.
   Template literals (ES6) are special strings written with backticks ( ` ` ) instead of quotes.
   Features:
      String interpolation (insert variables easily with ${ }).
      Multi-line strings (no need for \n).
