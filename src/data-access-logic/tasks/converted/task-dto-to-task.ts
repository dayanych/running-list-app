import { TaskDto } from 'src/common/dto/task.dto';
import { Task } from 'src/common/entities/task';

export const converterTaskDtoToTask = (taskDto: TaskDto): Task => {
  return {
    id: taskDto.id,
    name: taskDto.name,
    week: taskDto.week,
    year: taskDto.year,
    userId: taskDto.user_id,
    stateIds: taskDto.state_ids,
    createdAt: taskDto.created_at,
  };
};
