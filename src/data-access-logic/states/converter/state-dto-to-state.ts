import { StateDto } from 'src/common/dto/state.dto';
import { State } from 'src/common/entities/state';

export const converterStateDtoToState = (stateDto: StateDto): State => {
  return {
    id: stateDto.id,
    date: stateDto.date,
    status: stateDto.status,
    taskId: stateDto.task_id,
  };
};
