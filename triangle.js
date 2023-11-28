function triangle(character, height) {
    let result = '';
  
    for (let i = 1; i <= height; i++) {
      result += character.repeat(i) + '\n';
    }
  
    return result;
  }