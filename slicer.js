function slice(input, start, end) {
    if (Array.isArray(input) || typeof input === 'string') {
        const inputString = String(input);
        return inputString.slice(start, end);
    }
  }