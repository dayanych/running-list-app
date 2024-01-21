import React, { useEffect, useState } from 'react';
import { Task } from 'src/common/entities/task';
import { useUser } from 'src/common/hooks/use-auth';
import { useWeekParam } from 'src/common/hooks/use-week-and-year';
import { StatesTable } from 'src/components/table';
import { TaskList } from 'src/components/task-list';
import { WeekPicker } from 'src/components/week-picker';
import { TasksDal } from 'src/data-access-logic/tasks/tasks.dal';
import styles from 'src/pages/week-page/week-page.module.scss';

const WeekPage = () => {
  const user = useUser();
  const { year, weekNumber } = useWeekParam();
  const [tasks, setTasks] = useState<Task[]>([]);

  const loadTasks = async () => {
    if (user) {
      const userTasks = await TasksDal.getTasksByUserIdAndYearAndWeek(
        user.id,
        year,
        weekNumber,
      );
      setTasks(userTasks);
    }
  };

  useEffect(() => {
    loadTasks();
  }, [weekNumber]);

  if (!user) {
    return null;
  }

  return (
    <>
      <WeekPicker />
      <div className={styles.mainBlock}>
        <div>
          <StatesTable tasks={tasks} />
        </div>
        <div className={styles.tasksList}>
          <TaskList
            user={user}
            tasks={tasks}
            week={weekNumber}
            year={year}
            setTasks={setTasks}
          />
        </div>
      </div>
    </>
  );
};

export default WeekPage;
