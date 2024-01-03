import React, { useEffect, useState } from 'react';
import { Task } from 'src/common/entities/task';
import { getDatesOfWeek } from 'src/common/helpers/get-dates-of-week';
import { useUser } from 'src/common/hooks/use-auth';
import { useWeekParam } from 'src/common/hooks/use-week-and-year';
import { Table } from 'src/components/table';
import { TaskList } from 'src/components/task-list';
import { Title } from 'src/components/title';
import { TasksDal } from 'src/data-access-logic/tasks/tasks.dal';
import styles from 'src/pages/week-page/week-page.module.scss';

const WeekPage = () => {
  const user = useUser();
  const { year, weekNumber } = useWeekParam();
  const [tasks, setTasks] = useState<Task[]>([]);
  const week = getDatesOfWeek(year, weekNumber);

  if (!user) {
    return null;
  }

  const loadTasks = async () => {
    const userTasks = await TasksDal.getTasksByUserIdAndYearAndWeek(
      user.id,
      year,
      weekNumber,
    );
    setTasks(userTasks);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <>
      <Title
        className={styles.title}
        size="small"
      >{`${week[0]} - ${week[6]}`}</Title>
      <div className={styles.mainBlock}>
        <div>
          <Table tasks={tasks} />
        </div>
        <div className={styles.tasksList}>
          <TaskList
            user={user}
            tasks={tasks}
            week={+weekNumber}
            year={+year}
            setTasks={setTasks}
          />
        </div>
      </div>
    </>
  );
};

export default WeekPage;
