import { faArrowRight, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React from 'react';
import { StateStatus } from 'src/common/constants/state-status';
import styles from 'src/components/status-display/status-display.module.scss';

interface StatusDisplayProps {
  status: number;
  className?: string;
}

const StatusDisplay = ({ status, className }: StatusDisplayProps) => {
  return (
    <div className={classNames(styles.status, className)}>
      {status === StateStatus.Empty && <div className={styles.empty}></div>}
      {status === StateStatus.FullDone && (
        <div className={styles.fullDone}></div>
      )}
      {status === StateStatus.HalfDone && (
        <div className={styles.halfDone}></div>
      )}
      {status === StateStatus.Delay && (
        <div className={styles.delay}>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      )}
      {status === StateStatus.Failed && (
        <div className={styles.failed}>
          <FontAwesomeIcon icon={faXmark} />
        </div>
      )}
    </div>
  );
};

export default StatusDisplay;
