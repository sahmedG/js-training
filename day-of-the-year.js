function dayOfTheYear(date) {
    const startOfYear = new Date(date.getFullYear(), 0, 1);
    const millisecondsInDay = 24 * 60 * 60 * 1000;
    const daysDifference = Math.floor((date - startOfYear) / millisecondsInDay);
  
    return daysDifference++;
  }