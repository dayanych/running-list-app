import { Timestamp } from 'firebase/firestore';
import { StateDto } from 'src/common/dto/state.dto';
import { State } from 'src/common/entities/state';

export const converterStateDtoToState = (stateDto: StateDto): State => {
  const timestamp = new Timestamp(
    stateDto.date.seconds,
    stateDto.date.nanoseconds,
  );

  return {
    id: stateDto.id,
    date: timestamp.toDate(),
    status: stateDto.status,
    taskId: stateDto.task_id,
  };
};
