/**
 * An internet café charges customers Rp8,000 per hour. 
 * Customers are billed for every started hour. If the total playing time exceeds 5 hours, they receive a 15% discount.
 * Today, a customer used a computer for:
 * 7 hours and 35 minutes
 * 
 * 
 * You need to determine:
 * - Total playing time in minutes
 * - Remaining minutes after full hours
 * - Total billed hours
 * - Total payment before discount
 * - Discount amount
 * - Final payment
 */

const hoursPlayed: number = 7;
const minutesPlayed: number = 35;
const pricePerHour: number = 8000;
const discountRate: number = 0.15;

const totalPlayingMinutes: number = hoursPlayed * 60 + minutesPlayed;
const remainingMinutes: number = totalPlayingMinutes % 60;
const billedHours: number = Math.ceil(totalPlayingMinutes / 60);
const paymentBeforeDiscount: number = billedHours * pricePerHour;
const discountAmount: number = billedHours > 5 ? paymentBeforeDiscount * discountRate : 0;
const finalPayment: number = paymentBeforeDiscount - discountAmount;

console.log("Total playing time (minutes):", totalPlayingMinutes);
console.log("Remaining minutes:", remainingMinutes);
console.log("Total billed hours:", billedHours);
console.log("Payment before discount:", paymentBeforeDiscount);
console.log("Discount amount:", discountAmount);
console.log("Final payment:", finalPayment);