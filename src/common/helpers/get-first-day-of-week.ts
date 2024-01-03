export const getFirstDateOfWeek = (year: number, weekNumber: number): Date => {
  const date = new Date(year, 0, 1 + (weekNumber - 1) * 7);

  return date;
};
