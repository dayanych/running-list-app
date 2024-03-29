import { getWeekNumber } from 'src/common/helpers/get-week-number';

export const getMaxWeek = (year: number): number => {
  const date = new Date(year, 11, 31);

  return getWeekNumber(date);
};
