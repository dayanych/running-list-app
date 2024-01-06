import React from 'react';
import { daysOfWeek } from 'src/common/constants/days-of-week';
import { Task } from 'src/common/entities/task';
import { getDatesOfWeek } from 'src/common/helpers/get-dates-of-week';
import { useWeekParam } from 'src/common/hooks/use-week-and-year';
import { Row } from 'src/components/row';
import styles from 'src/components/table/table.module.scss';

interface TableProps {
  tasks: Task[];
}

const Table = ({ tasks }: TableProps) => {
  const { year, weekNumber } = useWeekParam();
  const { week } = getDatesOfWeek(year, weekNumber);

  return (
    <table className={styles.table}>
      <tr className={styles.headTable}>
        {week.map((date, index) => {
          const dayName = daysOfWeek[index];

          return (
            <th key={dayName}>
              <div>{dayName}</div>
              <div className={styles.dateValue}>{date}</div>
            </th>
          );
        })}
      </tr>

      {tasks.map((task) => (
        <Row taskId={task.id} key={task.id} />
      ))}
    </table>
  );
};

export default Table;
