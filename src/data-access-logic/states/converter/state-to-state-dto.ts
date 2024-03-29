import { Timestamp } from 'firebase/firestore';
import { StateDto } from 'src/common/dto/state.dto';
import { State } from 'src/common/entities/state';

export const converterStateToStateDto = (state: State): StateDto => {
  return {
    id: state.id,
    date: Timestamp.fromDate(state.date),
    status: state.status,
    task_id: state.taskId,
  };
};
