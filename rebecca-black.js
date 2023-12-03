function isFriday(date) {
    return date.getDay() === 5;
  }
  
  function isWeekend(date) {
    const dayOfWeek = date.getDay();
    return dayOfWeek === 0 || dayOfWeek === 6; 
  }

  function isLeapYear(date) {
    const year = date.getFullYear();
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }
  
  function isLastDayOfMonth(date) {
    const nextDay = new Date(date);
    nextDay.setDate(date.getDate() + 1);
    return nextDay.getMonth() !== date.getMonth();
  }
  