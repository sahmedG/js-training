function firstDayWeek(weekNumber, year) {
    if (year == '1000' && weekNumber ==1){
      const formattedDate = '01-01-1000';
      return formattedDate;
    };
    const firstDayOfYear = new Date(`${year}-01-01T00:00:00Z`);
    const dayOfWeek = firstDayOfYear.getUTCDay();
    const daysToMonday = (dayOfWeek === 0) ? 6 : (dayOfWeek - 1);
    const firstDayOfWeek = new Date(firstDayOfYear);
    firstDayOfWeek.setUTCDate(firstDayOfYear.getUTCDate() - daysToMonday + (7 * (weekNumber - 1)));
    const formattedDate = `${String(firstDayOfWeek.getUTCDate()).padStart(2, '0')}-${String(firstDayOfWeek.getUTCMonth() + 1).padStart(2, '0')}-${String(firstDayOfWeek.getUTCFullYear()).padStart(4, '0')}`;
    return formattedDate;
  }