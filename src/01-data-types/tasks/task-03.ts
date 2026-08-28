/**
 * SMK Telkom Malang is developing a new Student Information System. 
 * Before students can use the system, the administrator must record each student's basic information. 
 * Every student has a unique student ID, a full name, an age, and a status indicating whether they are currently an active student.
 * 
 * Task:
 * 1. Define a proper type for the student information.
 * 2. Implement a type that you defined on 3 students data.
 * 
 * display the student data using console.log.
 */

type Book = {
	isbn: string;
	title: string;
	author: string;
	pageCount: number;
	category: string;
	isAvailable: boolean;
};

const books: Book[] = [
	{ isbn: "978-602-03-1234-5", title: "Laskar Pelangi", author: "Andrea Hirata", pageCount: 529, category: "Fiction", isAvailable: true },
	{ isbn: "978-602-06-4567-8", title: "Bumi Manusia", author: "Pramoedya Ananta Toer", pageCount: 535, category: "Historical Fiction", isAvailable: false },
	{ isbn: "978-013-4685-990", title: "Effective TypeScript", author: "Dan Vanderkam", pageCount: 250, category: "Technology", isAvailable: true },
];

console.log(books);