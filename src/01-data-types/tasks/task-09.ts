/**
 * A programming bootcamp stores information about every participant who registers for the Backend Development class. 
 * Since many students register for the same course, the system stores the participant data as a collection instead of creating separate variables.
 * Today, three students registered for the course.
| Student ID | Name           | Age | Has Paid |
| ---------- | -------------- | --- | -------- |
| ST001      | Ahmad Fauzi    | 16  | Yes      |
| ST002      | Siti Nurhaliza | 17  | No       |
| ST003      | Budi Santoso   | 16  | Yes      |


 * Task:
 * 1. Define a proper type for the participant information.
 * 2. Store the participant data in a single collection.
 * 3. Display the participant data using console.log.
 */

type CartProduct = {
	productCode: string;
	productName: string;
	unitPrice: number;
	quantity: number;
	isFreeShipping: boolean;
};

const cartProducts: CartProduct[] = [
	{ productCode: "KB001", productName: "Mechanical Keyboard", unitPrice: 850000, quantity: 1, isFreeShipping: true },
	{ productCode: "MS002", productName: "Wireless Mouse", unitPrice: 275000, quantity: 2, isFreeShipping: true },
	{ productCode: "HD003", productName: "External SSD 1TB", unitPrice: 1650000, quantity: 1, isFreeShipping: false },
	{ productCode: "HP004", productName: "Gaming Headset", unitPrice: 720000, quantity: 1, isFreeShipping: true },
];

console.log(cartProducts);