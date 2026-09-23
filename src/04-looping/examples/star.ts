function printTriangle(rows: number): void {
  for (let i = 1; i <= rows; i++) {
    console.log("*".repeat(i));
  }
}

printTriangle(5);