import classNames from 'classnames';
import React from 'react';
import { State } from 'src/common/entities/state';
import { Dropdown } from 'src/components/filled-cell/components/dropdown';
import styles from 'src/components/filled-cell/filled-cell.module.scss';
import { StatusDisplay } from 'src/components/status-display';
import { StatesDal } from 'src/data-access-logic/states/states.dal';

interface FilledCellProps {
  state: State;
  setStates: React.Dispatch<React.SetStateAction<State[]>>;
}

const FilledCell = ({ state, setStates }: FilledCellProps) => {
  const updateState = async (status: number) => {
    const updatedState: State = {
      ...state,
      status,
    };

    await StatesDal.updateState(updatedState);
    setStates((prevData: State[]) =>
      prevData.map((item) => (item.id === state.id ? updatedState : item)),
    );
  };

  const deleteState = async () => {
    await StatesDal.deleteState(state.id);

    setStates((prevData: State[]) =>
      prevData.filter((item) => item.id !== state.id),
    );
  };

  return (
    <Dropdown updateState={updateState} deleteState={deleteState}>
      <div className={classNames('cell', styles.filledCell)}>
        <StatusDisplay status={state.status} />
      </div>
    </Dropdown>
  );
};

export default FilledCell;
