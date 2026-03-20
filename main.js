// variable declarations
let name="your name";
let age=25;
const birthyear=1999;
// type of operator
console.log(typeof name); // string
console.log(typeof age); //number
console.log(typeof true); // booleon
// let vs const
let score = 100
score = 150; //works!

const PI = 3.14159;
// PI = 3; // Error! const cannot be reassigned

// Basic math
let a = 10;
let b = 3;

console.log(a + b); // Addition
console.log(a - b); // Subraction
console.log( a * b); // Multiplaction
console.log(a / b); //  Division
console.log(a % b); // Modulus(remainder)
console.log(a ** b); //Exponentiation

// Increment/Decrement
let count = 0;
count++;  // count is now 1
count--;  // count is now 0

let firstName = "John";
let lastName = "Doe";

// Concatenation
let fullName = firstName + " " + lastName;

// Template literals (preferred)
let greeting = `Hello, ${firstName}!`;
let message = `Your name has ${firstName.length} characters.`;

// String methods
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(firstName.charAt(0));
console.log(fullName.includes("John"));

// Comparison
console.log(5 > 3);    // true
console.log(5 < 3);    // false
console.log(5 === 5);  // true (strict equality)
console.log(5 == "5"); // true (loose equality - avoid!)
console.log(5 !== 3);  // true

// Logical
console.log(true && true);   // AND
console.log(true || false);  // OR
console.log(!true);          // NOT

// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function expression
const add = function(a, b) {
    return a + b;
};

// Arrow function
const multiply = (a, b) => a * b;

// Arrow function with body
const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
};

// 1. Calculate area of a rectangle
function calculateArea(width, height) {
  return width * height;
}

// 2. Convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// 3. Check if a number is even
function isEven(number) {
  return number % 2 === 0;
}

// 4. Get initials from full name
function getInitials(fullName) {
  let names = fullName.split(" ");
  let initials = names.map(name => name[0].toUpperCase());
  return initials.join("");
}

// 5. Reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

function greet(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

console.log(greet());              // Hello, Guest!
console.log(greet("Alice"));       // Hello, Alice!
console.log(greet("Bob", "Hi"));   // Hi, Bob!

function calculateTip(bill, tipPercent = 15) {
  return (bill * tipPercent) / 100;
}

console.log(calculateTip(100));      // 15 (default 15%)
console.log(calculateTip(100, 20));  // 20
console.log(calculateTip(250, 10));  // 25

function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

function getDayName(dayNumber) {
    switch (dayNumber) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        // ... add remaining days
        default:
            return "Invalid day";
    }
}

// For loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// While loop
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}

// For...of (arrays)
const colors = ["red", "green", "blue"];
for (const color of colors) {
    console.log(color);
}


