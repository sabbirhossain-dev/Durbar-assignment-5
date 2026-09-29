function formatAttendanceReport(students) {
  return students.map((studentItem) => {
    const percentage = Math.round(
      (studentItem.present / studentItem.total) * 100,
    );

    let status;
    if (percentage >= 90) {
      status = "Excellent";
    } else if (percentage >= 75) {
      status = "Good";
    } else {
      status = "At Risk";
    }

    return `${studentItem.name}: ${studentItem.present}/${studentItem.total} (${percentage}%) - ${status}`;
  });
}

console.log(formatAttendanceReport([{ name: "Rafi", present: 18, total: 20 }]));
console.log(
  formatAttendanceReport([
    { name: "Lina", present: 15, total: 20 },
    { name: "Sam", present: 12, total: 20 },
  ]),
);
