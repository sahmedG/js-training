function pronoun(str) {
    const pronouns = ['i', 'you', 'he', 'she', 'it', 'they', 'we'];
  
    const pronounOccurrences = pronouns.reduce((acc, pronoun) => {
      const regex = new RegExp(`\\b${pronoun}\\b`, 'gi');
      const matches = str.match(regex);
  
      if (matches) {
        acc[pronoun] = {
          word: matches.map((match) => {
            const index = str.indexOf(match) + match.length + 1;
            const nextWord = str.slice(index, str.indexOf(' ', index) !== -1 ? str.indexOf(' ', index) : undefined).replace('\n', '');
            return nextWord;
          }),
          count: matches.length,
        };
      }
  
      return acc;
    }, {});
  
    return pronounOccurrences;
  }