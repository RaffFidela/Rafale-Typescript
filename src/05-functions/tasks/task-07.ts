/**
 * A university stores enrollment information at following array
 * The university needs a report containing:
 * - Total students
 * - Active students
 * - Inactive students
 * - Software Engineering students
 * - Networking students
 * - Multimedia students
 * 
 * Complete following functions!
 */

const students = [
  {
    name: "Alya",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Budi",
    major: "Networking",
    active: false
  },
  {
    name: "Citra",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Dimas",
    major: "Multimedia",
    active: true
  },
  {
    name: "Eka",
    major: "Networking",
    active: false
  }
];

function countActiveStudents(students: any[]): number {
    let count = 0;
    for (const student of students) {
        if (student.active) {
            count++;
        }
    }
    return count;
}

function countInactiveStudents(students: any[]): number {
    let count = 0;
    for (const student of students) {
        if (!student.active) {
            count++;
        }
    }
    return count;
}

function countStudentsByMajor(students: any[], major: string): number {
    let count = 0;
    for (const student of students) {
        if (student.major === major) {
            count++;
        }
    }
    return count;
}

function printEnrollmentReport(students: any[]) {
    console.log("Enrollment Report");
    console.log("=================");
    console.log(`Total students: ${students.length}`);
    console.log(`Active students: ${countActiveStudents(students)}`);
    console.log(`Inactive students: ${countInactiveStudents(students)}`);
    console.log(`Software Engineering students: ${countStudentsByMajor(students, "Software Engineering")}`);
    console.log(`Networking students: ${countStudentsByMajor(students, "Networking")}`);
    console.log(`Multimedia students: ${countStudentsByMajor(students, "Multimedia")}`);
}