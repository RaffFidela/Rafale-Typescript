function printHalfDiamondNested(maxStars: number): void {
  for (let i = 1; i <= maxStars; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += "*";
    }
    console.log(line);
  }

  for (let i = maxStars - 1; i >= 1; i--) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += "*";
    }
    console.log(line);
  }
}

printHalfDiamondNested(3);