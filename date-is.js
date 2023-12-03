function firstDayWeek(week, year) {
    const januaryFirst = new Date(`${year}-01-01`);
    const dayOfWeek = januaryFirst.getDay();

    const offset = dayOfWeek === 0 ? 1 : 8 - dayOfWeek;
  
    const firstDay = new Date(januaryFirst);
    firstDay.setDate(januaryFirst.getDate() + offset + (week - 1) * 7);

    const dd = String(firstDay.getDate()).padStart(2, '0');
    const mm = String(firstDay.getMonth() + 1).padStart(2, '0');
    const yyyy = firstDay.getFullYear();
  
    return `${dd}-${mm}-${yyyy}`;
  }
  