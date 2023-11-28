function nasa(N) {
    if (!Number.isInteger(N) || N <= 0) {
      throw new Error("Invalid input. Please provide a positive integer.");
    }
  
    let result = '';
    for (let i = 1; i <= N; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        result += 'NASA ';
      } else if (i % 3 === 0) {
        result += 'NA ';
      } else if (i % 5 === 0) {
        result += 'SA ';
      } else {
        result += i + ' ';
      }
    }
  
    return result.trim(); // Remove trailing space
  }