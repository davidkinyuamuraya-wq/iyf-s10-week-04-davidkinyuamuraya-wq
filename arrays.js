const numbers = [2, -5, 8, 12, -3, 15, 4];

// 1. Double all numbers
const doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);

// 2. Filter out negative numbers
const positiveNumbers = numbers.filter(num => num >= 0);
console.log("Positive numbers:", positiveNumbers);

// 3. Find the first number greater than 10
const firstGreaterThan10 = numbers.find(num => num > 10);
console.log("First > 10:", firstGreaterThan10);

// 4. Calculate the product of all numbers
const product = numbers.reduce((total, num) => total * num, 1);
console.log("Product:", product);
