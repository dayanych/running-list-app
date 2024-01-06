import moment from 'moment';

const getFirstDateOfWeek = (year: number, weekNumber: number): Date => {
  return moment().year(year).week(weekNumber).day('monday').toDate();
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
    dates.push(
      date.toLocaleString('ru-RU', { day: '2-digit', month: '2-digit' }),
    );
  }
  return { week: dates, firstDate };
};
