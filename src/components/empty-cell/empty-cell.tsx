import classNames from 'classnames';
import React from 'react';
import { StateStatus } from 'src/common/constants/state-status';
import { State } from 'src/common/entities/state';
import styles from 'src/components/empty-cell/empty-cell.module.scss';
import {
  StatesDal,
  StateWithoutId,
} from 'src/data-access-logic/states/states.dal';

interface EmptyCellProps {
  taskId: string;
  date: Date;
  setStates: React.Dispatch<React.SetStateAction<State[]>>;
}

const EmptyCell = ({ taskId, date, setStates }: EmptyCellProps) => {
  const addNewState = async () => {
    const newState: StateWithoutId = {
      taskId,
      date,
      status: StateStatus.Empty,
    };
    const state = await StatesDal.createState(newState);

    setStates((prevData: State[]) => [...prevData, state]);
  };

  return (
    <div
      className={classNames('cell', styles.emptyCell)}
      onClick={addNewState}
    ></div>
  );
};

export default EmptyCell;
