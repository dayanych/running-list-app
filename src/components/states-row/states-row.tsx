import React, { useEffect, useState } from 'react';
import { daysOfWeek } from 'src/common/constants/days-of-week';
import { State } from 'src/common/entities/state';
import { createWeekWithStates } from 'src/common/helpers/create-week-with-states';
import { getFirstDateOfWeek } from 'src/common/helpers/get-first-day-of-week';
import { useWeekParam } from 'src/common/hooks/use-week-and-year';
import { EmptyCell } from 'src/components/empty-cell';
import { FilledCell } from 'src/components/filled-cell';
import styles from 'src/components/states-row/states-row.module.scss';
import { StatesDal } from 'src/data-access-logic/states/states.dal';

interface StatesRowProps {
  taskId: string;
}

const StatesRow = ({ taskId }: StatesRowProps) => {
  const [states, setStates] = useState<State[]>([]);
  const { year, weekNumber } = useWeekParam();
  const startDate = getFirstDateOfWeek(year, weekNumber);

  const loadStates = async () => {
    const newStates = await StatesDal.getStatesByTaskId(taskId);
    setStates(newStates);
  };

  useEffect(() => {
    loadStates();
  }, []);

  const week = createWeekWithStates(states, startDate);

  return (
    <div className={styles.wrapper}>
      {daysOfWeek.map((day) => {
        const state = week[day].state;
        const date = week[day].date;

        return (
          <div key={day}>
            {state ? (
              <FilledCell state={state} setStates={setStates} />
            ) : (
              <EmptyCell taskId={taskId} date={date} setStates={setStates} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StatesRow;
