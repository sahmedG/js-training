function slice(input, start, end) {
    if (Array.isArray(input) || typeof input === 'string') {
        const inputString = String(input);
        return inputString.slice(start, end);
    } else {
      throw new Error('Invalid input. The input must be an array or a string.');
    }
  }