import { State } from 'src/common/entities/state';
import { StateDto } from 'src/service/states/state.dto';

export const converterStateToStateDto = (state: State): StateDto => {
  return {
    id: state.id,
    date: state.date,
    status: state.status,
    task_id: state.taskId,
  };
};
