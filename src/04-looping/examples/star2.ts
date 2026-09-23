function printInvertedTriangle(rows: number): void {
  for (let i = rows; i >= 1; i--) {
    console.log("*".repeat(i));
  }
}

printInvertedTriangle(5);