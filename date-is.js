function isAfter(date1, date2) {
  return date1.getTime() > date2.getTime();
}

function isBefore(date1, date2) {
  return date1.getTime() < date2.getTime();
}

function isFuture(date) {
  if (!isValid(date)) {
    return false;
  }
  const presentDate = new Date();
  return isAfter(date, presentDate);
}

function isPast(date) {
  if (!isValid(date)) {
    return false;
  }
  const presentDate = new Date();
  return isBefore(date, presentDate);
}