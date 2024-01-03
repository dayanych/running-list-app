import { Task } from 'src/common/entities/task';
import { StatesDal } from 'src/data-access-logic/states/states.dal';
import { converterTaskDtoToTask } from 'src/data-access-logic/tasks/converted/task-dto-to-task';
import { convertedTaskToTaskDto } from 'src/data-access-logic/tasks/converted/task-to-task-dto';
import { TasksService } from 'src/service/tasks/tasks.service';

type TaskWithoutId = Omit<Task, 'id'>;

export class TasksDal {
  public static async getTasksByUserIdAndYearAndWeek(
    userId: string,
    year: number,
    week: number,
  ): Promise<Task[]> {
    const tasksDto = await TasksService.getTasksByUserIdAndYearAndWeek(
      userId,
      week,
      year,
    );
    const tasks = tasksDto.map((task) => converterTaskDtoToTask(task));

    return tasks;
  }

  public static async createTask(
    taskDtoWithoutId: TaskWithoutId,
  ): Promise<Task> {
    const taskDto = {
      title: taskDtoWithoutId.title,
      user_id: taskDtoWithoutId.userId,
      week: taskDtoWithoutId.week,
      year: taskDtoWithoutId.year,
      color: taskDtoWithoutId.color,
      created_at: new Date(),
    };

    const task = await TasksService.createAndGetTask(taskDto);

    return converterTaskDtoToTask(task);
  }

  public static async updateTask(task: Task): Promise<void> {
    const taskDto = convertedTaskToTaskDto(task);

    await TasksService.updateTask(taskDto);
  }

  public static async deleteTask(taskId: string): Promise<void> {
    await TasksService.deleteTask(taskId);
    const states = await StatesDal.getStatesByTaskId(taskId);
    states.forEach((state) => StatesDal.deleteState(state.id));
  }
}
