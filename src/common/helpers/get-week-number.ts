export const getWeekNumber = (date: Date): number => {
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + 4 - (date.getDay() || 7));
  const yearStart = new Date(date.getFullYear(), 0, 1);
  const weekNo = Math.ceil(
    ((date.valueOf() - yearStart.valueOf()) / 86400000 + 1) / 7,
  );
  return weekNo;
};
