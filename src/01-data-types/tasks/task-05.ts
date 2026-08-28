/**
 * A software company records daily employee attendance. 
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time, 
 * total working hours, and whether the employee was present on that day.
 * 
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 * 
 * display the attendance data using console.log.
 */

type Product = {
	productCode: string;
	productName: string;
	sellingPrice: number;
	stockQuantity: number;
	weightInGrams: number;
	averageRating: number;
	isDiscounted: boolean;
};

const products: Product[] = [
	{ productCode: "LP001", productName: "Laptop Lenovo LOQ 15AHP11", sellingPrice: 22500000, stockQuantity: 12, weightInGrams: 1400, averageRating: 4.8, isDiscounted: true },
	{ productCode: "PH002", productName: "iPhone 11 256", sellingPrice: 7500000, stockQuantity: 25, weightInGrams: 190, averageRating: 4.6, isDiscounted: false },
	{ productCode: "KB003", productName: "Mechanical Keyboard", sellingPrice: 850000, stockQuantity: 40, weightInGrams: 900, averageRating: 4.7, isDiscounted: true },
];

console.log(products);