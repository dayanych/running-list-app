import { Timestamp } from 'firebase/firestore';
import { State } from 'src/common/entities/state';
import { converterStateDtoToState } from 'src/data-access-logic/states/converter/state-dto-to-state';
import { converterStateToStateDto } from 'src/data-access-logic/states/converter/state-to-state-dto';
import { StatesService } from 'src/service/states/states.service';

export type StateWithoutId = Omit<State, 'id'>;

export class StatesDal {
  public static async getStatesByTaskId(taskId: string): Promise<State[]> {
    const statesDto = await StatesService.getStatesByTaskId(taskId);

    const states = statesDto.map((stateDto) =>
      converterStateDtoToState(stateDto),
    );

    return states;
  }

  public static async createState(state: StateWithoutId): Promise<State> {
    const stateDtoWithoutId = {
      date: Timestamp.fromDate(state.date),
      status: state.status,
      task_id: state.taskId,
    };

    const stateDto = await StatesService.createAndGetState(stateDtoWithoutId);

    return converterStateDtoToState(stateDto);
  }

  public static async updateState(state: State) {
    const stateDto = converterStateToStateDto(state);

    await StatesService.updateState(stateDto);
  }

  public static async deleteState(stateId: string) {
    await StatesService.deleteState(stateId);
  }
}
