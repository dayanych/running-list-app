export const getWeekNumber = (date: Date): number => {
  const onejan = new Date(date.getFullYear(), 0, 1);
  const days = Math.floor(
    (date.valueOf() - onejan.valueOf()) / (24 * 60 * 60 * 1000),
  );

  return Math.ceil(days / 7);
};
