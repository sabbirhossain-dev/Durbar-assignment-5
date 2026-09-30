function groupStudentsByGradeBand(students) {
  const result = {
    A: [],
    B: [],
    C: [],
    F: [],
  };
  for (let i = 0; i < students.length; i++) {
    const student = students[i];

    if (student.marks >= 80) {
      result.A.push(student);
    } else if (student.marks >= 70) {
      result.B.push(student);
    } else if (student.marks >= 60) {
      result.C.push(student);
    } else {
      result.F.push(student);
    }
  }
  return result;
}

const students1 = [
  { name: "Alice", marks: 85 },
  { name: "Bob", marks: 72 },
  { name: "Charlie", marks: 58 },
  { name: "David", marks: 91 },
];
const students2 = [
  { name: "Eve", marks: 65 },
  { name: "Frank", marks: 60 },
];

console.log(groupStudentsByGradeBand(students1));
console.log(groupStudentsByGradeBand(students2));
