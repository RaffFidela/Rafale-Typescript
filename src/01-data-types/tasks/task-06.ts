/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */

type Registration = {
	student: { studentId: string; fullName: string; gradeLevel: number };
	course: { courseId: string; courseTitle: string; instructorName: string; totalLearningHours: number };
	registrationDate: string;
	isPaymentCompleted: boolean;
};

const registrations: Registration[] = [
	{ student: { studentId: "ST001", fullName: "Vinky", gradeLevel: 11 }, course: { courseId: "BE101", courseTitle: "Backend Development", instructorName: "Dewi Lestari", totalLearningHours: 40 }, registrationDate: "2026-08-20", isPaymentCompleted: true },
	{ student: { studentId: "ST002", fullName: "Reva Fidela Adel Pantjoro", gradeLevel: 12 }, course: { courseId: "FE101", courseTitle: "Frontend Development", instructorName: "Bambang Setiawan", totalLearningHours: 36 }, registrationDate: "2026-08-21", isPaymentCompleted: false },
	{ student: { studentId: "ST003", fullName: "Lintang Putra Ramadhan", gradeLevel: 10 }, course: { courseId: "TS101", courseTitle: "TypeScript Fundamentals", instructorName: "Rina Maharani", totalLearningHours: 24 }, registrationDate: "2026-08-22", isPaymentCompleted: true },
];

console.log(registrations);