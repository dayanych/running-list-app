import { format } from 'date-fns';

export const getNumberOfDayInWeek = (date: Date) => {
  return +format(date, 'i') - 1;
};
