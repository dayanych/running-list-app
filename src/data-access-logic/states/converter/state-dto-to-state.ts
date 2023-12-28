import { State } from 'src/common/entities/state';
import { StateDto } from 'src/service/states/state.dto';

export const converterStateDtoToState = (stateDto: StateDto): State => {
  return {
    id: stateDto.id,
    date: stateDto.date,
    status: stateDto.status,
    taskId: stateDto.task_id,
  };
};
