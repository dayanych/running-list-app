import { TaskDto } from 'src/common/dto/task.dto';
import { Task } from 'src/common/entities/task';

export const convertedTaskToTaskDto = (task: Task): TaskDto => {
  return {
    id: task.id,
    name: task.name,
    week: task.week,
    year: task.year,
    user_id: task.userId,
    state_ids: task.stateIds,
    created_at: task.createdAt,
  };
};
