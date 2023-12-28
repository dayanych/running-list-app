import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from 'firebase/firestore';
import { PATH_TO_TASKS_COLLECTION } from 'src/common/constants/paths';
import { TaskDto } from 'src/common/dto/task.dto';
import { db } from 'src/service/config/firebase.config';

type TaskDtoWithoutId = Omit<TaskDto, 'id'>;

export class TasksService {
  public static getTasksByUserIdAndWeek = async (
    userId: string,
    week: number,
  ): Promise<TaskDto[]> => {
    const tasksCollectionRef = collection(db, PATH_TO_TASKS_COLLECTION);
    const tasksSnaphots = await getDocs(
      query(
        tasksCollectionRef,
        where('user_id', '==', userId),
        where('week', '==', week),
      ),
    );

    return tasksSnaphots.docs.map((taskDoc) => taskDoc.data() as TaskDto);
  };

  public static async createTask(
    taskDtoWithoutId: TaskDtoWithoutId,
  ): Promise<void> {
    const docRef = doc(collection(db, PATH_TO_TASKS_COLLECTION));
    const taskDto: TaskDto = {
      ...taskDtoWithoutId,
      id: docRef.id,
    };

    await setDoc(docRef, taskDto);
  }

  public static async updateTask(taskDto: TaskDto): Promise<void> {
    await updateDoc(doc(db, PATH_TO_TASKS_COLLECTION, taskDto.id), { ...taskDto, });
  }

  public static async deleteTask(taskId: string): Promise<void> {
    await deleteDoc(doc(db, PATH_TO_TASKS_COLLECTION, taskId));
  }
}
