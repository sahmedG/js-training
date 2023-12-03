function matchCron(cronPattern, date) {
    const cronParts = cronPattern.split(' ');
    const [minute, hour, dayOfMonth, month, dayOfWeek] = cronParts;
    const dateMinute = date.getMinutes();
    const dateHour = date.getHours();
    const dateDayOfMonth = date.getDate();
    const dateMonth = date.getMonth() + 1;
    const dateDayOfWeek = date.getDay();
    const matchMinute = minute === '*' || Number(minute) === dateMinute;
    const matchHour = hour === '*' || Number(hour) === dateHour;
    const matchDayOfMonth = dayOfMonth === '*' || Number(dayOfMonth) === dateDayOfMonth;
    const matchMonth = month === '*' || Number(month) === dateMonth;
    const matchDayOfWeek = dayOfWeek === '*' || Number(dayOfWeek) === dateDayOfWeek + 1; 
  
    return matchMinute && matchHour && matchDayOfMonth && matchMonth && matchDayOfWeek;
  }