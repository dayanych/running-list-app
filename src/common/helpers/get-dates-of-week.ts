export const getDatesOfWeek = (year: number, weekNumber: number): string[] => {
  const date = new Date(year, 0, 1 + (weekNumber - 1) * 7);
  const dates = [];

  for (let i = 0; i < 7; i++) {
    date.setDate(date.getDate() + (i > 0 ? 1 : 0));
    dates.push(
      date.toLocaleString('ru-RU', { day: '2-digit', month: '2-digit' }),
    );
  }
  return dates;
};
