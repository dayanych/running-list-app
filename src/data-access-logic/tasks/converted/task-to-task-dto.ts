import { TaskDto } from 'src/common/dto/task.dto';
import { Task } from 'src/common/entities/task';

export const convertedTaskToTaskDto = (task: Task): TaskDto => {
  return {
    id: task.id,
    title: task.title,
    week: task.week,
    year: task.year,
    color: task.color,
    user_id: task.userId,
    created_at: task.createdAt,
  };
};
