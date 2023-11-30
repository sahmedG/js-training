function letterSpaceNumber(inputString) {
    const result = [];
    const regex = /[a-zA-Z] \d(?![a-zA-Z])/g;
    const matches = inputString.match(regex);
    if (matches) {
      matches.forEach(match => {
        result.push(match);
      });
    }
    return result;
}