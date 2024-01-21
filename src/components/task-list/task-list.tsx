import { DeleteTwoTone, PlusCircleTwoTone } from '@ant-design/icons';
import { Space } from 'antd';
import React from 'react';
import { colors } from 'src/assets/themes/colors';
import { Task } from 'src/common/entities/task';
import { User } from 'src/common/entities/user';
import { EditableText } from 'src/components/editable-text';
import styles from 'src/components/task-list/task-list.module.scss';
import { TasksDal } from 'src/data-access-logic/tasks/tasks.dal';

interface TaskListProps {
  tasks: Task[];
  user: User;
  week: number;
  year: number;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskList = ({ tasks, user, week, year, setTasks }: TaskListProps) => {
  const addNewTask = async () => {
    const newTask: Omit<Task, 'id'> = {
      title: '',
      userId: user.id,
      week,
      year,
      color: '',
      createdAt: new Date(),
    };

    const task = await TasksDal.createTask(newTask);
    setTasks((prevData) => [...prevData, task]);
  };

  const deleteTask = async (taskId: string) => {
    await TasksDal.deleteTask(taskId);
    setTasks((prevData) => prevData.filter((item) => item.id !== taskId));
  };

  const changeTaskTitle = async (task: Task, title: string) => {
    const updatedTask = { ...task, title };
    await TasksDal.updateTask(updatedTask);
    setTasks((prevData) =>
      prevData.map((prevTask) =>
        prevTask.id === task.id ? updatedTask : prevTask,
      ),
    );
  };

  return (
    <div>
      <ul className={styles.list}>
        {tasks.map((task) => (
          <li key={task.id} className={styles.taskItemBlock}>
            <Space>
              <EditableText
                title={task.title}
                onChangeFinish={(text) => changeTaskTitle(task, text)}
              />
              <DeleteTwoTone
                onClick={() => deleteTask(task.id)}
                twoToneColor={colors.dangerIcon}
              />
            </Space>
          </li>
        ))}
      </ul>
      <PlusCircleTwoTone
        className={styles.addButton}
        onClick={addNewTask}
        twoToneColor={colors.plusIcon}
      />
    </div>
  );
};

export default TaskList;
