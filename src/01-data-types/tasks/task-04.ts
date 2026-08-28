/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */

type Attendance = {
	employeeId: string;
	employeeName: string;
	date: string;
	checkInTime: string;
	checkOutTime: string;
	totalWorkingHours: number;
	isPresent: boolean;
};

const attendanceRecords: Attendance[] = [
	{ employeeId: "EMP001", employeeName: "Iwan Lintang", date: "2026-08-28", checkInTime: "08:00", checkOutTime: "17:00", totalWorkingHours: 8, isPresent: true },
	{ employeeId: "EMP002", employeeName: "Hadi Asep", date: "2026-08-28", checkInTime: "08:15", checkOutTime: "17:15", totalWorkingHours: 8, isPresent: true },
	{ employeeId: "EMP003", employeeName: "Ako Cecep", date: "2026-08-28", checkInTime: "-", checkOutTime: "-", totalWorkingHours: 0, isPresent: false },
];

console.log(attendanceRecords);