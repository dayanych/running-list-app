const getFirstDateOfWeek = (year: number, weekNumber: number): Date => {
  const date = new Date(year, 0, 1);
  const dayOfWeek = date.getDay();
  date.setDate(
    date.getDate() + (dayOfWeek <= 4 ? 1 - dayOfWeek : 8 - dayOfWeek),
  );
  date.setDate(date.getDate() + (weekNumber - 1) * 7);
  return date;
};

export const getDatesOfWeek = (
  year: number,
  weekNumber: number,
): {
  week: string[];
  firstDate: Date;
} => {
  const date = getFirstDateOfWeek(year, weekNumber);
  const firstDate = new Date(date);
  const dates = [];

  for (let i = 0; i < 7; i++) {
    date.setDate(date.getDate() + (i > 0 ? 1 : 0));
    dates.push(date.toLocaleString('ru-RU', { day: '2-digit' }));
  }
  return { week: dates, firstDate };
};
