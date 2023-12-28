import { State } from 'src/common/entities/state';
import { converterStateDtoToState } from 'src/data-access-logic/states/converter/state-dto-to-state';
import { converterStateToStateDto } from 'src/data-access-logic/states/converter/state-to-state-dto';
import { StatesService } from 'src/service/states/states-service';

type StateWithoutId = Omit<State, 'id'>;

export class StatesDal {
  public static async getStatesByTaskId(taskId: string): Promise<State[]> {
    const statesDto = await StatesService.getStatesByTaskId(taskId);

    if (!statesDto) {
      return [];
    }

    const states = statesDto.map((stateDto) =>
      converterStateDtoToState(stateDto),
    );

    return states;
  }

  public static async createState(state: StateWithoutId) {
    const stateDtoWithoutId = {
      date: state.date,
      status: state.status,
      task_id: state.taskId,
    };

    await StatesService.createState(stateDtoWithoutId);
  }

  public static async updateState(state: State) {
    const stateDto = converterStateToStateDto(state);

    await StatesService.updateState(stateDto);
  }

  public static async deleteState(stateId: string) {
    await StatesService.deleteState(stateId);
  }
}
