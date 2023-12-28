import { Task } from 'src/common/entities/task';
import { converterTaskDtoToTask } from 'src/data-access-logic/tasks/converted/task-dto-to-task';
import { convertedTaskToTaskDto } from 'src/data-access-logic/tasks/converted/task-to-task-dto';
import { TasksService } from 'src/service/tasks/tasks.service';

type TaskWithoutId = Omit<Task, 'id'>;

export class TasksDal {
  public static async getTasksByUserIdAndWeek(
    userId: string,
    week: number,
  ): Promise<Task[]> {
    const tasksDto = await TasksService.getTasksByUserIdAndWeek(userId, week);
    const tasks = tasksDto.map((task) => converterTaskDtoToTask(task));

    return tasks;
  }

  public static async createTask(
    taskDtoWithoutId: TaskWithoutId,
  ): Promise<void> {
    const taskDto = {
      name: taskDtoWithoutId.name,
      user_id: taskDtoWithoutId.userId,
      state_ids: taskDtoWithoutId.stateIds,
      week: taskDtoWithoutId.week,
      year: taskDtoWithoutId.year,
      created_at: new Date(),
    };

    await TasksService.createTask(taskDto);
  }

  public static async updateTask(task: Task): Promise<void> {
    const taskDto = convertedTaskToTaskDto(task);

    await TasksService.updateTask(taskDto);
  }

  public static async deleteTask(taskId: string): Promise<void> {
    await TasksService.deleteTask(taskId);
  }
}
