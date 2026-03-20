// Creating objects
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isStudent: false,
    hobbies: ["reading", "coding", "gaming"],
    address: {
        city: "New York",
        country: "USA"
    }
};

// Accessing properties
console.log(person.firstName);         // Dot notation
console.log(person["lastName"]);       // Bracket notation
console.log(person.address.city);      // Nested

// Modifying properties
person.age = 31;
person.email = "john@example.com";     // Add new property
delete person.isStudent;               // Remove property

const calculator = {
    add: function(a, b) {
        return a + b;
    },
    // Shorthand method syntax
    subtract(a, b) {
        return a - b;
    },
    // Arrow function
    multiply: (a, b) => a * b
};

console.log(calculator.add(5, 3));

const scores = {
    math: 95,
    english: 88,
    science: 92
};

// Get keys
console.log(Object.keys(scores));   // ["math", "english", "science"]

// Get values
console.log(Object.values(scores)); // [95, 88, 92]

// Get entries
console.log(Object.entries(scores)); // [["math", 95], ["english", 88], ...]

// Loop through
for (const [subject, score] of Object.entries(scores)) {
    console.log(`${subject}: ${score}`);
}

