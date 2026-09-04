/**
 * An online store is processing a customer's shopping cart.
 * The customer purchased:
 * 
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Mouse Pad           | 120000 |        1 |
 * 
 * Business Rules:
 * - Customers receive 10% discount if the total purchase exceeds Rp1,000,000.
 * - Only Premium members receive free shipping.
 * - Every purchased product increases the total item counter.
 * 
 * Additional Information: Current customer is Premium member.
 * 
 * Task:
 *  - Calculate subtotal.
 *  - Count the total purchased items using an increment operator.
 *  - Determine whether a discount should be applied.
 *  - Calculate the final payment.

 */

const keyboardPrice: number = 850000;
const keyboardQuantity: number = 1;
const mousePrice: number = 275000;
const mouseQuantity: number = 2;
const mousePadPrice: number = 120000;
const mousePadQuantity: number = 1;
const isPremiumMember: boolean = true;

let totalItems: number = 0;
totalItems += keyboardQuantity;
totalItems += mouseQuantity;
totalItems += mousePadQuantity;

const subtotal: number = keyboardPrice * keyboardQuantity + mousePrice * mouseQuantity + mousePadPrice * mousePadQuantity;
const discountRate: number = subtotal > 1000000 ? 0.1 : 0;
const discountAmount: number = subtotal * discountRate;
const finalPayment: number = subtotal - discountAmount;
const hasFreeShipping: boolean = isPremiumMember;

console.log("Subtotal:", subtotal);
console.log("Total items:", totalItems);
console.log("Discount applied:", discountRate > 0);
console.log("Final payment:", finalPayment);
console.log("Free shipping:", hasFreeShipping);