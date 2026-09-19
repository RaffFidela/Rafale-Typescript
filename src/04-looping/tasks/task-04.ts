/**
 * An online store wants to analyze today's sales transactions.
 * The amount for each transaction is entered manually from the terminal.
 *
 * Student task in calculate:
 * 1. Total sales revenue
 * 2. Highest transaction
 * 3. Lowest transaction
 * 4. Number of transactions worth Rp300,000 or more
 * 5. Average transaction value
 */

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

async function main(): Promise<void> {
    const rl = readline.createInterface({ input, output });

    const totalTransactionsInput = await rl.question("How many sales transactions do you want to enter? ");
    const totalTransactions = Number(totalTransactionsInput);

    if (!Number.isInteger(totalTransactions) || totalTransactions <= 0) {
        console.log("Please enter a valid positive number of transactions.");
        await rl.close();
        process.exit(1);
    }

    const sales: number[] = [];

    for (let i = 1; i <= totalTransactions; i++) {
        const saleInput = await rl.question(`Enter transaction ${i} amount: `);
        const sale = Number(saleInput);

        if (!Number.isFinite(sale)) {
            console.log("Please enter a valid number for the transaction amount.");
            await rl.close();
            process.exit(1);
        }

        sales.push(sale);
    }

    await rl.close();

    let totalSales: number = 0;
    let highestTransaction: number = sales[0];
    let lowestTransaction: number = sales[0];
    let largeTransactionCount: number = 0;

    for (const sale of sales) {
        totalSales += sale;

        if (sale > highestTransaction) {
            highestTransaction = sale;
        }

        if (sale < lowestTransaction) {
            lowestTransaction = sale;
        }

        if (sale >= 300000) {
            largeTransactionCount++;
        }
    }

    const averageTransaction: number = totalSales / sales.length;

    console.log("\nTotal sales revenue:", totalSales);
    console.log("Highest transaction:", highestTransaction);
    console.log("Lowest transaction:", lowestTransaction);
    console.log("Transactions worth Rp300,000 or more:", largeTransactionCount);
    console.log("Average transaction value:", averageTransaction);
}

main();

