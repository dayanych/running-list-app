import { StateDto } from 'src/common/dto/state.dto';
import { State } from 'src/common/entities/state';

export const converterStateToStateDto = (state: State): StateDto => {
  return {
    id: state.id,
    date: state.date,
    status: state.status,
    task_id: state.taskId,
  };
};
