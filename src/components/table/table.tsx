import React from 'react';
import { daysOfWeek } from 'src/common/constants/days-of-week';
import { Task } from 'src/common/entities/task';
import { getDatesOfWeek } from 'src/common/helpers/get-dates-of-week';
import { useWeekParam } from 'src/common/hooks/use-week-and-year';
import { StatesRow } from 'src/components/states-row';
import styles from 'src/components/table/table.module.scss';

interface TableProps {
  tasks: Task[];
}

const StatesTable = ({ tasks }: TableProps) => {
  const { year, weekNumber } = useWeekParam();
  const { week } = getDatesOfWeek(year, weekNumber);

  return (
    <div className={styles.table}>
      <div className={styles.headTable}>
        {week.map((date, index) => {
          const dayName = daysOfWeek[index];

          return (
            <div className={styles.dayNameWrapper} key={dayName}>
              <div>{dayName}</div>
              <div className={styles.dateValue}>{date}</div>
            </div>
          );
        })}
      </div>

      {tasks.map((task) => (
        <StatesRow taskId={task.id} key={task.id} />
      ))}
    </div>
  );
};

export default StatesTable;
