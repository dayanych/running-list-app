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
import { PATH_TO_STATES_COLLECTION } from 'src/common/constants/paths';
import { StateDto } from 'src/common/dto/state.dto';
import { db } from 'src/service/config/firebase.config';

type StateDtoWithoutId = Omit<StateDto, 'id'>;

export class StatesService {
  public static getStatesByTaskId = async (
    taskId: string,
  ): Promise<StateDto[]> => {
    const statesCollectionRef = collection(db, PATH_TO_STATES_COLLECTION);
    const statesSnaphots = await getDocs(
      query(statesCollectionRef, where('task_id', '==', taskId)),
    );

    return statesSnaphots.docs.map((stateDoc) => stateDoc.data() as StateDto);
  };

  public static async createAndGetState(
    stateWithoutIdDto: StateDtoWithoutId,
  ): Promise<StateDto> {
    const docRef = doc(collection(db, PATH_TO_STATES_COLLECTION));
    const stateDto: StateDto = {
      ...stateWithoutIdDto,
      id: docRef.id,
    };

    await setDoc(docRef, stateDto);

    return stateDto;
  }

  public static async updateState(stateDto: StateDto): Promise<void> {
    await updateDoc(doc(db, PATH_TO_STATES_COLLECTION, stateDto.id), { ...stateDto, });
  }

  public static async deleteState(stateId: string): Promise<void> {
    await deleteDoc(doc(db, PATH_TO_STATES_COLLECTION, stateId));
  }
}
