import { daysOfWeek } from 'src/common/constants/days-of-week';
import { State } from 'src/common/entities/state';
import { getNumberOfDayInWeek } from 'src/common/helpers/get-number-of-day-in-week';

export const createWeekWithStates = (states: State[], startDate: Date) => {
  const weekWithState: { [key: string]: { date: Date; state: State | null } } =
    {};

  for (let i = 0; i < 7; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    weekWithState[daysOfWeek[i]] = {
      date,
      state: null,
    };
  }

  states.forEach((state) => {
    const dayIndex = getNumberOfDayInWeek(state.date);
    weekWithState[daysOfWeek[dayIndex]] = {
      date: state.date,
      state,
    };
  });

  return weekWithState;
};
