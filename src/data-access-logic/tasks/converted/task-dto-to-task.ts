import { TaskDto } from 'src/common/dto/task.dto';
import { Task } from 'src/common/entities/task';

export const converterTaskDtoToTask = (taskDto: TaskDto): Task => {
  return {
    id: taskDto.id,
    title: taskDto.title,
    week: taskDto.week,
    year: taskDto.year,
    color: taskDto.color,
    userId: taskDto.user_id,
    createdAt: taskDto.created_at,
  };
};
