const db = (() => {
    // ... (provided code)
  
    return {
      getWinner: async (countryName) => {
        const match = countries.find((country) => country.name === countryName);
        if (!match) throw Error('Country Not Found');
        return match;
      },
      getResults: async (countryId) => {
        const match = results.filter((result) => result.countryId === countryId);
        if (!match.length) throw Error('Results Not Found');
        return match;
      },
    };
  })();
  
  function isWinner(countryName) {
    return new Promise(async (resolve, reject) => {
      try {
        const country = await db.getWinner(countryName);
  
        if (country.continent !== 'Europe') {
          resolve(`${country.name} is not what we are looking for because of the continent`);
          return;
        }
  
        const results = await db.getResults(country.id);
  
        if (results.length === 0) {
          resolve(`${country.name} never was a winner`);
          return;
        }
  
        if (results.length < 3) {
          resolve(`${country.name} is not what we are looking for because of the number of times it was champion`);
          return;
        }
  
        const formattedResults = results.map((result) => `${result.year} winning by ${result.score}`).join(', ');
  
        resolve(`${country.name} won the FIFA World Cup in ${formattedResults}`);
      } catch (error) {
        reject(error.message);
      }
    });
  }
  