const students = [
    { name: "Alice", age: 22, grade: 85, major: "CS" },
    { name: "Bob", age: 20, grade: 72, major: "Math" },
    { name: "Charlie", age: 23, grade: 90, major: "CS" },
    { name: "Diana", age: 21, grade: 88, major: "Physics" },
    { name: "Eve", age: 22, grade: 95, major: "CS" }
];

// Your tasks - use array methods:

// 1. Get all student names
const names = students.map(/* your code */);

// 2. Get students with grade > 80
const highAchievers = students.filter(/* your code */);

// 3. Find the student named "Charlie"
const charlie = students.find(/* your code */);

// 4. Calculate average grade
const avgGrade = students.reduce(/* your code */);

// 5. Get CS majors only
const csMajors = students.filter(/* your code */);

// 6. Sort by grade (highest first)
const sortedByGrade = [...students].sort(/* your code */);

// 7. Check if any student has grade > 90
const hasTopStudent = students.some(/* your code */);

// 8. Check if all students are passing (grade >= 60)
const allPassing = students.every(/* your code */);
