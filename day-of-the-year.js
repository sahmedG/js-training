function dayOfTheYear(date) {
  const clonedDate = new Date(date);
  clonedDate.setMonth(0, 1);
  const timeDifference = date - clonedDate;
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return daysDifference+1;
}