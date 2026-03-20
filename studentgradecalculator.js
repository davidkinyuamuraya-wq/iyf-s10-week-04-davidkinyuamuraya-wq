const gradeTracker = {
    students: [],
    
    // Add a new student
    addStudent(name, grades) {
        this.students.push({ name, grades });
    },
    
    // Get a student by name
    getStudent(name) {
        return this.students.find(student => student.name === name) || null;
    },
    
    // Calculate a student's average
    getStudentAverage(name) {
        const student = this.getStudent(name);
        if (!student) return null;

        const grades = Object.values(student.grades);
        const total = grades.reduce((sum, grade) => sum + grade, 0);
        return +(total / grades.length).toFixed(2);
    },
    
    // Get class average for a subject
    getSubjectAverage(subject) {
        const subjectGrades = this.students
            .map(student => student.grades[subject])
            .filter(grade => grade !== undefined);

        if (subjectGrades.length === 0) return null;

        const total = subjectGrades.reduce((sum, grade) => sum + grade, 0);
        return +(total / subjectGrades.length).toFixed(2);
    },
    
    // Get top performer
    getTopStudent() {
        if (this.students.length === 0) return null;

        let topStudent = null;
        let highestAvg = -Infinity;

        this.students.forEach(student => {
            const avg = this.getStudentAverage(student.name);
            if (avg > highestAvg) {
                highestAvg = avg;
                topStudent = student;
            }
        });

        return topStudent ? topStudent.name : null;
    },
    
    // Get students needing help (average < 70)
    getStrugglingStudents() {
        return this.students
            .filter(student => this.getStudentAverage(student.name) < 70)
            .map(student => student.name);
    },
    
    // Get letter grade
    getLetterGrade(score) {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";
    },
    
    // Generate report card
    generateReportCard(name) {
        const student = this.getStudent(name);
        if (!student) return "Student not found";

        let report = `Report Card for ${student.name}\n`;
        report += "-------------------------\n";

        for (let subject in student.grades) {
            const score = student.grades[subject];
            const letter = this.getLetterGrade(score);
            report += `${subject}: ${score} (${letter})\n`;
        }

        const avg = this.getStudentAverage(name);
        report += `\nAverage: ${avg} (${this.getLetterGrade(avg)})`;

        return report;
    }
};

// Test your implementation
gradeTracker.addStudent("Alice", { math: 95, english: 88, science: 92 });
gradeTracker.addStudent("Bob", { math: 72, english: 85, science: 78 });
gradeTracker.addStudent("Charlie", { math: 60, english: 65, science: 58 });

console.log(gradeTracker.getStudentAverage("Alice"));      
console.log(gradeTracker.getSubjectAverage("math"));       
console.log(gradeTracker.getTopStudent());                 
console.log(gradeTracker.getStrugglingStudents());         
console.log(gradeTracker.generateReportCard("Alice"));
